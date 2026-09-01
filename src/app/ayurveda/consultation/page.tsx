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
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="container px-[4%] max-w-5xl mx-auto text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/ayurveda" className="hover:text-[#66371B] transition-colors">Ayurveda</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Consultation</li>
            </ol>
          </nav>
          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            The Consultation Process
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto">
            A precise, individualized assessment to determine the root cause of your condition.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-[#DBCFA8]/30">
        <div className="container px-[4%] max-w-4xl mx-auto">
          <div className="bg-[#FDFBF7] p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-[#DBCFA8]/50">
            <div className="inline-flex justify-center items-center h-16 w-16 rounded-full bg-white border border-[#DBCFA8] text-[#517B32] mb-8 shadow-sm">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-6">
              What happens during an Ayurvedic consultation?
            </h2>
            <p className="text-[#81754B] text-lg leading-relaxed font-light">
              An Ayurvedic consultation goes beyond just looking at your current symptoms. Our physicians conduct a comprehensive evaluation of your physical, mental, and emotional health. This involves a detailed medical history review, physical examination, and pulse diagnosis (Nadi Pariksha). The goal is to determine your unique body constitution (Prakriti) and your current state of imbalance (Vikriti) to craft a highly personalized treatment plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FDFBF7]">
        <div className="container px-[4%] max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-16 text-center">Step-by-Step Patient Journey</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
              <div className="shrink-0 h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center shadow-sm">
                <ClipboardList className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">1. Patient Enquiry & History</h3>
                <p className="text-[#81754B] font-light text-lg leading-relaxed">
                  Before you travel, we ask you to share your detailed medical history, current medications, and recent lab reports. This allows our doctors to determine if your condition is suitable for treatment at our facility.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
              <div className="shrink-0 h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center shadow-sm">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">2. Clinical Ayurvedic Assessment</h3>
                <p className="text-[#81754B] font-light text-lg leading-relaxed">
                  Upon arrival, you undergo a thorough physical consultation. The physician uses the traditional <em className="font-medium text-[#66371B]">Ashtavidha Pariksha</em> (eight-fold examination), which includes pulse diagnosis, visual observation, and palpation, alongside a review of your modern diagnostic reports.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
              <div className="shrink-0 h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center shadow-sm">
                <UserCheck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">3. Understanding the Individual</h3>
                <p className="text-[#81754B] font-light text-lg leading-relaxed">
                  The doctor explains your condition from an Ayurvedic perspective, detailing which Doshas are aggravated, the state of your digestive fire (Agni), and how these factors are contributing to your symptoms.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
              <div className="shrink-0 h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center shadow-sm">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">4. Personalized Treatment Planning</h3>
                <p className="text-[#81754B] font-light text-lg leading-relaxed">
                  A customized treatment plan is formulated. This is never a generic package. The plan details the required internal herbal medicines, specific external therapies (like Abhyanga or Kizhi), dietary restrictions (Pathya), and the estimated duration of your hospital stay.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
              <div className="shrink-0 h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center shadow-sm">
                <Activity className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">5. Therapy & Daily Monitoring</h3>
                <p className="text-[#81754B] font-light text-lg leading-relaxed">
                  Throughout your admission, therapies are administered by trained therapists under daily medical supervision. The physician monitors your progress every day and adjusts the treatment plan dynamically based on how your body responds.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
              <div className="shrink-0 h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center shadow-sm">
                <HeartPulse className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">6. Discharge & Follow-up</h3>
                <p className="text-[#81754B] font-light text-lg leading-relaxed">
                  Upon discharge, you are provided with post-treatment guidelines, ongoing internal medications, and a dietary regimen to maintain your health. We conduct regular follow-ups via WhatsApp or email to track your long-term recovery.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-10">Begin Your Consultation</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button render={<Link href="/contact" />} size="lg" className="bg-[#66371B] text-white hover:bg-[#B4833D] rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
                Book Appointment
              </Button>
              <Button render={<Link href="/patient-care/journey" />} variant="outline" size="lg" className="border-[#DBCFA8] text-[#66371B] hover:bg-white bg-[#FDFBF7] rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
                View Patient Journey Overview
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
