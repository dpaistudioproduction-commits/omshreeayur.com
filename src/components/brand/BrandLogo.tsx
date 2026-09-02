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
        /* Footer: Logo with transparent background as requested */
        <div className="inline-flex items-center transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src={BRAND_ASSETS.logo.primaryWebp}
            alt={BRAND_ASSETS.logo.alt}
            width={240}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </div>
      ) : (
        /* Header: Authentic Official Hospital Brand Logo */
        <div className="flex items-center">
          <Image
            src={BRAND_ASSETS.logo.primaryWebp}
            alt={BRAND_ASSETS.logo.alt}
            width={320}
            height={64}
            className="h-10 sm:h-11 md:h-12 xl:h-13 2xl:h-14 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
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
      className="focus:outline-none inline-block"
    >
      {content}
    </Link>
  );
}
