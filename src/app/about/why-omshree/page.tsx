import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Leaf, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Omshree | Ayurvedic Hospital in Kerala",
  description: "Discover the Omshree difference: GMP certified in-house pharmacy, 140+ years of clinical heritage, and dedicated 24-hour in-patient care in Kerala.",
};

export default function WhyOmshreePage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <section className="bg-emerald-900 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <nav className="flex justify-center text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><span>/</span></li>
              <li className="text-white font-medium">Why Omshree</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            The Omshree Difference
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto">
            We are a hospital, not a wellness spa. Our sole focus is the clinical management of chronic diseases through authentic Kerala Ayurveda.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:bg-emerald-100 transition-colors"></div>
              <div className="h-14 w-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">In-House GMP Pharmacy</h3>
              <p className="text-slate-700 leading-relaxed">
                Ayurvedic efficacy depends entirely on the quality of the medicine. We do not rely on mass-produced generic formulations. We operate our own GMP-certified manufacturing unit, ensuring that every decoction, oil, and herbal preparation meets our strict clinical standards and is tailored for specific treatments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:bg-emerald-100 transition-colors"></div>
              <div className="h-14 w-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ISO 9001:2015 Certified</h3>
              <p className="text-slate-700 leading-relaxed">
                Our hospital operations are officially ISO 9001:2015 certified for "Providing Healing, Detox, Rejuvenation Treatments and Ayurvedic Products." This reflects our commitment to maintaining rigorous hygiene, quality control, and procedural standards in a traditional medical setting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:bg-emerald-100 transition-colors"></div>
              <div className="h-14 w-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">24-Hour Medical Supervision</h3>
              <p className="text-slate-700 leading-relaxed">
                Panchakarma and intensive Ayurvedic therapies require close monitoring. We provide 24-hour resident doctor availability and a dedicated team of experienced male and female therapists to ensure patient safety, comfort, and immediate clinical response during treatment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:bg-emerald-100 transition-colors"></div>
              <div className="h-14 w-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ideal Healing Environment</h3>
              <p className="text-slate-700 leading-relaxed">
                Located in the peaceful village of Vayala (near Kottayam), our hospital is set in a large, open space surrounded by fresh, pollution-free air and our own herbal gardens. This serene environment is purposefully chosen to support the physical and mental recovery essential to Ayurveda.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
