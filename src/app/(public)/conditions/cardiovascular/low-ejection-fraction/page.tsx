import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileText,
  ShieldCheck,
  HeartPulse,
  Activity,
  User,
  Calendar,
  Building2,
  Sparkles,
  HelpCircle,
  ChevronRight,
  MoveRight,
  Phone,
  Clock,
  Video,
  Send,
  Stethoscope,
} from "lucide-react";
import { CaseStudyReportGallery, ReportImage } from "@/components/conditions/CaseStudyReportModal";
import { ConversationalEchoReview } from "@/components/conditions/ConversationalEchoReview";

export const metadata: Metadata = {
  title: "Low Ejection Fraction (EF) Ayurvedic Treatment & Case Studies | Omshree",
  description:
    "Documented clinical case studies of Low Ejection Fraction (EF 20% to 32%, 23% to 33.7%) treated with specialized Ayurveda at Omshree Sidha Hospital. Verifiable echocardiograms.",
  alternates: {
    canonical: "https://www.omshreeayur.com/conditions/cardiovascular/low-ejection-fraction",
  },
  openGraph: {
    title: "Low Ejection Fraction (EF) Ayurvedic Treatment & Documented Case Studies",
    description:
      "Clinical evidence and echocardiogram-verified recovery in severe Low Ejection Fraction and Cardiomyopathy at Omshree Sidha Hospital, Kerala.",
    url: "https://www.omshreeayur.com/conditions/cardiovascular/low-ejection-fraction",
    type: "article",
    images: [
      {
        url: "https://www.omshreeayur.com/images/conditions/low-ejection-fraction/case-studies/case-1-echo-before-ef20.jpg",
        width: 1200,
        height: 630,
        alt: "Low Ejection Fraction Ayurvedic Treatment Case Studies - Omshree Sidha Hospital",
      },
    ],
  },
};

const case1Reports: ReportImage[] = [
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-1-echo-before-ef20.jpg",
    title: "Baseline Echocardiogram (EF: 20%)",
    hospital: "Dr. Mehta's Multispeciality Hospital, Chennai",
    date: "26/07/2023",
    metrics: "EF: 20% | FS: 10% | Dilated LA/LV/RA/RV",
    caption: "Severe LV and RV systolic dysfunction with biventricular dilation prior to Ayurvedic therapy.",
  },
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-1-echo-before-findings.jpg",
    title: "Baseline Echo Detailed Findings",
    hospital: "Dr. Mehta's Multispeciality Hospital, Chennai",
    date: "26/07/2023",
    metrics: "Global Hypokinesia | Dilated IVC (24mm) | Mild PAH",
    caption: "Confirmed global hypokinesia, elevated right ventricular pressures, and systemic venous congestion.",
  },
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-1-usg-abdomen.jpg",
    title: "Pre-Treatment Abdominal USG",
    hospital: "AK & AK Scans and Labs, Chennai",
    date: "25/07/2023",
    metrics: "Anasarca | Ascites | Pleural Effusion | Hepatomegaly",
    caption: "Ultrasound confirming congestive cardiac pathology, massive peripheral edema, and peritoneal fluid.",
  },
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-1-echo-mid-ef25.jpg",
    title: "2-Week Intermediate Echo (EF: 25%)",
    hospital: "Caritas Heart Institute, Kottayam",
    date: "16/08/2023",
    metrics: "EF: 25% (+5% gain) | SV: 38 ml",
    caption: "Early echocardiographic confirmation of myocardial contractility improvement within 14 days.",
  },
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-1-echo-after-ef32.jpg",
    title: "Discharge Echocardiogram (EF: 32%)",
    hospital: "S H Medical Centre Heart Institute, Kottayam",
    date: "04/09/2023",
    metrics: "EF: 32% (Up from 20%) | SV: 48 ml | FS: 15%",
    caption: "Discharge echo verified by Dr. Jose Chacko Cherackal MD, MRCP(UK) showing 60% relative EF increase.",
  },
];

const case2Reports: ReportImage[] = [
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-2-echo-before-ef23.jpg",
    title: "Baseline Echocardiogram (EF: 23%)",
    hospital: "Caritas Heart Institute, Kottayam",
    date: "02/09/2024",
    metrics: "EF: 23% | FS: 11% | SV: 43 ml | Apical Aneurysm",
    caption: "Ischemic cardiomyopathy in LAD territory with severe LV systolic dysfunction and apical aneurysm.",
  },
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-2-daily-assessment.jpg",
    title: "Inpatient Clinical Self-Assessment",
    hospital: "Omshree Sidha Hospital, Vayala",
    date: "01/09/2024 - 24/09/2024",
    metrics: "SpO2: 98-99% | Chest Pain: Relieved | Fatigue: Nil",
    caption: "Daily tracking sheet showing progressive relief of dyspnea, normal restful sleep, and BP stabilization.",
  },
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-2-echo-after-ef33-7.jpg",
    title: "Follow-up Echocardiogram (EF: 33.7%)",
    hospital: "Kauvery Hospital, Tirunelveli",
    date: "30/11/2024",
    metrics: "EF: 33.7% (A4C) / 33.3% (Teich) | SV: 56.0 ml",
    caption: "Objective follow-up echo confirming +10.7% absolute EF increase and improved stroke volume.",
  },
];

const case3Reports: ReportImage[] = [
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-3-echo-before-ef23.jpg",
    title: "Baseline Echocardiogram (EF: 23%)",
    hospital: "Caritas Heart Institute, Kottayam",
    date: "15/02/2025",
    metrics: "EF: 23% | FS: 11% | SV: 44 ml | Severe Dysfunction",
    caption: "Dilated LV/LA/RA with severe systolic dysfunction, global hypokinesia, and pulmonary hypertension.",
  },
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-3-lab-report.jpg",
    title: "Baseline Renal & Metabolic Panel",
    hospital: "Medicare Laboratory, Vayala",
    date: "17/02/2025",
    metrics: "Creatinine: 1.2 mg/dl | Urea: 28 mg/dl | HbA1c: 6.8%",
    caption: "Comprehensive metabolic evaluation confirming stable renal function prior to Ayurvedic therapy.",
  },
  {
    src: "/images/conditions/low-ejection-fraction/case-studies/case-3-echo-after-ef33.jpg",
    title: "Discharge Echocardiogram (EF: 33%)",
    hospital: "Caritas Heart Institute, Kottayam",
    date: "10/03/2025",
    metrics: "EF: 33% (Up from 23%) | SV: 58 ml | In 23 Days",
    caption: "Rapid reverse remodeling verified by Dr. Joby K Thomas MD, DM: EF rose 10 points in just 23 days.",
  },
];

export default function LowEjectionFractionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.omshreeayur.com/conditions/cardiovascular/low-ejection-fraction#webpage",
        "url": "https://www.omshreeayur.com/conditions/cardiovascular/low-ejection-fraction",
        "name": "Low Ejection Fraction (EF) Ayurvedic Treatment & Documented Case Studies",
        "description":
          "Verified clinical case studies demonstrating echocardiogram improvements from 20% to 32% and 23% to 33.7% in low ejection fraction and cardiomyopathy at Omshree Sidha Hospital.",
        "about": {
          "@type": "MedicalCondition",
          "name": "Low Ejection Fraction",
          "alternateName": [
            "Reduced Ejection Fraction",
            "Heart Failure with Reduced Ejection Fraction (HFrEF)",
            "Systolic Heart Failure",
            "Cardiomyopathy with Low EF",
          ],
          "code": [
            {
              "@type": "MedicalCode",
              "code": "I50.9",
              "codingSystem": "ICD-10",
            },
            {
              "@type": "MedicalCode",
              "code": "I42.0",
              "codingSystem": "ICD-10",
            },
          ],
          "possibleTreatment": [
            {
              "@type": "MedicalTherapy",
              "name": "Ayurvedic Cardiac Rejuvenation Protocol",
              "description":
                "Integrative Ayurvedic therapy incorporating Hrudaya Basti, customized Abhyanga, Kizhi, and proprietary cardiotonic formulations.",
            },
          ],
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "Omshree Sidha Hospital",
          "url": "https://www.omshreeayur.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.omshreeayur.com/images/logo/logo.webp",
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vayala P.O.",
            "addressLocality": "Kottayam",
            "addressRegion": "Kerala",
            "postalCode": "686587",
            "addressCountry": "IN",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.omshreeayur.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Conditions",
            "item": "https://www.omshreeayur.com/conditions",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cardiovascular",
            "item": "https://www.omshreeayur.com/conditions/cardiovascular",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Low Ejection Fraction (EF)",
            "item": "https://www.omshreeayur.com/conditions/cardiovascular/low-ejection-fraction",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can Low Ejection Fraction (EF) improve with Ayurvedic treatment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Documented clinical case studies at Omshree Sidha Hospital show that patients with severe low ejection fraction (EF between 20% and 23%) achieve verifiable improvements to 32% - 33.7% within 3 to 12 weeks. These outcomes are independently verified by certified hospital echocardiography departments.",
            },
          },
          {
            "@type": "Question",
            "name": "How quickly can ejection fraction increase after starting treatment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Measurable echocardiographic gains and noticeable clinical improvements frequently manifest within 2 to 4 weeks. For example, in our documented clinical cases, patient EF improved from 20% to 25% within 14 days, and from 23% to 33% within 23 days of inpatient therapy.",
            },
          },
          {
            "@type": "Question",
            "name": "Are the ejection fraction improvements verified by independent echocardiograms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Every case study is verified through independent diagnostic reports performed at accredited multispeciality hospitals, including Caritas Heart Institute, Dr. Mehta's Multispeciality Hospital, Kauvery Hospital, and S H Medical Centre.",
            },
          },
          {
            "@type": "Question",
            "name": "Should patients discontinue their prescribed modern cardiac medicines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "No. Patients must continue their prescribed conventional cardiac medications alongside Ayurvedic therapies. Periodic echocardiograms and clinical assessments are conducted to monitor recovery safely under integrative medical supervision.",
            },
          },
          {
            "@type": "Question",
            "name": "What Ayurvedic therapies are used to restore heart pumping efficiency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The protocol combines specialized external therapies such as Hrudaya Basti (retaining warm herbal medicated oil over the cardiac region), Abhyanga, and Kizhi (herbal bolus application) with proprietary internal cardioprotective formulations prepared from herbs like Arjuna, Punarnava, Bala, and Guduchi in a GMP-certified pharmacy.",
            },
          },
        ],
      },
    ],
  };

  const WHATSAPP_EVAL_URL =
    "https://wa.me/919846992789?text=Hello%20Dr.%20Jose%20Vaidhyan%20%26%20Omshree%20Team%2C%20I%20would%20like%20to%20get%20an%20Ayurvedic%20opinion%20on%20my%20Low%20Ejection%20Fraction%20(Echo)%20report.";

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden pb-24 md:pb-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO (High-Converting Google Ads Friendly Layout) */}
      <section className="bg-[#402816] text-[#F7F1E1] py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="w-full px-[4%] relative z-20">
          {/* Breadcrumb with horizontal touch scroll */}
          <nav
            className="flex text-xs sm:text-sm text-[#E3D8C1] mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap scrollbar-none py-1"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1.5 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-1.5 sm:mx-2 text-[#E3D8C1]/60">/</span>
                  <Link href="/conditions" className="hover:text-white transition-colors">
                    Conditions
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-1.5 sm:mx-2 text-[#E3D8C1]/60">/</span>
                  <Link href="/conditions/cardiovascular" className="hover:text-white transition-colors">
                    Cardiovascular
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-1.5 sm:mx-2 text-[#E3D8C1]/60">/</span>
                  <span className="text-[#B4833D] font-medium">Low Ejection Fraction</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Trust & Live Conversion Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Senior Cardiac Team Available
              </span>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#B4833D]/30 text-[#F7F1E1] border border-[#B4833D]/50 text-[11px] sm:text-xs font-semibold hover:bg-[#B4833D]/50 transition-colors"
              >
                <TrendingUp className="h-3.5 w-3.5 text-[#B4833D]" /> 3 Verified Hospital Case Studies
              </a>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#F7F1E1] tracking-tight leading-tight">
              Natural Ayurvedic Care for Low Ejection Fraction (EF)
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-6 sm:mb-8">
              A low EF diagnosis can feel overwhelming, but heart muscle strength can be restored. At Omshree Sidha Hospital, we specialize in non-surgical Ayurvedic cardiology that revitalizes weakened heart myofibers and increases contractile output—documented by repeat echocardiograms showing EF improvements from <strong>20% to 32%</strong> and <strong>23% to 33.7%</strong>.
            </p>

            {/* Trust Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-3.5 sm:py-4 border-y border-[#E3D8C1]/15 mb-8 sm:mb-10 text-[11px] sm:text-xs md:text-sm text-[#E3D8C1]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6F9940] shrink-0" />
                <span className="leading-tight">Echo Verified Proof</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6F9940] shrink-0" />
                <span className="leading-tight">No Surgery Required</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6F9940] shrink-0" />
                <span className="leading-tight">Continue Modern Meds</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6F9940] shrink-0" />
                <span className="leading-tight">140+ Yr Ayurvedic Lineage</span>
              </div>
            </div>

            {/* High-Converting Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4">
              <Button
                render={<a href={WHATSAPP_EVAL_URL} target="_blank" rel="noreferrer" />}
                size="lg"
                className="w-full sm:w-auto h-13 sm:h-12 text-base font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg active:scale-98"
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Echo Report on WhatsApp</span>
                </span>
              </Button>

              <Button
                render={<a href="tel:+919846992789" />}
                variant="glass"
                size="lg"
                className="w-full sm:w-auto h-13 sm:h-12 font-semibold text-white border-white/30"
              >
                <span className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-[#E3D8C1]" />
                  <span>Call Doctor: +91 98469 92789</span>
                </span>
              </Button>

              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-13 sm:h-12 text-[#F7F1E1] border-[#DBCFA8]/40 hover:bg-[#F7F1E1]/10 font-medium"
              >
                Book Inpatient Consultation
              </Button>
            </div>

            <p className="text-xs text-[#E3D8C1]/75 flex items-center gap-1.5 pt-1">
              <Clock className="h-3.5 w-3.5 text-[#6F9940]" />
              <span>Fast doctor review • Average WhatsApp response within 15–20 minutes</span>
            </p>
          </div>
        </div>
      </section>

      <div className="w-full px-[4%] py-10 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-14">
            
            {/* Quick Answer Snippet for AEO / SGE */}
            <section className="bg-[#F7F1E1] border-l-4 border-[#517B32] p-5 sm:p-7 rounded-2xl shadow-xs">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[#517B32]/10 border border-[#517B32]/30 flex items-center justify-center text-[#517B32] shrink-0 mt-0.5 sm:mt-1">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-heading text-base sm:text-xl font-bold text-[#66371B] leading-snug">
                    Can Low Ejection Fraction Be Reversed or Improved with Ayurveda?
                  </h2>
                  <p className="text-[#81754B] text-sm sm:text-base leading-relaxed font-light">
                    <strong>Yes.</strong> Clinical records at Omshree Sidha Hospital in Kerala demonstrate that patients with severe low ejection fraction (EF between 20% and 23%) achieve significant, objective improvements to <strong>32% – 33.7%</strong> within 3 to 12 weeks of specialized Ayurvedic inpatient care. Improvements are independently confirmed by repeat 2D/Doppler echocardiography conducted at accredited multispeciality cardiac centers, accompanied by complete subsidence of breathlessness, leg edema, and chronic fatigue.
                  </p>
                </div>
              </div>
            </section>

            {/* HIGH-CONVERTING INTERACTIVE WIDGET (Google Ads Fast Action) */}
            <section aria-label="Interactive Echo Assessment Widget">
              <ConversationalEchoReview />
            </section>

            {/* SECTION: CLASSIFICATION */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Classification: The NYHA Functional Stages
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  To help track how your heart condition affects your daily life, healthcare providers use a standard four-stage system called the New York Heart Association (NYHA) Classification.
                </p>
                <p>
                  This system looks at how much physical activity you can do before feeling symptoms like shortness of breath or fatigue. Understanding your class helps us tailor your care and measure your steady progress.
                </p>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Class I (No Symptoms):</strong> Your heart is working well enough that you do not experience any heart failure symptoms during regular, everyday activities. You can move around and go about your day normally.
                  </li>
                  <li>
                    <strong>Class II (Mild Symptoms):</strong> You feel perfectly comfortable while resting and can handle simple everyday tasks. However, pushing yourself—such as climbing a steep hill or lifting heavy groceries—causes mild shortness of breath or fatigue.
                  </li>
                  <li>
                    <strong>Class III (Moderate Symptoms):</strong> Your physical activity is noticeably limited. While you still feel completely fine while sitting or resting, even basic, light household chores or walking short distances make you feel tired or short of breath.
                  </li>
                  <li>
                    <strong>Class IV (Severe Symptoms):</strong> This is the most advanced stage, where you are unable to carry out any physical activity without discomfort. Symptoms like shortness of breath, fatigue, or chest tightness occur even while you are sitting still or resting in bed.
                  </li>
                </ul>
                <p className="text-sm sm:text-base pt-2">
                  For patients and families seeking an educational guide to{" "}
                  <Link
                    href="/blog/what-is-ejection-fraction-and-what-does-it-tell-you-about-heart-function"
                    className="text-[#517B32] font-medium underline hover:text-[#6F9940] transition-colors"
                  >
                    understand what ejection fraction means
                  </Link>{" "}
                  and how echocardiogram measurements are calculated, read our detailed article.
                </p>
              </div>
            </section>

            {/* SECTION: HOW TO IMPROVE EF */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                How Can I Improve My Ejection Fraction (EF)?
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  Improving Ejection Fraction (EF) depends on treating the underlying causes of a weakened heart muscle. EF can improve significantly with root-cause therapy, targeted cardiac nourishment, and consistent objective monitoring. At Omshree Sidha Hospital, we achieve noticeable improvement in EF in a short time—typically within one to two months.
                </p>
                <p>
                  If a patient presents primarily with low EF without multi-organ complications, progress is rapid. When other chronic conditions are present, recovery proceeds systematically. We repeat echocardiograms at 7, 14, or 30-day intervals to verify that the heart muscle is regaining its contractile strength. Patients continue their existing modern cardiovascular medicines safely alongside Ayurvedic therapies throughout the healing course.
                </p>
              </div>
            </section>

            {/* MID-PAGE CONVERSATIONAL BANNER #1 */}
            <div className="bg-[#402816] text-[#F7F1E1] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border border-[#B4833D]/40">
              <div className="space-y-1.5 max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B4833D]">
                  Personalized Guidance
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F7F1E1]">
                  Unsure About Your Current EF or NYHA Stage?
                </h3>
                <p className="text-xs sm:text-sm text-[#E3D8C1]/90 font-light">
                  Speak directly with our senior doctors. Send your current Echo report via WhatsApp for an immediate second opinion.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5 shrink-0">
                <a
                  href={WHATSAPP_EVAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <a
                  href="tel:+919846992789"
                  className="h-11 px-4 rounded-xl border border-[#DBCFA8]/40 hover:bg-white/10 text-[#F7F1E1] font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  <Phone className="h-3.5 w-3.5" /> Call +91 98469 92789
                </a>
              </div>
            </div>

            {/* SECTION: TREATMENT & TIMELINE */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                What to Expect from Your Treatment
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  Once you begin your low Ejection Fraction (EF) treatment at Omshree Sidha Hospital, our primary focus is to naturally revitalize your heart muscle and restore its pumping power. As your heart becomes stronger, blood circulation and oxygen levels throughout your entire body will improve, allowing your symptoms to lift gradually.
                </p>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Within the First Month:
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Comfortable Breathing & Better Sleep:</strong> Shortness of breath begins to lift, allowing you to breathe easily and rest peacefully throughout the night without orthopnea.
                  </li>
                  <li>
                    <strong>Measurable EF Improvement:</strong> In most cases, EF improves by approximately 25% to 50% of your existing baseline EF within a month (e.g., from 20%–23% to 32%–33.7%). Individual rates vary depending on prior infarctions or presence of implanted devices (ICDs).
                  </li>
                  <li>
                    <strong>Relief from Congestion & Cough:</strong> Persistent cardiac coughing and nocturnal breathlessness subside as fluid clears from pulmonary tissue.
                  </li>
                  <li>
                    <strong>Resolution of Edema:</strong> Swelling in the ankles, calves, and abdomen recedes, restoring natural lightness and mobility.
                  </li>
                  <li>
                    <strong>Improved Appetite & Digestion:</strong> Hepatic and bowel venous congestion clears, relieving bloating and restoring digestive strength.
                  </li>
                </ul>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Over 3 to 6 Months:
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Restored Stamina & Daily Energy:</strong> Chronic fatigue gives way to steady vitality. Most patients become comfortably able to walk 5 to 6 kilometers and climb stairs without breathlessness.
                  </li>
                  <li>
                    <strong>Stabilized Blood Pressure & Heart Rhythm:</strong> Blood pressure naturally balances, and uncomfortable palpitations or tachycardia steadily fade away.
                  </li>
                  <li>
                    <strong>Relaxation of Fluid Restrictions:</strong> As myocardial efficiency returns, patients can safely consume comfortable daily hydration without congestive fluid buildup.
                  </li>
                </ul>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-6 sm:mt-8 mb-3 sm:mb-4">
                  How We Track Your Success
                </h3>
                <p className="text-sm sm:text-base">
                  Healing is never left to subjective impression alone. We monitor every patient’s cardiovascular progress through serial 2D/Doppler echocardiograms, renal and liver function panels, and daily clinical parameter logs so you and your family can see undeniable proof of your heart growing stronger.
                </p>
              </div>
            </section>

            {/* ============================================================== */}
            {/* SECTION: DOCUMENTED CLINICAL CASE STUDIES (TRUST & PROOF) */}
            {/* ============================================================== */}
            <section id="case-studies" className="scroll-mt-24 space-y-8 sm:space-y-10">
              <div className="border-t-2 border-[#DBCFA8] pt-10 sm:pt-12">
                <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#517B32]" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#517B32] uppercase tracking-[0.2em]">
                    Verifiable Clinical Outcomes
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-[#66371B] mb-3 sm:mb-4 leading-tight">
                  Documented Clinical Case Studies
                </h2>
                <p className="text-sm sm:text-lg text-[#81754B] font-light leading-relaxed">
                  Real patient outcomes verified by independent multispeciality hospital echocardiography departments before and after specialized Ayurvedic cardiac treatment at Omshree Sidha Hospital.
                </p>
              </div>

              {/* 1. MOBILE-FRIENDLY CARD VIEW */}
              <div className="block md:hidden space-y-4">
                <div className="flex items-center justify-between pb-1 text-xs text-[#81754B]">
                  <span className="font-bold text-[#66371B]">At-a-Glance Summary</span>
                  <span>3 Documented Cases</span>
                </div>

                {/* Mobile Case 1 Card */}
                <div className="bg-white rounded-2xl border border-[#DBCFA8] p-4 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#517B32] uppercase tracking-wider">
                      Case 01 • Mr. A. R. (52/M)
                    </span>
                    <span className="text-[11px] font-semibold text-[#66371B] bg-[#F7F1E1] px-2 py-0.5 rounded-full border border-[#DBCFA8]">
                      5 Weeks
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-[#F7F1E1] p-3 rounded-xl border border-[#DBCFA8]">
                    <div className="text-center">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Before EF</span>
                      <span className="text-xl font-bold text-red-700">20%</span>
                    </div>
                    <div className="flex flex-col items-center px-2">
                      <span className="text-[10px] font-bold text-[#517B32]">+60% Gain</span>
                      <MoveRight className="h-4 w-4 text-[#517B32]" />
                    </div>
                    <div className="text-center">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider">After EF</span>
                      <span className="text-xl font-bold text-emerald-700">32%</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#81754B] leading-relaxed">
                    <strong>Diagnosis:</strong> Dilated Cardiomyopathy, severe biventricular failure, massive pedal edema, ascites, and anasarca.
                  </p>
                  <p className="text-[11px] text-[#66371B] flex items-center gap-1.5 pt-1">
                    <Building2 className="h-3.5 w-3.5 text-[#517B32] shrink-0" />
                    <span>Verified by Dr. Mehta&apos;s Hospital &amp; S H Medical Centre</span>
                  </p>
                </div>

                {/* Mobile Case 2 Card */}
                <div className="bg-white rounded-2xl border border-[#DBCFA8] p-4 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#517B32] uppercase tracking-wider">
                      Case 02 • Mr. P. V. (46/M)
                    </span>
                    <span className="text-[11px] font-semibold text-[#66371B] bg-[#F7F1E1] px-2 py-0.5 rounded-full border border-[#DBCFA8]">
                      12 Weeks
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-[#F7F1E1] p-3 rounded-xl border border-[#DBCFA8]">
                    <div className="text-center">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Before EF</span>
                      <span className="text-xl font-bold text-red-700">23%</span>
                    </div>
                    <div className="flex flex-col items-center px-2">
                      <span className="text-[10px] font-bold text-[#517B32]">+46.5% Gain</span>
                      <MoveRight className="h-4 w-4 text-[#517B32]" />
                    </div>
                    <div className="text-center">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider">After EF</span>
                      <span className="text-xl font-bold text-emerald-700">33.7%</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#81754B] leading-relaxed">
                    <strong>Diagnosis:</strong> Ischemic Cardiomyopathy (LAD territory) with Left Ventricular Apical Aneurysm. Stroke volume increased from 43 ml to 56–77 ml.
                  </p>
                  <p className="text-[11px] text-[#66371B] flex items-center gap-1.5 pt-1">
                    <Building2 className="h-3.5 w-3.5 text-[#517B32] shrink-0" />
                    <span>Verified by Caritas Heart Institute &amp; Kauvery Hospital</span>
                  </p>
                </div>

                {/* Mobile Case 3 Card */}
                <div className="bg-white rounded-2xl border border-[#DBCFA8] p-4 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#517B32] uppercase tracking-wider">
                      Case 03 • Mr. G. P. (57/M)
                    </span>
                    <span className="text-[11px] font-semibold text-[#517B32] bg-[#517B32]/10 px-2 py-0.5 rounded-full border border-[#517B32]/30">
                      Rapid: 23 Days
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-[#F7F1E1] p-3 rounded-xl border border-[#DBCFA8]">
                    <div className="text-center">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Before EF</span>
                      <span className="text-xl font-bold text-red-700">23%</span>
                    </div>
                    <div className="flex flex-col items-center px-2">
                      <span className="text-[10px] font-bold text-[#517B32]">+10% Absolute</span>
                      <MoveRight className="h-4 w-4 text-[#517B32]" />
                    </div>
                    <div className="text-center">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-wider">After EF</span>
                      <span className="text-xl font-bold text-emerald-700">33%</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#81754B] leading-relaxed">
                    <strong>Diagnosis:</strong> Dilated Cardiomyopathy, global hypokinesia, moderate-severe MR. Stroke volume surged from 44 ml to 58 ml (+31.8%).
                  </p>
                  <p className="text-[11px] text-[#66371B] flex items-center gap-1.5 pt-1">
                    <Building2 className="h-3.5 w-3.5 text-[#517B32] shrink-0" />
                    <span>Verified by Caritas Heart Institute (Pre &amp; Post)</span>
                  </p>
                </div>
              </div>

              {/* 2. DESKTOP COMPARISON TABLE */}
              <div className="hidden md:block bg-white rounded-2xl border border-[#DBCFA8] shadow-sm overflow-hidden">
                <div className="p-5 sm:p-6 bg-[#402816] text-[#F7F1E1]">
                  <h3 className="font-heading text-xl font-bold text-[#F7F1E1] mb-1">
                    At-a-Glance: Echocardiogram Outcomes Summary
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E3D8C1]/80 font-light">
                    Serial echo measurements certified by accredited multispeciality diagnostic centers
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#F7F1E1] border-b border-[#DBCFA8] text-[#66371B] font-semibold text-xs uppercase tracking-wider">
                        <th className="py-3.5 px-4">Case & Patient</th>
                        <th className="py-3.5 px-4">Diagnosis</th>
                        <th className="py-3.5 px-4">Baseline EF</th>
                        <th className="py-3.5 px-4">Post-Treatment EF</th>
                        <th className="py-3.5 px-4">Improvement</th>
                        <th className="py-3.5 px-4">Timeframe</th>
                        <th className="py-3.5 px-4">Verifying Center</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DBCFA8]/60 text-[#402816]">
                      <tr className="hover:bg-[#F7F1E1]/40 transition-colors">
                        <td className="py-4 px-4 font-medium">
                          Case 1: Mr. A. R.
                          <span className="block text-xs text-[#81754B] font-normal">52 Yrs / Male</span>
                        </td>
                        <td className="py-4 px-4 text-xs">Dilated Cardiomyopathy, Biventricular Congestive Failure, Anasarca</td>
                        <td className="py-4 px-4 font-bold text-red-700 bg-red-50/50">20%</td>
                        <td className="py-4 px-4 font-bold text-emerald-800 bg-emerald-50/50">32%</td>
                        <td className="py-4 px-4 font-semibold text-[#517B32]">+60% Relative Gain</td>
                        <td className="py-4 px-4 text-xs">5 Weeks</td>
                        <td className="py-4 px-4 text-xs">Dr. Mehta&apos;s Hospital & S H Medical Centre</td>
                      </tr>
                      <tr className="hover:bg-[#F7F1E1]/40 transition-colors">
                        <td className="py-4 px-4 font-medium">
                          Case 2: Mr. P. V.
                          <span className="block text-xs text-[#81754B] font-normal">46-47 Yrs / Male</span>
                        </td>
                        <td className="py-4 px-4 text-xs">Ischemic Cardiomyopathy (LAD), LV Apical Aneurysm, Severe Systolic Dysfunction</td>
                        <td className="py-4 px-4 font-bold text-red-700 bg-red-50/50">23%</td>
                        <td className="py-4 px-4 font-bold text-emerald-800 bg-emerald-50/50">33.7%</td>
                        <td className="py-4 px-4 font-semibold text-[#517B32]">+46.5% Relative Gain (+10.7% Absolute)</td>
                        <td className="py-4 px-4 text-xs">~12 Weeks</td>
                        <td className="py-4 px-4 text-xs">Caritas Heart Institute & Kauvery Hospital</td>
                      </tr>
                      <tr className="hover:bg-[#F7F1E1]/40 transition-colors">
                        <td className="py-4 px-4 font-medium">
                          Case 3: Mr. G. P.
                          <span className="block text-xs text-[#81754B] font-normal">57 Yrs / Male</span>
                        </td>
                        <td className="py-4 px-4 text-xs">Dilated Cardiomyopathy, Global Hypokinesia, Moderate-Severe MR, Moderate PAH</td>
                        <td className="py-4 px-4 font-bold text-red-700 bg-red-50/50">23%</td>
                        <td className="py-4 px-4 font-bold text-emerald-800 bg-emerald-50/50">33%</td>
                        <td className="py-4 px-4 font-semibold text-[#517B32]">+10% Absolute Gain (SV: 44ml → 58ml)</td>
                        <td className="py-4 px-4 text-xs">23 Days</td>
                        <td className="py-4 px-4 text-xs">Caritas Heart Institute (Pre & Post)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* CASE STUDY 1 CARD */}
              {/* -------------------------------------------------------- */}
              <article className="bg-white rounded-2xl border border-[#DBCFA8] p-5 sm:p-8 shadow-sm space-y-5 sm:space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DBCFA8]/70 pb-5 sm:pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#517B32]/10 text-[#3D5F26] border border-[#517B32]/30 text-xs font-bold uppercase tracking-wider">
                        Case Study 01
                      </span>
                      <span className="text-xs text-[#81754B]">Chennai, Tamil Nadu</span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#66371B] leading-tight">
                      Reversing Severe Dilated Cardiomyopathy & Biventricular Congestive Failure
                    </h3>
                  </div>

                  <div className="flex items-center justify-around sm:justify-center gap-3 bg-[#F7F1E1] p-3 rounded-xl border border-[#DBCFA8] shrink-0">
                    <div className="text-center px-2 sm:px-3">
                      <span className="block text-[10px] sm:text-[11px] text-[#81754B] uppercase tracking-wider font-semibold">Baseline EF</span>
                      <span className="font-heading text-2xl font-bold text-red-700">20%</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#517B32]" />
                    <div className="text-center px-2 sm:px-3">
                      <span className="block text-[10px] sm:text-[11px] text-[#81754B] uppercase tracking-wider font-semibold">Discharge EF</span>
                      <span className="font-heading text-2xl font-bold text-emerald-700">32%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-[#517B32]" /> Patient Demographics
                    </span>
                    <p className="text-[#81754B]">
                      52-Year-Old Male (Mr. A. R.), presented with severe congestive symptoms and acute functional decline.
                    </p>
                  </div>
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Activity className="h-3.5 w-3.5 text-[#517B32]" /> Chief Complaints
                    </span>
                    <p className="text-[#81754B]">
                      Severe lower limb edema, debilitating breathing difficulty on minimal exertion, rapid weight loss, and extreme fatigue.
                    </p>
                  </div>
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60 sm:col-span-2 md:col-span-1">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-[#517B32]" /> Verifying Centers
                    </span>
                    <p className="text-[#81754B]">
                      Dr. Mehta&apos;s Multispeciality Hospital (Chennai), S H Medical Centre (Kottayam), and Caritas Heart Institute.
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 sm:space-y-4 text-[#81754B] text-sm sm:text-base leading-relaxed font-light">
                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B]">
                    Clinical Presentation & Pre-Treatment Investigations:
                  </h4>
                  <p>
                    On 26 July 2023, baseline 2D and Doppler echocardiography at Dr. Mehta&apos;s Multispeciality Hospital in Chennai documented an extremely compromised <strong>Ejection Fraction of just 20%</strong> (Fractional Shortening 10%), with all four chambers dilated (LA, LV, RA, RV) and severe biventricular systolic dysfunction accompanied by global hypokinesia and inferior vena cava congestion (IVC 24 mm).
                  </p>
                  <p>
                    A concurrent whole-abdomen ultrasound at AK &amp; AK Scans &amp; Labs confirmed systemic fluid overload (anasarca) characterized by bilateral pleural effusions, congestive hepatomegaly, and ascites with anterior abdominal wall edema.
                  </p>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B] pt-1 sm:pt-2">
                    Ayurvedic Inpatient Management Protocol:
                  </h4>
                  <p>
                    The patient was admitted under inpatient care at Omshree Sidha Hospital. The treatment protocol incorporated:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5">
                    <li>
                      <strong>Hrudaya Basti:</strong> Daily localized warm medicated oil pooling over the cardiac region to nourish cardiac myofibers, relieve chest constriction, and improve coronary microperfusion.
                    </li>
                    <li>
                      <strong>Specialized Kizhi (Elakizhi / Podikizhi):</strong> Targeted herbal boluses to decongest stagnant lymph, reduce systemic edema, and stimulate tissue metabolism.
                    </li>
                    <li>
                      <strong>Cardiotonic & Diuretic Formulations:</strong> Internal administration of classical and proprietary herbal extracts formulated with <em>Arjuna</em>, <em>Punarnava</em>, <em>Gokshura</em>, and <em>Bala</em>, working synergistically with ongoing modern medical support.
                    </li>
                  </ul>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B] pt-1 sm:pt-2">
                    Objective Echocardiographic Milestones:
                  </h4>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5">
                    <li>
                      <strong>2-Week Intermediate Echo (16/08/2023, Caritas Heart Institute):</strong> Within just two weeks of starting therapy, repeat echocardiography confirmed an early gain from 20% to <strong>25% EF</strong>, with stroke volume measuring 38 ml.
                    </li>
                    <li>
                      <strong>Discharge Echo (04/09/2023, S H Medical Centre Heart Institute):</strong> Conducted by Consultant Cardiologist Dr. Jose Chacko Cherackal MD, MRCP(UK), the discharge echocardiogram confirmed an improvement of EF to <strong>32%</strong> (a 60% relative increase), fractional shortening rising to 15%, and stroke volume improving to 48 ml.
                    </li>
                    <li>
                      <strong>Symptom Resolution:</strong> Complete disappearance of leg edema and ascites, normalized breathing without orthopnea, SpO2 consistently holding at 98–100%, and regained ability to walk comfortably without shortness of breath.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#66371B] flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-[#517B32]" />
                    Original Diagnostic & Echocardiogram Reports (Tap to Expand & Zoom):
                  </h4>
                  <CaseStudyReportGallery reports={case1Reports} activeCaseLabel="Case 1 (Mr. A. R., 52/M)" />
                </div>
              </article>

              {/* -------------------------------------------------------- */}
              {/* CASE STUDY 2 CARD */}
              {/* -------------------------------------------------------- */}
              <article className="bg-white rounded-2xl border border-[#DBCFA8] p-5 sm:p-8 shadow-sm space-y-5 sm:space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DBCFA8]/70 pb-5 sm:pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#517B32]/10 text-[#3D5F26] border border-[#517B32]/30 text-xs font-bold uppercase tracking-wider">
                        Case Study 02
                      </span>
                      <span className="text-xs text-[#81754B]">South India</span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#66371B] leading-tight">
                      Ischemic Cardiomyopathy & Apical Aneurysm Recovery
                    </h3>
                  </div>

                  <div className="flex items-center justify-around sm:justify-center gap-3 bg-[#F7F1E1] p-3 rounded-xl border border-[#DBCFA8] shrink-0">
                    <div className="text-center px-2 sm:px-3">
                      <span className="block text-[10px] sm:text-[11px] text-[#81754B] uppercase tracking-wider font-semibold">Baseline EF</span>
                      <span className="font-heading text-2xl font-bold text-red-700">23%</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#517B32]" />
                    <div className="text-center px-2 sm:px-3">
                      <span className="block text-[10px] sm:text-[11px] text-[#81754B] uppercase tracking-wider font-semibold">Follow-Up EF</span>
                      <span className="font-heading text-2xl font-bold text-emerald-700">33.7%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-[#517B32]" /> Patient Demographics
                    </span>
                    <p className="text-[#81754B]">
                      46-Year-Old Male (Mr. P. V.), history of myocardial infarction with persistent low contractile output.
                    </p>
                  </div>
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Activity className="h-3.5 w-3.5 text-[#517B32]" /> Clinical Pathology
                    </span>
                    <p className="text-[#81754B]">
                      LAD territory infarction with Left Ventricular apical aneurysm, dilated left ventricle, dyspnea, and persistent fatigue.
                    </p>
                  </div>
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60 sm:col-span-2 md:col-span-1">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-[#517B32]" /> Verifying Centers
                    </span>
                    <p className="text-[#81754B]">
                      Caritas Heart Institute (Baseline) and Kauvery Hospital, Tirunelveli (Follow-up Echo).
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 sm:space-y-4 text-[#81754B] text-sm sm:text-base leading-relaxed font-light">
                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B]">
                    Baseline Cardiac Status:
                  </h4>
                  <p>
                    An echocardiography report from Caritas Heart Institute dated 02 September 2024 diagnosed severe left ventricular systolic dysfunction secondary to regional wall motion abnormalities (RWMA) in the LAD artery territory, accompanied by an LV apical aneurysm, a dilated left ventricle (LVIDd 6.1 cm), stroke volume of 43 ml, and a severely depressed <strong>Ejection Fraction of 23%</strong>.
                  </p>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B] pt-1 sm:pt-2">
                    Ayurvedic Interventions & Daily Clinical Monitoring:
                  </h4>
                  <p>
                    During an intensive inpatient stay from 01 to 24 September 2024 at Omshree Sidha Hospital, the patient received customized Hrudaya Basti, therapeutic Abhyanga, and proprietary cardiac rejuvenation herbal blends. The hospital&apos;s daily clinical self-assessment sheets track:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5">
                    <li>Disappearance of episodic chest discomfort and calf pain within the first week.</li>
                    <li>Fatigue improving steadily from moderate tiredness to completely absent/mild.</li>
                    <li>SpO2 maintaining optimal levels between 98% and 99%, with stable blood pressure (90/60 to 100/75 mmHg).</li>
                    <li>Restful, undisturbed sleep and normalized digestive functions.</li>
                  </ul>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B] pt-1 sm:pt-2">
                    Confirmed Post-Treatment Echocardiogram (Kauvery Hospital):
                  </h4>
                  <p>
                    Follow-up echocardiogram performed on 30 November 2024 at Kauvery Hospital, Tirunelveli confirmed that the patient&apos;s <strong>Ejection Fraction had risen to 33.7% (A4C) / 33.3% (MM-Teich)</strong>—an absolute improvement of over 10.7 percentage points (+46.5% relative improvement). Stroke volume expanded from 43 ml to 56.0 ml (A4C) and 77.0 ml (Teich), proving significant reverse ventricular remodeling and stronger pumping power.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#66371B] flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-[#517B32]" />
                    Original Diagnostic & Daily Monitoring Reports (Tap to Expand & Zoom):
                  </h4>
                  <CaseStudyReportGallery reports={case2Reports} activeCaseLabel="Case 2 (Mr. P. V., 46/M)" />
                </div>
              </article>

              {/* -------------------------------------------------------- */}
              {/* CASE STUDY 3 CARD */}
              {/* -------------------------------------------------------- */}
              <article className="bg-white rounded-2xl border border-[#DBCFA8] p-5 sm:p-8 shadow-sm space-y-5 sm:space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DBCFA8]/70 pb-5 sm:pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#517B32]/10 text-[#3D5F26] border border-[#517B32]/30 text-xs font-bold uppercase tracking-wider">
                        Case Study 03
                      </span>
                      <span className="text-xs text-[#81754B]">Documented In 23 Days</span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#66371B] leading-tight">
                      Rapid Reverse Ventricular Remodeling in Dilated Cardiomyopathy
                    </h3>
                  </div>

                  <div className="flex items-center justify-around sm:justify-center gap-3 bg-[#F7F1E1] p-3 rounded-xl border border-[#DBCFA8] shrink-0">
                    <div className="text-center px-2 sm:px-3">
                      <span className="block text-[10px] sm:text-[11px] text-[#81754B] uppercase tracking-wider font-semibold">Baseline EF</span>
                      <span className="font-heading text-2xl font-bold text-red-700">23%</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#517B32]" />
                    <div className="text-center px-2 sm:px-3">
                      <span className="block text-[10px] sm:text-[11px] text-[#81754B] uppercase tracking-wider font-semibold">Discharge EF</span>
                      <span className="font-heading text-2xl font-bold text-emerald-700">33%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-[#517B32]" /> Patient Demographics
                    </span>
                    <p className="text-[#81754B]">
                      57-Year-Old Male (Mr. G. P.), admitted with severe dilated cardiomyopathy and exertional dyspnea.
                    </p>
                  </div>
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Activity className="h-3.5 w-3.5 text-[#517B32]" /> Baseline Findings
                    </span>
                    <p className="text-[#81754B]">
                      Global LV hypokinesia, severe LV systolic dysfunction, dilated chambers (RA, LA, LV), moderate-to-severe MR, and pulmonary hypertension.
                    </p>
                  </div>
                  <div className="bg-[#F7F1E1]/50 p-3.5 sm:p-4 rounded-xl border border-[#DBCFA8]/60 sm:col-span-2 md:col-span-1">
                    <span className="block text-xs font-bold text-[#66371B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#517B32]" /> Rapid Recovery
                    </span>
                    <p className="text-[#81754B]">
                      Echocardiograms repeated at the same cardiac facility just 23 days apart confirmed an absolute 10% EF rise.
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 sm:space-y-4 text-[#81754B] text-sm sm:text-base leading-relaxed font-light">
                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B]">
                    Baseline Status (15 February 2025):
                  </h4>
                  <p>
                    Echocardiography at Caritas Heart Institute performed on 15 February 2025 demonstrated severe left ventricular systolic dysfunction with an <strong>Ejection Fraction of 23%</strong>, fractional shortening of 11%, stroke volume of 44 ml, dilated chambers (RA, LA, LV), moderate-to-severe mitral regurgitation, and moderate pulmonary arterial hypertension (TR maxPG: 52.85 mmHg). Concurrently, metabolic blood tests showed elevated HbA1c (6.8%) with stable kidney parameters.
                  </p>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B] pt-1 sm:pt-2">
                    Intensive Inpatient Therapy Protocol:
                  </h4>
                  <p>
                    The patient underwent continuous inpatient therapy combining Hrudaya Basti, lipid-modulating herbal formulations, specialized Kashayams, gentle monitored physical activity, and dietary optimization.
                  </p>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#66371B] pt-1 sm:pt-2">
                    Repeat Echocardiogram After 23 Days (10 March 2025):
                  </h4>
                  <p>
                    A repeat echocardiogram conducted at the same facility (Caritas Heart Institute) by Consultant Cardiologist Dr. Joby K Thomas, MD, DM on 10 March 2025 documented:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5">
                    <li>
                      <strong>Ejection Fraction improved to 33%</strong> (an absolute gain of 10 points in only 23 days).
                    </li>
                    <li>
                      <strong>Fractional Shortening rose from 11% to 16%</strong>, demonstrating improved contractile mechanics.
                    </li>
                    <li>
                      <strong>Stroke Volume increased from 44 ml to 58 ml</strong> (a 31.8% volumetric increase in blood pumped per beat).
                    </li>
                    <li>
                      <strong>Left Ventricular Dimension in Systole (LVIDs) contracted from 5.5 cm down to 4.9 cm</strong>, indicating active reverse ventricular remodeling.
                    </li>
                    <li>
                      The formal diagnostic summary upgraded the patient&apos;s systolic status from <em>Severe</em> to <em>Moderate</em> dysfunction, with marked alleviation of exertional breathlessness.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#66371B] flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-[#517B32]" />
                    Original Diagnostic & Laboratory Reports (Tap to Expand & Zoom):
                  </h4>
                  <CaseStudyReportGallery reports={case3Reports} activeCaseLabel="Case 3 (Mr. G. P., 57/M)" />
                </div>
              </article>

              {/* POST-CASE STUDIES HIGH-CONVERTING CTA CARD (PEAK INTENT) */}
              <div className="bg-gradient-to-br from-[#402816] via-[#4d321d] to-[#402816] text-[#F7F1E1] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl border border-[#B4833D]/40 space-y-6">
                <div className="max-w-2xl space-y-2">
                  <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider">
                    <Stethoscope className="h-3.5 w-3.5 text-[#6F9940]" />
                    Doctor Clinical Evaluation
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F1E1]">
                    Have a Recent Echocardiogram Showing Low EF?
                  </h3>
                  <p className="text-sm sm:text-base text-[#E3D8C1]/90 font-light leading-relaxed">
                    Don&apos;t wait for symptoms to worsen. Share photos of your Echo report with Dr. Jose Vaidhyan&apos;s senior medical team on WhatsApp. We will evaluate your heart muscle condition, assess your recovery potential, and suggest an individualized treatment plan.
                  </p>
                </div>

                {/* Conversion Buttons Strip */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={WHATSAPP_EVAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 sm:h-13 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg transition-all"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Your Echo Report Now</span>
                  </a>

                  <a
                    href="tel:+919846992789"
                    className="h-12 sm:h-13 px-5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Helpline: +91 98469 92789</span>
                  </a>

                  <Link
                    href="/contact"
                    className="h-12 sm:h-13 px-5 rounded-xl bg-[#517B32] hover:bg-[#3D5F26] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Book Inpatient Stay</span>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#E3D8C1]/75 pt-1 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-[#6F9940]" /> 100% Confidential
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-[#6F9940]" /> Direct Hospital Doctor Review
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-[#6F9940]" /> Response within 24 Hours
                  </span>
                </div>
              </div>

              {/* Clinical Verification & Medical Ethics Disclosure */}
              <div className="bg-[#F7F1E1]/70 border border-[#DBCFA8] rounded-2xl p-5 sm:p-8 text-xs sm:text-sm text-[#81754B] space-y-3">
                <div className="flex items-center gap-2 text-[#66371B] font-bold">
                  <ShieldCheck className="h-5 w-5 text-[#517B32] shrink-0" />
                  <span>Clinical Governance &amp; Patient Privacy Statement</span>
                </div>
                <p className="leading-relaxed">
                  Patient personal identifying details (full surnames and personal contact numbers) have been anonymized in accordance with medical ethics and privacy standards. All medical diagnostics, dates, measurements, and certifying cardiology departments are authentic, unaltered clinical records on file at Omshree Sidha Hospital.
                </p>
                <p className="leading-relaxed">
                  <strong>Important Notice:</strong> Individual response to Ayurvedic therapy varies based on cardiac pathology, prior infarct extent, and underlying comorbidities. Ayurvedic cardiac care is planned integratively alongside ongoing modern medical treatment; patients must never alter or stop their prescribed allopathic cardiac medications without prior consultation with their treating cardiologist.
                </p>
              </div>
            </section>

            {/* SECTION: CAUSES */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Causes of Low Ejection Fraction
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  A low ejection fraction (EF) is caused by conditions that weaken, stretch, or permanently damage the heart muscle, hindering its ability to contract powerfully. The most frequent underlying causes of a low EF include:
                </p>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Damage to the Heart Muscle
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Coronary Artery Disease (CAD):</strong> Narrowed arteries restrict oxygen-rich blood flow to the heart, gradually starving and weakening the muscle tissue over time.
                  </li>
                  <li>
                    <strong>Heart Attack (Myocardial Infarction):</strong> A sudden blockage cuts off blood supply to a portion of the heart, replacing healthy muscle tissue with non-pumping scar tissue.
                  </li>
                  <li>
                    <strong>Cardiomyopathy:</strong> A disease of the heart muscle itself that causes it to become stretched out and enlarged (dilated cardiomyopathy), preventing efficient contractions.
                  </li>
                  <li>
                    <strong>Myocarditis:</strong> Inflammation of the heart muscle, typically triggered by a viral infection, which temporarily or permanently reduces pumping strength.
                  </li>
                </ul>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Structural and Mechanical Strain
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Chronic High Blood Pressure (Hypertension):</strong> Forces the heart to work much harder to push blood out to the body, eventually causing the muscle to stiffen or wear out.
                  </li>
                  <li>
                    <strong>Heart Valve Disease:</strong> Leaky or narrowed valves disrupt smooth blood flow, causing blood to back up or forcing the heart to pump against intense resistance.
                  </li>
                  <li>
                    <strong>Congenital Heart Defects:</strong> Structural heart abnormalities present since birth can cause abnormal wear and tear on the ventricles over time.
                  </li>
                </ul>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Other Contributing Factors
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Severe Arrhythmias:</strong> An abnormally fast or chaotic heart rate over a prolonged period does not allow the heart chambers to fill or contract effectively.
                  </li>
                  <li>
                    <strong>Cardiotoxicity:</strong> Certain medical interventions, such as specific chemotherapy drugs or chest radiation, can injure cardiac myocytes.
                  </li>
                  <li>
                    <strong>Substance Abuse:</strong> Long-term heavy consumption of alcohol or toxic agents directly damages heart tissue (toxic cardiomyopathy).
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION: SYMPTOMS */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Symptoms of Low EF
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  Symptoms of a low ejection fraction occur because the weakened heart muscle cannot pump enough oxygen-rich blood to meet bodily needs, causing blood and fluid to back up into the lungs and peripheral tissues.
                </p>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Breathing Difficulties (Fluid Dynamics)
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Shortness of Breath (Dyspnea):</strong> Feeling winded during everyday activities, like walking or climbing stairs.
                  </li>
                  <li>
                    <strong>Orthopnea:</strong> Difficulty breathing when lying flat, often requiring extra pillows to sleep comfortably.
                  </li>
                  <li>
                    <strong>Paroxysmal Nocturnal Dyspnea:</strong> Waking up suddenly in the middle of the night gasping for air.
                  </li>
                  <li>
                    <strong>Chronic Cough or Wheezing:</strong> Persistent cough that may produce white or pink-tinged phlegm, caused by fluid building up in the lungs.
                  </li>
                </ul>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Systemic Fluid Retention (Congestion)
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Peripheral Edema:</strong> Obvious swelling in the legs, ankles, and feet.
                  </li>
                  <li>
                    <strong>Abdominal Swelling (Ascites):</strong> Bloating, tightness, or swelling in the stomach area.
                  </li>
                  <li>
                    <strong>Sudden Weight Gain:</strong> Gaining 1 to 1.5 kg in a single day or over 2 kg in a week due to rapid water retention.
                  </li>
                  <li>
                    <strong>Gastrointestinal Distress:</strong> A constant feeling of fullness, nausea, or loss of appetite due to venous congestion in the liver and digestive tract.
                  </li>
                </ul>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Low Blood Flow (Perfusion Issues)
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Severe Fatigue:</strong> Feeling profoundly exhausted or weak because skeletal muscles are starved of oxygenated blood.
                  </li>
                  <li>
                    <strong>Exercise Intolerance:</strong> Inability to carry out physical chores that previously felt routine.
                  </li>
                  <li>
                    <strong>Cognitive Changes:</strong> Dizziness, lightheadedness, or difficulty concentrating caused by reduced cerebral perfusion.
                  </li>
                </ul>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Cardiac Compensation
                </h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Palpitations:</strong> A sensation of a racing, pounding, or fluttering heartbeat as the heart attempts to beat faster to compensate for low stroke volume.
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION: ROOT CAUSE TREATMENT */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Treating the Underlying Causes of Low EF
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  At Omshree Sidha Hospital, low Ejection Fraction treatment integrates specialized medication, targeted Panchakarma, and physician-supervised physical movement to improve EF from the root level. Rather than merely managing end-stage fluid retention with escalating diuretics, our approach works to restore myocardial contractility, reduce fibrous wall stiffness, improve microperfusion, and stimulate cellular repair across the ventricular myocardium.
                </p>
              </div>
            </section>

            {/* SECTION: MANAGEMENT & THERAPIES */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Comprehensive Management of Low EF
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  1. Targeted Ayurvedic Herbal Formulations
                </h3>
                <p>
                  Every patient’s cardiovascular condition is distinct. We customize each treatment protocol using classical Ayurvedic formulations, proprietary blends, and concentrated Kashayams prepared directly in our own GMP-certified manufacturing unit.
                </p>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Healing Cardiac Myocytes:</strong> Formulations help alleviate myocardial inflammation, soften fibrotic stiffness, and enhance metabolic exchange in heart walls.
                  </li>
                  <li>
                    <strong>Boosting Ventricular Pumping Power:</strong> Herbal bio-actives tonify the left ventricle, increasing stroke volume and systemic oxygen delivery.
                  </li>
                  <li>
                    <strong>Stabilizing Vital Signs:</strong> Therapies help normalize blood pressure, stabilize pulse rates, and reduce sympathetic nervous system overdrive.
                  </li>
                </ul>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-6 sm:mt-8 mb-3 sm:mb-4">
                  2. Panchakarma Therapies for Low EF
                </h3>
                <p>
                  Specialized Panchakarma therapies tailored specifically for cardiac conditions include Abhyanga, Elakizhi or Podikizhi, and Hrudaya Basti.
                </p>

                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  Ayurvedic Oil Massage (Abhyanga)
                </h4>
                <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-[#DBCFA8]">
                  <Image
                    src="/images/conditions/low-ejection-fraction/low-ef-abhyanga.webp"
                    alt="Abhyanga Ayurvedic Oil Massage for Cardiac Health"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base">
                  <li>
                    <strong>Improves Blood Circulation:</strong> Warm herbal oils facilitate peripheral vascular return and relieve peripheral vascular resistance.
                  </li>
                  <li>
                    <strong>Strengthens Musculature:</strong> Nourishes tissues and relieves chronic fatigue and heaviness in the limbs.
                  </li>
                  <li>
                    <strong>Calms the Nervous System:</strong> Deep relaxation lowers stress hormones (cortisol and adrenaline), easing hemodynamic strain on the heart.
                  </li>
                  <li>
                    <strong>Aids Lymphatic Drainage:</strong> Stimulates lymphatic circulation to clear metabolic wastes and reduce congestive swelling.
                  </li>
                </ul>

                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#66371B] mt-8 sm:mt-10 mb-2">
                  Elakizhi and Podikizhi
                </h4>
                <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-[#DBCFA8]">
                  <Image
                    src="/images/conditions/low-ejection-fraction/low-ef-kizhi-clean.png"
                    alt="Elakizhi and Podikizhi Herbal Bolus Therapy"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base">
                  Specialized Ayurvedic therapies using heated medicinal boluses applied over the body. Elakizhi utilizes fresh medicated leaves to soothe and nourish muscle tissues, while Podikizhi uses dried herbal powders to stimulate circulation and relieve deep-seated inflammatory stiffness.
                </p>

                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#66371B] mt-8 sm:mt-10 mb-2">
                  Hrudaya Basti
                </h4>
                <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-[#DBCFA8]">
                  <Image
                    src="/images/conditions/low-ejection-fraction/low-ef-hrudaya-basti-clean-close.png"
                    alt="Hrudaya Basti Heart Oil Retention Therapy"
                    width={1024}
                    height={600}
                    className="w-full max-h-[500px] object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base">
                  Hrudaya Basti is an essential cardiac therapy in which warm medicated herbal oil is pooled over the precordial (chest) area inside a specially crafted herbal dough ring for 30 to 45 minutes. The sustained warmth and lipid-soluble herbal constituents deeply nourish the cardiac tissues, enhance coronary circulation, relieve chest heaviness, and support improved ejection fraction.
                </p>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-8 sm:mt-10 mb-3 sm:mb-4">
                  3. Lifestyle, Diet & Physical Activity
                </h3>
                <p className="text-sm sm:text-base">
                  Patients are guided on low-sodium, heart-nourishing dietary habits, sleep hygiene, and doctor-approved walking routines. Within 1 to 3 months of recovery, most patients comfortably walk 5 to 6 kilometers daily without dyspnea.
                </p>
              </div>
            </section>

            {/* SECTION: HOSPITAL STAY DURATION & REMOTE VIDEO CONSULTATION */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                How Long Do Low EF Patients Stay in the Hospital?
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  If low EF is the primary condition without multi-organ failure, improvement begins rapidly. When associated complications like advanced renal impairment or longstanding diabetes exist, recovery proceeds in planned phases. Most patients benefit immensely from an initial inpatient stay of 2 to 4 weeks, during which intensive therapies like Hrudaya Basti and daily clinical tracking are administered.
                </p>

                {/* Conversational Remote Consultation Card */}
                <div className="bg-[#F7F1E1] border-2 border-[#DBCFA8] rounded-2xl p-5 sm:p-7 space-y-4 my-6">
                  <div className="flex items-center gap-2.5 text-[#66371B]">
                    <Video className="h-5 w-5 text-[#517B32]" />
                    <h3 className="font-heading text-lg sm:text-xl font-bold">
                      Can&apos;t Travel to Kerala Immediately? Start from Home
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#81754B] leading-relaxed">
                    If your physical condition or distance currently makes travel difficult, you do not have to wait. Send your medical records for a <strong>Doctor Video Consultation</strong>. Our senior physicians evaluate your Echo reports, design an initial cardioprotective herbal regimen, and dispatch GMP-certified medicines directly to your doorstep across India and internationally.
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <a
                      href={WHATSAPP_EVAL_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="h-11 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
                    >
                      <MessageCircle className="h-4 w-4" /> Book Video Consultation via WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="h-11 px-4 rounded-xl bg-white border border-[#DBCFA8] text-[#66371B] font-semibold text-xs sm:text-sm flex items-center justify-center hover:bg-[#F7F1E1] transition-colors"
                    >
                      Fill Online Enquiry Form
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: RELATION BETWEEN LOW EF, CARDIOMYOPATHY & HEART FAILURE */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Low Ejection Fraction, Cardiomyopathy, and Heart Failure
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-[#DBCFA8] bg-white flex justify-center p-3 sm:p-4">
                  <Image
                    src="/images/conditions/low-ejection-fraction/low-ef-cardiomyopathy.webp"
                    alt="Cardiomyopathy and Heart Muscle Dilation Diagram"
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain max-h-[600px]"
                  />
                </div>
                <p>
                  Low Ejection Fraction (Low EF) and Cardiomyopathy are interconnected heart conditions where the heart muscle is weakened, stretched, or enlarged, causing it to pump less than 40% of its normal capacity. Cardiomyopathy leads to reduced cardiac output, producing breathlessness, edema, and fatigue. Left unmanaged, it progresses to Congestive Heart Failure (CHF).
                </p>
                <p>
                  Cardiomyopathy is the structural muscle condition → Low EF is the measurable percentage of weakness → Heart Failure is the resulting clinical state. Omshree Sidha Hospital focuses on reverse remodeling—strengthening the myocardial wall to restore natural contractile power without invasive surgeries.
                </p>
              </div>
            </section>

            {/* SECTION: CONGESTIVE HEART FAILURE */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Congestive Heart Failure (CHF) Care
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  Congestive Heart Failure (CHF) is a chronic, progressive condition in which the heart cannot pump blood efficiently, causing fluid buildup in the lungs, abdomen, and lower limbs. While conventional medicine often focuses primarily on symptom management and diuretic escalation, specialized Ayurveda aims to restore intrinsic contractile capacity, clear tissue congestion, and stabilize cellular cardiac vitality.
                </p>
                <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-[#DBCFA8] bg-white flex justify-center p-3 sm:p-4">
                  <Image
                    src="/images/conditions/low-ejection-fraction/low-ef-congestive-heart-failure.webp"
                    alt="Congestive Heart Failure Fluid Dynamics Diagram"
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain max-h-[600px]"
                  />
                </div>
              </div>
            </section>

            {/* SECTION: DIAGNOSIS & TESTS */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Diagnostic Tests for Low EF
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  1. Primary Imaging (To Measure EF)
                </h3>
                <p>
                  Echocardiogram (2D and Doppler Echo), Cardiac MRI (Magnetic Resonance Imaging), MUGA Scan, and Cardiac CT Scan.
                </p>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  2. Investigating Underlying Causes
                </h3>
                <p>
                  Coronary Angiogram, Electrocardiogram (ECG), and Exercise Stress Testing (TMT when safe).
                </p>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#66371B] mt-5 sm:mt-6 mb-2">
                  3. Supportive Biomarkers & Baseline Labs
                </h3>
                <p>
                  NT-proBNP or BNP blood tests, Chest X-rays, Serum Creatinine, Liver Panels, and Electrolyte assays.
                </p>
              </div>
            </section>

            {/* SECTION: ABOUT THIS INVENTION */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                About this Treatment Heritage
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  Chief Physician Jose Vaidhyan developed these specialized cardiac protocols between 1998 and 2000. When his own father suffered recurrent myocardial infarctions in 1997, 1998, and 1999 and became unable to walk even 100 meters, Dr. Jose Vaidhyan investigated traditional formulations alongside classical Panchakarma therapies. Through meticulous customization of botanical extracts and Hrudaya Basti, his father achieved a complete functional recovery over nine months, remaining healthy and fully active until passing away at age 84 following an accidental fall—with his heart functioning soundly.
                </p>
                <p>
                  Today, this clinical experience forms the bedrock of our cardiovascular program, helping patients from across India and around the globe restore their heart health naturally.
                </p>
              </div>
            </section>

            {/* SECTION: KEY HERBS */}
            <section>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#66371B] mb-4 sm:mb-6">
                Key Cardioprotective Herbs Used in Treatment
              </h2>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4 mb-8">
                <p>
                  Our internal formulations combine renowned cardioprotective botanicals, including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-4">
                  <div className="bg-[#F7F1E1] p-3 sm:p-4 rounded-xl border border-[#DBCFA8] text-center">
                    <strong className="block text-[#66371B] text-sm sm:text-base">Arjuna</strong>
                    <span className="text-[11px] sm:text-xs text-[#81754B]">Terminalia arjuna (Cardiotonic)</span>
                  </div>
                  <div className="bg-[#F7F1E1] p-3 sm:p-4 rounded-xl border border-[#DBCFA8] text-center">
                    <strong className="block text-[#66371B] text-sm sm:text-base">Punarnava</strong>
                    <span className="text-[11px] sm:text-xs text-[#81754B]">Boerhavia diffusa (Decongestant)</span>
                  </div>
                  <div className="bg-[#F7F1E1] p-3 sm:p-4 rounded-xl border border-[#DBCFA8] text-center">
                    <strong className="block text-[#66371B] text-sm sm:text-base">Ashwagandha</strong>
                    <span className="text-[11px] sm:text-xs text-[#81754B]">Withania somnifera (Vitalizer)</span>
                  </div>
                  <div className="bg-[#F7F1E1] p-3 sm:p-4 rounded-xl border border-[#DBCFA8] text-center">
                    <strong className="block text-[#66371B] text-sm sm:text-base">Bala</strong>
                    <span className="text-[11px] sm:text-xs text-[#81754B]">Sida cordifolia (Muscle Strength)</span>
                  </div>
                  <div className="bg-[#F7F1E1] p-3 sm:p-4 rounded-xl border border-[#DBCFA8] text-center">
                    <strong className="block text-[#66371B] text-sm sm:text-base">Guduchi</strong>
                    <span className="text-[11px] sm:text-xs text-[#81754B]">Tinospora cordifolia (Antioxidant)</span>
                  </div>
                  <div className="bg-[#F7F1E1] p-3 sm:p-4 rounded-xl border border-[#DBCFA8] text-center">
                    <strong className="block text-[#66371B] text-sm sm:text-base">Amalaki</strong>
                    <span className="text-[11px] sm:text-xs text-[#81754B]">Emblica officinalis (Rejuvenator)</span>
                  </div>
                  <div className="bg-[#F7F1E1] p-3 sm:p-4 rounded-xl border border-[#DBCFA8] text-center">
                    <strong className="block text-[#66371B] text-sm sm:text-base">Gokshura</strong>
                    <span className="text-[11px] sm:text-xs text-[#81754B]">Tribulus terrestris (Fluid Balance)</span>
                  </div>
                  <div className="bg-[#F7F1E1] p-3 sm:p-4 rounded-xl border border-[#DBCFA8] text-center">
                    <strong className="block text-[#66371B] text-sm sm:text-base">Varuna</strong>
                    <span className="text-[11px] sm:text-xs text-[#81754B]">Crataeva nurvala (Microcirculation)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
            <section className="bg-white rounded-2xl border border-[#DBCFA8] p-5 sm:p-8 shadow-xs space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#517B32]" />
                <span className="text-xs font-bold text-[#517B32] uppercase tracking-[0.2em]">
                  Patient Questions Answered
                </span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#66371B] leading-tight">
                Frequently Asked Questions About Low EF Care
              </h2>

              <div className="space-y-4 divide-y divide-[#DBCFA8]/60 text-sm">
                <div className="pt-4 first:pt-0">
                  <h3 className="font-bold text-[#66371B] text-base mb-1">
                    Can Low Ejection Fraction really improve with Ayurvedic treatment?
                  </h3>
                  <p className="text-[#81754B] font-light leading-relaxed text-sm">
                    Yes. As demonstrated in our documented clinical case studies above, patients with severe low ejection fraction (EF between 20% and 23%) achieve verifiable improvements to 32% – 33.7% within 3 to 12 weeks of treatment at Omshree Sidha Hospital. Every case is tracked by repeat 2D/Doppler echocardiography from certified modern hospitals.
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold text-[#66371B] text-base mb-1">
                    How quickly can I expect to see improvements in my symptoms and EF?
                  </h3>
                  <p className="text-[#81754B] font-light leading-relaxed text-sm">
                    Symptomatic relief—such as easier breathing, reduced leg edema, and improved sleep—typically begins within the first 7 to 14 days. Objective echocardiographic gains are routinely measured after 14 to 30 days of inpatient therapy.
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold text-[#66371B] text-base mb-1">
                    Do I have to discontinue my modern heart medicines?
                  </h3>
                  <p className="text-[#81754B] font-light leading-relaxed text-sm">
                    No. Patients must continue all modern cardiovascular medications prescribed by their cardiologist. Our specialized Ayurvedic cardiac treatment operates synergistically alongside your existing medical prescriptions.
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold text-[#66371B] text-base mb-1">
                    Can outstation or international patients seek consultation?
                  </h3>
                  <p className="text-[#81754B] font-light leading-relaxed text-sm">
                    Yes. If travel is difficult initially, patients or their family members can send current echocardiogram, angiogram, and blood test reports for an online consultation. We assess clinical suitability and coordinate travel plans when inpatient therapy is recommended.
                  </p>
                </div>
              </div>
            </section>

            {/* PRE-FOOTER FULL CONVERSATIONAL CONVERSION SECTION */}
            <section className="bg-gradient-to-br from-[#402816] via-[#4d321d] to-[#402816] text-[#F7F1E1] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl border border-[#B4833D]/40 space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider">
                  Omshree Sidha Hospital • Kottayam, Kerala
                </span>
                <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F7F1E1] tracking-tight">
                  Start Your Heart&apos;s Natural Recovery Today
                </h2>
                <p className="text-xs sm:text-base text-[#E3D8C1]/90 font-light leading-relaxed">
                  Join hundreds of heart failure and cardiomyopathy patients who have experienced renewed energy, easier breathing, and documented EF improvements through our non-invasive care.
                </p>
              </div>

              {/* 3 Clear Conversion Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {/* 1. WhatsApp Channel */}
                <a
                  href={WHATSAPP_EVAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all group active:scale-98"
                >
                  <div className="space-y-2 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                      WhatsApp Echo Review
                    </h3>
                    <p className="text-xs text-[#E3D8C1]/80 leading-relaxed font-light">
                      Send photos of your Echo, Angiogram, or discharge summary. Fastest response.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#25D366] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Send Reports via WhatsApp →
                  </span>
                </a>

                {/* 2. Direct Call Channel */}
                <a
                  href="tel:+919846992789"
                  className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all group active:scale-98"
                >
                  <div className="space-y-2 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-[#B4833D] flex items-center justify-center text-white shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                      Call Senior Counselor
                    </h3>
                    <p className="text-xs text-[#E3D8C1]/80 leading-relaxed font-light">
                      Speak directly with our clinical care counselor about symptoms and hospital admission.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#B4833D] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Call +91 98469 92789 →
                  </span>
                </a>

                {/* 3. Inpatient Booking Channel */}
                <Link
                  href="/contact"
                  className="bg-[#517B32] hover:bg-[#3D5F26] border border-[#6F9940]/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all group active:scale-98 shadow-md"
                >
                  <div className="space-y-2 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                      <Send className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                      Book Consultation
                    </h3>
                    <p className="text-xs text-white/90 leading-relaxed font-light">
                      Submit your case details online for planning an inpatient or video consultation.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Complete Patient Form →
                  </span>
                </Link>
              </div>

              <div className="text-center pt-2 border-t border-white/10 text-xs text-[#E3D8C1]/70">
                Hospital Address: Vayala P.O., Kottayam, Kerala 686587 • Landline: +91 4822 229434
              </div>
            </section>

          </div>

          {/* Sidebar / Sticky Navigation (Optimized for Conversions) */}
          <div className="lg:col-span-4">
            <div className="sticky top-20 sm:top-24 space-y-6 sm:space-y-8">
              
              {/* PRIMARY CONVERSATIONAL CTA CARD (Desktop Sticky) */}
              <Card className="border-2 border-[#517B32]/40 shadow-md bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#517B32] uppercase tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Doctor Desk Active
                    </span>
                    <span className="text-[10px] text-gray-500">Kottayam, Kerala</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#66371B] leading-tight">
                    Get an Immediate Ayurvedic Evaluation
                  </h3>

                  <p className="text-xs text-[#81754B] font-light leading-relaxed">
                    Share your current Echo report on WhatsApp for an expert assessment by Dr. Jose Vaidhyan&apos;s medical team.
                  </p>

                  <div className="space-y-2 pt-1">
                    <a
                      href={WHATSAPP_EVAL_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full h-11 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Echo Review</span>
                    </a>

                    <a
                      href="tel:+919846992789"
                      className="w-full h-10 px-4 rounded-xl border border-[#66371B]/30 hover:bg-[#F7F1E1] text-[#66371B] font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#517B32]" />
                      <span>Call: +91 98469 92789</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-gray-100 text-[11px] text-[#81754B] flex items-center gap-1.5 justify-center">
                    <Clock className="h-3 w-3 text-[#517B32]" />
                    <span>Average WhatsApp response: 15–20 minutes</span>
                  </div>
                </CardContent>
              </Card>

              {/* Case Studies Jump Card */}
              <Card className="border-[#DBCFA8] shadow-xs bg-[#F7F1E1]/60 rounded-2xl overflow-hidden">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[#3D5F26]">
                    <ShieldCheck className="h-4 w-4 text-[#517B32]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Clinical Evidence</span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#66371B]">
                    Echocardiogram Verified Case Studies
                  </h4>
                  <p className="text-xs text-[#81754B] font-light leading-relaxed">
                    Review authentic hospital reports showing EF improvements from 20% to 32% and 23% to 33.7%.
                  </p>
                  <Button
                    render={<a href="#case-studies" />}
                    size="sm"
                    className="w-full h-9 bg-[#517B32] hover:bg-[#3D5F26] text-white font-medium text-xs"
                  >
                    Jump to Case Studies
                  </Button>
                </CardContent>
              </Card>

              {/* Patient Journey Card */}
              <Card className="border-[#DBCFA8] shadow-xs bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-5">
                  <h4 className="font-heading font-bold text-base text-[#66371B] mb-3">
                    The 5-Step Patient Journey
                  </h4>
                  <ul className="space-y-2 text-xs text-[#81754B] font-light">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-[#517B32] shrink-0" />
                      <span>1. Share Echo / Angiogram Reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-[#517B32] shrink-0" />
                      <span>2. Physician Review &amp; Assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-[#517B32] shrink-0" />
                      <span>3. Personalized Inpatient Protocol</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-[#517B32] shrink-0" />
                      <span>4. Hrudaya Basti &amp; Daily Tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-[#517B32] shrink-0" />
                      <span>5. Repeat Echo &amp; Supervised Recovery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* International Patients CTA */}
              <Card className="border-none shadow-md bg-[#402816] text-[#F7F1E1] rounded-2xl">
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="font-heading font-bold text-lg text-[#F7F1E1]">International Patients</h4>
                  <p className="text-[#E3D8C1]/90 text-xs font-light leading-relaxed">
                    Travelling to Kerala for Ayurvedic heart care? Begin with an online report assessment before planning your journey.
                  </p>
                  <Button render={<Link href="/international-patients" />} variant="glass" className="w-full h-10 text-xs font-semibold">
                    International Enquiry
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency / Safety Advice Card */}
              <div className="bg-[#F7F1E1] border border-[#DBCFA8] rounded-2xl p-4 text-xs text-[#81754B] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#66371B]">
                  <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Medical Safety Note</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Low ejection fraction requires close medical supervision. Do not stop or alter your prescribed allopathic heart medications without consulting your cardiologist.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
