"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpecialityItem {
  number: string;
  title: string;
  category: string;
  description: string;
  link: string;
  focusConditions: string[];
}

const SPECIALITIES: SpecialityItem[] = [
  {
    number: "01",
    title: "Cardiovascular Care & Circulation",
    category: "Hridaya Cikitsa",
    description: "Supportive management for Low Ejection Fraction (EF), coronary artery blocks, and systemic hypertension through targeted Rasayanas and Hrid Basti.",
    link: "/conditions/cardiovascular",
    focusConditions: ["Low Ejection Fraction", "Heart Blocks", "Hypertension", "Lipid Imbalance"],
  },
  {
    number: "02",
    title: "Hepatic & Liver Disorders",
    category: "Yakrit Roga",
    description: "Hepatoprotective clinical regimens for Fatty Liver (NAFLD), Liver Cirrhosis, elevated bilirubin, and metabolic sluggishness.",
    link: "/conditions/liver",
    focusConditions: ["Fatty Liver", "Liver Cirrhosis", "Hepatitis Support", "Elevated Enzymes"],
  },
  {
    number: "03",
    title: "Gastrointestinal & Digestive Agni",
    category: "Grahani & Annavaha Srotas",
    description: "Deep Agni restoration and intestinal mucosal healing for Irritable Bowel Syndrome (IBS), Crohn's Disease, Ulcerative Colitis, and chronic GERD.",
    link: "/conditions/gastrointestinal",
    focusConditions: ["IBS", "Crohn's Disease", "Ulcerative Colitis", "Chronic Acidity"],
  },
  {
    number: "04",
    title: "Classical Panchakarma Purification",
    category: "Shodhana Cikitsa",
    description: "Physician-supervised internal and external cleansing protocols including Vamana, Virechana, Snehavasti, Kashayavasti, and Nasya.",
    link: "/ayurveda/panchakarma",
    focusConditions: ["Cellular Detoxification", "Metabolic Rebalancing", "Chronic Toxin Elimination", "Dosha Harmony"],
  },
  {
    number: "05",
    title: "Respiratory & Bronchial Care",
    category: "Pranavaha Srotas",
    description: "Bronchodilating herbal formulations and Shwasahara therapies for Bronchial Asthma, chronic bronchitis, COPD, and allergic respiratory conditions.",
    link: "/conditions",
    focusConditions: ["Bronchial Asthma", "Chronic Cough", "Allergic Rhinitis", "COPD Support"],
  },
  {
    number: "06",
    title: "Patented Pharmacy Formulations",
    category: "Bhaishajya Kalpana",
    description: "In-house GMP manufacturing of classical Tailams, Kashayams, and proprietary formulations with Government of India patents.",
    link: "/treatments",
    focusConditions: ["Classical Tailams", "Medicinal Kashayams", "Targeted Elixirs", "Herbal Rasayanas"],
  },
];

export function SpecialityList() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SPECIALITIES.map((item) => (
          <Link
            key={item.number}
            href={item.link}
            className="group relative flex flex-col justify-between bg-white/5 backdrop-blur-xs border border-white/10 p-8 sm:p-10 rounded-[2rem] overflow-hidden hover:bg-white/10 hover:border-[#B4833D]/50 transition-all duration-500 hover:-translate-y-1 shadow-lg"
          >
            {/* Large Watermark Number */}
            <div className="absolute -right-4 -top-8 text-[120px] font-heading font-bold text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110">
              {item.number}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-xl md:text-2xl font-mono font-bold text-[#B4833D]">
                  {item.number}
                </span>
                <div className="h-10 w-10 rounded-full border border-white/10 bg-black/20 flex items-center justify-center group-hover:bg-[#B4833D] group-hover:border-[#B4833D] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5 text-[#E3D8C1]/60 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Title & Category */}
              <div className="mb-6">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B4833D] block mb-2">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F7F1E1] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#E3D8C1]/70 leading-relaxed font-light mb-8 flex-1">
                {item.description}
              </p>

              {/* Focus Conditions */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.focusConditions.map((cond) => (
                  <span
                    key={cond}
                    className="text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full bg-black/30 text-[#E3D8C1] border border-white/10 shadow-inner group-hover:border-[#B4833D]/30 transition-colors"
                  >
                    {cond}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
