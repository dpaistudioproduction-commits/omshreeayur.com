import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, HeartPulse, CheckCircle2, FileText, Globe } from "lucide-react";
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
    <div className="flex flex-col w-full bg-background">
      <SchemaMarkup schema={generateTreatmentSchema(data)} />
      {/* 1. Dynamic Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.hero.backgroundImageUrl}
            alt={data.hero.title}
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-block py-1 px-3 rounded-full bg-accent text-primary-foreground text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm">
                {data.category.toUpperCase()} CENTRE
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-10">
                {data.hero.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-lg h-14 px-8 rounded-full shadow-lg">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8 rounded-full bg-primary/20 backdrop-blur-sm">
                <FileText className="mr-2 h-5 w-5" /> Upload Reports
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
              
              <FadeIn>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <HeartPulse className="text-primary h-8 w-8" /> Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.overview}
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={0.1}>
                  <Card className="h-full border-border bg-muted/30 shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Common Symptoms</h3>
                      <ul className="space-y-3">
                        {data.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0" />
                            <span className="text-muted-foreground">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <Card className="h-full border-border bg-muted/30 shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Key Causes</h3>
                      <ul className="space-y-3">
                        {data.causes.map((cause, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0" />
                            <span className="text-muted-foreground">{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              <FadeIn delay={0.3}>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Our Treatment Approach</h2>
                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {data.treatmentApproach}
                  </p>
                  <h4 className="font-bold text-lg mb-4">Expected Clinical Benefits:</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {data.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Recovery Timeline</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.recoveryTimeline}
                </p>
              </FadeIn>

              {/* FAQs */}
              <FadeIn delay={0.5}>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
                <Accordion className="w-full">
                  {data.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-border">
                      <AccordionTrigger className="text-left text-lg font-medium hover:text-primary py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>
            </div>

            {/* Right Column: Global Lead Gen Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <FadeIn>
                  <Card className="border-border shadow-xl overflow-hidden">
                    <div className="bg-primary p-6 text-white text-center">
                      <h3 className="font-heading text-2xl font-bold mb-2">Speak to a Specialist</h3>
                      <p className="opacity-90 text-sm">Get a free preliminary assessment of your medical reports.</p>
                    </div>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-center gap-4 bg-muted p-4 rounded-lg">
                        <Phone className="h-8 w-8 text-primary shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Call Us Directly</p>
                          <p className="font-bold text-lg text-foreground">+91 4822229434</p>
                        </div>
                      </div>
                      
                      <Button className="w-full h-14 bg-[#25D366] text-white hover:bg-[#1ebd5a] rounded-full text-lg shadow-md font-bold">
                        WhatsApp Chat
                      </Button>
                      
                      <Button variant="outline" className="w-full h-14 border-primary text-primary hover:bg-primary hover:text-white rounded-full text-lg shadow-sm">
                        Book Appointment
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <Card className="border-accent bg-accent/5 shadow-sm">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <Globe className="h-10 w-10 text-accent" />
                      <h4 className="font-heading font-bold text-xl">International Patients</h4>
                      <p className="text-sm text-muted-foreground">
                        We offer dedicated online video consultations and comprehensive medical tourism packages.
                      </p>
                      <Link href="/international-patients" className="text-primary font-bold text-sm hover:underline">
                        Learn More
                      </Link>
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
