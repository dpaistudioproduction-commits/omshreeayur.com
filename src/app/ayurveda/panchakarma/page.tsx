import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Understanding Panchakarma | Omshree Sidha Hospital",
  description: "Learn about Panchakarma, the traditional Ayurvedic detoxification therapies, and how they are administered under strict clinical supervision.",
};

export default function PanchakarmaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is Panchakarma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Panchakarma is a comprehensive system of deep cleansing and purification therapies in Ayurveda. It consists of five primary actions designed to safely eliminate deep-rooted metabolic toxins (Ama) from the body and restore balance to the Doshas."
      }
    }]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/ayurveda" className="hover:text-[#66371B] transition-colors">Ayurveda</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Panchakarma</li>
            </ol>
          </nav>
          
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#B4833D]"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">Ayurvedic Detoxification</span>
            <span className="h-px w-8 bg-[#B4833D]"></span>
          </div>

          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            Panchakarma Therapy
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto">
            Clinical purification and detoxification supervised by experienced Ayurvedic physicians.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="bg-[#FDFBF7] p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-[#DBCFA8]/50 max-w-4xl mx-auto">
            <div className="inline-flex justify-center items-center h-16 w-16 rounded-full bg-white border border-[#DBCFA8] text-[#517B32] mb-8 shadow-sm">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-6">
              What is Panchakarma?
            </h2>
            <p className="text-[#81754B] text-lg leading-relaxed font-light">
              Panchakarma (meaning "five actions") is the cornerstone of Ayurvedic purification. It is a highly structured, intense detoxification process designed to clear deep-rooted metabolic toxins (Ama) and correct Dosha imbalances. It involves preparatory procedures (Purvakarma), the main cleansing procedures (Pradhana Karma), and post-therapy care (Paschat Karma).
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FDFBF7]">
        <div className="w-full px-[4%]">
          <div className="max-w-4xl mx-auto text-[#81754B] text-lg leading-relaxed space-y-12">
            
            <div className="bg-[#66371B] border border-[#66371B] p-8 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-start gap-8 shadow-xl">
              <div className="inline-flex justify-center items-center h-16 w-16 rounded-full bg-[#B4833D]/20 text-[#B4833D] shrink-0">
                <ShieldAlert className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-normal text-white mt-0 mb-4">Important Medical Context</h3>
                <p className="text-[#E3D8C1] font-light text-lg m-0 leading-relaxed">
                  Panchakarma is a powerful clinical intervention, not a spa treatment. It is not suitable for everyone. Administration requires strict medical supervision, careful assessment of the patient's strength (Bala), and precise dietary control. Not all five therapies are given to every patient; treatments are selected based on individual diagnosis.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-12 text-center">The Three Stages of Panchakarma</h2>
              
              <div className="space-y-16">
                <div className="relative pl-8 md:pl-12 border-l border-[#DBCFA8]">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-[#B4833D] rounded-full -translate-x-[6.5px] mt-2"></div>
                  <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">1. Purvakarma (Preparation)</h3>
                  <p className="font-light">Before purification, the body must be prepared to release toxins. This involves <em className="font-medium text-[#66371B]">Snehana</em> (internal and external oleation/oil therapies) and <em className="font-medium text-[#66371B]">Swedana</em> (therapeutic sweating) to loosen toxins and mobilize them toward the digestive tract.</p>
                </div>

                <div className="relative pl-8 md:pl-12 border-l border-[#DBCFA8]">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-[#B4833D] rounded-full -translate-x-[6.5px] mt-2"></div>
                  <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-6">2. Pradhana Karma (Main Action)</h3>
                  <p className="font-light mb-6">The primary cleansing therapies. Depending on the condition, a physician may prescribe one or more of the following:</p>
                  <ul className="space-y-4 font-light bg-white p-8 rounded-3xl border border-[#DBCFA8]/30">
                    <li className="flex items-start gap-3"><span className="text-[#B4833D] mt-1">•</span> <span><strong className="text-[#66371B] font-medium">Vamana:</strong> Therapeutic emesis (controlled vomiting) primarily for Kapha disorders.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#B4833D] mt-1">•</span> <span><strong className="text-[#66371B] font-medium">Virechana:</strong> Therapeutic purgation, highly effective for Pitta disorders.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#B4833D] mt-1">•</span> <span><strong className="text-[#66371B] font-medium">Basti:</strong> Medicated enemas (oil or decoction) crucial for Vata disorders and gut health.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#B4833D] mt-1">•</span> <span><strong className="text-[#66371B] font-medium">Nasya:</strong> Nasal administration of medicines for conditions above the collarbone.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#B4833D] mt-1">•</span> <span><strong className="text-[#66371B] font-medium">Raktamokshana:</strong> Bloodletting therapy (rarely performed, only under specific clinical indications).</span></li>
                  </ul>
                </div>

                <div className="relative pl-8 md:pl-12 border-l border-[#DBCFA8]">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-[#B4833D] rounded-full -translate-x-[6.5px] mt-2"></div>
                  <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">3. Paschat Karma (Post-Therapy Care)</h3>
                  <p className="font-light">Following detoxification, the digestive fire (Agni) is weak. Strict dietary regimens (Samsarjana Krama) and lifestyle modifications are mandatory to safely restore strength and maximize the benefits of the therapy.</p>
                </div>
              </div>
            </div>

            <div className="mt-24 text-center">
              <div className="inline-block bg-white p-10 md:p-14 rounded-[3rem] border border-[#DBCFA8]/50 shadow-sm w-full md:w-auto">
                <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-6">Is Panchakarma Right For You?</h2>
                <p className="mb-10 font-light max-w-lg mx-auto">Suitability for Panchakarma can only be determined after a detailed consultation and pulse diagnosis.</p>
                <Button render={<Link href="/contact" />} size="lg" className="bg-[#66371B] text-white hover:bg-[#B4833D] rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full md:w-auto">
                  Consult Our Doctors
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
