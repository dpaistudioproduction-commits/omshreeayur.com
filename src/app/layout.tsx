import type { Metadata } from "next";
import { Lato, Philosopher } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup, generateMedicalOrganizationSchema } from "@/components/seo/SchemaMarkup";
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
  title: "Omshree Sidha Hospital | Premium Ayurveda & Siddha Cardiac Care",
  description: "Specialized Ayurveda & Siddha treatments for Heart Diseases, Low EF, Heart Failure, Respiratory, and Gastrointestinal Disorders in Kerala, India.",
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
        <SchemaMarkup schema={generateMedicalOrganizationSchema()} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
