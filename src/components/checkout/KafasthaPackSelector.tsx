"use client";

import React, { useState } from "react";
import { MessageCircle, Stethoscope, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import RazorpayCheckoutButton from "./RazorpayCheckoutButton";

export interface PackOption {
  id: string;
  size: string;
  price: number; // in INR
  badge?: string;
  popular?: boolean;
}

export const KAFASTHA_PACKS: PackOption[] = [
  {
    id: "75g",
    size: "75g Bottle",
    price: 160,
    badge: "Trial Size",
  },
  {
    id: "150g",
    size: "150g Bottle",
    price: 310,
    badge: "Most Popular",
    popular: true,
  },
  {
    id: "300g",
    size: "300g Bottle",
    price: 610,
    badge: "Best Value",
  },
];

interface KafasthaPackSelectorProps {
  consultUrl?: string;
}

export default function KafasthaPackSelector({
  consultUrl = "https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20my%20respiratory%20complaints%20and%20share%20my%20medical%20reports.",
}: KafasthaPackSelectorProps) {
  const [selectedPack, setSelectedPack] = useState<PackOption>(KAFASTHA_PACKS[1]); // Default to 150g

  const getWhatsAppBuyUrl = (pack: PackOption) => {
    const text = encodeURIComponent(
      `Hello, I would like to order Kafastha Ayurvedic Respiratory Care Granules (${pack.size} - ₹${pack.price}). Please share doorstep delivery details.`
    );
    return `https://wa.me/919846992789?text=${text}`;
  };

  return (
    <div className="space-y-4 pt-1">
      {/* Pack Size Selector Header */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-[#81754B] block mb-2">
          Select Bottle Size &amp; Quantity
        </label>
        
        {/* Pack Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {KAFASTHA_PACKS.map((pack) => {
            const isSelected = selectedPack.id === pack.id;
            return (
              <button
                key={pack.id}
                type="button"
                onClick={() => setSelectedPack(pack)}
                className={`relative p-3 sm:p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between min-h-[96px] ${
                  isSelected
                    ? "border-[#517B32] bg-[#FAF4E5] shadow-sm ring-2 ring-[#517B32]/40"
                    : "border-[#E3D8C1] bg-white hover:border-[#81754B]"
                }`}
              >
                {pack.badge && (
                  <span
                    className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 ${
                      pack.popular
                        ? "bg-[#517B32] text-white"
                        : "bg-[#B4833D]/15 text-[#81551D]"
                    }`}
                  >
                    {pack.badge}
                  </span>
                )}
                
                <span className="text-xs sm:text-sm font-semibold text-[#2B1A0E] block">
                  {pack.size}
                </span>

                <span className="text-base sm:text-lg font-bold text-[#517B32] mt-0.5">
                  ₹{pack.price}
                </span>

                {isSelected && (
                  <span className="absolute top-2 right-2 text-[#517B32]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Pack Price Display */}
      <div className="p-3.5 rounded-2xl bg-white border border-[#E3D8C1] flex items-center justify-between text-xs sm:text-sm">
        <span className="text-[#5C4A36]">
          Selected: <strong className="text-[#2B1A0E]">{selectedPack.size}</strong>
        </span>
        <span className="font-heading font-bold text-lg sm:text-xl text-[#2B1A0E]">
          Total: <span className="text-[#517B32]">₹{selectedPack.price}</span>
        </span>
      </div>

      {/* Payment & Order CTAs */}
      <div className="space-y-3">
        {/* Razorpay Online Instant Checkout */}
        <RazorpayCheckoutButton
          amount={selectedPack.price * 100} // paise
          productName={`Kafastha Granules (${selectedPack.size})`}
          productDescription={`Omshree Sidha Hospital Pharmacy Direct Dispatch (${selectedPack.size})`}
          buttonText={`Pay ₹${selectedPack.price} Online via Razorpay`}
          className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#213714] text-white hover:bg-[#3D5C26] px-6 py-4 text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all"
        />

        {/* WhatsApp Buy & Doctor Consultation */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href={getWhatsAppBuyUrl(selectedPack)}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order ₹{selectedPack.price} on WhatsApp</span>
          </a>

          <a
            href={consultUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#2F4A1E]/30 text-[#2F4A1E] hover:bg-[#2F4A1E] hover:text-white px-4 py-3 text-xs sm:text-sm font-bold transition-all"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Consult Doctor</span>
          </a>
        </div>
      </div>
    </div>
  );
}

