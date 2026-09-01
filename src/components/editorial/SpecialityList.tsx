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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <div className="w-full">
      <div className="divide-y divide-[#DBCFA8]">
        {SPECIALITIES.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <Link
              key={item.number}
              href={item.link}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={cn(
                "group py-8 md:py-10 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer block",
                isHovered ? "bg-[#E3D8C1]/30 -mx-4 px-4 rounded-xl" : "hover:bg-[#E3D8C1]/20"
              )}
            >
              {/* Left Column: Number & Titles */}
              <div className="flex items-start gap-6 md:gap-10 lg:w-5/12">
                <span className="font-mono text-xl md:text-2xl font-bold text-[#B4833D] shrink-0 pt-1">
                  {item.number}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#517B32] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#66371B] group-hover:text-[#517B32] transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Middle Column: Clinical Description & Tags */}
              <div className="lg:w-6/12 pl-12 lg:pl-0 space-y-3">
                <p className="text-sm md:text-base text-[#81754B] leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.focusConditions.map((cond) => (
                    <span
                      key={cond}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#E3D8C1] text-[#66371B] border border-[#DBCFA8]"
                    >
                      {cond}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Arrow Action */}
              <div className="hidden lg:flex lg:w-1/12 justify-end items-center">
                <div className="h-12 w-12 rounded-full border border-[#DBCFA8] group-hover:border-[#517B32] group-hover:bg-[#517B32] group-hover:text-white flex items-center justify-center text-[#66371B] transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
