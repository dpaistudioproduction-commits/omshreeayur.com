import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Activity,
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Stethoscope,
  Info,
  Clock,
  MessageCircle,
  Sparkles,
  AlertCircle,
  Phone,
  Droplets,
  Utensils,
  Moon,
  Compass,
  Wind
} from "lucide-react";

export const metadata: Metadata = {
  title: "Low Blood Pressure: Causes, Symptoms & Ayurvedic Approach",
  description:
    "Explore the causes and symptoms of low blood pressure and understand how Ayurveda approaches personalised care through diet, lifestyle and wellness guidance.",
  alternates: {
    canonical: "https://www.omshreeayur.com/blog/low-blood-pressure-treatment",
  },
  openGraph: {
    title: "Why Low Blood Pressure Is Often Ignored by Modern Treatment, and What Ayurveda Offers?",
    description:
      "Explore the causes and symptoms of low blood pressure and understand how Ayurveda approaches personalised care through diet, lifestyle and wellness guidance.",
    url: "https://www.omshreeayur.com/blog/low-blood-pressure-treatment",
    siteName: "Omshree Sidha Hospital",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://omshreeayur.com/images/blog/low-blood-pressure-ayurveda-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Ayurvedic physician checking patient pulse and discussing blood pressure in a traditional Kerala hospital consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Blood Pressure: Causes, Symptoms & Ayurvedic Approach",
    description:
      "Explore the causes and symptoms of low blood pressure and understand how Ayurveda approaches personalised care through diet, lifestyle and wellness guidance.",
    images: ["https://omshreeayur.com/images/blog/low-blood-pressure-ayurveda-hero.jpg"],
  },
};

export default function LowBloodPressureBlogPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://www.omshreeayur.com/blog/low-blood-pressure-treatment#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.omshreeayur.com/blog/low-blood-pressure-treatment"
        },
        "headline": "Why Low Blood Pressure Is Often Ignored by Modern Treatment, and What Ayurveda Offers?",
        "description": "Explore the causes and symptoms of low blood pressure and understand how Ayurveda approaches personalised care through diet, lifestyle and wellness guidance.",
        "image": "https://www.omshreeayur.com/images/blog/low-blood-pressure-ayurveda-hero.jpg",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://www.omshreeayur.com/blog/low-blood-pressure-treatment",
        "datePublished": "2026-11-05T00:00:00+05:30",
        "dateModified": "2026-11-05T00:00:00+05:30",
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
            "url": "https://www.omshreeayur.com/images/logo/logo.webp"
          }
        },
        "about": [
          {
            "@type": "MedicalCondition",
            "name": "Hypotension",
            "alternateName": "Low Blood Pressure",
            "possibleTreatment": [
              {
                "@type": "MedicalTherapy",
                "name": "Ayurvedic Lifestyle & Dietary Management"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Personalised Ayurvedic Herbomineral Care"
              }
            ]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.omshreeayur.com/blog/low-blood-pressure-treatment#breadcrumb",
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
            "name": "Low Blood Pressure: Causes, Symptoms & Ayurvedic Approach",
            "item": "https://www.omshreeayur.com/blog/low-blood-pressure-treatment"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.omshreeayur.com/blog/low-blood-pressure-treatment#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What reading is medically considered low blood pressure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A blood pressure measurement below 90/60 mmHg (90 mmHg systolic or 60 mmHg diastolic) is generally categorized as hypotension. However, what is normal varies between individuals; if a person feels energetic and has no symptoms, a naturally low reading is usually not a cause for concern."
            }
          },
          {
            "@type": "Question",
            "name": "Why is low blood pressure often overlooked compared to high blood pressure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High blood pressure carries direct, well-documented long-term risks of heart attack, stroke, and kidney damage even when asymptomatic. Low blood pressure without symptoms often requires no medical intervention. However, when low BP is accompanied by recurring dizziness, fatigue, or fainting, it should never be overlooked because it may stem from dehydration, medication side effects, endocrine imbalances, or underlying cardiac conditions."
            }
          },
          {
            "@type": "Question",
            "name": "What are common symptoms of low blood pressure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Frequent symptoms include lightheadedness, dizziness, generalized weakness, uncharacteristic fatigue, blurred vision, nausea, and difficulty concentrating. In severe cases or upon standing up rapidly, fainting (syncope) may occur."
            }
          },
          {
            "@type": "Question",
            "name": "How does Ayurveda approach the management of low blood pressure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ayurveda views health through an individualized lens, assessing your unique physical constitution (Prakriti), metabolic fire (Agni), and circulation (Rasavaha Srotas). Rather than offering a one-size-fits-all remedy, Ayurvedic practitioners identify the root imbalance and recommend tailored dietary adjustments, digestive support, restorative routines, and specific traditional preparations."
            }
          },
          {
            "@type": "Question",
            "name": "When should someone seek urgent emergency medical attention for low blood pressure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Emergency medical evaluation is crucial if low blood pressure is accompanied by sudden severe dizziness, fainting, mental confusion, cold and clammy skin, rapid shallow breathing, blue-tinged skin, chest pain, or difficulty breathing."
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

      {/* ============================================================ */}
      {/* HERO SECTION                                                 */}
      {/* ============================================================ */}
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
                  <span className="text-white font-medium">Low Blood Pressure Treatment</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider">
                Cardiovascular &amp; Holistic Health
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6F9940]" /> 7 min read
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D9B872]" /> Published Nov 2026
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-[#F7F1E1] leading-[1.18] mb-6">
              Why Low Blood Pressure Is Often Ignored by Modern Treatment, and What Ayurveda Offers?
            </h1>

            <p className="text-lg md:text-xl text-[#E3D8C1] font-light leading-relaxed max-w-3xl">
              Explore the causes and symptoms of low blood pressure and understand how Ayurveda approaches personalised care through diet, lifestyle, and root-cause wellness guidance.
            </p>

            {/* Author / Clinical Review Badge */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#66371B]/60 text-xs text-[#E3D8C1]">
              <div className="h-10 w-10 rounded-full bg-[#517B32] text-white flex items-center justify-center font-bold text-sm shadow-inner">
                OS
              </div>
              <div>
                <p className="font-semibold text-white">Clinical Editorial Team</p>
                <p className="text-[#C5B896]">Omshree Sidha Hospital • Healing Since 1880 • Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MAIN ARTICLE CONTENT                                         */}
      {/* ============================================================ */}
      <section className="w-full px-[4%] py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <article className="lg:col-span-8 space-y-10 text-[#402816] leading-relaxed text-base sm:text-lg">
            
            {/* Featured Hero Visual */}
            <div className="rounded-3xl overflow-hidden border border-[#DBCFA8] shadow-md bg-white">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/images/blog/low-blood-pressure-ayurveda-hero.jpg"
                  alt="Ayurvedic physician examining radial pulse and discussing natural blood pressure management with a patient"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              <div className="p-4 bg-[#FDFBF7] border-t border-[#DBCFA8]/60 text-xs text-[#81754B] flex items-center justify-between">
                <span>Personalised Ayurvedic consultation at Omshree Sidha Hospital</span>
                <span className="font-semibold text-[#517B32]">Clinical Care &amp; Holistic Guidance</span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F5EEDB] to-[#EBE0C5] border border-[#DBCFA8] space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5 text-[#517B32] font-bold text-sm uppercase tracking-wider">
                <Info className="w-5 h-5 text-[#B4833D]" />
                <span>Executive Summary &amp; Key Insights</span>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#402816]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span><strong>Hypotension Definition:</strong> A blood pressure reading below <strong>90/60 mmHg</strong> is medically considered low, though individual baselines differ.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span><strong>Why It Gets Overlooked:</strong> Asymptomatic low blood pressure carries few direct cardiovascular risks, but recurring dizziness or fatigue indicates an underlying problem that requires investigation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span><strong>The Ayurvedic Lens:</strong> Ayurveda evaluates individual constitution (Prakriti), digestion (Agni), and systemic circulation to design targeted diet, lifestyle, and restorative regimens.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span><strong>Practical Measures:</strong> Adequate hydration, scheduled meals, steady posture transitions, and stress reduction provide daily stability.</span>
                </li>
              </ul>
            </div>

            {/* Introduction Paragraphs */}
            <div className="space-y-5">
              <p>
                Low blood pressure does not always attract the same attention as high blood pressure, especially when the symptoms are mild or occur only occasionally. However, recurring dizziness, weakness, or unusual fatigue can affect daily activities and make even simple tasks difficult.
              </p>
              <p>
                Finding the right treatment for low blood pressure begins with understanding why the blood pressure is low and whether it is causing symptoms. Ayurveda offers a perspective that considers individual health, diet, lifestyle, and overall wellbeing. However, persistent symptoms should never be ignored, and appropriate medical evaluation remains essential.
              </p>
              <p className="p-4 rounded-2xl bg-white border-l-4 border-[#517B32] text-[#2B1A0E] text-base font-medium shadow-sm">
                This is where <strong>Omshree Sidha Hospital (Multi-speciality Ayurveda Hospital)</strong> plays an important role by offering personalised Ayurvedic care tailored to individual health needs.
              </p>
            </div>

            {/* ============================================================ */}
            {/* SECTION 1: WHAT IS LOW BLOOD PRESSURE? CAUSES & SYMPTOMS     */}
            {/* ============================================================ */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-[#DBCFA8] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D] block mb-1">
                  Clinical Overview &amp; Definitions
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl text-[#66371B] font-bold">
                  What Is Low Blood Pressure? Causes and Common Symptoms?
                </h2>
              </div>

              <p>
                Low blood pressure, medically known as <strong>hypotension</strong>, refers to blood pressure that is lower than normal. A reading below <strong>90/60 mmHg</strong> is generally considered low, although what is normal can vary between individuals. Some people naturally have lower blood pressure without experiencing any health problems or requiring treatment.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {/* Causes Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] shadow-sm space-y-3">
                  <div className="flex items-center gap-2.5 text-[#66371B] font-heading font-bold text-lg">
                    <Activity className="w-5 h-5 text-[#B4833D]" />
                    <h3>Key Causes of Low BP</h3>
                  </div>
                  <p className="text-sm text-[#81754B]">
                    Several physiological and external factors can contribute to low readings:
                  </p>
                  <ul className="text-sm space-y-2 text-[#402816]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#517B32]" />
                      <strong>Dehydration:</strong> Reduced fluid volume decreases vascular pressure.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#517B32]" />
                      <strong>Certain Medications:</strong> Diuretics, beta-blockers, and antidepressants.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#517B32]" />
                      <strong>Prolonged Bed Rest:</strong> Deconditioning reduces vascular tone.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#517B32]" />
                      <strong>Heart Conditions:</strong> Low heart rate (bradycardia) or heart failure.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#517B32]" />
                      <strong>Endocrine Problems:</strong> Thyroid or adrenal gland imbalances.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#517B32]" />
                      <strong>Postural Shifts:</strong> Standing up suddenly (orthostatic hypotension).
                    </li>
                  </ul>
                </div>

                {/* Symptoms Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] shadow-sm space-y-3">
                  <div className="flex items-center gap-2.5 text-[#66371B] font-heading font-bold text-lg">
                    <Heart className="w-5 h-5 text-[#517B32]" />
                    <h3>Common Symptoms</h3>
                  </div>
                  <p className="text-sm text-[#81754B]">
                    When vital tissues receive inadequate blood flow, patients experience:
                  </p>
                  <ul className="text-sm space-y-2 text-[#402816]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D]" />
                      <strong>Dizziness &amp; Lightheadedness:</strong> Especially on standing.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D]" />
                      <strong>Weakness &amp; Fatigue:</strong> Constant exhaustion during basic tasks.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D]" />
                      <strong>Blurred Vision:</strong> Temporary dimming or greying out.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D]" />
                      <strong>Nausea &amp; Mild Shakiness:</strong> Accompanying sudden drops.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D]" />
                      <strong>Difficulty Concentrating:</strong> Brain fog from reduced cerebral perfusion.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B4833D]" />
                      <strong>Fainting (Syncope):</strong> Particularly during prolonged standing.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-[#81754B] italic bg-[#FAF4E5] p-4 rounded-xl border border-[#DBCFA8]/70">
                Although occasional low readings may not be concerning, frequent symptoms can interfere with work, exercise, and everyday activities. Identifying the underlying cause is therefore more useful than judging the condition by a single blood pressure reading.
              </p>
            </section>

            {/* ============================================================ */}
            {/* SECTION 2: WHY LOW BLOOD PRESSURE MAY BE OVERLOOKED?         */}
            {/* ============================================================ */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-[#DBCFA8] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D] block mb-1">
                  Medical Context &amp; Pitfalls
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl text-[#66371B] font-bold">
                  Why Low Blood Pressure May Be Overlooked?
                </h2>
              </div>

              <p>
                Low blood pressure is not always a cause for concern. If someone feels well and has consistently low readings, treatment may not be necessary. This is one reason the condition may receive less attention than high blood pressure, which can increase the risk of serious complications even without obvious symptoms.
              </p>

              <p>
                However, the situation changes when low blood pressure occurs alongside recurring dizziness, weakness, or fainting. These symptoms may indicate dehydration, medication-related effects, or another underlying health problem. Focusing only on the blood pressure reading without investigating the reason can delay appropriate care.
              </p>

              <p>
                This is where a broader approach to health becomes relevant. Health care considers a person&apos;s symptoms, medical history, daily habits, and overall condition rather than looking at one measurement alone. Similarly, Ayurvedic treatments may form part of an individual&apos;s wellness plan when chosen appropriately and used alongside necessary medical care.
              </p>

              {/* Red Flags / Emergency Alert Box */}
              <div className="p-6 rounded-3xl bg-[#FEF2F2] border-2 border-[#EF4444]/40 space-y-3">
                <div className="flex items-center gap-2.5 text-[#B91C1C] font-bold">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <h3 className="font-heading text-lg">When to Seek Immediate Medical Attention</h3>
                </div>
                <p className="text-sm text-[#7F1D1D] leading-relaxed">
                  It is important to seek medical attention if symptoms keep returning. Sudden severe dizziness, fainting, confusion, cold and clammy skin, chest pain, or breathing difficulties require urgent medical assessment, as they may indicate a serious condition. Low blood pressure accompanied by significant symptoms should never be dismissed as ordinary tiredness.
                </p>
              </div>
            </section>

            {/* ============================================================ */}
            {/* SECTION 3: AYURVEDIC APPROACH TO MANAGING LOW BP             */}
            {/* ============================================================ */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-[#DBCFA8] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#517B32] block mb-1">
                  Individualised Holistic Care
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl text-[#66371B] font-bold">
                  Ayurvedic Approach to Managing Low Blood Pressure
                </h2>
              </div>

              <p>
                Ayurveda takes an individualised approach to health, recognising that people have different physical constitutions, dietary needs, and lifestyle patterns. From this perspective, practitioners assess your overall condition before recommending dietary changes, daily routines, or specific therapies.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D] block">1. Prakriti Assessment</span>
                  <h4 className="font-heading font-bold text-[#66371B]">Constitutional Balance</h4>
                  <p className="text-xs text-[#81754B] leading-relaxed">
                    Evaluating Vata, Pitta, and Kapha dosha balances to understand individual vascular elasticity and metabolic vitality.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32] block">2. Agni &amp; Dhatu Poshana</span>
                  <h4 className="font-heading font-bold text-[#66371B]">Nutritive Assimilation</h4>
                  <p className="text-xs text-[#81754B] leading-relaxed">
                    Optimising digestive fire so that Rasa (plasma) and Rakta (blood tissue) are properly nourished and sustained.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833D] block">3. Personalised Therapies</span>
                  <h4 className="font-heading font-bold text-[#66371B]">Restorative Care</h4>
                  <p className="text-xs text-[#81754B] leading-relaxed">
                    Prescribing tailored herbal decoctions, Abhyanga, and rejuvenating lifestyle regimens tailored to your assessment.
                  </p>
                </div>
              </div>

              <p>
                An Ayurvedic treatment for low blood pressure may involve personalised food recommendations, attention to digestion, adequate rest, and adjustments to everyday habits. Depending on your assessment, a qualified practitioner may also suggest suitable Ayurvedic therapies. The aim is to support general wellbeing while considering your unique needs.
              </p>

              <p className="bg-[#FAF4E5] p-5 rounded-2xl border border-[#DBCFA8] text-sm text-[#402816]">
                The Ayurvedic approach to managing low blood pressure depends on the underlying cause and appropriate herbal preparations. Anyone considering low BP treatment should consult a qualified healthcare professional to identify the cause and determine the right course of action. A personalised plan that considers both safety and everyday wellbeing is the most responsible way forward.
              </p>
            </section>

            {/* ============================================================ */}
            {/* SECTION 4: LIFESTYLE & DIET TIPS                             */}
            {/* ============================================================ */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-[#DBCFA8] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#517B32] block mb-1">
                  Practical Daily Guidance
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl text-[#66371B] font-bold">
                  Lifestyle and Diet Tips for Supporting Healthy Blood Pressure
                </h2>
              </div>

              <p>
                Everyday habits can play a role in supporting healthy blood pressure, particularly when dehydration, irregular meals, or sudden changes in posture contribute to symptoms. These measures are not a substitute for medical care, but they can help people manage their daily routines more carefully.
              </p>

              {/* 6 Habits Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-[#66371B]">Stay Adequately Hydrated</h4>
                    <p className="text-xs text-[#81754B] leading-relaxed">
                      Drink enough water throughout the day. People who have fluid restrictions because of heart or kidney conditions should follow their healthcare professional&apos;s advice.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-[#66371B]">Maintain Regular Meals</h4>
                    <p className="text-xs text-[#81754B] leading-relaxed">
                      Eat balanced meals at consistent times. Smaller, more frequent meals may help some people who experience dizziness after eating.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-[#66371B]">Get Sufficient Sleep</h4>
                    <p className="text-xs text-[#81754B] leading-relaxed">
                      A regular sleep schedule supports steady adrenal function, balanced energy levels, and overall autonomic nervous system stability.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-[#66371B]">Change Positions Gradually</h4>
                    <p className="text-xs text-[#81754B] leading-relaxed">
                      Sit up slowly after lying down and stand carefully to allow your circulatory system time to adjust, reducing the risk of postural dizziness.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-[#66371B]">Practise Stress Management</h4>
                    <p className="text-xs text-[#81754B] leading-relaxed">
                      Gentle breathing exercises (Pranayama), relaxation techniques, and suitable mild physical activity support balanced autonomic tone.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-[#66371B]">Follow an Appropriate Routine</h4>
                    <p className="text-xs text-[#81754B] leading-relaxed">
                      Consistent mealtimes, adequate rest, and moderate activity align with the Ayurvedic principle of Dinacharya, reinforcing natural bodily rhythms.
                    </p>
                  </div>
                </div>

              </div>

              {/* Dietary Caveat Notice */}
              <div className="p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-sm text-[#92400E] space-y-2">
                <p className="font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#D97706]" />
                  Important Precaution Regarding Diet &amp; Supplements:
                </p>
                <p className="leading-relaxed text-xs sm:text-sm">
                  An appropriate Ayurvedic diet should be planned based on individual needs rather than following a universal food plan. Similarly, stress management and suitable wellness treatments may support general health, but they should be selected according to the person&apos;s condition. <strong>Do not increase salt intake or start herbal supplements specifically to raise blood pressure without professional medical advice.</strong>
                </p>
              </div>
            </section>

            {/* ============================================================ */}
            {/* CONCLUSION & CLINICAL GUIDANCE                               */}
            {/* ============================================================ */}
            <section className="space-y-6 pt-4 border-t border-[#DBCFA8]">
              <h2 className="font-heading text-2xl sm:text-3xl text-[#66371B] font-bold">
                Conclusion
              </h2>

              <p>
                Low blood pressure may not always require treatment, but recurring symptoms deserve attention. Understanding the causes, recognising warning signs, and choosing appropriate care are essential steps towards better health. The right treatment for low blood pressure depends on your symptoms, medical history, and underlying condition.
              </p>

              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#213714] to-[#3D5C26] text-white space-y-4 shadow-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D9B872] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Specialised Hospital Guidance
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F1E1]">
                  Personalised Care at Omshree Sidha Hospital
                </h3>
                <p className="text-sm sm:text-base text-[#E3D8C1] leading-relaxed">
                  You can seek personalised Ayurvedic guidance at <strong>Omshree Sidha Hospital (Multi-speciality Ayurveda Hospital)</strong>, based on your health needs. Consult a qualified practitioner to discuss suitable care options and develop a plan that supports your overall wellbeing while addressing low blood pressure safely.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/patient-care/consultation"
                    className="inline-flex items-center gap-2 rounded-full bg-[#B4833D] hover:bg-[#976B2C] text-white px-6 py-3 text-sm font-bold shadow-md transition-all"
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>Book Physician Consultation</span>
                  </Link>
                  <a
                    href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20my%20low%20blood%20pressure%20symptoms."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 text-sm font-bold shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                  <a
                    href="tel:+919846992789"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:bg-white/10 text-white px-5 py-3 text-sm font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#D9B872]" />
                    <span>+91 98469 92789</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ============================================================ */}
            {/* FREQUENTLY ASKED QUESTIONS (FAQ)                             */}
            {/* ============================================================ */}
            <section className="space-y-6 pt-6 border-t border-[#DBCFA8]">
              <div className="border-b border-[#DBCFA8] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#517B32] block mb-1">
                  Patient Questions Answered
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl text-[#66371B] font-bold">
                  Frequently Asked Questions About Low Blood Pressure
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] space-y-2 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                    What reading is medically considered low blood pressure?
                  </h3>
                  <p className="text-sm text-[#81754B] leading-relaxed pl-7">
                    A blood pressure measurement below <strong>90/60 mmHg</strong> (systolic below 90 or diastolic below 60) is generally categorized as hypotension. What is normal varies between individuals; if a person feels energetic and has no symptoms, a naturally low reading is usually not a cause for concern.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] space-y-2 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                    Why is low blood pressure often overlooked compared to high blood pressure?
                  </h3>
                  <p className="text-sm text-[#81754B] leading-relaxed pl-7">
                    High blood pressure carries direct, well-documented long-term risks of heart attack, stroke, and organ damage even without symptoms. Low blood pressure without symptoms often requires no medical intervention. However, when low BP is accompanied by recurring dizziness, fatigue, or fainting, it should never be overlooked because it may stem from dehydration, medication side effects, endocrine imbalances, or underlying cardiac conditions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] space-y-2 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                    What are common symptoms of low blood pressure?
                  </h3>
                  <p className="text-sm text-[#81754B] leading-relaxed pl-7">
                    Frequent symptoms include lightheadedness, dizziness, generalized weakness, uncharacteristic fatigue, blurred vision, nausea, and difficulty concentrating. In severe cases or upon standing up rapidly, fainting (syncope) may occur.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] space-y-2 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                    How does Ayurveda approach the management of low blood pressure?
                  </h3>
                  <p className="text-sm text-[#81754B] leading-relaxed pl-7">
                    Ayurveda views health through an individualized lens, assessing your unique physical constitution (Prakriti), metabolic fire (Agni), and circulation (Rasavaha Srotas). Rather than offering a one-size-fits-all remedy, Ayurvedic practitioners identify the root imbalance and recommend tailored dietary adjustments, digestive support, restorative routines, and specific traditional preparations.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] space-y-2 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                    When should someone seek urgent emergency medical attention for low blood pressure?
                  </h3>
                  <p className="text-sm text-[#81754B] leading-relaxed pl-7">
                    Emergency medical evaluation is crucial if low blood pressure is accompanied by sudden severe dizziness, fainting, mental confusion, cold and clammy skin, rapid shallow breathing, blue-tinged skin, chest pain, or difficulty breathing.
                  </p>
                </div>
              </div>
            </section>

          </article>

          {/* ============================================================ */}
          {/* SIDEBAR                                                      */}
          {/* ============================================================ */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Consultation Quick Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DBCFA8] shadow-sm space-y-5 sticky top-24">
              <div className="space-y-1 border-b border-[#DBCFA8]/70 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#517B32]">
                  Personalised Care
                </span>
                <h3 className="font-heading text-xl font-bold text-[#66371B]">
                  Experiencing Recurring Dizziness or Low BP?
                </h3>
                <p className="text-xs text-[#81754B] leading-relaxed">
                  Consult our senior Ayurvedic physicians for an authentic evaluation and holistic care plan.
                </p>
              </div>

              <div className="space-y-3 text-xs text-[#402816]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                  <span>Comprehensive Prakriti &amp; Pulse assessment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                  <span>Personalised dietary &amp; hydration regimen</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                  <span>In-house classical GMP herbal care</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/patient-care/consultation"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#517B32] hover:bg-[#3D5C26] text-white py-3 text-xs font-bold shadow-sm transition-all"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </Link>

                <a
                  href="https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20my%20low%20blood%20pressure%20symptoms."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 text-xs font-bold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

              {/* Direct Hospital Contact */}
              <div className="pt-4 border-t border-[#DBCFA8]/70 text-center space-y-1">
                <p className="text-[11px] text-[#81754B]">Direct Hospital Helplines:</p>
                <a href="tel:+919846992789" className="font-bold text-xs text-[#2B1A0E] block hover:text-[#517B32]">
                  +91 98469 92789
                </a>
                <div className="text-[11px] text-[#81754B] space-x-2">
                  <a href="tel:+914822229434" className="hover:underline">+91 4822 229434</a>
                  <span>•</span>
                  <a href="tel:+914822229435" className="hover:underline">+91 4822 229435</a>
                </div>
              </div>

              {/* Hospital Credentials Pill */}
              <div className="p-3 rounded-2xl bg-[#F7F1E1] border border-[#DBCFA8]/50 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#B4833D]">
                  Omshree Sidha Hospital
                </p>
                <p className="text-[10px] text-[#81754B]">
                  Healing Since 1880 • Vayala, Kottayam, Kerala
                </p>
              </div>
            </div>

            {/* Related Articles Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#DBCFA8] shadow-sm space-y-4">
              <h4 className="font-heading font-bold text-base text-[#66371B] border-b border-[#DBCFA8]/70 pb-3">
                Related Health Articles
              </h4>
              <ul className="space-y-3.5 text-xs">
                <li>
                  <Link
                    href="/blog/what-is-ejection-fraction-and-what-does-it-tell-you-about-heart-function"
                    className="font-medium text-[#2B1A0E] hover:text-[#517B32] transition-colors block leading-snug"
                  >
                    What Is Ejection Fraction and What Does It Tell You About Heart Function?
                  </Link>
                  <span className="text-[10px] text-[#81754B] block mt-0.5">Cardiology Care</span>
                </li>
                <li>
                  <Link
                    href="/blog/what-is-an-echocardiogram"
                    className="font-medium text-[#2B1A0E] hover:text-[#517B32] transition-colors block leading-snug"
                  >
                    What Is an Echocardiogram? A Patient-Friendly Guide to Your Echo Report
                  </Link>
                  <span className="text-[10px] text-[#81754B] block mt-0.5">Diagnostics</span>
                </li>
                <li>
                  <Link
                    href="/blog/how-to-stop-snoring-naturally-without-surgery"
                    className="font-medium text-[#2B1A0E] hover:text-[#517B32] transition-colors block leading-snug"
                  >
                    How to Stop Snoring Naturally Without Surgery: Causes &amp; Remedies
                  </Link>
                  <span className="text-[10px] text-[#81754B] block mt-0.5">Sleep &amp; Respiration</span>
                </li>
                <li>
                  <Link
                    href="/blog/why-do-i-get-migraines"
                    className="font-medium text-[#2B1A0E] hover:text-[#517B32] transition-colors block leading-snug"
                  >
                    Why Do I Get Migraines? Common Triggers &amp; Ayurvedic Solutions
                  </Link>
                  <span className="text-[10px] text-[#81754B] block mt-0.5">Neurological Health</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </section>
    </div>
  );
}
