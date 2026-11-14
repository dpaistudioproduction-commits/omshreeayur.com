# OMShree Sidha Hospital — Technical SEO, AEO, GEO & Content Architecture Audit
**Audit Date:** October 15, 2026  
**Auditor:** Antigravity Search Engine Optimization & Content Architecture Practice  
**Primary Domain:** `https://omshreeayur.com`  
**Indexing Status:** Fully Prerendered Static HTML (45 routes)  
**Schema Implementation:** JSON-LD (`MedicalOrganization`, `MedicalCondition`, `FAQPage`)  

---

## 1. Executive Summary: Search & Content Architecture

The Omshree Sidha Hospital web platform leverages Next.js App Router with server-side static generation (SSG), delivering fully rendered HTML and structured JSON-LD schemas directly on initial HTTP response. This architecture provides excellent crawlability for Googlebot and modern AI search agents (ChatGPT, Perplexity, Gemini).

However, our audit identified **material technical SEO blind spots, sitemap omissions, keyword cannibalization, and inconsistent clinical entity definitions**:

```mermaid
graph TD
    A[Search Engine / AI Agent] --> B[Crawls /sitemap.xml]
    B -->|Missing from Sitemap| C[/blog Hub Page]
    B -->|Missing from Sitemap| D[/products Page]
    B -->|Missing from Sitemap| E[/terms-and-conditions & /testimonials]
    A -->|Crawls Keyword: Low Ejection Fraction| F{Content Conflict}
    F -->|Informational Intent| G[/blog/what-is-ejection-fraction...]
    F -->|Commercial/Care Intent| H[/conditions/cardiovascular/low-ejection-fraction]
    F -->|Legacy Treatment Landing| I[/treatments/heart-disease-and-blocks]
```

---

## 2. Technical SEO Infrastructure Audit

### Metadata & Canonical Configuration
- **Root Metadata Base:** Correctly declared as `https://omshreeayur.com` in `src/app/layout.tsx:23`.
- **Default Title Template:** `'%s | Omshree Sidha Hospital'` properly applied across all page wrappers.
- **Search Console Verification:** Google Site Verification meta tag `EW7BB0HEjCQ2ynYA5Fo-oCIdlP1bKY0Ta2apXBpH0fY` verified present in `src/app/layout.tsx:30`.
- **OpenGraph & Twitter Card Metadata:** Dynamic treatments in `src/app/treatments/[slug]/page.tsx` generate compliant `openGraph` tags with fallback dimensions (`1200x630`).

### Robots Directives (`src/app/robots.ts`)
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://omshreeayur.com/sitemap.xml',
  };
}
```
- **Evaluation:** Verified compliant. Correctly blocks internal API routes (`/api/`) and dynamic Next.js bundles (`/_next/`) while preserving crawl budget for all static content.

### XML Sitemap Deficiencies (`src/app/sitemap.ts`)

Static code inspection of `src/app/sitemap.ts` revealed that several critical indexable pages are **completely omitted from the generated XML sitemap**:

| Omitted Route | Page Purpose | Indexing Impact | Remediation |
| :--- | :--- | :--- | :--- |
| `/blog` | Primary blog article directory | Search engines cannot discover newly published blogs via the root sitemap hub | Add `/blog` to `staticRoutes` in `sitemap.ts` |
| `/products` | Ayurvedic medicines catalogue | Low search visibility for hospital-manufactured formulations | Add `/products` to `staticRoutes` in `sitemap.ts` |
| `/terms-and-conditions` | Legal terms & conditions | Search engines detect orphan legal structure | Add `/terms-and-conditions` to `staticRoutes` |
| `/testimonials` | Patient case directory | Patient trust signals excluded from search index maps | Add `/testimonials` to `staticRoutes` |
| `/testimonials/suja-sabu` | Patient case study | Case study excluded from sitemap | Add testimonial subpages to sitemap |

---

## 3. Keyword Cannibalization & Search Intent Conflicts

### Case Study: Low Ejection Fraction & Cardiac Care
Our audit identified three competing URLs targeting overlapping cardiac queries without distinct search intent or canonical hierarchy:

1. **Route A:** `/blog/what-is-ejection-fraction-and-what-does-it-tell-you-about-heart-function`
   - *Search Intent:* Purely informational / diagnostic education (What is an EF number? What are normal ranges?).
   - *Conflict:* Contains promotional hospital claims and dangerous clinical advice on unrestricted fluid intake (`page.tsx:181`).
2. **Route B:** `/conditions/cardiovascular/low-ejection-fraction`
   - *Search Intent:* Medical condition overview and inpatient clinical management.
   - *Conflict:* Shares near-identical H2 headings with Route A, confusing search crawlers regarding which page should rank for "Ayurvedic treatment for low EF".
3. **Route C:** `/treatments/heart-disease-and-blocks`
   - *Search Intent:* Inpatient treatment for coronary blocks.
   - *Conflict:* Claims to melt blocks and cure cardiomyopathy, overlapping with Routes A and B.

### Recommended Resolution:
- Maintain **Route A (Blog)** strictly as neutral, educational patient literature with links pointing to Route B.
- Establish **Route B (Condition Page)** as the primary commercial/clinical landing page optimized for "Ayurvedic treatment for low ejection fraction".
- Cross-link from Blog to Condition page using contextual anchor text: *"Learn more about Omshree Sidha Hospital's [inpatient clinical protocols for Low Ejection Fraction](/conditions/cardiovascular/low-ejection-fraction)"*.

---

## 4. Structured Data & Schema Markup Validation

The site utilizes JSON-LD schema generated via `src/components/seo/SchemaMarkup.tsx`:

### 1. MedicalOrganization Schema (`layout.tsx:46`)
```json
{
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
}
```
- **Evaluation:** Valid syntax. Matches actual Kottayam hospital campus address.

### 2. Treatment Page Schema (`generateTreatmentSchema`)
- Emits `@type: "MedicalCondition"` linked to `@type: "MedicalTherapy"` and a nested `FAQPage`.
- **Finding:** Valid syntax. However, FAQ schema must not contain unsubstantiated cure claims, as Google Search enforces strict quality guidelines for Medical FAQs and can issue manual rich-snippet penalties for deceptive medical answers.

---

## 5. AI Search (AEO & GEO) Readiness

To evaluate the website's readiness for Answer Engine Optimization (Perplexity, ChatGPT Search, Google AI Overviews), we evaluated four core criteria:

| AEO / GEO Dimension | Implementation Status | Findings & Opportunities |
| :--- | :---: | :--- |
| **Direct Answer Blocks** | **STRONG** | Dynamic treatment pages feature a prominent `quickAnswer` block at the top of the viewport answering the search query concisely. |
| **FAQ Question Phrasing** | **GOOD** | Treatment pages include structured FAQs utilizing natural conversational queries (e.g. *"Is Ayurvedic treatment safe alongside my current heart medications?"*). |
| **Entity Consistency (GEO)** | **PARTIAL** | Hospital is consistently identified as "Omshree Sidha Hospital, Kottayam, Kerala". However, doctor author bios with medical license numbers are missing on blog posts. |
| **Medical Attribution & E-E-A-T** | **NEEDS WORK** | Blog posts lack visible "Medically Reviewed By: Dr. [Name], BAMS" markers, reducing trust scores in Google's helpful content algorithms and AI citation engines. |

---

## 6. Actionable SEO Remediation Backlog

1. **Sprint 1 (Sitemap Fixes):** Add `/blog`, `/products`, `/terms-and-conditions`, and `/testimonials` to `src/app/sitemap.ts`.
2. **Sprint 1 (Footer Links):** Update footer links to eliminate 404s on `/privacy-policy` and `/terms`.
3. **Sprint 2 (Canonical Alignment):** Distinctly separate search intent between the EF blog post and the Low EF condition page; add reciprocal cross-links.
4. **Sprint 2 (E-E-A-T Attribution):** Add verified physician author and medical reviewer cards to all blog templates (`src/app/blog/*`).
