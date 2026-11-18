import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
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
  Brain,
  Moon,
  Utensils,
  Droplets,
  Sun,
  Flame,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Do I Get Migraines? Triggers & Ayurvedic Care | Omshree Ayurveda",
  description:
    "Discover common migraine triggers, symptoms, and lifestyle tips, and learn how Ayurveda may offer complementary support for migraine management.",
  alternates: {
    canonical: "https://www.omshreeayur.com/blog/why-do-i-get-migraines",
  },
  openGraph: {
    title: "Why Do I Get Migraines? Common Triggers and Ayurvedic Solutions",
    description:
      "Discover common migraine triggers, symptoms, and lifestyle tips, and learn how Ayurveda may offer complementary support for migraine management.",
    url: "https://www.omshreeayur.com/blog/why-do-i-get-migraines",
    siteName: "Omshree Sidha Hospital",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.omshreeayur.com/images/blog/why-do-i-get-migraines-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Why Do I Get Migraines? Common Triggers and Ayurvedic Solutions - Omshree Sidha Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Do I Get Migraines? Triggers & Ayurvedic Care",
    description:
      "Discover common migraine triggers, symptoms, and lifestyle tips, and learn how Ayurveda offers personalized, non-invasive support for chronic migraines.",
    images: ["https://www.omshreeayur.com/images/blog/why-do-i-get-migraines-hero.jpg"],
  },
};

export default function MigrainesBlogPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://www.omshreeayur.com/blog/why-do-i-get-migraines#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.omshreeayur.com/blog/why-do-i-get-migraines"
        },
        "headline": "Why Do I Get Migraines? Common Triggers and Ayurvedic Solutions",
        "description": "Discover common migraine triggers, symptoms, and lifestyle tips, and learn how Ayurveda may offer complementary support for migraine management.",
        "image": "https://www.omshreeayur.com/images/blog/why-do-i-get-migraines-hero.jpg",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://www.omshreeayur.com/blog/why-do-i-get-migraines",
        "datePublished": "2026-10-25T00:00:00+05:30",
        "dateModified": "2026-10-25T00:00:00+05:30",
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
            "name": "Migraine",
            "alternateName": "Ardhavabhedaka",
            "possibleTreatment": [
              {
                "@type": "MedicalTherapy",
                "name": "Ayurvedic Treatment for Migraine"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Shirodhara Therapy"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Nasya (Nasal Administration of Medicated Oils)"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Panchakarma Detoxification"
              }
            ]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.omshreeayur.com/blog/why-do-i-get-migraines#breadcrumb",
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
            "name": "Why Do I Get Migraines?",
            "item": "https://www.omshreeayur.com/blog/why-do-i-get-migraines"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.omshreeayur.com/blog/why-do-i-get-migraines#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between a normal headache and a migraine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike standard tension-type headaches that cause a steady, band-like ache, migraines produce intense, pulsating or throbbing pain typically on one side of the head. Migraines are accompanied by neurological symptoms including severe nausea, sensitivity to light (photophobia), sound (phonophobia), visual auras, and dizziness that worsen with routine physical activity."
            }
          },
          {
            "@type": "Question",
            "name": "How does Ayurveda view the root causes of migraine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Ayurveda, migraines are recognized under Shiroroga, specifically Ardhavabhedaka (one-sided headache). It is predominantly driven by aggravated Vata and Pitta doshas. High stress, erratic sleep, and dehydration disturb Vata, while inflammatory food, heat, and acidity aggravate Pitta, obstructing the cranial energy channels (shrotas) and precipitating neurovascular attacks."
            }
          },
          {
            "@type": "Question",
            "name": "Which Ayurvedic therapies are most effective for chronic migraines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Classical therapies include Shirodhara (rhythmic pouring of warm medicated herbal oil on the forehead to soothe the central nervous system), Nasya (instillation of therapeutic herbal oils through the nostrils to clear cranial pathways), Shirolepa (cooling herbal paste applications), and classical Panchakarma detoxification to eliminate deep-seated metabolic toxins (Ama)."
            }
          },
          {
            "@type": "Question",
            "name": "Can dietary changes alone prevent migraine attacks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dietary consistency plays a pivotal role in preventing migraines by avoiding known triggers such as skipped meals, excessive caffeine fluctuations, fermented foods, and dehydration. However, comprehensive recovery often requires balancing daily circadian rhythms, stress levels, and addressing underlying doshic imbalances under qualified Ayurvedic medical guidance."
            }
          },
          {
            "@type": "Question",
            "name": "When should you seek urgent medical attention for a headache?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seek immediate emergency hospital care if you experience a sudden, explosive headache ('thunderclap' headache), head pain accompanied by high fever, stiff neck, slurred speech, confusion, seizures, double vision, numbness, or any headache following a head injury."
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
                  <span className="text-white font-medium">Why Do I Get Migraines?</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider">
                Neurological Wellness &amp; Ayurveda
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6F9940]" /> 8 min read
              </span>
              <span className="text-xs text-[#E3D8C1]/80 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-[#6F9940]" /> Medically Reviewed Clinical Guide
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F1E1] leading-tight">
              Why Do I Get Migraines? Common Triggers and Ayurvedic Solutions
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-8">
              A migraine is far more than a simple headache. The debilitating throbbing pain, sensory hypersensitivity, and nausea can halt your entire routine. Learn why migraines happen, how to decode your personal triggers, and how classical{" "}
              <Link
                href="/treatments/migraine"
                className="text-white font-medium underline hover:text-[#E3D8C1]"
              >
                Ayurvedic treatment for migraine
              </Link>{" "}
              addresses the root neurovascular and metabolic imbalances for sustainable, natural relief.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="w-full sm:w-auto"
              >
                Consult Our Migraine Specialists
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
                src="/images/blog/why-do-i-get-migraines-hero.jpg"
                alt="Why Do I Get Migraines? Common Triggers and Ayurvedic Solutions"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="p-4 bg-[#F7F1E1]/60 text-xs text-[#81754B] italic border-t border-[#DBCFA8]/50">
                Figure 1: Understanding individual triggers—from stress and sleep irregularities to metabolic and hormonal shifts—empowers effective, holistic migraine prevention through classical Ayurvedic medicine.
              </div>
            </div>

            {/* Quick Summary / Answer Engine Optimization (AEO) Callout */}
            <div className="bg-[#E3D8C1]/40 border-l-4 border-[#517B32] p-6 sm:p-8 rounded-r-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#517B32] font-bold text-sm uppercase tracking-wider">
                <Info className="w-5 h-5 shrink-0" />
                Quick Answer: Why Do Migraines Occur and How Does Ayurveda Help?
              </div>
              <p className="text-[#402816] text-base sm:text-lg leading-relaxed font-normal">
                <strong>Migraines occur when genetic susceptibility intersects with specific internal or external triggers</strong>—such as emotional stress, sleep deprivation, hormonal fluctuations, skipped meals, and sensory stimuli—causing transient neurovascular changes in brain signalling. In classical Ayurveda, migraine (known as <em>Ardhavabhedaka</em>) is linked to aggravated <strong>Vata</strong> and <strong>Pitta</strong> doshas that congest cranial channels (<em>shrotas</em>). Authentic Ayurvedic protocols calm the nervous system through targeted therapies like <em>Shirodhara</em> and <em>Nasya</em>, restore digestive equilibrium, and remove metabolic toxins (<em>Ama</em>) without relying solely on temporary pain suppressants.
              </p>
            </div>

            {/* Intro Content */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
              <p>
                A migraine can turn an ordinary day into a difficult, painful ordeal. The continuous, pounding head pain, acute sensitivity to bright light and sound, waves of nausea, and profound difficulty concentrating can disrupt your work performance, family life, and everyday activities. If migraine headaches keep returning month after month, you may find yourself constantly asking: <em>What is causing these attacks, and how can I manage them more effectively?</em>
              </p>
              <p>
                Migraine triggers vary dramatically from person to person. While prolonged mental stress or irregular sleep may provoke an agonizing attack in one individual, skipping lunch, dehydration, or hormonal shifts may trigger it in another. Identifying these specific personal patterns is the indispensable first step in overcoming them. Classical Ayurveda offers a comprehensive, personalized approach that evaluates individual physiological constitution (Prakriti), dietary patterns, circadian routines, and metabolic health alongside appropriate modern medical evaluation.
              </p>
            </div>

            {/* Section: What Causes Migraines? Understanding Common Triggers */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  What Causes Migraines? Understanding Common Triggers
                </h2>
              </div>
              
              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                The exact neurobiological cause of migraine is intricate. It involves complex fluctuations in brain chemical messengers, abnormal nerve signalling along the trigeminal nerve pathway, and neurovascular alterations in blood vessels surrounding the brain. Genetic inheritance also plays an influential role; having family members with migraines significantly increases your susceptibility.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                While the fundamental biological predisposition is internal, environmental and lifestyle triggers frequently act as the spark that ignites an attack. Understanding what causes migraines in your unique daily routine enables you to recognize warning patterns and make proactive adjustments. Triggers do not affect everyone identically, and encountering a single trigger does not guarantee an attack. Often, a combination of several triggers simultaneously—such as poor sleep combined with a missed meal and mental stress—exceeds your neurological threshold.
              </p>

              {/* Grid of Common Triggers */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5 text-[#517B32] font-bold text-base">
                    <Brain className="w-5 h-5 text-[#66371B]" />
                    <span>Stress &amp; Emotional Strain</span>
                  </div>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Intense workplace pressures, emotional anxiety, or even the sudden relaxation period after prolonged stress (&ldquo;let-down headache&rdquo;) can cause sudden shifts in neurochemicals that trigger attacks.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5 text-[#517B32] font-bold text-base">
                    <Moon className="w-5 h-5 text-[#66371B]" />
                    <span>Irregular Sleep Patterns</span>
                  </div>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Sleeping too few hours, oversleeping on weekends, night shifts, or constantly shifting bedtime schedules disrupts biological rhythms and sensitizes cranial nerves.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5 text-[#517B32] font-bold text-base">
                    <Utensils className="w-5 h-5 text-[#66371B]" />
                    <span>Skipping Meals &amp; Fasting</span>
                  </div>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Going too long without food causes blood glucose drops that provoke intracranial vascular spasms. In Ayurveda, this also sharply aggravates Pitta and Vata.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5 text-[#517B32] font-bold text-base">
                    <Droplets className="w-5 h-5 text-[#66371B]" />
                    <span>Dehydration</span>
                  </div>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Inadequate daily fluid intake shrinks bodily tissues and reduces cerebral fluid balance, acting as one of the most under-recognized yet preventable triggers.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5 text-[#517B32] font-bold text-base">
                    <Flame className="w-5 h-5 text-[#66371B]" />
                    <span>Hormonal Changes</span>
                  </div>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Fluctuations in estrogen levels—particularly immediately before or during menstruation, pregnancy, or perimenopause—are frequent triggers for female migraine sufferers.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] shadow-xs space-y-2">
                  <div className="flex items-center gap-2.5 text-[#517B32] font-bold text-base">
                    <Sun className="w-5 h-5 text-[#66371B]" />
                    <span>Sensory Stimuli &amp; Diet</span>
                  </div>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Flickering screens, harsh fluorescent lighting, loud environments, strong perfumes, along with aged cheeses, excess caffeine, or abrupt caffeine withdrawal, frequently provoke episodes.
                  </p>
                </div>
              </div>

              {/* Pro-Tip Box */}
              <div className="p-5 rounded-xl bg-[#517B32]/10 border border-[#517B32]/30 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#517B32] shrink-0 mt-0.5" />
                <div className="text-sm text-[#402816] leading-relaxed">
                  <strong className="text-[#517B32] font-bold block mb-1">Clinical Insight: Keep a Detailed Headache Diary</strong>
                  Maintaining a written log of headache timing, pain intensity, duration, preceding sleep quality, meals, stress events, and weather shifts allows you and your doctor to identify exact trigger correlations without needlessly eliminating essential foods or activities.
                </div>
              </div>
            </section>

            {/* Section: Migraine Symptoms and How They Differ From a Regular Headache */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Migraine Symptoms and How They Differ From a Regular Headache
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                Many people mistakenly categorize severe tension headaches as migraines. While both cause head pain, a migraine is a complex neurological disorder with distinct systemic characteristics:
              </p>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] space-y-4">
                  <h3 className="font-heading font-bold text-xl text-[#66371B] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#81754B]" />
                    Tension-Type Headache
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#402816]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#81754B] font-bold">•</span>
                      <span><strong>Pain Character:</strong> Dull, non-pulsating, tight band-like sensation across the forehead or back of the head.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#81754B] font-bold">•</span>
                      <span><strong>Location:</strong> Generally bilateral (both sides of the head).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#81754B] font-bold">•</span>
                      <span><strong>Physical Activity:</strong> Usually not aggravated by climbing stairs or walking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#81754B] font-bold">•</span>
                      <span><strong>Associated Symptoms:</strong> Rarely accompanied by nausea, vomiting, or visual disturbances.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-[#E3D8C1]/30 border-2 border-[#517B32] space-y-4">
                  <h3 className="font-heading font-bold text-xl text-[#517B32] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#517B32]" />
                    Migraine (Neurovascular Episode)
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#402816]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span><strong>Pain Character:</strong> Moderate to severe, throbbing, rhythmic, debilitating pain.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span><strong>Location:</strong> Often strictly unilateral (one side), though it can spread bilaterally.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span><strong>Physical Activity:</strong> Aggravated severely by minor movements, bending forward, or bright light.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#517B32] font-bold">•</span>
                      <span><strong>Associated Symptoms:</strong> Marked nausea, vomiting, dizziness, photophobia, phonophobia, and severe fatigue.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sub-section: Aura vs Without Aura */}
              <div className="space-y-4 pt-2">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B]">
                  Migraine With Aura vs. Migraine Without Aura
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                  Migraines are clinically classified into two primary presentations:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-[#DBCFA8]">
                    <h4 className="font-bold text-[#66371B] mb-1">1. Migraine Without Aura (Common Migraine)</h4>
                    <p className="text-sm text-[#402816] leading-relaxed">
                      Occurring in approximately 70-80% of sufferers, this type develops without temporary neurological focal symptoms. However, patients often experience subtle prodromal warning signs hours or days before—such as frequent yawning, neck stiffness, mood shifts, or cravings.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#DBCFA8]">
                    <h4 className="font-bold text-[#66371B] mb-1">2. Migraine With Aura (Classic Migraine)</h4>
                    <p className="text-sm text-[#402816] leading-relaxed">
                      Characterized by reversible neurological disturbances developing gradually over 5 to 20 minutes and typically lasting under an hour before the headache begins. Visual auras are most common—including blind spots (scotomas), flashing lights, shimmering zigzag patterns, or sensory sensations like pins-and-needles in the hand or face.
                    </p>
                  </div>
                </div>
              </div>

              {/* Red Flag Warning Box */}
              <div className="bg-[#402816] text-[#F7F1E1] p-6 rounded-2xl space-y-3 border border-[#81754B]">
                <div className="flex items-center gap-2 text-[#E3D8C1] font-bold text-sm uppercase tracking-wider">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
                  Clinical Caution: When Is a Headache an Emergency?
                </div>
                <p className="text-sm leading-relaxed text-[#E3D8C1]">
                  While most migraines follow a predictable pattern, certain &ldquo;red flag&rdquo; symptoms demand immediate emergency evaluation. Seek urgent medical care if you experience:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#E3D8C1]/90">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Sudden, explosive &quot;thunderclap&quot; headache</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Headache with high fever and stiff neck</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Slurred speech, confusion, or facial droop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Headache following a head impact or injury</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section: Ayurvedic Approach to Migraine Management */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Ayurvedic Approach to Migraine Management: Treating the Root Cause
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                In traditional Ayurvedic medicine, headaches are categorized under <em>Shiroroga</em> (diseases of the head). Migraines specifically correspond closely to <strong>Ardhavabhedaka</strong>—a condition where aggravated doshas produce severe paroxysmal pain affecting half of the head, neck, eye, and temple regions.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                Unlike conventional symptomatic care that often relies on analgesic pain relievers and vasoconstrictors—which can lead to medication overuse headaches (rebound headaches)—Ayurveda examines the fundamental physiological imbalances behind the attacks:
              </p>

              {/* Doshic Imbalances Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] space-y-2 text-center">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-bold uppercase">
                    Vata Imbalance
                  </span>
                  <h4 className="font-heading font-bold text-base text-[#66371B]">Nervous System Sensitivity</h4>
                  <p className="text-xs text-[#81754B] leading-relaxed">
                    Triggered by stress, irregular sleep, exhaustion, and dehydration. Causes pulsating pain, hypersensitivity, anxiety, and cranial nerve constriction.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] space-y-2 text-center">
                  <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase">
                    Pitta Imbalance
                  </span>
                  <h4 className="font-heading font-bold text-base text-[#66371B]">Vascular Heat &amp; Inflammation</h4>
                  <p className="text-xs text-[#81754B] leading-relaxed">
                    Triggered by spicy food, sun exposure, anger, and hyperacidity. Causes intense burning sensation, eye redness, nausea, and photophobia.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DBCFA8] space-y-2 text-center">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#402816]/10 text-[#402816] text-xs font-bold uppercase">
                    Ama &amp; Agni Deficit
                  </span>
                  <h4 className="font-heading font-bold text-base text-[#66371B]">Metabolic Toxicity</h4>
                  <p className="text-xs text-[#81754B] leading-relaxed">
                    Impaired digestive fire produces endotoxins (<em>Ama</em>) that circulate and obstruct micro-channels (<em>shrotas</em>) nourishing the head.
                  </p>
                </div>
              </div>

              {/* Specialized Ayurvedic Therapies */}
              <div className="space-y-4 pt-2">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B]">
                  Classical Therapies at Omshree Sidha Hospital
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                  At Omshree Sidha Hospital, our medical protocols combine clinical precision with classical Kerala Ayurvedic therapies to achieve lasting neurological equilibrium:
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold text-lg">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-lg text-[#66371B]">
                        Shirodhara (Continuous Medicated Stream)
                      </h4>
                      <p className="text-sm text-[#402816] leading-relaxed">
                        A rhythmic, gentle stream of warm medicated herbal oil, buttermilk (Takradhara), or herbal decoctions poured over the &quot;Ajna chakra&quot; (forehead). Shirodhara directly calms the hypothalamus, reduces sympathetic nervous system hyperactivity, relieves vascular tension, and restores deep restorative sleep.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold text-lg">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-lg text-[#66371B]">
                        Nasya Therapy (Transnasal Medication)
                      </h4>
                      <p className="text-sm text-[#402816] leading-relaxed">
                        In Ayurveda, <em>&quot;Nasa hi shiraso dwaram&quot;</em>—the nose is the direct gateway to the brain and head. Carefully prepared therapeutic oils (such as Shadbindu Taila or Anu Taila) are administered through the nostrils to clear accumulated toxins from cranial sinuses, nourish cranial nerves, and relieve vascular spasms.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold text-lg">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-lg text-[#66371B]">
                        Shirolepa &amp; Abhyanga (Herbal Paste &amp; Therapeutic Massage)
                      </h4>
                      <p className="text-sm text-[#402816] leading-relaxed">
                        Cooling medicinal pastes prepared with sandalwood, camphor, and neuroprotective herbs are applied to the vertex of the head to pacify severe Pitta heat. Synchronized body massage (Abhyanga) eases cervical tension that frequently triggers occipital migraines.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0 font-bold text-lg">
                      4
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-lg text-[#66371B]">
                        Panchakarma Detoxification &amp; Patented Herbal Formulations
                      </h4>
                      <p className="text-sm text-[#402816] leading-relaxed">
                        Comprehensive detoxification cleanses internal channels to eliminate longstanding metabolic wastes. Coupled with proprietary herbal preparations manufactured under strict GMP standards at our own facility, these remedies strengthen neurovascular resilience naturally without harmful side effects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospital Spotlight & Testimonials Callout */}
              <div className="p-6 rounded-2xl bg-[#E3D8C1]/40 border border-[#DBCFA8] space-y-4">
                <div className="flex items-center gap-2 text-[#66371B] font-bold text-base">
                  <Sparkles className="w-5 h-5 text-[#517B32]" />
                  <span>Comprehensive Care at Omshree Sidha Hospital</span>
                </div>
                <p className="text-sm sm:text-base text-[#402816] leading-relaxed">
                  If you are exploring a dependable, non-surgical pathway to recover from debilitating migraine symptoms, <strong>Omshree Sidha Hospital</strong> in Kottayam, Kerala stands as a premier destination for specialized natural care. To assist you in your research, we invite you to review our{" "}
                  <Link href="/testimonials" className="text-[#517B32] font-semibold underline hover:text-[#66371B]">
                    verified patient testimonials
                  </Link>. These accounts feature real individuals openly sharing their personal healing journeys and clinical progress, offering a transparent and reliable look at the success of our dedicated protocols.
                </p>
                <div className="pt-1">
                  <Link
                    href="/treatments/migraine"
                    className="inline-flex items-center gap-2 text-[#517B32] font-bold text-sm hover:underline"
                  >
                    <span>Read about our specialized Migraine Treatment Protocol</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Section: Lifestyle and Diet Tips for Managing Migraine Triggers */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Lifestyle and Diet Tips for Managing Migraine Triggers
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#402816]">
                Small, consistent changes to your daily lifestyle (<em>Dinacharya</em>) can substantially decrease the frequency and intensity of migraine episodes. While lifestyle adjustments alone may not eliminate every attack, they dramatically elevate your threshold against triggers:
              </p>

              {/* Actionable Tips Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] space-y-2">
                  <h4 className="font-bold text-[#66371B] flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#517B32]" />
                    Maintain Strict Meal Timing
                  </h4>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Never skip meals. Eat fresh, warm, easily digestible food at regular intervals to maintain steady blood sugar and prevent gastric Pitta aggravation.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] space-y-2">
                  <h4 className="font-bold text-[#66371B] flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-[#517B32]" />
                    Hydrate Consistently
                  </h4>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Sip warm or room-temperature water throughout the day. Infuse water with cooling herbs such as coriander seeds, fennel, or mint during hot weather.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] space-y-2">
                  <h4 className="font-bold text-[#66371B] flex items-center gap-2">
                    <Moon className="w-4 h-4 text-[#517B32]" />
                    Establish Regular Sleep Hygiene
                  </h4>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Go to bed and wake up at consistent hours every day—including weekends. Avoid screen exposure for at least 60 minutes before bedtime.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#DBCFA8] space-y-2">
                  <h4 className="font-bold text-[#66371B] flex items-center gap-2">
                    <Sun className="w-4 h-4 text-[#517B32]" />
                    Manage Sensory Stimulation
                  </h4>
                  <p className="text-sm text-[#402816] leading-relaxed">
                    Wear UV-blocking sunglasses in bright sunlight, utilize anti-glare filters on electronic screens, and steer clear of harsh synthetic fragrances.
                  </p>
                </div>
              </div>

              {/* Mindful Yoga & Pranayama */}
              <div className="p-6 rounded-2xl bg-white border border-[#DBCFA8] space-y-3">
                <h3 className="font-heading font-bold text-xl text-[#66371B]">
                  Calming Yoga &amp; Pranayama for Nervous Stability
                </h3>
                <p className="text-sm sm:text-base text-[#402816] leading-relaxed">
                  Gentle yogic breathing exercises cultivate parasympathetic nervous system dominance, reducing vascular constriction. Practice 10–15 minutes of:
                </p>
                <div className="grid sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-[#FAF7F0] border border-[#DBCFA8]/60">
                    <strong className="text-[#517B32] block mb-1">Nadi Shodhana</strong>
                    Alternate nostril breathing balances cerebral hemispheres and calms agitated Vata.
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF7F0] border border-[#DBCFA8]/60">
                    <strong className="text-[#517B32] block mb-1">Sheetali Pranayama</strong>
                    Cooling breathing technique that immediately reduces visceral Pitta heat and vascular tension.
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF7F0] border border-[#DBCFA8]/60">
                    <strong className="text-[#517B32] block mb-1">Brahmari (Bee Breath)</strong>
                    Generates soothing intracranial vibrations that soothe the sensory cortex and ease pressure.
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Frequently Asked Questions (FAQ) */}
            <section className="space-y-6">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Frequently Asked Questions About Migraines &amp; Ayurveda
                </h2>
              </div>

              <div className="space-y-4">
                <Card className="border-[#DBCFA8] bg-white rounded-2xl">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      What is the difference between a normal headache and a migraine?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Unlike standard tension-type headaches that cause a steady, dull pressure across the forehead, migraines produce moderate to severe throbbing pain—typically on one side of the head. Migraines are accompanied by neurological symptoms such as intense nausea, vomiting, photophobia (light sensitivity), phonophobia (sound sensitivity), dizziness, and visual auras that worsen with routine physical exertion.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      How does Ayurveda view the root causes of migraine?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Ayurveda views migraines under <em>Shiroroga</em>, predominantly <em>Ardhavabhedaka</em>. It is caused by aggravated <strong>Vata</strong> (hyperactive nervous signals) and <strong>Pitta</strong> (vascular heat and dilation) doshas. Irregular meals, stress, dehydration, and poor sleep produce digestive toxins (<em>Ama</em>) that obstruct cranial channels (<em>shrotas</em>), provoking acute neurovascular attacks.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      Which Ayurvedic therapies are most effective for chronic migraines?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Key clinical therapies include <strong>Shirodhara</strong> (continuous rhythmic pouring of medicated herbal oils or Takradhara on the forehead), <strong>Nasya</strong> (transnasal instillation of therapeutic herbal oils to clear cranial pathways), <strong>Shirolepa</strong> (cooling herbal paste applications), and classical <strong>Panchakarma</strong> detoxification to purge deep metabolic toxins.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      Can dietary changes alone prevent migraine attacks?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      While maintaining consistent meal schedules, hydrating adequately, and minimizing excess caffeine or artificial additives significantly raises your resistance against attacks, complete long-term management typically requires harmonizing nervous system reactivity, circadian sleep rhythm, and metabolic digestion under specialized medical supervision.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] bg-white rounded-2xl">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#66371B] flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#517B32] shrink-0" />
                      When should you seek immediate medical attention for a headache?
                    </h3>
                    <p className="text-sm sm:text-base text-[#402816] leading-relaxed pl-7">
                      Seek immediate hospital emergency care if you experience a sudden, explosive headache (&ldquo;thunderclap&rdquo;), head pain accompanied by high fever, stiff neck, confusion, slurred speech, facial numbness, seizures, or double vision, as these can indicate urgent neurological emergencies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section: Conclusion & Summary */}
            <section className="space-y-6 pt-4">
              <div className="border-b border-[#DBCFA8] pb-3">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B]">
                  Finding Sustainable, Long-Term Migraine Relief
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#402816]">
                <p>
                  Understanding your individual triggers is a vital milestone towards regaining control over recurring migraine headaches. Recognizing early symptoms, maintaining regular sleep and meal patterns, staying properly hydrated, and actively managing stress can all contribute to a more informed, empowered approach to health.
                </p>
                <p>
                  Personalized treatment in Ayurveda provides dedicated support through customized lifestyle guidance and precisely selected traditional therapies tailored to your unique physiological baseline. To ensure safety and clinical efficacy, it is highly important to choose a result-oriented, evidence-based care center like <strong>Omshree Sidha Hospital</strong>, where our multigenerational medical team focuses entirely on delivering optimal, sustainable healing outcomes.
                </p>
                <p>
                  Because chronic health conditions require a precise care path, consulting with a qualified healthcare professional is an essential first step. A medical professional can help confirm an accurate diagnosis, evaluate your clinical progress, and discuss the specialized care options best suited to your individual needs.
                </p>
              </div>

              {/* Bottom CTA Box */}
              <div className="bg-[#402816] text-[#F7F1E1] p-8 sm:p-10 rounded-3xl relative overflow-hidden space-y-6 border border-[#81754B]/30 shadow-lg">
                <div className="relative z-10 space-y-3">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#517B32] text-white text-xs font-bold uppercase tracking-wider">
                    Take the First Step Today
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F1E1]">
                    Ready to Break Free from Chronic Migraines?
                  </h3>
                  <p className="text-base text-[#E3D8C1] max-w-2xl font-light">
                    Consult our senior Ayurvedic physicians for an in-depth clinical evaluation and an individualized, natural treatment plan designed for your physiological constitution.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Button
                    render={<Link href="/contact" />}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Book an Ayurvedic Consultation
                  </Button>
                  <Button
                    render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />}
                    variant="glass"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span className="flex items-center justify-center">
                      <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" /> Share Case Details on WhatsApp
                    </span>
                  </Button>
                </div>
              </div>
            </section>

          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* Quick Consultation Card */}
              <Card className="border-[#DBCFA8] shadow-md bg-white rounded-2xl overflow-hidden">
                <div className="bg-[#517B32] text-white p-5 text-center">
                  <h3 className="font-heading font-bold text-xl">
                    Need Migraine Guidance?
                  </h3>
                  <p className="text-white/80 text-xs mt-1">
                    Connect with our Ayurvedic physicians
                  </p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed">
                    Get personalized dietary advice, trigger analysis, and classical treatment recommendations tailored to your constitution.
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
              <Card className="border-[#DBCFA8] shadow-xs bg-white rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#66371B]">
                    Why Choose Omshree Sidha Hospital?
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#402816]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>30+ Years of Clinical Legacy</strong> in authentic classical Kerala Ayurveda.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>GMP-Certified Medicine Unit</strong> manufacturing pure, standardized herbal formulas.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>Result-Oriented Protocols</strong> backed by transparent patient care offers.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                      <span><strong>Holistic Co-Management</strong> respecting modern diagnostic evaluations.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Related Clinical Resources */}
              <Card className="border-[#DBCFA8] shadow-xs bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-[#66371B]">
                    Related Clinical Resources
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/treatments/migraine"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Ayurvedic Treatment for Migraine</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/testimonials"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Verified Patient Testimonials</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ayurveda/panchakarma"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Classical Panchakarma &amp; Detoxification</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/patient-care/challenging-offer"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Our Patient Care &amp; Challenging Offer</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/can-liver-cirrhosis-be-managed-with-ayurveda"
                        className="text-[#66371B] hover:text-[#517B32] transition-colors flex items-start gap-2 font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                        <span>Can Liver Cirrhosis Be Managed with Ayurveda?</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* International Patients Box */}
              <Card className="border-none shadow-md bg-[#402816] text-[#F7F1E1] rounded-2xl">
                <CardContent className="p-6 sm:p-7 text-center space-y-4">
                  <h3 className="font-heading font-bold text-xl text-[#F7F1E1]">
                    Travelling to Kerala for Treatment?
                  </h3>
                  <p className="text-[#E3D8C1]/90 text-xs sm:text-sm font-light leading-relaxed">
                    Patients travelling from across India or overseas can consult online with our medical team prior to visiting our hospital in Kottayam, Kerala.
                  </p>
                  <Button
                    render={<Link href="/international-patients" />}
                    variant="glass"
                    size="sm"
                    className="w-full justify-center"
                  >
                    International Patient Information
                  </Button>
                </CardContent>
              </Card>

              {/* Hospital Location & Entity Stamp */}
              <div className="p-5 rounded-2xl bg-white border border-[#DBCFA8] text-xs text-[#81754B] space-y-1.5">
                <p className="font-bold text-[#66371B]">Omshree Sidha Hospital</p>
                <p>Vayala P.O., Kottayam, Kerala 686587, India</p>
                <p>Authentic Classical Ayurvedic Care</p>
                <p className="pt-1">
                  <Link href="/contact" className="text-[#517B32] font-semibold underline">
                    View Contact Details &amp; Directions
                  </Link>
                </p>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

