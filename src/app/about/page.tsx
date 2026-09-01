import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustSignals } from "@/components/ui/TrustSignals";
import { MapPin, ArrowRight, Info, CheckCircle2 } from "lucide-react";

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
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-[4%] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E3D8C1]/20 blur-3xl rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            <div className="w-full lg:w-1/2 text-left relative z-10">
              <nav className="flex text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-3">
                  <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
                  <li><span>/</span></li>
                  <li className="text-[#66371B]">About Us</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#B4833D]"></span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">Our Institution</span>
              </div>
              
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-normal mb-8 text-[#66371B] leading-[1.1]">
                About Omshree Sidha Hospital
              </h1>
              
              <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed mb-10 max-w-xl">
                A traditional Ayurvedic Hospital in Kerala, India, dedicated to clinical healing and chronic disease management.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-[#B4833D] bg-white border border-[#DBCFA8] rounded-full px-6 py-3 w-fit shadow-xs">
                  <MapPin className="h-5 w-5 text-[#517B32]" />
                  <span className="font-medium text-[#66371B] text-sm tracking-wide">Vayala, Kottayam, Kerala</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#DBCFA8]/30">
                <Image 
                  src="/images/hospital/banner.png" 
                  alt="Omshree Sidha Hospital Facility" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-white p-5 lg:p-6 rounded-3xl shadow-xl border border-[#DBCFA8] max-w-[220px] lg:max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="h-5 w-5 lg:h-6 lg:w-6 text-[#517B32]" />
                  <span className="font-bold text-[#66371B] text-sm lg:text-base">GMP Certified</span>
                </div>
                <p className="text-[10px] lg:text-xs text-[#81754B] leading-relaxed">Operating an in-house proprietary medicine manufacturing unit.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <TrustSignals />

      <section className="bg-white py-24 md:py-32 border-b border-[#DBCFA8]/30 overflow-hidden">
        <div className="container px-[4%] max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg border border-[#DBCFA8]">
                <Image 
                  src="/images/hospital/hospital-1.png" 
                  alt="Omshree Sidha Hospital Interior" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="absolute top-[60%] -right-8 lg:-right-16 w-3/5 lg:w-1/2 aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform -translate-y-1/2 hidden md:block">
                <Image 
                  src="/images/hospital/hospital-2.png" 
                  alt="Omshree Sidha Hospital Treatment" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-16 relative z-10 mt-8 md:mt-0">
              <div className="inline-flex justify-center items-center h-16 w-16 rounded-full bg-[#FDFBF7] border border-[#DBCFA8] text-[#B4833D] mb-8 shadow-sm">
                <Info className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-normal text-[#66371B] mb-8 leading-[1.1]">
                What is Omshree Sidha Hospital?
              </h2>
              <div className="space-y-6">
                <p className="text-[#81754B] text-lg leading-relaxed font-light">
                  Omshree Sidha Hospital is a traditional Ayurvedic hospital located in the tranquil village of Vayala, Kerala. We specialize exclusively in clinical disease management and classical Panchakarma therapies, delivering profound healing through authentic protocols.
                </p>
                <div className="p-6 bg-[#FDFBF7] border border-[#DBCFA8]/50 rounded-2xl shadow-xs">
                  <p className="text-[#66371B] text-base leading-relaxed font-light">
                    <strong className="text-[#B4833D] font-bold">Note on our name:</strong> While the institution bears the proper name "Sidha", we are exclusively an Ayurvedic hospital. We practice the classical medical systems of Kerala Ayurveda, utilizing our own GMP-certified medicinal preparations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FDFBF7]">
        <div className="container px-[4%] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-10 rounded-[2rem] border border-[#DBCFA8]/50 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">Heritage & History</h3>
              <p className="text-[#81754B] mb-8 flex-1 font-light leading-relaxed">
                Founded in the 1880s by Sri Kochukutty Vaidhyar, our hospital carries over 140 years of unbroken traditional Ayurvedic lineage.
              </p>
              <Link 
                href="/about/history"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B4833D] hover:text-[#517B32] transition-colors mt-auto"
              >
                <span>Discover Our Roots</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-10 rounded-[2rem] border border-[#DBCFA8]/50 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">Our Doctors</h3>
              <p className="text-[#81754B] mb-8 flex-1 font-light leading-relaxed">
                Led by Sri M.J. Jose, our team of qualified Ayurvedic physicians (BAMS) blends deep traditional knowledge with rigorous clinical diagnosis.
              </p>
              <Link 
                href="/about/doctors"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B4833D] hover:text-[#517B32] transition-colors mt-auto"
              >
                <span>Meet the Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-10 rounded-[2rem] border border-[#DBCFA8]/50 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-heading text-3xl font-normal text-[#66371B] mb-4">Why Choose Us</h3>
              <p className="text-[#81754B] mb-8 flex-1 font-light leading-relaxed">
                We are a hospital, not a spa. With our own GMP pharmacy and dedicated in-patient care, we focus strictly on therapeutic results.
              </p>
              <Link 
                href="/about/why-omshree"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B4833D] hover:text-[#517B32] transition-colors mt-auto"
              >
                <span>The Omshree Difference</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
