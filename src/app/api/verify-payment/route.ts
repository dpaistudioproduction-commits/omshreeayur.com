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

