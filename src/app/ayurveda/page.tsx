import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO SECTION */}
      <section className="bg-emerald-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply z-10" />
        </div>
        
        <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-20 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-800 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-6">
            Our Core Philosophy
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ayurveda at Omshree Sidha Hospital
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            Discover a traditional system of health and medicine that treats the individual, not just the symptoms.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button render={<Link href="/patient-care/consultation" />} size="lg" className="w-full sm:w-auto bg-white text-emerald-900 hover:bg-slate-100 rounded-full px-8 h-14 font-bold shadow-lg">
              Book a Consultation
            </Button>
            <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="outline" size="lg" className="w-full sm:w-auto border-emerald-500 text-emerald-50 hover:bg-emerald-800 rounded-full px-6 h-14 font-medium">
              <span className="flex items-center justify-center"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Enquiry</span>
            </Button>
          </div>
        </div>
      </section>

      {/* AEO BLOCK: WHAT IS AYURVEDA */}
      <section className="bg-emerald-50 py-12 border-b border-emerald-100">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-emerald-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-emerald-600" />
              What is Ayurveda?
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Ayurveda is a traditional system of health and medicine originating from India. Unlike systems that focus solely on managing symptoms, Ayurveda seeks to identify the root cause of a disease. It operates on the principle that health is the balanced state of the body's biological energies (Doshas), tissues (Dhatus), and digestive fire (Agni). When these are out of balance due to lifestyle, diet, or environmental factors, disease occurs. Ayurvedic treatment focuses on restoring this balance through individualized care.
            </p>
          </div>
        </div>
      </section>

      {/* CORE TOPICS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            <Card className="border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col bg-white">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Kerala Ayurveda</h3>
                <p className="text-slate-600 mb-6 flex-1 text-lg">
                  Understand the geographical and cultural context of Ayurvedic care in Kerala, and why patients travel here for authentic healing.
                </p>
                <Button render={<Link href="/ayurveda/kerala" />} variant="link" className="text-emerald-700 px-0 self-start flex items-center group text-base">
                  Explore Kerala Ayurveda <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col bg-white">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Panchakarma</h3>
                <p className="text-slate-600 mb-6 flex-1 text-lg">
                  Learn about the structured detoxification and purification therapies used in Ayurveda under strict clinical supervision.
                </p>
                <Button render={<Link href="/ayurveda/panchakarma" />} variant="link" className="text-emerald-700 px-0 self-start flex items-center group text-base">
                  Understanding Panchakarma <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col bg-white">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Consultation</h3>
                <p className="text-slate-600 mb-6 flex-1 text-lg">
                  Discover what actually happens during an Ayurvedic consultation, from medical history review to personalized treatment planning.
                </p>
                <Button render={<Link href="/ayurveda/consultation" />} variant="link" className="text-emerald-700 px-0 self-start flex items-center group text-base">
                  How Consultation Works <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* THE OMSHREE APPROACH */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            How Does Omshree Approach Care?
          </h2>
          <div className="prose prose-emerald max-w-none text-slate-700 text-lg leading-relaxed">
            <p>
              At Omshree Sidha Hospital, we practice authentic, clinical Ayurveda. Our physicians do not use a "one-size-fits-all" approach. Every patient undergoes a rigorous assessment to understand their specific imbalances.
            </p>
            <p>
              In Ayurveda, the body's functions are understood through three doshas—Vata (movement), Pitta (metabolism), and Kapha (structure). During an assessment, the practitioner considers how these principles relate to the individual's current health status. Treatment involves internal herbal medicines, targeted external therapies, and structured dietary adjustments designed to restore harmony.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Button render={<Link href="/treatments" />} size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8">
              View Our Treatments & Therapies
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
