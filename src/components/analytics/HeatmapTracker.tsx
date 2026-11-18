"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  HeatmapDevice,
  HeatmapElementKind,
  isHeatmapExcludedPath,
  sanitizeElementLabel,
  sanitizeInternalHref,
} from "@/lib/odgi/heatmap-types";

interface OutgoingEvent {
  type: "click" | "scroll" | "attention";
  path: string;
  device: HeatmapDevice;
  xPct?: number;
  yPct?: number;
  viewportYPct?: number;
  elementKind?: HeatmapElementKind;
  label?: string;
  href?: string;
  isDeadClick?: boolean;
  isRageClick?: boolean;
  depth?: 25 | 50 | 75 | 100;
  seconds?: number;
  maxScrollPct?: number;
}

function getDeviceBucket(): HeatmapDevice {
  const width = window.innerWidth;
  if (width >= 1024) return "desktop";
  if (width >= 640) return "tablet";
  return "mobile";
}

function isPreviewContext(): boolean {
  if (typeof window === "undefined") return true;
  try {
    if (window.self !== window.top) return true;
    const params = new URLSearchParams(window.location.search);
    if (params.get("odgi_preview") === "1") return true;
  } catch {
    return true;
  }
  return false;
}

function classifyElement(target: HTMLElement): {
  kind: HeatmapElementKind;
  label: string;
  href?: string;
  isInteractive: boolean;
} {
  const interactive = target.closest(
    "a, button, summary, [role='button'], [role='tab'], [role='menuitem']"
  ) as HTMLElement | null;

  if (!interactive) {
    const heading = target.closest("h1, h2, h3, h4");
    const card = target.closest("article, [data-slot='card']");
    const rawLabel =
      heading?.textContent ||
      target.getAttribute("aria-label") ||
      target.textContent ||
      target.tagName.toLowerCase();

    return {
      kind: card ? "card" : "other",
      label: sanitizeElementLabel(rawLabel),
      isInteractive: false,
    };
  }

  const tag = interactive.tagName.toLowerCase();
  const inNav = Boolean(interactive.closest("header, nav, footer"));
  const anchor = interactive.closest("a") as HTMLAnchorElement | null;
  const rawHref = anchor?.getAttribute("href") || undefined;
  const href = sanitizeInternalHref(rawHref);

  const labelSource =
    interactive.getAttribute("aria-label") ||
    interactive.getAttribute("title") ||
    interactive.textContent ||
    href ||
    tag;

  const normalizedLabel = sanitizeElementLabel(labelSource);
  const looksLikeCta =
    /consult|book|whatsapp|call|buy|order|explore|request|get started/i.test(
      normalizedLabel
    ) ||
    Boolean(href?.includes("whatsapp")) ||
    Boolean(href?.includes("/contact")) ||
    Boolean(href?.includes("/checkout"));

  let kind: HeatmapElementKind = "link";
  if (looksLikeCta) {
    kind = "cta";
  } else if (inNav) {
    kind = "nav";
  } else if (tag === "button" || interactive.getAttribute("role") === "button") {
    kind = "button";
  } else if (interactive.closest("article, [data-slot='card']")) {
    kind = "card";
  }

  return {
    kind,
    label: normalizedLabel,
    href,
    isInteractive: true,
  };
}

function dispatchBatch(events: OutgoingEvent[]): void {
  if (events.length === 0) return;
  const body = JSON.stringify({ events });
  try {
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/odgi/heatmap/collect", blob);
      return;
    }
    void fetch("/api/odgi/heatmap/collect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    // Never interrupt public visitor UX on telemetry errors
  }
}

export function HeatmapTracker() {
  const pathname = usePathname();
  const queueRef = useRef<OutgoingEvent[]>([]);
  const recentClicksRef = useRef<Array<{ x: number; y: number; time: number }>>([]);

  useEffect(() => {
    if (!pathname || isHeatmapExcludedPath(pathname) || isPreviewContext()) {
      return;
    }

    const currentPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
    const reachedMilestones = new Set<number>();
    let maxScrollPct = 0;
    const enterTime = Date.now();
    let flushTimer: ReturnType<typeof setTimeout> | null = null;

    const flush = () => {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
      if (queueRef.current.length === 0) return;
      const batch = queueRef.current.splice(0, 25);
      dispatchBatch(batch);
    };

    const enqueue = (event: OutgoingEvent, immediate = false) => {
      queueRef.current.push(event);
      if (immediate || queueRef.current.length >= 5) {
        flush();
      } else if (!flushTimer) {
        flushTimer = setTimeout(flush, 2000);
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Privacy safeguard: never record clicks inside forms or editable inputs
      if (
        target.closest("form, input, textarea, select, [contenteditable='true']")
      ) {
        return;
      }

      const docEl = document.documentElement;
      const docWidth = Math.max(docEl.scrollWidth, window.innerWidth, 1);
      const docHeight = Math.max(docEl.scrollHeight, window.innerHeight, 1);

      const xPct = Math.max(0, Math.min(100, (event.pageX / docWidth) * 100));
      const yPct = Math.max(0, Math.min(100, (event.pageY / docHeight) * 100));
      const viewportYPct = Math.max(
        0,
        Math.min(100, (event.clientY / Math.max(window.innerHeight, 1)) * 100)
      );

      // Rage-click detection: 3+ clicks within 1000ms inside a 40px radius
      const now = Date.now();
      recentClicksRef.current = recentClicksRef.current.filter(
        (c) => now - c.time <= 1000
      );
      const nearbyCount = recentClicksRef.current.filter(
        (c) =>
          Math.hypot(c.x - event.clientX, c.y - event.clientY) <= 40
      ).length;
      recentClicksRef.current.push({
        x: event.clientX,
        y: event.clientY,
        time: now,
      });
      const isRageClick = nearbyCount >= 2;

      const info = classifyElement(target);

      enqueue(
        {
          type: "click",
          path: currentPath,
          device: getDeviceBucket(),
          xPct: Math.round(xPct * 100) / 100,
          yPct: Math.round(yPct * 100) / 100,
          viewportYPct: Math.round(viewportYPct * 100) / 100,
          elementKind: info.kind,
          label: info.label,
          href: info.href,
          isDeadClick: !info.isInteractive,
          isRageClick,
        },
        info.kind === "cta" || info.kind === "link" || info.kind === "nav"
      );
    };

    const handleScroll = () => {
      const docEl = document.documentElement;
      const maxScrollable = Math.max(docEl.scrollHeight - window.innerHeight, 1);
      const currentPct = Math.min(
        100,
        Math.round(((window.scrollY + window.innerHeight) / Math.max(docEl.scrollHeight, 1)) * 100)
      );
      if (currentPct > maxScrollPct) {
        maxScrollPct = currentPct;
      }

      const depthPct = Math.min(
        100,
        Math.round((window.scrollY / maxScrollable) * 100)
      );
      const effectivePct = Math.max(currentPct, depthPct);

      const milestones: Array<25 | 50 | 75 | 100> = [25, 50, 75, 100];
      for (const m of milestones) {
        if (effectivePct >= m && !reachedMilestones.has(m)) {
          reachedMilestones.add(m);
          enqueue({
            type: "scroll",
            path: currentPath,
            device: getDeviceBucket(),
            depth: m,
          });
        }
      }
    };

    const recordAttention = () => {
      const elapsedSec = Math.round((Date.now() - enterTime) / 1000);
      if (elapsedSec >= 2) {
        enqueue(
          {
            type: "attention",
            path: currentPath,
            device: getDeviceBucket(),
            seconds: Math.min(600, elapsedSec),
            maxScrollPct: Math.max(maxScrollPct, 10),
          },
          true
        );
      } else {
        flush();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        recordAttention();
      }
    };

    // Initial fold check
    handleScroll();

    document.addEventListener("click", handleClick, { passive: true, capture: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      recordAttention();
    };
  }, [pathname]);

  return null;
}
