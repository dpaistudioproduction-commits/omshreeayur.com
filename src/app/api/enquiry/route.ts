import { NextRequest, NextResponse } from "next/server";
import { EnquiryPayload, EnquiryResponse } from "@/types/enquiry";

// Simple in-memory rate limiter (per IP)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = process.env.NODE_ENV === "development" ? 100 : 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest): Promise<NextResponse<EnquiryResponse>> {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";

    // 1. Rate Limiting Check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please call the hospital directly at +91 98469 92789 or try again later.",
        },
        { status: 429 }
      );
    }

    let body: EnquiryPayload;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or malformed JSON payload.",
        },
        { status: 400 }
      );
    }

    // 2. Honeypot Anti-Spam Check
    if (body.website && body.website.trim().length > 0) {
      // Silently accept to mislead bots without sending emails
      return NextResponse.json({
        success: true,
        message: "Your enquiry has been received.",
        leadId: "HONEYPOT-DISCARDED",
      });
    }

    // 3. Server-side Validation
    const fieldErrors: Record<string, string> = {};

    if (!body.patientType || (body.patientType !== "domestic" && body.patientType !== "international")) {
      fieldErrors.patientType = "Please select whether you are inquiring from India or Internationally.";
    }

    if (!body.fullName || body.fullName.trim().length < 2) {
      fieldErrors.fullName = "Please provide the patient's full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      fieldErrors.email = "Please enter a valid email address.";
    }

    const phoneDigits = (body.phone || "").replace(/\D/g, "");
    if (!body.phone || phoneDigits.length < 7) {
      fieldErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (body.patientType === "international") {
      if (!body.country || body.country.trim().length < 2) {
        fieldErrors.country = "Please provide your country of residence.";
      }
    }

    if (!body.healthConcern || body.healthConcern.trim().length < 2) {
      fieldErrors.healthConcern = "Please specify your primary health concern.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    // 4. Generate Lead ID
    const leadId = `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // 5. Hospital Notification Dispatch
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.LEAD_EMAIL_TO || "info@omshreeayur.com";
    const emailFrom = process.env.LEAD_EMAIL_FROM || "onboarding@resend.dev";
    const resendBaseUrl = process.env.RESEND_BASE_URL || "https://api.resend.com";

    // 1. Strict Credential Check: Never simulate success if API key is unconfigured
    if (!resendApiKey || resendApiKey.trim() === "") {
      console.error("[ENQUIRY API] Error: MISSING_CONFIG", { leadId });
      return NextResponse.json(
        {
          success: false,
          message: "Our online enquiry dispatch system is temporarily offline. Please call our hospital directly at +91 98469 92789 or connect with us on WhatsApp.",
          leadId,
        },
        { status: 503 }
      );
    }

    // 2. Safe Subject Line Construction (strip CRLF to prevent header injection)
    const safeSubjectName = body.fullName.trim().replace(/[\r\n]+/g, " ");
    const safeSubjectConcern = body.healthConcern.trim().replace(/[\r\n]+/g, " ");
    const safeSubjectType = body.patientType === "international" ? "INTERNATIONAL" : "DOMESTIC";
    const emailSubject = `[New Consultation Enquiry] ${safeSubjectType} - ${safeSubjectName} (${safeSubjectConcern})`;

    // 3. Strict HTML Escaping for All User-Controlled Body Values
    const safeFullName = sanitizeHtml(body.fullName.trim());
    const safeHealthConcern = sanitizeHtml(body.healthConcern.trim());
    const safeEmailDisplay = sanitizeHtml(body.email.trim());
    const safePhoneDisplay = sanitizeHtml(body.phone.trim());

    // Normalize and escape mailto: and tel: links
    const safeEmailHref = encodeURIComponent(body.email.trim());
    const safeTelDigits = body.phone.replace(/[^0-9+]/g, "");
    const safeTelHref = sanitizeHtml(safeTelDigits);

    // Location string construction with full HTML escaping
    const rawLocation = body.patientType === "international"
      ? (body.country?.trim() || "International")
      : [body.city?.trim(), body.state?.trim()].filter(Boolean).join(", ") || "India";
    const safeLocation = sanitizeHtml(rawLocation);

    // Message body: HTML-escape original text FIRST, then convert line breaks to <br />
    const rawMessage = body.message?.trim() || "No additional message provided.";
    const safeMessageHtml = sanitizeHtml(rawMessage).replace(/\r?\n/g, "<br />");

    // Attribution parameters: HTML-escaped
    const safeUtmSource = sanitizeHtml(body.utmSource?.trim() || "direct");
    const safeUtmMedium = sanitizeHtml(body.utmMedium?.trim() || "none");
    const safeUtmCampaign = sanitizeHtml(body.utmCampaign?.trim() || "none");
    const safeLandingPage = sanitizeHtml(body.landingPage?.trim() || "/");

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #064e3b; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">Omshree Sidha Hospital</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">New Consultation Enquiry received</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #334155; line-height: 1.6;">
          <div style="background-color: #f8fafc; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px; font-weight: bold; border-left: 4px solid #059669;">
            Lead ID: ${leadId} | Type: ${body.patientType === 'international' ? 'International Patient' : 'Patient in India'}
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 35%;">Patient Name:</td>
              <td style="padding: 8px 0;">${safeFullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmailHref}">${safeEmailDisplay}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0;"><a href="tel:${safeTelHref}">${safePhoneDisplay}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Location:</td>
              <td style="padding: 8px 0;">${safeLocation}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Primary Concern:</td>
              <td style="padding: 8px 0; color: #064e3b; font-weight: bold;">${safeHealthConcern}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message / Context:</td>
              <td style="padding: 8px 0;">${safeMessageHtml}</td>
            </tr>
          </table>

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">
            Attribution: Source=${safeUtmSource}, Medium=${safeUtmMedium}, Campaign=${safeUtmCampaign}, LandingPage=${safeLandingPage}<br />
            Received at: ${timestamp}
          </p>
        </div>
      </div>
    `;

    try {
      const resendResponse = await fetch(`${resendBaseUrl}/emails`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: [emailTo],
          subject: emailSubject,
          html: emailHtml,
        }),
        signal: AbortSignal.timeout(8000), // 8-second bounded timeout
      });

      if (!resendResponse.ok) {
        console.error("[ENQUIRY API] Error: PROVIDER_REJECTED", {
          leadId,
          providerStatus: resendResponse.status,
        });
        return NextResponse.json(
          {
            success: false,
            message: "We encountered an issue dispatching your consultation request. Please call our hospital directly at +91 98469 92789 or message us on WhatsApp.",
            leadId,
          },
          { status: 502 }
        );
      }
    } catch (dispatchErr: unknown) {
      const isTimeout =
        dispatchErr instanceof Error &&
        (dispatchErr.name === "TimeoutError" || dispatchErr.name === "AbortError");

      console.error(`[ENQUIRY API] Error: ${isTimeout ? "TIMEOUT" : "NETWORK_ERROR"}`, { leadId });

      return NextResponse.json(
        {
          success: false,
          message: isTimeout
            ? "The notification service timed out while dispatching your request. Please call our hospital directly at +91 98469 92789 or message us on WhatsApp."
            : "A network error prevented dispatching your enquiry. Please call our hospital directly at +91 98469 92789 or message us on WhatsApp.",
          leadId,
        },
        { status: isTimeout ? 504 : 502 }
      );
    }

    // Return success ONLY after provider accepts payload, worded accurately (no false inbox arrival claim)
    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to Omshree Sidha Hospital. Your consultation enquiry has been submitted. Our medical team will review your details and reach out to you directly.",
      leadId,
    });

  } catch {
    console.error("[ENQUIRY API] Error: INTERNAL_ERROR");
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while submitting your enquiry. Please reach out via WhatsApp or call us directly at +91 98469 92789.",
      },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Method Not Allowed. Please use POST to submit enquiries." },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function PUT(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Method Not Allowed. Please use POST to submit enquiries." },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function DELETE(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Method Not Allowed. Please use POST to submit enquiries." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
