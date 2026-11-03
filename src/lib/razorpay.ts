import Razorpay from "razorpay";
import crypto from "crypto";

export interface CreateOrderParams {
  amount: number; // in paise
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
}

export interface VerifyPaymentParams {
  order_id: string;
  payment_id: string;
  signature: string;
}

/**
 * Initializes and returns the server-side Razorpay client instance.
 * Returns null if credentials are not configured.
 */
export function getRazorpayClient(): Razorpay | null {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    return null;
  }

  return new Razorpay({
    key_id,
    key_secret,
  });
}

/**
 * Verifies Razorpay payment signature using HMAC-SHA256.
 * Algorithm: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
 */
export function verifyRazorpaySignature({
  order_id,
  payment_id,
  signature,
}: VerifyPaymentParams): boolean {
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_secret || !order_id || !payment_id || !signature) {
    return false;
  }

  const generatedSignature = crypto
    .createHmac("sha256", key_secret)
    .update(`${order_id}|${payment_id}`)
    .digest("hex");

  // Constant-time string comparison to prevent timing attacks
  const generatedBuffer = Buffer.from(generatedSignature, "utf-8");
  const signatureBuffer = Buffer.from(signature, "utf-8");

  if (generatedBuffer.length !== signatureBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(generatedBuffer, signatureBuffer);
}

