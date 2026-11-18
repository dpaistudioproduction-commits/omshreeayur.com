import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Hospital Location",
  description: "Get in touch with Omshree Sidha Hospital in Vayala, Kottayam, Kerala. Book inpatient consultations, emergency contacts, directions, and phone numbers.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us & Hospital Location | Omshree Sidha Hospital",
    description: "Get in touch with Omshree Sidha Hospital in Vayala, Kottayam, Kerala. Book inpatient consultations, emergency contacts, directions, and phone numbers.",
    url: "https://www.omshreeayur.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

