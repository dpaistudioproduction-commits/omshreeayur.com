import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Stethoscope,
  Info,
  Clock,
  MessageCircle,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Osteoarthritis and Knee Pain: Ayurvedic Assessment and Care in Kerala",
  description:
    "Explore knee osteoarthritis causes, symptoms, supportive lifestyle practices, and realistic Ayurvedic complementary care at Omshree Sidha Hospital in Kerala.",
  alternates: {
    canonical: "https://www.omshreeayur.com/blog/osteoarthritis-and-knee-pain",
  },
  openGraph: {
    title: "Osteoarthritis and Knee Pain: Ayurvedic Assessment and Care in Kerala",
    description:
      "A clinical, patient-friendly guide to knee osteoarthritis symptoms, causes, diagnosis, exercise, and complementary Ayurvedic care without replacing medical treatments.",
    url: "https://www.omshreeayur.com/blog/osteoarthritis-and-knee-pain",
    siteName: "Omshree Sidha Hospital",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.omshreeayur.com/images/blog/osteoarthritis-knee-pain-hero.jpg",
        width: 1000,
        height: 631,
        alt: "Osteoarthritis and Knee Pain - Ayurvedic Assessment and Care in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osteoarthritis and Knee Pain: Ayurvedic Assessment and Care in Kerala",
    description:
      "Understanding knee osteoarthritis, gentle exercises, weight management, and complementary Ayurvedic joint care alongside medical treatment.",
    images: ["https://www.omshreeayur.com/images/blog/osteoarthritis-knee-pain-hero.jpg"],
  },
};

export default function OsteoarthritisBlogPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://www.omshreeayur.com/blog/osteoarthritis-and-knee-pain#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.omshreeayur.com/blog/osteoarthritis-and-knee-pain"
        },
        "headline": "Osteoarthritis and Knee Pain: Ayurvedic Assessment and Care in Kerala",
        "description": "Knee pain can make everyday activities difficult. Understand knee osteoarthritis, evidence-based management, and realistic Ayurvedic complementary care.",
        "image": "https://www.omshreeayur.com/images/blog/osteoarthritis-knee-pain-hero.jpg",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://www.omshreeayur.com/blog/osteoarthritis-and-knee-pain",
        "datePublished": "2026-11-15T00:00:00+05:30",
        "dateModified": "2026-11-15T00:00:00+05:30",
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
            "name": "Knee Osteoarthritis",
            "alternateName": "Sandhivata",
            "signOrSymptom": [
              { "@type": "MedicalSignOrSymptom", "name": "Pain in or around the knee" },
              { "@type": "MedicalSignOrSymptom", "name": "Stiffness after resting" },
              { "@type": "MedicalSignOrSymptom", "name": "Swelling around the knee joint" },
              { "@type": "MedicalSignOrSymptom", "name": "Reduced joint flexibility" },
              { "@type": "MedicalSignOrSymptom", "name": "Clicking or grinding sensation" }
            ],
            "possibleTreatment": [
              {
                "@type": "MedicalTherapy",
                "name": "Physiotherapy & Strengthening Exercises"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Weight Management and Activity Modification"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Complementary Ayurvedic Joint Care (Janu Basti, Kizhi)"
              }
            ]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.omshreeayur.com/blog/osteoarthritis-and-knee-pain#breadcrumb",
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
            "name": "Osteoarthritis and Knee Pain",
            "item": "https://www.omshreeayur.com/blog/osteoarthritis-and-knee-pain"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.omshreeayur.com/blog/osteoarthritis-and-knee-pain#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can Ayurveda cure knee osteoarthritis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is insufficient reliable evidence to establish that Ayurveda can cure osteoarthritis or reverse joint damage. Some studies have investigated Ayurvedic approaches for symptom management, but further research is needed."
            }
          },
          {
            "@type": "Question",
            "name": "Is knee pain always caused by osteoarthritis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Knee pain may also result from injuries, tendon problems, inflammation, infections, or other conditions. A proper assessment is important."
            }
          },
          {
            "@type": "Question",
            "name": "Is walking good for knee osteoarthritis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Suitable physical activity can be beneficial. Walking may be appropriate for many people, but the amount and type of exercise should be adjusted according to symptoms and physical ability."
            }
          },
          {
            "@type": "Question",
            "name": "Can weight loss help knee pain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For people who are overweight or obese, weight loss may improve pain and physical function. A gradual and sustainable approach is recommended."
            }
          },
          {
            "@type": "Question",
            "name": "Are Ayurvedic herbal medicines safe for knee pain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not all herbal preparations are safe for everyone. Some may interact with medicines or contain harmful contaminants. Discuss products with qualified healthcare professionals before use."
            }
          },
          {
            "@type": "Question",
            "name": "When should knee osteoarthritis be assessed by a specialist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consult a healthcare professional if pain persists, limits daily activities, or does not improve with appropriate management. Severe symptoms may require further evaluation and consideration of additional treatment options."
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
                  <span className="text-white font-medium">Osteoarthritis &amp; Knee Pain</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider">
                Musculoskeletal Health &amp; Kerala Ayurveda
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6F9940]" /> 9 min read
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-[#6F9940]" /> Evidence-Based Clinical Resource
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F1E1] leading-tight">
              Osteoarthritis and Knee Pain: Ayurvedic Assessment and Care in Kerala
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-8">
              Knee pain can make everyday activities difficult. Walking, climbing stairs, getting up from a chair, or standing for long periods may become uncomfortable. While knee osteoarthritis cannot always be reversed, appropriate care may help manage pain, improve movement, and support daily function.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="w-full sm:w-auto"
              >
                Discuss Knee Care With Our Doctors
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
                src="/images/blog/osteoarthritis-knee-pain-hero.jpg"
                alt="Osteoarthritis and Knee Pain: Ayurvedic Assessment and Care in Kerala"
                width={1000}
                height={631}
                className="w-full h-auto object-cover max-h-[500px]"
                priority
              />
              <div className="p-4 bg-[#F7F1E1]/60 text-xs text-[#81754B] italic border-t border-[#DBCFA8]/50">
                Figure 1: Thorough clinical assessment, gentle joint strengthening, weight moderation, and classical Ayurvedic therapies support long-term knee mobility and comfort.
              </div>
            </div>

            {/* Quick Summary / Answer Engine Optimization (AEO) Callout */}
            <div className="bg-[#E3D8C1]/40 border-l-4 border-[#517B32] p-6 sm:p-8 rounded-r-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#517B32] font-bold text-sm uppercase tracking-wider">
                <Info className="w-5 h-5 shrink-0" />
                Quick Answer: Can Ayurveda Help with Knee Osteoarthritis?
              </div>
              <p className="text-[#402816] text-base sm:text-lg leading-relaxed font-normal">
                <strong>Ayurveda can be considered as a supportive, complementary approach</strong> for knee osteoarthritis by addressing joint stiffness, muscular support, and functional mobility. In classical Ayurveda, joint degeneration is viewed through concepts such as <em>Sandhivata</em>. However, <strong>current scientific evidence does not establish that Ayurveda can reverse cartilage loss or permanently cure osteoarthritis</strong>. Responsible care focuses on pain relief, range-of-motion enhancement, lifestyle modifications, and close coordination with your treating medical doctor or physiotherapist.
              </p>
            </div>

            {/* Intro Content */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
              <p>
                Knee pain can make everyday activities difficult. Walking, climbing stairs, getting up from a chair, or standing for long periods may become uncomfortable. For many adults, one possible cause is osteoarthritis of the knee.
              </p>
              <p>
                Osteoarthritis is a long-term joint condition that can affect mobility and quality of life. While it cannot always be reversed, appropriate care may help manage pain, improve movement, and support daily activities.
              </p>
              <p>
                At <strong>Omshree Sidha Hospital</strong>, patients interested in Ayurveda are encouraged to seek an individual assessment and understand the available treatment options. This article explains knee osteoarthritis, its symptoms, supportive care, and important considerations when exploring Ayurveda.
              </p>
            </div>

            {/* Section: What Is Knee Osteoarthritis? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  What Is Knee Osteoarthritis?
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Knee osteoarthritis is a condition in which the structures within the knee joint undergo changes over time. The joint may become painful and stiff, and movement can become more difficult.
                </p>
                <p>
                  Osteoarthritis is not simply a result of old age. It can affect people at different stages of life, although it is more common as people get older.
                </p>
                <p>
                  Common symptoms include:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <Activity className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Pain in or Around the Knee</strong>
                    <span className="text-sm text-[#402816]">Aching during or following movement, load-bearing, or extended walking.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <Clock className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Joint Stiffness</strong>
                    <span className="text-sm text-[#402816]">Noticeable tightness especially after waking or sitting for long periods.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <ShieldAlert className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Stair &amp; Walking Discomfort</strong>
                    <span className="text-sm text-[#402816]">Pronounced strain when ascending, descending stairs, or traversing slopes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <AlertCircle className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Swelling Around the Joint</strong>
                    <span className="text-sm text-[#402816]">Mild soft-tissue swelling or fluid accumulation after joint exertion.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <Activity className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Reduced Flexibility</strong>
                    <span className="text-sm text-[#402816]">Difficulty bending the knee completely, squatting, or kneeling down.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs">
                  <AlertCircle className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Difficulty Standing Up</strong>
                    <span className="text-sm text-[#402816]">Struggling or needing arm support to rise from low chairs or the floor.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#DBCFA8] shadow-2xs sm:col-span-2">
                  <Info className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#66371B] block">Grinding or Clicking Sensation (Crepitus)</strong>
                    <span className="text-sm text-[#402816]">An audible or tactile crunching sensation during knee flexion and extension.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Symptoms may vary. Some people experience mild discomfort, while others have significant difficulty with daily activities.
                </p>
              </div>
            </section>

            {/* Section: What Causes Knee Pain and Osteoarthritis? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  What Causes Knee Pain and Osteoarthritis?
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                Several factors may contribute to knee osteoarthritis:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Factor 01</span>
                  <h3 className="font-bold text-[#66371B] text-base">Age</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">The likelihood of osteoarthritis increases with age, but age alone does not determine whether someone will develop the condition.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Factor 02</span>
                  <h3 className="font-bold text-[#66371B] text-base">Previous Knee Injury</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">An earlier injury, such as a ligament tear, meniscus injury, or fracture involving the joint, may increase the risk of osteoarthritis later.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Factor 03</span>
                  <h3 className="font-bold text-[#66371B] text-base">Body Weight</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Excess body weight increases mechanical load on the joint. Gradual weight management can significantly reduce load and symptoms.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Factor 04</span>
                  <h3 className="font-bold text-[#66371B] text-base">Repeated Joint Stress</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Occupations or sports involving frequent kneeling, heavy manual lifting, or repetitive joint loading can accelerate mechanical wear.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] shadow-2xs space-y-1.5 sm:col-span-2 md:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">Factor 05</span>
                  <h3 className="font-bold text-[#66371B] text-base">Family History &amp; Genetics</h3>
                  <p className="text-xs text-[#81754B] leading-relaxed">Genetic inheritance and structural cartilage characteristics may influence an individual’s likelihood of developing osteoarthritis.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F1E1] rounded-xl border border-[#DBCFA8] text-sm text-[#402816] leading-relaxed">
                <p>
                  <strong>Clinical note:</strong> Not all knee pain is caused by osteoarthritis. A proper medical assessment is essential to identify the actual cause, rule out ligament injuries, bursitis, or inflammatory arthritis, and determine appropriate care.
                </p>
              </div>
            </section>

            {/* Section: How Is Knee Osteoarthritis Diagnosed? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  How Is Knee Osteoarthritis Diagnosed?
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  A healthcare professional evaluates the knee through a systematic clinical assessment, which may include:
                </p>
              </div>

              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Pain evaluation:</strong> Reviewing the specific location, duration, and mechanical triggers of the knee pain.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Joint stiffness &amp; swelling checks:</strong> Checking for morning stiffness duration and signs of joint effusion.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Gait and mobility assessment:</strong> Observing walking pattern, knee stability, and passive/active range of motion.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Medical history:</strong> Reviewing previous trauma, occupational load, metabolic conditions, and family patterns.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#DBCFA8]">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Functional impact:</strong> Gauging how symptoms affect independent mobility, stair climbing, and work routines.
                  </span>
                </li>
              </ul>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Imaging such as an X-ray may be recommended when clinically appropriate. Knee osteoarthritis can often be assessed based on symptoms and physical examination, and imaging is not always necessary.
                </p>
                <p className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm sm:text-base text-amber-900 leading-relaxed font-medium">
                  <strong>Urgent medical caution:</strong> Sudden severe knee pain, a hot or very swollen joint, fever, or inability to bear weight requires prompt medical evaluation. These symptoms may indicate an infection, fracture, or acute gout rather than routine osteoarthritis.
                </p>
              </div>
            </section>

            {/* Section: Understanding Ayurveda and Knee Pain */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Understanding Ayurveda and Knee Pain
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Ayurveda is a traditional healthcare system that considers individual health, lifestyle, diet, and physiological constitution (<em>Prakriti</em>) during assessment.
                </p>
                <p>
                  In Ayurvedic practice, joint-related symptoms may be considered through traditional concepts such as <em>Sandhivata</em> (degeneration of bone and joint structures associated with aggravated Vata dosha and depletion of natural lubricating fluids, known as <em>Shleshaka Kapha</em>).
                </p>
                <p>
                  These traditional concepts do not map perfectly onto modern medical diagnoses.
                </p>
                <p>
                  Some people explore Ayurveda as a complementary approach for managing joint discomfort. However, the scientific evidence for Ayurvedic treatments varies, and available research does not establish that Ayurveda can reverse joint damage or cure osteoarthritis.
                </p>
                <p>
                  A responsible treatment approach should include appropriate assessment, clear discussion of possible benefits and risks, and coordination with the patient’s other healthcare providers.
                </p>
              </div>
            </section>

            {/* Section: Can Ayurvedic Care Be Considered for Knee Osteoarthritis? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Can Ayurvedic Care Be Considered for Knee Osteoarthritis?
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Patients may wish to discuss Ayurvedic care with a qualified practitioner. Treatment decisions should be based on the person’s symptoms, health history, mobility, medications, and clinical needs.
                </p>
                <p>
                  A consultation may include discussion of:
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DBCFA8] shadow-2xs space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Knee pain &amp; daily limitations:</strong> Understanding morning stiffness, pain severity, and mobility challenges.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Previous medical diagnoses &amp; treatments:</strong> Reviewing existing orthopaedic evaluations, injections, or scans.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Existing medicines &amp; supplements:</strong> Identifying all pharmaceutical drugs to prevent potential interactions.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Lifestyle &amp; dietary habits:</strong> Assessing daily physical load, footwear, hydration, and nutritional patterns.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Suitable supportive practices:</strong> Evaluating whether traditional external therapies (such as <em>Janu Basti</em> or herbal warm poultices) are appropriate.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#402816]">
                    <strong>Need for medical or physiotherapy evaluation:</strong> Determining when concurrent orthopaedic or physical therapy care is required.
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Some Ayurvedic approaches may involve traditional therapies or herbal preparations. Their suitability should be assessed individually.
                </p>
                <p>
                  Patients should ask about the ingredients, possible side effects, and interactions of any herbal product. Some Ayurvedic preparations have been found to contain potentially toxic metals when obtained from unstandardized sources.
                </p>
              </div>

              <div className="p-5 bg-amber-50/90 border border-amber-300 rounded-2xl text-[#402816] space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-amber-700" />
                  <span>Important Medical Continuity Notice</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed font-semibold text-[#66371B]">
                  Do not stop prescribed medicines, physiotherapy, or recommended medical care without discussing the change with your treating healthcare professional.
                </p>
              </div>
            </section>

            {/* Section: What Can Help Manage Knee Osteoarthritis? */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  What Can Help Manage Knee Osteoarthritis?
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                Evidence-based osteoarthritis care commonly includes exercise, education, and weight management when appropriate. Treatment should be tailored to the individual:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">1</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Gentle, Regular Exercise</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    Appropriate exercise can help strengthen the muscles around the knee and support mobility. Depending on the individual’s condition, a clinician or physiotherapist may recommend muscle-strengthening exercises, walking on a suitable flat surface, stationary cycling, water-based exercise, or gentle range-of-motion activities. Exercise may cause some initial discomfort, but a gradual programme is beneficial. Avoid pushing through severe or worsening pain.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">2</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Weight Management</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    For people who are overweight or obese, gradual weight loss may help reduce knee pain and improve physical function by lowering the mechanical load across joint surfaces. A sustainable approach is generally more suitable than rapid weight loss. Patients can seek guidance from a healthcare professional or dietitian.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">3</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Balanced Nutrition</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    A balanced diet supports overall health. Include a variety of vegetables, fruits, whole grains, protein sources, and other nutritious foods. There is no single food or diet proven to cure knee osteoarthritis. Be cautious of claims that a specific food or supplement can rebuild cartilage.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">4</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Appropriate Pain Management</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    A doctor may recommend medicines or other approaches depending on the person’s symptoms and medical history. Some pain-relieving medicines (such as oral NSAIDs) may not be suitable for people with certain kidney, stomach, liver, or cardiovascular conditions. Seek professional advice before starting medication.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">5</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Activity Modification</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    Patients may benefit from pacing activities and taking breaks when needed. For example, avoid prolonged standing if it worsens symptoms, use suitable cushioned footwear, take care when climbing stairs, avoid sudden increases in physical activity, and discuss walking aids with a healthcare professional if needed.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] shadow-2xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#517B32] text-white text-xs font-bold">6</span>
                    <h3 className="font-heading font-bold text-lg text-[#66371B]">Follow-Up and Monitoring</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-10">
                    Knee osteoarthritis can change over time. Follow-up helps assess pain, mobility, and whether the treatment plan remains appropriate. If symptoms worsen or the current plan is not helping, seek further medical advice.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: When Should You Consult a Doctor for Knee Pain? (Red Flags) */}
            <section className="space-y-6 pt-2">
              <div className="bg-[#FFF5F5] border-2 border-red-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-red-700 block mb-1">
                      Clinical Safety Notice
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-red-950">
                      When Should You Consult a Doctor for Knee Pain?
                    </h2>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#402816] leading-relaxed">
                  Consider seeking professional medical evaluation if you experience any of the following:
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-950 font-medium">Knee pain persists or repeatedly returns</span>
                  </div>

                  <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-950 font-medium">Pain interferes with walking, daily tasks, or sleep</span>
                  </div>

                  <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-950 font-medium">You experience ongoing stiffness or joint swelling</span>
                  </div>

                  <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-950 font-medium">You have progressive difficulty climbing stairs</span>
                  </div>

                  <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-950 font-medium">Your knee feels unstable, buckles, or gives way</span>
                  </div>

                  <div className="p-3.5 bg-white/90 rounded-xl border border-red-200 flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-950 font-medium">You need pain medication frequently to function</span>
                  </div>
                </div>

                <div className="p-4 bg-red-100/70 border border-red-300/80 rounded-2xl text-red-950 text-sm sm:text-base leading-relaxed font-semibold">
                  Seek urgent medical care if the knee becomes suddenly very painful, hot, or markedly swollen, particularly with fever, or if you cannot put weight on the leg.
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
                      1. Can Ayurveda cure knee osteoarthritis?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      There is insufficient reliable evidence to establish that Ayurveda can cure osteoarthritis or reverse joint damage. Some studies have investigated Ayurvedic approaches for symptom management, but further research is needed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      2. Is knee pain always caused by osteoarthritis?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      No. Knee pain may also result from injuries, tendon problems, inflammation, infections, or other conditions. A proper assessment is important.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      3. Is walking good for knee osteoarthritis?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Suitable physical activity can be beneficial. Walking may be appropriate for many people, but the amount and type of exercise should be adjusted according to symptoms and physical ability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      4. Can weight loss help knee pain?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      For people who are overweight or obese, weight loss may improve pain and physical function. A gradual and sustainable approach is recommended.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      5. Are Ayurvedic herbal medicines safe for knee pain?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Not all herbal preparations are safe for everyone. Some may interact with medicines or contain harmful contaminants. Discuss products with qualified healthcare professionals before use.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-2xs">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      6. When should knee osteoarthritis be assessed by a specialist?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Consult a healthcare professional if pain persists, limits daily activities, or does not improve with appropriate management. Severe symptoms may require further evaluation and consideration of additional treatment options.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section: Explore Individualized Care at Omshree Sidha Hospital */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Explore Individualized Care at Omshree Sidha Hospital
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Knee pain can affect many aspects of daily life. Understanding its cause and choosing appropriate care are important steps toward managing symptoms and maintaining mobility.
                </p>
                <p>
                  If you are considering Ayurveda as part of your healthcare, consult a qualified practitioner and share your medical history, current medicines, and previous treatments.
                </p>
                <p>
                  At <strong>Omshree Sidha Hospital</strong>, patients are encouraged to make informed decisions and seek appropriate medical guidance for their individual needs.
                </p>
              </div>

              {/* Consultation Callout Banner */}
              <div className="bg-[#402816] text-[#F7F1E1] p-8 sm:p-10 rounded-3xl relative overflow-hidden space-y-6 border border-[#81754B]/30 shadow-lg">
                <div className="relative z-10 space-y-3">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#517B32] text-white text-xs font-bold uppercase tracking-wider">
                    Individual Clinical Assessment
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F1E1]">
                    Discuss Your Knee Health With Our Medical Team
                  </h3>
                  <p className="text-base text-[#E3D8C1] max-w-2xl font-light">
                    Consult our qualified Ayurvedic physicians (BAMS) for personalized evaluation, joint mobility guidance, and supportive therapies coordinated with your healthcare providers.
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
              This article is intended for general educational purposes only. It does not replace medical diagnosis, treatment, or advice from a qualified healthcare professional. Treatment outcomes vary from person to person. Please seek appropriate medical care for persistent, severe, or sudden knee pain.
            </div>

          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* Quick Consultation Card */}
              <Card className="border-[#DBCFA8] shadow-md bg-white rounded-2xl overflow-hidden">
                <div className="bg-[#517B32] text-white p-5 text-center">
                  <h3 className="font-heading font-bold text-xl">
                    Need Knee Pain Guidance?
                  </h3>
                  <p className="text-white/80 text-xs mt-1">
                    Connect with our Ayurvedic physicians
                  </p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed">
                    Get individualized guidance on joint care, gentle strengthening routines, and classical Kerala Ayurvedic therapies.
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
                      <span><strong>140+ Years Heritage:</strong> Unbroken clinical lineage in classical Kerala Ayurveda.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>Qualified Physicians:</strong> Senior BAMS doctors conducting comprehensive clinical assessments.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>GMP Pharmacy:</strong> Classical medicated oils and decoctions produced in-house.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>Responsible Ethics:</strong> Evidence-guided complementary care without false cure claims.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Related Musculoskeletal Resources */}
              <Card className="border-[#DBCFA8] shadow-2xs bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#66371B]">
                    Related Joint Care Resources
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/conditions/musculoskeletal"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Musculoskeletal Conditions Hub</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/treatments/osteoarthritis-knee-pain"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Osteoarthritis &amp; Knee Pain Treatment</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/treatments/rheumatoid-arthritis"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Rheumatoid Arthritis Management</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/treatments/sciatica"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Sciatica &amp; Nerve Pain Care</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/treatments/cervical-lumbar-spondylosis"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Spondylosis &amp; Spine Health</span>
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
