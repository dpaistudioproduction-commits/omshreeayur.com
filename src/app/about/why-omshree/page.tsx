import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Leaf, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Omshree | Ayurvedic Hospital in Kerala",
  description: "Discover the Omshree difference: GMP certified in-house pharmacy, 140+ years of clinical heritage, and dedicated 24-hour in-patient care in Kerala.",
};

export default function WhyOmshreePage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/about" className="hover:text-[#66371B] transition-colors">About Us</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Why Omshree</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#B4833D]"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">The Omshree Difference</span>
            <span className="h-px w-8 bg-[#B4833D]"></span>
          </div>

          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            Clinical Ayurveda. Not a Spa.
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto">
            Our sole focus is the clinical management of chronic diseases through authentic Kerala Ayurveda. We provide medical treatment, not wellness packages.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            <div className="bg-[#FDFBF7] p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-[#DBCFA8]/50 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E3D8C1]/30 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="h-16 w-16 bg-white border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-normal text-[#66371B] mb-5">In-House GMP Pharmacy</h3>
              <p className="text-[#81754B] text-base md:text-lg leading-relaxed font-light">
                Ayurvedic efficacy depends entirely on the quality of the medicine. We do not rely on mass-produced generic formulations. We operate our own GMP-certified manufacturing unit, ensuring that every decoction, oil, and herbal preparation meets our strict clinical standards and is tailored for specific treatments.
              </p>
            </div>

            <div className="bg-[#FDFBF7] p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-[#DBCFA8]/50 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E3D8C1]/30 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="h-16 w-16 bg-white border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-normal text-[#66371B] mb-5">ISO 9001:2015 Certified</h3>
              <p className="text-[#81754B] text-base md:text-lg leading-relaxed font-light">
                Our hospital operations are officially ISO 9001:2015 certified for "Providing Healing, Detox, Rejuvenation Treatments and Ayurvedic Products." This reflects our commitment to maintaining rigorous hygiene, quality control, and procedural standards in a traditional medical setting.
              </p>
            </div>

            <div className="bg-[#FDFBF7] p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-[#DBCFA8]/50 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E3D8C1]/30 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="h-16 w-16 bg-white border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-normal text-[#66371B] mb-5">24-Hour Medical Supervision</h3>
              <p className="text-[#81754B] text-base md:text-lg leading-relaxed font-light">
                Panchakarma and intensive Ayurvedic therapies require close monitoring. We provide 24-hour resident doctor availability and a dedicated team of experienced male and female therapists to ensure patient safety, comfort, and immediate clinical response during treatment.
              </p>
            </div>

            <div className="bg-[#FDFBF7] p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-[#DBCFA8]/50 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E3D8C1]/30 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="h-16 w-16 bg-white border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-normal text-[#66371B] mb-5">Ideal Healing Environment</h3>
              <p className="text-[#81754B] text-base md:text-lg leading-relaxed font-light">
                Located in the peaceful village of Vayala (near Kottayam), our hospital is set in a large, open space surrounded by fresh, pollution-free air and our own herbal gardens. This serene environment is purposefully chosen to support the physical and mental recovery essential to Ayurveda.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
