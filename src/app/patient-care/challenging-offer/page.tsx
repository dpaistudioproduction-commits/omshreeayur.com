import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "The Challenging Offer | Omshree Sidha Hospital",
  description: "Read the terms and conditions of Omshree Sidha Hospital's results-based 'Challenging Offer' for select chronic conditions.",
};

export default function ChallengingOfferPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      
      {/* DEVELOPER FLAG: THIS CONTENT IS UNDER STRICT CLINICAL/LEGAL REVIEW */}
      <div className="bg-red-500 text-white text-xs font-bold text-center py-1 uppercase tracking-widest relative z-50">
        [VERIFY] Clinical / Legal Review Required Before Final Publication
      </div>

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our Challenging Offer
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto">
            A results-oriented approach for patients seeking care for specific chronic conditions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          
          <div className="bg-red-50 border border-red-200 text-red-900 p-6 rounded-xl mb-12 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-lg mb-2">Notice to Patients</h2>
              <p className="text-sm leading-relaxed mb-4">
                The "Challenging Offer" is a historical program offered by Omshree Sidha Hospital for specific cases. It involves strict contractual agreements, bank guarantees, and full compliance with our inpatient regimen. This is not a generalized medical guarantee, but a financial agreement based on observable symptomatic relief.
              </p>
              <p className="text-sm font-bold">Please discuss your eligibility for this program during your initial consultation.</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed space-y-6">
            <p>
              If you believe that your condition (for diseases falling under our specific scheme) is not curable based on past experience, we offer a unique financial model. 
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Financial Agreement</h3>
            <ul>
              <li><strong>No Advance Payment for Treatment:</strong> Under this specific scheme, you do not pay for the treatment or medicines in advance.</li>
              <li><strong>Bank Guarantee:</strong> Before starting, you must execute a bank guarantee equal to the estimated cost + 33%.</li>
              <li><strong>Premium Charge:</strong> In cases where this offer is applied, we charge 25% extra (125% of the standard treatment charges).</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Recovery Expectations & Payment</h3>
            <ul>
              <li>If you are symptomatically or as per test results, cured or improved considerably (at least 80% of the expected level of recovery), you must make the full payment before you leave the hospital.</li>
              <li>If your condition improves by 50% of the expected improvement, you pay 50% of the panchakarma and medicine cost.</li>
              <li><strong>Room and Board:</strong> Regardless of outcome, room rent and food costs must be paid in full by the patient.</li>
              <li>If there is no improvement whatsoever, you will not be charged for the panchakarma or medicines.</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Patient Compliance</h3>
            <p>
              This offer is strictly void if the patient does not follow all instructions. Patients must:
            </p>
            <ul>
              <li>Perform and submit all requested medical tests at their own cost.</li>
              <li>Disclose their full medical history and current medications.</li>
              <li>Take medicines exactly as prescribed and follow the strict hospital diet.</li>
              <li>Remain in the hospital for the duration prescribed by the physician.</li>
            </ul>
            <p>Omshree Sidha Hospital reserves the right to discharge any patient at any time or withdraw this offer if protocol is broken.</p>

          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 text-center">
            <Button render={<Link href="/contact" />} size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8">
              Discuss Your Case With Us
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
