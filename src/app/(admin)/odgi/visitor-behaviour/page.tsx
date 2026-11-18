import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isOdgiDevPreviewEnabled } from "@/lib/odgi/access";
import { HeatmapStudio } from "@/components/odgi/HeatmapStudio";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Visitor Behaviour & Heatmap Studio",
};

export default function OdgiVisitorBehaviourPage() {
  if (!isOdgiDevPreviewEnabled()) {
    notFound();
  }

  return <HeatmapStudio />;
}
