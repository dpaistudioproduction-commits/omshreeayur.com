import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { conditionCategories } from "@/data/conditions";

const getCategoryBySlug = (slug: string) => {
  return conditionCategories.find(c => c.slug === slug) || null;
};

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: "Category Not Found" };
  
  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    notFound();
  }

  // Schema for Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omshreeayur.com/" },
      { "@type": "ListItem", "position": 2, "name": "Health Conditions", "item": "https://omshreeayur.com/conditions" },
      { "@type": "ListItem", "position": 3, "name": category.name, "item": `https://omshreeayur.com/conditions/${category.slug}` }
    ]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* SECTION 1: HERO */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full max-w-[1440px] mx-auto px-[4%] text-center">
          {/* Breadcrumbs */}
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/conditions" className="hover:text-[#66371B] transition-colors">Conditions</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">{category.name}</li>
            </ol>
          </nav>

          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* SECTION 2: CONDITIONS IN CATEGORY */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full max-w-[1440px] mx-auto px-[4%]">
          <div className="mb-16 text-center">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-4 block">
              Clinical Specialities
            </span>
            <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#66371B] mb-6">
              Conditions We Manage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.conditions.map((cond) => (
              <Card key={cond.slug} className="border-[#DBCFA8]/50 hover:border-[#517B32] hover:shadow-lg transition-all flex flex-col h-full bg-[#FDFBF7] rounded-[2.5rem]">
                <CardContent className="p-10 flex flex-col flex-1">
                  <h3 className="font-heading font-normal text-3xl text-[#66371B] mb-4">{cond.name}</h3>
                  <p className="text-[#81754B] mb-8 flex-1 text-lg font-light leading-relaxed">{cond.heroDescription}</p>
                  <Button render={<Link href={`/conditions/${category.slug}/${cond.slug}`} />} variant="link" className="text-[#517B32] px-0 self-start mt-auto flex items-center group font-bold tracking-widest text-xs uppercase hover:no-underline hover:text-[#B4833D] transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: AYURVEDIC PERSPECTIVE */}
      <section className="py-24 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full max-w-[1440px] mx-auto px-[4%]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-normal text-3xl md:text-4xl text-[#66371B] mb-8 text-center">
              The Ayurvedic Perspective on {category.name}
            </h2>
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-[#DBCFA8]/50 shadow-sm text-center">
              <p className="text-[#81754B] text-lg leading-relaxed font-light">{category.ayurvedicPerspective}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PATIENT JOURNEY (Reused) */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full max-w-[1440px] mx-auto px-[4%] text-center">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-4 block">
            Our Protocol
          </span>
          <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#66371B] mb-16">
            The Patient Journey
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="bg-[#FDFBF7] p-6 rounded-[2rem] border border-[#DBCFA8]/50 shadow-sm font-bold text-[#66371B] text-sm">1. Enquire</div>
            <div className="bg-[#FDFBF7] p-6 rounded-[2rem] border border-[#DBCFA8]/50 shadow-sm font-bold text-[#66371B] text-sm">2. Consultation</div>
            <div className="bg-[#FDFBF7] p-6 rounded-[2rem] border border-[#DBCFA8]/50 shadow-sm font-bold text-[#66371B] text-sm">3. Assessment</div>
            <div className="bg-[#FDFBF7] p-6 rounded-[2rem] border border-[#DBCFA8]/50 shadow-sm font-bold text-[#66371B] text-sm">4. Plan</div>
            <div className="bg-[#FDFBF7] p-6 rounded-[2rem] border border-[#DBCFA8]/50 shadow-sm font-bold text-[#66371B] text-sm">5. Treatment</div>
            <div className="bg-[#FDFBF7] p-6 rounded-[2rem] border border-[#DBCFA8]/50 shadow-sm font-bold text-[#66371B] text-sm">6. Follow-up</div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      {category.faqs && category.faqs.length > 0 && (
        <section className="py-24 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
          <div className="w-full max-w-[1440px] mx-auto px-[4%]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#66371B] mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full bg-white rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm overflow-hidden px-8 md:px-12">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-[#DBCFA8]/30">
                    <AccordionTrigger className="text-left font-medium text-[#66371B] hover:text-[#B4833D] text-lg py-8">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#81754B] font-light text-base leading-relaxed pb-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: CTA */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full max-w-[1440px] mx-auto px-[4%]">
          <div className="bg-[#402816] rounded-[3.5rem] p-12 md:p-20 text-center text-[#F7F1E1] max-w-5xl mx-auto">
            <h2 className="font-heading font-normal text-4xl md:text-5xl mb-6">
              Speak With Our Ayurvedic Care Team
            </h2>
            <p className="text-lg font-light text-[#E3D8C1] mb-12 max-w-2xl mx-auto leading-relaxed">
              Treatment recommendations are determined strictly after an individual assessment. Reach out to discuss your medical history.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button render={<Link href="/patient-care/consultation" />} size="lg" className="w-full sm:w-auto bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors">
                Book a Consultation
              </Button>
              <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="outline" size="lg" className="w-full sm:w-auto border-[#E3D8C1]/40 text-[#F7F1E1] hover:bg-white/10 rounded-full px-8 h-14 font-bold text-sm tracking-widest uppercase">
                <span className="flex items-center justify-center"><MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" /> WhatsApp Enquiry</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
