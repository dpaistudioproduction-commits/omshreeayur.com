# Stage 15 — Visual Asset & Brand Fidelity QA Report
**Omshree Sidha Hospital (Ayurvedic Hospital • Est. 1880)**  
*Audit Completed: September 1, 2026*

---

## 1. Asset Classification Summary

| Asset Item | Current Path / Location | Classification | Visual & Behavioral Status |
|---|---|---|---|
| **Official Primary Logo** | `/images/logo/logo.webp` / `logo.svg` | 🟡 TEMPORARY FALLBACK | Centralized in `BrandLogo.tsx`. Renders calibrated SVG/typographic monogram badge with zero layout shift on desktop/mobile. Ready for direct file drop-in. |
| **Sri M.J. Jose Portrait** | `/images/doctors/sri-mj-jose.webp` | 🟡 TEMPORARY FALLBACK | Centralized in `DoctorAvatar.tsx`. Renders `MJ` initials badge with `object-top` face-preserving image support upon upload. |
| **Dr. Justin M J Portrait** | `/images/doctors/dr-justin-mj.webp` | 🟡 TEMPORARY FALLBACK | Centralized in `DoctorAvatar.tsx`. Renders `JM` initials badge with `object-top` face-preserving image support upon upload. |
| **Dr. Susme M J Portrait** | `/images/doctors/dr-susme-mj.webp` | 🟡 TEMPORARY FALLBACK | Centralized in `DoctorAvatar.tsx`. Renders `SM` initials badge with `object-top` face-preserving image support upon upload. |
| **Kizhi Therapy Hero Banner** | `/images/kizhi_hero.png` | 🟢 AUTHENTIC + ACTIVE | Authentic Kerala Ayurvedic Kizhi bolus procedure photograph (769 KB PNG, HTTP 200). |
| **Shirodhara Hero Banner** | `/images/shirodhara_hero.png` | 🟢 AUTHENTIC + ACTIVE | Authentic continuous medicated oil flow procedure photograph (795 KB PNG, HTTP 200). |
| **GMP Pharmacy Bottle Asset** | `/images/products/bottle.png` | 🟢 AUTHENTIC + ACTIVE | Authentic in-house formulation bottle asset (271 KB PNG, HTTP 200). |
| **GMP Pharmacy Jar Asset** | `/images/products/jar.png` | 🟢 AUTHENTIC + ACTIVE | Authentic in-house formulation jar asset (271 KB PNG, HTTP 200). |
| **GMP Premium Bottle Asset** | `/images/products/premium_bottle.png` | 🟢 AUTHENTIC + ACTIVE | Authentic in-house formulation premium bottle asset (271 KB PNG, HTTP 200). |
| **Website Favicon** | `/favicon.ico` | 🟢 AUTHENTIC + ACTIVE | Classical favicon binary in root and metadata (25.9 KB, HTTP 200). |
| **Abhyanga Atmosphere Visual** | Unsplash CDN (`photo-1600334129128`) | 🔵 REMOTE APPROVED VISUAL | Medicated oil application atmosphere with Next.js Image responsive overlay. |
| **Hrid Basti Atmosphere Visual** | Unsplash CDN (`photo-1544367567`) | 🔵 REMOTE APPROVED VISUAL | Cardiac region herbal dough ring therapy atmosphere with Next.js Image overlay. |
| **Virechana Atmosphere Visual** | Unsplash CDN (`photo-1506126613`) | 🔵 REMOTE APPROVED VISUAL | Classical herbal detoxification & botanical ingredients atmosphere with Next.js Image overlay. |
| **Heart Disease Protocol Banner** | Unsplash CDN (`photo-1505751172`) | 🔵 REMOTE APPROVED VISUAL | Clinical integrative cardiovascular care atmosphere with Next.js Image overlay. |
| **Campus Exterior & Facility Photos** | `/images/hospital/`, `/images/facilities/` | 🔴 MISSING AUTHENTIC ASSET | Awaiting genuine hospital building and inpatient room photography; zero misleading stock photos used. |

---

## 2. Centralized Brand Architecture

### Single Source of Truth Created: `src/lib/brand-assets.ts`
- Centralizes all institution entity details, official logo targets, doctor identities, therapy images, and product assets.

### Centralized Brand Logo Component: `src/components/brand/BrandLogo.tsx`
- Replaces scattered inline header/footer markup with a single unified component.
- Implements `variant="header"` (emerald-800 badge on light navbar) and `variant="footer"` (emerald-700 badge with emerald-400 subtext on dark footer).
- Supports automatic seamless rendering when `/public/images/logo/logo.webp` or `/public/images/logo/logo.svg` is placed in the project.

### Centralized Doctor Avatar Component: `src/components/brand/DoctorAvatar.tsx`
- Implements graceful progressive enhancement: attempts to load real doctor portraits with `object-cover object-top` (protecting face and head framing) and falls back cleanly to high-contrast initials (`MJ`, `JM`, `SM`) without layout shift (CLS).

---

## 3. Image Cropping, Positioning & Mobile QA

1. **Responsive `sizes` Attributes Added:**
   - [treatments/page.tsx](file:///d:/Workstation%20DP-2/DP%20Clients/WEB%20DEVELOPMENT/omshreeayur.com/src/app/treatments/page.tsx): `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`
   - [treatments/therapies/page.tsx](file:///d:/Workstation%20DP-2/DP%20Clients/WEB%20DEVELOPMENT/omshreeayur.com/src/app/treatments/therapies/page.tsx): `(max-width: 1024px) 100vw, 50vw`
   - [treatments/[slug]/page.tsx](file:///d:/Workstation%20DP-2/DP%20Clients/WEB%20DEVELOPMENT/omshreeayur.com/src/app/treatments/%5Bslug%5D/page.tsx): `100vw`
   - [treatments/therapies/[slug]/page.tsx](file:///d:/Workstation%20DP-2/DP%20Clients/WEB%20DEVELOPMENT/omshreeayur.com/src/app/treatments/therapies/%5Bslug%5D/page.tsx): `100vw`
   - [DoctorAvatar.tsx](file:///d:/Workstation%20DP-2/DP%20Clients/WEB%20DEVELOPMENT/omshreeayur.com/src/components/brand/DoctorAvatar.tsx): `(max-width: 768px) 176px, 192px`

2. **Mobile Viewport Optimization (375px–1280px+):**
   - Verified no horizontal overflow caused by unconstrained images.
   - Doctor cards collapse cleanly on mobile viewports into centered vertical stacks.
   - Brand logo scales gracefully from `h-10 text-xl` on mobile to `h-12 text-2xl` on desktop.

---

## 4. Accessibility & Descriptive Alt Text Fixes

- Replaced generic or missing alt descriptions with descriptive, non-promotional text:
  - `alt="Clinical treatment approach for {treatment.name}"`
  - `alt="Ayurvedic therapy procedure - {therapy.name}"`
  - `alt="Sri M.J. Jose, Director and Lead Ayurvedic Researcher at Omshree Sidha Hospital"`
  - `alt="Dr. Justin M J, Qualified Ayurvedic Physician (BAMS) at Omshree Sidha Hospital"`
  - `alt="Dr. Susme M J, Qualified Ayurvedic Physician (BAMS) at Omshree Sidha Hospital"`

---

## 5. Files Changed in Stage 15

1. `src/lib/brand-assets.ts` **[NEW]**: Centralized brand asset registry.
2. `src/components/brand/BrandLogo.tsx` **[NEW]**: Unified brand logo component for header, footer, and navigation.
3. `src/components/brand/DoctorAvatar.tsx` **[NEW]**: Resilient doctor avatar component with image support and initials fallback.
4. `src/components/layout/Header.tsx` **[MODIFIED]**: Integrated `<BrandLogo variant="header" />`.
5. `src/components/layout/Footer.tsx` **[MODIFIED]**: Integrated `<BrandLogo variant="footer" />`.
6. `src/app/about/doctors/page.tsx` **[MODIFIED]**: Integrated `<DoctorAvatar />` for all three clinicians.
7. `src/app/treatments/page.tsx` **[MODIFIED]**: Added responsive `sizes` and descriptive `alt` text.
8. `src/app/treatments/therapies/page.tsx` **[MODIFIED]**: Added responsive `sizes` and descriptive `alt` text.
9. `src/app/treatments/[slug]/page.tsx` **[MODIFIED]**: Added `sizes="100vw"` and descriptive `alt` text.
10. `src/app/treatments/therapies/[slug]/page.tsx` **[MODIFIED]**: Added `sizes="100vw"` and descriptive `alt` text.
11. `src/app/page.tsx` **[MODIFIED]**: Standardized schema logo to `https://omshreeayur.com/images/logo/logo.webp`.
12. `src/app/about/page.tsx` **[MODIFIED]**: Standardized schema logo to `https://omshreeayur.com/images/logo/logo.webp`.
13. `src/components/seo/SchemaMarkup.tsx` **[MODIFIED]**: Standardized schema logo to `https://omshreeayur.com/images/logo/logo.webp`.

---

## 6. Validation Results

- **TypeScript Typecheck (`npx tsc --noEmit`):** **0 Errors** (Passed).
- **Next.js Production Build (`npm run build`):** **Compiled in 2.6s** (Passed).
- **Stage 14 Asset Audit (`scripts/stage-14-asset-audit.mjs`):** **100% Passed** (6 local assets + 4 remote visuals).
- **Stage 13 Regression Audit (`scripts/stage-13-production-audit.mjs`):**
  - **42 / 42 Production Routes HTTP 200 OK**
  - **5 / 5 Legacy Redirects HTTP 308 Permanent**
  - **7 / 7 404 Recovery Routes Verified**
  - **0 Broken Internal Links**
  - **Lead API Verified**
