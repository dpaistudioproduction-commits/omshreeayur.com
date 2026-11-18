import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  AlertCircle,
  Activity,
  Layers,
  Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

/* ------------------------------------------------------------------ */
/*  SEO, AEO & OPEN GRAPH METADATA                                    */
/* ------------------------------------------------------------------ */
const SITE_URL = "https://www.omshreeayur.com";
const PAGE_URL = `${SITE_URL}/conditions/skin`;
const TITLE = "Ayurvedic Skin Care, Psoriasis & Eczema Treatment in Kerala | Omshree Sidha Hospital";
const DESCRIPTION =
  "Specialized Ayurvedic clinical care for Psoriasis, Eczema, Vitiligo, and chronic dermatological conditions at Omshree Sidha Hospital, Kerala.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Omshree Sidha Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/campus/campus-exterior-omshree.webp`,
        width: 1200,
        height: 630,
        alt: "Ayurvedic Skin Care at Omshree Sidha Hospital Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/images/campus/campus-exterior-omshree.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ------------------------------------------------------------------ */
/*  FAQ DATA (Structured for UI & JSON-LD Schema)                      */
/* ------------------------------------------------------------------ */
const SKIN_FAQS = [
  {
    q: "What skin conditions are treated at Omshree Sidha Hospital?",
    a: "Our clinical team provides comprehensive Ayurvedic care and rehabilitation for Psoriasis (plaque, guttate, inverse, and scalp psoriasis), Eczema and Atopic Dermatitis, Vitiligo (leukoderma), chronic urticaria, and persistent scalp scaling/dermatitis. Every care plan is customized following an in-depth clinical consultation and assessment of your skin lesions, disease chronicity, and metabolic constitution."
  },
  {
    q: "Are skin conditions like psoriasis, eczema, or vitiligo contagious?",
    a: "No. None of these conditions are contagious. You cannot transmit or catch psoriasis, eczema, or vitiligo through physical touch, sharing clothes or personal items, or swimming. Psoriasis and vitiligo are autoimmune-related conditions, while eczema involves skin barrier dysfunction and immune hyper-reactivity. We actively educate patients and families to dismantle harmful social stigma."
  },
  {
    q: "Can I stop using my prescribed steroid creams or immunosuppressants?",
    a: "No. You should never abruptly discontinue prescribed topical corticosteroids, oral steroids, or immunosuppressive medications (such as methotrexate, cyclosporine, or biologics) without the explicit guidance of your dermatologist. Abrupt cessation of steroids can trigger severe rebound flares or erythrodermic complications. In our hospital practice, Ayurvedic therapies are coordinated safely alongside conventional regimens, with gradual tapering evaluated only under physician supervision as the skin stabilizes."
  },
  {
    q: "Can Ayurveda cure chronic psoriasis or vitiligo permanently?",
    a: "No. We do not claim a guaranteed permanent cure for chronic dermatoses like psoriasis or vitiligo. Both are complex, relapsing conditions influenced by genetics, immunity, and environmental stress. Our physician-directed Ayurvedic care focuses on realistic, sustainable clinical outcomes: clearing active plaques, alleviating severe itching and burning, extending symptom-free remission periods, and supporting natural skin barrier restoration."
  },
  {
    q: "What therapies are commonly used for skin health at Omshree Sidha Hospital?",
    a: "Depending on your specific condition and Dosha staging, therapies may include Takradhara (continuous pouring of medicated buttermilk over the forehead or body to cool Pitta and soothe stress), Kashaya Dhara (warm medicated herbal decoction stream for lesion cleansing), Virechana (therapeutic purgation for deep blood purification), specialized herbal Lepams, and application of classical medicated oils like Danthapala (Wrightia tinctoria) or Nalpamaradi tailam."
  },
  {
    q: "How long does an inpatient skin care program typically take?",
    a: "Inpatient programs for chronic dermatological conditions generally range between 3 to 4 weeks under daily physician monitoring. This intensive Panchakarma phase is followed by a home maintenance regimen of internal herbal medicines, skin barrier oils, and dietary guidelines for 6 to 12 months to support sustained remission."
  },
  {
    q: "Can out-of-state or international patients consult online before travelling to Kerala?",
    a: "Yes. We strongly encourage out-of-state and international patients to arrange an initial online video consultation. During this review, our senior Ayurvedic physicians assess high-resolution photographs of your skin lesions, recent biopsy or blood reports (including IgE, ESR, and thyroid markers), current topical/oral prescriptions, and general health to advise whether inpatient admission in Vayala, Kottayam, Kerala is appropriate."
  }
];

export default function SkinConditionsPage() {
  /* ------------------------------------------------------------------ */
  /*  JSON-LD STRUCTURED DATA                                           */
  /* ------------------------------------------------------------------ */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": TITLE,
        "description": DESCRIPTION,
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "Omshree Sidha Hospital",
          "url": SITE_URL,
          "logo": `${SITE_URL}/images/logo/logo.webp`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vayala P.O.",
            "addressLocality": "Kottayam",
            "addressRegion": "Kerala",
            "postalCode": "686587",
            "addressCountry": "IN"
          },
          "telephone": "+919846992789"
        },
        "about": [
          {
            "@type": "MedicalCondition",
            "name": "Psoriasis",
            "alternateName": "Kitibha / Ekakushta",
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "Ayurvedic Skin Care & Panchakarma"
            }
          },
          {
            "@type": "MedicalCondition",
            "name": "Eczema",
            "alternateName": "Vicharchika / Atopic Dermatitis"
          },
          {
            "@type": "MedicalCondition",
            "name": "Vitiligo",
            "alternateName": "Shvitra / Kilasa"
          },
          {
            "@type": "MedicalCondition",
            "name": "Scalp Dermatitis",
            "alternateName": "Darunaka"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Health Conditions",
            "item": `${SITE_URL}/conditions`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Skin Care",
            "item": PAGE_URL
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        "mainEntity": SKIN_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7] text-[#402816]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="bg-[#402816] text-[#F7F1E1] pt-32 pb-20 md:pb-28 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#517B32]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B4833D]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full px-[4%] relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center text-xs text-[#E3D8C1] mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-[#E3D8C1]/50">/</span>
              </li>
              <li>
                <Link
                  href="/conditions"
                  className="hover:text-white transition-colors"
                >
                  Conditions
                </Link>
              </li>
              <li>
                <span className="text-[#E3D8C1]/50">/</span>
              </li>
              <li className="text-[#D9B872] font-semibold">Skin Care</li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#517B32]/30 border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider text-[#D9B872]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clinical Speciality • Kerala Ayurvedic Dermatology</span>
            </div>

            <h1 className="font-heading font-normal text-4xl sm:text-5xl md:text-6xl text-[#F7F1E1] leading-[1.15]">
              Skin Conditions &amp; Ayurvedic Care
            </h1>

            <p className="text-lg md:text-xl text-[#E3D8C1] font-light leading-relaxed">
              Chronic skin conditions such as psoriasis, eczema, and vitiligo affect far
              more than the physical surface—they impact confidence, emotional
              well-being, and everyday peace of mind. At Omshree Sidha Hospital, our
              physician-directed clinical protocols combine traditional Kerala Vaidya
              lineage, specialized Panchakarma therapies (including Takradhara and
              Kashaya Dhara), and personalized dietary management to soothe chronic
              inflammation, restore the skin barrier, and support lasting remission.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="bg-[#D9B872] text-[#213714] hover:bg-white hover:text-[#213714] font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <span>Book a Clinical Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                render={
                  <a
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20skin%20care%20and%20share%20medical%20reports."
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                variant="outline"
                size="lg"
                className="border-[#D9B872]/40 text-white hover:bg-white/10 font-semibold text-sm sm:text-base px-6 py-4 rounded-full"
              >
                <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" />
                <span>WhatsApp Clinical Enquiry</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CONDITIONS COVERED OVERVIEW
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="w-full px-[4%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Scope of Clinical Practice
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-[#66371B]">
              Dermatological Conditions We Manage
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              We focus on thorough physical and diagnostic assessment, identifying root
              Dosha, blood (Rakta), and digestive (Agni) imbalances, and providing
              structured conservative care programs.
            </p>
          </div>

          {/* Quick Navigation Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              {
                title: "Psoriasis Care",
                subtitle: "Kitibha / Ekakushta",
                hash: "#condition-psoriasis",
                desc: "Scaling, redness & plaque remission",
              },
              {
                title: "Eczema Management",
                subtitle: "Vicharchika / Dermatitis",
                hash: "#condition-eczema",
                desc: "Soothing itching & barrier repair",
              },
              {
                title: "Vitiligo Support",
                subtitle: "Shvitra / Leukoderma",
                hash: "#condition-vitiligo",
                desc: "Metabolic Agni & repigmentation",
              },
              {
                title: "Scalp Dermatitis",
                subtitle: "Darunaka / Scaling",
                hash: "#condition-scalp",
                desc: "Takradhara & anti-fungal care",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.hash}
                className="group p-5 rounded-2xl bg-white border border-[#DBCFA8]/60 hover:border-[#517B32] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833D] block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-[#66371B] group-hover:text-[#517B32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#81754B] font-light pt-1">
                    {item.desc}
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#517B32] inline-flex items-center gap-1 pt-4 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>

          {/* =========================================================================
              SECTION 3: CONDITION-BY-CONDITION CLINICAL DEEP DIVES
              ========================================================================= */}
          <div className="space-y-12">
            {/* 1. PSORIASIS */}
            <div
              id="condition-psoriasis"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Autoimmune Scaly Dermatosis • Non-Contagious
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Psoriasis (Kitibha / Ekakushta)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Plaque Remission &amp; Takradhara</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Psoriasis is a chronic, immune-mediated dermatosis that accelerates
                    the life cycle of skin cells, causing them to build up rapidly on the
                    surface. This results in thick, red, well-demarcated plaques topped
                    with silvery-white scales. It is strictly non-contagious and
                    frequently triggered by psychological stress, cold dry weather, skin
                    injuries (Koebner phenomenon), or dietary irregularities.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Silvery-Scaled Plaques:</strong> Raised, inflamed lesions
                        commonly localized to the scalp, elbows, knees, and lower back.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Pruritus &amp; Burning (*Daha*):</strong> Persistent itching
                        and painful skin cracking that can bleed when scales are shed.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Nail Changes &amp; Joint Stiffness:</strong> Pitting,
                        discoloration, or concurrent joint aching (psoriatic arthritis).
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    In Ayurveda, Psoriasis is understood as a dual Vata-Kapha vitiation
                    with underlying Pitta heat affecting the *Rakta* (blood) and *Mamsa*
                    (muscle) tissues. Management combines systemic detoxification with
                    intensive topical barrier soothing:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Takradhara:</strong> Continuous pouring of medicated
                        buttermilk over the forehead or whole body to cool Pitta heat,
                        ease burning, and reduce mental stress triggers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Kashaya Dhara &amp; Shodana:</strong> Washing lesions with
                        medicated herbal decoctions (Triphala/Nimbadi) followed by gentle
                        Virechana to purify the blood.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Danthapala Tailam &amp; Lepam:</strong> Classical
                        *Wrightia tinctoria* oil applications and herbal pastes to soften
                        scaling and support skin repair.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/psoriasis"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Psoriasis Treatment Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. ECZEMA (ATOPIC DERMATITIS) */}
            <div
              id="condition-eczema"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Chronic Pruritic Dermatitis • Non-Contagious
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Eczema / Atopic Dermatitis (Vicharchika)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Barrier Restoration &amp; Anti-Itch</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Eczema is a persistent inflammatory skin condition marked by
                    epidermal barrier dysfunction, moisture depletion, and heightened
                    immune reactivity. It manifests as cycles of acute flare-ups with
                    oozing and redness, alternating with chronic dry, thickened, and
                    cracked skin (*lichenification*). It is entirely non-contagious.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Intense, Uncontrollable Itching (*Kandu*):</strong> Severe
                        pruritus that worsens at night and triggers the harmful itch-scratch cycle.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Redness, Oozing &amp; Crusting:</strong> Wet eczema lesions
                        exudate serous fluid that dries into sensitive crusts.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Dry, Leathery Lichenified Skin:</strong> Chronic rubbing
                        causes skin over the flexural folds to become thickened and hyperpigmented.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    In Ayurveda, Vicharchika involves Pitta-Kapha vitiation coupled
                    with toxic *Ama* in the blood. Treatment cools systemic heat, purges
                    circulating irritants, and re-establishes natural dermal hydration:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Pitta-Pacifying Blood Purifiers:</strong> Classical herbal
                        decoctions featuring Manjistha, Sariva, and Khadira to cleanse
                        Rakta Dhatu.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Medicated Lepams:</strong> Soothing cooling pastes prepared
                        with Chandana and Yashtimadhu to relieve burning and oozing.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Barrier Restoring Oils:</strong> Gentle application of
                        Nalpamaradi or Mahatiktaka Ghrita to heal cracked fissures and
                        restore moisture without occlusion.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/eczema"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Eczema Treatment Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. VITILIGO (SHVITRA) */}
            <div
              id="condition-vitiligo"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Autoimmune Depigmentation • Non-Contagious
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Vitiligo (Shvitra / Kilasa)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Metabolic Balance &amp; Repigmentation</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Vitiligo is a non-contagious autoimmune disorder in which the body&apos;s
                    immune system selectively targets and destroys melanocytes—the cells
                    responsible for skin pigmentation. This leads to well-demarcated,
                    milky-white macules across various areas of the body, often symmetrical.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Depigmented White Patches:</strong> Distinct pale or chalky
                        white skin areas commonly on the face, hands, feet, and lips.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Leukotrichia:</strong> Premature whitening or loss of pigment
                        in the eyelashes, eyebrows, beard, or scalp hair within affected patches.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Non-Painful, Non-Pruritic:</strong> While physically painless,
                        the visible changes often cause profound social and emotional distress.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    In classical Ayurveda, Shvitra is linked to deep metabolic toxins
                    impairing *Bhrajaka Pitta* (the sub-dosha governing skin complexion
                    and pigmentation) alongside liver and blood stagnation. Management
                    focuses on digestive fire correction and gentle melanocyte stimulation:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Deepana &amp; Yakrit Shodana:</strong> Restoring liver
                        metabolism and kindling digestive Agni to halt the systemic
                        accumulation of immune-disrupting endotoxins.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Bakuchi Applications &amp; Photostimulation:</strong> Classical
                        *Psoralea corylifolia* herbal formulations paired with supervised
                        brief exposure to early morning sunlight to encourage natural repigmentation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Immuno-Modulatory Rasayanas:</strong> Administering nourishing
                        classical tonics to stabilize the autoimmune response and preserve melanocytes.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/vitiligo"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Vitiligo Treatment Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. CHRONIC SCALP DERMATITIS & SCALING */}
            <div
              id="condition-scalp"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Seborrheic &amp; Scalp Scaling Imbalance
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Chronic Scalp Dermatitis &amp; Scaling (Darunaka)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Shiro-Dhara &amp; Scalp Hygiene</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Chronic Scalp Dermatitis (Darunaka) is characterized by persistent
                    flaking, scalp erythema, stubborn itchiness, and follicular
                    irritation. Arising from sebaceous dysregulation, fungal overgrowth,
                    and Pitta-Kapha imbalance, it often leads to hair follicle
                    weakening if left unaddressed.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Persistent Scalp Flaking:</strong> Dry white or oily
                        yellowish scales adhering to hair shafts and shedding onto shoulders.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Intense Scalp Pruritus &amp; Soreness:</strong> Continuous
                        irritation and tenderness provoked by heat, sweat, or harsh chemical shampoos.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Follicular Weakening:</strong> Increased hair shedding
                        secondary to chronic perifollicular scalp inflammation.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    Management normalizes scalp sebum, eliminates micro-organisms, and
                    cools local Pitta inflammation through targeted cranial therapies:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Shiro-Takradhara:</strong> Continuous pouring of cooling
                        medicated buttermilk over the scalp to soothe burning, eliminate
                        dandruff scales, and deeply relax the nervous system.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Herbal Scalp Washes:</strong> Gentle cleansing with Triphala,
                        Nimba, and Shikakai decoctions to balance microbial flora without
                        stripping natural lipids.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Medicated Scalp Oils:</strong> Applying specialized herbal
                        oils (like Durvadi and Kayyonnyadi tailam) to nourish hair roots
                        and protect against dryness.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/dandruff"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Scalp Care Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: AYURVEDIC TREATMENT METHODOLOGY
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Clinical Protocol
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-[#66371B]">
              Our Physician-Directed Approach
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              Every skin condition demands thorough internal assessment. We diagnose
              metabolic endotoxins and blood impurities to design a safe, individualized
              restorative roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Dermatological & Metabolic Assessment",
                desc: "Thorough clinical examination of skin lesions, plaque thickness, Koebner phenomenon, and review of prior topical corticosteroid or immunosuppressive therapy history.",
              },
              {
                step: "02",
                title: "Dosha & Rakta Dhatu Staging",
                desc: "Assessing whether the condition is dominated by dry Vata scaling, burning Pitta inflammation, or weeping Kapha discharge, and staging the depth of blood tissue toxicity.",
              },
              {
                step: "03",
                title: "Internal Blood-Purifying Medicines",
                desc: "Administering classical herbal decoctions (Kashayams), Guggulu preparations, and medicated ghees (Mahatiktaka Ghrita) to cool systemic heat and eliminate Ama.",
              },
              {
                step: "04",
                title: "Specialized Panchakarma Therapies",
                desc: "Administering physician-directed treatments including Takradhara, Kashaya Dhara, Virechana, and customized herbal Lepams under experienced therapist oversight.",
              },
              {
                step: "05",
                title: "Pathya & Incompatible Food Elimination",
                desc: "Strict dietary adjustments eliminating Viruddha Ahara (incompatible food combinations like fish with milk), sour, fermented, and spicy items that trigger dermal flares.",
              },
              {
                step: "06",
                title: "Post-Discharge Remission Maintenance",
                desc: "Structured home-based medication regimens, skin barrier maintenance oils, stress-reduction techniques, and periodic follow-up reviews to prevent seasonal relapses.",
              },
            ].map((method, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF7] rounded-3xl p-8 border border-[#DBCFA8]/60 space-y-3 relative hover:border-[#517B32] transition-colors shadow-xs"
              >
                <span className="text-2xl font-heading font-bold text-[#D9B872] block">
                  {method.step}
                </span>
                <h3 className="font-heading font-semibold text-xl text-[#66371B]">
                  {method.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed font-light">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLASSICAL DERMATOLOGICAL THERAPIES
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Authentic Kerala Therapies
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-[#66371B]">
              Classical Therapies for Skin Care
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              Administered only after individual physician examination to ensure herbal
              ingredients, therapy temperatures, and techniques match your skin&apos;s exact clinical stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Takradhara (Medicated Buttermilk Stream)",
                desc: "A continuous, gentle stream of specially prepared buttermilk processed with Musta and Amalaki poured rhythmically over the forehead or entire body. Proved highly effective for cooling Pitta heat, relieving burning sensations, and calming nervous stress.",
                indications: "Psoriasis, Scalp Dermatitis, Severe Pruritus, Stress-Induced Flares",
              },
              {
                name: "Kashaya Dhara (Herbal Decoction Stream)",
                desc: "Pouring warm or cooling herbal decoctions (Triphala, Nimbadi, Khadiradi) across affected skin surfaces. Cleanses lesions, purges superficial toxins, reduces oozing, and accelerates natural dermal healing.",
                indications: "Eczema, Weeping Lesions, Active Psoriatic Plaques",
              },
              {
                name: "Virechana (Therapeutic Purgation)",
                desc: "A classical Panchakarma detoxification method that safely flushes morbid Pitta and metabolic endotoxins from the liver, gallbladder, and blood (Rakta Dhatu), directly addressing the root cause of chronic dermatoses.",
                indications: "Chronic Psoriasis, Generalized Eczema, Systemic Urticaria",
              },
              {
                name: "Herbal Lepanam (Medicated Pastes)",
                desc: "Targeted topical application of customized herbal pastes prepared with Khadira, Nimba, Haridra, and Chandana. Soothes acute redness, reduces local swelling, and promotes smooth skin texture.",
                indications: "Inflamed Plaques, Acute Eczematous Flare-Ups, Localized Lesions",
              },
              {
                name: "Danthapala & Nalpamaradi Abhyangam",
                desc: "Gentle therapeutic application of classical Wrightia tinctoria (Danthapala) oil or Ficus-bark (Nalpamaradi) oil to deeply moisturize dry scaling skin, rebuild the lipid barrier, and restore softness.",
                indications: "Dry Plaque Psoriasis, Lichenified Eczema, Severe Skin Xerosis",
              },
              {
                name: "Mukha & Shiro Lepam (Specialized Pastes)",
                desc: "Gentle, non-irritating facial and scalp herbal applications designed specifically for delicate skin folds, facial redness, and stubborn scalp flaking.",
                indications: "Facial Dermatitis, Scalp Seborrhea, Perioral Irritation",
              },
            ].map((therapy, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-[#DBCFA8]/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Panchakarma Procedure</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#66371B]">
                    {therapy.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed font-light">
                    {therapy.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#DBCFA8]/40 mt-4">
                  <span className="text-[11px] font-semibold text-[#81754B] block mb-1">
                    Clinical Application:
                  </span>
                  <p className="text-xs text-[#517B32] font-medium leading-relaxed">
                    {therapy.indications}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Patient Guidance &amp; Clarifications
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-[#66371B]">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#81754B] font-light">
              Clear, transparent answers regarding our skin care protocols, treatment
              expectations, and hospital admissions.
            </p>
          </div>

          <Accordion className="w-full space-y-4">
            {SKIN_FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-[#FDFBF7] border border-[#DBCFA8]/60 rounded-2xl px-6 py-2 shadow-xs"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-base sm:text-lg text-[#66371B] hover:text-[#517B32] transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed font-light pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CONSULTATION & BOOKING CTA BLOCK
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-5xl mx-auto">
          <div className="bg-[#402816] rounded-[3.5rem] p-8 sm:p-14 md:p-20 text-center text-[#F7F1E1] shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#517B32]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-3xl mx-auto relative z-10">
              <span className="bg-[#D9B872] text-[#2B1A0E] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
                Start Your Clinical Consultation
              </span>
              <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Discuss Your Skin Condition With Our Physicians
              </h2>
              <p className="text-base sm:text-lg text-[#E3D8C1] font-light leading-relaxed max-w-2xl mx-auto">
                Every skin journey is deeply personal. Share your medical history,
                photographs, and current symptoms with our senior physicians to plan a safe,
                dignified, and personalized Ayurvedic care program.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 pt-2">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="w-full sm:w-auto bg-[#D9B872] text-[#213714] hover:bg-white hover:text-[#213714] font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <span>Book Hospital Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                render={
                  <a
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20skin%20care."
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#D9B872]/40 text-white hover:bg-white/10 font-semibold text-sm sm:text-base px-7 py-4 rounded-full"
              >
                <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" />
                <span>WhatsApp: +91 98469 92789</span>
              </Button>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E3D8C1]/70 relative z-10">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D9B872]" />
                <span>Vayala P.O., Kottayam, Kerala 686587</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D9B872]" />
                <span>GMP Certified In-House Medicine Unit</span>
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-[#D9B872]" />
                <span>Inpatient &amp; Outpatient Facility</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PATIENT SAFETY & URGENT EVALUATION WARNING (ABOVE FOOTER)
          ========================================================================= */}
      <section
        id="patient-safety"
        className="py-16 md:py-24 bg-white border-t border-[#DBCFA8]/30"
        aria-labelledby="emergency-warning-heading"
      >
        <div className="w-full px-[4%] max-w-5xl mx-auto">
          {/* Large rounded rectangular safety panel with pale blush/pink background and red/pink border */}
          <div className="bg-[#FFF5F5] border border-[#FCA5A5] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            {/* Header: Circular pale pink container with Shield-alert icon, small label, and heading */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-6">
              <div
                className="w-14 h-14 rounded-full bg-[#FEE2E2] border border-[#FECACA] flex items-center justify-center shrink-0 text-[#DC2626] shadow-xs"
                aria-hidden="true"
              >
                <ShieldAlert className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B91C1C] block">
                  PATIENT SAFETY FIRST
                </span>
                <h2
                  id="emergency-warning-heading"
                  className="font-heading font-normal text-2xl sm:text-3xl md:text-4xl text-[#7F1D1D] leading-tight"
                >
                  Urgent Warning Signs &amp; Immediate Medical Evaluation
                </h2>
              </div>
            </div>

            {/* Clear, readable emergency warning paragraph with primary warning */}
            <div className="text-sm sm:text-base text-[#7F1D1D] leading-relaxed space-y-3 font-light">
              <p>
                <strong className="font-bold text-[#991B1B]">
                  Urgent Medical Assessment for Red-Flag Dermatological &amp; Allergic Symptoms:
                </strong>{" "}
                While chronic skin conditions are routinely managed conservatively,
                acute complications demand immediate tertiary emergency evaluation. If you
                experience sudden swelling of the face, lips, tongue, or throat
                (angioedema), difficulty breathing, high fever accompanied by rapidly
                spreading skin redness, extreme warmth, and severe pain (cellulitis or
                erythroderma), extensive skin blistering, or signs of acute systemic infection,
                seek{" "}
                <strong>
                  immediate emergency medical care at the nearest hospital emergency
                  department
                </strong>
                .
              </p>
            </div>

            {/* Two responsive bordered warning cards: vertical on mobile, side-by-side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {/* Warning Card 1 */}
              <div className="bg-white/95 rounded-2xl p-6 border border-[#FCA5A5]/80 shadow-xs flex flex-col justify-start space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shrink-0 border border-[#FECACA]/60">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#991B1B]">
                    Do Not Delay Urgent Evaluation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-light">
                  Acute spreading bacterial infections, facial swelling, breathing
                  distress, or sudden generalized erythrodermic flares require emergency
                  medical assessment; Ayurvedic care never replaces emergency triage.
                </p>
              </div>

              {/* Warning Card 2 */}
              <div className="bg-white/95 rounded-2xl p-6 border border-[#FCA5A5]/80 shadow-xs flex flex-col justify-start space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shrink-0 border border-[#FECACA]/60">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#991B1B]">
                    Do Not Discontinue Medications
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-light">
                  Never abruptly stop or alter your prescribed conventional medications,
                  oral/topical corticosteroids, immunosuppressants, or biologics without
                  direct guidance from your treating dermatologist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
