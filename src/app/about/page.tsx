import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustSignals } from "@/components/ui/TrustSignals";
import { MapPin, ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Omshree Sidha Hospital",
  description: "Learn about Omshree Sidha Hospital, a premier Ayurvedic institution in Kottayam, Kerala, offering clinical disease management and traditional healing.",
};

export default function AboutMasterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "MedicalOrganization",
      "name": "Omshree Sidha Hospital",
      "url": "https://omshreeayur.com",
      "logo": "https://omshreeayur.com/images/logo/logo.webp",
      "description": "An Ayurvedic Hospital providing healing, detox, rejuvenation treatments and Ayurvedic products.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "16,18, Marozhukayil House, Kummannoor-Vayala",
        "addressLocality": "Kottayam",
        "addressRegion": "Kerala",
        "postalCode": "686587",
        "addressCountry": "IN"
      },
      "telephone": "+91-4822229434"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is Omshree Sidha Hospital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omshree Sidha Hospital is a traditional, clinical Ayurvedic hospital located in Vayala, Kottayam, Kerala. Despite the name 'Sidha', the hospital specializes strictly in authentic Kerala Ayurveda for chronic disease management, operating an in-house GMP-certified medicine pharmacy and in-patient treatment facility."
      }
    }]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24 relative">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-20 text-center">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
            Our Institution
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F1E1]">
            About Omshree Sidha Hospital
          </h1>
          <p className="text-xl text-[#E3D8C1] font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            A traditional Ayurvedic Hospital in Kerala, India, dedicated to clinical healing and chronic disease management.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#B4833D]">
            <MapPin className="h-5 w-5" />
            <span className="font-medium text-[#E3D8C1]">Vayala, Kottayam, Kerala</span>
          </div>
        </div>
      </section>

      <TrustSignals />

      <section className="bg-[#E3D8C1]/50 py-12 border-b border-[#DBCFA8]">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#DBCFA8]">
            <h2 className="text-xl font-bold text-[#66371B] mb-3 flex items-center gap-2">
              <Info className="h-6 w-6 text-[#517B32]" />
              What is Omshree Sidha Hospital?
            </h2>
            <p className="text-[#66371B]/90 text-lg leading-relaxed mb-4">
              Omshree Sidha Hospital is a traditional Ayurvedic hospital located in the tranquil village of Vayala, Kerala. We specialize in clinical disease management and Panchakarma therapies. 
            </p>
            <p className="text-[#66371B] text-lg leading-relaxed font-medium">
              Note on our name: While the institution bears the proper name "Sidha", we are exclusively an Ayurvedic hospital. We practice the classical medical systems of Kerala Ayurveda, utilizing our own GMP-certified medicinal preparations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F1E1]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-[#DBCFA8] flex flex-col items-start shadow-xs">
              <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Heritage & History</h3>
              <p className="text-[#81754B] mb-6 flex-1">
                Founded in the 1880s by Sri Kochukutty Vaidhyar, our hospital carries over 140 years of unbroken traditional Ayurvedic lineage.
              </p>
              <Button render={<Link href="/about/history" />} variant="outline" className="text-[#517B32] border-[#517B32] hover:bg-[#E3D8C1] rounded-full mt-auto">
                Discover Our Roots <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#DBCFA8] flex flex-col items-start shadow-xs">
              <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Our Doctors</h3>
              <p className="text-[#81754B] mb-6 flex-1">
                Led by Sri M.J. Jose, our team of qualified Ayurvedic physicians (BAMS) blends deep traditional knowledge with rigorous clinical diagnosis.
              </p>
              <Button render={<Link href="/about/doctors" />} variant="outline" className="text-[#517B32] border-[#517B32] hover:bg-[#E3D8C1] rounded-full mt-auto">
                Meet the Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#DBCFA8] flex flex-col items-start shadow-xs">
              <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Why Choose Us</h3>
              <p className="text-[#81754B] mb-6 flex-1">
                We are a hospital, not a spa. With our own GMP pharmacy and dedicated in-patient care, we focus strictly on therapeutic results.
              </p>
              <Button render={<Link href="/about/why-omshree" />} variant="outline" className="text-[#517B32] border-[#517B32] hover:bg-[#E3D8C1] rounded-full mt-auto">
                The Omshree Difference <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
