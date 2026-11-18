import { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  AlertCircle
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
const PAGE_URL = `${SITE_URL}/conditions/neurological`;
const TITLE = "Neurological Conditions & Ayurvedic Care in Kerala | Omshree Sidha Hospital";
const DESCRIPTION =
  "Specialized Ayurvedic management and supportive neuro-rehabilitation for Stroke recovery, Paralysis, Motor Neuron Disease (MND), Migraine, and Vertigo at Omshree Sidha Hospital, Kerala.";

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
        alt: "Neurological Care at Omshree Sidha Hospital Kerala",
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
const NEURO_FAQS = [
  {
    q: "What neurological conditions are treated at Omshree Sidha Hospital?",
    a: "Our clinical team provides specialized Ayurvedic care and supportive rehabilitation for post-stroke recovery, hemiplegia and paralysis, Motor Neuron Disease (MND / ALS supportive care), chronic migraine and vascular headaches, vertigo and vestibular imbalances, as well as peripheral nerve concerns. All programs are tailored following an in-depth clinical evaluation."
  },
  {
    q: "Is acute stroke treated with Ayurveda at Omshree Sidha Hospital?",
    a: "No. An acute stroke is a life-threatening medical emergency requiring immediate modern emergency hospital evaluation, emergency neuro-imaging (CT/MRI), and acute thrombolysis or critical intervention. Ayurvedic care at Omshree Sidha Hospital begins during the sub-acute and chronic rehabilitation phase—once the patient is medically stable—to assist in regaining limb strength, reducing spasticity, improving gait, and restoring daily functional independence."
  },
  {
    q: "Can Ayurveda cure or reverse Motor Neuron Disease (MND)?",
    a: "No. We do not claim to reverse or cure Motor Neuron Disease (MND / ALS). MND is a progressive neurodegenerative disorder. Ayurvedic management at Omshree Sidha Hospital is strictly supportive and palliative. Our goal is to nourish depleted neuromuscular tissues (Brimhana), alleviate painful muscle cramps, maintain joint mobility, support swallowing and speech comfort, and improve the patient's daily quality of life."
  },
  {
    q: "Do I need to discontinue my modern neurological medications?",
    a: "No. You should never stop or modify prescribed modern medications—such as blood pressure tablets, antiplatelets, blood thinners, or anticonvulsants—without consulting your treating neurologist or physician. In our hospital practice, Ayurvedic therapies and medicines are coordinated safely alongside conventional regimens, with appropriate time gaps maintained between different doses."
  },
  {
    q: "How long does an Ayurvedic neurological treatment program take?",
    a: "Treatment duration varies strictly based on the specific condition, chronicity, patient age, and physical vitality. Inpatient neuro-rehabilitation for stroke or paralysis typically spans 3 to 6 weeks under direct physician supervision, followed by home-based medications and periodic tele-reviews. Migraine and vertigo programs generally involve 2 to 3 weeks of intensive clinical care. An estimated timeline is provided after initial doctor evaluation."
  },
  {
    q: "Can international or out-of-state patients consult before travelling to Kerala?",
    a: "Yes. We strongly encourage out-of-state and international patients to arrange an initial online video consultation. During this review, our senior Ayurvedic physicians assess your medical history, recent MRI/CT scan reports, current prescriptions, and mobility status to advise whether inpatient admission in Vayala, Kottayam, Kerala is appropriate."
  },
  {
    q: "What classical therapies are used in neurological care?",
    a: "Therapies are prescribed only after individual assessment and may include Shirodhara (rhythmic forehead medicated oil stream), Nasyam (nasal administration of specialized herbal drops), Njavarakizhi (Shashtika Sali Pinda Sweda for muscle nourishment), Pizhichil (continuous warm medicated oil bath), Shirovasti, and therapeutic Abhyangam."
  }
];

export default function NeurologicalConditionsPage() {
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
            "name": "Stroke Rehabilitation",
            "alternateName": "Cerebrovascular Accident (CVA)",
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "Ayurvedic Neuro-rehabilitation"
            }
          },
          {
            "@type": "MedicalCondition",
            "name": "Paralysis",
            "alternateName": "Pakshaghata"
          },
          {
            "@type": "MedicalCondition",
            "name": "Motor Neuron Disease",
            "alternateName": "MND / Amyotrophic Lateral Sclerosis"
          },
          {
            "@type": "MedicalCondition",
            "name": "Migraine",
            "alternateName": "Ardhavabhedaka"
          },
          {
            "@type": "MedicalCondition",
            "name": "Vertigo",
            "alternateName": "Bhrama"
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
            "name": "Neurological Care",
            "item": PAGE_URL
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        "mainEntity": NEURO_FAQS.map((faq) => ({
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
              <li className="text-[#D9B872] font-semibold">Neurological Care</li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#517B32]/30 border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider text-[#D9B872]">
              <Brain className="w-3.5 h-3.5" />
              <span>Clinical Speciality • Kerala Ayurvedic Neurology</span>
            </div>

            <h1 className="font-heading font-normal text-4xl sm:text-5xl md:text-6xl text-[#F7F1E1] leading-[1.15]">
              Neurological Conditions &amp; Ayurvedic Care
            </h1>

            <p className="text-lg md:text-xl text-[#E3D8C1] font-light leading-relaxed">
              Neurological disorders deeply affect sensory awareness, voluntary muscle
              coordination, stability, and everyday independence. At Omshree Sidha
              Hospital, our classical clinical protocols combine traditional Kerala
              Vaidya lineage, specialized Panchakarma therapies, and close physician
              monitoring to deliver compassionate, individualized supportive care for
              complex neuromuscular concerns.
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
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20neurological%20care%20and%20share%20medical%20reports."
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
              Neurological Conditions We Manage
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              We focus on thorough physical evaluation, root-cause assessment of Dosha
              and Dhatu impairment, and structured supportive programs.
            </p>
          </div>

          {/* Quick Navigation Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {[
              {
                title: "Motor Neuron Disease",
                subtitle: "MND / ALS Care",
                hash: "#condition-mnd",
                desc: "Palliative, supportive muscle nourishment",
              },
              {
                title: "Stroke Recovery",
                subtitle: "CVA Rehabilitation",
                hash: "#condition-stroke",
                desc: "Sub-acute & chronic motor rehabilitation",
              },
              {
                title: "Paralysis",
                subtitle: "Pakshaghata",
                hash: "#condition-paralysis",
                desc: "Nerve transmission & flexibility recovery",
              },
              {
                title: "Migraine",
                subtitle: "Ardhavabhedaka",
                hash: "#condition-migraine",
                desc: "Neurovascular calming & trigger relief",
              },
              {
                title: "Vertigo",
                subtitle: "Bhrama",
                hash: "#condition-vertigo",
                desc: "Vestibular stabilization & cervical care",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.hash}
                className="bg-white p-5 rounded-3xl border border-[#DBCFA8]/60 hover:border-[#517B32] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833D] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#66371B] group-hover:text-[#517B32] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">
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
            {/* 1. MOTOR NEURON DISEASE (MND) */}
            <div
              id="condition-mnd"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Supportive &amp; Palliative Protocol
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Motor Neuron Disease (MND / ALS)
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#81551D] bg-[#FAF4E5] border border-[#B4833D]/30 px-3.5 py-1.5 rounded-full">
                  Clinical Governance Review Pending
                </span>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#402816] leading-relaxed font-light">
                  <p>
                    <strong>Understanding the Condition:</strong> Motor Neuron Disease
                    (MND) encompasses a cluster of progressive neurodegenerative
                    disorders—including Amyotrophic Lateral Sclerosis (ALS)—wherein the
                    motor nerves connecting the brain and spinal cord to voluntary
                    muscles progressively lose their functional integrity.
                  </p>
                  <p>
                    <strong>Common Symptoms &amp; Concerns:</strong> Patients and
                    families typically observe progressive muscle weakness in the hands,
                    arms, or legs, muscle twitching (fasciculations), severe muscle
                    cramps, muscle wasting (atrophy), difficulty performing fine motor
                    tasks (such as buttoning a shirt or turning a key), and in advanced
                    stages, difficulties with articulation (dysarthria) and swallowing
                    (dysphagia).
                  </p>
                  <p>
                    <strong>When Medical Assessment is Needed:</strong> Any progressive
                    loss of limb strength, swallowing difficulties, or breathing
                    shortness requires comprehensive diagnostic evaluation by a certified
                    neurologist, including electromyography (EMG) and neuro-imaging. Acute
                    choking or respiratory distress demands hospital emergency support.
                  </p>
                  <p>
                    <strong>Ayurvedic Care Approach:</strong> In Ayurvedic classical
                    theory, MND corresponds to advanced <em>Vata Vyadhi</em> compounded
                    by severe <em>Dhatukshaya</em> (depletion of bodily tissues) and{" "}
                    <em>Mamsashosha</em> (muscular wasting). Our hospital care is
                    strictly palliative and supportive: we focus on pacifying systemic
                    Vata dryness, easing painful spasms, and delivering tissue-nourishing
                    (<em>Brimhana</em>) external treatments—such as specialized{" "}
                    <em>Njavarakizhi</em> and medicated herbal oils—to support comfort and
                    help preserve mobility for as long as possible.
                  </p>
                  <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E3D8C1] text-xs text-[#81754B] leading-relaxed">
                    <strong>Clinical Transparency Note:</strong> We explicitly state that
                    Ayurveda does not cure, stop, or reverse Motor Neuron Disease. Our
                    role is strictly that of compassionate supportive care, functional
                    preservation, and palliative comfort under senior Vaidya supervision.
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] space-y-4">
                  <h4 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#517B32]" />
                    <span>Supportive Care Goals</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C4A36]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Relieving painful muscle cramps, fasciculations, and joint stiffness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Deep nourishing fomentation (Njavarakizhi) to support wasted muscle groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Digestive fire (Agni) correction to optimize nutritional assimilation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Gentle passive range-of-motion therapy to prevent contractures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Patient &amp; family guidance on supportive home care and diet</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Inquire About MND Supportive Care</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. STROKE REHABILITATION (CVA) */}
            <div
              id="condition-stroke"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Post-Acute Neuro-Rehabilitation
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Stroke Rehabilitation (CVA)
                  </h3>
                </div>
                <Link
                  href="/treatments/strokeparalysiscva"
                  className="text-xs font-bold text-[#517B32] hover:underline flex items-center gap-1"
                >
                  <span>View Dedicated Treatment Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#402816] leading-relaxed font-light">
                  <p>
                    <strong>Understanding the Condition:</strong> A stroke (Cerebrovascular
                    Accident) occurs when cerebral blood supply is disrupted by a clot
                    (ischemic stroke) or vascular rupture (hemorrhagic stroke). Following
                    acute hospital stabilization, survivors often experience lingering
                    neurological deficits—including hemiparesis (one-sided weakness), loss
                    of limb sensation, muscle spasticity, and gait imbalance.
                  </p>
                  <p>
                    <strong>When Medical Assessment is Needed:</strong> The onset of
                    stroke is an acute emergency. Only once the patient has completed
                    acute hospital care, has stable vitals, and is medically cleared
                    does Ayurvedic rehabilitation begin.
                  </p>
                  <p>
                    <strong>Ayurvedic Care Approach:</strong> In Ayurveda, post-stroke
                    rehabilitation is managed under the framework of{" "}
                    <em>Pakshaghata</em>. Our hospital specializes in sub-acute and
                    chronic rehabilitation: combining customized Panchakarma therapies,
                    full-body warm medicated oil stream therapy (<em>Pizhichil</em>),
                    herbal fomentation (<em>Njavarakizhi</em>), and internal neuro-tonics
                    formulated to improve micro-circulation, relax rigid spastic
                    muscles, and stimulate neuro-motor recovery.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] space-y-4">
                  <h4 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#517B32]" />
                    <span>Stroke Care Focus Areas</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C4A36]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Gradual reduction of muscular stiffness and spasticity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Stimulating peripheral nerve conduction and sensory feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Assisted mobility, limb strengthening, and gait retraining</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Vascular health and blood pressure support to prevent recurrences</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/treatments/strokeparalysiscva"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Stroke Treatment Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. PARALYSIS (PAKSHAGHATA) */}
            <div
              id="condition-paralysis"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Neuromuscular Lineage Care
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Paralysis &amp; Hemiplegia (Pakshaghata)
                  </h3>
                </div>
                <Link
                  href="/treatments/strokeparalysiscva"
                  className="text-xs font-bold text-[#517B32] hover:underline flex items-center gap-1"
                >
                  <span>Explore Paralysis Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#402816] leading-relaxed font-light">
                  <p>
                    <strong>Understanding the Condition:</strong> Paralysis involves the
                    complete or partial loss of voluntary muscle function in one or more
                    muscle groups. It may present as monoplegia (one limb), hemiplegia
                    (one side of the body, most common post-stroke), or paraplegia (lower
                    limbs, typically after spinal injuries).
                  </p>
                  <p>
                    <strong>Common Symptoms:</strong> Loss of muscle strength, inability
                    to grip or lift the foot (foot drop), sensory numbness, joint
                    contractures, and muscular stiffness.
                  </p>
                  <p>
                    <strong>Ayurvedic Care Approach:</strong> Omshree Sidha Hospital has
                    treated paralysis through multiple generations of Kerala Ayurvedic
                    practice. Our inpatient approach combines systematic oleation
                    (<em>Snehana</em>), medicated sweating (<em>Swedana</em>), rhythmic
                    nerve-nourishing massages, and internal decoctions prepared in our
                    in-house GMP pharmacy to restore neuromuscular connection, rebuild
                    muscle tone, and improve daily functional self-reliance.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] space-y-4">
                  <h4 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#517B32]" />
                    <span>Inpatient Paralysis Protocol</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C4A36]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Typically 3 to 6 weeks inpatient care in Vayala, Kerala</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Daily physician review and customized herbal decoction courses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Intensive external therapies: Pizhichil, Njavarakizhi, Abhyangam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Physician guidance on safe long-term home recovery</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Consult Our Neuromuscular Doctors</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. MIGRAINE (ARDHAVABHEDAKA) */}
            <div
              id="condition-migraine"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Neurovascular Headache Protocol
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Migraine (Ardhavabhedaka)
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <Link
                    href="/blog/why-do-i-get-migraines"
                    className="text-[#B4833D] hover:underline"
                  >
                    Read Migraine Guide
                  </Link>
                  <span className="text-[#DBCFA8]">•</span>
                  <Link
                    href="/treatments/migraine"
                    className="text-[#517B32] hover:underline flex items-center gap-1"
                  >
                    <span>Treatment Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#402816] leading-relaxed font-light">
                  <p>
                    <strong>Understanding the Condition:</strong> Migraine is a complex
                    neurovascular disorder characterized by recurrent, pulsating,
                    moderate-to-severe headache attacks that frequently affect one side
                    of the head. Attacks often last from 4 hours to several days and may
                    be preceded by sensory warning signs (auras).
                  </p>
                  <p>
                    <strong>Common Symptoms:</strong> Severe throbbing or pulsating
                    headache, nausea, vomiting, photophobia (sensitivity to light),
                    phonophobia (sensitivity to sound), dizziness, and sleep disruption.
                  </p>
                  <p>
                    <strong>When Medical Assessment is Needed:</strong> Sudden &ldquo;thunderclap&rdquo;
                    headache reaching maximum intensity within seconds, headache with
                    stiff neck and fever, or new weakness/numbness requires immediate
                    emergency evaluation to exclude intracranial emergencies.
                  </p>
                  <p>
                    <strong>Ayurvedic Care Approach:</strong> In Ayurveda, migraine is
                    viewed as an imbalance of <em>Vata</em> and <em>Pitta</em> doshas
                    vitiating the cranial channels (<em>Shirah Srotas</em>). Treatment
                    focuses on reducing neurovascular irritability through{" "}
                    <em>Shirodhara</em>, <em>Nasyam</em> (nasal medicated drops),
                    targeted herbal formulations, digestive Agni balancing, and
                    identifying personal dietary and lifestyle triggers.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] space-y-4">
                  <h4 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#517B32]" />
                    <span>Key Migraine Interventions</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C4A36]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Shirodhara with cooling herbal liquids to pacify cranial Pitta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Nasyam (nasal drops) to cleanse sinus and cranial channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Correction of chronic hyperacidity and gut-brain axis inflammation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Personalized trigger management (sleep, diet, screen habits)</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/treatments/migraine"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>View Migraine Treatment Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. VERTIGO (BHRAMA) */}
            <div
              id="condition-vertigo"
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#DBCFA8]/70 shadow-sm space-y-6 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DBCFA8]/40">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D]">
                    Vestibular &amp; Cervical Balance Care
                  </span>
                  <h3 className="font-heading font-normal text-3xl sm:text-4xl text-[#66371B]">
                    Vertigo &amp; Balance Disorders (Bhrama)
                  </h3>
                </div>
                <Link
                  href="/treatments/vertigo"
                  className="text-xs font-bold text-[#517B32] hover:underline flex items-center gap-1"
                >
                  <span>Explore Vertigo Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#402816] leading-relaxed font-light">
                  <p>
                    <strong>Understanding the Condition:</strong> Vertigo is the
                    sensation of spinning, swaying, or tilting when one is stationary.
                    It frequently stems from inner ear vestibular disturbances (such as
                    BPPV, labyrinthitis, or Meniere&apos;s disease) or cervical spine
                    strain that interferes with head-position signals transmitted to the
                    brain.
                  </p>
                  <p>
                    <strong>Common Symptoms:</strong> Spinning sensations, postural
                    unsteadiness, nausea, vomiting, sweating, headaches, and auditory
                    fullness or tinnitus.
                  </p>
                  <p>
                    <strong>When Medical Assessment is Needed:</strong> Vertigo coupled
                    with double vision, slurred speech, acute hearing loss, or inability
                    to stand requires immediate medical evaluation to exclude central
                    neurological events.
                  </p>
                  <p>
                    <strong>Ayurvedic Care Approach:</strong> In Ayurveda, vertigo is
                    categorized as <em>Bhrama</em>, stemming primarily from aggravated{" "}
                    <em>Vata</em> and <em>Pitta</em> affecting the head and neck.
                    Treatment combines specialized therapies to relieve cervical muscle
                    spasm, improve micro-circulation to the vestibular apparatus, and
                    stabilize autonomic balance through <em>Shirodhara</em>,{" "}
                    <em>Abhyangam</em>, gentle kizhi fomentation, and specific herbal
                    decoctions.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] space-y-4">
                  <h4 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#517B32]" />
                    <span>Vertigo Clinical Strategy</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C4A36]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Relieving cervical stiffness and improving blood flow to head</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Shirodhara to calm vestibular hyper-reactivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Nausea and autonomic symptom relief through herbal medicines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span>Postural and vestibular habituation guidance for home stability</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/treatments/vertigo"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] text-white hover:bg-[#3D5C26] px-5 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>Explore Vertigo Treatment Program</span>
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
              Our Clinical Methodology
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-[#66371B]">
              The Neurological Treatment Approach
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              Every neurological patient presents a distinct clinical picture. Our care
              follows a structured, physician-directed process from initial evaluation
              through home rehabilitation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Comprehensive Clinical Evaluation",
                desc: "Our senior Vaidyas evaluate constitution (Prakriti), current Dosha and Dhatu impairment, metabolic Agni status, and review modern diagnostic scans (MRI, CT, EMG, Doppler) alongside existing physician prescriptions.",
              },
              {
                step: "02",
                title: "Personalized Treatment Plan",
                desc: "An individualized care schedule is drawn up—combining specific internal medicines, external therapies, and dietary (Pathya) modifications matched to patient stamina, mobility, and clinical stage.",
              },
              {
                step: "03",
                title: "In-House Hospital Pharmacy",
                desc: "All herbal decoctions, medicated oils, and rasayanas are freshly prepared in our GMP-certified pharmacy under time-tested formulations, using genuine herbs free from synthetic chemical additives.",
              },
              {
                step: "04",
                title: "Supervised Clinical Therapies",
                desc: "Therapies are administered by experienced Kerala therapists under continuous physician oversight, adjusting oil temperature, therapy duration, and intensity to ensure patient safety and comfort.",
              },
              {
                step: "05",
                title: "Integrative Safety & Coordination",
                desc: "We prioritize patient safety by maintaining scheduled coordination with existing pharmaceutical regimens. We do not discontinue essential modern medicines without treating specialist clearance.",
              },
              {
                step: "06",
                title: "Structured Follow-Up & Home Care",
                desc: "Upon discharge, patients receive a clear home management plan, including continuation medicines, dietary guidelines, and scheduled tele-consultations to assess functional progress.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF7] p-8 rounded-[2rem] border border-[#DBCFA8]/50 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#517B32] uppercase tracking-wider">
                    Phase {item.step}
                  </span>
                  <span className="font-heading font-bold text-2xl text-[#DBCFA8]">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#66371B]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLASSICAL NEUROLOGICAL THERAPIES
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Evidence from Classical Lineage
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-5xl text-[#66371B]">
              Key Neurological Therapies
            </h2>
            <p className="text-base sm:text-lg text-[#81754B] font-light leading-relaxed">
              Classical Kerala external therapies applied in neurological protocols,
              carefully selected according to patient strength and specific Dosha
              presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Shirodhara",
                sanskrit: "Continuous Cranial Stream",
                desc: "A continuous, rhythmic stream of warm medicated herbal oil, milk, or buttermilk poured gently over the forehead. It soothes Prana Vata, reduces autonomic hyper-arousal, and promotes deep central nervous system relaxation.",
                indications: "Migraine, chronic tension headache, insomnia, vertigo, post-stroke anxiety.",
              },
              {
                name: "Nasyam (Nasya Karma)",
                sanskrit: "Nasal Instillation Therapy",
                desc: "Administration of specific herbal oils or extracts through the nasal passages after localized face and neck massage. In Ayurveda, the nose is considered the portal to the head (Nasa hi Shiraso Dvaram), clearing cranial channels.",
                indications: "Migraine, facial paralysis (Bell's palsy), cervical stiffness, sinusitis, vertigo.",
              },
              {
                name: "Njavarakizhi (Shashtika Sali)",
                sanskrit: "Medicinal Rice Bolus Fomentation",
                desc: "Therapeutic massage utilizing warm boluses of Shashtika rice cooked in milk and herbal Bala decoction. It provides deep Brimhana (nourishment) directly to paretic and wasted muscle groups, alleviating stiffness.",
                indications: "Paralysis, stroke recovery, MND supportive muscle care, muscular atrophy.",
              },
              {
                name: "Pizhichil (Thailadhara)",
                sanskrit: "Continuous Medicated Oil Bath",
                desc: "Continuous pouring of warm medicated oil across the entire body accompanied by synchronized, gentle strokes. This hallmark Kerala therapy reduces severe Vata aggravation, softens spastic muscles, and tones nerves.",
                indications: "Hemiplegia, paraplegia, post-stroke motor deficits, general neuromuscular weakness.",
              },
              {
                name: "Shirovasti",
                sanskrit: "Cranial Oil Well Therapy",
                desc: "Retention of warm herbalized medicated oil in a special tall leather cap fitted comfortably over the shaved scalp for a prescribed duration. It offers intensive nourishing support to cranial nerves and sensory faculties.",
                indications: "Severe facial palsy, trigeminal neuralgia, refractory vertigo, degenerative cranial conditions.",
              },
              {
                name: "Abhyanga & Swedana",
                sanskrit: "Full-Body Oleation & Steam",
                desc: "Full-body rhythmic massage using custom herbal oils to stimulate peripheral circulation and relieve joint stiffness, followed by gentle herbal steam to open subtle bodily channels (Srotas).",
                indications: "General Vata balance, limb stiffness, post-stroke gait preparation, fatigue.",
              },
            ].map((therapy, idx) => (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-[2.5rem] border border-[#DBCFA8]/60 hover:border-[#517B32] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833D] block">
                      {therapy.sanskrit}
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-[#66371B]">
                      {therapy.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#402816] font-light leading-relaxed">
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
              Clear, transparent answers regarding our neurological consultation, care
              expectations, and hospital admissions.
            </p>
          </div>

          <Accordion className="w-full space-y-4">
            {NEURO_FAQS.map((faq, idx) => (
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
                Discuss Your Neurological Case With Our Physicians
              </h2>
              <p className="text-base sm:text-lg text-[#E3D8C1] font-light leading-relaxed max-w-2xl mx-auto">
                Every neurological journey is unique. Share your medical history, scan
                reports, and current symptoms with our senior physicians to plan a safe,
                personalized Ayurvedic rehabilitation program.
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
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20neurological%20care."
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
                  Suspected Acute Stroke is a Medical Emergency:
                </strong>{" "}
                Sudden facial drooping, weakness or numbness in an arm or leg
                (particularly on one side), difficulty speaking or understanding
                speech, sudden severe headache, loss of balance, sudden vision
                changes, seizures, or loss of consciousness require immediate
                emergency medical care at the nearest hospital emergency department.
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
                  Ayurvedic consultation must never replace or delay urgent
                  emergency intervention for suspected acute stroke.
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
                  Never stop or alter prescribed conventional treatments without
                  guidance from the treating physician.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
