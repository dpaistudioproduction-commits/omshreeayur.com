import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Database, ShieldCheck } from "lucide-react";
import { isOdgiDevPreviewEnabled } from "@/lib/odgi/access";
import { getOdgiSubSection } from "@/lib/odgi/navigation";
import { DataSourceStatusBar } from "@/components/odgi/DataSourceStatusBar";

export const dynamic = "force-dynamic";

interface OdgiSectionPageProps {
  params: Promise<{ section: string }>;
}

export async function generateMetadata({
  params,
}: OdgiSectionPageProps): Promise<Metadata> {
  if (!isOdgiDevPreviewEnabled()) {
    return {
      title: "Not Found",
      robots: { index: false, follow: false },
    };
  }
  const { section } = await params;
  const item = getOdgiSubSection(section);
  if (!item) {
    return { title: "Not Found" };
  }
  return {
    title: item.label,
  };
}

export default async function OdgiSectionPage({
  params,
}: OdgiSectionPageProps) {
  if (!isOdgiDevPreviewEnabled()) {
    notFound();
  }

  const { section } = await params;
  const item = getOdgiSubSection(section);

  if (!item) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-[#DCE3DD] pb-5">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#8C6226]">
            {item.group} Module
          </p>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#142218]">
            {item.label}
          </h1>
          <p className="text-sm text-[#4D6052] max-w-2xl">{item.summary}</p>
        </div>

        <Link
          href="/odgi"
          className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-[#D8E1DA] bg-white px-3 py-2 text-xs font-semibold text-[#213714] hover:bg-[#F2F5F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213714]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Back to Overview</span>
        </Link>
      </div>

      <DataSourceStatusBar />

      <section className="rounded-xl border border-[#DCE3DD] bg-white p-8 shadow-2xs text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF3EE] text-[#213714]">
          <Database className="h-6 w-6" aria-hidden="true" />
        </div>

        <div className="space-y-1.5 max-w-lg mx-auto">
          <span className="inline-flex items-center rounded-full bg-[#F7F8F7] border border-[#D8E1DA] px-2.5 py-0.5 text-xs font-semibold text-[#5A6C5F]">
            Not connected • Awaiting data
          </span>
          <h2 className="text-lg font-bold text-[#17221B] pt-1">
            {item.label} Module Shell
          </h2>
          <p className="text-sm text-[#5A6C5F] leading-relaxed">
            Planned integration source: <strong className="text-[#17221B]">{item.plannedSource}</strong>. No external data source, database, or recording tool is connected in Stage 1.
          </p>
        </div>

        <div className="pt-4 border-t border-[#EDF1EE] max-w-md mx-auto flex items-center justify-center gap-2 text-xs text-[#4D6052]">
          <ShieldCheck className="h-4 w-4 text-[#213714] shrink-0" aria-hidden="true" />
          <span>Aggregated analytics only • Patient PII/PHI strictly excluded</span>
        </div>
      </section>
    </div>
  );
}
