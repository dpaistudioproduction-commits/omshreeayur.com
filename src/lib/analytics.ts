/**
 * Privacy-Safe Analytics Dispatcher for Omshree Sidha Hospital
 * 
 * STRICT COMPLIANCE:
 * NEVER transmit medical condition, diagnosis, symptoms, treatments,
 * patient names, phone numbers, or email addresses to any analytics provider.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const BLOCKED_KEYS = new Set([
  "name",
  "fullName",
  "email",
  "phone",
  "address",
  "pincode",
  "healthConcern",
  "message",
  "diagnosis",
  "symptom",
  "paymentId",
  "orderId",
]);

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Sanitize: strip any potential PII, payment IDs, or medical data fields
  const safeParams: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(params)) {
    if (BLOCKED_KEYS.has(key)) {
      continue;
    }
    safeParams[key] = value;
  }

  // 1. Google Analytics 4 & Google Ads gtag call
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, safeParams);
    } catch {
      // Ignore client-side tracking error
    }
  }

  // 2. Google Tag Manager dataLayer push (Custom Event triggers & GA4 standard conversions)
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    try {
      window.dataLayer.push({
        event: eventName,
        ...safeParams,
      });

      // Also dispatch standard conversion aliases for GTM / Google Ads / GA4
      if (eventName === "enquiry_form_success") {
        window.dataLayer.push({
          event: "generate_lead",
          patient_type: safeParams.patient_type || "domestic",
        });
      } else if (eventName === "whatsapp_click" || eventName === "phone_click" || eventName === "email_click") {
        window.dataLayer.push({
          event: "contact",
          contact_method: eventName === "phone_click" ? "phone" : eventName === "whatsapp_click" ? "whatsapp" : "email",
          source_page: safeParams.source_page,
        });
      }
    } catch {
      // Ignore client-side tracking error
    }
  }

  // Meta Pixel (Omshree pixel)
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1210872533263374";
  if (window.fbq && metaPixelId) {
    try {
      if (eventName === "enquiry_form_success") {
        window.fbq("track", "Lead", {
          content_name: safeParams.patient_type || "consultation",
        });
      } else if (eventName === "whatsapp_click" || eventName === "phone_click") {
        window.fbq("track", "Contact");
      } else if (eventName === "purchase") {
        window.fbq("track", "Purchase", {
          value: safeParams.value,
          currency: safeParams.currency || "INR",
          content_type: "product",
          content_name: safeParams.content_name || "Kafastha",
          num_items: safeParams.num_items || 1,
        });
      } else {
        window.fbq("trackCustom", eventName, safeParams);
      }
    } catch {
      // Ignore client-side tracking error
    }
  }
}

export const analytics = {
  consultationClick: (label: string = "general") => {
    trackEvent("consultation_cta_click", { cta_label: label });
  },
  whatsappClick: (sourcePage: string) => {
    trackEvent("whatsapp_click", { source_page: sourcePage });
  },
  phoneClick: (sourcePage: string) => {
    trackEvent("phone_click", { source_page: sourcePage });
  },
  emailClick: (sourcePage: string, emailAddress?: string) => {
    trackEvent("email_click", { source_page: sourcePage, destination: emailAddress || "info@omshreeayur.com" });
  },
  enquiryFormStart: (patientType: "domestic" | "international") => {
    trackEvent("enquiry_form_start", { patient_type: patientType });
  },
  enquiryFormSubmit: (patientType: "domestic" | "international") => {
    trackEvent("enquiry_form_submit", { patient_type: patientType });
  },
  enquiryFormSuccess: (patientType: "domestic" | "international") => {
    trackEvent("enquiry_form_success", { patient_type: patientType });
    if (patientType === "domestic") {
      trackEvent("india_enquiry", {});
    } else {
      trackEvent("international_enquiry", {});
    }
  },
  purchaseSuccess: (valueInr: number, packSize: string, quantity: number) => {
    trackEvent("purchase", {
      value: valueInr,
      currency: "INR",
      content_name: `Kafastha (${packSize})`,
      num_items: quantity,
    });
  },
};
