import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ClipboardList, Stethoscope, BedDouble, ShieldCheck, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Care Overview | Omshree Sidha Hospital",
  description: "Explore the patient care facilities, treatment journeys, and tariff details at Omshree Sidha Hospital.",
};

export default function PatientCareHubPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      
      <section className="bg-emerald-900 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Patient Care at Omshree
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about preparing for your healing journey in Kerala.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card className="border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col bg-white">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Patient Journey</h3>
                <p className="text-slate-600 mb-6 flex-1 text-base">
                  Understand the step-by-step process of receiving care, from the initial online enquiry to your discharge and follow-up.
                </p>
                <Button render={<Link href="/patient-care/journey" />} variant="link" className="text-emerald-700 px-0 self-start flex items-center group text-base">
                  View Journey <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col bg-white">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Hospital Tariff</h3>
                <p className="text-slate-600 mb-6 flex-1 text-base">
                  Transparent estimates for accommodation (Non-A/C, A/C, Suites) and standard Ayurvedic therapies.
                </p>
                <Button render={<Link href="/patient-care/tariff" />} variant="link" className="text-emerald-700 px-0 self-start flex items-center group text-base">
                  View Pricing <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col bg-white">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Challenging Offer</h3>
                <p className="text-slate-600 mb-6 flex-1 text-base">
                  Details of our unique, results-oriented financial agreement for specific chronic conditions like Asthma and Arthritis.
                </p>
                <Button render={<Link href="/patient-care/challenging-offer" />} variant="link" className="text-emerald-700 px-0 self-start flex items-center group text-base">
                  Read the Offer <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

    </div>
  );
}
