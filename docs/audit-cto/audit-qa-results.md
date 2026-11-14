# OMShree Sidha Hospital — Automated & Manual QA Test Results
**Audit Date:** October 15, 2026  
**Test Lead:** Antigravity QA & Test Automation Practice  
**Environment:** macOS Darwin arm64 / Node.js v20 / Next.js 16.2.12  
**Local Test Base URL:** `http://localhost:3000`  
**Git Baseline Commit:** `f1429da` (Working tree clean)  

---

## 1. QA Executive Summary

A comprehensive automated and manual test matrix was executed against the repository. Testing verified that the application compiles cleanly without TypeScript errors and builds 45 static pages. However, **quality assurance testing detected four major test failures**:
1. **ESLint Static Analysis:** FAILED due to 4 unescaped entity errors in condition/treatment JSX.
2. **Security Vulnerability Scan:** FAILED with 23 active package vulnerabilities (2 Critical).
3. **Route Integrity Test:** FAILED for `/privacy-policy` and `/terms` (both return HTTP 404).
4. **Analytics Pipeline Test:** FAILED due to a dead environment guard in `src/lib/analytics.ts`.

---

## 2. QA Test Case Execution Matrix

| Test ID | Test Purpose | Command / Procedure | Expected Result | Actual Result | Status | Regression Risk |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-01** | Verify TypeScript compilation and type safety | `npx tsc --noEmit` | Exit code 0, no type errors | Exit code 0, 0 errors | **PASS** | Low |
| **TC-02** | Verify Next.js production build and static page generation | `npm run build` | 45 static pages generated successfully | 45/45 static pages built in 1890ms | **PASS** | Low |
| **TC-03** | Verify ESLint code formatting and JSX rules | `npm run lint` | Exit code 0, 0 linter errors | 4 unescaped quote errors in JSX | **FAIL** | Low |
| **TC-04** | Verify third-party package security | `npm audit` | 0 vulnerabilities | 23 vulnerabilities (2 Critical, 17 High) | **FAIL** | Medium |
| **TC-05** | Verify public routes return HTTP 200 | `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` | HTTP 200 OK | HTTP 200 OK | **PASS** | Low |
| **TC-06** | Verify footer legal links return HTTP 200 | `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/privacy-policy` | HTTP 200 OK | HTTP 404 Not Found (also `/terms` 404) | **FAIL** | High |
| **TC-07** | Verify legacy URL redirects execute 308 permanent redirect | `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/about-our-hospital` | HTTP 308 Permanent Redirect | HTTP 308 Redirect to `/about` | **PASS** | Low |
| **TC-08** | Verify contact form API endpoint handling | `curl -X POST http://localhost:3000/api/enquiry -H "Content-Type: application/json" -d '{"fullName":"Test","email":"test@example.com","phone":"9999999999"}'` | Persists to DB, attempts email dispatch | Returns 200 with mock lead ID; no DB write | **PARTIAL** | High |
| **TC-09** | Verify GA4 client-side event dispatching | Browser console inspection of `trackEvent("consultation_cta_click")` | Dispatches `gtag('event', ...)` | Exits silently because `NEXT_PUBLIC_GA_ID` is missing | **FAIL** | High |
| **TC-10** | Verify XML Sitemap generation | `curl -s http://localhost:3000/sitemap.xml` | XML with all public routes | Valid XML; `/blog` & `/products` missing | **PARTIAL** | Low |
| **TC-11** | Verify robots.txt syntax | `curl -s http://localhost:3000/robots.txt` | Valid robots directives | Disallows `/api/`, links to sitemap | **PASS** | Low |

---

## 3. Detailed Test Failure Logs

### Failure Log TC-03: ESLint Unescaped Entities
```text
$ npm run lint

./src/app/conditions/page.tsx
109:37  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
115:37  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities

./src/app/treatments/page.tsx
82:41   Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
94:41   Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities

✖ 4 problems (4 errors, 0 warnings)
```
- **Remediation:** Replace unescaped single quotes with `&apos;` in `src/app/conditions/page.tsx` and `src/app/treatments/page.tsx`.

### Failure Log TC-04: Security Vulnerabilities
```text
$ npm audit --json
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "next": {
      "severity": "critical",
      "via": ["GHSA-p293-qw3h-jr36", "GHSA-2xp9-vwfh-vxw4", "GHSA-vcvr-r3jv-pc5j"]
    },
    "proxy-addr": {
      "severity": "critical",
      "via": ["GHSA-jqcg-44mw-7w3h"]
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 0,
      "moderate": 4,
      "high": 17,
      "critical": 2,
      "total": 23
    }
  }
}
```

### Failure Log TC-06: Broken Legal Links in Global Footer
```text
$ curl -I http://localhost:3000/privacy-policy
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8

$ curl -I http://localhost:3000/terms
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
```

---

## 4. Test Coverage Gaps & Recommended Automation

The repository currently lacks automated test scripts in `package.json`:
- **Current `scripts` in `package.json`:**
  ```json
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
  ```
- **Missing Automated Test Infrastructure:**
  1. No Unit Test runner (Jest / Vitest).
  2. No End-to-End (E2E) browser testing framework (Playwright / Cypress).
  3. No automated link crawler to detect 404 regressions before commits.
  4. No pre-commit Git hook (`husky` / `lint-staged`) enforcing `npm run lint` and `tsc --noEmit`.

### Recommended Test Suite Additions:
```json
"scripts": {
  "test:unit": "vitest run",
  "test:e2e": "playwright test",
  "test:links": "blc http://localhost:3000 -ro",
  "test:ci": "npm run lint && tsc --noEmit && npm run build"
}
```
