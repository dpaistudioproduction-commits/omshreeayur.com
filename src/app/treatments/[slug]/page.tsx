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
    <div className="flex flex-col w-full bg-slate-50">
      <SchemaMarkup schema={generateTreatmentSchema(data as any)} />
      
      {/* 1. Dynamic Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.hero.backgroundImageUrl}
            alt={`Atmospheric background for ${data.hero.title}`}
            fill
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <nav className="flex text-sm text-slate-300 mb-6 font-medium tracking-wide" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-2">
                  <li><Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
                  <li><span>/</span></li>
                  <li className="text-emerald-400">{data.name}</li>
                </ol>
              </nav>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed mb-10 border-l-4 border-emerald-500 pl-6 py-2">
                {data.hero.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4">
              <Button render={<Link href="/patient-care/consultation" />} size="lg" className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-700 text-lg h-14 px-8 rounded-full shadow-lg font-bold">
                Book a Consultation
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Clinical Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* 2. Quick Answer */}
              <FadeIn>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-slate-900">
                    Clinical Overview
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    {data.quickAnswer}
                  </p>
                  {data.needsVerification && (
                     <p className="text-xs text-rose-600 font-bold mt-4 bg-rose-50 p-2 rounded inline-block uppercase">
                       [Verify Before Publication] Clinical claim under review.
                     </p>
                  )}
                </div>
              </FadeIn>

              {/* 3 & 4. Meaning & Ayurvedic Perspective */}
              <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={0.1}>
                  <Card className="h-full border-slate-200 bg-white shadow-sm hover:border-emerald-200 transition-colors">
                    <CardContent className="p-8">
                      <h3 className="font-heading text-xl font-bold mb-4 text-slate-900">What It Means for You</h3>
                      <p className="text-slate-600 leading-relaxed">
                        {data.whatItMeans}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <Card className="h-full border-slate-200 bg-white shadow-sm hover:border-emerald-200 transition-colors">
                    <CardContent className="p-8">
                      <h3 className="font-heading text-xl font-bold mb-4 text-slate-900">Ayurvedic Perspective</h3>
                      <p className="text-slate-600 leading-relaxed">
                        {data.ayurvedicContext}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {/* 5. How Treatment is Planned */}
              <FadeIn delay={0.3}>
                <h2 className="font-heading text-3xl font-bold mb-6 text-slate-900">How Treatment is Planned</h2>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {data.howTreatmentIsPlanned}
                  </p>
                </div>
              </FadeIn>

              {/* 6. Therapies That May Be Used */}
              <FadeIn delay={0.4}>
                <h2 className="font-heading text-3xl font-bold mb-6 text-slate-900">Therapies That May Be Used</h2>
                <p className="text-slate-600 mb-6 text-lg">
                  Depending on your individual assessment, your physician may prescribe specific therapies as part of your comprehensive treatment plan.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {data.therapies.map((therapy, i) => (
                    <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600" /> {therapy.name}
                        </h4>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          {therapy.description}
                        </p>
                        <Link href={`/treatments/therapies/${therapy.slug}`} className="text-emerald-700 font-semibold text-sm hover:underline flex items-center gap-1">
                          Read About Therapy <ArrowRight className="h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </FadeIn>

              {/* 7 & 8. Who Needs It & Patient Journey */}
              <FadeIn delay={0.5}>
                <div className="space-y-12">
                  <div>
                    <h2 className="font-heading text-2xl font-bold mb-4 text-slate-900">Who Should Seek Consultation?</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {data.whoShouldSeek}
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                    <h2 className="font-heading text-2xl font-bold mb-4 text-emerald-900">The Patient Journey & Recovery</h2>
                    <p className="text-lg text-emerald-800 leading-relaxed">
                      {data.patientJourney}
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* 9. FAQs */}
              {data.faqs.length > 0 && (
                <FadeIn delay={0.6}>
                  <h2 className="font-heading text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
                  <Accordion className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden">
                    {data.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`} className="border-slate-200 px-6">
                        <AccordionTrigger className="text-left text-lg font-bold text-slate-800 hover:text-emerald-700 py-6">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
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
                    <Card className="border-slate-200 shadow-sm bg-white">
                      <CardContent className="p-6">
                        <h3 className="font-heading text-xl font-bold mb-4 text-slate-900 border-b border-slate-100 pb-4">Explore Further</h3>
                        
                        {data.relatedConditions.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Related Conditions</h4>
                            <ul className="space-y-3">
                              {data.relatedConditions.map(c => (
                                <li key={c.slug}>
                                  <Link href={`/conditions/${c.categorySlug}/${c.slug}`} className="text-emerald-700 font-medium hover:underline flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4" /> {c.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {data.relatedTherapies.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Related Therapies</h4>
                            <ul className="space-y-3">
                              {data.relatedTherapies.map(t => (
                                <li key={t.slug}>
                                  <Link href={`/treatments/therapies/${t.slug}`} className="text-emerald-700 font-medium hover:underline flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4" /> {t.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </FadeIn>
                )}

                {/* 12. Consultation CTA */}
                <FadeIn delay={0.1}>
                  <Card className="border-emerald-200 shadow-md bg-emerald-50 overflow-hidden">
                    <div className="bg-emerald-700 p-6 text-white text-center">
                      <HeartHandshake className="h-10 w-10 mx-auto mb-3 opacity-90" />
                      <h3 className="font-heading text-2xl font-bold mb-2">Book a Consultation</h3>
                      <p className="opacity-90 text-sm font-medium">Get a clinical assessment by our expert physicians.</p>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <Button render={<Link href="/patient-care/consultation" />} className="w-full h-12 bg-emerald-600 text-white hover:bg-emerald-800 text-base shadow-sm font-bold">
                        Start Assessment
                      </Button>
                      <Button render={<Link href="https://wa.me/919846992789" target="_blank" />} variant="outline" className="w-full h-12 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white text-base shadow-sm">
                        WhatsApp Us
                      </Button>
                      <p className="text-center text-xs text-emerald-700 mt-4">
                        Or call us directly at <br/><strong>+91 4822229434</strong>
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
