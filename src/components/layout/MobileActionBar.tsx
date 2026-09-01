"use client";

import Link from "next/link";
import { Phone, MessageCircle, HeartHandshake } from "lucide-react";
import { analytics } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <nav 
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#F7F1E1]/95 backdrop-blur-md border-t border-[#DBCFA8] py-2 px-3 flex items-center justify-around md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
    >
      {/* 1. Phone Call */}
      <a
        href="tel:+914822229434"
        onClick={() => analytics.phoneClick("mobile_action_bar")}
        className="flex-1 flex flex-col items-center justify-center py-1 px-1 text-[#66371B] hover:text-[#517B32] active:scale-95 transition-all text-center"
        aria-label="Call Hospital at +91 4822 229434"
      >
        <div className="h-8 w-8 rounded-full bg-[#E3D8C1] flex items-center justify-center mb-1 text-[#517B32]">
          <Phone className="h-4 w-4" />
        </div>
        <span className="text-[11px] font-bold tracking-tight">Call Reception</span>
      </a>

      {/* 2. WhatsApp Chat */}
      <a
        href="https://wa.me/919846992789"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => analytics.whatsappClick("mobile_action_bar")}
        className="flex-1 flex flex-col items-center justify-center py-1 px-1 text-[#66371B] hover:text-[#25D366] active:scale-95 transition-all text-center"
        aria-label="Chat on WhatsApp +91 98469 92789"
      >
        <div className="h-8 w-8 rounded-full bg-[#E3D8C1] text-[#25D366] flex items-center justify-center mb-1">
          <MessageCircle className="h-4 w-4" />
        </div>
        <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
      </a>

      {/* 3. Book Consultation */}
      <Link
        href="/patient-care/consultation"
        onClick={() => analytics.consultationClick("mobile_action_bar")}
        className="flex-1 flex flex-col items-center justify-center py-1 px-1 text-[#517B32] active:scale-95 transition-all text-center"
        aria-label="Book a Consultation"
      >
        <div className="h-8 w-8 rounded-full bg-[#517B32] text-white flex items-center justify-center mb-1 shadow-sm">
          <HeartHandshake className="h-4 w-4" />
        </div>
        <span className="text-[11px] font-bold tracking-tight text-[#66371B]">Consultation</span>
      </Link>
    </nav>
  );
}
