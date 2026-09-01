import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, ClipboardList, Stethoscope, FileText, UserCheck, Activity, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "The Ayurvedic Consultation | Omshree Sidha Hospital",
  description: "Understand the detailed Ayurvedic consultation process at Omshree Sidha Hospital, from initial enquiry to personalized treatment planning.",
};

export default function ConsultationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What happens during an Ayurvedic consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Ayurvedic consultation is a comprehensive evaluation of your physical, mental, and emotional health. It involves a detailed medical history review, pulse diagnosis (Nadi Pariksha), assessment of your body constitution (Prakriti), and an evaluation of current imbalances (Vikriti) to create a personalized treatment plan."
      }
    }]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-emerald-900 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <nav className="flex justify-center text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/ayurveda" className="hover:text-white transition-colors">Ayurveda</Link></li>
              <li><span>/</span></li>
              <li className="text-white font-medium">Consultation</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Consultation Process
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto">
            A precise, individualized assessment to determine the root cause of your condition.
          </p>
        </div>
      </section>

      <section className="bg-emerald-50 py-12 border-b border-emerald-100">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-emerald-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-emerald-600" />
              What happens during an Ayurvedic consultation?
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              An Ayurvedic consultation goes beyond just looking at your current symptoms. Our physicians conduct a comprehensive evaluation of your physical, mental, and emotional health. This involves a detailed medical history review, physical examination, and pulse diagnosis (Nadi Pariksha). The goal is to determine your unique body constitution (Prakriti) and your current state of imbalance (Vikriti) to craft a highly personalized treatment plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Step-by-Step Patient Journey</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <ClipboardList className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Patient Enquiry & History</h3>
                <p className="text-slate-700 leading-relaxed">
                  Before you travel, we ask you to share your detailed medical history, current medications, and recent lab reports. This allows our doctors to determine if your condition is suitable for treatment at our facility.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Clinical Ayurvedic Assessment</h3>
                <p className="text-slate-700 leading-relaxed">
                  Upon arrival, you undergo a thorough physical consultation. The physician uses the traditional <em>Ashtavidha Pariksha</em> (eight-fold examination), which includes pulse diagnosis, visual observation, and palpation, alongside a review of your modern diagnostic reports.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <UserCheck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Understanding the Individual</h3>
                <p className="text-slate-700 leading-relaxed">
                  The doctor explains your condition from an Ayurvedic perspective, detailing which Doshas are aggravated, the state of your digestive fire (Agni), and how these factors are contributing to your symptoms.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">4. Personalized Treatment Planning</h3>
                <p className="text-slate-700 leading-relaxed">
                  A customized treatment plan is formulated. This is never a generic package. The plan details the required internal herbal medicines, specific external therapies (like Abhyanga or Kizhi), dietary restrictions (Pathya), and the estimated duration of your hospital stay.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <Activity className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">5. Therapy & Daily Monitoring</h3>
                <p className="text-slate-700 leading-relaxed">
                  Throughout your admission, therapies are administered by trained therapists under daily medical supervision. The physician monitors your progress every day and adjusts the treatment plan dynamically based on how your body responds.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <HeartPulse className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">6. Discharge & Follow-up</h3>
                <p className="text-slate-700 leading-relaxed">
                  Upon discharge, you are provided with post-treatment guidelines, ongoing internal medications, and a dietary regimen to maintain your health. We conduct regular follow-ups via WhatsApp or email to track your long-term recovery.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Begin Your Consultation</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button render={<Link href="/contact" />} size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8">
                Book Appointment
              </Button>
              <Button render={<Link href="/patient-care/journey" />} variant="outline" size="lg" className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 rounded-full px-8">
                View Patient Journey Overview
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
