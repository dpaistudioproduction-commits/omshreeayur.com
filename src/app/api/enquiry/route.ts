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
          message: "Too many submission attempts. Please call the hospital directly at +91 4822 229434 or try again later.",
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

    const leadData: EnquiryPayload = {
      ...body,
      timestamp,
      fullName: sanitizeHtml(body.fullName.trim()),
      email: body.email.trim(),
      phone: sanitizeHtml(body.phone.trim()),
      healthConcern: sanitizeHtml(body.healthConcern.trim()),
      message: sanitizeHtml(body.message?.trim() || "No additional message provided."),
      country: body.country ? sanitizeHtml(body.country.trim()) : undefined,
      state: body.state ? sanitizeHtml(body.state.trim()) : undefined,
      city: body.city ? sanitizeHtml(body.city.trim()) : undefined,
    };

    // 5. Hospital Notification Dispatch
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.LEAD_EMAIL_TO || "info@omshreeayur.com";
    const emailFrom = process.env.LEAD_EMAIL_FROM || "onboarding@resend.dev";

    if (resendApiKey) {
      const emailSubject = `[New Consultation Enquiry] ${leadData.patientType.toUpperCase()} - ${leadData.fullName} (${leadData.healthConcern})`;
      
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #064e3b; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">Omshree Sidha Hospital</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">New Consultation Enquiry received</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff; color: #334155; line-height: 1.6;">
            <div style="background-color: #f8fafc; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px; font-weight: bold; border-left: 4px solid #059669;">
              Lead ID: ${leadId} | Type: ${leadData.patientType === 'international' ? 'International Patient' : 'Patient in India'}
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 35%;">Patient Name:</td>
                <td style="padding: 8px 0;">${leadData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${leadData.email}">${leadData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0;"><a href="tel:${leadData.phone}">${leadData.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Location:</td>
                <td style="padding: 8px 0;">${leadData.patientType === 'international' ? leadData.country : [leadData.city, leadData.state].filter(Boolean).join(', ') || 'India'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Primary Concern:</td>
                <td style="padding: 8px 0; color: #064e3b; font-weight: bold;">${leadData.healthConcern}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message / Context:</td>
                <td style="padding: 8px 0;">${leadData.message}</td>
              </tr>
            </table>

            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">
              Attribution: Source=${sanitizeHtml(leadData.utmSource || 'direct')}, Medium=${sanitizeHtml(leadData.utmMedium || 'none')}, Campaign=${sanitizeHtml(leadData.utmCampaign || 'none')}, LandingPage=${sanitizeHtml(leadData.landingPage || '/')}<br />
              Received at: ${timestamp}
            </p>
          </div>
        </div>
      `;

      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
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
        });

        if (!resendResponse.ok) {
          console.error("[ENQUIRY API] Resend email dispatch failed:", await resendResponse.text());
        }
      } catch (dispatchErr) {
        console.error("[ENQUIRY API] Network error contacting Resend API:", dispatchErr);
      }
    } else {
      console.log(`[ENQUIRY API] (Simulated Lead Capture - Configure RESEND_API_KEY for live delivery) Lead ID: ${leadId}`);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to Omshree Sidha Hospital. Our medical coordination team has received your enquiry and will contact you directly.",
      leadId,
    });

  } catch (error: any) {
    console.error("[ENQUIRY API ERROR]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while submitting your enquiry. Please reach out via WhatsApp at +91 98469 92789 or call +91 4822 229434.",
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
