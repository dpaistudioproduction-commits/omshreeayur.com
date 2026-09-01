"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface DoctorEditorialCardProps {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  initials: string;
  imagePath?: string;
  altText?: string;
  bioSnippet?: string;
}

export function DoctorEditorialCard({
  name,
  role,
  qualifications,
  initials,
  imagePath,
  altText,
  bioSnippet,
}: DoctorEditorialCardProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = imagePath && !imgError;

  return (
    <div className="bg-[#F7F1E1] border border-[#DBCFA8] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#517B32] transition-all duration-300">
      {/* Top: Portrait Area */}
      <div className="relative h-72 sm:h-80 w-full bg-[#E3D8C1] overflow-hidden flex items-center justify-center">
        {showImage ? (
          <Image
            src={imagePath!}
            alt={altText || name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImgError(true)}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-6 space-y-3">
            <div className="h-24 w-24 rounded-full bg-[#517B32]/15 border-2 border-[#517B32]/30 flex items-center justify-center">
              <span className="font-heading font-bold text-3xl text-[#517B32] tracking-wider">
                {initials}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#81754B] font-semibold">
              Verified Clinician • Omshree
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4 bg-[#402816]/80 backdrop-blur-xs text-[#E3D8C1] text-[11px] font-mono uppercase px-3 py-1 rounded-full border border-[#DBCFA8]/40">
          {qualifications}
        </div>
      </div>

      {/* Bottom: Doctor Details & Editorial Copy */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#517B32] block">
            {role}
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#66371B] group-hover:text-[#517B32] transition-colors">
            {name}
          </h3>
          {bioSnippet && (
            <p className="text-sm text-[#81754B] leading-relaxed pt-2 font-light">
              {bioSnippet}
            </p>
          )}
        </div>

        <div className="pt-4 border-t border-[#DBCFA8]">
          <Link
            href="/about/doctors"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#517B32] group-hover:text-[#6F9940] transition-colors"
          >
            <span>View Full Clinical Profile</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
