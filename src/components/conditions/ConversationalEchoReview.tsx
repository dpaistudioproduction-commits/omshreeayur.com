"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, HeartPulse, Send, CheckCircle2, ShieldCheck, Clock, ArrowRight, Loader2 } from "lucide-react";
import { analytics } from "@/lib/analytics";

const EF_OPTIONS = [
  { label: "Under 25% (Severe)", value: "Under 25%" },
  { label: "25% – 35% (Moderate)", value: "25% - 35%" },
  { label: "35% – 45% (Mild)", value: "35% - 45%" },
  { label: "Not sure / Just got Echo", value: "Not sure" },
];

const SYMPTOM_OPTIONS = [
  "Shortness of breath / Orthopnea",
  "Leg / Ankle swelling (Edema)",
  "Severe fatigue & weakness",
  "Chest heaviness / Discomfort",
  "History of Heart Attack (MI)",
];

export function ConversationalEchoReview() {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "callback">("whatsapp");
  const [selectedEF, setSelectedEF] = useState<string>("Under 25%");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    "Shortness of breath / Orthopnea",
  ]);

  // Callback form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const handleWhatsAppClick = () => {
    analytics.whatsappClick("conversational_echo_widget");

    const symptomText = selectedSymptoms.length > 0 ? selectedSymptoms.join(", ") : "Not specified";
    const message = `Hello Omshree Sidha Hospital team,
I would like an Ayurvedic clinical assessment for Low Ejection Fraction (EF).
• Current EF: ${selectedEF}
• Primary Symptoms: ${symptomText}
I have my medical / Echo reports ready to share for Dr. Jose Vaidhyan's review.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919846992789?text=${encoded}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !phone.trim()) {
      setErrorMsg("Please enter your name and contact phone number.");
      return;
    }

    setSubmitting(true);
    analytics.enquiryFormStart("domestic");

    try {
      const payload = {
        fullName: name.trim(),
        phone: phone.trim(),
        city: city.trim() || undefined,
        healthConcern: `Low Ejection Fraction (EF: ${selectedEF})`,
        message: `Current EF: ${selectedEF}. Symptoms: ${selectedSymptoms.join(", ") || "None selected"}. Requesting callback regarding Ayurvedic cardiology protocol.`,
        patientType: "domestic" as const,
        landingPage: typeof window !== "undefined" ? window.location.pathname : undefined,
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        analytics.enquiryFormSuccess("domestic");
      } else {
        setErrorMsg(data.message || "Unable to send request. Please WhatsApp us directly.");
      }
    } catch {
      setErrorMsg("Connection error. Please tap WhatsApp below to connect instantly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#517B32]/30 p-5 sm:p-8 shadow-lg relative overflow-hidden">
      {/* Top Banner Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#517B32] via-[#B4833D] to-[#517B32]" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-bold text-[#517B32] uppercase tracking-wider">
              Doctor Care Desk Active
            </span>
            <span className="text-xs text-[#81754B] hidden sm:inline">• Avg response &lt; 20 mins</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B]">
            Get a Fast Clinical Review for Your Heart Condition
          </h3>
          <p className="text-xs sm:text-sm text-[#81754B] font-light mt-0.5">
            Select your current EF and symptoms to consult directly with senior Ayurvedic physicians.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex bg-[#F7F1E1] p-1 rounded-xl border border-[#DBCFA8] self-start sm:self-auto shrink-0 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("whatsapp")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "whatsapp"
                ? "bg-[#25D366] text-white shadow-xs"
                : "text-[#66371B] hover:text-black"
            }`}
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Review
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("callback")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "callback"
                ? "bg-[#66371B] text-white shadow-xs"
                : "text-[#66371B] hover:text-black"
            }`}
          >
            <Phone className="h-3.5 w-3.5" /> Request Callback
          </button>
        </div>
      </div>

      {/* Step 1: Select Current EF */}
      <div className="space-y-2 mb-5">
        <label className="text-xs sm:text-sm font-bold text-[#66371B] flex items-center gap-1.5">
          <HeartPulse className="h-4 w-4 text-[#517B32]" />
          <span>Step 1: What is your latest Ejection Fraction (EF)?</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {EF_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedEF(opt.value)}
              className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left ${
                selectedEF === opt.value
                  ? "bg-[#517B32] text-white border-[#517B32] shadow-xs scale-[1.01]"
                  : "bg-[#F7F1E1]/60 text-[#402816] border-[#DBCFA8] hover:bg-[#F7F1E1]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Select Symptoms */}
      <div className="space-y-2 mb-6">
        <label className="text-xs sm:text-sm font-bold text-[#66371B]">
          Step 2: Select symptoms you or your family member are experiencing (optional):
        </label>
        <div className="flex flex-wrap gap-2">
          {SYMPTOM_OPTIONS.map((symptom) => {
            const isSelected = selectedSymptoms.includes(symptom);
            return (
              <button
                key={symptom}
                type="button"
                onClick={() => toggleSymptom(symptom)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  isSelected
                    ? "bg-[#66371B] text-[#F7F1E1] border-[#66371B] shadow-2xs"
                    : "bg-white text-[#81754B] border-[#DBCFA8] hover:border-[#66371B]"
                }`}
              >
                {isSelected ? "✓ " : "+ "}
                {symptom}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mode A: WhatsApp Instant Review */}
      {activeTab === "whatsapp" && (
        <div className="space-y-3 pt-2 border-t border-[#DBCFA8]/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs text-[#81754B] leading-relaxed">
              <span className="font-semibold text-[#66371B] block">Ready to share your Echo report:</span>
              Chat directly with our care coordinators to send photos of your Echocardiogram for doctor review.
            </div>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto h-12 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp with Care Team</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Call Fallback */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] sm:text-xs text-[#81754B]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#517B32]" />
              100% Confidential Medical Review • Direct from Kottayam, Kerala
            </span>
            <a
              href="tel:+919846992789"
              onClick={() => analytics.phoneClick("conversational_widget_phone")}
              className="font-bold text-[#66371B] hover:text-[#517B32] underline flex items-center gap-1"
            >
              <Phone className="h-3 w-3" /> Or Call: +91 98469 92789
            </a>
          </div>
        </div>
      )}

      {/* Mode B: Callback Form */}
      {activeTab === "callback" && (
        <div className="pt-2 border-t border-[#DBCFA8]/60">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
              <h4 className="font-heading text-lg font-bold text-emerald-800">
                Callback Request Received!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-700">
                Our senior medical care counselor will call you at <strong>{phone}</strong> shortly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                >
                  <MessageCircle className="h-4 w-4" /> Want faster answers? Chat on WhatsApp right now
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCallbackSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#66371B] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full h-11 px-3 text-sm bg-white rounded-xl border border-[#DBCFA8] focus:outline-hidden focus:border-[#517B32]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#66371B] mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full h-11 px-3 text-sm bg-white rounded-xl border border-[#DBCFA8] focus:outline-hidden focus:border-[#517B32]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#66371B] mb-1">City / State (Optional)</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Chennai / Mumbai"
                    className="w-full h-11 px-3 text-sm bg-white rounded-xl border border-[#DBCFA8] focus:outline-hidden focus:border-[#517B32]"
                  />
                </div>
              </div>

              {errorMsg && (
                <p className="text-xs font-medium text-red-600">{errorMsg}</p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <span className="text-[11px] text-[#81754B] flex items-center gap-1">
                  <Clock className="h-3 w-3 text-[#517B32]" />
                  We respect your privacy. No spam. Doctors review within operating hours.
                </span>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto h-11 px-6 rounded-xl bg-[#517B32] hover:bg-[#3D5F26] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-60 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Request Call Back Now
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
