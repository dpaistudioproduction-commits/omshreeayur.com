import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Award, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake, 
  Building2, 
  Stethoscope, 
  FlaskConical, 
  FileCheck, 
  Plane, 
  HelpCircle,
  CalendarCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustSignals } from "@/components/ui/TrustSignals";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { SpecialityList } from "@/components/editorial/SpecialityList";
import { DoctorEditorialCard } from "@/components/editorial/DoctorEditorialCard";
import { PharmacyEditorial } from "@/components/editorial/PharmacyEditorial";
import { BRAND_ASSETS } from "@/lib/brand-assets";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://omshreeayur.com/#organization",
        "name": "Omshree Sidha Hospital",
        "alternateName": "Omshree Ayurvedic Hospital",
        "url": "https://omshreeayur.com",
        "logo": "https://omshreeayur.com/images/logo/logo.webp",
        "description": "Multi-speciality Ayurvedic Hospital & Research Centre in Vayala, Kottayam, Kerala. Established in 1880, specializing in cardiovascular, hepatic, gastrointestinal, and chronic disease management.",
        "foundingDate": "1880",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vayala P.O., Kaduthuruthy",
          "addressLocality": "Kottayam",
          "addressRegion": "Kerala",
          "postalCode": "686587",
          "addressCountry": "IN"
        },
        "telephone": "+914822229434",
        "medicalSpecialty": [
          "Ayurvedic Cardiovascular Medicine",
          "Hepatic and Liver Care",
          "Gastrointestinal Medicine",
          "Panchakarma Shodhana"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://omshreeayur.com/#website",
        "url": "https://omshreeayur.com",
        "name": "Omshree Sidha Hospital",
        "publisher": { "@id": "https://omshreeayur.com/#organization" }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-[#F7F1E1] text-[#402816] font-sans overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================================================
          SECTION 01: 5-SLIDE CINEMATIC HERO SLIDER
          ========================================================================= */}
      <HeroSlider />

      {/* =========================================================================
          SECTION 02: TRUST STRIP
          ========================================================================= */}
      <TrustSignals />

      {/* =========================================================================
          SECTION 03: HERITAGE & INSTITUTIONAL DEFINITION
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F7F1E1] border-b border-[#DBCFA8]">
        <div className="w-full px-[4%]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left: Cinematic Hospital Image */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-[#DBCFA8] group">
              <Image
                src={BRAND_ASSETS.hospital.campusExterior}
                alt="Omshree Sidha Hospital Campus Exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A0F]/90 via-[#2A1A0F]/30 to-transparent flex flex-col justify-end p-8 sm:p-10 md:p-12">
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#E3D8C1] mb-3">
                  Since 1880 • Kerala, India
                </span>
                <div className="font-heading font-bold text-6xl sm:text-7xl lg:text-8xl text-[#F7F1E1] leading-[0.9] tracking-tight">
                  140+
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#B4833D] font-serif font-normal italic mt-3">
                    Years of Lineage
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Institutional Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pl-4 py-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#517B32] block mb-4">
                  Institutional Definition
                </span>
                <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#66371B] leading-[1.15]">
                  An Authentic In-Patient Ayurvedic Hospital, <span className="text-[#B4833D] italic font-serif font-normal">Not a Wellness Resort</span>
                </h3>
              </div>

              <div className="space-y-6 text-base sm:text-lg text-[#81754B] leading-relaxed font-light">
                <p>
                  Founded in the late nineteenth century by Sri Kochukutty Vaidhyar, Omshree Sidha Hospital has carried forward pure Kerala Ayurvedic clinical traditions across three generations of the Marozhukayil family.
                </p>
                <p>
                  We are a licensed, clinical Ayurvedic institution located in Vayala, Kottayam. Our specialized clinical team manages chronic cardiovascular, hepatic, gastrointestinal, and metabolic conditions through authentic, intensive therapeutic protocols.
                </p>
              </div>

              <div className="bg-[#E3D8C1]/40 border-l-4 border-[#B4833D] p-5 sm:p-6 rounded-r-2xl">
                <p className="text-sm sm:text-base text-[#66371B] leading-relaxed italic">
                  <span className="font-bold mr-1">Note on terminology:</span> 
                  While our heritage institution bears the proper family brand name "Sidha", we practice exclusively the classical medical system of Kerala Ayurveda.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about/history"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#517B32] hover:text-[#6F9940] transition-colors group/link"
                >
                  <span className="border-b border-[#517B32]/30 pb-0.5 group-hover/link:border-[#6F9940]">Read our full institutional history</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: AREAS OF CARE (Premium Grid)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#28422B]">
        <div className="w-full px-[4%]">
          <SectionHeading
            eyebrow="Clinical Specialities"
            title="Comprehensive Ayurvedic Hospital Care"
            description="Our clinical practice addresses complex lifestyle and degenerative disorders through root-cause correction and tailored therapeutic regimens."
            align="center"
            dark={true}
            className="mb-16 md:mb-24"
          />

          <SpecialityList />
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: SIGNATURE THERAPIES (Immersive Image-First Cards)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F7F1E1] border-y border-[#DBCFA8]">
        <div className="w-full px-[4%]">
          <SectionHeading
            eyebrow="Signature Therapies"
            title="Authentic Kerala Panchakarma & External Procedures"
            description="Every treatment procedure is individualized according to Dosha Prakriti, disease chronicity, and internal metabolic Agni."
            align="center"
            className="mb-16 md:mb-24"
          />

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Shirodhara */}
            <Link
              href="/treatments/therapies/shirodhara"
              className="group relative h-[450px] sm:h-[500px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-xl block"
            >
              {/* Background Image */}
              <Image
                src={BRAND_ASSETS.therapies.shirodhara}
                alt="Authentic Shirodhara Therapy"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Cinematic Gradient Overlay (Taller & Darker) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content Panel */}
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4833D] block mb-3 drop-shadow-md">
                  Nervous System & Calm
                </span>
                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3 drop-shadow-lg">
                  Shirodhara
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-light mb-6 line-clamp-3 drop-shadow-md">
                  Continuous rhythmic pouring of warm medicated herbal oil over the forehead to soothe Prana Vata and support neurological equilibrium.
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-[#B4833D] drop-shadow-md">
                  <span className="border-b border-[#B4833D]/50 pb-0.5 group-hover:border-[#B4833D] transition-colors">View Protocol</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Kizhi */}
            <Link
              href="/treatments/therapies/elakizhi"
              className="group relative h-[450px] sm:h-[500px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-xl block"
            >
              <Image
                src={BRAND_ASSETS.therapies.kizhi}
                alt="Authentic Elakizhi Therapy"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4833D] block mb-3 drop-shadow-md">
                  Musculoskeletal Rejuvenation
                </span>
                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3 drop-shadow-lg">
                  Elakizhi
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-light mb-6 line-clamp-3 drop-shadow-md">
                  Warm herbal bolus fermentation prepared with medicated leaves to alleviate deep inflammation, stiffness, and chronic joint pain.
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-[#B4833D] drop-shadow-md">
                  <span className="border-b border-[#B4833D]/50 pb-0.5 group-hover:border-[#B4833D] transition-colors">View Protocol</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Hrid Basti */}
            <Link
              href="/treatments/therapies/hrid-basti"
              className="group relative h-[450px] sm:h-[500px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-xl block"
            >
              <Image
                src={BRAND_ASSETS.therapies.hridBasti}
                alt="Ayurvedic Cardiovascular Therapy"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4833D] block mb-3 drop-shadow-md">
                  Cardiovascular Nourishment
                </span>
                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3 drop-shadow-lg">
                  Hrid Basti
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-light mb-6 line-clamp-3 drop-shadow-md">
                  Retention of specially formulated warm medicated lipid decoctions over the cardiac region to support heart muscle strength.
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-[#B4833D] drop-shadow-md">
                  <span className="border-b border-[#B4833D]/50 pb-0.5 group-hover:border-[#B4833D] transition-colors">View Protocol</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: DOCTORS / LEADERSHIP (SIMPLE & COMPACT)
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-white">
        <div className="w-full px-[4%]">
          
          {/* Minimal Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4833D] block mb-3">
              Clinical Leadership
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#66371B] mb-4">
              Qualified Ayurvedic Physicians
            </h2>
            <p className="text-sm md:text-base text-[#81754B] leading-relaxed font-light max-w-2xl mx-auto">
              Our clinical team blends unbroken hereditary healing traditions with modern BAMS university medical qualifications.
            </p>
          </div>

          {/* Simple Compact Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {BRAND_ASSETS.doctors.map((doc) => (
              <div 
                key={doc.id} 
                className="flex flex-col items-center text-center p-8 bg-[#FDFBF7] rounded-[2rem] border border-[#E3D8C1]/50 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Clean Circular Avatar */}
                <div className="relative w-36 h-36 mb-6 overflow-hidden rounded-full border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={doc.imagePath!} 
                    alt={doc.altText!} 
                    fill 
                    className="object-cover object-top" 
                  />
                </div>
                
                {/* Refined Compact Typography */}
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#B4833D] mb-2">
                  {doc.role}
                </span>
                <h3 className="font-heading text-lg md:text-xl text-[#66371B] mb-1 font-semibold">
                  {doc.name}
                </h3>
                <p className="text-[10px] text-[#81754B] uppercase tracking-wider">
                  {doc.qualifications}
                </p>
              </div>
            ))}
          </div>

          {/* Simple Call to Action */}
          <div className="mt-12 text-center">
            <Link
              href="/about/doctors"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#517B32] hover:text-[#6F9940] transition-colors border-b border-[#517B32]/30 hover:border-[#6F9940] pb-1 group"
            >
              <span>View Full Profiles</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 07: IN-HOUSE GMP PHARMACY SHOWCASE
          ========================================================================= */}
      <PharmacyEditorial />

      {/* =========================================================================
          SECTION 08: THE PATIENT JOURNEY
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="w-full px-[4%]">
          
          {/* Custom Editorial Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#B4833D] hidden md:block"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">Care Pathway</span>
              <span className="h-px w-8 bg-[#B4833D] hidden md:block"></span>
            </div>
            <h2 className="font-heading font-normal text-4xl sm:text-5xl md:text-6xl text-[#66371B] leading-[1.1] mb-6">
              The Patient Healing Journey
            </h2>
            <p className="text-base text-[#81754B] leading-relaxed font-light max-w-2xl">
              A structured, compassionate clinical process designed to provide clarity, comfort, and sustainable health restoration.
            </p>
          </div>

          {/* Elegant Horizontal Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* The horizontal connecting line (Desktop only) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#DBCFA8] to-transparent opacity-80" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Enquiry & Assessment",
                  description: "Initial review of medical history, current reports, and primary complaints by our care team.",
                },
                {
                  step: "02",
                  title: "Vaidya Consultation",
                  description: "In-depth pulse analysis (Nadi Pariksha) and Prakriti assessment with our chief physicians.",
                },
                {
                  step: "03",
                  title: "Personalized Protocol",
                  description: "Customized formulation of Panchakarma schedule, internal medications, and dietary plan.",
                },
                {
                  step: "04",
                  title: "Inpatient Care",
                  description: "Comfortable room accommodations, 24/7 resident medical care, and daily therapeutic sessions.",
                },
                {
                  step: "05",
                  title: "Discharge & Follow-Up",
                  description: "Post-discharge medicine regimen, lifestyle guidelines, and ongoing tele-consultation support.",
                },
              ].map((item, index) => (
                <div key={item.step} className="relative flex flex-col items-center text-center group">
                  {/* Step Node */}
                  <div className="w-20 h-20 rounded-full bg-white border border-[#DBCFA8] text-[#B4833D] font-heading text-2xl font-light flex items-center justify-center shadow-sm mb-8 relative z-10 group-hover:bg-[#66371B] group-hover:text-white group-hover:border-[#66371B] transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                    {item.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 px-2">
                    <h4 className="font-heading font-medium text-lg text-[#66371B] mb-4 group-hover:text-[#517B32] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-[#81754B] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 09: FAQ (Editorial Split Layout)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="w-full px-[4%]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left: Sticky Header */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-[#B4833D]"></span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">Answers & Guidance</span>
                </div>
                <h2 className="font-heading font-normal text-4xl sm:text-5xl text-[#66371B] leading-[1.1] mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-base text-[#81754B] leading-relaxed font-light">
                  Clear clinical answers regarding consultations, inpatient admissions, and treatment protocols at Omshree Sidha Hospital.
                </p>
              </div>
            </div>

            {/* Right: Minimalist Accordion */}
            <div className="lg:w-2/3">
              <Accordion className="w-full">
                {[
                  {
                    q: "What conditions are primarily treated at Omshree Sidha Hospital?",
                    a: "We specialize in the Ayurvedic management of chronic cardiovascular disorders (including low ejection fraction support and coronary block management), hepatic conditions (fatty liver, cirrhosis support), gastrointestinal diseases (IBS, ulcerative colitis), and classical Panchakarma detoxification.",
                  },
                  {
                    q: "Is Omshree Sidha Hospital an Ayurvedic hospital or a wellness resort?",
                    a: "Omshree Sidha Hospital is a fully licensed clinical Ayurvedic hospital located in Vayala, Kerala. We provide authentic medical care, inpatient doctor supervision, and individualized classical therapies, not recreational spa packages.",
                  },
                  {
                    q: "How can international patients arrange consultation and admission?",
                    a: "International patients can submit their medical reports online via our International Patient portal or WhatsApp. Our medical team conducts an initial review, determines admission eligibility, and assists with medical visas and travel logistics.",
                  },
                  {
                    q: "Are the medicines prepared in-house?",
                    a: "Yes. Omshree Sidha Hospital operates a licensed GMP-compliant pharmacy utilizing classical formulations and patented herbal compounds developed across 140+ years of clinical practice.",
                  },
                ].map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-[#DBCFA8]/50"
                  >
                    <AccordionTrigger className="text-left font-heading font-normal text-xl md:text-2xl text-[#66371B] hover:text-[#517B32] py-8 data-[state=open]:text-[#517B32] transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-[#81754B] leading-relaxed font-light pb-8 pr-12">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: ELEGANT CALL TO ACTION
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#FDFBF7] px-[4%]">
        <div className="w-full bg-gradient-to-br from-[#E3D8C1]/30 to-transparent rounded-[3rem] border border-[#DBCFA8]/50 p-10 md:p-20 text-center relative overflow-hidden shadow-sm">
          
          {/* Subtle Background Ornamentation */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#B4833D]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#517B32]/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-3 mx-auto">
              <span className="h-px w-6 bg-[#B4833D]"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">
                Begin Your Healing Journey
              </span>
              <span className="h-px w-6 bg-[#B4833D]"></span>
            </div>
            
            <h2 className="font-heading font-normal text-4xl sm:text-5xl md:text-6xl text-[#66371B] leading-[1.1]">
              Personalized Ayurvedic Clinical Care in Kerala
            </h2>
            
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed max-w-2xl mx-auto pb-4">
              Schedule a comprehensive clinical consultation with our experienced physicians or speak directly with our care coordination team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button
                render={<Link href="/patient-care/consultation" />}
                size="lg"
                className="w-full sm:w-auto bg-[#517B32] hover:bg-[#3f6126] text-white rounded-full px-10 h-14 text-sm font-bold tracking-wider uppercase shadow-xl transition-all transform hover:-translate-y-1"
              >
                Book a Consultation
              </Button>
              <Button
                render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#B4833D] text-[#B4833D] hover:bg-[#B4833D] hover:text-white rounded-full px-10 h-14 text-sm font-bold tracking-wider uppercase transition-all bg-transparent"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
