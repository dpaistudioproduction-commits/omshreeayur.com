"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Flame,
  Layers,
  AlertTriangle,
  Monitor,
  Tablet,
  Smartphone,
  RefreshCw,
  Trash2,
  ExternalLink,
  ShieldCheck,
  MousePointerClick,
  ArrowDownToLine,
  Clock,
  Sparkles,
  CheckCircle2,
  Eye,
} from "lucide-react";
import {
  HeatmapDevice,
  HeatmapReportResponse,
} from "@/lib/odgi/heatmap-types";
import { cn } from "@/lib/utils";

type ViewMode = "heatmap" | "scroll" | "friction";

const PRESET_PAGES: Array<{ path: string; label: string }> = [
  { path: "/", label: "Homepage (/)" },
  { path: "/conditions", label: "Conditions Directory (/conditions)" },
  { path: "/conditions/neurological", label: "Neurological Care (/conditions/neurological)" },
  { path: "/conditions/musculoskeletal", label: "Musculoskeletal Care (/conditions/musculoskeletal)" },
  { path: "/conditions/respiratory", label: "Respiratory Care (/conditions/respiratory)" },
  { path: "/conditions/skin", label: "Skin Care (/conditions/skin)" },
  { path: "/treatments/asthma-treatment", label: "Asthma Treatment (/treatments/asthma-treatment)" },
  { path: "/products/kafastha", label: "Kafastha Product (/products/kafastha)" },
  { path: "/blog", label: "Blog Hub (/blog)" },
  { path: "/blog/ayurvedic-approach-to-asthma-management", label: "Asthma Management Blog" },
  { path: "/about", label: "About Hospital (/about)" },
];

/**
 * Builds a 256-color RGBA lookup table for the thermal heatmap gradient:
 * Blue -> Cyan -> Emerald -> Yellow -> Orange -> Red
 */
function buildThermalPalette(): Uint8ClampedArray {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new Uint8ClampedArray(256 * 4);

  const grad = ctx.createLinearGradient(0, 0, 256, 0);
  grad.addColorStop(0.0, "rgba(37, 99, 235, 0)");
  grad.addColorStop(0.2, "rgba(37, 99, 235, 0.7)");
  grad.addColorStop(0.4, "rgba(6, 182, 212, 0.85)");
  grad.addColorStop(0.6, "rgba(34, 197, 94, 0.9)");
  grad.addColorStop(0.8, "rgba(250, 204, 21, 0.95)");
  grad.addColorStop(1.0, "rgba(239, 68, 68, 1)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 1);

  return ctx.getImageData(0, 0, 256, 1).data;
}

export function HeatmapStudio() {
  const [selectedPath, setSelectedPath] = useState<string>("/");
  const [selectedDevice, setSelectedDevice] = useState<HeatmapDevice | "all">("all");
  const [viewMode, setViewMode] = useState<ViewMode>("heatmap");
  const [radiusPx, setRadiusPx] = useState<number>(36);
  const [overlayOpacity, setOverlayOpacity] = useState<number>(80);
  const [showHotspotPins, setShowHotspotPins] = useState<boolean>(true);
  const [report, setReport] = useState<HeatmapReportResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [clearing, setClearing] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [iframeDocHeight, setIframeDocHeight] = useState<number>(2400);
  const [hoveredClickIdx, setHoveredClickIdx] = useState<number | null>(null);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(960);

  const previewLogicalWidth = useMemo(() => {
    if (selectedDevice === "mobile") return 390;
    if (selectedDevice === "tablet") return 768;
    return 1280;
  }, [selectedDevice]);

  const scaleFactor = useMemo(() => {
    if (containerWidth <= 0) return 1;
    return Math.min(1, containerWidth / previewLogicalWidth);
  }, [containerWidth, previewLogicalWidth]);

  const scaledHeight = Math.max(600, Math.round(iframeDocHeight * scaleFactor));

  const loadReport = useCallback(async (pathArg: string, deviceArg: HeatmapDevice | "all") => {
    const qs = new URLSearchParams({
      path: pathArg,
      device: deviceArg,
    });
    const res = await fetch(`/api/odgi/heatmap/data?${qs.toString()}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return (await res.json()) as HeatmapReportResponse;
  }, []);

  const fetchReport = useCallback(async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const data = await loadReport(selectedPath, selectedDevice);
      setReport(data);
    } catch {
      setErrorMsg("Unable to load heatmap telemetry. Verify local dev preview is active.");
    } finally {
      setLoading(false);
    }
  }, [loadReport, selectedPath, selectedDevice]);

  useEffect(() => {
    let cancelled = false;
    loadReport(selectedPath, selectedDevice)
      .then((data) => {
        if (!cancelled) {
          setReport(data);
          setErrorMsg(null);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setErrorMsg("Unable to load heatmap telemetry. Verify local dev preview is active.");
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [loadReport, selectedPath, selectedDevice]);

  // Measure preview container width responsively
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => {
      setContainerWidth(el.clientWidth);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Measure actual full document height inside same-origin iframe
  const measureIframeHeight = useCallback(() => {
    try {
      const doc = iframeRef.current?.contentDocument;
      if (!doc) return;
      const measured = Math.max(
        doc.documentElement?.scrollHeight || 0,
        doc.body?.scrollHeight || 0,
        1000
      );
      setIframeDocHeight(Math.min(measured, 12000));
    } catch {
      setIframeDocHeight(2600);
    }
  }, []);

  // Render real HTML5 canvas thermal heatmap whenever clicks, dimensions, or sliders change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = Math.max(1, Math.round(previewLogicalWidth * scaleFactor));
    const height = Math.max(1, scaledHeight);

    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    if (viewMode !== "heatmap" || !report || report.clicks.length === 0) {
      return;
    }

    // Step 1: Paint radial intensity circles onto an alpha buffer
    const alphaCanvas = document.createElement("canvas");
    alphaCanvas.width = width;
    alphaCanvas.height = height;
    const alphaCtx = alphaCanvas.getContext("2d");
    if (!alphaCtx) return;

    const r = Math.max(12, Math.round(radiusPx * scaleFactor));
    const singleIntensity = report.clicks.length > 40 ? 0.18 : report.clicks.length > 12 ? 0.32 : 0.55;

    for (const pt of report.clicks) {
      const cx = (pt.xPct / 100) * width;
      const cy = (pt.yPct / 100) * height;
      const grad = alphaCtx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, `rgba(0, 0, 0, ${singleIntensity})`);
      grad.addColorStop(0.5, `rgba(0, 0, 0, ${singleIntensity * 0.45})`);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      alphaCtx.fillStyle = grad;
      alphaCtx.beginPath();
      alphaCtx.arc(cx, cy, r, 0, Math.PI * 2);
      alphaCtx.fill();
    }

    // Step 2: Colorize alpha buffer through 256-step thermal palette
    const imgData = alphaCtx.getImageData(0, 0, width, height);
    const data = imgData.data;
    const palette = buildThermalPalette();
    const opacityMult = overlayOpacity / 100;

    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3];
      if (alpha === 0) continue;
      const palIdx = alpha * 4;
      data[i] = palette[palIdx];
      data[i + 1] = palette[palIdx + 1];
      data[i + 2] = palette[palIdx + 2];
      data[i + 3] = Math.round(palette[palIdx + 3] * opacityMult);
    }

    ctx.putImageData(imgData, 0, 0);
  }, [report, viewMode, radiusPx, overlayOpacity, previewLogicalWidth, scaleFactor, scaledHeight]);

  const handleClearData = async () => {
    setClearing(true);
    try {
      await fetch("/api/odgi/heatmap/data", { method: "DELETE" });
      await fetchReport();
    } finally {
      setClearing(false);
    }
  };

  // Merge preset hospital pages with any other pages that already have recorded telemetry
  const availablePages = useMemo(() => {
    const map = new Map<string, { path: string; label: string; clicks: number }>();
    for (const preset of PRESET_PAGES) {
      map.set(preset.path, { path: preset.path, label: preset.label, clicks: 0 });
    }
    if (report) {
      for (const p of report.pages) {
        const existing = map.get(p.path);
        if (existing) {
          existing.clicks = p.clicks;
        } else {
          map.set(p.path, { path: p.path, label: p.path, clicks: p.clicks });
        }
      }
    }
    return Array.from(map.values()).sort((a, b) => b.clicks - a.clicks);
  }, [report]);

  const frictionClicks = useMemo(
    () => (report ? report.clicks.filter((c) => c.isDeadClick || c.isRageClick) : []),
    [report]
  );

  const metrics = report?.metrics;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between border-b border-[#DCE3DD] pb-5">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#8C6226]">
            Visitor Behaviour &amp; UX Diagnostics
          </p>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#142218]">
            Interactive Site Heatmap Studio
          </h1>
          <p className="text-sm text-[#4D6052] max-w-2xl">
            First-party, privacy-safe click heatmaps, scroll depth retention maps, and dead/rage-click friction diagnostics layered directly over your live hospital pages.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={selectedPath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#213714] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#2F4E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213714]"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Open Live Page to Record Clicks</span>
          </a>

          <button
            type="button"
            onClick={() => void fetchReport()}
            disabled={loading}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#D4DDD6] bg-white px-3 py-2 text-xs font-semibold text-[#213714] hover:bg-[#F2F5F2] disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw className={cn("h-3.5 w-3.5", loading && "animate-spin")} />
            <span>Refresh</span>
          </button>

          <button
            type="button"
            onClick={() => void handleClearData()}
            disabled={clearing || !report || report.totalStoredEvents === 0}
            className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:opacity-40 cursor-pointer"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Clear Data</span>
          </button>
        </div>
      </div>

      {/* Privacy & Clarity Notice Strip */}
      <div className="rounded-xl border border-[#D8E1DA] bg-white px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[#3C4F41]">
        <div className="flex items-start sm:items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#213714] shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>Privacy Safeguard Active:</strong> Forms, inputs,{" "}
            <code className="font-mono text-[11px] bg-[#F2F5F2] px-1 rounded">/contact</code>,{" "}
            <code className="font-mono text-[11px] bg-[#F2F5F2] px-1 rounded">/checkout</code>, and{" "}
            <code className="font-mono text-[11px] bg-[#F2F5F2] px-1 rounded">/odgi</code> are strictly excluded. Zero patient PII or medical inputs are collected.
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-[#EEF5EE] border border-[#CFE0D0] px-2.5 py-1 text-[11px] font-semibold text-[#213714]">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>Production Clarity ID: zflhm0435o</span>
        </span>
      </div>

      {/* Real Telemetry KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[#DCE3DD] bg-white p-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-semibold text-[#5A6C5F]">
            <span>Recorded Clicks</span>
            <MousePointerClick className="h-4 w-4 text-[#213714]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-[#142218]">
            {metrics ? metrics.totalClicks : "—"}
          </p>
          <p className="mt-1 text-[11px] text-[#5A6C5F]">
            {metrics && metrics.totalClicks > 0
              ? `Across ${selectedPath} (${selectedDevice})`
              : "Awaiting live interactions on this page"}
          </p>
        </div>

        <div className="rounded-xl border border-[#DCE3DD] bg-white p-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-semibold text-[#5A6C5F]">
            <span>Average Scroll Depth</span>
            <ArrowDownToLine className="h-4 w-4 text-[#213714]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-[#142218]">
            {metrics && metrics.avgScrollDepthPct !== null
              ? `${metrics.avgScrollDepthPct}%`
              : "Awaiting data"}
          </p>
          <p className="mt-1 text-[11px] text-[#5A6C5F]">
            {metrics && metrics.scrollSamples > 0
              ? `Based on ${metrics.scrollSamples} recorded scroll session(s)`
              : "Scroll down the live page to measure depth"}
          </p>
        </div>

        <div className="rounded-xl border border-[#DCE3DD] bg-white p-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-semibold text-[#5A6C5F]">
            <span>UX Friction (Dead / Rage)</span>
            <AlertTriangle className="h-4 w-4 text-[#B4833D]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-[#142218]">
            {metrics ? `${metrics.deadClicks} / ${metrics.rageClicks}` : "—"}
          </p>
          <p className="mt-1 text-[11px] text-[#5A6C5F]">
            Dead clicks on non-links / rapid rage clicks
          </p>
        </div>

        <div className="rounded-xl border border-[#DCE3DD] bg-white p-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-semibold text-[#5A6C5F]">
            <span>Avg. Active Attention</span>
            <Clock className="h-4 w-4 text-[#213714]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-[#142218]">
            {metrics && metrics.avgAttentionSeconds !== null
              ? `${metrics.avgAttentionSeconds}s`
              : "Awaiting data"}
          </p>
          <p className="mt-1 text-[11px] text-[#5A6C5F] truncate">
            {metrics?.topElementLabel
              ? `Top click: ${metrics.topElementLabel}`
              : "Visible dwell time on page"}
          </p>
        </div>
      </div>

      {/* Controls Toolbar */}
      <div className="rounded-xl border border-[#DCE3DD] bg-white p-4 shadow-2xs flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* Page Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
          <label htmlFor="heatmap-page-select" className="text-xs font-bold uppercase tracking-wider text-[#2E3F33] shrink-0">
            Target Page
          </label>
          <select
            id="heatmap-page-select"
            value={selectedPath}
            onChange={(e) => {
              setSelectedPath(e.target.value);
              setHoveredClickIdx(null);
            }}
            className="w-full sm:max-w-md rounded-lg border border-[#D4DDD6] bg-[#FAFBF9] px-3 py-2 text-sm font-medium text-[#17221B] focus:outline-none focus:ring-2 focus:ring-[#213714]"
          >
            {availablePages.map((p) => (
              <option key={p.path} value={p.path}>
                {p.label} {p.clicks > 0 ? `(${p.clicks} clicks)` : ""}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode Tabs */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-lg border border-[#D8E1DA] bg-[#F6F8F6] p-0.5" role="tablist" aria-label="Heatmap visualization mode">
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "heatmap"}
              onClick={() => setViewMode("heatmap")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                viewMode === "heatmap"
                  ? "bg-[#213714] text-white shadow-2xs"
                  : "text-[#46574B] hover:text-[#142218]"
              )}
            >
              <Flame className="h-3.5 w-3.5" />
              <span>Click Heatmap</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "scroll"}
              onClick={() => setViewMode("scroll")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                viewMode === "scroll"
                  ? "bg-[#213714] text-white shadow-2xs"
                  : "text-[#46574B] hover:text-[#142218]"
              )}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Scroll Depth</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "friction"}
              onClick={() => setViewMode("friction")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                viewMode === "friction"
                  ? "bg-[#213714] text-white shadow-2xs"
                  : "text-[#46574B] hover:text-[#142218]"
              )}
            >
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>Friction ({frictionClicks.length})</span>
            </button>
          </div>

          {/* Device Filter */}
          <div className="inline-flex rounded-lg border border-[#D8E1DA] bg-[#F6F8F6] p-0.5" role="group" aria-label="Device viewport filter">
            {(
              [
                { id: "all", label: "All", icon: Eye },
                { id: "desktop", label: "Desktop", icon: Monitor },
                { id: "tablet", label: "Tablet", icon: Tablet },
                { id: "mobile", label: "Mobile", icon: Smartphone },
              ] as const
            ).map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedDevice(id)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                  selectedDevice === id
                    ? "bg-white text-[#142218] shadow-2xs border border-[#DCE3DD]"
                    : "text-[#5A6C5F] hover:text-[#142218]"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-800">
          {errorMsg}
        </div>
      )}

      {/* Main Split Workspace: Live Visual Heatmap (Left 8 cols) + Diagnostic Breakdown (Right 4 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Visual Heatmap Canvas over Live Hospital Page */}
        <section className="xl:col-span-8 rounded-xl border border-[#DCE3DD] bg-white shadow-2xs overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EDF1EE] px-4 py-3 bg-[#FAFBF9]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2E3F33]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#517B32]" />
              <span>Live Page Overlay: {selectedPath}</span>
              <span className="text-[#7A8C7E] font-normal">
                ({previewLogicalWidth}px viewport)
              </span>
            </div>

            {viewMode === "heatmap" && (
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#4D6052]">
                <label className="flex items-center gap-1.5">
                  <span>Radius</span>
                  <input
                    type="range"
                    min={18}
                    max={64}
                    value={radiusPx}
                    onChange={(e) => setRadiusPx(Number(e.target.value))}
                    className="w-20 accent-[#213714]"
                  />
                </label>
                <label className="flex items-center gap-1.5">
                  <span>Opacity</span>
                  <input
                    type="range"
                    min={30}
                    max={100}
                    value={overlayOpacity}
                    onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                    className="w-20 accent-[#213714]"
                  />
                </label>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showHotspotPins}
                    onChange={(e) => setShowHotspotPins(e.target.checked)}
                    className="accent-[#213714]"
                  />
                  <span>Click pins</span>
                </label>
              </div>
            )}
          </div>

          {/* Thermal Legend Bar */}
          {viewMode === "heatmap" && (
            <div className="flex items-center justify-between gap-4 px-4 py-2 border-b border-[#EDF1EE] bg-white text-[11px] text-[#5A6C5F]">
              <span>Intensity Scale (based on actual click density):</span>
              <div className="flex items-center gap-2">
                <span>Low</span>
                <div
                  className="h-2.5 w-36 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #2563EB 0%, #06B6D4 30%, #22C55E 55%, #FACC15 80%, #EF4444 100%)",
                  }}
                />
                <span>Hot</span>
              </div>
            </div>
          )}

          {/* Scrollable Live Page + Overlay Frame */}
          <div className="bg-[#EAEEEB] p-3 sm:p-4">
            <div
              ref={containerRef}
              className="mx-auto w-full max-h-[760px] overflow-y-auto rounded-lg border border-[#CFD8D1] bg-white shadow-inner"
            >
              <div
                className="relative mx-auto overflow-hidden bg-white"
                style={{
                  width: `${Math.round(previewLogicalWidth * scaleFactor)}px`,
                  height: `${scaledHeight}px`,
                }}
              >
                {/* Live Same-Origin Hospital Page Preview */}
                <iframe
                  ref={iframeRef}
                  key={`${selectedPath}-${previewLogicalWidth}`}
                  src={`${selectedPath}?odgi_preview=1`}
                  title={`Heatmap preview for ${selectedPath}`}
                  onLoad={() => {
                    measureIframeHeight();
                    setTimeout(measureIframeHeight, 600);
                  }}
                  className="pointer-events-none block border-0 origin-top-left"
                  style={{
                    width: `${previewLogicalWidth}px`,
                    height: `${iframeDocHeight}px`,
                    transform: `scale(${scaleFactor})`,
                  }}
                />

                {/* Mode 1: Real HTML5 Canvas Thermal Click Heatmap */}
                {viewMode === "heatmap" && (
                  <>
                    <canvas
                      ref={canvasRef}
                      className="pointer-events-none absolute inset-0 z-10"
                    />
                    {showHotspotPins &&
                      report &&
                      report.clicks.map((pt, idx) => (
                        <button
                          key={`${pt.timestamp}-${idx}`}
                          type="button"
                          onMouseEnter={() => setHoveredClickIdx(idx)}
                          onMouseLeave={() => setHoveredClickIdx(null)}
                          onFocus={() => setHoveredClickIdx(idx)}
                          onBlur={() => setHoveredClickIdx(null)}
                          aria-label={`Click on ${pt.label} at ${pt.xPct}%, ${pt.yPct}%`}
                          style={{
                            left: `${pt.xPct}%`,
                            top: `${pt.yPct}%`,
                          }}
                          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#EF4444]/85 shadow-sm hover:scale-125 transition-transform cursor-pointer"
                        >
                          {hoveredClickIdx === idx && (
                            <span className="pointer-events-none absolute left-4 top-0 z-30 w-52 rounded-lg bg-[#142218] px-2.5 py-2 text-left text-[11px] text-white shadow-lg">
                              <strong className="block truncate">{pt.label}</strong>
                              <span className="text-[#B8CABD] block">
                                {pt.elementKind.toUpperCase()} • {pt.device}
                                {pt.isRageClick
                                  ? " • RAGE CLICK"
                                  : pt.isDeadClick
                                    ? " • Dead click"
                                    : ""}
                              </span>
                            </span>
                          )}
                        </button>
                      ))}
                  </>
                )}

                {/* Mode 2: Scroll Depth Retention Bands */}
                {viewMode === "scroll" && report && (
                  <div className="pointer-events-none absolute inset-0 z-20 flex flex-col">
                    {report.scrollFunnel.map((band) => {
                      const bandBg =
                        band.count === 0
                          ? "bg-slate-900/20"
                          : band.reachPct >= 75
                            ? "bg-emerald-600/25"
                            : band.reachPct >= 50
                              ? "bg-amber-500/25"
                              : "bg-red-600/25";
                      return (
                        <div
                          key={band.milestone}
                          className={cn(
                            "flex-1 border-b-2 border-dashed border-white/90 relative flex items-end justify-between px-4 py-2",
                            bandBg
                          )}
                        >
                          <span className="rounded-md bg-[#142218]/90 px-2.5 py-1 text-xs font-bold text-white shadow">
                            {band.milestone}% Page Depth
                          </span>
                          <span className="rounded-md bg-white/95 px-2.5 py-1 text-xs font-bold text-[#142218] shadow">
                            {band.count > 0
                              ? `${band.reachPct}% reached (${band.count} visits)`
                              : "No scroll data yet"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Mode 3: UX Friction Overlay (Dead & Rage Clicks) */}
                {viewMode === "friction" && (
                  <div className="pointer-events-none absolute inset-0 z-20 bg-slate-950/15">
                    {frictionClicks.map((pt, idx) => (
                      <div
                        key={`fr-${pt.timestamp}-${idx}`}
                        style={{
                          left: `${pt.xPct}%`,
                          top: `${pt.yPct}%`,
                        }}
                        className={cn(
                          "absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold text-white shadow-md border border-white",
                          pt.isRageClick ? "bg-red-600" : "bg-amber-600"
                        )}
                      >
                        <span>{pt.isRageClick ? "RAGE" : "DEAD"}</span>
                        <span className="max-w-[110px] truncate font-normal">
                          {pt.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Empty-State Callout Banner if zero events on this page */}
                {report && report.metrics.totalClicks === 0 && viewMode === "heatmap" && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-md rounded-xl border border-[#D4A85F]/60 bg-[#142218]/95 p-4 text-center text-white shadow-xl backdrop-blur-xs">
                    <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A85F]">
                      <Sparkles className="h-4 w-4" />
                      <span>Ready to Record Live Interactions</span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#DCE6DE] leading-relaxed">
                      No clicks have been recorded for <strong>{selectedPath}</strong> yet. Click{" "}
                      <strong>&ldquo;Open Live Page to Record Clicks&rdquo;</strong> above, click around &amp; scroll the real page, then hit <strong>Refresh</strong> to see your live thermal heatmap appear here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Top Clicked Elements + Scroll Depth Funnel + Tracked Pages */}
        <div className="xl:col-span-4 space-y-6">
          {/* Top Clicked Elements / CTAs */}
          <section className="rounded-xl border border-[#DCE3DD] bg-white p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#EDF1EE] pb-3">
              <h2 className="text-sm font-bold text-[#17221B]">
                Top Clicked Elements &amp; CTAs
              </h2>
              <span className="text-[11px] font-medium text-[#5A6C5F]">
                {report?.topElements.length || 0} tracked
              </span>
            </div>

            {!report || report.topElements.length === 0 ? (
              <p className="text-xs text-[#5A6C5F] py-4 text-center">
                No clicks recorded on <strong>{selectedPath}</strong> yet.
              </p>
            ) : (
              <ul className="space-y-2.5">
                {report.topElements.map((el) => (
                  <li
                    key={el.key}
                    className="rounded-lg border border-[#E6ECE7] bg-[#FAFBF9] p-3 space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-[#142218] leading-snug break-words">
                        {el.label}
                      </span>
                      <span className="shrink-0 rounded-full bg-[#213714] px-2 py-0.5 text-[11px] font-bold text-white">
                        {el.clicks} ({el.sharePct}%)
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#5A6C5F]">
                      <span className="rounded bg-[#E9EFEA] px-1.5 py-0.5 font-semibold uppercase text-[10px] text-[#213714]">
                        {el.elementKind}
                      </span>
                      {el.href && (
                        <span className="font-mono text-[10px] truncate max-w-[160px]">
                          {el.href}
                        </span>
                      )}
                      {el.deadClicks > 0 && (
                        <span className="rounded bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-800 text-[10px]">
                          {el.deadClicks} dead
                        </span>
                      )}
                      {el.rageClicks > 0 && (
                        <span className="rounded bg-red-100 px-1.5 py-0.5 font-semibold text-red-700 text-[10px]">
                          {el.rageClicks} rage
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Scroll Depth Funnel */}
          <section className="rounded-xl border border-[#DCE3DD] bg-white p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#EDF1EE] pb-3">
              <h2 className="text-sm font-bold text-[#17221B]">
                Scroll Depth Retention
              </h2>
              <span className="text-[11px] font-medium text-[#5A6C5F]">
                Milestones
              </span>
            </div>

            <div className="space-y-3">
              {(report?.scrollFunnel || [25, 50, 75, 100].map((m) => ({ milestone: m, count: 0, reachPct: 0 }))).map(
                (row) => (
                  <div key={row.milestone} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#2E3F33]">
                        Reached {row.milestone}% of page
                      </span>
                      <span className="font-bold text-[#142218]">
                        {row.count > 0 ? `${row.reachPct}% (${row.count})` : "0"}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#E9EFEA] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#213714] transition-all"
                        style={{ width: `${row.reachPct}%` }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Pages with Recorded Activity */}
          <section className="rounded-xl border border-[#DCE3DD] bg-white p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#EDF1EE] pb-3">
              <h2 className="text-sm font-bold text-[#17221B]">
                Tracked Pages Activity
              </h2>
              <span className="text-[11px] text-[#5A6C5F]">
                {report?.totalStoredEvents || 0} total events
              </span>
            </div>

            {!report || report.pages.length === 0 ? (
              <p className="text-xs text-[#5A6C5F] py-2">
                Browse any public page (excluding <code className="font-mono">/contact</code> &amp;{" "}
                <code className="font-mono">/checkout</code>) to populate activity automatically.
              </p>
            ) : (
              <ul className="space-y-1.5">
                {report.pages.map((p) => (
                  <li key={p.path}>
                    <button
                      type="button"
                      onClick={() => setSelectedPath(p.path)}
                      className={cn(
                        "w-full flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-xs transition-colors cursor-pointer",
                        selectedPath === p.path
                          ? "bg-[#EEF4EE] text-[#142218] font-bold border border-[#C8DACB]"
                          : "hover:bg-[#F6F8F6] text-[#46574B]"
                      )}
                    >
                      <span className="truncate font-mono">{p.path}</span>
                      <span className="shrink-0 text-[11px] font-semibold text-[#213714]">
                        {p.clicks} clicks
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
