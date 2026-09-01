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
          SECTION 03: HERITAGE STATEMENT (Huge Editorial Typography)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F7F1E1] border-b border-[#DBCFA8]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#517B32] block">
                Since 1880 • Kerala, India
              </span>
              <div className="font-heading font-bold text-6xl sm:text-7xl md:text-8xl text-[#B4833D] leading-none tracking-tight">
                140+
                <span className="block text-2xl sm:text-3xl text-[#66371B] font-serif font-normal italic mt-2">
                  Years of Unbroken Lineage
                </span>
              </div>
              <p className="text-base sm:text-lg text-[#81754B] leading-relaxed font-light">
                Founded in the late nineteenth century by Sri Kochukutty Vaidhyar, Omshree Sidha Hospital has carried forward pure Kerala Ayurvedic clinical traditions across three generations of the Marozhukayil family.
              </p>
              <div className="pt-2">
                <Link
                  href="/about/history"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#517B32] hover:text-[#6F9940] transition-colors"
                >
                  <span>Read the Full Institutional History</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#E3D8C1]/60 p-8 sm:p-12 rounded-3xl border border-[#DBCFA8] space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                Institutional Definition & Medical Governance
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#66371B] leading-snug">
                An Authentic In-Patient Ayurvedic Hospital, Not a Wellness Resort
              </h3>
              <p className="text-sm sm:text-base text-[#66371B]/90 leading-relaxed font-light">
                Omshree Sidha Hospital is a licensed, clinical Ayurvedic institution located in Vayala, Kottayam, Kerala. We specialize in the therapeutic management of chronic cardiovascular, hepatic, gastrointestinal, and metabolic conditions.
              </p>
              <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed italic border-l-2 border-[#B4833D] pl-4">
                Note on terminology: While our heritage institution bears the proper family brand name "Sidha", we practice exclusively the classical medical system of Kerala Ayurveda.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: AREAS OF CARE (Editorial Numbered List)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F7F1E1]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clinical Specialities"
            title="Comprehensive Ayurvedic Hospital Care"
            description="Our clinical practice addresses complex lifestyle and degenerative disorders through root-cause correction and tailored therapeutic regimens."
            className="mb-16 md:mb-24"
          />

          <SpecialityList />
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: SIGNATURE THERAPIES (Asymmetrical Editorial Compositions)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#E3D8C1]/40 border-y border-[#DBCFA8]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Signature Therapies"
            title="Authentic Kerala Panchakarma & External Procedures"
            description="Every treatment procedure is individualized according to Dosha Prakriti, disease chronicity, and internal metabolic Agni."
            className="mb-16 md:mb-24"
          />

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Shirodhara */}
            <div className="bg-[#F7F1E1] rounded-3xl border border-[#DBCFA8] overflow-hidden flex flex-col justify-between group hover:border-[#517B32] transition-all duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#E3D8C1]">
                <Image
                  src={BRAND_ASSETS.therapies.shirodhara}
                  alt="Authentic Shirodhara Therapy at Omshree Sidha Hospital"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B4833D] block mb-1">
                    Nervous System & Calm
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#66371B] mb-2">
                    Shirodhara
                  </h3>
                  <p className="text-sm text-[#81754B] leading-relaxed font-light">
                    Continuous rhythmic pouring of warm medicated herbal oil over the forehead to soothe Prana Vata and support neurological equilibrium.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#DBCFA8]">
                  <Link
                    href="/treatments/therapies/shirodhara"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#517B32] group-hover:text-[#6F9940] transition-colors"
                  >
                    <span>View Therapy Protocol</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Kizhi */}
            <div className="bg-[#F7F1E1] rounded-3xl border border-[#DBCFA8] overflow-hidden flex flex-col justify-between group hover:border-[#517B32] transition-all duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#E3D8C1]">
                <Image
                  src={BRAND_ASSETS.therapies.kizhi}
                  alt="Authentic Elakizhi Therapy at Omshree Sidha Hospital"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B4833D] block mb-1">
                    Musculoskeletal Rejuvenation
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#66371B] mb-2">
                    Elakizhi (Patra Pinda Sweda)
                  </h3>
                  <p className="text-sm text-[#81754B] leading-relaxed font-light">
                    Warm herbal bolus fermentation prepared with medicated leaves to alleviate deep inflammation, stiffness, and chronic joint pain.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#DBCFA8]">
                  <Link
                    href="/treatments/therapies/elakizhi"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#517B32] group-hover:text-[#6F9940] transition-colors"
                  >
                    <span>View Therapy Protocol</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Hrid Basti */}
            <div className="bg-[#F7F1E1] rounded-3xl border border-[#DBCFA8] overflow-hidden flex flex-col justify-between group hover:border-[#517B32] transition-all duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#E3D8C1]">
                <Image
                  src={BRAND_ASSETS.therapies.hridBasti}
                  alt="Ayurvedic Cardiovascular Therapy at Omshree Sidha Hospital"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B4833D] block mb-1">
                    Cardiovascular Nourishment
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#66371B] mb-2">
                    Hrid Basti
                  </h3>
                  <p className="text-sm text-[#81754B] leading-relaxed font-light">
                    Retention of specially formulated warm medicated lipid decoctions over the cardiac region (Hridaya) to support heart muscle strength.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#DBCFA8]">
                  <Link
                    href="/treatments/therapies/hrid-basti"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#517B32] group-hover:text-[#6F9940] transition-colors"
                  >
                    <span>View Therapy Protocol</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: MEDICAL GOVERNANCE & PHYSICIANS
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F7F1E1]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clinical Leadership"
            title="Qualified Ayurvedic Physicians & Vaidyars"
            description="Our clinical team blends unbroken hereditary healing traditions with modern BAMS university medical qualifications."
            className="mb-16 md:mb-24"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {BRAND_ASSETS.doctors.map((doc) => (
              <DoctorEditorialCard
                key={doc.id}
                id={doc.id}
                name={doc.name}
                role={doc.role}
                qualifications={doc.qualifications}
                initials={doc.initials}
                imagePath={doc.imagePath}
                altText={doc.name}
              />
            ))}
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
      <section className="py-24 md:py-32 bg-[#F7F1E1]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Care Pathway"
            title="The Patient Healing Journey"
            description="A structured, compassionate clinical process designed to provide clarity, comfort, and sustainable health restoration."
            className="mb-16 md:mb-24"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#E3D8C1]/30 p-8 rounded-3xl border border-[#DBCFA8] space-y-4 hover:border-[#517B32] transition-colors"
              >
                <span className="font-mono text-2xl font-bold text-[#B4833D]">
                  {item.step}
                </span>
                <h4 className="font-heading font-bold text-xl text-[#66371B]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: FAQ ACCORDION (AEO Structured)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#E3D8C1]/30 border-y border-[#DBCFA8]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Answers & Guidance"
            title="Frequently Asked Questions"
            description="Clear clinical answers regarding consultations, inpatient admissions, and treatment protocols."
            className="mb-16 md:mb-20 text-center mx-auto"
          />

          <div className="max-w-4xl mx-auto">
            <Accordion className="w-full space-y-4">
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
                  className="bg-white border border-[#DBCFA8] rounded-2xl px-6 py-2 shadow-2xs"
                >
                  <AccordionTrigger className="text-left font-heading font-bold text-lg text-[#66371B] hover:text-[#517B32] py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-[#81754B] leading-relaxed font-light pt-2 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FINAL CONSULTATION CALL TO ACTION
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#402816] text-[#F7F1E1] relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B4833D] block">
              Begin Your Healing Journey
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
              Personalized Ayurvedic Clinical Care in Kerala
            </h2>
            <p className="text-base sm:text-lg text-[#E3D8C1] font-light leading-relaxed max-w-2xl mx-auto">
              Schedule a comprehensive clinical consultation with our experienced physicians or speak directly with our care coordination team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                render={<Link href="/patient-care/consultation" />}
                size="lg"
                className="w-full sm:w-auto bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-8 h-14 text-base font-bold shadow-xl border border-[#6F9940]/40 transition-all transform hover:-translate-y-0.5"
              >
                Book a Consultation
              </Button>
              <Button
                render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#E3D8C1]/40 text-[#F7F1E1] bg-white/5 hover:bg-white/15 backdrop-blur-xs rounded-full px-8 h-14 text-base font-medium transition-all"
              >
                <MessageCircle className="h-5 w-5 mr-2 text-[#25D366]" />
                <span>WhatsApp Enquiry</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
