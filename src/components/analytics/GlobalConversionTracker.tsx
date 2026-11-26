"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

/**
 * GlobalConversionTracker
 * 
 * Automatically captures and dispatches conversion tracking events whenever a visitor
 * interacts with ANY phone call (tel:), WhatsApp (wa.me), or email (mailto:) link across
 * the entire website.
 * 
 * Ensures 100% Google Ads, Google Tag Manager (GTM), GA4, and Meta Pixel capture
 * even for server-rendered components, footers, headers, and markdown/dynamic links.
 */
export function GlobalConversionTracker() {
  useEffect(() => {
    let lastTrackedTimestamp = 0;
    let lastTrackedHref = "";

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href") || "";
      const href = rawHref.trim().toLowerCase();
      if (!href) return;

      const now = Date.now();
      // Suppress duplicate tracking within 600ms for the same link action
      if (now - lastTrackedTimestamp < 600 && lastTrackedHref === href) {
        return;
      }

      const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

      // 1. Phone Call Trigger (tel:)
      if (href.startsWith("tel:")) {
        lastTrackedTimestamp = now;
        lastTrackedHref = href;
        analytics.phoneClick(currentPath);
        return;
      }

      // 2. WhatsApp Chat Trigger (wa.me or api.whatsapp.com)
      if (href.includes("wa.me") || href.includes("api.whatsapp.com") || href.includes("whatsapp://")) {
        lastTrackedTimestamp = now;
        lastTrackedHref = href;
        analytics.whatsappClick(currentPath);
        return;
      }

      // 3. Email Inquiries (mailto:)
      if (href.startsWith("mailto:")) {
        lastTrackedTimestamp = now;
        lastTrackedHref = href;
        const emailAddress = rawHref.replace(/^mailto:/i, "").split("?")[0].trim();
        analytics.emailClick(currentPath, emailAddress);
        return;
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true, passive: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  return null;
}
