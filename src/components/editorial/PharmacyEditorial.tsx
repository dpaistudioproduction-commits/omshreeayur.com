"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Stethoscope, FlaskConical, FileCheck } from "lucide-react";
import { AUTHENTIC_PRODUCTS } from "@/lib/product-assets";
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
    <section className="py-24 md:py-32 bg-[#F7F1E1]">
      <div className="w-full max-w-[1440px] mx-auto px-[4%]">
        
        {/* Premium Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B4833D]"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">
              In-House Ayurvedic Pharmacy
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B4833D]"></span>
          </div>
          
          <h2 className="font-heading font-normal text-4xl sm:text-5xl md:text-6xl text-[#66371B] leading-[1.1] mb-8 relative">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] text-[#E3D8C1]/30 z-0 select-none">
              <FlaskConical className="w-24 h-24 stroke-1" />
            </span>
            <span className="relative z-10">GMP Certified Classical &amp; Patented Formulations</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#81754B] leading-relaxed font-light max-w-3xl mx-auto mb-10">
            Manufactured exclusively in our Vayala pharmacy under the direction of Sri M.J. Jose, holder of multiple Government of India Ayurvedic patents. Medicines are prepared from freshly harvested botanical extracts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#DBCFA8] shadow-sm text-xs font-bold uppercase tracking-widest text-[#517B32]">
              <ShieldCheck className="h-4 w-4" />
              <span>100% In-House Formulations</span>
            </div>
            <Link
              href="/patient-care/consultation"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#66371B] hover:text-[#517B32] transition-colors border-b border-[#66371B]/30 hover:border-[#517B32] pb-1 group"
            >
              <span>Consult For Prescription</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 mb-16 scrollbar-none px-[4%] md:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all whitespace-nowrap cursor-pointer uppercase border",
                selectedCategory === cat.key
                  ? "bg-[#66371B] text-white border-[#66371B] shadow-md"
                  : "bg-white/60 text-[#81754B] border-[#DBCFA8] hover:bg-white hover:text-[#66371B]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Uniform Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[4%]">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-[#DBCFA8] hover:border-[#B4833D] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md relative flex flex-col"
            >
              {/* Visual Container */}
              <div className="relative flex items-center justify-center bg-[#FDFBF7] w-full h-48 sm:h-52 border-b border-[#DBCFA8]/50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} - Authentic Ayurvedic Formulation`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={idx < 4}
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-multiply"
                />
                
                {/* Patent Tag */}
                {product.patentStatus && (
                  <div className="absolute top-3 right-3 bg-[#517B32] text-white text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm flex items-center gap-1 z-10">
                    <Award className="h-2.5 w-2.5" />
                    <span>Patented</span>
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <div className="mb-4">
                  <div className="text-[#81754B] text-[8px] font-bold uppercase tracking-[0.2em] mb-2">
                    {product.categoryLabel}
                  </div>
                  <h3 className="font-heading font-medium text-xl text-[#66371B] group-hover:text-[#517B32] transition-colors leading-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#81754B] leading-relaxed font-light line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="text-[10px] text-[#81754B] font-medium bg-[#FDFBF7] p-3 rounded-xl border border-[#DBCFA8]/50">
                    <strong className="text-[#B4833D] block mb-0.5 uppercase tracking-[0.2em] text-[8px]">Clinical Focus</strong>
                    <span className="font-light line-clamp-1">{product.therapeuticFocus}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] text-[#81754B]/60 font-mono italic">
                      * Physician Prescribed
                    </span>
                    <Link
                      href="/patient-care/consultation"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#517B32]/10 text-[#517B32] hover:bg-[#517B32] hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Ethical Governance Card (Fills empty space in the grid) */}
          <div className="sm:col-span-2 bg-[#3D2618] rounded-3xl border border-[#DBCFA8]/30 overflow-hidden relative flex flex-col justify-between p-8 sm:p-10 group hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#DBCFA8] via-transparent to-transparent group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-full bg-[#2D1B10] text-[#DBCFA8] flex items-center justify-center shrink-0 border border-[#DBCFA8]/30 shadow-inner">
                  <FileCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-2xl text-[#FDFBF7]">
                    Ethical Governance
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4833D] block mt-1">
                    Prescription Only Policy
                  </span>
                </div>
              </div>
              
              <p className="text-[13px] md:text-sm text-[#DBCFA8]/80 leading-relaxed font-light mb-8">
                Omshree Sidha Hospital does not sell medicines through commercial e-commerce. All formulations are compounded in accordance with classical Ayurvedic texts and dispensed exclusively following a formal consultation assessment by our certified physicians.
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <Link
                href="/patient-care/consultation"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2D1B10] bg-[#DBCFA8] hover:bg-white transition-colors px-6 py-3.5 rounded-full"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
