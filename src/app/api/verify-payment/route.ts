import { NextRequest, NextResponse } from "next/server";
import { verifyRazorpaySignature } from "@/lib/razorpay";

export async function POST(request: NextRequest) {
  try {
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    if (!key_secret) {
      return NextResponse.json(
        {
          success: false,
          error: "Internal Server Error",
          message:
            "Razorpay key secret is not configured on the server. Please verify RAZORPAY_KEY_SECRET in .env.",
        },
        { status: 500 }
      );
    }

    let body: {
      razorpay_order_id?: string;
      razorpay_payment_id?: string;
      razorpay_signature?: string;
      order_id?: string;
      payment_id?: string;
      signature?: string;
      customerDetails?: Record<string, any>;
    } = {};

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Bad Request",
          message: "Invalid JSON body provided.",
        },
        { status: 400 }
      );
    }

    // Support both razorpay prefixed and standard parameter names
    const order_id = body.razorpay_order_id || body.order_id;
    const payment_id = body.razorpay_payment_id || body.payment_id;
    const signature = body.razorpay_signature || body.signature;

    // Validate missing fields: return 400
    if (!order_id || !payment_id || !signature) {
      const missing: string[] = [];
      if (!order_id) missing.push("razorpay_order_id");
      if (!payment_id) missing.push("razorpay_payment_id");
      if (!signature) missing.push("razorpay_signature");

      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          message: `Missing required payment fields: ${missing.join(", ")}.`,
        },
        { status: 400 }
      );
    }

    // Verify signature using HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const isValid = verifyRazorpaySignature({
      order_id,
      payment_id,
      signature,
    });

    // Signature mismatch: return 400, do NOT mark as paid
    if (!isValid) {
      console.warn(
        `[Razorpay Verification]: Signature mismatch for order ${order_id} and payment ${payment_id}`
      );
      return NextResponse.json(
        {
          success: false,
          error: "Signature mismatch",
          message: "Payment verification failed. Signatures do not match.",
        },
        { status: 400 }
      );
    }

    // Signatures match
    const customerDetails = body.customerDetails || {};

    // Log verified order with full customer and delivery details
    console.log("[Razorpay Order Confirmed & Paid]:", {
      order_id,
      payment_id,
      customerDetails,
      timestamp: new Date().toISOString(),
    });

    // Send email alert to hospital pharmacy if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.LEAD_EMAIL_TO || "info@omshreeayur.com";
    const emailFrom = process.env.LEAD_EMAIL_FROM || "onboarding@resend.dev";
    const resendBaseUrl = process.env.RESEND_BASE_URL || "https://api.resend.com";

    if (resendApiKey && resendApiKey.trim() !== "") {
      try {
        const orderEmailHtml = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #213714; color: #ffffff; padding: 20px; text-align: center;">
              <h2 style="margin: 0; font-size: 20px;">Omshree Sidha Hospital Pharmacy</h2>
              <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">New Online Product Order Received</p>
            </div>
            
            <div style="padding: 24px;">
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px;">
                <strong style="color: #166534;">Payment Status: Verified & Paid Online</strong><br />
                <span style="font-size: 13px; color: #15803d;">Razorpay Payment ID: ${payment_id}</span><br />
                <span style="font-size: 13px; color: #15803d;">Razorpay Order ID: ${order_id}</span>
              </div>

              <h3 style="color: #213714; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-top: 0;">1. Customer & Shipping Details</h3>
              <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 4px 0; width: 140px; font-weight: bold;">Full Name:</td><td>${customerDetails.fullName || customerDetails.name || customerDetails.customer_name || 'N/A'}</td></tr>
                <tr><td style="padding: 4px 0; font-weight: bold;">Phone / WhatsApp:</td><td><a href="tel:${customerDetails.phone || customerDetails.contact || customerDetails.customer_phone}">${customerDetails.phone || customerDetails.contact || customerDetails.customer_phone || 'N/A'}</a></td></tr>
                <tr><td style="padding: 4px 0; font-weight: bold;">Email Address:</td><td>${customerDetails.email || customerDetails.customer_email || 'N/A'}</td></tr>
                <tr><td style="padding: 4px 0; font-weight: bold; vertical-align: top;">Delivery Address:</td><td>${customerDetails.address || customerDetails.shipping_address || 'N/A'}</td></tr>
                ${customerDetails.landmark ? `<tr><td style="padding: 4px 0; font-weight: bold;">Landmark:</td><td>${customerDetails.landmark}</td></tr>` : ''}
                <tr><td style="padding: 4px 0; font-weight: bold;">City / Town:</td><td>${customerDetails.city || 'N/A'}</td></tr>
                <tr><td style="padding: 4px 0; font-weight: bold;">State:</td><td>${customerDetails.state || 'N/A'}</td></tr>
                <tr><td style="padding: 4px 0; font-weight: bold;">PIN Code:</td><td><strong style="font-size: 15px; color: #213714;">${customerDetails.pincode || 'N/A'}</strong></td></tr>
                ${customerDetails.deliveryNotes ? `<tr><td style="padding: 4px 0; font-weight: bold; vertical-align: top;">Delivery Notes:</td><td>${customerDetails.deliveryNotes}</td></tr>` : ''}
              </table>

              <h3 style="color: #213714; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">2. Order Items</h3>
              <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 4px 0; width: 140px; font-weight: bold;">Product:</td><td>${customerDetails.product || 'Kafastha Ayurvedic Respiratory Granules'}</td></tr>
                <tr><td style="padding: 4px 0; font-weight: bold;">Pack Size:</td><td><strong>${customerDetails.packSize || customerDetails.pack_size || '150g Bottle'}</strong></td></tr>
                <tr><td style="padding: 4px 0; font-weight: bold;">Quantity:</td><td>${customerDetails.quantity || 1}</td></tr>
                ${customerDetails.subtotal_amount ? `<tr><td style="padding: 4px 0; font-weight: bold;">Items Subtotal:</td><td>${customerDetails.subtotal_amount}</td></tr>` : ''}
                ${customerDetails.delivery_charge ? `<tr><td style="padding: 4px 0; font-weight: bold;">Delivery Fee:</td><td>${customerDetails.delivery_charge}</td></tr>` : ''}
                <tr><td style="padding: 4px 0; font-weight: bold;">Total Amount Paid:</td><td><strong style="color: #166534; font-size: 16px;">${customerDetails.total_amount_inr || '₹310'}</strong></td></tr>
              </table>

              <p style="font-size: 12px; color: #64748b; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
                Dispatch Action Required: Please pack fresh batch from hospital pharmacy, print address label, and arrange doorstep delivery.
              </p>
            </div>
          </div>
        `;

        await fetch(`${resendBaseUrl}/emails`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: emailFrom,
            to: [emailTo],
            subject: `[NEW ORDER] Kafastha Granules — ${customerDetails.fullName || 'Customer'} (${customerDetails.city || 'India'}) [${payment_id}]`,
            html: orderEmailHtml,
          }),
        });
      } catch (emailErr) {
        console.error("[Verify Payment Email Notification Error]:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully.",
      order_id,
      payment_id,
    });
  } catch (error: any) {
    console.error("[Verify Payment Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message:
          error?.message ||
          "An unexpected error occurred while verifying the payment.",
      },
      { status: 500 }
    );
  }
}

