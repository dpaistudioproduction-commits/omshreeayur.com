"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

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
    <div className="flex flex-col items-center text-center group cursor-pointer w-full max-w-sm mx-auto">
      {/* Top: Arch Portrait Area */}
      <div className="relative h-80 sm:h-96 w-full bg-[#F7F1E1] overflow-hidden rounded-t-[10rem] rounded-b-3xl mb-8 group-hover:-translate-y-2 transition-transform duration-500 shadow-md">
        {showImage ? (
          <Image
            src={imagePath!}
            alt={altText || name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImgError(true)}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-3">
            <div className="h-24 w-24 rounded-full bg-[#517B32]/10 border-2 border-[#517B32]/20 flex items-center justify-center">
              <span className="font-heading font-bold text-3xl text-[#517B32] tracking-wider">
                {initials}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#81754B] font-semibold">
              Verified Clinician
            </span>
          </div>
        )}

        {/* Qualifications Tag */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center">
          <div className="bg-white/90 backdrop-blur-sm text-[#517B32] text-[10px] font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full shadow-sm">
            {qualifications}
          </div>
        </div>
      </div>

      {/* Bottom: Doctor Details & Editorial Copy */}
      <div className="flex flex-col items-center space-y-3 w-full px-4">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B4833D] block">
          {role}
        </span>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#66371B] group-hover:text-[#517B32] transition-colors">
          {name}
        </h3>
        {bioSnippet && (
          <p className="text-sm text-[#81754B] leading-relaxed font-light line-clamp-3">
            {bioSnippet}
          </p>
        )}

        <div className="pt-4">
          <Link
            href="/about/doctors"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#517B32] group-hover:text-[#6F9940] transition-colors"
          >
            <span className="border-b border-[#517B32]/30 pb-0.5 group-hover:border-[#6F9940] transition-colors">View Clinical Profile</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
