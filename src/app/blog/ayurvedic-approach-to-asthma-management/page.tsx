import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wind,
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Stethoscope,
  Info,
  Clock,
  MessageCircle,
  AlertCircle,
  Sparkles,
  Moon,
  Activity,
  Utensils,
  Home
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asthma Management: Ayurvedic Insights and Lifestyle Guidance",
  description:
    "Learn how Ayurveda traditionally views asthma, along with practical dietary and lifestyle guidance for managing triggers and supporting respiratory wellness.",
  alternates: {
    canonical: "https://www.omshreeayur.com/blog/ayurvedic-approach-to-asthma-management",
  },
  openGraph: {
    title: "Asthma Management: Ayurvedic Insights and Lifestyle Guidance",
    description:
      "Learn how Ayurveda traditionally views asthma, along with practical dietary and lifestyle guidance for managing triggers and supporting respiratory wellness.",
    url: "https://www.omshreeayur.com/blog/ayurvedic-approach-to-asthma-management",
    siteName: "Omshree Sidha Hospital",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.omshreeayur.com/images/blog/ayurvedic-approach-to-asthma-management-hero.jpg",
        width: 1024,
        height: 682,
        alt: "Ayurvedic Approach to Asthma: Natural Remedies and Supportive Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asthma Management: Ayurvedic Insights and Lifestyle Guidance",
    description:
      "Learn how Ayurveda traditionally views asthma, along with practical dietary and lifestyle guidance for managing triggers and supporting respiratory wellness.",
    images: ["https://www.omshreeayur.com/images/blog/ayurvedic-approach-to-asthma-management-hero.jpg"],
  },
};

export default function AyurvedicApproachToAsthmaManagementPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://www.omshreeayur.com/blog/ayurvedic-approach-to-asthma-management#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.omshreeayur.com/blog/ayurvedic-approach-to-asthma-management"
        },
        "headline": "Ayurvedic Approach to Asthma: Natural Remedies and Supportive Care",
        "description": "Learn how Ayurveda traditionally views asthma, along with practical dietary and lifestyle guidance for managing triggers and supporting respiratory wellness.",
        "image": "https://www.omshreeayur.com/images/blog/ayurvedic-approach-to-asthma-management-hero.jpg",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://www.omshreeayur.com/blog/ayurvedic-approach-to-asthma-management",
        "datePublished": "2026-11-18T00:00:00+05:30",
        "dateModified": "2026-11-18T00:00:00+05:30",
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
            "alternateName": "Shwasa Roga",
            "signOrSymptom": [
              { "@type": "MedicalSignOrSymptom", "name": "Wheezing" },
              { "@type": "MedicalSignOrSymptom", "name": "Coughing" },
              { "@type": "MedicalSignOrSymptom", "name": "Chest tightness" },
              { "@type": "MedicalSignOrSymptom", "name": "Shortness of breath" }
            ],
            "possibleTreatment": [
              {
                "@type": "MedicalTherapy",
                "name": "Ayurvedic Asthma Management and Supportive Care"
              }
            ]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.omshreeayur.com/blog/ayurvedic-approach-to-asthma-management#breadcrumb",
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
            "name": "Ayurvedic Approach to Asthma Management",
            "item": "https://www.omshreeayur.com/blog/ayurvedic-approach-to-asthma-management"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.omshreeayur.com/blog/ayurvedic-approach-to-asthma-management#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the commonly discussed Ayurvedic remedies for asthma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional Ayurvedic approaches may include practitioner-guided herbal formulations, dietary adjustments, and selected therapies based on individual health assessments."
            }
          },
          {
            "@type": "Question",
            "name": "Can Ayurveda cure asthma permanently?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Proper Ayurvedic treatment may help relieve the symptoms. However, recovery time can vary from person to person, and in some cases, it may take longer depending on the condition and treatment approach."
            }
          },
          {
            "@type": "Question",
            "name": "Which foods should asthma patients avoid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is no universal list. Avoid foods that trigger confirmed allergies or individual sensitivities, and seek professional dietary guidance."
            }
          },
          {
            "@type": "Question",
            "name": "Can Ayurvedic treatment be used alongside asthma inhalers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Possibly, but consult your treating doctor and a qualified Ayurvedic practitioner to check safety and potential interactions before combining treatments."
            }
          },
          {
            "@type": "Question",
            "name": "What should I consider before choosing an Ayurvedic approach to asthma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check the practitioner's qualifications, discuss your medical history, review potential medicine interactions, and ensure prescribed asthma treatment continues without interruption."
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
                  <span className="text-white font-medium">Ayurvedic Approach to Asthma</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider">
                Respiratory Wellness &amp; Ayurveda
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6F9940]" /> 6 min read
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-[#6F9940]" /> Clinical Lifestyle Guide
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F1E1] leading-tight">
              Ayurvedic Approach to Asthma: Natural Remedies and Supportive Care
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-8">
              Learn how Ayurveda traditionally views asthma through the concept of <em>Shwasa Roga</em>, along with practical dietary and lifestyle guidance for managing triggers and supporting respiratory wellness.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="w-full sm:w-auto"
              >
                Consult Our Respiratory Physicians
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
                src="/images/blog/ayurvedic-approach-to-asthma-management-hero.jpg"
                alt="Ayurvedic Approach to Asthma: Natural Remedies and Supportive Care"
                width={1024}
                height={682}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="p-4 bg-[#F7F1E1]/60 text-xs text-[#81754B] italic border-t border-[#DBCFA8]/50">
                Figure 1: Integrating personalised Ayurvedic dietary and lifestyle guidance with prescribed respiratory care supports everyday breathing comfort and trigger management.
              </div>
            </div>

            {/* Intro Content */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
              <p>
                Asthma is a chronic respiratory condition that affects the airways. It causes symptoms such as wheezing, coughing, chest tightness, and shortness of breath. Many people are exploring traditional approaches and lifestyle changes for asthma.{" "}
                <Link
                  href="/treatments/asthma-treatment"
                  className="text-[#517B32] font-semibold underline hover:text-[#66371B] transition-colors"
                >
                  Asthma ayurvedic remedies
                </Link>{" "}
                are among the approaches people consider, often involving personalised assessments, dietary guidance, and selected traditional therapies.
              </p>
            </div>

            {/* Section 1: Understanding Asthma From an Ayurvedic Perspective */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Understanding Asthma From an Ayurvedic Perspective
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Asthma causes the airways to become inflamed and narrowed, making breathing difficult. Symptoms may vary from person to person and can become worse when exposed to certain triggers. Common triggers include dust, pollen, smoke, respiratory infections, and cold air. Identifying these triggers is an important part of managing the condition.
                </p>
                <p>
                  In Ayurveda, breathing difficulties associated with asthma are traditionally discussed under the concept of <em>Shwasa Roga</em>. This traditional framework considers factors such as an individual&apos;s constitution, digestion, symptoms, daily habits, and environmental influences when planning care.
                </p>

                <div className="bg-[#E3D8C1]/40 border-l-4 border-[#517B32] p-5 sm:p-6 rounded-r-2xl space-y-2">
                  <div className="flex items-center gap-2 text-[#517B32] font-bold text-xs uppercase tracking-wider">
                    <Info className="w-4 h-4 shrink-0" />
                    Understanding Traditional &amp; Modern Frameworks
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed">
                    Unlike modern medicine, which explains asthma through airway inflammation and increased sensitivity, Ayurveda approaches respiratory health through its own traditional principles. These are different frameworks and should not be confused with scientifically established causes of asthma.
                  </p>
                </div>

                <p>
                  An individualised approach to{" "}
                  <Link
                    href="/treatments/asthma-treatment"
                    className="text-[#517B32] font-semibold underline hover:text-[#66371B] transition-colors"
                  >
                    asthma disease treatment
                  </Link>{" "}
                  is important because symptoms, triggers, and treatment requirements differ. Understanding these differences helps healthcare professionals develop a management plan suited to each person&apos;s needs.
                </p>
              </div>
            </section>

            {/* Section 2: Asthma Ayurvedic Remedies and Traditional Supportive Therapies */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Asthma Ayurvedic Remedies and Traditional Supportive Therapies
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Asthma ayurvedic remedies may involve traditional herbal formulations, dietary adjustments, lifestyle modifications, and selected therapies based on an individual&apos;s assessment. The aim is generally to support overall well-being and address individual health concerns through a personalised approach.
                </p>
                <p>
                  In traditional Ayurvedic practice, certain formulations and respiratory-supportive therapies are discussed for people experiencing breathing difficulties. Herbal medicines require careful consideration. Consulting a qualified Ayurvedic practitioner and informing your treating doctor before starting any formulation is essential.
                </p>
                <p>
                  At{" "}
                  <Link
                    href="/"
                    className="text-[#517B32] font-semibold underline hover:text-[#66371B] transition-colors"
                  >
                    Omshree Sidha Hospital (Multi-speciality Ayurveda Hospital)
                  </Link>
                  , the approach to asthma care involves individual assessment and treatment planning based on the person&apos;s condition. Those interested in understanding our approach can explore the{" "}
                  <Link
                    href="/treatments/asthma-treatment"
                    className="text-[#517B32] font-semibold underline hover:text-[#66371B] transition-colors"
                  >
                    Ayurvedic asthma treatment page
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 3: Diet and Lifestyle Practices That May Support Asthma Management */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Diet and Lifestyle Practices That May Support Asthma Management
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                Daily habits can influence general respiratory health and help people manage exposure to asthma triggers. Alongside prescribed treatment, a few practical changes may make everyday asthma management easier.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-[#DBCFA8] shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 mt-0.5">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#66371B]">Identify personal triggers</h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed">
                      Reduce exposure to smoke, dust, and known allergens that worsen your symptoms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-[#DBCFA8] shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 mt-0.5">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#66371B]">Maintain a balanced diet</h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed">
                      Identify possible food allergies or sensitivities with appropriate professional guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-[#DBCFA8] shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 mt-0.5">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#66371B]">Keep your surroundings clean</h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed">
                      Maintain a clean sleeping environment and reduce dust mite exposure where relevant.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-[#DBCFA8] shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#66371B]">Stay physically active</h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed">
                      Follow an exercise routine suitable for your asthma control and medical advice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-[#DBCFA8] shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 mt-0.5">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#66371B]">Prioritise sleep</h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed">
                      Maintain regular sleeping habits and follow your prescribed asthma management plan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#F7F1E1] rounded-2xl border border-[#DBCFA8] text-sm sm:text-base text-[#402816] leading-relaxed">
                <p>
                  Ayurveda may also recommend personalised dietary choices and daily routines based on individual health assessments. However, there is no universal asthma diet that works for everyone. Foods such as curd and cold drinks should not automatically be considered asthma triggers. Dietary restrictions are generally necessary only when a specific allergy, sensitivity, or individual trigger has been identified.
                </p>
              </div>
            </section>

            {/* Section 4: How to Choose the Best Asthma Treatment and When to Seek Medical Care? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  How to Choose the Best Asthma Treatment and When to Seek Medical Care?
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Finding the{" "}
                  <Link
                    href="/treatments/asthma-treatment"
                    className="text-[#517B32] font-semibold underline hover:text-[#66371B] transition-colors"
                  >
                    best asthma treatment
                  </Link>{" "}
                  depends on several factors, including symptom severity, how frequently symptoms occur, personal triggers, medical history, and lung function. A qualified healthcare professional should guide diagnosis and ongoing treatment.
                </p>
              </div>

              {/* Emergency Safety Callout */}
              <div className="bg-[#FFF5F5] border-2 border-red-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-red-700 block mb-1">
                      Emergency Warning Signs
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-red-950">
                      When to Seek Immediate Emergency Medical Attention
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/90 rounded-2xl border border-red-200">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-red-950 leading-relaxed font-medium">
                    Severe breathing difficulty, difficulty speaking, blue or grey lips, or rapidly worsening symptoms require immediate emergency medical attention. Do not delay emergency care while trying home remedies.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  For those exploring traditional approaches,{" "}
                  <Link
                    href="/treatments/asthma-treatment"
                    className="text-[#517B32] font-semibold underline hover:text-[#66371B] transition-colors"
                  >
                    Omshree Sidha Hospital&apos;s asthma treatment page
                  </Link>{" "}
                  provides further information about its Ayurvedic care approach.
                </p>
                <p>
                  Managing asthma requires an approach that considers individual symptoms, triggers, and medical needs. Asthma ayurvedic remedies, personalised lifestyle changes, and assessed traditional therapies can offer an effective solution for asthma treatment. Before beginning any new remedy, consult qualified healthcare professionals to ensure it is appropriate and safe. Explore{" "}
                  <Link
                    href="/"
                    className="text-[#517B32] font-semibold underline hover:text-[#66371B] transition-colors"
                  >
                    Omshree Sidha Hospital’s (Multi-speciality Ayurveda Hospital)
                  </Link>{" "}
                  approach to asthma care to learn more about its treatment options.
                </p>
              </div>
            </section>

            {/* Section 5: Frequently Asked Questions */}
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
                      What are the commonly discussed Ayurvedic remedies for asthma?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Traditional Ayurvedic approaches may include practitioner-guided herbal formulations, dietary adjustments, and selected therapies based on individual health assessments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      Can Ayurveda cure asthma permanently?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Proper Ayurvedic treatment may help relieve the symptoms. However, recovery time can vary from person to person, and in some cases, it may take longer depending on the condition and treatment approach.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      Which foods should asthma patients avoid?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      There is no universal list. Avoid foods that trigger confirmed allergies or individual sensitivities, and seek professional dietary guidance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      Can Ayurvedic treatment be used alongside asthma inhalers?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Possibly, but consult your treating doctor and a qualified Ayurvedic practitioner to check safety and potential interactions before combining treatments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      What should I consider before choosing an Ayurvedic approach to asthma?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Check the practitioner&apos;s qualifications, discuss your medical history, review potential medicine interactions, and ensure prescribed asthma treatment continues without interruption.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Consultation Callout Banner */}
            <div className="bg-[#402816] text-[#F7F1E1] p-8 sm:p-10 rounded-3xl relative overflow-hidden space-y-6 border border-[#81754B]/30 shadow-lg">
              <div className="relative z-10 space-y-3">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#517B32] text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Personalised Respiratory Assessment
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F1E1]">
                  Explore Ayurvedic Asthma Care at Omshree Sidha Hospital
                </h3>
                <p className="text-base text-[#E3D8C1] max-w-2xl font-light">
                  Schedule an individual consultation with our qualified Ayurvedic physicians to review your respiratory health history, discuss triggers, and explore safe, tailored care options.
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

          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* Quick Consultation Card */}
              <Card className="border-[#DBCFA8] shadow-md bg-white rounded-2xl overflow-hidden">
                <div className="bg-[#517B32] text-white p-5 text-center">
                  <h3 className="font-heading font-bold text-xl">
                    Need Asthma Guidance?
                  </h3>
                  <p className="text-white/80 text-xs mt-1">
                    Connect with our Ayurvedic physicians
                  </p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed">
                    Receive personalised dietary advice, trigger management guidance, and classical Ayurvedic respiratory care tailored to your health profile.
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
                      <span><strong>140+ Years Heritage:</strong> Unbroken Kerala Ayurvedic lineage since the 1880s.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>Qualified BAMS Physicians:</strong> Individualised clinical evaluation and monitoring.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>In-House GMP Pharmacy:</strong> Authentic, quality-assured classical preparations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>Patient-First Care:</strong> Transparent consultation alongside medical advice.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Related Respiratory Resources */}
              <Card className="border-[#DBCFA8] shadow-2xs bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#66371B]">
                    Related Respiratory Resources
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/treatments/asthma-treatment"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Ayurvedic Asthma Treatment</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/conditions/respiratory"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Respiratory Conditions Hub</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/asthma-and-ayurveda"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Asthma &amp; Ayurveda: Supportive Care Guide</span>
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
