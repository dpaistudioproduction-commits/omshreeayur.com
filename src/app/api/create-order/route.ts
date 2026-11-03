import { NextRequest, NextResponse } from "next/server";
import { getRazorpayClient } from "@/lib/razorpay";

export async function POST(request: NextRequest) {
  try {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          message:
            "Razorpay credentials are not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env.",
        },
        { status: 401 }
      );
    }

    let body: {
      amount?: number | string;
      currency?: string;
      receipt?: string;
      notes?: Record<string, string>;
    } = {};

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Bad Request", message: "Invalid JSON body provided." },
        { status: 400 }
      );
    }

    const { amount, currency = "INR", receipt, notes } = body;

    // Validate amount >= 100 paise (₹1.00)
    const parsedAmount = Number(amount);
    if (!amount || isNaN(parsedAmount) || parsedAmount < 100) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message:
            "Amount is required and must be at least 100 paise (₹1.00).",
        },
        { status: 400 }
      );
    }

    const razorpay = getRazorpayClient();
    if (!razorpay) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: "Razorpay authentication failed. Missing API credentials.",
        },
        { status: 401 }
      );
    }

    const orderOptions = {
      amount: Math.round(parsedAmount),
      currency: typeof currency === "string" ? currency.toUpperCase() : "INR",
      receipt:
        receipt ||
        `rcpt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      notes: notes || {},
    };

    try {
      const order = await razorpay.orders.create(orderOptions);

      return NextResponse.json({
        success: true,
        order_id: order.id,
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: order.status,
        key_id: key_id,
      });
    } catch (apiError: any) {
      console.error("[Razorpay API Error]:", apiError);

      const statusCode = apiError?.statusCode || apiError?.status;
      const isAuthError =
        statusCode === 401 ||
        (apiError?.error?.code === "BAD_REQUEST_ERROR" &&
          typeof apiError?.error?.description === "string" &&
          apiError.error.description.toLowerCase().includes("auth"));

      if (isAuthError) {
        return NextResponse.json(
          {
            error: "Authentication failed",
            message:
              "Razorpay API rejected the test credentials (HTTP 401: Authentication failed). The Key ID or Key Secret in your .env has expired or been rotated. Please generate an active Key ID & Secret from Razorpay Dashboard (Account & Settings > API Keys) and update your .env file.",
          },
          { status: 401 }
        );
      }

      // Razorpay API errors (return 500)
      return NextResponse.json(
        {
          error: "Internal Server Error",
          message:
            apiError?.error?.description ||
            apiError?.message ||
            "Failed to create Razorpay order.",
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("[Create Order Exception]:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message:
          error?.message ||
          "An unexpected error occurred while creating the Razorpay order.",
      },
      { status: 500 }
    );
  }
}

