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
        window.clarity = window.clarity || function(){(window.clarity.q = window.clarity.q || []).push(arguments);};

        function initClarity() {
          if (window.__clarityLoaded) return;
          window.__clarityLoaded = true;
          window.removeEventListener('scroll', initClarity);
          window.removeEventListener('pointerdown', initClarity);
          window.removeEventListener('touchstart', initClarity);
          window.removeEventListener('keydown', initClarity);
          var t = document.createElement("script");
          t.async = 1;
          t.src = "https://www.clarity.ms/tag/${clarityId}";
          var y = document.getElementsByTagName("script")[0];
          y.parentNode.insertBefore(t, y);
        }

        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', initClarity, { passive: true, once: true });
          window.addEventListener('pointerdown', initClarity, { passive: true, once: true });
          window.addEventListener('touchstart', initClarity, { passive: true, once: true });
          window.addEventListener('keydown', initClarity, { passive: true, once: true });
          if ('requestIdleCallback' in window) {
            requestIdleCallback(initClarity, { timeout: 4000 });
          } else {
            setTimeout(initClarity, 3500);
          }
        }
      `}
    </Script>
  );
}
