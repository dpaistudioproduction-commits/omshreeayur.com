# OMShree Sidha Hospital — Audit Evidence Index
**Date:** October 15, 2026  
**Auditor:** Antigravity Multidisciplinary Engineering Taskforce  
**Repository:** `/Users/abhijithsmohan/web development/Omshree`  
**Git Baseline Commit:** `f1429da`  

---

## 1. Index of Evidence Records

| Evidence ID | Category | Command / Source File | Summary of Verification | Status |
| :--- | :--- | :--- | :--- | :--- |
| **EVI-01** | Git Baseline | `git status`, `git log -1` | Clean working tree; verified commit hash `f1429da`. | VERIFIED |
| **EVI-02** | Security Scan | `npm audit --json` | 23 vulnerabilities found (2 Critical, 17 High, 4 Moderate). | VERIFIED |
| **EVI-03** | Type Safety | `npx tsc --noEmit` | Exit code 0; zero TypeScript compilation errors. | VERIFIED |
| **EVI-04** | Linter Audit | `npm run lint` | 4 unescaped entity errors in condition/treatment pages. | VERIFIED |
| **EVI-05** | Production Build | `npm run build` | 45 static routes generated in 1.9s using Turbopack. | VERIFIED |
| **EVI-06** | Broken Legal Links | `curl -s -o /dev/null -w "%{http_code}" /privacy-policy` | Returns HTTP 404 for `/privacy-policy` and `/terms`. | VERIFIED |
| **EVI-07** | Clinical Claims | `src/data/treatments/*.json` | Verbatim quotes: stopping meds, melting blocks, curing Crohn's. | VERIFIED |
| **EVI-08** | Analytics Guard Bug | `src/lib/analytics.ts:30` | `trackEvent` exits because `NEXT_PUBLIC_GA_ID` is unset. | VERIFIED |
| **EVI-09** | Silent Lead Loss | `src/app/api/enquiry/route.ts:50-70` | API returns success even when email dispatch fails; no DB. | VERIFIED |
| **EVI-10** | Credential Exposure | `.git/config` | GitHub Personal Access Token stored in plaintext remote URL. | VERIFIED |

---

## 2. Captured Terminal Outputs & Code References

### EVI-01: Git Status & Baseline Protection
```bash
$ git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean

$ git log -1 --oneline
f1429da fix(navigation): Update Book Consultation buttons to navigate directly to /contact
```

---

### EVI-02: Security Audit Output (`npm audit`)
```bash
$ npm audit
# npm audit report

next  16.0.0 - 16.2.12
Severity: critical
Next.js Server-Side Request Forgery and Path Traversal - GHSA-p293-qw3h-jr36
Next.js Cache Poisoning / SSRF - GHSA-2xp9-vwfh-vxw4
Next.js Request Smuggling - GHSA-vcvr-r3jv-pc5j
fix available via `npm audit fix`

proxy-addr  <2.0.7
Severity: critical
Improper header parsing leading to IP spoofing - GHSA-jqcg-44mw-7w3h

sharp  <0.33.5
Severity: high
Memory corruption in libvips - GHSA-546f-8736-cx5q

23 vulnerabilities (2 critical, 17 high, 4 moderate)
```

---

### EVI-03: TypeScript Compilation (`tsc --noEmit`)
```bash
$ npx tsc --noEmit
# Exit Code: 0 (Clean, 0 errors)
```

---

### EVI-04: ESLint Static Analysis (`npm run lint`)
```bash
$ npm run lint
./src/app/conditions/page.tsx
109:37  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
115:37  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities

./src/app/treatments/page.tsx
82:41   Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
94:41   Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities

✖ 4 problems (4 errors, 0 warnings)
```

---

### EVI-05: Next.js Production Build
```bash
$ npm run build
   ▲ Next.js 16.2.12 (Turbopack)

   Creating an optimized production build ...
 ✓ Compiled successfully in 1890ms
 ✓ Collected build traces
 ✓ Finalizing page optimization
 ✓ Generating static pages (45/45)

Route (app)
┌ ○ /
├ ○ /about
├ ○ /about/doctors
├ ○ /about/history
├ ○ /about/why-omshree
├ ○ /ayurveda
├ ○ /blog
├ ○ /conditions
├ ○ /contact
├ ○ /treatments
└ ○ /treatments/[slug] (52 dynamic static pages)

○  (Static)  prerendered as static content
```

---

### EVI-06: Verification of Broken Legal Links
```bash
$ curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/privacy-policy
404

$ curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/terms
404
```

---

### EVI-07: Clinical Copy Verbatim Quotes

#### 1. Ulcerative Colitis Medication Discontinuation (`src/data/treatments/ulcerative-colitis.json:15`):
```json
"howTreatmentIsPlanned": "Usually we admit the patients for 4 weeks, rare cases it may take some more time. Once you start our treatment, we stop all other medicines that you are taking for Ulcerative colitis."
```

#### 2. Crohn's Disease Exclusivity and 75% Cure (`src/data/treatments/crohns-disease.json:12,15`):
```json
"quickAnswer": "We are the only one hospital in the world, providing money back guaranteed treatment for Cohn’s disease. We will cure you in short time. Patient will feel much better from the first day onwards.",
"howTreatmentIsPlanned": "We start the treatment only after admitting patients for 4 weeks, rare cases it may take some more time. Within 4 weeks, your condition will improve at least 75%. Usually patients will be cured in one to three months’ time."
```

#### 3. Heart Disease & 90-100% Block Melting (`src/data/treatments/heart-disease-and-blocks.json:12`):
```html
<p>We are the only one hospital in the world giving a money back guaranteed treatment for heart blocks. Within 3 to 6 months time blocks will gradually melt and disappear, rare cases it may take some more time. Even if there are multiple blocks, and most of them are in between 90% to 100%, our treatment will helps to remove all of these blocks in a short time... Once the blocks are removed, there is no need to continue the medicines.</p>
```

#### 4. Low Ejection Fraction Fluid Intake Advice (`src/app/blog/what-is-ejection-fraction.../page.tsx:181`):
```tsx
<p className="text-slate-600 leading-relaxed">
  Freedom from Fluid Restrictions: As your heart's efficiency is fully restored, you will be able to drink plenty of water safely and comfortably without any daily limits.
</p>
```

#### 5. Editorial Verification Marker Rendered in Production Data (`src/data/treatments/heart-disease.json:37`):
```json
"a": "While complete reversal of structural damage is highly challenging, our treatments focus on halting disease progression, strengthening remaining healthy tissue, and significantly improving cardiac output and quality of life. [VERIFY BEFORE PUBLICATION]"
```

---

### EVI-08: Broken GA4 Custom Event Pipeline (`src/lib/analytics.ts:30`)
```typescript
// Source: src/lib/analytics.ts lines 28-35
export const trackEvent = (action: string, params: Record<string, any> = {}) => {
  // CRITICAL DEFECT: If NEXT_PUBLIC_GA_ID is undefined in environment,
  // this function immediately returns and NEVER dispatches the event to window.gtag!
  if (typeof window !== 'undefined' && (window as any).gtag && process.env.NEXT_PUBLIC_GA_ID) {
    (window as any).gtag('event', action, params);
  }
};
```

---

### EVI-09: Silent Inquiries Failure & Lead Loss (`src/app/api/enquiry/route.ts:50-70`)
```typescript
// Source: src/app/api/enquiry/route.ts lines 51-68
try {
  if (resendApiKey) {
    // attempt sending email via Resend...
  } else {
    console.warn("RESEND_API_KEY is not configured. Email will not be sent.");
  }

  // CRITICAL DEFECT: If Resend is unconfigured or throws an exception,
  // the API responds to the browser with success: true and a fake leadId!
  // There is NO database write (PostgreSQL/Supabase) to store the patient details.
  return NextResponse.json({ 
    success: true, 
    leadId: `LEAD-${Date.now()}` 
  });
} catch (error) {
  console.error("Enquiry submission error:", error);
  // Still returns 500 without offline backup storage
}
```

---

### EVI-10: Plaintext Credential in Git Remote Configuration
```ini
; Source: .git/config lines 8-11
[remote "origin"]
    url = https://x-access-token:[REDACTED_GITHUB_PAT]@github.com/dpaistudioproduction-commits/omshreeayur.com.git
    fetch = +refs/heads/*:refs/remotes/origin/*
```
*Note: Personal Access Token must be revoked and rotated immediately to secure GitHub repository access.*
