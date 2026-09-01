import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, HeartPulse, CheckCircle2, FileText, Globe, ArrowRight, HeartHandshake } from "lucide-react";
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
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const data = await getTreatmentData(slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SchemaMarkup schema={generateTreatmentSchema(data as any)} />
      
      {/* 1. Dynamic Hero Section */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full max-w-[1440px] mx-auto px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/treatments" className="hover:text-[#66371B] transition-colors">Treatments</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">{data.name}</li>
            </ol>
          </nav>
          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            {data.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto mb-10">
            {data.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <Button render={<Link href="/patient-care/consultation" />} size="lg" className="bg-[#66371B] hover:bg-[#B4833D] text-white rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full max-w-[1440px] mx-auto px-[4%]">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Clinical Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* 2. Quick Answer */}
              <FadeIn>
                <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm relative overflow-hidden">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">
                    Clinical Overview
                  </h2>
                  <p className="text-lg text-[#81754B] leading-relaxed font-light">
                    {data.quickAnswer}
                  </p>
                </div>
              </FadeIn>

              {/* 3 & 4. Meaning & Ayurvedic Perspective */}
              <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={0.1} className="h-full">
                  <div className="h-full bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                    <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">What It Means for You</h3>
                    <p className="text-[#81754B] font-light leading-relaxed">
                      {data.whatItMeans}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2} className="h-full">
                  <div className="h-full bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                    <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">Ayurvedic Perspective</h3>
                    <p className="text-[#81754B] font-light leading-relaxed">
                      {data.ayurvedicContext}
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* 5. How Treatment is Planned */}
              <FadeIn delay={0.3}>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-8 text-[#66371B]">How Treatment is Planned</h2>
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                  <p className="text-lg text-[#81754B] font-light leading-relaxed">
                    {data.howTreatmentIsPlanned}
                  </p>
                </div>
              </FadeIn>

              {/* 6. Therapies That May Be Used */}
              <FadeIn delay={0.4}>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Therapies That May Be Used</h2>
                <p className="text-[#81754B] mb-8 text-lg font-light">
                  Depending on your individual assessment, your physician may prescribe specific therapies as part of your comprehensive treatment plan.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {data.therapies.map((therapy, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-[#DBCFA8]/50 shadow-sm">
                      <h4 className="font-bold text-[#66371B] text-xl mb-3 flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-[#517B32]" /> {therapy.name}
                      </h4>
                      <p className="text-[#81754B] text-sm mb-6 font-light leading-relaxed">
                        {therapy.description}
                      </p>
                      <Link href={`/treatments/therapies/${therapy.slug}`} className="text-[#517B32] font-bold text-[10px] uppercase tracking-widest hover:text-[#B4833D] transition-colors flex items-center gap-2">
                        Read About Therapy <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* 7 & 8. Who Needs It & Patient Journey */}
              <FadeIn delay={0.5}>
                <div className="space-y-12">
                  <div>
                    <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Who Should Seek Consultation?</h2>
                    <p className="text-lg text-[#81754B] font-light leading-relaxed">
                      {data.whoShouldSeek}
                    </p>
                  </div>
                  <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                    <h2 className="font-heading font-normal text-3xl mb-6 text-[#66371B]">The Patient Journey & Recovery</h2>
                    <p className="text-lg text-[#81754B] font-light leading-relaxed">
                      {data.patientJourney}
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* 9. FAQs */}
              {data.faqs.length > 0 && (
                <FadeIn delay={0.6}>
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-8 text-[#66371B]">Frequently Asked Questions</h2>
                  <Accordion className="w-full bg-[#FDFBF7] rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm overflow-hidden px-8 md:px-12">
                    {data.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`} className="border-[#DBCFA8]/30">
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
            </div>

            {/* Right Column: Global Lead Gen Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* 10 & 11. Related Links */}
                {(data.relatedConditions.length > 0 || data.relatedTherapies.length > 0) && (
                  <FadeIn>
                    <div className="bg-[#FDFBF7] p-8 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                      <h3 className="font-heading font-normal text-2xl mb-6 text-[#66371B] border-b border-[#DBCFA8]/30 pb-4">Explore Further</h3>
                      
                      {data.relatedConditions.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-[10px] font-bold text-[#B4833D] uppercase tracking-widest mb-4">Related Conditions</h4>
                          <ul className="space-y-4">
                            {data.relatedConditions.map(c => (
                              <li key={c.slug}>
                                <Link href={`/conditions/${c.categorySlug}/${c.slug}`} className="text-[#66371B] font-medium text-sm hover:text-[#B4833D] transition-colors flex items-center gap-2">
                                  <ArrowRight className="h-4 w-4 text-[#517B32]" /> {c.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {data.relatedTherapies.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-bold text-[#B4833D] uppercase tracking-widest mb-4">Related Therapies</h4>
                          <ul className="space-y-4">
                            {data.relatedTherapies.map(t => (
                              <li key={t.slug}>
                                <Link href={`/treatments/therapies/${t.slug}`} className="text-[#66371B] font-medium text-sm hover:text-[#B4833D] transition-colors flex items-center gap-2">
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

                {/* 12. Consultation CTA */}
                <FadeIn delay={0.1}>
                  <div className="bg-white rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm overflow-hidden">
                    <div className="bg-[#66371B] p-8 text-white text-center">
                      <HeartHandshake className="h-10 w-10 mx-auto mb-4 text-[#E3D8C1]" />
                      <h3 className="font-heading font-normal text-3xl mb-2">Book a Consultation</h3>
                      <p className="text-[#E3D8C1] font-light text-sm">Get a clinical assessment by our expert physicians.</p>
                    </div>
                    <div className="p-8 space-y-4">
                      <Button render={<Link href="/patient-care/consultation" />} className="w-full bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-6 h-12 text-xs tracking-widest uppercase font-bold transition-colors">
                        Start Assessment
                      </Button>
                      <Button render={<Link href="https://wa.me/919846992789" target="_blank" />} variant="outline" className="w-full border-[#DBCFA8] text-[#66371B] hover:bg-[#FDFBF7] rounded-full px-6 h-12 text-xs tracking-widest uppercase font-bold transition-colors">
                        WhatsApp Us
                      </Button>
                      <p className="text-center text-xs text-[#81754B] font-light mt-4">
                        Or call us directly at <br/><strong className="text-[#66371B] font-medium">+91 4822229434</strong>
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
