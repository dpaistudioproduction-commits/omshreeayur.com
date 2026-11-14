import { Metadata } from "next";
import Link from "next/link";
import {
  Move,
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
  Sparkles
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
const PAGE_URL = `${SITE_URL}/conditions/musculoskeletal`;
const TITLE = "Musculoskeletal Care, Joint & Spine Treatment in Kerala | Omshree Sidha Hospital";
const DESCRIPTION =
  "Specialized Ayurvedic clinical care for Osteoarthritis, Rheumatoid Arthritis, Cervical and Lumbar Spondylosis, Sciatica, and joint mobility at Omshree Sidha Hospital, Kerala.";

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
        alt: "Musculoskeletal Care at Omshree Sidha Hospital Kerala",
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
const MSK_FAQS = [
  {
    q: "What musculoskeletal and joint conditions are treated at Omshree Sidha Hospital?",
    a: "Our clinical team provides comprehensive Ayurvedic care and rehabilitation for knee and hip osteoarthritis, rheumatoid arthritis (Amavata), cervical and lumbar spondylosis, intervertebral disc prolapse (IVDP) and sciatica, ankylosing spondylitis, frozen shoulder, gouty arthritis, and general age-related joint stiffness. Every care program is customized following a detailed personal consultation and clinical review of recent imaging reports."
  },
  {
    q: "Can Ayurvedic treatment help me avoid knee replacement or spinal surgery?",
    a: "Many patients explore conservative Ayurvedic care for mild, moderate, or advanced degenerative joint and disc issues to alleviate chronic pain, regain functional range of motion, and reduce dependence on strong analgesics. However, surgical necessity is assessed on an individual basis; our physicians conduct an honest, objective clinical assessment of scan reports and physical stability before recommending conservative therapy."
  },
  {
    q: "What is the primary difference between osteoarthritis and rheumatoid arthritis in Ayurveda?",
    a: "In Ayurveda, Osteoarthritis (Sandhivata) is primarily a degenerative condition caused by aggravated Vata leading to tissue depletion (Dhatukshaya), loss of cartilage lubrication, and friction. Rheumatoid Arthritis (Amavata) is a systemic inflammatory condition where impaired digestive fire (Agni) produces metabolic endotoxins (Ama), which circulate and lodge in the joints, causing severe morning stiffness and inflammatory swelling. Their treatment strategies differ significantly."
  },
  {
    q: "Should I stop taking my prescribed painkillers, DMARDs, or steroids?",
    a: "No. You should never abruptly stop or alter prescribed medications, including conventional analgesics, anti-inflammatories, DMARDs (like methotrexate), or corticosteroids, without the explicit guidance of your treating physician or rheumatologist. In our hospital practice, Ayurvedic therapies are coordinated safely alongside conventional regimens, with gradual tapering considered only under physician supervision as symptoms stabilize."
  },
  {
    q: "How long does an Ayurvedic joint and spine treatment program typically take?",
    a: "Inpatient programs for chronic joint and spine conditions generally range between 2 to 4 weeks depending on the severity of degeneration, chronicity, and the patient's age and mobility. This intensive phase of physician-supervised Panchakarma and physical therapy is typically followed by a home regimen of internal herbal medicines and guided joint exercises for 6 to 12 months."
  },
  {
    q: "Can out-of-state or international patients consult before travelling to Kerala?",
    a: "Yes. We strongly encourage out-of-state and international patients to arrange an initial online video consultation. During this review, our senior Ayurvedic physicians assess your medical history, recent X-ray or MRI scan reports, current prescriptions, and mobility status to advise whether inpatient admission in Vayala, Kottayam, Kerala is appropriate."
  },
  {
    q: "What classical therapies are used in musculoskeletal rehabilitation?",
    a: "Depending on your specific condition and tissue vitality, therapies may include Elakizhi (warm medicated leaf bolus fomentation), Njavarakizhi (Shashtika Shali Pinda Sweda for tissue nourishment), Pizhichil (continuous warm herbal oil bath), Kati Basti and Greeva Basti (localized spinal oil pooling), Janu Basti (knee joint oil pooling), Lepanam (herbal paste application), and therapeutic Abhyangam."
  }
];

export default function MusculoskeletalConditionsPage() {
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
            "name": "Osteoarthritis",
            "alternateName": "Sandhivata",
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "Ayurvedic Joint Care & Panchakarma"
            }
          },
          {
            "@type": "MedicalCondition",
            "name": "Rheumatoid Arthritis",
            "alternateName": "Amavata"
          },
          {
            "@type": "MedicalCondition",
            "name": "Cervical & Lumbar Spondylosis",
            "alternateName": "Greeva & Kati Spondylosis"
          },
          {
            "@type": "MedicalCondition",
            "name": "Sciatica",
            "alternateName": "Gridhrasi"
          },
          {
            "@type": "MedicalCondition",
            "name": "Ankylosing Spondylitis",
            "alternateName": "Axial Spondyloarthritis"
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
            "name": "Musculoskeletal Care",
            "item": PAGE_URL
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        "mainEntity": MSK_FAQS.map((faq) => ({
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
              <li className="text-[#D9B872] font-semibold">Musculoskeletal Care</li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#517B32]/30 border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider text-[#D9B872]">
              <Move className="w-3.5 h-3.5" />
              <span>Clinical Speciality • Kerala Ayurvedic Orthopedics</span>
            </div>

            <h1 className="font-heading font-normal text-4xl sm:text-5xl md:text-6xl text-[#F7F1E1] leading-[1.15]">
              Musculoskeletal Conditions &amp; Ayurvedic Care
            </h1>

            <p className="text-lg md:text-xl text-[#E3D8C1] font-light leading-relaxed">
              Chronic joint pain, spinal stiffness, and cartilage wear severely restrict
              daily mobility, independence, and overall quality of life. At Omshree
              Sidha Hospital, our physician-directed clinical protocols combine
              authentic Kerala Vaidya heritage, specialized Panchakarma therapies, and
              targeted herbal formulations to manage inflammation, lubricate degenerated
              joints, and restore functional movement.
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
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20joint%20or%20spine%20care%20and%20share%20medical%20reports."
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
              Joint &amp; Spine Conditions We Manage
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              We focus on comprehensive physical examination, root-cause evaluation of
              Dosha and Dhatu impairment, and structured conservative treatment programs.
            </p>
          </div>

          {/* Quick Navigation Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {[
              {
                title: "Osteoarthritis",
                subtitle: "Sandhivata / Knee Pain",
                hash: "#condition-osteoarthritis",
                desc: "Cartilage lubrication & joint ease",
              },
              {
                title: "Rheumatoid Arthritis",
                subtitle: "Amavata Care",
                hash: "#condition-rheumatoid",
                desc: "Clearing Ama toxins & stiffness",
              },
              {
                title: "Spondylosis",
                subtitle: "Cervical & Lumbar",
                hash: "#condition-spondylosis",
                desc: "Spinal decompression & disc care",
              },
              {
                title: "Sciatica",
                subtitle: "Gridhrasi & Disc Bulge",
                hash: "#condition-sciatica",
                desc: "Relieving radiating nerve pain",
              },
              {
                title: "Ankylosing Spondylitis",
                subtitle: "Axial Spine Care",
                hash: "#condition-ankylosing",
                desc: "Preserving mobility & posture",
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
            {/* 1. OSTEOARTHRITIS */}
            <div
              id="condition-osteoarthritis"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Degenerative Joint Disorder
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Osteoarthritis (Sandhivata / Knee Pain)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Cartilage Preservation &amp; Mobility</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Osteoarthritis is a chronic degenerative joint condition
                    characterized by the progressive breakdown of articular cartilage,
                    subchondral bone changes, and loss of lubricating synovial fluid.
                    Most frequently affecting the weight-bearing knee joints, hips, and
                    hands, it results in bone-on-bone friction and persistent discomfort.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Deep Joint Aching:</strong> Worsens with prolonged weight
                        bearing, walking, or stair climbing.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Crepitus &amp; Stiffness:</strong> Cracking or grinding
                        sensations on joint flexion and transient morning stiffness
                        lasting under 30 minutes.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Restricted Range of Motion:</strong> Difficulty squatting,
                        bending the knees, or standing up from low seating.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    In Ayurveda, Sandhivata arises from localized Vata accumulation
                    within depleted joint cavities (*Khavaigunya*). Management focuses
                    on deep tissue lubrication (*Snehana*), medicinal fomentation
                    (*Swedana*), and cartilage nourishment (*Brimhana*):
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Janu Basti &amp; Pichu:</strong> Pooling warm medicated
                        herbal oils over the knee joints to nourish articular tissues.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Elakizhi &amp; Njavarakizhi:</strong> Herbal leaf and
                        medicinal rice bolus fomentations to reduce swelling and improve
                        blood supply to periarticular soft tissues.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>External Lepam:</strong> Medicated herbal pastes applied
                        to reduce inflammatory effusions and soothe peri-articular heat.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/osteoarthritis-knee-pain"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Osteoarthritis Treatment Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. RHEUMATOID ARTHRITIS */}
            <div
              id="condition-rheumatoid"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Inflammatory Autoimmune Condition
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Rheumatoid Arthritis (Amavata)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Ama Detoxification &amp; Joint Care</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Rheumatoid Arthritis is a chronic, systemic inflammatory autoimmune
                    disorder where the immune system attacks the synovial membranes
                    lining the joints. Unlike degenerative wear, it is marked by
                    symmetrical inflammation, persistent joint effusion, and profound
                    systemic fatigue.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Prolonged Morning Stiffness:</strong> Joint tightness
                        typically persisting for over 60 minutes after waking.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Symmetrical Joint Swelling:</strong> Commonly begins in
                        the small joints of the hands, wrists, and feet, with warmth and
                        tenderness.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Systemic Malaise:</strong> Low-grade fatigue, appetite
                        loss, and body heaviness reflecting metabolic toxin load.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    In Ayurveda, Amavata represents the unholy union of *Ama* (undigested
                    metabolic toxins) and vitiated *Vata*, which together invade the
                    synovial seats (*Sandhis*). Treatment strictly prioritizes metabolic
                    cleansing before intensive nourishment:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Deepana &amp; Pachana:</strong> Restoring digestive fire
                        (*Agni*) with specific classical herbal decoctions to metabolize
                        circulating Ama.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Valuka Sweda (Dry Fomentation):</strong> Heated sand
                        boluses without oil during acute inflammatory phases to reduce
                        edema without aggravating Kapha-Ama.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Virechana &amp; Matra Basti:</strong> Supervised metabolic
                        purification to clear morbid toxins from gastrointestinal and
                        tissue channels.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/rheumatoid-arthritis"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Rheumatoid Arthritis Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. SPONDYLOSIS (CERVICAL & LUMBAR) */}
            <div
              id="condition-spondylosis"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Spinal Disc &amp; Vertebral Degeneration
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Cervical &amp; Lumbar Spondylosis
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Disc Care &amp; Nerve Decompression</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Spondylosis refers to age-related degenerative changes affecting the
                    intervertebral discs, facet joints, and vertebral bodies of the
                    cervical (neck) or lumbar (lower back) spine. Dehydration of the
                    nucleus pulposus and osteophyte formation can irritate adjacent
                    spinal nerves.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Neck &amp; Shoulder Stiffness (Cervical):</strong> Dull,
                        aching pain radiating toward the shoulder blades, occiput, or
                        arms.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Lower Back Restriction (Lumbar):</strong> Sharp or aching
                        discomfort upon bending, prolonged sitting, or lifting objects.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Paresthesia &amp; Tingling:</strong> Occasional pins-and-needles
                        sensations along the forearm, fingers, buttocks, or calves.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    In Ayurveda, spinal degeneration involves aggravated Vata combined
                    with localized paraspinal spasm (*Stambha*). Our specialized
                    therapies focus on paraspinal muscle release, disc rehydration, and
                    improving neuro-vascular nourishment:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Greeva Basti &amp; Kati Basti:</strong> Specialized warm
                        herbal oil retention reservoirs over the affected vertebrae to
                        soothe paraspinal muscle hypertonicity and nourish discs.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Patra Pinda Swedam (Elakizhi):</strong> Intensive warm
                        leaf bolus fomentation to ease stiff vertebral joints and restore
                        flexibility.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Nasyam:</strong> Medicated nasal administration to reach
                        supraclavicular channels in chronic cervical spondylosis.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/cervical-lumbar-spondylosis"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Spondylosis Care Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. SCIATICA */}
            <div
              id="condition-sciatica"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Radicular Nerve Pain &amp; IVDP
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Sciatica (Gridhrasi &amp; Lumbar Disc Bulge)
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Conservative Radiculopathy Care</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Sciatica describes radiating nerve pain that travels along the path
                    of the sciatic nerve—originating in the lower spine, passing through
                    the buttock, and running down the back of the leg to the foot. It is
                    most commonly provoked by a herniated intervertebral disc (IVDP),
                    bone spurs, or muscular entrapment in the piriformis muscle.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Radiating Unilateral Leg Pain:</strong> Sharp, burning, or
                        electric-like shooting pain extending down one leg.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Numbness &amp; Paresthesia:</strong> Reduced sensation or
                        constant pins-and-needles in the calf, ankle, or toes.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Aggravation with Coughing or Sitting:</strong> Increased
                        pain during seated postures, sneezing, or sudden spinal flexion.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    Classical texts designate sciatica as *Gridhrasi*, an intense Vata
                    disorder affecting the tendons (*Kandara*) and motor pathways of the
                    lower extremities. Treatment provides conservative decompressive care:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Kati Basti with Medicated Oils:</strong> Releasing lumbar
                        and piriformis spasm and calming radicular inflammation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Njavarakizhi &amp; Pizhichil:</strong> Strengthening
                        weakened lower limb muscles and improving blood flow to nerve roots.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Vasthi Therapy:</strong> Medicated herbal enemas (Kashaya
                        and Matra Basti) to fundamentally balance Apana Vata and reduce
                        pelvic-lumbar pressure.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/sciatica"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Sciatica Treatment Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. ANKYLOSING SPONDYLITIS */}
            <div
              id="condition-ankylosing"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Chronic Axial Spondyloarthritis
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Ankylosing Spondylitis &amp; Chronic Joint Care
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <Move className="w-3.5 h-3.5" />
                  <span>Mobility Preservation &amp; Enthesitis Care</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[#5C4A36] text-sm leading-relaxed font-light">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Clinical Overview &amp; Symptoms
                  </h4>
                  <p>
                    Ankylosing Spondylitis (AS) is a chronic inflammatory arthritis that
                    primarily affects the spine and sacroiliac (SI) joints. Over time,
                    persistent inflammation where tendons attach to bone (*entheses*)
                    causes severe rigidity and can lead to structural fusion of the
                    vertebrae.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Inflammatory Back Pain:</strong> Worse during the second
                        half of the night or upon rising, improving with gentle exercise.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Alternating Buttock Pain:</strong> Sacroiliitis provoking
                        stiffness and pain alternating between the left and right sides.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span>
                        <strong>Chest Expansion Limitation:</strong> Involvement of
                        costovertebral joints causing pain upon deep inspiration.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-xl text-[#66371B]">
                    Ayurvedic Management Approach
                  </h4>
                  <p>
                    Ayurvedic care addresses both the inflammatory component (*Pitta-Ama*)
                    and the degenerative, rigidifying Vata-Kapha progression. Management
                    aims to delay structural fusion and optimize flexibility:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Gentle Medicated Steam (Swedanam):</strong> Relieving
                        fibrous stiffness in the spine and thorax without inducing undue strain.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Tikta-Ksheera Basti:</strong> Specialized enemas prepared
                        with bitter herbal decoctions in milk to nourish bone tissue (*Asthi Dhatu*).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D] shrink-0 mt-2" />
                      <span>
                        <strong>Guided Posture &amp; Joint Ergonomics:</strong> Combining
                        internal medicines with therapeutic exercises to preserve lumbar
                        lordosis and thoracic mobility.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <Link
                      href="/treatments/ankylosing-spondylitis"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Ankylosing Spondylitis Details</span>
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
              Every joint and spine case requires precise diagnostic staging. We assess
              structural degeneration alongside metabolic toxins to formulate a safe,
              effective conservative roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Structural & Dosha Evaluation",
                desc: "Comprehensive physical mobility assessment, range of motion examination, and review of recent X-rays, MRI scans, and blood inflammatory markers (ESR, CRP, RA factor).",
              },
              {
                step: "02",
                title: "Ama vs. Niramavastha Staging",
                desc: "Determining whether the condition is in an active inflammatory metabolic toxin phase (requiring dry fomentation and detoxification) or a degenerative dry Vata phase (requiring deep lubrication).",
              },
              {
                step: "03",
                title: "Personalized Internal Formulations",
                desc: "Administering classical herbal decoctions (Kashayams), Guggulu preparations, and medicated ghees formulated to reduce inflammation, kindle Agni, and nourish bone tissue.",
              },
              {
                step: "04",
                title: "Specialized Panchakarma Therapies",
                desc: "Administering physician-directed external treatments including Elakizhi, Njavarakizhi, Kati/Greeva Basti, Janu Basti, and Pizhichil under constant therapist oversight.",
              },
              {
                step: "05",
                title: "Pathya & Joint Ergonomics",
                desc: "Strict dietary alignment to eliminate inflammatory foods, combined with guidance on correct posture, sleeping surfaces, and joint protection mechanics.",
              },
              {
                step: "06",
                title: "Post-Discharge Rehabilitation",
                desc: "Structured home-based medication schedules, periodic tele-reviews, and personalized low-impact strengthening exercises to sustain long-term joint health.",
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
          SECTION 5: CLASSICAL MUSCULOSKELETAL THERAPIES
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Authentic Kerala Therapies
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-[#66371B]">
              Classical Therapies for Joint &amp; Spine Health
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              Administered only after individual physician examination to ensure therapy
              temperatures, oils, and techniques match your specific clinical staging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Elakizhi (Patra Pinda Sweda)",
                desc: "Fomentation using warm cloth boluses filled with medicinal leaves fried in herbal oils. Promotes localized blood circulation, dispels chronic stiffness, and relieves deep paraspinal muscle spasm.",
                indications: "Osteoarthritis, Cervical Spondylosis, Muscular Spasms",
              },
              {
                name: "Njavarakizhi (Shashtika Shali Sweda)",
                desc: "A nourishing thermal therapy where boluses of special medicated rice cooked in milk and herbal decoction are rhythmically applied. Deeply nourishes degenerating articular cartilage and weak muscles.",
                indications: "Advanced Joint Degeneration, Sciatica, Muscle Wasting",
              },
              {
                name: "Kati Basti & Greeva Basti",
                desc: "Warm medicated herbal oils are retained within a herbal dough ring placed over the lumbar or cervical spine for 30–45 minutes, deeply lubricating intervertebral discs and decompressing nerve roots.",
                indications: "Lumbar Disc Herniation, Sciatica, Cervical Spondylosis",
              },
              {
                name: "Pizhichil (Medicated Oil Bath)",
                desc: "A continuous, gentle stream of warm medicated oil is rhythmically poured over the body while synchronized massage is performed. Provides profound systemic lubrication (Snehana) and pacifies Vata.",
                indications: "Generalized Arthritis, Multiple Joint Pain, Chronic Vata Disorders",
              },
              {
                name: "Lepanam (Herbal Paste Application)",
                desc: "Targeted external application of customized warm or cooling herbal pastes over inflamed joints to reduce local heat, alleviate swelling, and soothe acute joint tenderness.",
                indications: "Active Joint Effusion, Gout, Inflammatory Arthritis",
              },
              {
                name: "Janu Basti & Abhyanga",
                desc: "Specialized circular oil pooling directly over the knee joints combined with full-body therapeutic oil massage to enhance synovial fluid circulation and improve walking comfort.",
                indications: "Knee Osteoarthritis, Patellofemoral Pain, Stiffness",
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
              Clear, transparent answers regarding our joint and spine care protocols,
              treatment expectations, and hospital admissions.
            </p>
          </div>

          <Accordion className="w-full space-y-4">
            {MSK_FAQS.map((faq, idx) => (
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
                Discuss Your Joint or Spine Case With Our Physicians
              </h2>
              <p className="text-base sm:text-lg text-[#E3D8C1] font-light leading-relaxed max-w-2xl mx-auto">
                Every musculoskeletal case is unique. Share your medical history, scan
                reports, and current mobility challenges with our senior physicians to
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
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20joint%20or%20spine%20care."
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
                  Urgent Medical Assessment for Red-Flag Spinal &amp; Joint Symptoms:
                </strong>{" "}
                While chronic joint and back pain are commonly managed conservatively,
                certain symptoms demand immediate hospital emergency or orthopedic surgical
                evaluation. If you experience sudden loss of bowel or bladder control
                associated with back pain (Cauda Equina Syndrome), progressive or rapid
                weakness in an arm or leg (such as sudden foot drop), severe joint pain
                accompanied by high fever and chills (Septic Arthritis), sudden inability
                to walk or bear weight, or significant acute physical trauma, seek{" "}
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
                  Ayurvedic consultation must never replace or delay urgent emergency
                  or neurosurgical assessment for red-flag spinal compression or acute
                  joint infections.
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
                  Never abruptly stop or alter prescribed conventional treatments
                  (including DMARDs, corticosteroids, biologic therapies, or prescribed
                  painkillers) without direct guidance from your treating physician.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
