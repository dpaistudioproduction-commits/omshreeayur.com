# Stage 18 — High-Conversion, SEO-First & AEO-Ready Digital Platform Report
**Omshree Sidha Hospital (Ayurvedic Hospital • Est. 1880)**  
*Implementation Completed: September 1, 2026*

---

## 1. Three-Tier Conversion Architecture

Every page across the website now guides visitors toward three distinct, non-competing conversion channels based on their immediate intent:

| Tier | Action | Destination / Mechanism | Context-Specific Page Label |
|---|---|---|---|
| **PRIMARY** | **Book a Consultation** | `/patient-care/consultation` & `/contact` | • Homepage: *Book a Consultation*<br>• Conditions: *Discuss Your Condition*<br>• Therapies: *Consult an Ayurvedic Physician*<br>• Doctors: *Book Consultation with Physician*<br>• International: *International Patient Enquiry* |
| **SECONDARY** | **WhatsApp Consultation** | `https://wa.me/919846992789` | • Direct physician/care coordinator chat for rapid pre-arrival queries and report dispatch. |
| **TERTIARY** | **Call Hospital Reception** | `tel:+914822229434` | • Direct telephone line to hospital reception in Vayala, Kottayam. |

---

## 2. Hero Slider Conversion Hierarchy

The 5-slide cinematic hero slider (`src/components/home/HeroSlider.tsx`) delivers an immediate conversion message within the first 3 seconds of load:

1. **Slide 01 (Dhara):** *Traditional Shirodhara & Deep Nervous Rejuvenation* → CTAs: *Book a Consultation* + *Explore Therapies*.
2. **Slide 02 (Ayurveda):** *140+ Years Ancient Kerala Healing Heritage* → CTAs: *Discover Our Heritage* + *Why Choose Us*.
3. **Slide 03 (The Hospital):** *Omshree Sidha Hospital: Clinical Care, Inpatient Comfort in Vayala, Kerala* → CTAs: *About Our Hospital* + *In-Patient Facilities*.
4. **Slide 04 (Heart Care):** *Integrative Ayurvedic Care for Heart & Low Ejection Fraction* → CTAs: *Explore Heart Care* + *Hrid Basti Protocol*.
5. **Slide 05 (Liver & Gastro):** *Specialized Management for Liver & Gastrointestinal Disorders* → CTAs: *Explore Liver Care* + *Digestive Health Hub*.

---

## 3. Condition → Treatment → Consultation Funnel

Each of the 13 condition detail pages (`/conditions/[category]/[condition]`) implements a structured clinical conversion funnel:

```
Organic / Direct Search Query
       │
       ▼
Condition Overview & Severity Context
       │
       ▼
Ayurvedic Pathology & Agni/Dosha Perspective
       │
       ▼
Hospital Clinical Regimen & Classical Formulations
       │
       ▼
Associated Procedural Therapies (e.g. Hrid Basti / Abhyanga / Virechana)
       │
       ▼
Qualified Physician Profiles (`DoctorAvatar.tsx`)
       │
       ▼
AEO Structured Q&A (Direct Answers for Search & AI Engines)
       │
       ▼
Dual Conversion Actions (Book Consultation + WhatsApp Us)
```

---

## 4. High-Intent Organic SEO & Keyword Architecture

All metadata is tailored strictly to verified institutional offerings:

| High-Intent Search Cluster | Target Production URL | Primary Keyword Focus |
|---|---|---|
| **Ayurvedic Hospital Kerala** | `/` & `/about` | Ayurvedic Hospital in Kerala, Traditional Inpatient Hospital Kottayam |
| **Low Ejection Fraction Ayurveda** | `/conditions/cardiovascular/low-ejection-fraction` | Low EF Ayurvedic Treatment Kerala, Natural Heart Function Support |
| **Ayurvedic Heart Care & Blocks** | `/conditions/cardiovascular/heart-disease-and-blocks` | Cardiovascular Ayurveda Kerala, Hrid Basti Therapy |
| **Fatty Liver & Cirrhosis** | `/conditions/liver/fatty-liver` & `/conditions/liver/liver-cirrhosis` | Ayurvedic Treatment for Fatty Liver Kerala, Hepatic Care |
| **IBS & Gastrointestinal Care** | `/conditions/gastrointestinal/ibs` | Ayurvedic IBS Treatment Kerala, Agni Digestive Health |
| **Kerala Panchakarma Hospital** | `/ayurveda/panchakarma` & `/treatments/therapies` | Authentic Kerala Panchakarma, Classical Shirodhara Elakizhi |
| **International Ayurvedic Care** | `/international-patients` | International Patient Ayurvedic Hospital Kerala, Online Consultation |

---

## 5. AEO (Answer Engine Optimization) & Direct Q&A Structure

Structured Q&A modules on key hubs answer conversational queries directly for Google AI Overviews, Gemini, Perplexity, and ChatGPT:

- **What is Omshree Sidha Hospital?** — Multi-speciality Ayurvedic hospital located in Vayala, Kottayam, Kerala (Est. 1880).
- **Is Omshree a Siddha Hospital?** — No. "Sidha" is the family proper brand name; the institution exclusively practices traditional Kerala Ayurveda.
- **Where is the hospital located?** — Vayala P.O., Kottayam, Kerala 686587, India (2 hours from Cochin International Airport).
- **How does the consultation and admission process work?** — Detailed online/in-person review of diagnostic reports followed by customized in-patient therapy plans.

---

## 6. Structured Data & Schema Validation

Clean, valid JSON-LD schemas embedded without fabricated review counts or claims:
- `MedicalOrganization` (Official entity registration, Kottayam address, phone, logo)
- `FAQPage` (Direct, authoritative questions & answers)
- `BreadcrumbList` (Hierarchical crawl paths for search engines)
- `MedicalWebPage` (Condition-specific medical metadata)

---

## 7. International Patient Acquisition Funnel

Implemented in `/international-patients`:
1. **Send Enquiry:** Initial contact via online form or WhatsApp.
2. **Share Medical Reports:** Secure transmission of diagnostic records and medications.
3. **Pre-Arrival Consultation:** Direct physician assessment via video/tele-call to confirm treatment suitability.
4. **Treatment & Tariff Estimate:** Transparent breakdown of stay duration (14–28 days) and tariff.
5. **Travel to Kerala:** Arrival guidance via Cochin International Airport (COK) and transfer assistance.
6. **Hospital Care & Post-Discharge:** 24-hr medical supervision, classical Panchakarma, and remote follow-up.

---

## 8. Lead Capture Flow & Security Hardening

- **Frontend (`/contact` & `/patient-care/consultation`):**
  - Seamless domestic vs. international patient routing.
  - Honeypot spam defense (`name="website"`).
  - Clean validation, animated submission spinner, Reference Lead ID confirmation, and instant WhatsApp follow-up button.
- **Backend (`/api/enquiry`):**
  - Rate limiting (5 requests/min per IP).
  - Sanitization of all inputs.
  - Safe audit logging without clinical PII exposure.

---

## 9. Quality Gates & Technical Validation Results

| Test Gate | Scope | Result | Status |
|---|---|---|---|
| **TypeScript Compilation** | `npx tsc --noEmit` | **0 Errors** | 🟢 PASS |
| **Next.js Production Build** | `npm run build` | **Compiled in 2.7s** | 🟢 PASS |
| **Asset Integrity Audit** | `scripts/stage-14-asset-audit.mjs` | **7 Local + 4 Remote Verified** | 🟢 PASS |
| **Production Routes Audit** | `scripts/stage-13-production-audit.mjs` | **42 / 42 Routes HTTP 200 OK** | 🟢 PASS |
| **Legacy Redirects** | 5 Configured Redirects | **5 / 5 HTTP 308 Permanent** | 🟢 PASS |
| **404 Recovery** | 7 Deleted/Invalid URLs | **7 / 7 HTTP 404 Recovery** | 🟢 PASS |
| **Recursive Link Crawler** | 43 Internal Pages | **0 Broken Links** | 🟢 PASS |
| **Enquiry Lead API** | `/api/enquiry` | **Verified & Active** | 🟢 PASS |
