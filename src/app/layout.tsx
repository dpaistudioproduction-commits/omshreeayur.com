import type { Metadata } from "next";
import { Lato, Philosopher } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup, generateMedicalOrganizationSchema } from "@/components/seo/SchemaMarkup";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import "./globals.css";

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const philosopher = Philosopher({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.omshreeayur.com'),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${philosopher.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden"
        suppressHydrationWarning
      >
        <AnalyticsScripts />
        <SchemaMarkup schema={generateMedicalOrganizationSchema()} />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
