# Stage 13 — Security & Privacy Hardening Report
**Omshree Sidha Hospital**

---

## 1. Threat Mitigation & Security Layers

| Threat Vector | Mitigation Strategy Implemented | Verification Result |
|---|---|---|
| **Automated Form Spam** | Hidden honeypot `website` field silently traps and discards bot submissions without email delivery | Verified in `stage-13-api-audit.mjs` (Returns `HONEYPOT-DISCARDED`) |
| **Denial of Service / Burst Spam** | In-memory IP rate limiter throttles excessive requests (HTTP 429 Too Many Requests) | Verified in unit test script |
| **HTML / Email Injection** | `sanitizeHtml()` encodes `<, >, &, ", '` before embedding in lead notification emails | Verified in `src/app/api/enquiry/route.ts` |
| **HTTP Method Abuse** | GET, PUT, DELETE requests to `/api/enquiry` return `HTTP 405 Method Not Allowed` with `Allow: POST` | Verified in unit test script |
| **Malformed JSON Exploits** | JSON parser wrapped in try/catch returning controlled `HTTP 400 Bad Request` without exposing stack traces | Verified in unit test script |
| **Secret & API Key Leakage** | `RESEND_API_KEY` accessed strictly server-side; zero private secrets in client bundles | Verified via bundle analysis |
| **Patient Privacy & HIPAA / GDPR** | Clinical condition, symptoms, medical history, names, and phone numbers stripped before firing GA4/Meta Pixel | Verified in `src/lib/analytics.ts` |

---

## 2. Privacy & Analytics Invariants

- **PII Exclusion:** Zero patient names, phone numbers, or email addresses are ever sent to third-party analytics.
- **Clinical Data Exclusion:** Zero health condition strings or medical descriptions are sent to GA4 or Meta.
- **Opt-In Execution:** Scripts only mount and execute when valid `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_META_PIXEL_ID` environment variables are present.
