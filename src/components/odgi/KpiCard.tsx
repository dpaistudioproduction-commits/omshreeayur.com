import React from "react";
import {
  Users,
  Activity,
  MousePointerClick,
  Eye,
  ArrowUpDown,
  MessageSquareCheck,
} from "lucide-react";
import { OdgiOverviewKpi } from "@/lib/odgi/navigation";

const KPI_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "website-users": Users,
  sessions: Activity,
  "organic-clicks": MousePointerClick,
  "search-impressions": Eye,
  "average-search-position": ArrowUpDown,
  "enquiry-conversions": MessageSquareCheck,
};

interface KpiCardProps {
  kpi: OdgiOverviewKpi;
}

export function KpiCard({ kpi }: KpiCardProps) {
  const Icon = KPI_ICONS[kpi.id] || Activity;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-[#DCE3DD] bg-white p-5 shadow-2xs">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[#2E3F33]">{kpi.label}</p>
          <span className="inline-block rounded bg-[#F2F5F2] px-2 py-0.5 text-[11px] font-medium text-[#526557]">
            {kpi.sourceName}
          </span>
        </div>
        <div
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEF3EE] text-[#213714]"
        >
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-[#EDF1EE] space-y-2">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-xl font-bold tracking-tight text-[#17221B]">
            {kpi.statusLabel}
          </p>
          <span className="inline-flex items-center rounded-full bg-[#F7F8F7] border border-[#D8E1DA] px-2 py-0.5 text-[11px] font-medium text-[#5A6C5F]">
            {kpi.subStatus}
          </span>
        </div>
        <p className="text-xs text-[#5A6C5F] leading-relaxed">
          {kpi.metricDescription}
        </p>
      </div>
    </div>
  );
}
