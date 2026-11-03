"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  FileCheck2,
} from "lucide-react";
import RazorpayCheckoutButton from "@/components/checkout/RazorpayCheckoutButton";

export default function CheckoutPage() {
  const [selectedAmountRupees, setSelectedAmountRupees] = useState<number>(310);
  const [customRupees, setCustomRupees] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("Rajesh Kumar");
  const [customerEmail, setCustomerEmail] = useState<string>("rajesh@example.com");
  const [customerPhone, setCustomerPhone] = useState<string>("9846992789");
  const [lastLog, setLastLog] = useState<string | null>(null);

  // Convert rupees to paise (1 INR = 100 paise)
  const currentAmountPaise = customRupees
    ? Math.max(100, Math.round(Number(customRupees) * 100))
    : selectedAmountRupees * 100;

  const presetAmounts = [
    { label: "75g Bottle", rupees: 160, badge: "Trial Size" },
    { label: "150g Bottle", rupees: 310, badge: "Most Popular" },
    { label: "300g Bottle", rupees: 610, badge: "Best Value" },
  ];

  return (
    <div className="min-h-screen bg-[#FBF7EE] text-[#3A2A1C] font-sans">
      {/* Top Header */}
      <header className="border-b border-[#E3D8C1] bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/products/kafastha"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#517B32] hover:text-[#213714] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Kafastha Product</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-[#81754B]">
            <Lock className="w-3.5 h-3.5 text-[#517B32]" />
            <span className="font-medium">256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
            Omshree Sidha Hospital Pharmacy
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1A0E]">
            Secure Online Payment Portal
          </h1>
          <p className="text-sm sm:text-base text-[#5C4A36] max-w-xl mx-auto leading-relaxed">
            Complete your order securely with Razorpay Standard Checkout, protected by 256-bit SSL encryption and authenticated banking channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Order Details & Amount Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E3D8C1]">
                <div className="w-10 h-10 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h2 className="font-heading font-bold text-lg text-[#2B1A0E]">
                    Select Bottle Size
                  </h2>
                  <p className="text-xs text-[#81754B]">Choose your bottle size or enter a custom amount</p>
                </div>
              </div>

              {/* Presets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {presetAmounts.map((p) => (
                  <button
                    key={p.rupees}
                    type="button"
                    onClick={() => {
                      setSelectedAmountRupees(p.rupees);
                      setCustomRupees("");
                    }}
                    className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between min-h-[96px] ${
                      !customRupees && selectedAmountRupees === p.rupees
                        ? "border-[#517B32] bg-[#FAF4E5] shadow-xs ring-2 ring-[#517B32]/30"
                        : "border-[#E3D8C1] hover:border-[#81754B] bg-[#FAF7F0]/40"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833D] block">
                      {p.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#2B1A0E] block mt-1">
                      {p.label}
                    </span>
                    <span className="text-lg font-bold text-[#517B32] mt-1">
                      ₹{p.rupees}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#2B1A0E] block">
                  Or Enter Custom Amount (INR)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-sm font-bold text-[#81754B]">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 500"
                    value={customRupees}
                    onChange={(e) => setCustomRupees(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-2xl border border-[#E3D8C1] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#517B32]"
                  />
                </div>
                <p className="text-[11px] text-[#81754B]">
                  For specialized hospital prescriptions or multiple bottle combinations.
                </p>
              </div>

              {/* Customer Prefill Information */}
              <div className="flex items-center gap-3 pt-4 pb-2 border-b border-[#E3D8C1]">
                <div className="w-10 h-10 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h2 className="font-heading font-bold text-lg text-[#2B1A0E]">
                    Customer Prefill Details
                  </h2>
                  <p className="text-xs text-[#81754B]">Auto-filled into the Razorpay checkout modal</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-[#2B1A0E]">Full Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#E3D8C1] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#517B32]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#2B1A0E]">Email</label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#E3D8C1] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#517B32]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#2B1A0E]">Phone Number</label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#E3D8C1] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#517B32]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Summary & Action Button */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] shadow-md space-y-5">
              <h2 className="font-heading font-bold text-xl text-[#2B1A0E] pb-3 border-b border-[#E3D8C1]">
                Order Summary
              </h2>

              <div className="flex items-center gap-4 py-2">
                <div className="relative w-16 h-16 rounded-2xl bg-[#FAF4E5] border border-[#E3D8C1] p-2 shrink-0">
                  <Image
                    src="/images/products/kafastha.png"
                    alt="Kafastha pack"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-[#2B1A0E]">
                    Kafastha Respiratory Granules
                  </h3>
                  <p className="text-xs text-[#81754B]">Omshree Sidha Pharma • GMP Certified</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#5C4A36] pt-2 border-t border-[#E3D8C1]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2B1A0E]">
                    ₹{(currentAmountPaise / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Delivery</span>
                  <span className="text-[#517B32] font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Paise Equivalent</span>
                  <span className="font-mono text-[11px] text-[#81754B]">
                    {currentAmountPaise} paise
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#2B1A0E] pt-3 border-t border-[#E3D8C1]">
                  <span>Total Payable</span>
                  <span className="text-[#517B32]">
                    ₹{(currentAmountPaise / 100).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Razorpay Component */}
              <div className="pt-2">
                <RazorpayCheckoutButton
                  amount={currentAmountPaise}
                  currency="INR"
                  productName="Kafastha Ayurvedic Granules"
                  productDescription="Order from Omshree Sidha Hospital Pharmacy"
                  prefill={{
                    name: customerName,
                    email: customerEmail,
                    contact: customerPhone,
                  }}
                  onSuccess={(data) => {
                    setLastLog(`Success! Order ID: ${data.order_id}, Payment ID: ${data.payment_id}`);
                  }}
                  onError={(err) => {
                    setLastLog(`Error: ${err}`);
                  }}
                  onCancel={() => {
                    setLastLog("User dismissed checkout modal.");
                  }}
                />
              </div>

              {/* Trust Badges */}
              <div className="pt-2 space-y-2 border-t border-[#E3D8C1] text-[11px] text-[#81754B]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#517B32]" />
                  <span>Razorpay Standard Checkout (Cards, UPI, Netbanking, Wallets)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#517B32]" />
                  <span>Server-side HMAC-SHA256 Signature Verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

