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
        /* Footer: Premium contrast lockup */
        <div className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-full bg-white/10 p-1 flex items-center justify-center border border-emerald-500/30 shadow-inner backdrop-blur-sm">
            <Image
              src={BRAND_ASSETS.logo.primaryWebp}
              alt={BRAND_ASSETS.logo.alt}
              width={40}
              height={40}
              className="h-9 w-9 object-contain object-left"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl text-white group-hover:text-emerald-300 transition-colors leading-tight">
              {BRAND_ASSETS.institution.brandName}
            </span>
            <span className="text-[11px] text-emerald-400 font-medium tracking-widest uppercase">
              {BRAND_ASSETS.institution.properEntity} • Est. 1880
            </span>
          </div>
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
