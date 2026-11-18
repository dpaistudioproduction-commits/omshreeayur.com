import React from "react";
import { PlugZap } from "lucide-react";
import { ODGI_DATA_SOURCES } from "@/lib/odgi/navigation";

export function DataSourceStatusBar() {
  return (
    <section
      aria-label="Data source connection status"
      className="rounded-xl border border-[#DCE3DD] bg-white px-4 py-3.5 shadow-2xs"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 shrink-0">
          <PlugZap className="h-4 w-4 text-[#8C6226]" aria-hidden="true" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#2E3F33]">
            Data-Source Status
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5 flex-1 md:max-w-4xl">
          {ODGI_DATA_SOURCES.map((source) => (
            <li
              key={source.id}
              className="flex items-center justify-between gap-2 rounded-lg border border-[#E6ECE7] bg-[#F9FBF9] px-3 py-2"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#1E2E23] truncate">
                  {source.name}
                </p>
                <p className="text-[11px] text-[#5F7164] truncate">
                  {source.detail}
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-white border border-[#D4DDD6] px-2 py-0.5 text-[10px] font-semibold text-[#5A6C5F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9BA99F]" aria-hidden="true" />
                {source.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
