import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND_ASSETS } from "@/lib/brand-assets";

interface BrandLogoProps {
  variant?: "header" | "footer" | "monogram";
  className?: string;
  isLink?: boolean;
}

export function BrandLogo({
  variant = "header",
  className,
  isLink = true,
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  const content = (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      {isFooter ? (
        /* Footer: Premium Typography Logo */
        <div className="flex flex-col items-start gap-1 group">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-full bg-[#B4833D]/20 flex items-center justify-center border border-[#B4833D]/30">
              <span className="font-heading font-bold text-[#F7F1E1] text-sm">OS</span>
            </div>
            <span className="font-heading text-2xl text-[#F7F1E1] tracking-wide group-hover:text-[#B4833D] transition-colors">
              Omshree Sidha
            </span>
          </div>
          <span className="text-[10px] text-[#B4833D] font-bold tracking-[0.2em] uppercase pl-10">
            {BRAND_ASSETS.institution.properEntity} • Est. 1880
          </span>
        </div>
      ) : (
        /* Header: Authentic Official Hospital Brand Logo */
        <div className="flex items-center">
          <Image
            src={BRAND_ASSETS.logo.primaryWebp}
            alt={BRAND_ASSETS.logo.alt}
            width={320}
            height={64}
            className="h-12 min-[1080px]:h-14 2xl:h-16 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            priority
          />
        </div>
      )}
    </div>
  );

  if (!isLink) {
    return content;
  }

  return (
    <Link
      href="/"
      aria-label={`${BRAND_ASSETS.institution.name} - Home`}
      className="focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 rounded-lg inline-block"
    >
      {content}
    </Link>
  );
}
