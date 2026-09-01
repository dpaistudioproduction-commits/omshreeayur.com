# Stage 13 — Pre-Launch Master Checklist
**Omshree Sidha Hospital**

---

## 1. Technical & Engineering QA (100% COMPLETE)

- [x] **42 Production Routes Live:** All return HTTP 200 OK.
- [x] **5 Legacy 308 Redirects:** Verified working with zero loops or chains.
- [x] **7 Invalid/Deleted Endpoints:** Verified returning HTTP 404 with dedicated recovery layout.
- [x] **0 Broken Internal Links:** Verified via automated recursive crawler across 43 pages.
- [x] **API Route Security:** `POST /api/enquiry` hardened with method guards, rate limiting, and honeypot.
- [x] **Mobile Action Bar:** Subtle bottom navigation bar active for Call, WhatsApp, and Consultation.
- [x] **TypeScript QA:** `npx tsc --noEmit` passed with 0 errors.
- [x] **Production Build:** `npm run build` compiled cleanly in 2.9s.

---

## 2. Medical Governance & Trust (CODE SAFE — CLINICAL SIGN-OFF PENDING)

- [x] **Zero Unethical Guarantees:** 100% cure and guaranteed recovery claims eliminated.
- [x] **Brand Entity Safeguard:** Ayurvedic hospital identity clearly distinguished from Siddha medicine.
- [x] **Clinical Review Markers:** All sensitive condition texts retain `[VERIFY BEFORE PUBLICATION]`.
- [ ] **[HUMAN ACTION REQUIRED]** Medical Director final sign-off on condition texts (Low EF, Cardiomyopathy, Liver Cirrhosis, Crohn's Disease).

---

## 3. Real-World Assets & Media (HUMAN ASSETS REQUIRED)

- [x] **No Fake Doctor Photos:** Typographic avatar badges preserve professional dignity.
- [x] **Organized Asset Structure:** `/public/images/doctors/`, `/public/images/hospital/`, `/public/images/facilities/`, `/public/images/therapies/`, `/public/images/logo/`.
- [ ] **[HUMAN ACTION REQUIRED]** Upload authentic studio headshots of Sri M.J. Jose, Dr. Justin M J, Dr. Susme M J.
- [ ] **[HUMAN ACTION REQUIRED]** Upload authentic photography of Vayala hospital campus and inpatient rooms.
- [ ] **[HUMAN ACTION REQUIRED]** Upload official transparent logo into `/public/images/logo/logo.webp`.

---

## 4. Production Deployment & Analytics Credentials (DEPLOYMENT REQUIRED)

- [x] **Environment Variable Guide:** Documented in `docs/STAGE-13-PRODUCTION-ENVIRONMENT.md` and `.env.example`.
- [ ] **[DEPLOYMENT REQUIRED]** Add live `RESEND_API_KEY` to production hosting environment.
- [ ] **[DEPLOYMENT REQUIRED]** Add live `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`).
- [ ] **[DEPLOYMENT REQUIRED]** Add live `NEXT_PUBLIC_META_PIXEL_ID`.
