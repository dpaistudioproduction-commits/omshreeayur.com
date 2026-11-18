import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Lock,
  ShieldCheck,
  BarChart3,
  Clock,
  Layers,
} from "lucide-react";
import { isOdgiDevPreviewEnabled } from "@/lib/odgi/access";
import {
  ODGI_NAV_ITEMS,
  ODGI_OVERVIEW_KPIS,
} from "@/lib/odgi/navigation";
import { DataSourceStatusBar } from "@/components/odgi/DataSourceStatusBar";
import { KpiCard } from "@/components/odgi/KpiCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Overview | Omshree Digital Growth Intelligence",
};

export default function OdgiOverviewPage() {
  if (!isOdgiDevPreviewEnabled()) {
    notFound();
  }

  const intelligenceModules = ODGI_NAV_ITEMS.filter(
    (item) => item.id !== "overview" && item.id !== "settings"
  );

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-[#DCE3DD] pb-5">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#8C6226]">
            Executive Intelligence Workspace
          </p>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#142218]">
            Omshree Digital Growth Intelligence
          </h1>
          <p className="text-sm text-[#4D6052] max-w-2xl">
            Stage 1 foundation shell. All analytics connectors remain unlinked until authentication and verified server-side pipelines are configured.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg border border-[#D8E1DA] bg-white px-3 py-2 text-xs font-medium text-[#4D6052]">
          <Clock className="h-3.5 w-3.5 text-[#7A8C7E]" aria-hidden="true" />
          <span>Reporting window: Awaiting data</span>
        </div>
      </div>

      {/* Compact Data-Source Status Area */}
      <DataSourceStatusBar />

      {/* Executive Overview KPI Cards */}
      <section aria-labelledby="kpi-section-heading" className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2
            id="kpi-section-heading"
            className="text-sm font-bold uppercase tracking-wider text-[#2E3F33]"
          >
            Key Performance Indicators
          </h2>
          <span className="text-xs text-[#5A6C5F]">
            Placeholder metrics • No live data connected
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {ODGI_OVERVIEW_KPIS.map((kpi) => (
            <KpiCard key={kpi.id} kpi={kpi} />
          ))}
        </div>
      </section>

      {/* Main Executive Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Primary Analytical Workspace Frame */}
        <section
          aria-labelledby="trend-panel-heading"
          className="lg:col-span-8 rounded-xl border border-[#DCE3DD] bg-white p-6 shadow-2xs flex flex-col justify-between min-h-[280px]"
        >
          <div className="flex items-start justify-between gap-4 border-b border-[#EDF1EE] pb-4">
            <div>
              <h2
                id="trend-panel-heading"
                className="text-base font-bold text-[#17221B]"
              >
                Traffic &amp; Organic Search Performance
              </h2>
              <p className="text-xs text-[#5A6C5F] mt-0.5">
                Consolidated GA4 traffic and Google Search Console visibility trend workspace
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-[#F7F8F7] border border-[#D8E1DA] px-2.5 py-1 text-[11px] font-semibold text-[#5A6C5F]">
              Awaiting data
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF3EE] text-[#213714] mb-3">
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold text-[#17221B]">
              No Analytics Data Connected
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6C5F] max-w-md mt-1.5 leading-relaxed">
              Historical charts and period comparisons will populate once Google Analytics 4 and Search Console integrations are authenticated in a later stage. No placeholder trends or sample figures are rendered.
            </p>
          </div>
        </section>

        {/* Right: Stage 1 Privacy & Security Guardrails */}
        <section
          aria-labelledby="governance-panel-heading"
          className="lg:col-span-4 rounded-xl border border-[#DCE3DD] bg-white p-6 shadow-2xs space-y-4"
        >
          <div className="flex items-center gap-2 border-b border-[#EDF1EE] pb-4">
            <ShieldCheck className="h-5 w-5 text-[#213714] shrink-0" aria-hidden="true" />
            <h2
              id="governance-panel-heading"
              className="text-base font-bold text-[#17221B]"
            >
              Stage 1 Guardrails
            </h2>
          </div>

          <ul className="space-y-3 text-xs text-[#3C4F41] leading-relaxed">
            <li className="flex items-start gap-2.5 rounded-lg bg-[#F8FAF8] border border-[#E6ECE7] p-3">
              <Lock className="h-4 w-4 text-[#8C6226] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="block text-[#17221B]">Production Access Denied</strong>
                <span>
                  Requests to <code className="font-mono text-[11px]">/odgi</code> are denied outside local development preview until real authentication is implemented.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 rounded-lg bg-[#F8FAF8] border border-[#E6ECE7] p-3">
              <ShieldCheck className="h-4 w-4 text-[#213714] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="block text-[#17221B]">Strict Patient Privacy</strong>
                <span>
                  ODGI never collects, stores, or displays patient names, phone numbers, email addresses, symptoms, consultation notes, addresses, or payment IDs.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 rounded-lg bg-[#F8FAF8] border border-[#E6ECE7] p-3">
              <Layers className="h-4 w-4 text-[#213714] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="block text-[#17221B]">Public Site Isolated</strong>
                <span>
                  Public hospital pages, clinical routes, checkout, enquiries, and SEO metadata remain isolated under their own layout group.
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Planned Intelligence Modules Directory */}
      <section aria-labelledby="modules-heading" className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2
            id="modules-heading"
            className="text-sm font-bold uppercase tracking-wider text-[#2E3F33]"
          >
            Platform Modules
          </h2>
          <span className="text-xs text-[#5A6C5F]">
            All modules awaiting Stage 2+ integration
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {intelligenceModules.map((mod) => (
            <Link
              key={mod.id}
              href={mod.href}
              className="group flex flex-col justify-between rounded-xl border border-[#DCE3DD] bg-white p-4 shadow-2xs hover:border-[#213714]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213714]"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#17221B] group-hover:text-[#213714]">
                    {mod.label}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-[#F7F8F7] border border-[#D8E1DA] px-2 py-0.5 text-[10px] font-semibold text-[#5A6C5F]">
                    Not connected
                  </span>
                </div>
                <p className="text-xs text-[#5A6C5F] leading-relaxed">
                  {mod.summary}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EDF1EE] flex items-center justify-between text-[11px] font-medium text-[#4D6052]">
                <span className="truncate">{mod.plannedSource}</span>
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 text-[#213714] group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
