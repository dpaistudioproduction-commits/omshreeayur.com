import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-2", align === "center" && "justify-center")}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#B4833D]" />
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-[0.2em]",
              dark ? "text-[#E3D8C1]" : "text-[#517B32]"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] tracking-tight",
          dark ? "text-[#F7F1E1]" : "text-[#66371B]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-light",
            dark ? "text-[#E3D8C1]/90" : "text-[#81754B]"
          )}
        >
          {description}
        </p>
      )}

      <div
        className={cn(
          "h-0.5 w-12 bg-[#B4833D]/60 mt-4",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
    </div>
  );
}
