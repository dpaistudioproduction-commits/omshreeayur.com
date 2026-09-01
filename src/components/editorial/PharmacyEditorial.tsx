"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Sparkles, Stethoscope, HelpCircle } from "lucide-react";
import { AUTHENTIC_PRODUCTS, ProductItem } from "@/lib/product-assets";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { key: "all", label: "All Formulations" },
  { key: "Respiratory", label: "Respiratory Care" },
  { key: "Proprietary", label: "Patented Protocols" },
  { key: "Rasayana", label: "Rasayanas" },
  { key: "Classical", label: "Classical Lineage" },
  { key: "Dermatology", label: "Dermatological" },
];

export function PharmacyEditorial() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all"
    ? AUTHENTIC_PRODUCTS
    : AUTHENTIC_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 md:py-32 bg-[#E3D8C1]/30 border-y border-[#DBCFA8]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B4833D]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#517B32]">
                In-House Ayurvedic Pharmacy & Research
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#66371B] leading-tight">
              GMP Certified Classical & Patented Formulations
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] leading-relaxed font-light max-w-3xl">
              Manufactured exclusively in our Vayala pharmacy under the direction of Sri M.J. Jose, holder of multiple Government of India Ayurvedic patents. Medicines are prepared from freshly harvested botanical extracts.
            </p>
          </div>
          
          <div className="lg:col-span-4 lg:text-right space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E3D8C1] text-[#66371B] border border-[#DBCFA8] text-xs font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#517B32]" />
              <span>100% In-House Clinical Formulations</span>
            </div>
            <div>
              <Link
                href="/patient-care/consultation"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#517B32] hover:text-[#6F9940] transition-colors"
              >
                <span>Consult Physician for Prescription</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Category Filters (Mobile Horizontal Scroll / Desktop Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer",
                selectedCategory === cat.key
                  ? "bg-[#517B32] text-white shadow-xs"
                  : "bg-white text-[#66371B] border border-[#DBCFA8] hover:bg-[#E3D8C1]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="bg-[#F7F1E1] rounded-3xl border border-[#DBCFA8] hover:border-[#517B32] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-md"
            >
              {/* Product Visual Container */}
              <div className="relative h-72 sm:h-80 w-full bg-white/70 flex items-center justify-center p-6 border-b border-[#DBCFA8]/60 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} - Authentic Ayurvedic Formulation by Omshree Sidha Hospital`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category & Patent Tag */}
                <div className="absolute top-4 left-4 bg-[#E3D8C1]/90 backdrop-blur-xs text-[#66371B] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#DBCFA8]">
                  {product.categoryLabel}
                </div>

                {product.patentStatus && (
                  <div className="absolute top-4 right-4 bg-[#517B32]/15 text-[#517B32] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#517B32]/30 flex items-center gap-1">
                    <Award className="h-3 w-3 text-[#B4833D]" />
                    <span>Patented</span>
                  </div>
                )}
              </div>

              {/* Product Content Details */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl text-[#66371B] group-hover:text-[#517B32] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DBCFA8] space-y-3">
                  <div className="text-xs text-[#66371B] font-medium bg-[#E3D8C1]/50 p-3 rounded-xl border border-[#DBCFA8]/40">
                    <strong className="text-[#517B32] block mb-0.5">Clinical Focus:</strong>
                    {product.therapeuticFocus}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-[#81754B] font-mono italic">
                      * Physician Prescribed
                    </span>
                    <Link
                      href="/patient-care/consultation"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#517B32] hover:text-[#6F9940] transition-colors"
                    >
                      <span>Enquire / Consult</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pharmacy Governance Notice */}
        <div className="mt-16 p-8 bg-white rounded-3xl border border-[#DBCFA8] max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="h-16 w-16 rounded-full bg-[#E3D8C1] text-[#517B32] flex items-center justify-center shrink-0 border border-[#DBCFA8]">
            <Stethoscope className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-lg text-[#66371B]">
              Ethical Medicine Governance Notice
            </h4>
            <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed font-light">
              Omshree Sidha Hospital does not sell medicines through commercial e-commerce checkout. All formulations are compounded in accordance with classical Ayurvedic texts and dispensed exclusively following a physical or tele-consultation assessment by our certified physicians.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
