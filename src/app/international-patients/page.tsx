import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane, Calendar, Stethoscope, BedDouble, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "International Patients | Omshree Sidha Hospital",
  description: "A complete guide for international patients seeking authentic Ayurvedic treatment at Omshree Sidha Hospital in Kerala, India.",
};

export default function InternationalPatientsPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      
      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24 relative overflow-hidden">
        <div className="container px-[4%] max-w-5xl mx-auto relative z-20 text-center">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
            Global Patient Services
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F1E1]">
            International Patient Care Guide
          </h1>
          <p className="text-xl text-[#E3D8C1] font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Every year, patients travel from across the globe to Omshree Sidha Hospital for authentic, clinical Ayurveda in the heart of Kerala, India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button render={<Link href="/contact" />} size="lg" className="w-full sm:w-auto bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-8 h-14 font-bold shadow-lg border border-[#6F9940]/40">
              International Patient Enquiry
            </Button>
            <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="outline" size="lg" className="w-full sm:w-auto border-[#E3D8C1]/40 text-[#F7F1E1] hover:bg-white/10 rounded-full px-6 h-14 font-medium backdrop-blur-sm">
              <span className="flex items-center justify-center"><Plane className="mr-2 h-5 w-5 text-[#B4833D]" /> Plan Your Travel</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F1E1] border-b border-[#DBCFA8]">
        <div className="container px-[4%] max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#517B32] mb-2 block">
              Clear & Transparent Pathway
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#66371B]">
              How It Works: Step-by-Step
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#DBCFA8] flex gap-5">
              <div className="mt-1 h-9 w-9 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2">Send Enquiry</h3>
                <p className="text-[#81754B] leading-relaxed text-sm">
                  Reach out to us via our online form or WhatsApp. State your primary health concern and country of residence.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#DBCFA8] flex gap-5">
              <div className="mt-1 h-9 w-9 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2">Share Medical Reports</h3>
                <p className="text-[#81754B] leading-relaxed text-sm">
                  Our clinical team securely reviews your medical history, diagnostic reports, and current prescriptions.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#DBCFA8] flex gap-5">
              <div className="mt-1 h-9 w-9 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2">Pre-Arrival Consultation</h3>
                <p className="text-[#81754B] leading-relaxed text-sm">
                  Before booking flights, a detailed assessment is conducted via video/tele-call to confirm treatment suitability.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#DBCFA8] flex gap-5">
              <div className="mt-1 h-9 w-9 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center font-bold text-sm shrink-0">4</div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2">Treatment & Tariff Estimate</h3>
                <p className="text-[#81754B] leading-relaxed text-sm">
                  We outline the recommended in-patient duration (typically 14 to 28 days) and transparent cost estimate for accommodation and therapies.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#DBCFA8] flex gap-5">
              <div className="mt-1 h-9 w-9 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center font-bold text-sm shrink-0">5</div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2">Travel to Kerala</h3>
                <p className="text-[#81754B] leading-relaxed text-sm">
                  Fly into Cochin International Airport (COK). We assist with reliable airport pickup to our hospital in Vayala (approx. 2 hours away).
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#DBCFA8] flex gap-5">
              <div className="mt-1 h-9 w-9 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center font-bold text-sm shrink-0">6</div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2">Hospital Care & Post-Discharge</h3>
                <p className="text-[#81754B] leading-relaxed text-sm">
                  Daily physician supervision and classical Panchakarma, followed by a personalized take-home regimen and remote progress monitoring.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E3D8C1]/50">
        <div className="container px-[4%] max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#66371B] mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-base text-[#81754B] mb-10 max-w-2xl mx-auto">
            Contact our international coordination desk today via WhatsApp or enquiry form with your medical history.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button render={<Link href="/contact" />} size="lg" className="w-full sm:w-auto bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-8 h-14 font-bold shadow-md">
              Submit International Enquiry
            </Button>
            <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="outline" size="lg" className="w-full sm:w-auto border-[#517B32] text-[#517B32] hover:bg-[#E3D8C1] rounded-full px-8 h-14 font-medium">
              <MessageCircle className="h-5 w-5 mr-2 text-[#25D366]" /> Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
