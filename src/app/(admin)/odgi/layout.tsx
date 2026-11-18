import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isOdgiDevPreviewEnabled } from "@/lib/odgi/access";
import { OdgiShell } from "@/components/odgi/OdgiShell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s | Omshree Digital Growth Intelligence",
    default: "Omshree Digital Growth Intelligence",
  },
  description:
    "Internal digital growth analytics and intelligence workspace for Omshree Sidha Hospital.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function OdgiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isOdgiDevPreviewEnabled()) {
    notFound();
  }

  return <OdgiShell>{children}</OdgiShell>;
}
