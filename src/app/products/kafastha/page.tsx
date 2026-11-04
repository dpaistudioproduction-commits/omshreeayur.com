import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Leaf,
  FlaskConical,
  Stethoscope,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  Plus,
  Clock,
  Sparkles,
  HeartPulse,
  Wind,
  Flame,
  Droplets,
  Layers,
  HelpCircle,
  Mail,
  MapPin,
  Globe,
  FileCheck2,
  Activity,
  HeartHandshake,
  CreditCard
} from "lucide-react";
import RazorpayCheckoutButton from "@/components/checkout/RazorpayCheckoutButton";
import KafasthaPackSelector from "@/components/checkout/KafasthaPackSelector";
import { AUTHENTIC_PRODUCTS } from "@/lib/product-assets";

/* ------------------------------------------------------------------ */
/*  SITE & CONTACT INFORMATION                                        */
/* ------------------------------------------------------------------ */
const SITE = "https://omshreeayur.com";
const PAGE_URL = `${SITE}/products/kafastha`;
const PHONE_DISPLAY = "+91 98469 92789";
const PHONE_TEL = "tel:+919846992789";
const HOSPITAL_EMAIL = "info@omshreeayur.com";

const BUY_URL =
  "https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20order%20Kafastha%20Ayurvedic%20Respiratory%20Care%20Granules.%20Please%20share%20current%20batch%20pricing%2C%20pack%20size%2C%20and%20doorstep%20delivery%20details.";

const CONSULT_URL =
  "https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20Omshree%20Sidha%20Hospital%20physician%20regarding%20my%20respiratory%20complaints%20and%20share%20my%20medical%20reports.";

/* ------------------------------------------------------------------ */
/*  SEO, AEO & OPEN GRAPH METADATA                                    */
/* ------------------------------------------------------------------ */
const TITLE = "Kafastha Ayurvedic Respiratory Care Granules | Omshree Sidha Pharma";
const DESCRIPTION =
  "Experience time-tested Ayurvedic respiratory care with Kafastha chewable granules. Formulated with 10+ herbs by Omshree Sidha Pharma and trusted in clinical practice at Omshree Sidha Hospital, Kerala for dry cough, stubborn phlegm, wheezing, and chest congestion.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Omshree Sidha Pharma • Omshree Sidha Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE}/kafastha-banner-2.jpg`,
        width: 1376,
        height: 768,
        alt: "Kafastha Ayurvedic Respiratory Care Granules by Omshree Sidha Pharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE}/kafastha-banner-2.jpg`],
  },
  robots: { index: true, follow: true },
};

/* ------------------------------------------------------------------ */
/*  ALL 20 REPHRASED FAQS STRUCTURED IN 7 THEMATIC ACCORDION GROUPS    */
/* ------------------------------------------------------------------ */
interface FAQItem {
  id: number;
  q: string;
  a: string;
}

interface FAQGroup {
  groupCode: string;
  groupTitle: string;
  groupDescription: string;
  items: FAQItem[];
}

const FAQ_GROUPS: FAQGroup[] = [
  {
    groupCode: "Group A",
    groupTitle: "Persistent Cough & Antibiotic Considerations",
    groupDescription:
      "Clarifying lingering coughs, previous medication courses, and observational clinical records.",
    items: [
      {
        id: 1,
        q: "1. My cough persists even after finishing an antibiotic course. Can Kafastha provide relief?",
        a: "In our hospital practice at Omshree Sidha Hospital, we regularly treat patients whose cough remained unresolved following antibiotic therapy or other routine medications. After an in-depth clinical evaluation of each patient's condition, we prescribe Kafastha where indicated. In our clinical experience, Kafastha has delivered dependable relief for many individuals suffering from such persistent, non-resolving coughs.",
      },
      {
        id: 2,
        q: "2. Why does a cough often continue after a course of antibiotics?",
        a: "Antibiotics are strictly effective against specific bacterial infections. However, lingering coughs frequently stem from viral respiratory illnesses, post-viral bronchial hyper-responsiveness, allergic airway inflammation, bronchial asthma, chronic bronchitis, environmental irritation, or acid reflux—conditions where antibiotics have no therapeutic action.",
      },
      {
        id: 3,
        q: "3. Does Kafastha work equally well for everyone whose cough did not respond to other medicines?",
        a: "No therapeutic treatment produces uniform results in every individual. In our clinical observations, numerous patients experienced marked improvement with Kafastha after previous treatments proved insufficient. However, therapeutic progress depends upon the underlying cause, overall constitutional vitality, and any coordinated medical care required. Some individuals notice throat comfort from day one, while others require a steady, longer course.",
      },
      {
        id: 4,
        q: "4. Should I stop my prescribed antibiotics and start Kafastha instead?",
        a: "No. Never discontinue or alter a prescribed course of antibiotics without consulting your treating doctor. If your existing prescription is not yielding adequate relief, Kafastha can be taken alongside your conventional medicines—simply maintain a mandatory time gap of at least one hour between different medications.",
      },
      {
        id: 5,
        q: "5. Has Kafastha been clinically evaluated?",
        a: "Omshree Sidha Hospital systematically maintains clinical records of patients who receive Kafastha as part of their respiratory regimens, documenting their therapeutic progress and outcomes. Over decades of clinical application, thousands of patients have received Kafastha with consistently observed benefits.",
      },
    ],
  },
  {
    groupCode: "Group B",
    groupTitle: "Cough Types, Colds, Allergies & Airway Symptoms",
    groupDescription:
      "Distinguishing dry vs. wet cough, post-viral recovery, and seasonal allergic reactivity.",
    items: [
      {
        id: 6,
        q: "6. Can Kafastha be used for both dry coughs and productive (phlegm-producing) coughs?",
        a: "Yes. Kafastha is formulated to address both dry cough (characterized by relentless throat tickling, dryness, and irritation without mucus) and productive wet cough (where thick, heavy phlegm is difficult to dislodge from the respiratory tract).",
      },
      {
        id: 7,
        q: "7. Can Kafastha help with a persistent cough remaining after a cold or viral illness?",
        a: "Yes. Many people experience a stubborn, prolonged cough that lingers for weeks after the initial cold or viral illness has subsided. Kafastha is effective in soothing irritated airways and clearing residual secretions in these cases. If a cough continues for more than three weeks, we advise consulting a physician to assess for any underlying condition.",
      },
      {
        id: 8,
        q: "8. Is Kafastha suitable for colds, frequent sneezing, and allergy-related respiratory issues?",
        a: "Yes. Kafastha is beneficial for respiratory complaints associated with common colds, weather changes, and seasonal allergies. It helps ease nasal and airway congestion, acts as natural prophylaxis against environmental irritants, and promotes mucosal comfort. A doctor can help determine whether your symptoms are driven by allergy or active infection.",
      },
    ],
  },
  {
    groupCode: "Group C",
    groupTitle: "Asthma, Bronchitis & COPD Management",
    groupDescription:
      "Integrating Ayurvedic respiratory care with long-term chronic lung conditions.",
    items: [
      {
        id: 9,
        q: "9. Can an individual diagnosed with asthma take Kafastha?",
        a: "Yes. Patients experiencing asthma-related symptoms can take Kafastha. At our hospital, it is routinely utilized as an effective supportive component within individualized treatment programs to soothe bronchospasms and ease breathing comfort.",
      },
      {
        id: 10,
        q: "10. Can Kafastha be taken for bronchitis?",
        a: "Yes. Kafastha may be considered for relieving cough and clearing bronchial mucus associated with bronchitis. However, because bronchitis can have acute bacterial, viral, or chronic origins, anyone experiencing progressive breathlessness, high fever, chest pain, or blood in their sputum requires immediate medical assessment.",
      },
      {
        id: 11,
        q: "11. Can someone with Chronic Obstructive Pulmonary Disease (COPD) use Kafastha?",
        a: "Yes. A person with COPD may take Kafastha alongside their current prescribed medications, ensuring a one-hour interval between medicines. In our clinical experience, long-term supportive use can help clear airway mucus and improve overall breathing comfort and day-to-day quality of life.",
      },
      {
        id: 12,
        q: "12. Does Kafastha cure asthma or COPD?",
        a: "Our hospital has extensive clinical experience using Kafastha as an integral supportive treatment for patients with asthma and COPD. However, chronic respiratory conditions are multifaceted, and we do not claim to offer a universal cure for every patient. Treatment plans must be tailored to the individual's diagnosis and therapeutic response. Patients seeking comprehensive care are encouraged to contact Omshree Sidha Hospital for dedicated clinical support.",
      },
    ],
  },
  {
    groupCode: "Group D",
    groupTitle: "Directions, Dosage & Administration Timing",
    groupDescription:
      "Exact intake instructions, slow-chewing method, and the 5-minute water rule.",
    items: [
      {
        id: 13,
        q: "13. What is the recommended way to take Kafastha?",
        a: "Follow the instructions on the packaging or your physician's personalized guidance. The recommended adult dosage is 5 grams (approximately one level teaspoon), taken 4 to 6 times daily. Chew the granules slowly and allow them to melt naturally in your mouth with saliva. Do not drink water or other beverages while taking the granules. You may drink water 5 minutes after taking Kafastha to allow the botanical extracts adequate contact with your throat lining.",
      },
      {
        id: 14,
        q: "14. How soon can I expect to notice a difference?",
        a: "Many patients experience throat comfort immediately after placing the granules in their mouth, and most individuals report noticeable improvements starting from day one. However, recovery speed depends upon the duration and severity of the condition. For persistent or deep-rooted respiratory concerns, contacting Omshree Sidha Hospital enables our team to guide your recovery.",
      },
    ],
  },
  {
    groupCode: "Group E",
    groupTitle: "Medication Co-Administration, Diabetes & Palatability",
    groupDescription:
      "Time intervals with other drugs, dietary sugar calculations, and softening spice warmth.",
    items: [
      {
        id: 15,
        q: "15. Can I take Kafastha while continuing my other prescribed medications?",
        a: "Yes. In our clinical practice, patients are permitted to take their required medications alongside Kafastha, provided they maintain a strict time gap of at least one hour between medicines. If you have questions regarding your specific prescriptions, share the complete ingredient list with your treating physician.",
      },
      {
        id: 16,
        q: "16. Is Kafastha suitable for individuals with diabetes?",
        a: "Kafastha contains natural unrefined sugar to balance its potent warming spices. Taking the recommended 4 to 6 daily doses contributes a total of approximately 10 to 15 grams of sugar per day. Individuals managing diabetes must account for this quantity within their daily carbohydrate allowance and consult their healthcare provider.",
      },
      {
        id: 17,
        q: "17. What should I do if I find the taste of Kafastha too spicy?",
        a: "Kafastha contains sharp, warming Ayurvedic spices such as black pepper (Maricha) and long pepper (Pippali). If you find the spices intense on your palate, thoroughly mix your 5-gram dose with 5 grams of pure cow's ghee before taking. Ghee serves as a traditional soothing medium (Anupana) that softens the heat without diminishing effectiveness.",
      },
    ],
  },
  {
    groupCode: "Group F",
    groupTitle: "Children, Pregnancy & Breastfeeding Safety",
    groupDescription:
      "Age-appropriate pediatric dosing instructions and maternal care guidance.",
    items: [
      {
        id: 18,
        q: "18. Can children be given Kafastha?",
        a: "Children above one year of age may take Kafastha. In young children, it is best administered by mixing a small amount—one or two pinches—with an equal quantity of pure honey or ghee, repeated up to 4 times daily. Because pediatric dosing must be tailored to the child's exact age, body weight, and clinical condition, always consult a qualified medical doctor before giving Kafastha to a child.",
      },
      {
        id: 19,
        q: "19. Can Kafastha be taken during pregnancy or while breastfeeding?",
        a: "Pregnant women and breastfeeding mothers can take Kafastha under medical supervision. Because maternal health conditions require careful consideration, you should always consult your obstetrician or treating doctor before starting. Share the complete ingredient list so your doctor can verify suitability for your specific health needs.",
      },
    ],
  },
  {
    groupCode: "Group G",
    groupTitle: "Emergency Warning Signs & Urgent Medical Care",
    groupDescription:
      "Critical respiratory red flags that require immediate emergency room attention.",
    items: [
      {
        id: 20,
        q: "20. When should I seek immediate emergency medical care?",
        a: "Seek urgent emergency hospital medical attention if you experience severe or rapidly worsening difficulty breathing, persistent crushing chest pain, coughing up blood, high fever with severe chills, or acute prostration. If you have an established asthma management plan, follow it immediately and seek emergency assistance if your prescribed reliever inhaler fails to restore normal breathing.",
      },
    ],
  },
];

const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);

/* ------------------------------------------------------------------ */
/*  REPHRASED 11 BOTANICAL INGREDIENTS WITH COMPLETE INFORMATION      */
/* ------------------------------------------------------------------ */
interface IngredientInfo {
  name: string;
  botanical: string;
  traditionalRole: string;
  rephrasedBenefits: string;
}

const INGREDIENTS_LIST: IngredientInfo[] = [
  {
    name: "Rasna",
    botanical: "Alpinia galanga / Pluchea lanceolata",
    traditionalRole: "Vata-Kapha Harmonizer • Anti-Inflammatory Botanical",
    rephrasedBenefits:
      "A renowned classical Ayurvedic herb valued for respiratory and digestive health. It exhibits natural anti-inflammatory actions, balances aggravated Vata and Kapha doshas, and aids in soothing deep-seated inflammatory tension within the respiratory tract and joints.",
  },
  {
    name: "Haridra (Turmeric)",
    botanical: "Curcuma longa",
    traditionalRole: "Immune-Supporting • Natural Antioxidant • Shothahara",
    rephrasedBenefits:
      "One of Ayurveda's most revered medicinal plants, packed with protective curcuminoids. Esteemed for its anti-inflammatory, antioxidant, and immune-reinforcing properties, Haridra promotes clear respiratory channels and strengthens mucosal resistance.",
  },
  {
    name: "Draksha (Grapes & Raisins)",
    botanical: "Vitis vinifera",
    traditionalRole: "Sweet & Cooling • Tissue-Strengthening • Pitta-Vata Pacifying",
    rephrasedBenefits:
      "Valued in Ayurvedic pharmacopeia for its restorative nutritional benefits and sweet, cooling, and tissue-strengthening attributes. Draksha pacifies Vata and Pitta doshas, relieves dryness in strained throat membranes, and promotes gentle respiratory ease.",
  },
  {
    name: "Shati",
    botanical: "Hedychium spicatum (Spiked Ginger Lily)",
    traditionalRole: "Mucus-Expelling • Bronchial Soothing • Digestive Stimulant",
    rephrasedBenefits:
      "An aromatic perennial herb widely relied upon in classical Ayurvedic formulations. Shati supports respiratory wellness by actively loosening and expelling stubborn mucus. It is traditionally recommended for asthma, bronchitis, chronic coughs, and digestive comfort.",
  },
  {
    name: "Maricha (Black Pepper)",
    botanical: "Piper nigrum",
    traditionalRole: "Pungent Bio-Enhancer • Airway Cleanser • Ushna Virya",
    rephrasedBenefits:
      "A celebrated warming spice known for its sharp, penetrating qualities. Maricha helps clear congested phlegm from the airways, soothes sore throats, relieves symptoms of coughs, colds, and bronchitis, and enhances digestive fire and nutrient bio-absorption.",
  },
  {
    name: "Pippali (Long Pepper)",
    botanical: "Piper longum",
    traditionalRole: "Pranavaha Rejuvenator • Mucus-Clearing • Classical Rasayana",
    rephrasedBenefits:
      "A premier Ayurvedic rejuvenator for the respiratory system. Pippali aids in loosening and dislodging thick mucus and phlegm from deep lung passages. Traditionally prescribed to relieve bronchial asthma, bronchitis, and chronic coughs while igniting metabolic vitality.",
  },
  {
    name: "Lavangam (Cloves)",
    botanical: "Syzygium aromaticum",
    traditionalRole: "Antimicrobial • Throat-Soothing • Aromatic Antioxidant",
    rephrasedBenefits:
      "Prized for its rich natural essential oils offering antioxidant, antimicrobial, and anti-inflammatory properties. Lavangam quickly numbs irritating throat tickles, calms spasmodic coughing, clears oral passages, and supports healthy digestion.",
  },
  {
    name: "Yavakshara",
    botanical: "Hordeum vulgare (Barley straw ash alkali)",
    traditionalRole: "Alkaline Preparation • Chedana (Scraping) • Mucolytic",
    rephrasedBenefits:
      "A classical bio-alkaline preparation derived from carefully incinerated barley straw. Composed predominantly of natural potassium carbonate (K₂CO₃) and trace minerals, Yavakshara is traditionally used to clear chronic cough (Kasa) and dissolve obstinate throat obstructions.",
  },
  {
    name: "Ela (Cardamom)",
    botanical: "Elettaria cardamomum",
    traditionalRole: "Tridoshic Balancer • Gentle Airway Expander • Sugandhi",
    rephrasedBenefits:
      "A fragrant, gentle spice traditionally incorporated into respiratory remedies to relieve cough reflexes, clear excess catarrh from the sinuses, refresh the breath, and facilitate smooth, unlabored breathing.",
  },
  {
    name: "Elavangam (Cinnamon)",
    botanical: "Cinnamomum verum",
    traditionalRole: "Warming Expectorant • Congestion Relief • Rhinitis Support",
    rephrasedBenefits:
      "Helps dissolve and expel thick mucus, clears congested throat tissues, and relieves productive wet coughs. Also traditionally used to alleviate the uncomfortable symptoms of common colds, rhinitis, and blocked or runny nasal passages.",
  },
  {
    name: "Sugar (Sharkara)",
    botanical: "Saccharum officinarum",
    traditionalRole: "Madhura Rasa (Sweet Taste) • Sheeta (Cooling) • Natural Harmonizer",
    rephrasedBenefits:
      "Provides natural sweet and cooling properties that balance the intense heat of warming spices (Maricha, Pippali, Lavangam), preventing gastric irritation and creating an enjoyable, melt-in-the-mouth sweet-and-spicy granule texture.",
  },
];

/* ------------------------------------------------------------------ */
/*  SCHEMA.ORG JSON-LD GENERATION                                     */
/* ------------------------------------------------------------------ */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": `${PAGE_URL}#product`,
      name: "Kafastha Ayurvedic Respiratory Care Granules",
      image: [
        `${SITE}/kafastha-banner-2.jpg`,
        `${SITE}/kafastha-product.-44png.png`,
        `${SITE}/images/products/kafastha.png`,
      ],
      description: DESCRIPTION,
      sku: "OM-KAF-001",
      category: "Health & Personal Care > Ayurvedic Proprietary Medicine",
      brand: {
        "@type": "Brand",
        name: "Omshree Sidha Pharma",
        url: SITE,
      },
      manufacturer: {
        "@type": "MedicalOrganization",
        name: "Omshree Sidha Pharma",
        url: SITE,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vayala P.O.",
          addressLocality: "Kottayam",
          addressRegion: "Kerala",
          postalCode: "686587",
          addressCountry: "IN",
        },
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: 160,
        highPrice: 610,
        offerCount: 3,
        availability: "https://schema.org/InStock",
        url: PAGE_URL,
        description:
          "Available in 75g (₹160), 150g (₹310), and 300g (₹610) packs. Dispatched directly from Omshree Sidha Hospital Pharmacy. Contact on WhatsApp or pay online with Razorpay.",
        seller: {
          "@type": "MedicalOrganization",
          name: "Omshree Sidha Hospital Pharmacy",
          telephone: PHONE_DISPLAY,
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${SITE}/products` },
        { "@type": "ListItem", position: 3, name: "Kafastha", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: ALL_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  COMPONENT RENDER                                                  */
/* ------------------------------------------------------------------ */
export default function KafasthaProductLandingPage() {
  const relatedProducts = AUTHENTIC_PRODUCTS.filter((p) => p.id !== "kafastha").slice(0, 4);

  return (
    <div className="relative flex flex-col w-full font-sans bg-[#FBF7EE] text-[#3A2A1C] selection:bg-[#517B32] selection:text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ============================================================ */}
      {/* 0. PHARMACY VERIFICATION BANNER                              */}
      {/* ============================================================ */}
      <div className="bg-[#213714] text-[#E7DEC8] text-xs sm:text-sm border-b border-[#3D5C26]/40 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-[#8BC34A] animate-pulse" />
            <span className="font-medium text-[#F3EAD3]">
              Authentic In-House Formulation by <strong className="text-white">Omshree Sidha Pharma</strong> • Kerala
            </span>
          </div>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <a
              href={PHONE_TEL}
              className="text-[#D9B872] hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Pharmacy Line: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6 pb-2">
        <nav className="text-xs text-[#81754B]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#2F4A1E] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products" className="hover:text-[#2F4A1E] transition-colors">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#2B1A0E] font-semibold">
              Kafastha Ayurvedic Granules
            </li>
          </ol>
        </nav>
      </div>

      {/* ============================================================ */}
      {/* SECTION 1 — PREMIUM HERO SECTION                             */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-4 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Authentic Packshot Display */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FAF4E5] to-[#EDE3C8] border border-[#DBCFA8] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(43,26,14,0.18)]">
              {/* Product Badge Pill */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="bg-[#2F4A1E] text-[#F3EAD3] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                  Ayurvedic Proprietary Medicine
                </span>
                <span className="bg-[#B4833D] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  GMP Certified
                </span>
              </div>

              {/* Genuine Product Container Packshot */}
              <div className="relative aspect-square w-full max-w-md mx-auto flex items-center justify-center pt-6">
                <Image
                  src="/images/products/kafastha.png"
                  alt="Kafastha Ayurvedic Respiratory Care Granules packaging with Malayalam and Hindi text"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </div>

              {/* Packaging Authenticity Signals */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#DBCFA8]/70 text-center">
                <div className="p-2.5 rounded-2xl bg-white/80">
                  <p className="text-[11px] font-bold text-[#2B1A0E]">10+ Botanicals</p>
                  <p className="text-[10px] text-[#81754B]">Pure Herbal Blend</p>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/80">
                  <p className="text-[11px] font-bold text-[#2B1A0E]">Sweet &amp; Spicy</p>
                  <p className="text-[10px] text-[#81754B]">Melt-in-Mouth</p>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/80">
                  <p className="text-[11px] font-bold text-[#2B1A0E]">Hospital Heritage</p>
                  <p className="text-[10px] text-[#81754B]">Kerala Clinical Regimen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Storefront Information & Order Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
                Omshree Sidha Pharma • Respiratory Wellness
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#2B1A0E] font-bold leading-[1.08] tracking-tight">
                Kafastha
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#517B32] font-semibold leading-snug">
                Time-Tested Ayurvedic Care for Cough and Respiratory Health
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#5C4A36] leading-relaxed">
              Kafastha is an authentic Ayurvedic proprietary medicine formulated by{" "}
              <strong>Omshree Sidha Pharma</strong> and relied upon in our hospital practice at{" "}
              <strong>Omshree Sidha Hospital</strong> in Kerala for troublesome cough, persistent phlegm, wheezing, and chest congestion.
            </p>

            {/* Product Key Metadata Table */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E3D8C1]">
                <span className="text-[#81754B] block text-[11px] uppercase tracking-wider font-semibold">Form</span>
                <span className="font-bold text-[#2B1A0E]">Chewable Herbal Granules</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E3D8C1]">
                <span className="text-[#81754B] block text-[11px] uppercase tracking-wider font-semibold">Taste Profile</span>
                <span className="font-bold text-[#2B1A0E]">Sweet &amp; Warming Spiced</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E3D8C1]">
                <span className="text-[#81754B] block text-[11px] uppercase tracking-wider font-semibold">Manufacturer</span>
                <span className="font-bold text-[#2B1A0E]">Omshree Sidha Pharma (GMP)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E3D8C1]">
                <span className="text-[#81754B] block text-[11px] uppercase tracking-wider font-semibold">Clinical Setting</span>
                <span className="font-bold text-[#2B1A0E]">Omshree Sidha Hospital, Kerala</span>
              </div>
            </div>

            {/* Direct Order Dispatch Box */}
            <div className="rounded-3xl border-2 border-[#517B32]/30 bg-gradient-to-br from-[#FAF7F0] to-[#EFE7D2] p-6 space-y-4 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#517B32]">
                    Direct Pharmacy Dispatch
                  </span>
                  <p className="text-2xl sm:text-3xl font-heading font-bold text-[#2B1A0E]">
                    Fresh Hospital Batch
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#517B32]/10 text-[#517B32] text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Genuine In-House Preparation
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Kafastha is freshly prepared and dispatched directly from our hospital pharmacy in 3 convenient sizes: <strong>75g (MRP ₹160)</strong>, <strong>150g (₹310)</strong>, and <strong>300g (₹610)</strong>. Order online with Razorpay or via WhatsApp.
              </p>

              {/* Pack Size Selector with Instant Razorpay & WhatsApp Checkout */}
              <KafasthaPackSelector consultUrl={CONSULT_URL} />
              <p className="text-center text-[11px] text-[#81754B]">
                Prefer to speak directly with our clinic? Call us at{" "}
                <a href={PHONE_TEL} className="font-bold underline text-[#2B1A0E]">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-[#5C4A36]">
              <span className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#517B32]" /> 100% Herbal Botanicals
              </span>
              <span className="flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-[#517B32]" /> No Chemical Additives
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#517B32]" /> Suitable for All Ages (Above 1 Year)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — PRODUCT HIGHLIGHTS                               */}
      {/* ============================================================ */}
      <section className="bg-white border-y border-[#E3D8C1] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Multi-Action Respiratory Relief
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2B1A0E] font-bold">
              Product Highlights: Comprehensive Airway Comfort
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A36] leading-relaxed">
              Formulated to address troublesome respiratory irritation through multiple traditional herbal mechanisms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-3xl bg-[#FBF7EE] border border-[#E3D8C1] hover:border-[#517B32] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Dry Cough Relief
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Soothes persistent coughing fits that occur without phlegm, calming irritating throat tickles, dryness, and scratchy sensations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-3xl bg-[#FBF7EE] border border-[#E3D8C1] hover:border-[#517B32] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Productive Cough Care
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Helps liquefy thick, tenacious mucus and facilitates the expulsion of deep phlegm clinging to bronchial passages.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-3xl bg-[#FBF7EE] border border-[#E3D8C1] hover:border-[#517B32] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Immediate Throat Soothing
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Granules melt directly on the tongue with saliva, coating raw mucosal membranes and soothing irritation immediately upon contact.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-3xl bg-[#FBF7EE] border border-[#E3D8C1] hover:border-[#517B32] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Mucus &amp; Phlegm Clearance
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Natural bio-alkaline and warming spice actives break down congested chest heaviness to clear the respiratory tract.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-3xl bg-[#FBF7EE] border border-[#E3D8C1] hover:border-[#517B32] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Chest Congestion Relief
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Relieves heavy tightness in the chest by aiding the breakdown and natural evacuation of accumulated pulmonary catarrh.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-3xl bg-[#FBF7EE] border border-[#E3D8C1] hover:border-[#517B32] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Respiratory Airway Comfort
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Widens constricted air passages and eases breathlessness, supporting smooth, comfortable airflow in polluted or cold conditions.
              </p>
            </div>

            {/* Card 7 */}
            <div className="p-6 rounded-3xl bg-[#FBF7EE] border border-[#E3D8C1] hover:border-[#517B32] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Allergy-Related Symptoms
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Provides gentle protective support against seasonal pollen, dust, and airborne irritants, helping curb recurrent sneezing.
              </p>
            </div>

            {/* Card 8 */}
            <div className="p-6 rounded-3xl bg-[#FBF7EE] border border-[#E3D8C1] hover:border-[#517B32] transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Post-Illness Cough Support
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                Aids in soothing hypersensitive, reactive airways after the acute stage of viral infections, flu, or respiratory illnesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — ABOUT KAFASHTA                                    */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Ayurvedic Heritage &amp; Quality
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2B1A0E] font-bold leading-tight">
              About Kafastha: Dedicated Ayurvedic Care for Your Lungs &amp; Airways
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#5C4A36]">
              <p>
                <strong>Kafastha Granules</strong> is a specialized proprietary formulation developed and manufactured according to strict <strong>Good Manufacturing Practice (GMP) standards</strong> by <strong>Omshree Sidha Pharma</strong>, an esteemed Ayurvedic pharmacy based in Vayala, Kottayam, Kerala.
              </p>
              <p>
                Formulated from more than 10 classical herbs, warming spices, and natural mineral alkali, Kafastha forms an integral part of our daily clinical practice at <strong>Omshree Sidha Hospital</strong>. Our multigenerational team of Ayurvedic physicians utilizes it extensively in supervised treatment regimens for cough, bronchial asthma, bronchitis, allergic rhinitis, and chronic obstructive airway conditions.
              </p>
              <p>
                In classical Ayurveda, respiratory tightness and excessive phlegm are linked to an imbalance of <strong>Kapha</strong> (mucus accumulation) and <strong>Vata</strong> (spasmodic airway constriction). Kafastha helps clear accumulated mucus from the lungs, soothes inflammation across the respiratory tract, and widens air passages to make breathing effortless.
              </p>
              <div className="p-4 rounded-2xl bg-[#FAF4E5] border-l-4 border-[#517B32] text-sm text-[#402816]">
                <strong>Individualized Care Notice:</strong> In accordance with authentic Ayurvedic principles, every individual possesses a distinct physiological constitution. Consequently, therapeutic timelines and clinical responses naturally vary according to the patient&apos;s specific condition.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#DBCFA8] shadow-lg bg-white">
              <Image
                src="/kafastha-banner-2.jpg"
                alt="Woman relaxing and breathing easily in sunlit living room with Kafastha jar on table"
                width={1376}
                height={768}
                className="w-full h-auto object-cover"
              />
              <div className="p-5 bg-[#FAF7F0] border-t border-[#DBCFA8] text-xs text-[#81754B] italic">
                Figure 1: Authentic commercial lifestyle photography — Kafastha supports comfortable, calm breathing for the entire family.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — OUR CLINICAL EXPERIENCE                           */}
      {/* ============================================================ */}
      <section className="bg-[#2B1A0E] text-[#F3EAD3] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#517B32]/20 blur-3xl" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D9B872] block">
              Physician Observations
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight">
              Our Clinical Experience with Persistent Cough &amp; Airway Complaints
            </h2>
            <p className="text-base sm:text-lg text-[#E3D8C1] leading-relaxed font-light">
              At Omshree Sidha Hospital, many patients arrive after struggling for weeks or months with persistent coughs that failed to resolve despite repeated rounds of antibiotics, antihistamines, and conventional cough syrups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-white/[0.06] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/30 text-[#8BC34A] flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                When Antibiotics Don&apos;t Help
              </h3>
              <p className="text-sm text-[#E3D8C1]/90 leading-relaxed">
                Antibiotics treat specific bacterial infections, but cannot resolve post-viral airway hyperactivity or allergic inflammation. After carefully assessing the patient&apos;s root condition, we prescribe Kafastha, which has brought dependable relief to many such refractory patients.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/[0.06] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/30 text-[#8BC34A] flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Asthma, Allergy &amp; COPD Programs
              </h3>
              <p className="text-sm text-[#E3D8C1]/90 leading-relaxed">
                We integrate Kafastha into individualized Ayurvedic treatment plans for bronchial asthma, allergic rhinitis, and COPD. The objective is to alleviate distressing symptoms, reduce wheezing, and significantly enhance day-to-day breathing comfort.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/[0.06] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#517B32]/30 text-[#8BC34A] flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Biomarker Tracking (WBC, CRP, IgE)
              </h3>
              <p className="text-sm text-[#E3D8C1]/90 leading-relaxed">
                During hospital clinical follow-up, laboratory assessments often reveal reductions in previously elevated White Blood Cell counts (WBC), C-Reactive Protein (CRP), and immunoglobulin E (IgE) levels, indicating diminished airway inflammation and allergic sensitivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — WHAT WE USE KAFASHTA FOR                         */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
            Clinical Applications
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#2B1A0E] font-bold">
            What We Use Kafastha For
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A36] leading-relaxed">
            As documented in the clinical practice of Omshree Sidha Hospital, Kafastha is indicated as supportive Ayurvedic care for the following conditions:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Dry Cough</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Cough without phlegm, characterized by persistent throat irritation, burning, and tickling sensation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Productive (Wet) Cough</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Cough with thick, tenacious phlegm that is difficult to bring up, promoting natural clearance.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Chest Congestion</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Helps loosen, liquefy, and clear accumulated heavy mucus from the bronchial tubes and lungs.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Wheezing &amp; Airway Discomfort</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Widening air passages and dilating constricted respiratory tracts to facilitate easy, smooth breathing.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Persistent Post-Illness Cough</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Effective for long-lasting cough following colds, flu, or viral infections (including post-COVID cough).
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Chronic Respiratory Conditions</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Valued supportive care in Bronchial Asthma, Bronchitis, COPD, and convalescence under physician supervision.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Colds, Flu &amp; Sneezing</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Relieves acute upper respiratory chilliness, recurrent sneezing, and chest tightness from infections.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Allergy Prophylaxis &amp; Immunity</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Acts as gentle prophylaxis against environmental triggers, building mucosal defense against seasonal flare-ups.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Family Respiratory Tonic</span>
            </div>
            <p className="text-sm text-[#5C4A36] leading-relaxed">
              Works as an ideal natural respiratory tonic for both young children (above 1 year) and elderly family members.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — INGREDIENTS AND THEIR BENEFITS                    */}
      {/* ============================================================ */}
      <section className="bg-[#FAF4E5] border-y border-[#E3D8C1] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              100% Herbal Active Formula
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2B1A0E] font-bold">
              Ingredients and Their Classical Benefits
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A36] leading-relaxed">
              Kafastha contains 11 verified classical Ayurvedic herbs, spices, and natural minerals, each chosen for targeted respiratory, digestive, and rejuvenating action:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INGREDIENTS_LIST.map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833D] block">
                    {item.traditionalRole}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#2B1A0E]">
                    {item.name}
                  </h3>
                  <p className="text-xs italic text-[#81754B]">{item.botanical}</p>
                  <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed pt-2">
                    {item.rephrasedBenefits}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E3D8C1]/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#517B32]">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Classical Ayurvedic Botanical</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — DIRECTIONS FOR USE                                */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              Dosage &amp; Administration
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#2B1A0E] font-bold leading-tight">
              Directions for Taking Kafastha Granules
            </h2>
            <p className="text-base sm:text-lg text-[#5C4A36] leading-relaxed">
              Kafastha is engineered as chewable, melt-in-mouth granules designed to act immediately upon contact with the throat and oral mucosa.
            </p>

            <div className="space-y-4">
              {/* Adult Dosage Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] space-y-2">
                <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
                  <Clock className="w-5 h-5" />
                  <span>Adult Dosage</span>
                </div>
                <p className="text-sm sm:text-base text-[#2B1A0E] font-semibold">
                  5 grams (approximately 1 level teaspoon), taken 4 to 6 times daily.
                </p>
                <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                  Chew slowly and allow the granules to melt in your mouth with saliva. It begins soothing the throat immediately upon ingestion.
                </p>
              </div>

              {/* Water Timing Rules */}
              <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-600/30 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-base">
                  <AlertCircle className="w-5 h-5 text-amber-700" />
                  <span>Important Water Timing Instruction</span>
                </div>
                <p className="text-xs sm:text-sm text-[#402816] leading-relaxed font-medium">
                  <strong>Do not drink water or other beverages along with Kafastha.</strong> Drink water before taking it, or wait at least <strong>5 minutes after</strong> taking Kafastha. This ensures the herbal actives coat the mucosal membranes without being washed away prematurely.
                </p>
              </div>

              {/* Honey & Ghee Vehicle */}
              <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] space-y-2">
                <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
                  <Flame className="w-5 h-5" />
                  <span>Taking with Honey or Ghee</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                  Kafastha may be taken directly as dry granules, or mixed with <strong>5 grams of pure honey or cow&apos;s ghee</strong>. If you are sensitive to spicy ingredients, mixing with ghee provides a soothing vehicle that tempers the natural pungency.
                </p>
              </div>

              {/* Children Dosage */}
              <div className="p-6 rounded-3xl bg-white border border-[#E3D8C1] space-y-2">
                <div className="flex items-center gap-2 text-[#517B32] font-bold text-base">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Children (Above 1 Year)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                  For young children, mix a small quantity (<strong>one or two pinches</strong>) with equal parts honey or ghee, repeated up to 4 times a day. <em>Parents must always consult a qualified Ayurvedic physician for exact age- and weight-appropriate dosing.</em>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#DBCFA8] shadow-lg bg-white">
              <Image
                src="/kafastha-product.-44png.png"
                alt="Kafastha jar on pharmacy tabletop surrounded by whole Ayurvedic spices and botanicals"
                width={1376}
                height={768}
                className="w-full h-auto object-cover"
              />
              <div className="p-5 bg-[#FAF7F0] border-t border-[#DBCFA8] text-xs text-[#81754B] italic">
                Figure 2: Authentic pharmacy photography — Kafastha combines traditional whole spices and botanicals in an easy-to-use granule formulation.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 — WARNINGS AND PRECAUTIONS                         */}
      {/* ============================================================ */}
      <section className="bg-[#2B1A0E] text-[#F3EAD3] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D9B872] block">
              Patient Safety &amp; Guidance
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold">
              Warnings and Precautions
            </h2>
            <p className="text-sm sm:text-base text-[#E3D8C1] leading-relaxed">
              Please review these important clinical considerations before and during use:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.06] border border-white/10 space-y-3">
              <span className="text-amber-400 font-bold text-sm uppercase tracking-wider block">
                Sugar &amp; Diabetes
              </span>
              <h3 className="font-heading font-bold text-lg text-white">Contains Natural Sugar</h3>
              <p className="text-xs sm:text-sm text-[#E3D8C1]/90 leading-relaxed">
                Patients with diabetes must account for the sugar in Kafastha. Taking 4 to 6 doses daily provides approximately 10 to 15 grams of total sugar. Consult your diabetologist or physician.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.06] border border-white/10 space-y-3">
              <span className="text-amber-400 font-bold text-sm uppercase tracking-wider block">
                Spice Sensitivity
              </span>
              <h3 className="font-heading font-bold text-lg text-white">Warming Spice Actives</h3>
              <p className="text-xs sm:text-sm text-[#E3D8C1]/90 leading-relaxed">
                Contains warming spices like black pepper and pippali. If you find Kafastha spicy, mix each 5g dose with 5 grams of cow&apos;s ghee before taking to soothe the palate.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.06] border border-white/10 space-y-3">
              <span className="text-amber-400 font-bold text-sm uppercase tracking-wider block">
                Drug Gap
              </span>
              <h3 className="font-heading font-bold text-lg text-white">1-Hour Time Gap</h3>
              <p className="text-xs sm:text-sm text-[#E3D8C1]/90 leading-relaxed">
                Maintain at least a 1-hour difference between taking Kafastha and any other prescribed allopathic medicines, antibiotics, or daily medications.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.06] border border-white/10 space-y-3">
              <span className="text-amber-400 font-bold text-sm uppercase tracking-wider block">
                Maternal Care
              </span>
              <h3 className="font-heading font-bold text-lg text-white">Pregnancy &amp; Nursing</h3>
              <p className="text-xs sm:text-sm text-[#E3D8C1]/90 leading-relaxed">
                Pregnant and breastfeeding mothers should consult their doctor before use and share the full ingredient list to ensure personal suitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 — COMPREHENSIVE RESPIRATORY HEALTH INFORMATION     */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
            Holistic Airway Defense
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#2B1A0E] font-bold">
            Respiratory Health, Mucus Clearance &amp; Immune Support
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A36] leading-relaxed">
            Understanding how Kafastha Granules support clear bronchial passages and long-term respiratory resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-7 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#2B1A0E]">
              Airway Swelling &amp; Mucus Clearance
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
              Kafastha assists in liquefying sticky secretions in the trachea and bronchi, reducing localized inflammatory swelling and expanding constricted airways for easier, effortless breathing.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#2B1A0E]">
              Protection in Polluted Environments
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
              Airborne particulate pollutants constantly irritate sensitive respiratory linings. Kafastha coats and protects delicate mucous membranes, helping mitigate chronic cough and throat congestion caused by urban smog.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E3D8C1] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#2B1A0E]">
              Allergies &amp; Immune Defense
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
              May provide meaningful relief in bronchitis, eosinophilia, sinusitis, and allergic rhinitis by pacifying hypersensitive immune responses and building mucosal resistance against recurrent seasonal respiratory infections.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10 — ASTHMA, COPD & HOSPITAL CONSULTATION             */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-br from-[#213714] to-[#3A5E24] text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D9B872] block">
                Global &amp; National Respiratory Burden
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                Asthma, COPD &amp; Specialized Hospital Care
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#F3EAD3]/90 leading-relaxed font-light">
                <p>
                  Chronic respiratory conditions impact millions across the globe. In India alone, an estimated <strong>100 million or more people</strong> are affected by chronic respiratory illnesses.
                </p>
                <p>
                  Worldwide epidemiological data indicates that approximately <strong>358 million individuals have asthma</strong> and <strong>174 million live with COPD</strong>—surpassing <strong>530 million people</strong> combined. In addition, more than 90% of the world&apos;s population breathes air exceeding safe pollution standards.
                </p>
                <p>
                  Kafastha is engineered to help enhance day-to-day breathing comfort and quality of life for individuals living with asthma and COPD. You may begin with a single small packet to observe how your body responds before deciding on long-term continuation.
                </p>
              </div>

              {/* Hospital Online Review Box */}
              <div className="p-6 rounded-3xl bg-white/10 border border-white/20 space-y-3">
                <h3 className="font-heading font-bold text-xl text-[#F3EAD3]">
                  Consult Omshree Sidha Hospital Online
                </h3>
                <p className="text-sm text-[#E3D8C1] leading-relaxed">
                  At <strong>Omshree Sidha Hospital</strong> (sister institution of Omshree Sidha Pharma in Kerala), we treat patients suffering from chronic respiratory conditions. If you cannot visit our hospital in Kottayam in person, you can send us your recent medical reports and schedule an online clinical consultation.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={CONSULT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D9B872] text-[#2B1A0E] hover:bg-white px-6 py-3 text-sm font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Send Reports on WhatsApp</span>
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:bg-white/10 px-6 py-3 text-sm font-bold text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Clinic: {PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl bg-[#1A2C10] p-8 space-y-6">
                <div className="flex items-center gap-3 text-[#D9B872]">
                  <Stethoscope className="w-8 h-8" />
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">Omshree Sidha Hospital</h3>
                    <p className="text-xs text-[#E3D8C1]">Ayurvedic Hospital • Est. 1880 • Kerala, India</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#E3D8C1]/90 leading-relaxed border-t border-white/10 pt-4">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#D9B872] shrink-0 mt-0.5" />
                    <span>Vayala P.O., Kottayam, Kerala 686587</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-[#D9B872] shrink-0 mt-0.5" />
                    <span>info@omshreeayur.com</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-[#D9B872] shrink-0 mt-0.5" />
                    <span>+91 98469 92789 / +91 94474 61288</span>
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#213714] hover:bg-[#F3EAD3] py-3.5 text-sm font-bold transition-colors"
                  >
                    <span>View Hospital Details &amp; Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 11 — COMPLETE FAQ SECTION (ALL 20 FAQS)             */}
      {/* ============================================================ */}
      <section id="faqs" className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#2B1A0E] font-bold">
            Frequently Asked Questions: All Your Inquiries Answered
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A36] leading-relaxed">
            All 20 questions and answers from the official clinical monograph, rephrased for clarity and organized across 7 categories:
          </p>
        </div>

        <div className="space-y-10">
          {FAQ_GROUPS.map((group) => (
            <div
              key={group.groupCode}
              className="rounded-3xl bg-white border border-[#E3D8C1] shadow-xs overflow-hidden"
            >
              {/* Group Header */}
              <div className="bg-[#FAF4E5] px-6 sm:px-8 py-5 border-b border-[#E3D8C1] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833D] block">
                    {group.groupCode}
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#2B1A0E]">
                    {group.groupTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#81754B]">
                    {group.groupDescription}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#517B32] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#E3D8C1] self-start sm:self-auto">
                  {group.items.length} Questions
                </span>
              </div>

              {/* Accordion Questions */}
              <div className="divide-y divide-[#E3D8C1]">
                {group.items.map((item) => (
                  <details key={item.id} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 sm:px-8 py-5 hover:bg-[#FAF7F0] transition-colors [&::-webkit-details-marker]:hidden">
                      <span className="text-sm sm:text-base font-semibold text-[#2B1A0E]">
                        {item.q}
                      </span>
                      <Plus className="h-5 w-5 shrink-0 text-[#517B32] transition-transform duration-300 group-open:rotate-45" />
                    </summary>
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#5C4A36] leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 12 — MEDICAL SAFETY INFORMATION                       */}
      {/* ============================================================ */}
      <section className="bg-[#FAF4E5] border-y border-[#E3D8C1] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            <div className="rounded-3xl bg-white border border-[#E3D8C1] p-8 md:p-10 space-y-5 shadow-sm">
              <div className="flex items-center gap-3 text-[#2F4A1E]">
                <ShieldCheck className="w-7 h-7 text-[#517B32]" />
                <h3 className="font-heading font-bold text-2xl text-[#2B1A0E]">
                  Responsible Healthcare Disclosure
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                  <span>Kafastha is an authentic Ayurvedic proprietary medicine produced according to GMP standards by Omshree Sidha Pharma.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                  <span>Therapeutic outcomes and recovery timeframes naturally vary in accordance with each individual&apos;s baseline health and diagnosis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                  <span>Do not discontinue or modify any prescribed conventional medications, antibiotics, or inhalers without explicit medical supervision.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#517B32] shrink-0 mt-0.5" />
                  <span>Patients managing diabetes must factor in the 10 to 15 grams of daily sugar present across the 4 to 6 daily doses.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-[#402816] text-[#F3EAD3] p-8 md:p-10 space-y-5 shadow-sm border border-[#81754B]/40">
              <div className="flex items-center gap-3 text-amber-400">
                <ShieldAlert className="w-7 h-7" />
                <h3 className="font-heading font-bold text-2xl text-white">
                  When to Seek Immediate Emergency Attention
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#E3D8C1] leading-relaxed">
                Seek immediate hospital emergency care if you or a family member experience any of the following critical respiratory warning signs:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#E3D8C1]/90">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Severe, sudden, or rapidly worsening difficulty breathing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Persistent crushing chest pain, pressure, or shortness of breath with sweating.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Coughing up blood or dark rusty sputum (hemoptysis).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Severe acute asthma attack where prescribed reliever inhalers fail to provide relief.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 13 — FINAL CONVERSION & PURCHASE CTA                 */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#213714] text-white p-8 sm:p-12 md:p-16 shadow-2xl border border-[#3D5C26]/50">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#517B32]/30 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="bg-[#D9B872] text-[#2B1A0E] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
                Start Breathing Comfortably
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Order Kafastha Granules Today
              </h2>
              <p className="text-base sm:text-lg text-[#E3D8C1] leading-relaxed max-w-2xl font-light">
                Available in <strong>75g (MRP ₹160)</strong>, <strong>150g (₹310)</strong>, and <strong>300g (₹610)</strong> bottles with fresh hospital pharmacy dispatch across India.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/checkout"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#D9B872] text-[#213714] hover:bg-white px-8 py-4 text-sm sm:text-base font-bold shadow-lg transition-transform hover:scale-105"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Pay Online via Razorpay</span>
                </Link>
                <a
                  href={BUY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] px-7 py-4 text-sm sm:text-base font-bold shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order via WhatsApp</span>
                </a>
                <a
                  href={CONSULT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#213714] px-6 py-4 text-sm sm:text-base font-bold transition-colors"
                >
                  <Stethoscope className="w-5 h-5" />
                  <span>Consult Doctor</span>
                </a>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#E3D8C1]">
                <span>Email: <a href={`mailto:${HOSPITAL_EMAIL}`} className="underline font-semibold text-white">{HOSPITAL_EMAIL}</a></span>
                <span>Phone: <a href={PHONE_TEL} className="underline font-semibold text-white">{PHONE_DISPLAY}</a></span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 sm:w-60 aspect-square">
                <Image
                  src="/images/products/kafastha.png"
                  alt="Kafastha Ayurvedic Granules packaging - Omshree Sidha Hospital"
                  fill
                  sizes="(max-width: 640px) 192px, 240px"
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RELATED PHARMACY FORMULATIONS                                */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
              In-House Pharmacy
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#2B1A0E] font-bold">
              More Formulations from Omshree Sidha Hospital
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#517B32] hover:underline"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {relatedProducts.map((p) => (
            <Link
              key={p.id}
              href={p.detailPath ?? "/products"}
              className="group block rounded-3xl bg-white border border-[#E3D8C1] hover:border-[#517B32] overflow-hidden transition-all shadow-xs hover:shadow-md"
            >
              <div className="relative aspect-square bg-[#FAF7F0] p-6">
                <Image
                  src={p.image}
                  alt={`${p.name} jar`}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 sm:p-5 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#81754B] block font-medium">
                  {p.categoryLabel}
                </span>
                <p className="font-heading text-base sm:text-lg text-[#2B1A0E] font-bold group-hover:text-[#517B32] transition-colors">
                  {p.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* MOBILE STICKY BOTTOM ACTION BAR                              */}
      {/* ============================================================ */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#E3D8C1] p-3 z-50 sm:hidden shadow-lg">
        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="flex-none p-2.5 rounded-full border border-[#2F4A1E]/30 text-[#2F4A1E] hover:bg-[#F3EAD3]"
            aria-label="Call Hospital Pharmacy"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={BUY_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] text-white py-2.5 px-3 text-xs font-bold shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <Link
            href="/checkout"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#213714] text-white py-2.5 px-3 text-xs font-bold shadow-md"
          >
            <CreditCard className="w-3.5 h-3.5 text-[#D9B872]" />
            <span>Pay Online</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
