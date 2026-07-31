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
    "logo": "https://omshreeayur.com/logo.png",
    "medicalSpecialty": [
      "Ayurvedic Medicine",
      "Siddha Medicine",
      "Cardiovascular",
      "Pulmonary",
      "Gastroenterologic"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hospital Road",
      "addressLocality": "Kerala",
      "addressRegion": "KL",
      "postalCode": "682001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service"
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
        "description": data.overview,
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": data.category
        },
        "signOrSymptom": data.symptoms.map(s => ({
          "@type": "MedicalSymptom",
          "name": s
        })),
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Ayurvedic Treatment for " + data.hero.title,
          "description": data.treatmentApproach
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
