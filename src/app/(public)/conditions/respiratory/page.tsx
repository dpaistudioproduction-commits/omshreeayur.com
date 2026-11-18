import { Metadata } from "next";
import Link from "next/link";
import {
  Wind,
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
  Sparkles,
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
const PAGE_URL = `${SITE_URL}/conditions/respiratory`;
const TITLE = "Respiratory Care, Asthma & COPD Ayurvedic Treatment in Kerala | Omshree Sidha Hospital";
const DESCRIPTION =
  "Specialized Ayurvedic clinical care for Bronchial Asthma, COPD, Chronic Sinusitis, Allergic Rhinitis, and breathing difficulties at Omshree Sidha Hospital, Kerala.";

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
        alt: "Respiratory Care at Omshree Sidha Hospital Kerala",
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
const RESP_FAQS = [
  {
    q: "What respiratory conditions are treated at Omshree Sidha Hospital?",
    a: "Our clinical team provides comprehensive Ayurvedic care and supportive pulmonary rehabilitation for Bronchial Asthma (Tamaka Swasa), Chronic Obstructive Pulmonary Disease (COPD), Chronic Sinusitis (Dushta Pratishyaya), Allergic Rhinitis and frequent sneezing bouts, chronic bronchial congestion, and post-viral lingering coughs. Every program is customized following a detailed personal clinical review and assessment of recent pulmonary function tests (PFT) or chest imaging."
  },
  {
    q: "Can I stop using my inhalers, nebulizers, or oxygen while taking Ayurvedic treatment?",
    a: "No. You must never discontinue or reduce your prescribed conventional medications, rescue inhalers, inhaled corticosteroids, or supplemental oxygen without explicit instructions from your treating pulmonologist. In our clinical practice, Ayurvedic care is provided safely alongside your existing treatments. As your lung function and stamina improve over time, any modification to your conventional prescriptions is made only by your primary medical specialist."
  },
  {
    q: "Can Ayurveda cure chronic asthma or COPD permanently?",
    a: "No. We do not claim a '100% cure' or permanent reversal for chronic asthma or COPD. Both are chronic pulmonary conditions with structural or hyper-reactive components. Our physician-directed Ayurvedic care focuses on realistic, sustainable clinical outcomes: easing chronic breathlessness, liquefying stubborn phlegm, reducing the severity and frequency of seasonal flare-ups, and improving everyday stamina and physical comfort."
  },
  {
    q: "How does the hospital's Kafastha product fit into clinical respiratory care?",
    a: "Kafastha is a proprietary, GMP-manufactured chewable Ayurvedic respiratory formulation developed by Omshree Sidha Pharma. Containing classical bronchodilatory and expectorant herbs such as Pushkaramoola, Vasa, Bharangi, Pippali, Kantakari, and Yashtimadhu, Kafastha is routinely prescribed by our hospital physicians to liquefy thick tenacious mucus, soothe bronchial spasms, and support natural airway clearance alongside our customized Panchakarma therapies."
  },
  {
    q: "What is the role of Nasyam and Dhoomapana in respiratory disorders?",
    a: "Nasyam (nasal administration of medicated lipid extracts) directly cleanses the upper respiratory tract, paranasal sinuses, and supraclavicular channels, draining trapped mucus and reducing allergic mucosal hyper-reactivity. Dhoomapana (inhalation of medicated herbal smoke/vapors) dilates bronchial passages, relieves paroxysmal bronchospasm, and assists in expelling deep-seated Kapha from the airways."
  },
  {
    q: "How long does an inpatient respiratory care program typically take?",
    a: "Inpatient programs for chronic respiratory ailments typically range between 2 to 3 weeks under close physician observation. This intensive phase of physician-directed Panchakarma, chest fomentation, and dietary regulation is followed by a structured home regimen of internal herbal medicines and environmental guidelines for 6 to 12 months to support sustained respiratory health."
  },
  {
    q: "Can out-of-state or international patients consult online before travelling to Kerala?",
    a: "Yes. We strongly encourage out-of-state and international patients to arrange an initial online video consultation. During this review, our senior Ayurvedic physicians assess your medical history, recent Spirometry / PFT reports, current inhaler regimens, and oxygen requirements to advise whether inpatient admission in Vayala, Kottayam, Kerala is appropriate."
  }
];

export default function RespiratoryConditionsPage() {
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
            "name": "Bronchial Asthma",
            "alternateName": "Tamaka Swasa",
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "Ayurvedic Respiratory Care & Panchakarma"
            }
          },
          {
            "@type": "MedicalCondition",
            "name": "Chronic Obstructive Pulmonary Disease",
            "alternateName": "COPD"
          },
          {
            "@type": "MedicalCondition",
            "name": "Chronic Sinusitis",
            "alternateName": "Dushta Pratishyaya"
          },
          {
            "@type": "MedicalCondition",
            "name": "Allergic Rhinitis",
            "alternateName": "Vataja Pratishyaya"
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
            "name": "Respiratory Care",
            "item": PAGE_URL
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        "mainEntity": RESP_FAQS.map((faq) => ({
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
              <li className="text-[#D9B872] font-semibold">Respiratory Care</li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#517B32]/30 border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider text-[#D9B872]">
              <Wind className="w-3.5 h-3.5" />
              <span>Clinical Speciality • Kerala Ayurvedic Pulmonology</span>
            </div>

            <h1 className="font-heading font-normal text-4xl sm:text-5xl md:text-6xl text-[#F7F1E1] leading-[1.15]">
              Respiratory Conditions &amp; Ayurvedic Care
            </h1>

            <p className="text-lg md:text-xl text-[#E3D8C1] font-light leading-relaxed">
              Chronic breathlessness, wheezing, tenacious mucus congestion, and seasonal
              chest flare-ups severely disrupt daily vitality, physical stamina, and
              restful sleep. At Omshree Sidha Hospital, our physician-directed clinical
              protocols combine traditional Kerala Vaidya heritage, specialized
              Panchakarma therapies, and time-tested herbal formulations to clear airway
              obstructions, liquefy stubborn phlegm, and support long-term respiratory
              resilience.
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
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20respiratory%20care%20and%20share%20medical%20reports."
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
              Respiratory Conditions We Manage
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              We focus on thorough physical and diagnostic assessment, identifying root
              Dosha and Agni imbalances, and providing structured conservative care programs.
            </p>
          </div>

          {/* Quick Navigation Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              {
                title: "Bronchial Asthma",
                subtitle: "Tamaka Swasa",
                hash: "#condition-asthma",
                desc: "Airway hyper-reactivity & wheezing care",
              },
              {
                title: "COPD Support",
                subtitle: "Chronic Obstructive Disease",
                hash: "#condition-copd",
                desc: "Mucociliary clearance & lung stamina",
              },
              {
                title: "Chronic Sinusitis",
                subtitle: "Dushta Pratishyaya",
                hash: "#condition-sinusitis",
                desc: "Paranasal drainage & facial ease",
              },
              {
                title: "Allergic Rhinitis",
                subtitle: "Frequent Sneezing & Allergy",
                hash: "#condition-rhinitis",
                desc: "Mucosal barrier desensitization",
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
            {/* 1. BRONCHIAL ASTHMA */}
            <div
              id="condition-asthma"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Airway Hyper-Reactivity
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Bronchial Asthma (Tamaka Swasa)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Bronchial Clearance &amp; Spasm Relief</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Bronchial Asthma is a chronic inflammatory disorder of the
                    airways characterized by variable airflow limitation, bronchial
                    spasm, and episodic wheezing. Triggers such as cold drafts, dust,
                    pollen, emotional stress, or viral infections provoke sudden
                    narrowing of the air passages and excessive mucus secretion.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Nocturnal &amp; Early Morning Cough:</strong> Persistent
                        coughing fits that disrupt sleep and awaken the patient.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Wheezing &amp; Chest Tightness:</strong> Audible high-pitched
                        whistling sounds during exhalation accompanied by thoracic constriction.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Tenacious Mucus Plugs:</strong> Sputum that is difficult
                        to expectorate, temporarily relieving breathing only after clearance.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    In Ayurveda, Tamaka Swasa is classified as a Vata-Kapha disorder
                    originating in the digestive system (*Pittasthana*) and manifesting
                    in the respiratory channels (*Pranavaha Srotas*). Treatment focuses
                    on clearing sticky Kapha obstructions and restoring normal downward
                    movement of Vata (*Vatanulomana*):
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Uro-Basti &amp; Chest Swedana:</strong> Retention of warm
                        medicated herbal oils over the chest followed by gentle steam to
                        relax hypertonic intercostal muscles and ease air hunger.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Dhoomapana &amp; Steam Inhalation:</strong> Medicated herbal
                        inhalations to directly liquefy mucus deposits in the bronchial tree.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Kafastha Granules &amp; Kashayams:</strong> Formulations
                        featuring Pushkaramoola, Vasa, and Bharangi to naturally dilate
                        airways and build long-term mucosal resistance.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/treatments/asthma-treatment"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Asthma Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/products/kafastha"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FDFBF7] text-[#66371B] border border-[#DBCFA8] hover:bg-[#DBCFA8]/30 px-5 py-3 text-xs sm:text-sm font-semibold transition-all"
                    >
                      <span>View Kafastha Respiratory Granules</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CHRONIC OBSTRUCTIVE PULMONARY DISEASE (COPD) */}
            <div
              id="condition-copd"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Progressive Airflow Limitation
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Chronic Obstructive Pulmonary Disease (COPD)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Pulmonary Rehabilitation &amp; Stamina</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    COPD is a progressive, chronic inflammatory lung disease combining
                    chronic bronchitis and emphysematous destruction of alveoli. Poor
                    airflow and structural airway remodeling result in persistent,
                    worsening dyspnea during routine daily activities like walking or dressing.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Exertional Dyspnea:</strong> Shortness of breath that
                        progresses over months and years, limiting physical independence.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Chronic Productive Cough:</strong> Frequent clearing of
                        sputum, particularly pronounced upon waking in the morning.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Respiratory Fatigue:</strong> Reduced chest expansion and
                        general physical weakness resulting from high work of breathing.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Supportive Approach
                  </h4>
                  <p>
                    In Ayurveda, advanced chronic pulmonary obstruction reflects severe
                    Dhatu depletion (*Kshaya*) coupled with obstructed Vata. Care
                    provides gentle, supportive rehabilitation without aggressive interventions:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Gentle Mucolytic Therapy:</strong> Administering warm
                        herbal teas and classical decoctions to facilitate effortless
                        mucociliary expectoration.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Pranavaha Rasayana:</strong> Nourishing herbal tonics
                        (including Kantakari Avaleha and Pippali Rasayana) to support
                        diaphragmatic muscle tone and physical stamina.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Breathing &amp; Lifestyle Alignment:</strong> Supervised
                        pranayama breathing techniques to improve exhalation efficiency
                        alongside strict avoidance of cold, fermented, or mucus-inducing foods.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/copd-chronic-obstructive-pulmonary-disease"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore COPD Supportive Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. CHRONIC SINUSITIS */}
            <div
              id="condition-sinusitis"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Paranasal Mucosal Congestion
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Chronic Sinusitis (Dushta Pratishyaya)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Sinus Drainage &amp; Facial Ease</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Chronic Sinusitis is persistent inflammation of the mucosal lining
                    of the paranasal sinuses lasting beyond 12 weeks. When the ostia
                    become obstructed by swollen tissue or viscous secretions, stagnant
                    mucus creates a fertile ground for recurrent bacterial flare-ups and
                    facial heaviness.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Facial Pressure &amp; Fullness:</strong> Throbbing discomfort
                        over the forehead, cheeks, and between the eyes that worsens upon
                        bending forward.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Persistent Post-Nasal Drip:</strong> Mucus constantly
                        draining down the posterior pharynx, provoking chronic throat
                        irritation and coughing.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Hyposmia &amp; Nasal Blockage:</strong> Diminished sense
                        of smell, mouth breathing, and disturbed sleep quality.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    In Ayurveda, Dushta Pratishyaya is managed through specialized
                    *Urdhwajatrugata* (head and neck) purification techniques designed
                    to drain stagnant pockets and soothe inflamed mucous membranes:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Therapeutic Nasyam:</strong> Administering medicated nasal
                        drops (such as Anu Tailam or specialized hospital formulations)
                        to stimulate natural sinus drainage and evacuate trapped mucus.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Bashpa Sweda (Herbal Steam):</strong> Facial fomentation
                        with medicated leaves and essential oils to open the sinus ostia.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Shirolepam:</strong> Applying soothing anti-inflammatory
                        herbal pastes (like Rasnadi Choorna) over the forehead to relieve
                        refractory frontal headaches.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/sinusitis-treatment"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Sinusitis Treatment Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. ALLERGIC RHINITIS & FREQUENT SNEEZING */}
            <div
              id="condition-rhinitis"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Mucosal Hyper-Reactivity
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Allergic Rhinitis &amp; Frequent Sneezing
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Constitutional Immunity &amp; Allergy Care</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Allergic Rhinitis represents an exaggerated immune hypersensitivity
                    reaction of the nasal mucosa to airborne allergens like dust, pollen,
                    animal dander, or abrupt temperature fluctuations. If left unaddressed,
                    chronic allergic inflammation can cascade into bronchial asthma.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Paroxysmal Sneezing Bouts:</strong> Rapid, continuous
                        bouts of 10–20 sneezes, especially upon waking or contacting dust.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Profuse Rhinorrhea:</strong> Watery nasal discharge
                        accompanied by an itchy palate, eyes, and nasal passages.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Eosinophilic Elevation:</strong> Systemic allergic marker
                        elevation reflecting hyper-reactive immune responses.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    Classical texts term this *Vataja Pratishyaya*, signifying impaired
                    mucosal resistance (*Ojas*) and hypersensitive Prana Vata. Care
                    provides constitutional desensitization rather than mere antihistamine suppression:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Pratimarsa Nasyam:</strong> Daily gentle nasal instillation
                        of lipid extracts to form a protective lipid barrier across the
                        nasal mucosa against environmental allergens.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Haridra Khanda &amp; Rasayanas:</strong> Classical turmeric
                        and piperine formulations to naturally stabilize mast cells and
                        modulate immune responses.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Agni Deepana:</strong> Optimizing gut digestion to prevent
                        the continuous generation of allergic endotoxins (*Ama*).
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/sneezing-treatment"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Allergy &amp; Sneezing Program</span>
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
              Every respiratory case requires rigorous diagnostic staging. We assess
              bronchial obstruction alongside digestive Agni to formulate a safe,
              individualized conservative roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Pulmonary & Allergen Evaluation",
                desc: "Detailed medical history review, auscultation of breath sounds, evaluation of recent Spirometry (PFT) or chest radiographs, and identification of environmental allergy triggers.",
              },
              {
                step: "02",
                title: "Dosha & Ama Staging",
                desc: "Distinguishing between acute Kapha-Ama mucosal congestion (requiring expectoration and sinus drainage) and chronic Vata tissue dryness (requiring oleation and tissue nourishment).",
              },
              {
                step: "03",
                title: "Classical Internal Decoctions",
                desc: "Prescribing individualized herbal decoctions (Kashayams), Asavams, and Kafastha granules formulated with Vasa, Pushkaramoola, and Pippali to clear bronchospasm and liquefy phlegm.",
              },
              {
                step: "04",
                title: "Specialized Panchakarma Therapies",
                desc: "Administering physician-directed therapies including Nasyam, Dhoomapana, Uro-Basti, and localized Swedana under constant medical oversight.",
              },
              {
                step: "05",
                title: "Pathya & Environmental Controls",
                desc: "Strict dietary adjustments avoiding cold, soured, fermented, and mucus-generating foods, paired with guidance on ambient air quality and allergen avoidance.",
              },
              {
                step: "06",
                title: "Post-Discharge Rehabilitation",
                desc: "Structured home-based medication schedules, periodic tele-reviews, and gentle pranayama breathing exercises to sustain long-term pulmonary health.",
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
          SECTION 5: CLASSICAL RESPIRATORY THERAPIES
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Authentic Kerala Therapies
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-[#66371B]">
              Classical Therapies for Respiratory Care
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              Administered only after individual physician evaluation to ensure therapy
              temperatures, herbal oils, and procedures match your specific respiratory staging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Therapeutic Nasyam",
                desc: "Nasal administration of medicated lipid extracts and herbal oils. Directly purges stagnant mucus from paranasal sinuses, relieves frontal congestion, and reduces allergic mucosal hypersensitivity.",
                indications: "Chronic Sinusitis, Allergic Rhinitis, Frequent Sneezing",
              },
              {
                name: "Dhoomapana (Herbal Inhalation)",
                desc: "Inhalation of warm medicinal herbal fumes prepared from anti-spasmodic herbs like Haridra and Tulsi. Naturally dilates narrowed air passages and helps clear tenacious bronchial secretions.",
                indications: "Bronchial Asthma, Productive Cough, Chest Congestion",
              },
              {
                name: "Uro-Basti (Thoracic Oil Pool)",
                desc: "Warm medicated herbal oil is retained within a flour ring over the sternum/thoracic region for 30–45 minutes, soothing intercostal muscle spasms, relieving chest tightness, and nourishing lung tissues.",
                indications: "Chronic Asthma, Thoracic Tightness, Respiratory Fatigue",
              },
              {
                name: "Swedanam (Medicated Herbal Steam)",
                desc: "Localized steam fomentation over the face, neck, and chest infused with aromatic respiratory leaves. Helps open airway micro-channels and facilitates the effortless expectoration of phlegm.",
                indications: "Sinus Blockages, Wheezing, Upper Respiratory Congestion",
              },
              {
                name: "Kafastha Chewable Granules",
                desc: "Omshree's proprietary GMP-certified formulation combining Pushkaramoola, Vasa, Bharangi, Pippali, and Yashtimadhu. Acts as a natural broncho-relaxant and expectorant for daily airway comfort.",
                indications: "Bronchial Spasms, Stubborn Phlegm, Nocturnal Cough",
              },
              {
                name: "Chest Abhyangam & Pichu",
                desc: "Gentle rhythmic chest and back massage using warming herbal oils like Karpooradi tailam, followed by warm cotton compresses to improve chest wall compliance and ease breathing.",
                indications: "Intercostal Muscle Tightness, Shallow Breathing, Dyspnea",
              },
            ].map((therapy, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-[#DBCFA8]/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ayurvedic Procedure</span>
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
              Clear, transparent answers regarding our respiratory consultation, treatment
              expectations, and hospital admissions.
            </p>
          </div>

          <Accordion className="w-full space-y-4">
            {RESP_FAQS.map((faq, idx) => (
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
                Discuss Your Respiratory Case With Our Physicians
              </h2>
              <p className="text-base sm:text-lg text-[#E3D8C1] font-light leading-relaxed max-w-2xl mx-auto">
                Every respiratory journey is unique. Share your medical history, imaging
                reports, and current breathing symptoms with our senior physicians to
                plan a safe, individualized Ayurvedic care program.
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
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20respiratory%20care."
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
          SECTION 8: PATIENT SAFETY & EMERGENCY EVALUATION WARNING (ABOVE FOOTER)
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
                  Emergency Warning Signs &amp; Immediate Medical Evaluation
                </h2>
              </div>
            </div>

            {/* Clear, readable emergency warning paragraph with primary warning */}
            <div className="text-sm sm:text-base text-[#7F1D1D] leading-relaxed space-y-3 font-light">
              <p>
                <strong className="font-bold text-[#991B1B]">
                  Acute Asthma Attacks &amp; Severe COPD Exacerbations are Medical Emergencies:
                </strong>{" "}
                Severe or rapidly worsening breathlessness, blue or grey discoloration
                of the lips or face (cyanosis), confusion, severe chest pain, or an
                inability to speak full sentences due to air hunger require{" "}
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
                    Do Not Delay Emergency Care
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-light">
                  Ayurvedic consultation must never replace or delay urgent emergency
                  intervention, nebulization, or supplemental oxygen during an acute
                  asthma attack or severe COPD exacerbation.
                </p>
              </div>

              {/* Warning Card 2 */}
              <div className="bg-white/95 rounded-2xl p-6 border border-[#FCA5A5]/80 shadow-xs flex flex-col justify-start space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shrink-0 border border-[#FECACA]/60">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#991B1B]">
                    Do Not Stop Inhalers or Medications
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-light">
                  Never stop, reduce, or alter your prescribed inhalers, bronchodilators,
                  corticosteroids, or oxygen therapy without direction from your treating
                  physician or pulmonologist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
