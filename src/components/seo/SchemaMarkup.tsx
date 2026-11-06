import React from 'react';
import { TreatmentData } from '@/types/treatment';

export function SchemaMarkup({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper to generate the canonical MedicalOrganization schema
export function generateMedicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://www.omshreeayur.com/#organization",
    "name": "Omshree Sidha Hospital",
    "alternateName": "Omshree Ayurvedic Hospital",
    "url": "https://www.omshreeayur.com",
    "logo": "https://www.omshreeayur.com/images/logo/logo.webp",
    "image": "https://www.omshreeayur.com/images/campus/campus-exterior-omshree.webp",
    "foundingDate": "1880",
    "description": "Multi-speciality Ayurvedic Hospital & Research Centre in Vayala, Kottayam, Kerala. Established in 1880, specializing in cardiovascular, hepatic, gastrointestinal, and chronic disease management.",
    "medicalSpecialty": [
      "Ayurvedic Medicine",
      "Cardiovascular Medicine",
      "Pulmonary Medicine",
      "Gastroenterology",
      "Panchakarma"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vayala P.O.",
      "addressLocality": "Kottayam",
      "addressRegion": "Kerala",
      "postalCode": "686587",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9846992789",
        "contactType": "customer service",
        "availableLanguage": ["en", "ml", "hi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-4822-229434",
        "contactType": "reservations",
        "availableLanguage": ["en", "ml", "hi"]
      }
    ]
  };
}

export function generateTreatmentSchema(data: TreatmentData) {
  const conditionNode: Record<string, unknown> = {
    "@type": "MedicalCondition",
    "name": data.hero?.title || data.name,
    "description": data.whatItMeans || data.hero?.subtitle || data.seoDescription || data.name,
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "Ayurvedic Treatment for " + (data.hero?.title || data.name),
      "description": data.howTreatmentIsPlanned || "Comprehensive Ayurvedic clinical management and personalized therapy protocol."
    }
  };

  // Only assign associatedAnatomy if category is a recognized anatomical/clinical entity
  if (data.category && data.category.toLowerCase() !== "treatment" && data.category.toLowerCase() !== "general") {
    conditionNode.associatedAnatomy = {
      "@type": "AnatomicalStructure",
      "name": data.category
    };
  }

  const graph: Array<Record<string, unknown>> = [conditionNode];

  // Only emit FAQPage if valid FAQs exist
  if (data.faqs && Array.isArray(data.faqs) && data.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": data.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
