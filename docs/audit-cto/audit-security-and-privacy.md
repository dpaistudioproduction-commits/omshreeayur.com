# OMShree Sidha Hospital — Security and Privacy Audit
**Audit Date:** October 15, 2026  
**Auditor:** Antigravity Cybersecurity & Privacy Practice  
**Classification:** Restricted / Engineering & Legal Leadership  
**Assessment Standard:** OWASP Top 10, DPDP Act 2023, IT Rules 2011, CIS Benchmarks  

---

## 1. Executive Summary: Security & Privacy Posture

The application runs a modern, static-first Next.js 16 front-end architecture, which significantly minimizes traditional SQL injection and server-side remote code execution risks due to the absence of an integrated ORM or persistent database. However, the audit revealed **critical operational security, supply-chain, and regulatory privacy non-compliance issues**:

1. **Supply Chain:** 23 unpatched dependency vulnerabilities, including 2 Critical CVEs in Next.js core and `proxy-addr`.
2. **Credential Hygiene:** An active, highly privileged GitHub Personal Access Token (PAT) is stored in plaintext within the local repository `.git/config`.
3. **Data Protection & Privacy:** The hospital lacks a live Privacy Policy (footer links to `/privacy-policy` return HTTP 404), constituting an immediate non-compliance risk under the Indian Digital Personal Data Protection Act (DPDP Act 2023) and Information Technology Rules 2011.
4. **Network & HTTP Security:** Missing essential HTTP security headers (Content Security Policy, HTTP Strict Transport Security, X-Frame-Options) in Next.js configuration.
5. **Form Abuse:** The public patient lead submission endpoint relies on an ephemeral, in-memory rate limiter that provides zero protection against distributed spam attacks across serverless instances.

---

## 2. Dependency Vulnerability Analysis (`npm audit`)

A complete automated inspection of `package-lock.json` against the GitHub Advisory Database revealed **23 active vulnerabilities**:

| Severity | Count | Primary Impacted Packages | Advisory / CVE Identifiers | Remediable via Audit Fix? |
| :--- | :---: | :--- | :--- | :---: |
| **Critical** | 2 | `next`, `proxy-addr` | GHSA-p293-qw3h-jr36, GHSA-jqcg-44mw-7w3h | Requires major/minor patch upgrade |
| **High** | 17 | `sharp`, `undici`, `source-map-js`, `postcss` | GHSA-546f-8736-cx5q, GHSA-m4v8-wqvr-p9f7 | Partially remediable |
| **Moderate**| 4 | `cross-spawn`, `nanoid` | GHSA-3xgq-45jj-v275, GHSA-m64f-379q-2hpx | Yes |

### Detailed Vulnerability Breakdown

#### 1. Next.js Core Runtime (Critical)
- **Affected Range:** `16.0.0` – `16.2.12` (Current installed version: `16.2.12`)
- **Vulnerabilities:**
  - `GHSA-p293-qw3h-jr36`: Server-Side Request Forgery (SSRF) and path traversal in image optimization / server actions.
  - `GHSA-2xp9-vwfh-vxw4`: Cache Poisoning via unsanitized host headers.
  - `GHSA-vcvr-r3jv-pc5j`: HTTP Request Smuggling on downstream reverse proxies.
- **Remediation:** Upgrade Next.js to the latest audited stable release (`npm install next@latest`).

#### 2. `proxy-addr` Header Parsing (Critical)
- **Vulnerability:** `GHSA-jqcg-44mw-7w3h` allows header spoofing of client IP addresses via malformed `X-Forwarded-For` headers.
- **Impact on Hospital:** Rate limiting in `/api/enquiry` relies on `request.headers.get("x-forwarded-for")`. Attackers can forge IP addresses to bypass rate limiting completely.

#### 3. `sharp` Image Processing (High)
- **Vulnerability:** `GHSA-546f-8736-cx5q` (Memory corruption vulnerability in native `libvips` bindings).
- **Remediation:** Update `sharp` to `>=0.33.5`.

---

## 3. Credential Hygiene & Secret Management

### Finding SEC-03: Plaintext GitHub PAT in `.git/config`
- **Location:** `.git/config` line 9
- **Evidence:**
  ```ini
  url = https://x-access-token:[REDACTED_GITHUB_PAT]@github.com/dpaistudioproduction-commits/omshreeayur.com.git
  ```
- **Severity:** P1 (High)
- **Risk:** Plaintext credential exposure on local developer workstations, terminal history, and backup snapshots.
- **Mandatory Action:**
  1. Revoke the exposed Personal Access Token immediately via GitHub Settings -> Developer Settings -> Personal Access Tokens.
  2. Configure Git remote to use SSH (`git@github.com:...`) or macOS Keychain credential helper (`osxkeychain`).
  3. Never embed personal access tokens directly into Git remote URLs.

---

## 4. HTTP Security Headers & Network Hardening

Static inspection of `next.config.ts` confirms that **no custom security headers** are currently injected into HTTP responses.

### Missing Critical Security Headers:
1. **Content-Security-Policy (CSP):** Missing. Leaves application vulnerable to malicious script injection if any third-party tag in GTM (`GTM-K5C9V6K`) is compromised.
2. **Strict-Transport-Security (HSTS):** Missing `max-age=63072000; includeSubDomains; preload`.
3. **X-Frame-Options:** Missing `DENY` or `SAMEORIGIN`. Exposes booking and consultation forms to clickjacking attacks.
4. **X-Content-Type-Options:** Missing `nosniff`.
5. **Referrer-Policy:** Missing `strict-origin-when-cross-origin`.
6. **Permissions-Policy:** Missing restriction of browser APIs (`camera=(), microphone=(), geolocation=()`).

### Recommended `next.config.ts` Header Configuration:
```typescript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    },
  ];
}
```

---

## 5. API Endpoint Hardening & Lead Pipeline Security

### Endpoint Inspected: `POST /api/enquiry`
- **File:** `src/app/api/enquiry/route.ts`
- **Observed Behavior:**
  - Rate Limiting: Uses in-memory `Map<string, { count: number; lastReset: number }>` limited to 5 requests per 15 minutes per IP.
  - Flaw: In a serverless cloud deployment (Vercel, AWS Lambda), each invocation may execute on a separate container, resetting the memory state and defeating rate limiting.
  - CSRF Protection: Absent. Cross-origin scripts from malicious sites can trigger POST requests directly to `/api/enquiry`.
  - Input Validation: Uses basic regex validation for emails and phone numbers.
  - Secret Handling: `resendApiKey = process.env.RESEND_API_KEY`. The variable is read on the server side and never leaked to the client bundle (Verified).

---

## 6. Privacy & Healthcare Regulatory Compliance

### Indian Data Protection Compliance (DPDP Act 2023 & IT Rules 2011)

| Requirement | Implementation Status | Legal & Regulatory Risk |
| :--- | :--- | :--- |
| **Valid Privacy Policy** | **FAIL (HTTP 404)** | Section 5 of DPDP Act 2023 mandates notice before collecting personal data. Footer link to `/privacy-policy` is a dead 404. Immediate statutory non-compliance. |
| **Notice on Data Usage** | **FAIL (Missing)** | Consultation form collects name, phone, medical condition, and reports without specifying retention duration or processing entities. |
| **Grievance Officer Designation** | **FAIL (Missing)** | Rule 5(9) of IT Rules 2011 requires the name, address, and contact information of a designated Grievance Officer on the website. |
| **Explicit Consent for Health Data** | **FAIL (Missing)** | Medical conditions submitted via the contact form constitute sensitive personal health data. No explicit consent checkbox exists. |
| **Cookie Notice / Consent Mode** | **FAIL (Missing)** | GA4 (`G-4GFE7SYQPF`) and GTM (`GTM-K5C9V6K`) fire automatically on page load without obtaining prior user consent or honoring Consent Mode v2. |

---

## 7. Remediation Action Plan (Security & Privacy)

1. **Immediate (24 Hours):**
   - Revoke and rotate GitHub Personal Access Token in `.git/config`.
   - Create a dedicated `/privacy-policy` page with DPDP Act 2023 disclosures, designated Grievance Officer, and data retention schedules.
2. **Short Term (72 Hours):**
   - Update `next.config.ts` to enforce security headers (HSTS, CSP, X-Frame-Options).
   - Add explicit consent checkbox to `src/app/contact/page.tsx` before form submission.
3. **Medium Term (Week 2):**
   - Upgrade Next.js to eliminate critical CVEs.
   - Replace in-memory rate limiting with Redis-backed Upstash.
