/**
 * Privacy-Safe Analytics Dispatcher for Omshree Sidha Hospital
 * 
 * STRICT COMPLIANCE:
 * NEVER transmit medical condition, diagnosis, symptoms, treatments,
 * patient names, phone numbers, or email addresses to any analytics provider.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  // Sanitize: strip any potential PII or medical data fields
  const safeParams: Record<string, any> = {};
  for (const [key, value] of Object.entries(params)) {
    if (['name', 'email', 'phone', 'healthConcern', 'message', 'diagnosis', 'symptom'].includes(key)) {
      continue;
    }
    safeParams[key] = value;
  }

  // Google Analytics 4
  if (window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    try {
      window.gtag('event', eventName, safeParams);
    } catch {
      // Ignore client-side tracking error
    }
  }

  // Meta Pixel
  if (window.fbq && process.env.NEXT_PUBLIC_META_PIXEL_ID) {
    try {
      if (eventName === 'enquiry_form_success') {
        window.fbq('track', 'Lead', { content_name: safeParams.patient_type || 'consultation' });
      } else if (eventName === 'whatsapp_click' || eventName === 'phone_click') {
        window.fbq('track', 'Contact');
      } else {
        window.fbq('trackCustom', eventName, safeParams);
      }
    } catch {
      // Ignore client-side tracking error
    }
  }
}

export const analytics = {
  consultationClick: (label: string = 'general') => {
    trackEvent('consultation_cta_click', { cta_label: label });
  },
  whatsappClick: (sourcePage: string) => {
    trackEvent('whatsapp_click', { source_page: sourcePage });
  },
  phoneClick: (sourcePage: string) => {
    trackEvent('phone_click', { source_page: sourcePage });
  },
  enquiryFormStart: (patientType: 'domestic' | 'international') => {
    trackEvent('enquiry_form_start', { patient_type: patientType });
  },
  enquiryFormSubmit: (patientType: 'domestic' | 'international') => {
    trackEvent('enquiry_form_submit', { patient_type: patientType });
  },
  enquiryFormSuccess: (patientType: 'domestic' | 'international') => {
    trackEvent('enquiry_form_success', { patient_type: patientType });
    if (patientType === 'domestic') {
      trackEvent('india_enquiry', {});
    } else {
      trackEvent('international_enquiry', {});
    }
  }
};
