import React from 'react';
import { TreatmentData } from '@/types/treatment';

export function SchemaMarkup({ schema }: { schema: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper to generate the MedicalOrganization schema
export function generateMedicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Omshree Sidha Hospital",
    "url": "https://omshreeayur.com",
    "logo": "https://omshreeayur.com/images/logo/logo.webp",
    "medicalSpecialty": [
      "Ayurvedic Medicine",
      "Cardiovascular",
      "Pulmonary",
      "Gastroenterologic"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vayala P.O.",
      "addressLocality": "Kottayam",
      "addressRegion": "Kerala",
      "postalCode": "686587",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-4822-229434",
      "contactType": "Customer Service"
    }
  };
}

export function generateTreatmentSchema(data: TreatmentData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalCondition",
        "name": data.hero.title,
        "description": data.whatItMeans,
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": data.category
        },
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Ayurvedic Treatment for " + data.hero.title,
          "description": data.howTreatmentIsPlanned
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };
}
