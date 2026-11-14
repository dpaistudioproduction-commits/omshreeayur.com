import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wind,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Stethoscope,
  Info,
  Clock,
  MessageCircle,
  AlertCircle,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asthma and Ayurveda: Supportive Care Alongside Medical Treatment",
  description:
    "Learn how Ayurveda can be safely explored as supportive, complementary care alongside prescribed medical asthma treatment, with triggers, precautions, and emergency warning signs.",
  alternates: {
    canonical: "https://www.omshreeayur.com/blog/asthma-and-ayurveda",
  },
  openGraph: {
    title: "Asthma and Ayurveda: Understanding Supportive Care Alongside Medical Treatment",
    description:
      "A clinical, patient-friendly guide on asthma symptoms, triggers, lifestyle habits, and how Ayurveda can serve as a supportive complementary approach without replacing prescribed inhalers.",
    url: "https://www.omshreeayur.com/blog/asthma-and-ayurveda",
    siteName: "Omshree Sidha Hospital",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.omshreeayur.com/images/blog/asthma-ayurveda-hero.jpg",
        width: 1000,
        height: 750,
        alt: "Asthma and Ayurveda - Understanding supportive respiratory care alongside modern medical treatment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asthma and Ayurveda: Understanding Supportive Care Alongside Medical Treatment",
    description:
      "Understanding asthma triggers, supportive lifestyle practices, and safe complementary Ayurvedic care alongside prescribed medical treatment.",
    images: ["https://www.omshreeayur.com/images/blog/asthma-ayurveda-hero.jpg"],
  },
};

export default function AsthmaAyurvedaBlogPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://www.omshreeayur.com/blog/asthma-and-ayurveda#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.omshreeayur.com/blog/asthma-and-ayurveda"
        },
        "headline": "Asthma and Ayurveda: Understanding Supportive Care Alongside Medical Treatment",
        "description": "Learn how Ayurveda can be safely explored as supportive, complementary care alongside prescribed medical asthma treatment, with triggers, precautions, and red flags.",
        "image": "https://www.omshreeayur.com/images/blog/asthma-ayurveda-hero.jpg",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://www.omshreeayur.com/blog/asthma-and-ayurveda",
        "datePublished": "2026-11-14T00:00:00+05:30",
        "dateModified": "2026-11-14T00:00:00+05:30",
        "author": {
          "@type": "MedicalOrganization",
          "name": "Omshree Sidha Hospital",
          "url": "https://www.omshreeayur.com"
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "Omshree Sidha Hospital",
          "url": "https://www.omshreeayur.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.omshreeayur.com/icon.png"
          }
        },
        "about": [
          {
            "@type": "MedicalCondition",
            "name": "Asthma",
            "alternateName": "Bronchial Asthma",
            "signOrSymptom": [
              { "@type": "MedicalSignOrSymptom", "name": "Wheezing" },
              { "@type": "MedicalSignOrSymptom", "name": "Shortness of breath" },
              { "@type": "MedicalSignOrSymptom", "name": "Chest tightness" },
              { "@type": "MedicalSignOrSymptom", "name": "Persistent cough" }
            ],
            "possibleTreatment": [
              {
                "@type": "MedicalTherapy",
                "name": "Conventional Inhaled Corticosteroid & Reliever Therapy"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Complementary Ayurvedic Lifestyle & Respiratory Support"
              }
            ]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.omshreeayur.com/blog/asthma-and-ayurveda#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.omshreeayur.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.omshreeayur.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Asthma and Ayurveda",
            "item": "https://www.omshreeayur.com/blog/asthma-and-ayurveda"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.omshreeayur.com/blog/asthma-and-ayurveda#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can Ayurveda cure asthma permanently?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is currently insufficient reliable scientific evidence to establish that Ayurveda can permanently cure asthma. Asthma is a chronic condition that requires appropriate diagnosis, treatment, and monitoring."
            }
          },
          {
            "@type": "Question",
            "name": "Can I stop using my inhaler if I start Ayurvedic treatment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Do not stop or change your prescribed inhaler without consulting your treating doctor. Inhalers may be essential for controlling symptoms and reducing the risk of severe asthma attacks."
            }
          },
          {
            "@type": "Question",
            "name": "Is Ayurveda safe for people with asthma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Safety depends on the specific treatment, ingredients, patient’s health, and other medicines being used. Some herbal products can interact with medicines or contain harmful contaminants. Consult qualified healthcare professionals before use."
            }
          },
          {
            "@type": "Question",
            "name": "What are common asthma triggers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common triggers include dust, pollen, smoke, air pollution, respiratory infections, cold air, and certain chemical fumes. Triggers vary between individuals."
            }
          },
          {
            "@type": "Question",
            "name": "Can lifestyle changes help with asthma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lifestyle practices such as avoiding smoke, identifying triggers, maintaining a balanced diet, and following a treatment plan may support general health and asthma management. They do not replace prescribed medical treatment."
            }
          },
          {
            "@type": "Question",
            "name": "When should a person with asthma consult a doctor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consult a doctor if symptoms are frequent, worsening, disturbing sleep, limiting everyday activities, or requiring the reliever more often than advised. Severe breathing difficulty requires emergency care."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FAF7F0]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24 relative overflow-hidden">
        <div className="w-full px-[4%] relative z-20">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-[#E3D8C1] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-[#81754B]">/</span>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-[#81754B]">/</span>
                  <span className="text-white font-medium">Asthma and Ayurveda</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider">
                Respiratory Care &amp; Evidence-Based Ayurveda
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6F9940]" /> 8 min read
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-[#6F9940]" /> Evidence-Based Patient Guide
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F1E1] leading-tight">
              Asthma and Ayurveda: Understanding Supportive Care Alongside Medical Treatment
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-8">
              Asthma is a common respiratory condition that can affect people of all ages. For many individuals, symptoms can be managed with appropriate medical care, regular monitoring, and awareness of personal triggers. Learn how Ayurveda may be explored as a complementary healthcare approach—while understanding why it must never replace prescribed asthma medication or emergency medical care.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="w-full sm:w-auto"
              >
                Discuss Respiratory Care With Our Doctors
              </Button>
              <Button
                render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />}
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" /> Chat on WhatsApp
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <div className="w-full px-[4%] py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Main Content Column */}
          <article className="lg:col-span-8 space-y-12">
            
            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-[#DBCFA8] shadow-sm bg-white">
              <Image
                src="/images/blog/asthma-ayurveda-hero.jpg"
                alt="Asthma and Ayurveda: Understanding Supportive Care Alongside Medical Treatment"
                width={1000}
                height={750}
                className="w-full h-auto object-cover max-h-[500px]"
                priority
              />
              <div className="p-4 bg-[#F7F1E1]/60 text-xs text-[#81754B] italic border-t border-[#DBCFA8]/50">
                Figure 1: Understanding personal asthma triggers, maintaining consistent medical treatment, and adopting supportive lifestyle practices form the cornerstone of safe, long-term respiratory wellness.
              </div>
            </div>

            {/* Quick Summary / Answer Engine Optimization (AEO) Callout */}
            <div className="bg-[#E3D8C1]/40 border-l-4 border-[#517B32] p-6 sm:p-8 rounded-r-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#517B32] font-bold text-sm uppercase tracking-wider">
                <Info className="w-5 h-5 shrink-0" />
                Quick Answer: Can Ayurveda Help with Asthma?
              </div>
              <p className="text-[#402816] text-base sm:text-lg leading-relaxed font-normal">
                <strong>Ayurveda may be explored as a supportive, complementary healthcare approach</strong> for some individuals by emphasizing personal trigger avoidance, balanced nutrition, daily wellness routines, and tailored natural therapies. However, <strong>it should never replace prescribed asthma medications or emergency medical care</strong>. Research evidence for Ayurvedic treatments specifically curing asthma remains limited. Patients must never stop or adjust inhaled corticosteroids or rescue inhalers without explicit medical advice from their treating physician.
              </p>
            </div>

            {/* Intro Content */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
              <p>
                Asthma is a common respiratory condition that can affect people of all ages. It may cause breathing difficulty, wheezing, chest tightness, and coughing, particularly at night or during physical activity. For many people, asthma symptoms can be managed with appropriate medical care, regular monitoring, and awareness of personal triggers.
              </p>
              <p>
                At <strong>Omshree Sidha Hospital</strong>, we believe patients should have access to clear information about their health and treatment choices. Ayurveda may be explored as a complementary healthcare approach for some individuals, but it should never replace prescribed asthma medication or emergency medical care.
              </p>
              <p>
                This article explains asthma, common triggers, supportive lifestyle practices, and important precautions when considering Ayurveda.
              </p>
            </div>

            {/* Section: What Is Asthma? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  What Is Asthma?
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Asthma is a chronic condition that affects the airways in the lungs. In people with asthma, the airways can become inflamed, sensitive, and narrowed. This may make it difficult to breathe normally.
                </p>
                <p>
                  Asthma symptoms may include:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <Wind className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Wheezing</strong>
                    <span className="text-sm text-[#402816]">A whistling or squeaking sound while breathing out or in.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <Activity className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Shortness of Breath</strong>
                    <span className="text-sm text-[#402816]">Feeling breathless or struggling to draw a complete breath.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <ShieldAlert className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Chest Tightness</strong>
                    <span className="text-sm text-[#402816]">A heavy, squeezing sensation or pressure across the chest.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <AlertCircle className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Persistent or Recurring Cough</strong>
                    <span className="text-sm text-[#402816]">Particularly troublesome at night or early in the morning.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Symptoms can vary from person to person. Some people experience occasional symptoms, while others need ongoing treatment and monitoring.
                </p>
                <p>
                  Asthma is not simply a cough or a seasonal breathing problem. A proper medical assessment is important to confirm the diagnosis and determine the appropriate treatment.
                </p>
              </div>
            </section>

            {/* Section: What Can Trigger Asthma Symptoms? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  What Can Trigger Asthma Symptoms?
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                Asthma triggers differ from one person to another. Common triggers include:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 01</span>
                  <h3 className="font-bold text-[#66371B] text-base">Dust &amp; Dust Mites</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Microscopic allergens residing in bedding, upholstery, and carpets.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 02</span>
                  <h3 className="font-bold text-[#66371B] text-base">Pollen &amp; Allergens</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Seasonal grass, weed, and tree pollens, as well as animal dander.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 03</span>
                  <h3 className="font-bold text-[#66371B] text-base">Smoke</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Tobacco smoke, wood smoke, cooking fumes, and burning incense.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 04</span>
                  <h3 className="font-bold text-[#66371B] text-base">Air Pollution</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Vehicle exhaust, particulate smog, industrial airborne emissions.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 05</span>
                  <h3 className="font-bold text-[#66371B] text-base">Respiratory Infections</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Common colds, viral influenza, bronchitis, and sinus inflammation.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 06</span>
                  <h3 className="font-bold text-[#66371B] text-base">Cold Air &amp; Weather</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Sudden temperature drops, damp conditions, or rapid weather shifts.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 07</span>
                  <h3 className="font-bold text-[#66371B] text-base">Exercise</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Physical exertion without adequate warm-up or in cold air.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 08</span>
                  <h3 className="font-bold text-[#66371B] text-base">Perfumes &amp; Fumes</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Strong fragrances, chemical cleaning sprays, paint, and aerosols.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Trigger 09</span>
                  <h3 className="font-bold text-[#66371B] text-base">Stress &amp; Emotions</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Heightened emotional stress, anxiety, or hyperventilation.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F1E1] rounded-xl border border-[#DBCFA8] text-sm text-[#402816] leading-relaxed">
                <p>
                  <strong>Important clinical note:</strong> Identifying personal triggers may help patients reduce avoidable exposure. However, avoiding triggers alone is not a substitute for prescribed asthma treatment.
                </p>
              </div>
            </section>

            {/* Section: Understanding Ayurveda and Asthma */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Understanding Ayurveda and Asthma
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Ayurveda is a traditional system of healthcare that considers a person’s overall health, daily routine, diet, and individual constitution.
                </p>
                <p>
                  In Ayurvedic literature, breathing-related conditions are discussed under traditional concepts such as <em>Shwasa</em>. Ayurvedic practitioners may use these concepts during an individual assessment to evaluate doshic balance, metabolic vitality (<em>Agni</em>), and channel clarity (<em>Pranavaha Srotas</em>).
                </p>
                <p>
                  It is important to understand that traditional descriptions and modern medical diagnoses are not always directly equivalent. Asthma is a medically defined respiratory condition that requires appropriate diagnosis and evidence-based management.
                </p>
                <p>
                  Research evidence for Ayurvedic treatments specifically for asthma remains limited. Therefore, Ayurveda should be considered only as a complementary approach, with appropriate medical supervision.
                </p>
              </div>
            </section>

            {/* Section: Can Ayurveda Be Used Alongside Asthma Treatment? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Can Ayurveda Be Used Alongside Asthma Treatment?
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Some patients may wish to explore Ayurveda as part of their broader healthcare routine. This should be discussed with their treating doctor and a qualified Ayurvedic practitioner.
                </p>
                <p>
                  A responsible approach may include:
                </p>
              </div>

              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Reviewing medical history:</strong> Comprehensive review of the patient’s diagnostic reports, spirometry, and clinical background.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Assessing current symptoms &amp; treatment:</strong> Understanding symptom frequency, nocturnal awakenings, and current prescription medicines.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Lifestyle &amp; dietary evaluation:</strong> Discussing nutritional patterns, hydration, sleep quality, and home environmental exposures.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Herb-drug interaction screening:</strong> Identifying possible interactions between prescribed conventional pharmaceuticals and herbal preparations.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Ongoing clinical monitoring:</strong> Evaluating the patient’s condition and respiratory parameters over time.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Inter-professional coordination:</strong> Coordinating supportive care collaboratively with the patient’s treating respiratory physician or pulmonologist.
                  </span>
                </li>
              </ul>

              <div className="p-5 bg-amber-50/80 border border-amber-200 rounded-2xl space-y-2 text-[#402816]">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-base">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-amber-700" />
                  <span>Crucial Clinical Prescriptions Notice</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed">
                  No Ayurvedic treatment should be presented as a guaranteed cure for asthma.
                </p>
                <p className="text-sm sm:text-base leading-relaxed font-semibold text-[#66371B]">
                  Patients should not stop, reduce, or replace prescribed inhalers or other asthma medicines without advice from their treating doctor. Inhaled corticosteroid-containing treatment is an important part of asthma management for many patients.
                </p>
              </div>
            </section>

            {/* Section: Lifestyle Practices That May Support Respiratory Health */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Lifestyle Practices That May Support Respiratory Health
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                Everyday habits can contribute to general health and may help some people manage asthma triggers.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">1</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Keep Indoor Spaces Clean</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    Regularly clean areas where dust accumulates. Wash bedding as recommended and consider reducing exposure to dust mites if they are a known trigger.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">2</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Avoid Smoke</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    Tobacco smoke and other forms of smoke can irritate the airways. Avoid smoking and limit exposure to second-hand smoke.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">3</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Follow a Balanced Diet</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    Include a variety of vegetables, fruits, whole grains, and other nutritious foods. There is no single diet proven to cure asthma. Patients should be cautious about restrictive diets or food-based treatment claims.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">4</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Maintain Regular Physical Activity</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    Physical activity can support overall health. People with asthma should follow their clinician’s guidance about exercise, especially if activity triggers symptoms.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">5</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Follow the Prescribed Treatment Plan</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    Use prescribed medicines as directed. Keep follow-up appointments and ask your doctor to review your inhaler technique.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">6</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Understand Your Asthma Action Plan</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    A written asthma action plan can help you recognize worsening symptoms and understand what steps to take. Patients should ask their healthcare provider for a plan suited to their condition.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Are Ayurvedic Medicines Safe for Everyone? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Are Ayurvedic Medicines Safe for Everyone?
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p className="font-semibold text-[#66371B]">
                  Not necessarily.
                </p>
                <p>
                  Herbal and traditional preparations can have side effects or interact with prescription medicines. Some Ayurvedic products have also been found to contain potentially toxic metals such as lead, mercury, or arsenic when sourced from uncertified or unregulated manufacturers.
                </p>
                <p>
                  Before using any herbal preparation:
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DBCFA8] shadow-2xs space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Inform your treating doctor:</strong> Disclose all herbal preparations, decoctions, and supplements you are taking or considering.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Consult a qualified practitioner:</strong> Seek guidance from formally trained Ayurvedic physicians (BAMS) who adhere to clinical pharmacology.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Ask about quality and interactions:</strong> Clarify ingredients, standardized GMP manufacturing, correct dosage, and potential pharmacological interactions.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Avoid unrealistic promises:</strong> Steer clear of commercial remedies making claims of a permanent cure or guaranteed results.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Never replace your inhaler:</strong> Do not use an herbal product as a replacement for your prescribed reliever or preventer inhaler.
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg font-medium text-[#66371B]">
                Safety and transparency should always come first.
              </p>
            </section>

            {/* Section: When Should You Seek Emergency Medical Care? (Safety Panel) */}
            <section className="space-y-6 pt-2">
              <div className="bg-[#FFF5F5] border-2 border-red-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-red-700 block mb-1">
                      Patient Safety Notice
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-red-950">
                      When Should You Seek Emergency Medical Care?
                    </h2>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#402816] leading-relaxed">
                  Asthma can sometimes become severe and require urgent treatment.
                </p>

                <div className="space-y-3">
                  <p className="text-sm sm:text-base font-bold text-red-950">
                    Seek emergency medical help immediately if you or someone else:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-red-950 font-medium">Has severe difficulty breathing</span>
                    </div>

                    <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-red-950 font-medium">Cannot speak in full sentences because of breathlessness</span>
                    </div>

                    <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-red-950 font-medium">Has symptoms that are rapidly getting worse</span>
                    </div>

                    <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-red-950 font-medium">Is not improving after using prescribed reliever according to action plan</span>
                    </div>

                    <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5 sm:col-span-2">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-red-950 font-medium">Becomes confused, unusually drowsy, or develops blue or grey lips</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-100/70 border border-red-300/80 rounded-2xl text-red-950 text-sm sm:text-base leading-relaxed font-semibold">
                  During a suspected asthma attack, follow the patient’s emergency asthma action plan and seek urgent medical assistance. Do not delay emergency care to try an Ayurvedic remedy, steam treatment, or home remedy.
                </div>
              </div>
            </section>

            {/* Section: Frequently Asked Questions */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      1. Can Ayurveda cure asthma permanently?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      There is currently insufficient reliable scientific evidence to establish that Ayurveda can permanently cure asthma. Asthma is a chronic condition that requires appropriate diagnosis, treatment, and monitoring.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      2. Can I stop using my inhaler if I start Ayurvedic treatment?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      No. Do not stop or change your prescribed inhaler without consulting your treating doctor. Inhalers may be essential for controlling symptoms and reducing the risk of severe asthma attacks.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      3. Is Ayurveda safe for people with asthma?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Safety depends on the specific treatment, ingredients, patient’s health, and other medicines being used. Some herbal products can interact with medicines or contain harmful contaminants. Consult qualified healthcare professionals before use.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      4. What are common asthma triggers?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Common triggers include dust, pollen, smoke, air pollution, respiratory infections, cold air, and certain chemical fumes. Triggers vary between individuals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      5. Can lifestyle changes help with asthma?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Lifestyle practices such as avoiding smoke, identifying triggers, maintaining a balanced diet, and following a treatment plan may support general health and asthma management. They do not replace prescribed medical treatment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      6. When should a person with asthma consult a doctor?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Consult a doctor if symptoms are frequent, worsening, disturbing sleep, limiting everyday activities, or requiring the reliever more often than advised. Severe breathing difficulty requires emergency care.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section: Explore Respiratory Care at Omshree Sidha Hospital */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Explore Respiratory Care at Omshree Sidha Hospital
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  If you are considering Ayurveda as part of your healthcare, a professional consultation can help you understand your options and the precautions involved.
                </p>
                <p>
                  At <strong>Omshree Sidha Hospital</strong>, patients are encouraged to seek individualized guidance, share their medical history, and make informed decisions about their health.
                </p>
                <p>
                  For respiratory symptoms, please ensure that you receive appropriate medical assessment and continue any prescribed treatment.
                </p>
              </div>

              {/* Consultation Callout Banner */}
              <div className="bg-[#402816] text-[#F7F1E1] p-8 sm:p-10 rounded-3xl relative overflow-hidden space-y-6 border border-[#81754B]/30 shadow-lg">
                <div className="relative z-10 space-y-3">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#517B32] text-white text-xs font-bold uppercase tracking-wider">
                    Evidence-Based Consultation
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F1E1]">
                    Discuss Your Respiratory Health With Our Medical Team
                  </h3>
                  <p className="text-base text-[#E3D8C1] max-w-2xl font-light">
                    Consult our qualified Ayurvedic physicians for an ethical evaluation, personalized lifestyle advice, and supportive care coordinated with your primary healthcare provider.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Button
                    render={<Link href="/contact" />}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Request Doctor Consultation
                  </Button>
                  <Button
                    render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />}
                    variant="glass"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span className="flex items-center justify-center">
                      <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" /> Inquire on WhatsApp
                    </span>
                  </Button>
                </div>
              </div>
            </section>

            {/* Medical Disclaimer */}
            <div className="p-6 bg-[#E3D8C1]/30 border border-[#DBCFA8] rounded-2xl text-xs sm:text-sm text-[#81754B] leading-relaxed">
              <strong className="text-[#66371B] block mb-1">Disclaimer:</strong>
              This article is for general educational purposes only. It is not a substitute for diagnosis, medical advice, or treatment. Asthma can be life-threatening. Always follow your treating doctor’s advice and seek emergency care when needed.
            </div>

          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* Quick Consultation Card */}
              <Card className="border-[#DBCFA8] shadow-md bg-white rounded-2xl overflow-hidden">
                <div className="bg-[#517B32] text-white p-5 text-center">
                  <h3 className="font-heading font-bold text-xl">
                    Need Respiratory Guidance?
                  </h3>
                  <p className="text-white/80 text-xs mt-1">
                    Connect with our Ayurvedic physicians
                  </p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed">
                    Get individualized guidance on trigger awareness, supportive diet, and classical Ayurvedic care coordinated with your medical prescriptions.
                  </p>
                  <Button
                    render={<Link href="/contact" />}
                    className="w-full justify-center"
                  >
                    Request Consultation
                  </Button>
                  <Button
                    render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />}
                    variant="secondary"
                    className="w-full justify-center border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" /> WhatsApp Support
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Omshree Sidha Hospital */}
              <Card className="border-[#DBCFA8] shadow-2xs bg-white rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#66371B]">
                    Why Omshree Sidha Hospital?
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#402816]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>140+ Years of Traditional Lineage</strong> dating back to Sri Kochukutty Vaidhyar in the 1880s.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>Qualified Medical Team</strong> led by senior BAMS physicians adhering to clinical safety.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>In-House GMP Pharmacy</strong> producing pure, standardized authentic classical preparations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>Complementary Ethics:</strong> Transparent medical co-management without false cure promises.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Related Clinical Resources */}
              <Card className="border-[#DBCFA8] shadow-2xs bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#66371B]">
                    Related Respiratory Resources
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/conditions/respiratory"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Respiratory Conditions Care Hub</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/treatments/asthma-treatment"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Asthma Inpatient Care &amp; Therapies</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/treatments/copd-chronic-obstructive-pulmonary-disease"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>COPD Supportive Management</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/treatments/sinusitis-treatment"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Sinusitis &amp; Upper Airway Care</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/kafastha"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Kafastha Respiratory Formulation</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
