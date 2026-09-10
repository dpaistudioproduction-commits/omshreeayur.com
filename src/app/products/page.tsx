import React from "react";
import { Metadata } from "next";
import { PharmacyEditorial } from "@/components/editorial/PharmacyEditorial";

export const metadata: Metadata = {
  title: "Ayurvedic Medicines & Products | Omshree Sidha Hospital",
  description: "Explore our GMP Certified Classical & Patented Ayurvedic Formulations manufactured exclusively in our in-house pharmacy.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full bg-[#F7F1E1] min-h-screen">
      {/* Spacer for fixed header */}
      <div className="pt-32">
        <PharmacyEditorial />
      </div>
    </div>
  );
}
