"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface DoctorAvatarProps {
  name: string;
  initials: string;
  imagePath: string;
  altText: string;
  className?: string;
}

export function DoctorAvatar({
  name,
  initials,
  imagePath,
  altText,
  className,
}: DoctorAvatarProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "relative h-44 w-44 md:h-48 md:w-48 rounded-full mb-6 overflow-hidden flex items-center justify-center bg-emerald-100 text-emerald-800 border-2 border-emerald-200 shadow-sm flex-shrink-0 select-none",
        className
      )}
    >
      {!imageError && imagePath ? (
        <Image
          src={imagePath}
          alt={altText}
          fill
          sizes="(max-width: 768px) 176px, 192px"
          className="object-cover object-top"
          onError={() => setImageError(true)}
          priority={false}
        />
      ) : (
        <span
          className="text-4xl font-bold font-heading tracking-wide"
          aria-label={`Initials for ${name}`}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
