import { NextRequest, NextResponse } from "next/server";
import { appendHeatmapEvents } from "@/lib/odgi/heatmap-store";
import {
  HeatmapDevice,
  HeatmapElementKind,
  HeatmapStoredEvent,
  normalizePublicPath,
  sanitizeElementLabel,
  sanitizeInternalHref,
} from "@/lib/odgi/heatmap-types";

const MAX_BATCH_SIZE = 25;
const ALLOWED_DEVICES = new Set<HeatmapDevice>(["desktop", "tablet", "mobile"]);
const ALLOWED_KINDS = new Set<HeatmapElementKind>([
  "cta",
  "link",
  "button",
  "nav",
  "card",
  "other",
]);
const ALLOWED_SCROLL_DEPTHS = new Set([25, 50, 75, 100]);

function clampPct(val: unknown): number | null {
  if (typeof val !== "number" || !Number.isFinite(val)) return null;
  return Math.max(0, Math.min(100, Math.round(val * 100) / 100));
}

export async function POST(request: NextRequest) {
  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json({ accepted: 0 }, { status: 400 });
    }

    const rawList = Array.isArray(payload)
      ? payload
      : typeof payload === "object" &&
          payload !== null &&
          Array.isArray((payload as { events?: unknown[] }).events)
        ? (payload as { events: unknown[] }).events
        : [payload];

    const sanitizedEvents: HeatmapStoredEvent[] = [];
    const nowIso = new Date().toISOString();

    for (const raw of rawList.slice(0, MAX_BATCH_SIZE)) {
      if (!raw || typeof raw !== "object") continue;
      const item = raw as Record<string, unknown>;

      const normalizedPath = normalizePublicPath(String(item.path || ""));
      if (!normalizedPath) continue;

      const device = ALLOWED_DEVICES.has(item.device as HeatmapDevice)
        ? (item.device as HeatmapDevice)
        : "desktop";

      if (item.type === "click") {
        const xPct = clampPct(item.xPct);
        const yPct = clampPct(item.yPct);
        const viewportYPct = clampPct(item.viewportYPct) ?? 0;
        if (xPct === null || yPct === null) continue;

        const elementKind = ALLOWED_KINDS.has(
          item.elementKind as HeatmapElementKind
        )
          ? (item.elementKind as HeatmapElementKind)
          : "other";

        sanitizedEvents.push({
          type: "click",
          path: normalizedPath,
          device,
          xPct,
          yPct,
          viewportYPct,
          elementKind,
          label: sanitizeElementLabel(item.label),
          href: sanitizeInternalHref(item.href),
          isDeadClick: Boolean(item.isDeadClick),
          isRageClick: Boolean(item.isRageClick),
          timestamp: nowIso,
        });
      } else if (item.type === "scroll") {
        const depth = Number(item.depth);
        if (!ALLOWED_SCROLL_DEPTHS.has(depth)) continue;

        sanitizedEvents.push({
          type: "scroll",
          path: normalizedPath,
          device,
          depth: depth as 25 | 50 | 75 | 100,
          timestamp: nowIso,
        });
      } else if (item.type === "attention") {
        const seconds = Number(item.seconds);
        const maxScrollPct = clampPct(item.maxScrollPct);
        if (!Number.isFinite(seconds) || seconds < 1 || maxScrollPct === null) {
          continue;
        }

        sanitizedEvents.push({
          type: "attention",
          path: normalizedPath,
          device,
          seconds: Math.min(600, Math.round(seconds)),
          maxScrollPct,
          timestamp: nowIso,
        });
      }
    }

    const accepted = appendHeatmapEvents(sanitizedEvents);
    return NextResponse.json(
      { ok: true, accepted },
      {
        status: 200,
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch {
    return NextResponse.json({ ok: false, accepted: 0 }, { status: 500 });
  }
}
