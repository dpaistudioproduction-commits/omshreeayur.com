# Stage 13 — Production Environment Configuration & Safety Guide
**Omshree Sidha Hospital**

---

## 1. Environment Variables Overview

| Environment Variable | Server / Client Visibility | Purpose | Where Configured | Production Verification Method | Security Considerations |
|---|---|---|---|---|---|
| `RESEND_API_KEY` | **Server-Only** (Private) | Transactional email delivery for consultation enquiries | Hosting Provider (e.g. Vercel / Cloudflare / VPS `.env.production`) | Submit test enquiry on `/contact`; verify receipt in hospital inbox | Never expose with `NEXT_PUBLIC_` prefix. Never commit to Git. |
| `LEAD_EMAIL_TO` | **Server-Only** (Private) | Destination email address where patient enquiries are delivered | Hosting Provider / Server Env | Check lead recipient matches `info@omshreeayur.com` | Ensure address is actively monitored by medical coordination team. |
| `LEAD_EMAIL_FROM` | **Server-Only** (Private) | Verified sending email address | Hosting Provider / Server Env | Confirm sender domain is verified in Resend DNS | Prevents emails from landing in spam folders. |
| `NEXT_PUBLIC_GA_ID` | **Client-Visible** (Public) | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) | Hosting Provider / Next.js Build Env | Check network tab for `google-analytics.com` requests | Only public ID; zero patient PII or clinical data is transmitted. |
| `NEXT_PUBLIC_META_PIXEL_ID` | **Client-Visible** (Public) | Meta (Facebook) Pixel ID | Hosting Provider / Next.js Build Env | Check Meta Pixel Helper browser extension | Activates only when configured; clinical conditions are stripped. |

---

## 2. Production Environment Safety Rules

1. **Zero Client Secrets:** Private API keys (`RESEND_API_KEY`) are accessed strictly inside server route handlers (`src/app/api/enquiry/route.ts`).
2. **Graceful Fallback:** If `RESEND_API_KEY` is missing in staging or testing environments, the backend logs lead payloads securely in server stdout and does not crash or throw unhandled exceptions.
3. **No Hardcoded IDs:** Source code contains no hardcoded fake GA4 or Meta Pixel IDs. Tracking activates conditionally only when legitimate environment variables are injected.
4. **Attribution & Non-PII:** Analytics payloads only track safe actions (`consultation_cta_click`, `whatsapp_click`, `phone_click`, `enquiry_form_success`). Patient names, phone numbers, health conditions, and messages are stripped before triggering any client tracking scripts.
