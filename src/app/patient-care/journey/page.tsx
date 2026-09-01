import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardList, Stethoscope, FileText, Activity, HeartPulse, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "The Patient Journey | Omshree Sidha Hospital",
  description: "Understand the step-by-step process of Ayurvedic healing at Omshree Sidha Hospital, from assessment to treatment.",
};

export default function PatientJourneyPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <section className="bg-emerald-900 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <nav className="flex justify-center text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/patient-care" className="hover:text-white transition-colors">Patient Care</Link></li>
              <li><span>/</span></li>
              <li className="text-white font-medium">Patient Journey</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Your Healing Journey
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto">
            A structured, 6-step pathway to clinical Ayurvedic recovery.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <ClipboardList className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. The Initial Enquiry</h3>
                <p className="text-slate-700 leading-relaxed">
                  The journey begins before you travel. You share your medical history, current symptoms, and diagnostic reports via email or WhatsApp. Our doctors review this to ensure Ayurvedic treatment is appropriate for your specific condition.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Clinical Consultation</h3>
                <p className="text-slate-700 leading-relaxed">
                  Upon arrival, you undergo a comprehensive physical consultation. The physician uses pulse diagnosis (Nadi Pariksha) and classical Ayurvedic assessment tools to determine your Dosha imbalance and body constitution (Prakriti).
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Personalized Treatment Plan</h3>
                <p className="text-slate-700 leading-relaxed">
                  A customized protocol is formulated based strictly on your assessment. This plan dictates your internal herbal medicines, external therapies, dietary regimen (Pathya), and the exact duration of your hospital stay.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <Activity className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">4. Therapy & Administration</h3>
                <p className="text-slate-700 leading-relaxed">
                  Therapies (such as Abhyanga, Kizhi, or Panchakarma) are administered by trained professionals. The physician conducts daily rounds to monitor your physiological response and adjusts the treatment dynamically.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-slate-100 bg-slate-50">
              <div className="shrink-0 h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
                <ShieldAlert className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">5. Clinical Re-evaluation</h3>
                <p className="text-slate-700 leading-relaxed">
                  Towards the end of your stay, a final assessment is conducted to measure symptom relief and functional improvement. For conditions under the "Challenging Offer," objective diagnostic tests may be repeated.
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
                  You return home with strict lifestyle and dietary guidelines, alongside necessary continuation medicines. Our doctors conduct regular follow-ups to track your long-term recovery.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button render={<Link href="/contact" />} size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8">
              Start Your Journey
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
