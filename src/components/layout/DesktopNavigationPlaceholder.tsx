import * as React from "react";
import Link from "next/link";

export function DesktopNavigationPlaceholder() {
  return (
    <nav
      aria-label="Desktop Navigation"
      className="flex items-center justify-center gap-0 xl:gap-0.5 2xl:gap-1.5 flex-nowrap"
    >
      <Link
        href="/about"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        About
      </Link>
      <Link
        href="/ayurveda"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        Ayurveda
      </Link>
      <Link
        href="/treatments"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        Treatments
      </Link>
      <Link
        href="/conditions"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        Conditions
      </Link>
      <Link
        href="/products"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        Products
      </Link>
      <Link
        href="/testimonials"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        Testimonials
      </Link>
      <Link
        href="/patient-care"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        Patient Care
      </Link>
      <Link
        href="/blog"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className="text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 flex items-center whitespace-nowrap transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
}
