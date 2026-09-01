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
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO SECTION */}
      <section className="bg-emerald-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-20 text-center">
          <nav className="flex justify-center text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/ayurveda" className="hover:text-white transition-colors">Ayurveda</Link></li>
              <li><span>/</span></li>
              <li className="text-white font-medium">Kerala Ayurveda</li>
            </ol>
          </nav>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Tradition of Kerala Ayurveda
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto">
            Discover why the tropical landscape of Kerala provides the ideal environment for authentic Ayurvedic healing.
          </p>
        </div>
      </section>

      {/* AEO BLOCK */}
      <section className="bg-emerald-50 py-12 border-b border-emerald-100">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-emerald-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-emerald-600" />
              What is Kerala Ayurveda?
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Kerala Ayurveda refers to the highly authentic and unbroken tradition of Ayurvedic practice maintained in the southern Indian state of Kerala. While Ayurveda is practiced worldwide, Kerala is uniquely recognized for preserving classical texts, developing specialized therapies (such as Kizhi and Pizhichil), and utilizing the region's rich biodiversity of medicinal plants. It is deeply integrated into the local culture as a primary healthcare system.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="prose prose-emerald max-w-none text-slate-700 text-lg leading-relaxed space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">A Legacy of Healing</h2>
              <p>
                For centuries, the Vaidyas (physicians) of Kerala have strictly adhered to the classical Ayurvedic treatises, particularly the <em>Ashtanga Hridaya</em>. This dedication has allowed Kerala to offer a pure, clinical form of Ayurveda that focuses heavily on chronic disease management rather than just wellness or relaxation.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Ideal Healing Environment</h2>
              <p>
                Kerala's unique geography—featuring a tropical climate, abundant monsoons, and high humidity—creates the perfect environment for Ayurvedic treatments. The humidity opens the body's pores, making it exceptionally receptive to herbal oils and purification therapies. At Omshree Sidha Hospital, located in the peaceful village of Vayala, Kottayam, patients heal surrounded by tranquil nature, away from urban pollution and stress.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Patients Travel to Kerala</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span><strong>Authentic Therapies:</strong> Access to traditional treatments exactly as prescribed in ancient texts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span><strong>Fresh Medicinal Herbs:</strong> Treatments utilize freshly prepared medicines sourced from the local biodiversity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span><strong>Dedicated Hospital Care:</strong> In-patient facilities designed specifically for long-term Ayurvedic recovery, offering continuous medical supervision.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Plan Your Healing Journey</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button render={<Link href="/international-patients" />} size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8">
                International Patient Guide
              </Button>
              <Button render={<Link href="/about" />} variant="outline" size="lg" className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 rounded-full px-8">
                About Omshree Hospital
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
