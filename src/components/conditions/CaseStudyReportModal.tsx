"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  ShieldCheck,
  Maximize2,
} from "lucide-react";

export interface ReportImage {
  src: string;
  title: string;
  hospital: string;
  date: string;
  metrics: string;
  caption: string;
}

interface CaseStudyReportModalProps {
  reports: ReportImage[];
  activeCaseLabel: string;
}

export function CaseStudyReportGallery({ reports, activeCaseLabel }: CaseStudyReportModalProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Reset zoom whenever selected image changes
  useEffect(() => {
    setZoomLevel(1);
  }, [selectedIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : reports.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null && prev < reports.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "+" || e.key === "=") {
        setZoomLevel((prev) => Math.min(prev + 0.5, 3));
      }
      if (e.key === "-") {
        setZoomLevel((prev) => Math.max(prev - 0.5, 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, reports.length]);

  return (
    <div className="w-full">
      {/* Grid of Report Thumbnails: 1 col on tiny screens, 2 cols on mobile/tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 my-5 sm:my-6">
        {reports.map((report, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="group relative bg-[#F7F1E1] border border-[#DBCFA8] rounded-xl overflow-hidden cursor-pointer hover:shadow-md active:scale-[0.98] transition-all duration-200 hover:border-[#517B32]/70 flex flex-col justify-between"
            role="button"
            tabIndex={0}
            aria-label={`View medical report scan: ${report.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(idx);
              }
            }}
          >
            {/* Thumbnail Header */}
            <div className="p-2.5 sm:p-3 bg-white/80 border-b border-[#DBCFA8]/60 flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#66371B] truncate flex-1">
                {report.title}
              </span>
              <span className="inline-flex items-center text-[10px] font-semibold text-[#517B32] bg-[#517B32]/10 px-2 py-0.5 rounded-full border border-[#517B32]/20 shrink-0">
                {report.date}
              </span>
            </div>

            {/* Thumbnail Image Viewport */}
            <div className="relative h-44 sm:h-52 w-full bg-[#EFE9D9] overflow-hidden">
              <Image
                src={report.src}
                alt={`${report.title} - ${report.hospital}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Tap / Hover Overlay with Touch Prompt */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center p-2">
                <span className="opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#402816]/90 text-[#F7F1E1] rounded-full text-xs font-medium shadow-md backdrop-blur-xs">
                  <Maximize2 className="h-3.5 w-3.5" /> Tap to Inspect Scan
                </span>
              </div>
            </div>

            {/* Thumbnail Footer */}
            <div className="p-2.5 sm:p-3 bg-white/90">
              <div className="text-[11px] sm:text-xs font-semibold text-[#3D5F26] mb-1 line-clamp-1">
                {report.metrics}
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#81754B] line-clamp-2 leading-relaxed">
                {report.hospital} — {report.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-between p-2 sm:p-4 md:p-6"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-report-title"
        >
          {/* Modal Container */}
          <div
            className="relative bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full mx-auto max-h-[96vh] sm:max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#DBCFA8]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header: Optimized for small mobile screens */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3.5 border-b border-gray-200 bg-[#F7F1E1]">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#517B32]/10 border border-[#517B32]/30 flex items-center justify-center text-[#517B32] shrink-0">
                  <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <div className="min-w-0">
                  <h3
                    id="modal-report-title"
                    className="text-xs sm:text-base font-bold text-[#66371B] leading-tight truncate"
                  >
                    {reports[selectedIndex].title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#81754B] truncate">
                    {reports[selectedIndex].hospital} • {reports[selectedIndex].date}
                  </p>
                </div>
              </div>

              {/* Header Action Controls */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                {/* Mobile & Desktop Zoom Controls */}
                <div className="flex items-center bg-white/80 border border-[#DBCFA8] rounded-lg p-0.5">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.5, 1))}
                    disabled={zoomLevel <= 1}
                    className="p-1 sm:p-1.5 text-gray-600 hover:text-black disabled:opacity-30 transition-colors"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  <span className="text-[10px] sm:text-xs font-semibold px-1 text-[#66371B] min-w-[28px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.5, 3))}
                    disabled={zoomLevel >= 3}
                    className="p-1 sm:p-1.5 text-gray-600 hover:text-black disabled:opacity-30 transition-colors"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  {zoomLevel > 1 && (
                    <button
                      type="button"
                      onClick={() => setZoomLevel(1)}
                      className="p-1 sm:p-1.5 text-gray-600 hover:text-black transition-colors"
                      title="Reset Zoom"
                      aria-label="Reset Zoom"
                    >
                      <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                  )}
                </div>

                <a
                  href={reports[selectedIndex].src}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2 rounded-lg text-gray-500 hover:text-[#66371B] hover:bg-black/5 transition-colors hidden xs:flex items-center justify-center"
                  title="Open full scan in new tab"
                  aria-label="Open full scan in new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>

                {/* Prominent, touch-friendly close button */}
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="h-9 w-9 sm:h-8 sm:w-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors active:scale-95"
                  aria-label="Close report viewer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable & Zoomable Image View */}
            <div className="relative flex-1 overflow-auto bg-[#262626] p-2 sm:p-4 flex items-center justify-center min-h-[300px] sm:min-h-[460px] touch-pan-x touch-pan-y">
              <div
                className="relative transition-transform duration-200 origin-center max-w-full w-auto"
                style={{
                  transform: `scale(${zoomLevel})`,
                  cursor: zoomLevel > 1 ? "grab" : "default",
                }}
              >
                <Image
                  src={reports[selectedIndex].src}
                  alt={reports[selectedIndex].title}
                  width={1200}
                  height={1700}
                  className="object-contain max-h-[62vh] sm:max-h-[68vh] w-auto h-auto mx-auto rounded shadow-lg bg-white select-none pointer-events-auto"
                  priority
                />
              </div>

              {/* Prev / Next Navigation Arrows */}
              {reports.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex((prev) =>
                        prev !== null && prev > 0 ? prev - 1 : reports.length - 1
                      );
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all shadow-md active:scale-90"
                    aria-label="Previous scan"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex((prev) =>
                        prev !== null && prev < reports.length - 1 ? prev + 1 : 0
                      );
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all shadow-md active:scale-90"
                    aria-label="Next scan"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer: Responsive touch layout */}
            <div className="px-3 sm:px-5 py-2.5 sm:py-3 border-t border-gray-200 bg-[#F7F1E1] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#3D5F26] font-medium leading-tight">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#517B32] shrink-0" />
                <span className="truncate">
                  <strong>Key Finding:</strong> {reports[selectedIndex].metrics}
                </span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3 text-[#81754B]">
                <span className="text-[10px] text-gray-500 sm:hidden">
                  (Pinch or use +/- to zoom)
                </span>
                <span>
                  {activeCaseLabel} • {selectedIndex + 1} of {reports.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
