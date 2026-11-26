import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { GlobalConversionTracker } from "@/components/analytics/GlobalConversionTracker";
import { HeatmapTracker } from "@/components/analytics/HeatmapTracker";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

export const metadata: Metadata = {
  title: {
    template: '%s | Omshree Sidha Hospital',
    default: "Omshree Sidha Hospital | Multi-Speciality Ayurveda Hospital in Kerala",
  },
  description: "Authentic multi-speciality Ayurvedic hospital in Vayala, Kottayam, Kerala. Established in 1880, offering specialized inpatient clinical care for cardiovascular, hepatic, gastrointestinal, and chronic ailments.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omshree Sidha Hospital | Multi-Speciality Ayurveda Hospital in Kerala",
    description: "Authentic multi-speciality Ayurvedic hospital in Vayala, Kottayam, Kerala. Established in 1880, offering specialized inpatient clinical care for cardiovascular, hepatic, gastrointestinal, and chronic ailments.",
    url: "https://www.omshreeayur.com",
    siteName: "Omshree Sidha Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.omshreeayur.com/images/campus/campus-exterior-omshree.webp",
        width: 1200,
        height: 630,
        alt: "Omshree Sidha Hospital Campus Exterior",
      },
    ],
  },
  verification: {
    google: "EW7BB0HEjCQ2ynYA5Fo-oCIdlP1bKY0Ta2apXBpH0fY",
  },
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AnalyticsScripts />
      <GlobalConversionTracker />
      <HeatmapTracker />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
