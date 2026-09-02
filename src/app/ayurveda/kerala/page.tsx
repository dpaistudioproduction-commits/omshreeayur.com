import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kerala Ayurveda | Omshree Sidha Hospital",
  description: "Understand the rich tradition of Kerala Ayurveda, its clinical environment, and why patients travel to Kottayam for authentic healing.",
};

export default function KeralaAyurvedaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is Kerala Ayurveda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kerala Ayurveda refers to the specific, unbroken tradition of Ayurvedic practice preserved in the state of Kerala, India. It is characterized by its rigorous clinical application, specialized specialized therapies (like Dhara and Kizhi), and the region's abundant availability of potent medicinal herbs."
      }
    }]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO SECTION */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/ayurveda" className="hover:text-[#66371B] transition-colors">Ayurveda</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Kerala Ayurveda</li>
            </ol>
          </nav>

          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            The Tradition of Kerala Ayurveda
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto">
            Discover why the tropical landscape of Kerala provides the ideal environment for authentic Ayurvedic healing.
          </p>
        </div>
      </section>

      {/* AEO BLOCK */}
      <section className="bg-white py-24 border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="bg-[#FDFBF7] p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-[#DBCFA8]/50 max-w-4xl mx-auto">
            <div className="inline-flex justify-center items-center h-16 w-16 rounded-full bg-white border border-[#DBCFA8] text-[#517B32] mb-8 shadow-sm">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-6">
              What is Kerala Ayurveda?
            </h2>
            <p className="text-[#81754B] text-lg leading-relaxed font-light">
              Kerala Ayurveda refers to the highly authentic and unbroken tradition of Ayurvedic practice maintained in the southern Indian state of Kerala. While Ayurveda is practiced worldwide, Kerala is uniquely recognized for preserving classical texts, developing specialized therapies (such as Kizhi and Pizhichil), and utilizing the region's rich biodiversity of medicinal plants. It is deeply integrated into the local culture as a primary healthcare system.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="w-full px-[4%]">
          <div className="max-w-none text-[#81754B] text-lg leading-relaxed space-y-16">
            <div>
              <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-6">A Legacy of Healing</h2>
              <p className="font-light">
                For centuries, the Vaidyas (physicians) of Kerala have strictly adhered to the classical Ayurvedic treatises, particularly the <em className="font-medium text-[#66371B]">Ashtanga Hridaya</em>. This dedication has allowed Kerala to offer a pure, clinical form of Ayurveda that focuses heavily on chronic disease management rather than just wellness or relaxation.
              </p>
            </div>
            
            <div>
              <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-6">The Ideal Healing Environment</h2>
              <p className="font-light">
                Kerala's unique geography—featuring a tropical climate, abundant monsoons, and high humidity—creates the perfect environment for Ayurvedic treatments. The humidity opens the body's pores, making it exceptionally receptive to herbal oils and purification therapies. At Omshree Sidha Hospital, located in the peaceful village of Vayala, Kottayam, patients heal surrounded by tranquil nature, away from urban pollution and stress.
              </p>
            </div>

            <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-[#DBCFA8]/50 shadow-sm">
              <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-8">Why Patients Travel to Kerala</h3>
              <ul className="space-y-6 font-light">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#FDFBF7] p-2 rounded-full border border-[#DBCFA8] text-[#517B32] shrink-0">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <span className="mt-1"><strong className="text-[#66371B] font-medium">Authentic Therapies:</strong> Access to traditional treatments exactly as prescribed in ancient texts.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#FDFBF7] p-2 rounded-full border border-[#DBCFA8] text-[#517B32] shrink-0">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <span className="mt-1"><strong className="text-[#66371B] font-medium">Fresh Medicinal Herbs:</strong> Treatments utilize freshly prepared medicines sourced from the local biodiversity.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#FDFBF7] p-2 rounded-full border border-[#DBCFA8] text-[#517B32] shrink-0">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <span className="mt-1"><strong className="text-[#66371B] font-medium">Dedicated Hospital Care:</strong> In-patient facilities designed specifically for long-term Ayurvedic recovery, offering continuous medical supervision.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h3 className="font-heading text-4xl font-normal text-[#66371B] mb-10">Plan Your Healing Journey</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button render={<Link href="/international-patients" />} size="lg" className="bg-[#66371B] text-white hover:bg-[#B4833D] rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
                International Patient Guide
              </Button>
              <Button render={<Link href="/about" />} variant="outline" size="lg" className="border-[#DBCFA8] text-[#66371B] hover:bg-white bg-[#FDFBF7] rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
                About Omshree Hospital
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
