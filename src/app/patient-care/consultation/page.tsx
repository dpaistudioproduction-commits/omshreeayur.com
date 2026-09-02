import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Stethoscope, FileText, Activity, ClipboardList, ArrowRight, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Ayurvedic Consultation | Omshree Sidha Hospital",
  description: "Begin your healing journey with a professional Ayurvedic consultation at Omshree Sidha Hospital. Available in-person in Kerala or online.",
};

export default function ConsultationPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I consult a doctor online before traveling to Kerala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We highly recommend international and out-of-state patients complete an initial online assessment and video consultation before finalizing travel plans. This ensures our therapies are appropriate for your specific health condition."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical Ayurvedic consultation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An initial in-depth consultation usually takes 30 to 45 minutes, as the physician needs to understand your complete medical history, daily routines, diet, and current symptoms in detail."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to bring my past medical records?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, please bring or share any recent blood tests, MRI/CT scans, and details of your current allopathic medications. Ayurveda works integratively, and this information is crucial for safe treatment planning."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* SECTION 1: HERO */}
      <section className="bg-emerald-900 text-white py-16 md:py-24 relative">
        <div className="w-full px-[4%] text-center relative z-10">
          <nav className="flex justify-center text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/patient-care" className="hover:text-white transition-colors">Patient Care</Link></li>
              <li><span>/</span></li>
              <li className="text-white font-medium">Consultation</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Begin Your Ayurvedic Consultation
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            A precise diagnosis is the foundation of true healing. Schedule an assessment with our experienced Ayurvedic physicians to determine the root cause of your condition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button render={<Link href="/contact" />} size="lg" className="bg-white text-emerald-900 hover:bg-slate-100 rounded-full px-8 h-14 font-bold shadow-lg w-full sm:w-auto">
              Book a Consultation
            </Button>
            <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="outline" size="lg" className="border-emerald-500 text-white hover:bg-emerald-800 rounded-full px-8 h-14 font-medium w-full sm:w-auto flex items-center gap-2">
              <Video className="h-5 w-5" /> Online Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT HAPPENS DURING CONSULTATION? */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="w-full px-[4%]">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Happens During a Consultation?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              An Ayurvedic consultation goes beyond just looking at your immediate symptoms. We evaluate your entire physiological and psychological state.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Darshana (Observation)</h3>
              <p className="text-slate-600 leading-relaxed">
                The physician observes physical characteristics, posture, skin, eyes, and overall demeanor to identify inherent physical traits and visible signs of imbalance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center relative md:-mt-6">
              <div className="h-16 w-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sparshana (Palpation)</h3>
              <p className="text-slate-600 leading-relaxed">
                Physical examination including Nadi Pariksha (Pulse Diagnosis). The physician assesses the pulse to understand the rhythm and state of the internal organs and doshas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Prashna (Interrogation)</h3>
              <p className="text-slate-600 leading-relaxed">
                A detailed discussion regarding your diet, lifestyle, mental state, digestion (Agni), sleep patterns, and medical history to trace the origin of the disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: INFORMATION & ASSESSMENT */}
      <section className="py-20 bg-white">
        <div className="w-full px-[4%]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Information Should I Share?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                To provide safe and effective care, our physicians require a complete view of your current health status. Please prepare to share:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1 shrink-0" />
                  <span className="text-slate-700"><strong>Medical History:</strong> Past illnesses, chronic conditions, and previous surgical history.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1 shrink-0" />
                  <span className="text-slate-700"><strong>Current Medications:</strong> Allopathic, homeopathic, or supplement prescriptions you are currently taking.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1 shrink-0" />
                  <span className="text-slate-700"><strong>Diagnostic Reports:</strong> Recent lab results, blood work, MRIs, CT scans, or doctor summaries.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1 shrink-0" />
                  <span className="text-slate-700"><strong>Lifestyle Details:</strong> Daily routine, work stress, sleep duration, and food habits.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-white">
                Key Assessment Parameters
              </h2>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                During your evaluation, the doctor will assess classical Ayurvedic markers to determine your unique baseline and imbalance:
              </p>
              
              <div className="space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="font-bold text-emerald-300 mb-2">Prakriti (Constitutional Type)</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Your unique natural baseline of Vata, Pitta, and Kapha that was present at birth.
                  </p>
                </div>
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="font-bold text-emerald-300 mb-2">Vikriti (Current Imbalance)</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The active disruption in your doshas caused by stress, incorrect diet, poor digestion, or environmental factors.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-emerald-300 mb-2">Agni (Digestive Fire)</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Ayurveda places immense importance on digestion. The strength of your Agni determines whether food turns into nourishment or toxins (Ama). Evaluating Agni is crucial before any treatment begins.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: CARE PLAN & NEXT STEPS */}
      <section className="py-20 bg-emerald-50 border-t border-emerald-100">
        <div className="w-full px-[4%] text-center">
          <div className="max-w-4xl mx-auto">
            <ClipboardList className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Personalized Care Plan
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-10">
              Because treatments are based on your individual assessment (Vikriti) rather than just the name of the disease, no two patients receive the exact same protocol. Following the consultation, the doctor will propose a structured care plan that may involve customized internal medicines, dietary restrictions, and specific Panchakarma therapies.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-white p-6 rounded-xl border border-emerald-100 shadow-sm max-w-2xl mx-auto">
              <div className="text-left flex-1">
                <h3 className="font-bold text-slate-900 mb-1">What Happens Next?</h3>
                <p className="text-sm text-slate-500">Learn how your treatment progresses from admission to follow-up.</p>
              </div>
              <Button render={<Link href="/patient-care/journey" />} className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shrink-0">
                View Patient Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-20 bg-white">
        <div className="w-full px-[4%]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-slate-900">Common Questions</h2>
            </div>
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold text-slate-800">Can I consult a doctor online before traveling to Kerala?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Yes. We highly recommend international and out-of-state patients complete an initial online assessment and video consultation before finalizing travel plans. This ensures our therapies are appropriate for your specific health condition.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold text-slate-800">How long does a typical Ayurvedic consultation take?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  An initial in-depth consultation usually takes 30 to 45 minutes, as the physician needs to understand your complete medical history, daily routines, diet, and current symptoms in detail.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold text-slate-800">Do I need to bring my past medical records?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Yes, please bring or share any recent blood tests, MRI/CT scans, and details of your current allopathic medications. Ayurveda works integratively, and this information is crucial for safe treatment planning.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* FINAL CTA */}
      <section className="py-16 bg-slate-900 text-center">
        <div className="w-full px-[4%]">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to discuss your health concern?</h2>
          <Button render={<Link href="/contact" />} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-12 text-lg">
            Submit a Consultation Enquiry
          </Button>
        </div>
      </section>
      
    </div>
  );
}
