import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
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
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* SECTION 1: HERO */}
      <section className="bg-emerald-900 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/conditions" className="hover:text-white transition-colors">Conditions</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-white font-medium">{category.name}</span>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* SECTION 2: CONDITIONS IN CATEGORY */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-10 text-center">
            Conditions We Manage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.conditions.map((cond) => (
              <Card key={cond.slug} className="border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col h-full bg-white">
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{cond.name}</h3>
                  <p className="text-slate-600 mb-6 flex-1">{cond.heroDescription}</p>
                  <Button render={<Link href={`/conditions/${category.slug}/${cond.slug}`} />} variant="link" className="text-emerald-700 px-0 self-start mt-auto flex items-center group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: AYURVEDIC PERSPECTIVE */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
            The Ayurvedic Perspective on {category.name}
          </h2>
          <div className="prose prose-emerald max-w-none text-slate-700 text-lg leading-relaxed">
            <p>{category.ayurvedicPerspective}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PATIENT JOURNEY (Reused) */}
      <section className="py-20 bg-slate-100">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-12">
            The Patient Journey at Omshree Sidha Hospital
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm font-bold text-emerald-800">
            <div className="bg-white p-4 rounded-lg shadow-sm">1. Enquire</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">2. Consultation</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">3. Assessment</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">4. Personalized Plan</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">5. Treatment</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">6. Follow-up</div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      {category.faqs && category.faqs.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion className="w-full">
              {category.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bold text-slate-800 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* SECTION 6: CTA */}
      <section className="py-24 bg-emerald-900 text-white text-center">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Speak With Our Ayurvedic Care Team
          </h2>
          <p className="text-lg text-emerald-100 mb-10">
            Treatment recommendations are determined strictly after an individual assessment. Reach out to discuss your medical history.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button render={<Link href="/contact" />} size="lg" className="w-full sm:w-auto bg-white text-emerald-900 hover:bg-slate-100 rounded-full px-10 h-14 font-bold shadow-xl">
              Book a Consultation
            </Button>
            <Button render={<Link href="/international-patients" />} variant="outline" size="lg" className="w-full sm:w-auto border-emerald-500 text-emerald-50 hover:bg-emerald-800 hover:text-white rounded-full px-8 h-14 font-medium">
              International Patient Enquiry
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
