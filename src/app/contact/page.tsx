"use client";

import { useState, useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { EnquiryPayload, EnquiryResponse } from "@/types/enquiry";

export default function ContactPage() {
  const [patientType, setPatientType] = useState<"domestic" | "international">("domestic");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    country: "",
    healthConcern: "",
    message: "",
    website: "", // Honeypot
  });

  const [attribution, setAttribution] = useState<{
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmTerm?: string;
    utmContent?: string;
    landingPage?: string;
    referrer?: string;
  }>({});

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [leadId, setLeadId] = useState<string | null>(null);

  const hasInteractedRef = useRef(false);

  // Capture non-sensitive marketing attribution parameters safely on mount
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      setAttribution({
        utmSource: urlParams.get("utm_source") || undefined,
        utmMedium: urlParams.get("utm_medium") || undefined,
        utmCampaign: urlParams.get("utm_campaign") || undefined,
        utmTerm: urlParams.get("utm_term") || undefined,
        utmContent: urlParams.get("utm_content") || undefined,
        landingPage: window.location.pathname,
        referrer: document.referrer ? new URL(document.referrer).hostname : undefined,
      });
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true;
      analytics.enquiryFormStart(patientType);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear specific field error when user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage(null);
    setFieldErrors({});

    analytics.enquiryFormSubmit(patientType);

    const payload: EnquiryPayload = {
      patientType,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      healthConcern: formData.healthConcern,
      message: formData.message,
      country: patientType === "international" ? formData.country : undefined,
      state: patientType === "domestic" ? formData.state : undefined,
      city: patientType === "domestic" ? formData.city : undefined,
      website: formData.website, // Honeypot
      ...attribution,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: EnquiryResponse = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setLeadId(data.leadId || null);
        analytics.enquiryFormSuccess(patientType);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Unable to submit enquiry. Please check the form and try again.");
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
      }
    } catch (err) {
      console.error("[FORM SUBMISSION ERROR]:", err);
      setStatus("error");
      setErrorMessage("Network connection error. Please check your internet connection or call our hospital reception at +91 4822 229434.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      country: "",
      healthConcern: "",
      message: "",
      website: "",
    });
    setErrorMessage(null);
    setFieldErrors({});
    hasInteractedRef.current = false;
  };

  return (
    <div className="flex flex-col w-full bg-background font-sans">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="w-full relative z-10 px-[4%] text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Book a Consultation
            </h1>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Begin your Ayurvedic healing journey. Share your health concern with our specialists and our clinical coordination team will guide you on the next steps.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="w-full px-[4%]">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Info (2 columns wide) */}
            <FadeIn className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Omshree Sidha Hospital</h2>
                <p className="text-emerald-700 font-bold uppercase tracking-wider text-sm mb-6">Ayurvedic Hospital • Est. 1880</p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  For direct assistance or to speak with our hospital reception, please call our primary telephone line or connect via WhatsApp.
                </p>
              </div>
              
              <div className="grid gap-6">
                <Card className="border-border shadow-sm bg-white">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-emerald-50 text-emerald-700 shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">Phone & WhatsApp</h3>
                      <a 
                        href="tel:+914822229434" 
                        onClick={() => analytics.phoneClick("contact_page")}
                        className="text-slate-700 hover:text-emerald-700 block mb-1 font-medium transition-colors"
                      >
                        Call: +91 4822 229434
                      </a>
                      <a 
                        href="https://wa.me/919846992789" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => analytics.whatsappClick("contact_page")}
                        className="text-[#25D366] hover:text-[#128C7E] block font-medium transition-colors"
                      >
                        WhatsApp: +91 98469 92789
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-sm bg-white">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-emerald-50 text-emerald-700 shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">Email</h3>
                      <a href="mailto:info@omshreeayur.com" className="text-slate-600 hover:text-emerald-700 transition-colors">
                        info@omshreeayur.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-sm bg-white">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-emerald-50 text-emerald-700 shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">Hospital Location</h3>
                      <address className="text-slate-600 not-italic leading-relaxed">
                        Omshree Sidha Hospital<br />
                        Vayala P.O., Kottayam<br />
                        Kerala 686587<br />
                        India
                      </address>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            {/* Contact Form (3 columns wide) */}
            <FadeIn delay={0.1} className="lg:col-span-3">
              <Card className="border-border shadow-md bg-white">
                <CardContent className="p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-bold mb-8 text-slate-900 border-b border-slate-100 pb-4">
                    Patient Consultation Enquiry
                  </h2>

                  {status === "success" ? (
                    <div className="py-12 flex flex-col items-center text-center space-y-4" role="status" aria-live="polite">
                      <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle2 className="h-10 w-10 text-emerald-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Enquiry Received</h3>
                      <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Omshree Sidha Hospital. Our medical coordination team has received your details and will contact you directly via phone, WhatsApp, or email to schedule your consultation.
                      </p>
                      {leadId && leadId !== "HONEYPOT-DISCARDED" && (
                        <p className="text-xs font-mono bg-slate-100 px-3 py-1.5 rounded text-slate-500">
                          Reference ID: {leadId}
                        </p>
                      )}
                      <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <Button onClick={handleReset} variant="outline" className="text-emerald-700 border-emerald-200 hover:bg-emerald-50">
                          Submit Another Enquiry
                        </Button>
                        <Button 
                          render={
                            <a 
                              href="https://wa.me/919846992789" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              onClick={() => analytics.whatsappClick("enquiry_success_cta")}
                            />
                          }
                          className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                        >
                          Quick WhatsApp Follow-up
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                      
                      {/* Honeypot Spam Protection (Hidden for humans, filled by bots) */}
                      <input 
                        type="text" 
                        name="website" 
                        value={formData.website} 
                        onChange={handleInputChange} 
                        tabIndex={-1} 
                        autoComplete="off" 
                        className="hidden" 
                        aria-hidden="true" 
                      />

                      {/* Error Alert Box */}
                      {status === "error" && errorMessage && (
                        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-start gap-3" role="alert">
                          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-bold">Submission Error</p>
                            <p>{errorMessage}</p>
                          </div>
                        </div>
                      )}

                      {/* Lead Routing: Domestic vs International */}
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                        <Label className="text-base font-bold text-slate-900 mb-4 block">
                          Where are you inquiring from? *
                        </Label>
                        <div className="flex flex-col sm:flex-row gap-6">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="patientType" 
                              value="domestic" 
                              checked={patientType === "domestic"}
                              onChange={() => setPatientType("domestic")}
                              className="h-4 w-4 text-emerald-600 border-slate-300 focus:ring-emerald-500"
                            />
                            <span className="text-slate-800 font-medium">Patient in India</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="patientType" 
                              value="international" 
                              checked={patientType === "international"}
                              onChange={() => setPatientType("international")}
                              className="h-4 w-4 text-emerald-600 border-slate-300 focus:ring-emerald-500"
                            />
                            <span className="text-slate-800 font-medium">International Patient</span>
                          </label>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-slate-700 font-medium">
                            Patient's Full Name *
                          </Label>
                          <Input 
                            id="fullName" 
                            name="fullName"
                            required 
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="e.g. Anand Kumar" 
                            aria-invalid={Boolean(fieldErrors.fullName)}
                            aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                            className={`bg-white h-12 ${fieldErrors.fullName ? "border-red-500 focus-visible:ring-red-400" : "border-slate-200"}`} 
                          />
                          {fieldErrors.fullName && (
                            <p id="fullName-error" className="text-xs text-red-600">{fieldErrors.fullName}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-700 font-medium">
                            Email Address *
                          </Label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email" 
                            required 
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. anand@example.com" 
                            aria-invalid={Boolean(fieldErrors.email)}
                            aria-describedby={fieldErrors.email ? "email-error" : undefined}
                            className={`bg-white h-12 ${fieldErrors.email ? "border-red-500 focus-visible:ring-red-400" : "border-slate-200"}`} 
                          />
                          {fieldErrors.email && (
                            <p id="email-error" className="text-xs text-red-600">{fieldErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-slate-700 font-medium">
                            WhatsApp / Phone Number *
                          </Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            type="tel" 
                            required 
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98469 92789" 
                            aria-invalid={Boolean(fieldErrors.phone)}
                            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                            className={`bg-white h-12 ${fieldErrors.phone ? "border-red-500 focus-visible:ring-red-400" : "border-slate-200"}`} 
                          />
                          {fieldErrors.phone && (
                            <p id="phone-error" className="text-xs text-red-600">{fieldErrors.phone}</p>
                          )}
                        </div>
                        
                        {patientType === "international" ? (
                          <div className="space-y-2">
                            <Label htmlFor="country" className="text-slate-700 font-medium">
                              Country of Residence *
                            </Label>
                            <Input 
                              id="country" 
                              name="country"
                              required 
                              value={formData.country}
                              onChange={handleInputChange}
                              placeholder="e.g. United Kingdom, UAE, USA" 
                              aria-invalid={Boolean(fieldErrors.country)}
                              aria-describedby={fieldErrors.country ? "country-error" : undefined}
                              className={`bg-white h-12 ${fieldErrors.country ? "border-red-500 focus-visible:ring-red-400" : "border-slate-200"}`} 
                            />
                            {fieldErrors.country && (
                              <p id="country-error" className="text-xs text-red-600">{fieldErrors.country}</p>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Label htmlFor="state" className="text-slate-700 font-medium">
                              State / City <span className="text-slate-400 font-normal">(Optional)</span>
                            </Label>
                            <Input 
                              id="state" 
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              placeholder="e.g. Kochi, Kerala / Mumbai" 
                              className="bg-white border-slate-200 h-12" 
                            />
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="healthConcern" className="text-slate-700 font-medium">
                          Primary Health Concern / Condition *
                        </Label>
                        <Input 
                          id="healthConcern" 
                          name="healthConcern"
                          required 
                          value={formData.healthConcern}
                          onChange={handleInputChange}
                          placeholder="e.g. Heart Condition / Low EF / Fatty Liver / Chronic Digestion" 
                          aria-invalid={Boolean(fieldErrors.healthConcern)}
                          aria-describedby={fieldErrors.healthConcern ? "healthConcern-error" : undefined}
                          className={`bg-white h-12 ${fieldErrors.healthConcern ? "border-red-500 focus-visible:ring-red-400" : "border-slate-200"}`} 
                        />
                        {fieldErrors.healthConcern && (
                          <p id="healthConcern-error" className="text-xs text-red-600">{fieldErrors.healthConcern}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-700 font-medium flex justify-between">
                          <span>Briefly describe your enquiry</span>
                          <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                        </Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please provide any relevant background context. Note: Please do not upload medical files here; our clinical team will provide a secure channel after initial contact." 
                          className="min-h-[110px] bg-white border-slate-200"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={status === "submitting"}
                        className="w-full h-14 bg-emerald-700 hover:bg-emerald-800 text-white text-lg font-bold shadow-md rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Submitting Enquiry...</span>
                          </>
                        ) : (
                          "Submit Consultation Enquiry"
                        )}
                      </Button>

                      <p className="text-xs text-center text-slate-500 mt-6 leading-relaxed max-w-md mx-auto">
                        Your privacy is respected. The information provided is kept strictly confidential and used solely to facilitate your Ayurvedic consultation at Omshree Sidha Hospital.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
