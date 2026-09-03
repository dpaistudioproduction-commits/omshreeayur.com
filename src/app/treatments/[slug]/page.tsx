import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, HeartHandshake } from "lucide-react";
import { TreatmentData } from "@/types/treatment";
import { SchemaMarkup, generateTreatmentSchema } from "@/components/seo/SchemaMarkup";
import fs from 'fs';
import path from 'path';

// Helper to read data from local JSON CMS
async function getTreatmentData(slug: string): Promise<TreatmentData | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'treatments', `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getTreatmentData(slug);

  if (!data) {
    return { title: "Treatment Not Found" };
  }

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: {
      canonical: `/treatments/${data.slug}`,
    },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: `https://omshreeayur.com/treatments/${data.slug}`,
      ...(data.hero?.backgroundImageUrl
        ? {
            images: [
              {
                url: data.hero.backgroundImageUrl,
                width: 1200,
                height: 630,
                alt: data.name,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const data = await getTreatmentData(slug);

  if (!data) {
    notFound();
  }

  // Determine hero image: prefer JSON field, fallback to slug-based path
  const heroImage =
    data.hero?.backgroundImageUrl && data.hero.backgroundImageUrl.length > 1
      ? data.hero.backgroundImageUrl
      : `/images/treatments/${slug}.jpg`;

  // Check if image file actually exists to avoid broken images
  const heroImagePath = path.join(process.cwd(), 'public', heroImage);
  const hasHeroImage = fs.existsSync(heroImagePath) && fs.statSync(heroImagePath).size > 5000;

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7] font-sans">
      <SchemaMarkup schema={generateTreatmentSchema(data as any)} />

      {/* ── 1. Hero Section ── matches Asthma master template exactly ── */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%]">

          {/* Breadcrumb */}
          <nav
            className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-3">
              <li>
                <Link href="/" className="hover:text-[#66371B] transition-colors">
                  Home
                </Link>
              </li>
              <li><span>/</span></li>
              <li>
                <Link href="/treatments" className="hover:text-[#66371B] transition-colors">
                  Treatments
                </Link>
              </li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">{data.name}</li>
            </ol>
          </nav>

          {/* Title */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
              {data.hero?.title || data.name}
            </h1>
          </div>

          {/* Hero Image — only when available */}
          {hasHeroImage && (
            <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-xl">
              <Image
                src={heroImage}
                alt={`${data.name} — Ayurvedic treatment at Omshree Sidha Hospital`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* ── 2. Main Content Layout ── */}
      <section className="py-16 md:py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── Left Column: Long-form Content ── */}
            <div className="lg:col-span-2 space-y-16">

              {data.contentHtml ? (
                /* Render archived HTML content styled to match Asthma page typography */
                <FadeIn>
                  <div
                    className="treatment-content-area"
                    dangerouslySetInnerHTML={{ __html: data.contentHtml }}
                  />
                </FadeIn>
              ) : (
                /* Structured fields fallback for treatments without contentHtml */
                <>
                  {data.quickAnswer && (
                    <FadeIn>
                      <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                        <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">
                          Clinical Overview
                        </h2>
                        <p className="text-xl md:text-2xl text-[#66371B] font-medium leading-relaxed mb-6">
                          {data.quickAnswer}
                        </p>
                      </div>
                    </FadeIn>
                  )}

                  {(data.whatItMeans || data.ayurvedicContext) && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {data.whatItMeans && (
                        <FadeIn delay={0.1} className="h-full">
                          <div className="h-full bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                            <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">
                              What It Means for You
                            </h3>
                            <p className="text-[#81754B] font-light leading-relaxed">
                              {data.whatItMeans}
                            </p>
                          </div>
                        </FadeIn>
                      )}
                      {data.ayurvedicContext && (
                        <FadeIn delay={0.2} className="h-full">
                          <div className="h-full bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                            <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">
                              Ayurvedic Perspective
                            </h3>
                            <p className="text-[#81754B] font-light leading-relaxed">
                              {data.ayurvedicContext}
                            </p>
                          </div>
                        </FadeIn>
                      )}
                    </div>
                  )}

                  {data.howTreatmentIsPlanned && (
                    <FadeIn delay={0.3}>
                      <h2 className="font-heading font-normal text-3xl md:text-4xl mb-8 text-[#66371B]">
                        How Treatment is Planned
                      </h2>
                      <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                        <p className="text-lg text-[#81754B] font-light leading-relaxed">
                          {data.howTreatmentIsPlanned}
                        </p>
                      </div>
                    </FadeIn>
                  )}

                  {data.therapies && data.therapies.length > 0 && (
                    <FadeIn delay={0.4}>
                      <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">
                        Therapies That May Be Used
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {data.therapies.map((therapy, i) => (
                          <div
                            key={i}
                            className="bg-white p-6 rounded-[2rem] border border-[#DBCFA8]/50 shadow-sm"
                          >
                            <h4 className="font-bold text-[#66371B] text-xl mb-3 flex items-center gap-3">
                              <CheckCircle2 className="h-6 w-6 text-[#517B32]" /> {therapy.name}
                            </h4>
                            <p className="text-[#81754B] text-sm mb-6 font-light leading-relaxed">
                              {therapy.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </FadeIn>
                  )}

                  {(data.whoShouldSeek || data.patientJourney) && (
                    <FadeIn delay={0.5}>
                      <div className="space-y-12">
                        {data.whoShouldSeek && (
                          <div>
                            <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">
                              Who Should Seek Consultation?
                            </h2>
                            <p className="text-lg text-[#81754B] font-light leading-relaxed">
                              {data.whoShouldSeek}
                            </p>
                          </div>
                        )}
                        {data.patientJourney && (
                          <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                            <h2 className="font-heading font-normal text-3xl mb-6 text-[#66371B]">
                              The Patient Journey &amp; Recovery
                            </h2>
                            <p className="text-lg text-[#81754B] font-light leading-relaxed">
                              {data.patientJourney}
                            </p>
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  )}

                  {data.faqs && data.faqs.length > 0 && (
                    <FadeIn delay={0.6}>
                      <h2 className="font-heading font-normal text-3xl md:text-4xl mb-8 text-[#66371B]">
                        Frequently Asked Questions
                      </h2>
                      <Accordion className="w-full bg-[#FDFBF7] rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm overflow-hidden px-8 md:px-12">
                        {data.faqs.map((faq, i) => (
                          <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="border-[#DBCFA8]/30"
                          >
                            <AccordionTrigger className="text-left text-lg font-medium text-[#66371B] hover:text-[#B4833D] py-8">
                              {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#81754B] font-light text-base leading-relaxed pb-8">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </FadeIn>
                  )}
                </>
              )}
            </div>

            {/* ── Right Column: Sticky Sidebar ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">

                {/* Related Links (only if present) */}
                {((data.relatedConditions && data.relatedConditions.length > 0) ||
                  (data.relatedTherapies && data.relatedTherapies.length > 0)) && (
                  <FadeIn>
                    <div className="bg-[#FDFBF7] p-8 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                      <h3 className="font-heading font-normal text-2xl mb-6 text-[#66371B] border-b border-[#DBCFA8]/30 pb-4">
                        Explore Further
                      </h3>

                      {data.relatedConditions && data.relatedConditions.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-[10px] font-bold text-[#B4833D] uppercase tracking-widest mb-4">
                            Related Conditions
                          </h4>
                          <ul className="space-y-4">
                            {data.relatedConditions.map((c) => (
                              <li key={c.slug}>
                                <Link
                                  href={`/conditions/${c.categorySlug}/${c.slug}`}
                                  className="text-[#66371B] font-medium text-sm hover:text-[#B4833D] transition-colors flex items-center gap-2"
                                >
                                  <ArrowRight className="h-4 w-4 text-[#517B32]" /> {c.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {data.relatedTherapies && data.relatedTherapies.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-bold text-[#B4833D] uppercase tracking-widest mb-4">
                            Related Therapies
                          </h4>
                          <ul className="space-y-4">
                            {data.relatedTherapies.map((t) => (
                              <li key={t.slug}>
                                <Link
                                  href={`/treatments/therapies/${t.slug}`}
                                  className="text-[#66371B] font-medium text-sm hover:text-[#B4833D] transition-colors flex items-center gap-2"
                                >
                                  <ArrowRight className="h-4 w-4 text-[#517B32]" /> {t.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                )}

                {/* Consultation CTA — always shown, matches Asthma sidebar */}
                <FadeIn delay={0.1}>
                  <div className="bg-white rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm overflow-hidden">
                    <div className="bg-[#66371B] p-8 text-white text-center">
                      <HeartHandshake className="h-10 w-10 mx-auto mb-4 text-[#E3D8C1]" />
                      <h3 className="font-heading font-normal text-3xl mb-2">Book a Consultation</h3>
                      <p className="text-[#E3D8C1] font-light text-sm">
                        Get a clinical assessment by our expert physicians.
                      </p>
                    </div>
                    <div className="p-8 space-y-4">
                      <Button
                        render={<Link href="/patient-care/consultation" />}
                        className="w-full bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-6 h-12 text-xs tracking-widest uppercase font-bold transition-colors"
                      >
                        Start Assessment
                      </Button>
                      <Button
                        render={<Link href="https://wa.me/919846992789" target="_blank" />}
                        variant="outline"
                        className="w-full border-[#DBCFA8] text-[#66371B] hover:bg-[#FDFBF7] rounded-full px-6 h-12 text-xs tracking-widest uppercase font-bold transition-colors"
                      >
                        WhatsApp Us
                      </Button>
                      <p className="text-center text-xs text-[#81754B] font-light mt-4">
                        Or call us directly at <br />
                        <strong className="text-[#66371B] font-medium">+91 4822229434</strong>
                      </p>
                    </div>
                  </div>
                </FadeIn>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
