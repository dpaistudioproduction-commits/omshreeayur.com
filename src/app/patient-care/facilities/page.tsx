import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, HeartPulse, Building2, LeafyGreen } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospital Facilities | Omshree Sidha Hospital",
  description: "View the in-patient facilities, treatment rooms, and infrastructure at Omshree Sidha Hospital in Kerala.",
};

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container px-[4%] max-w-5xl mx-auto text-center">
          <nav className="flex justify-center text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/patient-care" className="hover:text-white transition-colors">Patient Care</Link></li>
              <li><span>/</span></li>
              <li className="text-white font-medium">Facilities</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Hospital Facilities
          </h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            Comfortable, hygienic, and medically equipped infrastructure designed for extended Ayurvedic healing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-[4%] max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <Building2 className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">In-Patient Rooms</h3>
              <p className="text-sm text-slate-600">Choice of Premium A/C, Premium Non-A/C, and Standard rooms to suit your comfort.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <HeartPulse className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Treatment Centers</h3>
              <p className="text-sm text-slate-600">Spacious, highly sanitized therapy rooms specifically designed for Panchakarma.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <LeafyGreen className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Herbal Garden</h3>
              <p className="text-sm text-slate-600">On-site gardens hosting a variety of medicinal herbs, shrubs, and trees used in treatments.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">GMP Pharmacy</h3>
              <p className="text-sm text-slate-600">Our own manufacturing unit where patients can observe classical medicine preparation.</p>
            </div>

          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Comprehensive Amenities</h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">All rooms feature attached bathrooms with hot water facility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Television and Wi-Fi internet access in every room.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">24-hour resident doctor services for immediate medical supervision.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Qualified male and female therapists for gender-specific treatments.</span>
                </li>
              </ul>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Customized Ayurvedic vegetarian diet (Non-vegetarian options available only if medically indicated).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Yoga facilities available upon request to complement treatment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Ample car parking and reliable power backup.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Convenient pickup and drop-off facility (available on request).</span>
                </li>
              </ul>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
