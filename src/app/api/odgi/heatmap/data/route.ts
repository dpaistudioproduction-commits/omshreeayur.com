import { NextRequest, NextResponse } from "next/server";
import { isOdgiDevPreviewEnabled } from "@/lib/odgi/access";
import {
  buildHeatmapReport,
  clearHeatmapEvents,
} from "@/lib/odgi/heatmap-store";
import {
  HeatmapDevice,
  normalizePublicPath,
} from "@/lib/odgi/heatmap-types";

const NO_INDEX_HEADERS = {
  "X-Robots-Tag": "noindex, nofollow, noarchive",
  "Cache-Control": "no-store, private",
};

export async function GET(request: NextRequest) {
  if (!isOdgiDevPreviewEnabled()) {
    return NextResponse.json(
      { error: "Access Denied" },
      { status: 403, headers: NO_INDEX_HEADERS }
    );
  }

  const rawPath = request.nextUrl.searchParams.get("path") || "/";
  const normalizedPath = normalizePublicPath(rawPath) || "/";

  const rawDevice = request.nextUrl.searchParams.get("device") || "all";
  const device: HeatmapDevice | "all" =
    rawDevice === "desktop" || rawDevice === "tablet" || rawDevice === "mobile"
      ? rawDevice
      : "all";

  const report = buildHeatmapReport(normalizedPath, device);
  return NextResponse.json(report, { status: 200, headers: NO_INDEX_HEADERS });
}

export async function DELETE() {
  if (!isOdgiDevPreviewEnabled()) {
    return NextResponse.json(
      { error: "Access Denied" },
      { status: 403, headers: NO_INDEX_HEADERS }
    );
  }

  clearHeatmapEvents();
  return NextResponse.json(
    { ok: true, cleared: true },
    { status: 200, headers: NO_INDEX_HEADERS }
  );
}
