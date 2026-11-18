"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

/**
 * Sensitive routes where session recording must never run to prevent capturing
 * patient consultation details, medical history, shipping addresses, or admin UI.
 */
const EXCLUDED_PREFIXES = ["/contact", "/checkout", "/odgi"] as const;

declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

function isExcludedPath(pathname: string | null): boolean {
  if (!pathname) return true;
  const normalized = pathname.toLowerCase();
  return EXCLUDED_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)
  );
}

export function ClarityScript() {
  const pathname = usePathname();
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || "zflhm0435o";
  const excluded = isExcludedPath(pathname);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      return;
    }

    if (excluded) {
      document.body.setAttribute("data-clarity-mask", "true");
      if (typeof window !== "undefined" && typeof window.clarity === "function") {
        try {
          window.clarity("stop");
        } catch {
          // Ignore client-side Clarity stop errors
        }
      }
    } else {
      document.body.removeAttribute("data-clarity-mask");
    }

    return () => {
      document.body.removeAttribute("data-clarity-mask");
    };
  }, [excluded]);

  if (process.env.NODE_ENV === "development" || !clarityId || excluded) {
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  );
}
