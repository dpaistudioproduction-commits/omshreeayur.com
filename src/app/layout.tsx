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
  metadataBase: new URL('https://omshreeayur.com'),
  title: {
    template: '%s | Omshree Sidha Hospital',
    default: "Omshree Sidha Hospital | Premium Ayurvedic Cardiac Care",
  },
  description: "Specialized Ayurvedic treatments for Heart Diseases, Low EF, Heart Failure, Respiratory, and Gastrointestinal Disorders in Kerala, India.",
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
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
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
