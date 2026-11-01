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
  FileText,
  ShieldCheck,
  Info,
  Plus,
} from "lucide-react";
import { AUTHENTIC_PRODUCTS } from "@/lib/product-assets";

/* ------------------------------------------------------------------ */
/*  PRODUCT DATA                                                       */
/*  Only verified facts are set. Anything `null` is NOT shown publicly */
/*  and is listed in the implementation report for verification.       */
/*  When a value is confirmed against the approved label, fill it in   */
/*  and the UI will render it automatically.                           */
/* ------------------------------------------------------------------ */
const PRODUCT = {
  name: "Kafastha",
  image: "/images/products/kafastha.png",
  imageAlt: "Kafastha Ayurvedic medicine jar, labelled in English, Malayalam and Hindi",
  category: "Ayurvedic Medicine",
  preparedBy: "In-house pharmacy, Omshree Sidha Hospital",
  // REQUIRES PRODUCT LABEL / CLINICAL / LEGAL VERIFICATION
  form: null as string | null, // e.g. "Granules"
  packSize: null as string | null, // e.g. "100 g"
  priceINR: null as number | null,
  licence: null as string | null,
  storage: null as string | null,
  manufacturer: null as string | null, // e.g. "Omshree Sidha Pharma"
};

/** Official product creative supplied by Omshree (public/kafastha-banner-2.jpg, 1376×768). */
const BANNER = {
  src: "/kafastha-banner-2.jpg",
  width: 1376,
  height: 768,
  alt: "Kafastha jar on a wooden side table in a sunlit living room, with a woman sitting nearby breathing calmly",
};

/** Official product photograph supplied by Omshree (public/kafastha-product.-44png.png, 1376×768). */
const PRODUCT_PHOTO = {
  src: "/kafastha-product.-44png.png",
  width: 1376,
  height: 768,
  alt: "Kafastha jar on a wooden table in a traditional Ayurvedic pharmacy, surrounded by dried herbs and whole spices",
};

/** Ingredient names supplied by the client. Rendered as confirmed ONLY when
 *  INGREDIENTS_VERIFIED is set to true after checking the approved label. */
const INGREDIENTS_VERIFIED = false;
const INGREDIENTS: { name: string; botanical?: string }[] = [
  { name: "Rasna" },
  { name: "Haridra" },
  { name: "Draksha" },
  { name: "Shati" },
  { name: "Maricha" },
  { name: "Pippali" },
  { name: "Lavangam" },
  { name: "Yavakshara" },
  { name: "Ela" },
  { name: "Elavangam" },
  { name: "Sugar" },
];

const SITE = "https://omshreeayur.com";
const PAGE_URL = `${SITE}/products/kafastha`;
const IMAGE_URL = `${SITE}${PRODUCT.image}`;
const BANNER_URL = `${SITE}${BANNER.src}`;
const PHONE_DISPLAY = "+91 98469 92789";
const PHONE_TEL = "tel:+919846992789";
const BUY_URL =
  "https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20buy%20Kafastha.%20Please%20share%20the%20price%2C%20pack%20size%20and%20how%20to%20order.";
const WHATSAPP_URL =
  "https://wa.me/919846992789?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Kafastha%20(price%2C%20availability%20and%20guidance).";

const TITLE = "Kafastha – Ayurvedic Medicine for Cough and Congestion";
const DESCRIPTION =
  "Kafastha is an Ayurvedic medicine from the in-house pharmacy of Omshree Sidha Hospital, used under physician guidance for Kapha-related cough and chest congestion. See product details, precautions and how to enquire.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: BANNER_URL, width: BANNER.width, height: BANNER.height, alt: BANNER.alt }],
  },
  robots: { index: true, follow: true },
};

const faqs: { q: string; a: string }[] = [
  {
    q: "What is Kafastha?",
    a: "Kafastha is an Ayurvedic medicine made in the in-house pharmacy of Omshree Sidha Hospital in Kerala. Our physicians use it for cough with mucus and chest congestion, which Ayurveda links with Kapha.",
  },
  {
    q: "What type of Ayurvedic product is Kafastha?",
    a: "It is a proprietary Kapha-balancing formulation in the hospital's respiratory range. It is supplied after a consultation with an Omshree physician.",
  },
  {
    q: "What ingredients are used in Kafastha?",
    a: "The full ingredient list is printed on the label. We are confirming it against the approved label before publishing it here. Call or WhatsApp us and we will share it.",
  },
  {
    q: "Is Kafastha intended for cough-related complaints?",
    a: "Yes, our physicians use it for Kapha-related cough and congestion. Coughs have many causes, so a doctor should check yours first, especially if it lasts more than three weeks.",
  },
  {
    q: "How can I find the correct usage instructions?",
    a: "Your Omshree physician will tell you how to take it, and you should also read the label on the pack. Please don't follow dosage advice from other websites.",
  },
  {
    q: "Can I use Kafastha with other medicines?",
    a: "Ask a doctor first and tell them everything you take. Do not stop or change any medicine your doctor has prescribed.",
  },
  {
    q: "Is it suitable for children?",
    a: "Only a physician who has examined the child should decide. Please don't give it to children without medical advice.",
  },
  {
    q: "Can pregnant or breastfeeding women use it?",
    a: "Not without speaking to a doctor first. Our physicians will advise based on your situation.",
  },
  {
    q: "Can people with asthma or COPD use it?",
    a: "Asthma and COPD need ongoing medical care. Kafastha does not replace inhalers or prescribed treatment. Talk to your doctor before adding it.",
  },
  {
    q: "How can I enquire about price and availability?",
    a: `Call ${PHONE_DISPLAY} or send a WhatsApp message to the same number. Our team will share the current price, pack size and availability.`,
  },
];

const related = AUTHENTIC_PRODUCTS.filter((p) => p.id !== "kafastha").slice(0, 4);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${SITE}/products` },
        { "@type": "ListItem", position: 3, name: PRODUCT.name, item: PAGE_URL },
      ],
    },
    {
      "@type": "Product",
      name: PRODUCT.name,
      image: [BANNER_URL, IMAGE_URL],
      url: PAGE_URL,
      category: PRODUCT.category,
      description:
        "An Ayurvedic medicine from the in-house pharmacy of Omshree Sidha Hospital, used under physician guidance for Kapha-related cough and chest congestion.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ------------------------------ styles ------------------------------ */
const ring =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B4833D]";
const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-full bg-[#2F4A1E] text-white hover:bg-[#517B32] px-7 py-4 text-sm font-semibold tracking-wide transition-colors ${ring}`;
const btnOutline = `inline-flex items-center justify-center gap-2 rounded-full border border-[#2F4A1E]/25 text-[#2F4A1E] hover:border-[#2F4A1E] hover:bg-white px-7 py-4 text-sm font-semibold tracking-wide transition-colors ${ring}`;
const eyebrow = "text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D]";
const h2 = "font-heading text-3xl md:text-4xl text-[#2B1A0E] leading-tight";

export default function KafasthaPage() {
  const specs: [string, string][] = [
    ["Product", PRODUCT.name],
    ["Category", PRODUCT.category],
    ...(PRODUCT.form ? [["Form", PRODUCT.form] as [string, string]] : []),
    ...(PRODUCT.packSize ? [["Pack size", PRODUCT.packSize] as [string, string]] : []),
    ["Prepared by", PRODUCT.manufacturer ?? PRODUCT.preparedBy],
    ...(PRODUCT.licence ? [["Licence", PRODUCT.licence] as [string, string]] : []),
    ...(PRODUCT.storage ? [["Storage", PRODUCT.storage] as [string, string]] : []),
    ["Supplied", "After consultation with an Omshree physician"],
    ["Usage and dosage", "As advised by your physician and the pack label"],
  ];

  return (
    <div className="relative flex flex-col w-full font-sans bg-[#FBF7EE] text-[#3A2A1C]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* A. ANNOUNCEMENT BAR (below fixed header) */}
      <div>
        <div className="bg-[#2F4A1E] text-[#F3EAD3] text-xs sm:text-sm">
          <div className="px-[4%] py-2.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#D9B872]" aria-hidden="true" />
              Official product page from Omshree Sidha Hospital
            </span>
            <a href={PHONE_TEL} className={`underline-offset-4 hover:underline ${ring}`}>
              Product enquiries: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* B. PRODUCT HERO */}
      <section className="px-[4%] pt-8 pb-16 md:pb-24">
        <nav className="text-xs text-[#81754B] mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className={`hover:text-[#2F4A1E] ${ring}`}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/products" className={`hover:text-[#2F4A1E] ${ring}`}>Products</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#2B1A0E] font-medium">Kafastha</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Official banner — intrinsic size keeps full image visible with no layout shift */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-[#E3D8C1] shadow-[0_30px_60px_-30px_rgba(43,26,14,0.35)] bg-[#E9E4D2]">
              <Image
                src={BANNER.src}
                alt={BANNER.alt}
                width={BANNER.width}
                height={BANNER.height}
                priority
                sizes="(max-width: 1024px) 92vw, 56vw"
                className="block w-full h-auto"
              />
            </div>
          </div>

          {/* Buy box */}
          <div className="lg:col-span-5">
            <p className={eyebrow}>Ayurvedic Product · Prescription only</p>
            <h1 className="font-heading text-4xl sm:text-5xl text-[#2B1A0E] leading-[1.08] mt-3 mb-5">
              Kafastha
              <span className="block text-2xl sm:text-3xl text-[#517B32] mt-2">
                Ayurvedic Medicine for Cough and Congestion
              </span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#5C4A36] mb-6">
              A Kapha-balancing Ayurvedic formulation made in our own pharmacy. Our physicians use it for cough with
              mucus and a heavy, congested chest, alongside diet and lifestyle advice.
            </p>

            <dl className="grid grid-cols-2 gap-3 mb-6 text-sm">
              <div className="rounded-2xl bg-white ring-1 ring-[#E3D8C1] p-4">
                <dt className="text-[#81754B] text-xs uppercase tracking-wider mb-1">Prepared by</dt>
                <dd className="font-medium text-[#2B1A0E]">{PRODUCT.manufacturer ?? "Omshree Sidha Hospital pharmacy"}</dd>
              </div>
              <div className="rounded-2xl bg-white ring-1 ring-[#E3D8C1] p-4">
                <dt className="text-[#81754B] text-xs uppercase tracking-wider mb-1">{PRODUCT.form ? "Form" : "Type"}</dt>
                <dd className="font-medium text-[#2B1A0E]">{PRODUCT.form ?? "Ayurvedic medicine"}</dd>
              </div>
            </dl>

            {/* Price block: real price only when confirmed */}
            <div className="rounded-2xl border border-dashed border-[#B4833D]/50 bg-[#FFFCF5] p-5 mb-6">
              {PRODUCT.priceINR ? (
                <p className="font-heading text-3xl text-[#2B1A0E]">
                  ₹{PRODUCT.priceINR.toLocaleString("en-IN")}
                  {PRODUCT.packSize && <span className="text-base text-[#81754B] font-sans ml-2">/ {PRODUCT.packSize}</span>}
                </p>
              ) : (
                <>
                  <p className="font-semibold text-[#2B1A0E]">Contact us for price and availability</p>
                  <p className="text-sm text-[#81754B] mt-1">
                    Kafastha is supplied after a consultation. Our team will share the current price and pack size.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <a href={BUY_URL} target="_blank" rel="noreferrer" className={btnPrimary}>
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> Buy Now
              </a>
              <p className="text-center text-xs text-[#81754B] -mt-1">Orders are placed on WhatsApp. Our team will confirm price and availability.</p>
              <a href={PHONE_TEL} className={btnOutline}>
                <Phone className="h-5 w-5" aria-hidden="true" /> Call {PHONE_DISPLAY}
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-3 gap-2 text-center text-[11px] text-[#5C4A36]">
              <li className="flex flex-col items-center gap-1.5"><Leaf className="h-5 w-5 text-[#517B32]" aria-hidden="true" />Ayurvedic formulation</li>
              <li className="flex flex-col items-center gap-1.5"><FlaskConical className="h-5 w-5 text-[#517B32]" aria-hidden="true" />Made in-house</li>
              <li className="flex flex-col items-center gap-1.5"><Stethoscope className="h-5 w-5 text-[#517B32]" aria-hidden="true" />Physician guided</li>
            </ul>
          </div>
        </div>
      </section>

      {/* C. HIGHLIGHTS */}
      <section aria-label="Product highlights" className="border-y border-[#E3D8C1] bg-white">
        <ul className="px-[4%] py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {[
            { icon: Leaf, t: "Ayurvedic medicine", d: "A Kapha-balancing formulation." },
            { icon: FlaskConical, t: "Our own pharmacy", d: "Prepared at Omshree Sidha Hospital." },
            { icon: FileText, t: "Full label on request", d: "Ask us for the ingredient list." },
            { icon: Stethoscope, t: "Physician guidance", d: "Dosage set by your doctor." },
          ].map(({ icon: Icon, t, d }) => (
            <li key={t} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3EAD3] text-[#2F4A1E]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-[#2B1A0E] text-sm sm:text-base">{t}</p>
                <p className="text-xs sm:text-sm text-[#81754B] mt-0.5">{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* D. PRODUCT STORY */}
      <section className="px-[4%] py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="overflow-hidden rounded-[2rem] ring-1 ring-[#E3D8C1] shadow-[0_30px_60px_-30px_rgba(43,26,14,0.35)]">
            <Image
              src={PRODUCT_PHOTO.src}
              alt={PRODUCT_PHOTO.alt}
              width={PRODUCT_PHOTO.width}
              height={PRODUCT_PHOTO.height}
              loading="lazy"
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="block w-full h-auto"
            />
          </div>
          <div>
            <p className={eyebrow}>About the product</p>
            <h2 className={`${h2} mt-3 mb-6`}>What is Kafastha?</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#5C4A36]">
              <p>
                In Ayurveda, Kapha is linked with heaviness, moisture and mucus. When someone has a chesty cough that
                brings up phlegm, an Ayurvedic doctor will usually look at Kapha first.
              </p>
              <p>
                Kafastha is one of the formulations our physicians use in these cases. It belongs to the respiratory
                range made in the hospital&apos;s own pharmacy and is prescribed with diet and lifestyle advice suited to
                each person.
              </p>
              <p className="text-sm text-[#81754B]">
                Kafastha is a traditional preparation. It has not been tested in published clinical trials and does not
                replace a medical check-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E. INGREDIENTS */}
      <section aria-labelledby="ingredients" className="bg-[#F3EAD3]/60 px-[4%] py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className={eyebrow}>Ingredients</p>
          <h2 id="ingredients" className={`${h2} mt-3 mb-4`}>What goes into Kafastha</h2>
          {INGREDIENTS_VERIFIED ? (
            <>
              <p className="text-[#5C4A36] max-w-2xl mx-auto mb-10">As listed on the product label.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
                {INGREDIENTS.map((i) => (
                  <li key={i.name} className="rounded-2xl bg-white ring-1 ring-[#E3D8C1] p-5">
                    <Leaf className="h-5 w-5 text-[#517B32] mb-3" aria-hidden="true" />
                    <p className="font-heading text-lg text-[#2B1A0E]">{i.name}</p>
                    {i.botanical && <p className="text-xs italic text-[#81754B] mt-1">{i.botanical}</p>}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="mx-auto max-w-2xl rounded-3xl bg-white ring-1 ring-[#E3D8C1] p-8 md:p-10 mt-8">
              <FileText className="h-8 w-8 text-[#B4833D] mx-auto mb-4" aria-hidden="true" />
              <p className="text-[#5C4A36] leading-relaxed">
                Kafastha is made from traditional Ayurvedic herbs and spices. We are checking the full ingredient list
                against the approved label before publishing it here, so you get exactly what is on the pack.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`${btnOutline} mt-6`}>
                Ask for the ingredient list <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* F. PRODUCT INFORMATION */}
      <section aria-labelledby="details" className="px-[4%] py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className={eyebrow}>Specifications</p>
            <h2 id="details" className={`${h2} mt-3 mb-4`}>Product details</h2>
            <p className="text-[#5C4A36]">Price and pack size are shared on enquiry.</p>
          </div>
          <dl className="lg:col-span-8 divide-y divide-[#E3D8C1] rounded-3xl bg-white ring-1 ring-[#E3D8C1] overflow-hidden">
            {specs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 px-6 py-5">
                <dt className="text-sm font-semibold text-[#2B1A0E]">{k}</dt>
                <dd className="sm:col-span-2 text-[#5C4A36]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* G. HOW TO GET GUIDANCE */}
      <section aria-labelledby="steps" className="bg-[#2F4A1E] text-[#F3EAD3] px-[4%] py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D9B872]">How it works</p>
          <h2 id="steps" className="font-heading text-3xl md:text-4xl text-white mt-3">How to get Kafastha</h2>
        </div>
        <ol className="grid md:grid-cols-3 gap-6">
          {[
            ["Learn about the product", "Read this page and note any questions you have."],
            ["Talk to Omshree", "Call or WhatsApp us. A physician will understand your symptoms and history."],
            ["Follow the advice", "Use Kafastha as your physician advises and as printed on the pack label."],
          ].map(([t, d], i) => (
            <li key={t} className="rounded-3xl bg-white/[0.06] ring-1 ring-white/10 p-8">
              <span className="font-heading text-5xl text-[#D9B872]">0{i + 1}</span>
              <h3 className="font-heading text-xl text-white mt-4 mb-2">{t}</h3>
              <p className="text-sm leading-relaxed text-[#F3EAD3]/80">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* H. SAFETY */}
      <section aria-labelledby="safety" className="px-[4%] py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white ring-1 ring-[#E3D8C1] p-8 md:p-10">
            <Info className="h-6 w-6 text-[#B4833D] mb-4" aria-hidden="true" />
            <h2 id="safety" className="font-heading text-2xl md:text-3xl text-[#2B1A0E] mb-5">Using Kafastha responsibly</h2>
            <ul className="space-y-3 text-[#5C4A36]">
              {[
                "Use it only as advised by a qualified physician.",
                "Do not stop or change medicines your doctor has prescribed.",
                "Children, pregnant or breastfeeding women, and people with asthma, COPD or other long-term conditions should get medical advice first.",
                "Tell your physician about allergies and everything else you take.",
                "Read the pack label before use.",
              ].map((t) => (
                <li key={t} className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-[#517B32] mt-0.5" aria-hidden="true" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-[#FFF6E5] ring-1 ring-[#E8D3A8] p-8 md:p-10">
            <Stethoscope className="h-6 w-6 text-[#B4833D] mb-4" aria-hidden="true" />
            <h3 className="font-heading text-2xl md:text-3xl text-[#2B1A0E] mb-5">See a doctor first if you have</h3>
            <ul className="list-disc pl-5 space-y-2 text-[#5C4A36]">
              <li>A cough lasting more than three weeks, or one that keeps coming back</li>
              <li>Breathlessness, wheezing or chest pain</li>
              <li>Blood in your phlegm</li>
              <li>High fever, night sweats or unexplained weight loss</li>
            </ul>
            <p className="mt-5 text-sm font-medium text-[#8A4B1F]">
              If you have severe difficulty breathing, go to the nearest emergency department.
            </p>
          </div>
        </div>
      </section>

      {/* I. TRUST */}
      <section aria-labelledby="trust" className="border-y border-[#E3D8C1] bg-white px-[4%] py-16">
        <h2 id="trust" className="sr-only">Why you can contact us with confidence</h2>
        <ul className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: FlaskConical, t: "Made in our own pharmacy", d: "Prepared at Omshree Sidha Hospital, Kerala." },
            { icon: FileText, t: "Label details on request", d: "Ask us and we will share the full product label." },
            { icon: Phone, t: "Talk to a real person", d: `Call or WhatsApp ${PHONE_DISPLAY}.` },
          ].map(({ icon: Icon, t, d }) => (
            <li key={t}>
              <Icon className="h-7 w-7 text-[#2F4A1E] mx-auto mb-3" aria-hidden="true" />
              <p className="font-heading text-xl text-[#2B1A0E]">{t}</p>
              <p className="text-sm text-[#81754B] mt-1">{d}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* J. FAQ */}
      <section aria-labelledby="faq" className="px-[4%] py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className={eyebrow}>FAQ</p>
            <h2 id="faq" className={`${h2} mt-3 mb-4`}>Questions about Kafastha</h2>
            <p className="text-[#5C4A36]">
              Can&apos;t find your answer?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`text-[#2F4A1E] underline underline-offset-4 ${ring}`}>Message us</a>.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#E3D8C1] border-y border-[#E3D8C1]">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className={`flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden ${ring}`}>
                  <h3 className="text-base md:text-lg font-semibold text-[#2B1A0E]">{f.q}</h3>
                  <Plus className="h-5 w-5 shrink-0 text-[#2F4A1E] transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="pb-6 pr-10 text-[#5C4A36] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* K. FINAL CTA */}
      <section className="px-[4%] pb-20 md:pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#2B1A0E] text-[#F3EAD3] p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#517B32]/30 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-4">Want to know more about Kafastha?</h2>
            <p className="text-[#E3D8C1] max-w-xl">Contact Omshree for product information, availability and guidance.</p>
          </div>
          <div className="relative flex flex-col sm:flex-row md:flex-col gap-3">
            <a href={BUY_URL} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#F3EAD3] text-[#2B1A0E] hover:bg-white px-7 py-4 text-sm font-semibold ${ring}`}>
              <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" /> Buy Now
            </a>
            <a href={PHONE_TEL} className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:bg-white/10 px-7 py-4 text-sm font-semibold ${ring}`}>
              <Phone className="h-5 w-5" aria-hidden="true" /> Call Hospital
            </a>
          </div>
        </div>
      </section>

      {/* L. RELATED PRODUCTS */}
      <section aria-labelledby="related" className="px-[4%] pb-20 md:pb-28">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 id="related" className={h2}>More from our pharmacy</h2>
          <Link href="/products" className={`hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#2F4A1E] hover:underline underline-offset-4 ${ring}`}>
            View all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <li key={p.id}>
              <Link href={p.detailPath ?? "/products"} className={`group block rounded-3xl bg-white ring-1 ring-[#E3D8C1] hover:ring-[#B4833D] overflow-hidden transition ${ring}`}>
                <div className="relative aspect-square bg-[#F3EAD3]/50">
                  <Image src={p.image} alt={`${p.name} pack`} fill loading="lazy" sizes="(max-width: 1024px) 46vw, 23vw" className="object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-widest text-[#81754B]">{p.categoryLabel}</p>
                  <p className="font-heading text-lg text-[#2B1A0E] mt-1">{p.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/products" className={`sm:hidden mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2F4A1E] ${ring}`}>
          View all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <aside className="mt-16 flex gap-3 rounded-2xl bg-[#F3EAD3]/70 p-5 text-sm leading-relaxed text-[#5C4A36]" aria-label="Medical disclaimer">
          <Info className="h-5 w-5 shrink-0 text-[#B4833D] mt-0.5" aria-hidden="true" />
          <p>
            <strong className="text-[#2B1A0E]">Medical disclaimer:</strong> This page gives general product information. It
            does not replace professional medical advice, diagnosis or treatment. Always consult a qualified doctor about
            your health.
          </p>
        </aside>
      </section>

    </div>
  );
}
