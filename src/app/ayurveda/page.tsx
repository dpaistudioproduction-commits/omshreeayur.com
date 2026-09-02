import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, MapPin, Phone, MessageCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurveda at Omshree Sidha Hospital | Authentic Healing",
  description: "Understand the traditional Ayurvedic approach to health, disease management, and holistic healing at Omshree Sidha Hospital.",
};

export default function AyurvedaHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is Ayurveda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ayurveda is a traditional system of health and medicine from India. It focuses on identifying the root cause of diseases by assessing an individual's unique physical and mental constitution (Prakriti) and the balance of their biological energies (Doshas)."
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
              <li className="text-[#66371B]">Ayurveda</li>
            </ol>
          </nav>
          
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#B4833D]"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">Our Core Philosophy</span>
            <span className="h-px w-8 bg-[#B4833D]"></span>
          </div>

          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            Ayurveda at Omshree Sidha Hospital
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Discover a traditional system of health and medicine that treats the individual, not just the symptoms.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button render={<Link href="/patient-care/consultation" />} size="lg" className="bg-[#66371B] text-white hover:bg-[#B4833D] rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
              Book a Consultation
            </Button>
            <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="outline" size="lg" className="border-[#DBCFA8] text-[#66371B] hover:bg-[#FDFBF7] bg-white rounded-full px-8 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
              <MessageCircle className="mr-2 h-5 w-5 text-[#517B32]" /> WhatsApp Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* AEO BLOCK: WHAT IS AYURVEDA */}
      <section className="bg-white py-24 border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="bg-[#FDFBF7] p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-[#DBCFA8]/50 max-w-4xl mx-auto">
            <div className="inline-flex justify-center items-center h-16 w-16 rounded-full bg-white border border-[#DBCFA8] text-[#517B32] mb-8 shadow-sm">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-4xl font-normal text-[#66371B] mb-6">
              What is Ayurveda?
            </h2>
            <p className="text-[#81754B] text-lg leading-relaxed font-light">
              Ayurveda is a traditional system of health and medicine originating from India. Unlike systems that focus solely on managing symptoms, Ayurveda seeks to identify the root cause of a disease. It operates on the principle that health is the balanced state of the body's biological energies (Doshas), tissues (Dhatus), and digestive fire (Agni). When these are out of balance due to lifestyle, diet, or environmental factors, disease occurs. Ayurvedic treatment focuses on restoring this balance through individualized care.
            </p>
          </div>
        </div>
      </section>

      {/* CORE TOPICS GRID */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="w-full px-[4%]">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-[#DBCFA8]/50 flex flex-col group hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-5">Kerala Ayurveda</h3>
              <p className="text-[#81754B] mb-8 flex-1 text-lg font-light leading-relaxed">
                Understand the geographical and cultural context of Ayurvedic care in Kerala, and why patients travel here for authentic healing.
              </p>
              <Link href="/ayurveda/kerala" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B4833D] hover:text-[#517B32] transition-colors mt-auto">
                Explore Kerala Ayurveda <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-[#DBCFA8]/50 flex flex-col group hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-5">Panchakarma</h3>
              <p className="text-[#81754B] mb-8 flex-1 text-lg font-light leading-relaxed">
                Learn about the structured detoxification and purification therapies used in Ayurveda under strict clinical supervision.
              </p>
              <Link href="/ayurveda/panchakarma" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B4833D] hover:text-[#517B32] transition-colors mt-auto">
                Understanding Panchakarma <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-[#DBCFA8]/50 flex flex-col group hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-[#FDFBF7] border border-[#DBCFA8] text-[#517B32] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-5">The Consultation</h3>
              <p className="text-[#81754B] mb-8 flex-1 text-lg font-light leading-relaxed">
                Discover what actually happens during an Ayurvedic consultation, from medical history review to personalized treatment planning.
              </p>
              <Link href="/ayurveda/consultation" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B4833D] hover:text-[#517B32] transition-colors mt-auto">
                How Consultation Works <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* THE OMSHREE APPROACH */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-[#66371B] mb-6">
              How Does Omshree Approach Care?
            </h2>
            <div className="w-16 h-px bg-[#B4833D] mx-auto"></div>
          </div>
          <div className="text-[#81754B] text-lg lg:text-xl font-light leading-relaxed space-y-6">
            <p>
              At Omshree Sidha Hospital, we practice authentic, clinical Ayurveda. Our physicians do not use a "one-size-fits-all" approach. Every patient undergoes a rigorous assessment to understand their specific imbalances.
            </p>
            <p>
              In Ayurveda, the body's functions are understood through three doshas—Vata (movement), Pitta (metabolism), and Kapha (structure). During an assessment, the practitioner considers how these principles relate to the individual's current health status. Treatment involves internal herbal medicines, targeted external therapies, and structured dietary adjustments designed to restore harmony.
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Button render={<Link href="/treatments" />} size="lg" className="bg-[#66371B] text-white hover:bg-[#B4833D] rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors">
              View Our Treatments & Therapies
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
