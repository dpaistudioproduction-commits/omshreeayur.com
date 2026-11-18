import fs from "fs";
import path from "path";
import {
  HeatmapClickEvent,
  HeatmapDevice,
  HeatmapPageSummary,
  HeatmapReportResponse,
  HeatmapScrollEvent,
  HeatmapStoredEvent,
  HeatmapTopElement,
} from "@/lib/odgi/heatmap-types";

const MAX_STORED_EVENTS = 5000;
const DATA_DIR = path.join(process.cwd(), ".odgi-data");
const DATA_FILE = path.join(DATA_DIR, "heatmap-events.json");

// Fallback in-memory ring buffer if filesystem is read-only (e.g., serverless runtime)
const memoryFallback: HeatmapStoredEvent[] = [];

function readAllEvents(): HeatmapStoredEvent[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [...memoryFallback];
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed as HeatmapStoredEvent[];
    }
    return [...memoryFallback];
  } catch {
    return [...memoryFallback];
  }
}

function writeAllEvents(events: HeatmapStoredEvent[]): void {
  const trimmed =
    events.length > MAX_STORED_EVENTS
      ? events.slice(events.length - MAX_STORED_EVENTS)
      : events;

  memoryFallback.length = 0;
  memoryFallback.push(...trimmed);

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(trimmed), "utf-8");
  } catch {
    // Graceful fallback to memory buffer on read-only filesystems
  }
}

export function appendHeatmapEvents(newEvents: HeatmapStoredEvent[]): number {
  if (newEvents.length === 0) return 0;
  const existing = readAllEvents();
  const combined = [...existing, ...newEvents];
  writeAllEvents(combined);
  return newEvents.length;
}

export function clearHeatmapEvents(): void {
  memoryFallback.length = 0;
  try {
    if (fs.existsSync(DATA_FILE)) {
      fs.unlinkSync(DATA_FILE);
    }
  } catch {
    // Ignore filesystem errors on read-only environments
  }
}

export function buildHeatmapReport(
  requestedPath: string,
  requestedDevice: HeatmapDevice | "all"
): HeatmapReportResponse {
  const allEvents = readAllEvents();

  // Build per-page summary across all tracked pages
  const pageMap = new Map<string, HeatmapPageSummary>();
  for (const ev of allEvents) {
    let summary = pageMap.get(ev.path);
    if (!summary) {
      summary = {
        path: ev.path,
        clicks: 0,
        scrollSessions: 0,
        deadClicks: 0,
        rageClicks: 0,
        lastEventAt: null,
      };
      pageMap.set(ev.path, summary);
    }
    if (!summary.lastEventAt || ev.timestamp > summary.lastEventAt) {
      summary.lastEventAt = ev.timestamp;
    }
    if (ev.type === "click") {
      summary.clicks += 1;
      if (ev.isDeadClick) summary.deadClicks += 1;
      if (ev.isRageClick) summary.rageClicks += 1;
    } else if (ev.type === "scroll" && ev.depth === 25) {
      summary.scrollSessions += 1;
    }
  }

  const pages = Array.from(pageMap.values()).sort(
    (a, b) => b.clicks - a.clicks || a.path.localeCompare(b.path)
  );

  // Filter events for the selected path & device
  const filtered = allEvents.filter((ev) => {
    if (ev.path !== requestedPath) return false;
    if (requestedDevice !== "all" && ev.device !== requestedDevice) return false;
    return true;
  });

  const clickEvents = filtered.filter(
    (ev): ev is HeatmapClickEvent => ev.type === "click"
  );
  const scrollEvents = filtered.filter(
    (ev): ev is HeatmapScrollEvent => ev.type === "scroll"
  );
  const attentionEvents = filtered.filter((ev) => ev.type === "attention");

  // Compute click metrics & top elements
  let deadClicks = 0;
  let rageClicks = 0;
  const elementMap = new Map<string, HeatmapTopElement>();

  for (const click of clickEvents) {
    if (click.isDeadClick) deadClicks += 1;
    if (click.isRageClick) rageClicks += 1;

    const key = `${click.elementKind}::${click.label}::${click.href || ""}`;
    const existing = elementMap.get(key);
    if (existing) {
      existing.clicks += 1;
      if (click.isDeadClick) existing.deadClicks += 1;
      if (click.isRageClick) existing.rageClicks += 1;
    } else {
      elementMap.set(key, {
        key,
        label: click.label,
        elementKind: click.elementKind,
        href: click.href,
        clicks: 1,
        sharePct: 0,
        deadClicks: click.isDeadClick ? 1 : 0,
        rageClicks: click.isRageClick ? 1 : 0,
      });
    }
  }

  const totalClicks = clickEvents.length;
  const topElements = Array.from(elementMap.values())
    .map((el) => ({
      ...el,
      sharePct: totalClicks > 0 ? Math.round((el.clicks / totalClicks) * 100) : 0,
    }))
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 12);

  // Compute scroll funnel (25%, 50%, 75%, 100%)
  const milestones: Array<25 | 50 | 75 | 100> = [25, 50, 75, 100];
  const countsByMilestone: Record<25 | 50 | 75 | 100, number> = {
    25: 0,
    50: 0,
    75: 0,
    100: 0,
  };
  for (const sc of scrollEvents) {
    countsByMilestone[sc.depth] += 1;
  }
  const baseScrollReach = Math.max(
    countsByMilestone[25],
    countsByMilestone[50],
    countsByMilestone[75],
    countsByMilestone[100]
  );

  const scrollFunnel = milestones.map((milestone) => ({
    milestone,
    count: countsByMilestone[milestone],
    reachPct:
      baseScrollReach > 0
        ? Math.min(100, Math.round((countsByMilestone[milestone] / baseScrollReach) * 100))
        : 0,
  }));

  // Compute average scroll depth & attention from attention events (or scroll milestones)
  let avgScrollDepthPct: number | null = null;
  let avgAttentionSeconds: number | null = null;

  if (attentionEvents.length > 0) {
    const totalScroll = attentionEvents.reduce((acc, ev) => acc + ev.maxScrollPct, 0);
    const totalSeconds = attentionEvents.reduce((acc, ev) => acc + ev.seconds, 0);
    avgScrollDepthPct = Math.round(totalScroll / attentionEvents.length);
    avgAttentionSeconds = Math.round(totalSeconds / attentionEvents.length);
  } else if (scrollEvents.length > 0) {
    const weighted =
      countsByMilestone[25] * 25 +
      countsByMilestone[50] * 50 +
      countsByMilestone[75] * 75 +
      countsByMilestone[100] * 100;
    avgScrollDepthPct = Math.round(weighted / scrollEvents.length);
  }

  return {
    selectedPath: requestedPath,
    selectedDevice: requestedDevice,
    totalStoredEvents: allEvents.length,
    pages,
    metrics: {
      totalClicks,
      deadClicks,
      rageClicks,
      scrollSamples: baseScrollReach,
      avgScrollDepthPct,
      avgAttentionSeconds,
      topElementLabel: topElements[0]?.label || null,
    },
    clicks: clickEvents.slice(-1000).map((c) => ({
      xPct: c.xPct,
      yPct: c.yPct,
      device: c.device,
      elementKind: c.elementKind,
      label: c.label,
      href: c.href,
      isDeadClick: c.isDeadClick,
      isRageClick: c.isRageClick,
      timestamp: c.timestamp,
    })),
    scrollFunnel,
    topElements,
  };
}
