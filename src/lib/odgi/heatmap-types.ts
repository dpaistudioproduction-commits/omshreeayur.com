export const HEATMAP_EXCLUDED_PREFIXES = [
  "/contact",
  "/checkout",
  "/odgi",
  "/api",
] as const;

export type HeatmapDevice = "desktop" | "tablet" | "mobile";
export type HeatmapElementKind = "cta" | "link" | "button" | "nav" | "card" | "other";

export interface HeatmapClickEvent {
  type: "click";
  path: string;
  device: HeatmapDevice;
  xPct: number; // 0..100 across document width
  yPct: number; // 0..100 across document height
  viewportYPct: number; // 0..100 within visible fold
  elementKind: HeatmapElementKind;
  label: string; // sanitized non-PII short label
  href?: string; // relative internal path only
  isDeadClick: boolean;
  isRageClick: boolean;
  timestamp: string;
}

export interface HeatmapScrollEvent {
  type: "scroll";
  path: string;
  device: HeatmapDevice;
  depth: 25 | 50 | 75 | 100;
  timestamp: string;
}

export interface HeatmapAttentionEvent {
  type: "attention";
  path: string;
  device: HeatmapDevice;
  seconds: number;
  maxScrollPct: number;
  timestamp: string;
}

export type HeatmapStoredEvent =
  | HeatmapClickEvent
  | HeatmapScrollEvent
  | HeatmapAttentionEvent;

export interface HeatmapTopElement {
  key: string;
  label: string;
  elementKind: HeatmapElementKind;
  href?: string;
  clicks: number;
  sharePct: number;
  deadClicks: number;
  rageClicks: number;
}

export interface HeatmapScrollBucket {
  milestone: 25 | 50 | 75 | 100;
  count: number;
  reachPct: number;
}

export interface HeatmapPageSummary {
  path: string;
  clicks: number;
  scrollSessions: number;
  deadClicks: number;
  rageClicks: number;
  lastEventAt: string | null;
}

export interface HeatmapReportResponse {
  selectedPath: string;
  selectedDevice: HeatmapDevice | "all";
  totalStoredEvents: number;
  pages: HeatmapPageSummary[];
  metrics: {
    totalClicks: number;
    deadClicks: number;
    rageClicks: number;
    scrollSamples: number;
    avgScrollDepthPct: number | null;
    avgAttentionSeconds: number | null;
    topElementLabel: string | null;
  };
  clicks: Array<{
    xPct: number;
    yPct: number;
    device: HeatmapDevice;
    elementKind: HeatmapElementKind;
    label: string;
    href?: string;
    isDeadClick: boolean;
    isRageClick: boolean;
    timestamp: string;
  }>;
  scrollFunnel: HeatmapScrollBucket[];
  topElements: HeatmapTopElement[];
}

export function isHeatmapExcludedPath(pathname: string): boolean {
  const normalized = pathname.trim().toLowerCase().split("?")[0].split("#")[0];
  if (!normalized.startsWith("/")) return true;
  return HEATMAP_EXCLUDED_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)
  );
}

export function normalizePublicPath(rawPath: string): string | null {
  if (typeof rawPath !== "string") return null;
  const clean = rawPath.trim().split("?")[0].split("#")[0];
  if (!clean.startsWith("/") || clean.length > 200) return null;
  if (clean.includes("..")) return null;
  const normalized = clean.length > 1 ? clean.replace(/\/+$/, "") : "/";
  if (isHeatmapExcludedPath(normalized)) return null;
  return normalized;
}

/**
 * Strips emails, long digit runs (phone numbers/PINs), and excess whitespace
 * from UI element labels so no accidental PII can ever enter heatmap logs.
 */
export function sanitizeElementLabel(raw: unknown): string {
  if (typeof raw !== "string") return "Unlabeled element";
  const cleaned = raw
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted]")
    .replace(/\+?\d[\d\s\-()]{5,}\d/g, "[redacted]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 64);

  return cleaned || "Unlabeled element";
}

export function sanitizeInternalHref(raw: unknown): string | undefined {
  if (typeof raw !== "string") return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  if (trimmed.startsWith("mailto:") || trimmed.startsWith("tel:")) {
    return trimmed.startsWith("tel:") ? "tel:[hospital-phone]" : "mailto:[hospital-email]";
  }
  if (trimmed.includes("wa.me")) {
    return "whatsapp:[hospital-desk]";
  }
  if (trimmed.startsWith("/")) {
    return trimmed.split("?")[0].split("#")[0].slice(0, 120);
  }
  return undefined;
}
