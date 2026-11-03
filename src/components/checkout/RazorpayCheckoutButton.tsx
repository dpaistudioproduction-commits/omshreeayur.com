"use client";

import React, { useState } from "react";
import { CreditCard, Loader2, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayCheckoutButtonProps {
  /** Amount in paise (e.g., 50000 = ₹500.00). Must be >= 100 paise. */
  amount: number;
  currency?: string;
  productName?: string;
  productDescription?: string;
  receipt?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  buttonText?: string;
  className?: string;
  showSuccessModal?: boolean;
  onSuccess?: (verificationResult: {
    order_id: string;
    payment_id: string;
    message: string;
  }) => void;
  onError?: (errorMessage: string) => void;
  onCancel?: () => void;
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function RazorpayCheckoutButton({
  amount,
  currency = "INR",
  productName = "Omshree Sidha Pharma Product",
  productDescription = "Ayurvedic Healthcare Formulation",
  receipt,
  prefill,
  notes,
  buttonText,
  className = "",
  showSuccessModal = true,
  onSuccess,
  onError,
  onCancel,
}: RazorpayCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    order_id: string;
    payment_id: string;
  } | null>(null);

  const configuredKeyId =
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_TvgiBUo3qfywvw";

  const handlePayment = async () => {
    try {
      setLoading(true);
      setErrorMessage(null);
      setStatusMessage("Preparing secure checkout...");

      // Validate amount >= 100 paise
      if (!amount || amount < 100) {
        const err = "Amount must be at least 100 paise (₹1.00).";
        setErrorMessage(err);
        onError?.(err);
        setLoading(false);
        return;
      }

      // Step A: Ensure Razorpay checkout.js script is loaded
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        const err =
          "Failed to load Razorpay payment gateway script. Please check your internet connection.";
        setErrorMessage(err);
        onError?.(err);
        setLoading(false);
        return;
      }

      // Step 1: Call backend create-order endpoint
      setStatusMessage("Creating order with Razorpay...");
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency,
          receipt: receipt || `rcpt_${Date.now()}`,
          notes: {
            productName,
            ...notes,
          },
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok || !orderData.order_id) {
        const msg =
          orderData.message ||
          orderData.error ||
          "Unable to create payment order. Please try again.";
        setErrorMessage(msg);
        onError?.(msg);
        setLoading(false);
        return;
      }

      setStatusMessage("Opening payment window...");

      // Step 2: Open Razorpay modal with order_id
      const options = {
        key: orderData.key_id || configuredKeyId,
        amount: orderData.amount,
        currency: orderData.currency || currency,
        name: productName,
        description: productDescription,
        order_id: orderData.order_id,
        image: "/images/products/kafastha.png",
        prefill: {
          name: prefill?.name || "Customer",
          email: prefill?.email || "",
          contact: prefill?.contact || "",
        },
        theme: {
          color: "#213714", // Omshree deep green
        },
        handler: async function (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            setStatusMessage("Verifying payment signature with server...");
            setLoading(true);

            // Step 3: Send all three fields to verify-payment endpoint
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyResult = await verifyResponse.json();

            if (verifyResponse.ok && verifyResult.success) {
              setSuccessData({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
              });
              onSuccess?.({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                message: verifyResult.message || "Payment verified successfully",
              });
            } else {
              const err =
                verifyResult.message ||
                verifyResult.error ||
                "Payment verification failed: Signature mismatch.";
              setErrorMessage(err);
              onError?.(err);
            }
          } catch (verifyErr: any) {
            const err =
              verifyErr.message ||
              "Network error occurred during payment verification.";
            setErrorMessage(err);
            onError?.(err);
          } finally {
            setLoading(false);
            setStatusMessage(null);
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            setStatusMessage(null);
            setErrorMessage("Payment was cancelled by user.");
            onCancel?.();
          },
        },
      };

      const rzpInstance = new window.Razorpay(options);

      // Handle payment.failed event
      rzpInstance.on("payment.failed", function (failResponse: any) {
        console.error("[Razorpay Payment Failed]:", failResponse);
        const reason =
          failResponse?.error?.description ||
          failResponse?.error?.reason ||
          "Payment processing failed. Please try another payment method.";
        setErrorMessage(`Payment Failed: ${reason}`);
        onError?.(reason);
        setLoading(false);
        setStatusMessage(null);
      });

      rzpInstance.open();
    } catch (err: any) {
      console.error("[Checkout Exception]:", err);
      const msg = err?.message || "An unexpected error occurred during checkout.";
      setErrorMessage(msg);
      onError?.(msg);
      setLoading(false);
      setStatusMessage(null);
    }
  };

  const formattedAmount = (amount / 100).toLocaleString("en-IN", {
    style: "currency",
    currency: currency || "INR",
  });

  return (
    <div className="w-full space-y-3">
      {/* Action Button */}
      <button
        type="button"
        onClick={handlePayment}
        disabled={loading}
        className={
          className ||
          "w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#517B32] hover:bg-[#3D5C26] text-white px-7 py-4 text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        }
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{statusMessage || "Processing..."}</span>
          </>
        ) : (
          <>
            <CreditCard className="w-5 h-5" />
            <span>{buttonText || `Pay ${formattedAmount} via Razorpay`}</span>
          </>
        )}
      </button>

      {/* Error Alert Display */}
      {errorMessage && (
        <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold">Checkout Notice</p>
            <p className="text-red-700 mt-0.5">{errorMessage}</p>
          </div>
          <button
            type="button"
            onClick={() => setErrorMessage(null)}
            className="text-red-400 hover:text-red-700 font-bold text-xs"
            aria-label="Dismiss error"
          >
            ✕
          </button>
        </div>
      )}

      {/* Success Modal Confirmation */}
      {showSuccessModal && successData && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#DBCFA8] space-y-5 text-center animate-scaleIn">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="font-heading font-bold text-2xl text-[#2B1A0E]">
                Payment Verified!
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36]">
                Your transaction has been authenticated and processed securely.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E3D8C1] text-left text-xs space-y-2">
              <div className="flex justify-between items-center py-1 border-b border-[#E3D8C1]/60">
                <span className="text-[#81754B]">Amount Paid</span>
                <span className="font-bold text-[#2B1A0E] text-sm">{formattedAmount}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#E3D8C1]/60">
                <span className="text-[#81754B]">Order ID</span>
                <span className="font-mono text-[#2B1A0E] font-semibold">{successData.order_id}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#81754B]">Payment ID</span>
                <span className="font-mono text-[#2B1A0E] font-semibold">{successData.payment_id}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#517B32] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified with HMAC-SHA256 Signature</span>
            </div>

            <button
              type="button"
              onClick={() => setSuccessData(null)}
              className="w-full py-3 px-6 rounded-full bg-[#213714] text-white font-bold text-sm hover:bg-[#3D5C26] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

