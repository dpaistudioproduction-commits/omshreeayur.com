import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, MessageCircle, AlertCircle, ArrowRight } from "lucide-react";
import { conditionCategories, lowEjectionFraction } from "@/data/conditions";
import { Condition, ConditionCategory } from "@/types/condition";

const getConditionData = (categorySlug: string, conditionSlug: string): { condition: Condition | null, category: ConditionCategory | null } => {
  const category = conditionCategories.find(c => c.slug === categorySlug) || null;
  if (!category) return { condition: null, category: null };

  if (categorySlug === "cardiovascular" && conditionSlug === "low-ejection-fraction") {
    return { condition: lowEjectionFraction, category };
  }

  const condSummary = category.conditions.find(c => c.slug === conditionSlug);
  if (!condSummary) return { condition: null, category: null };

  const dynamicCondition: Condition = {
    id: condSummary.id,
    slug: condSummary.slug,
    name: condSummary.name,
    categoryId: category.slug,
    metaTitle: `Ayurvedic Treatment for ${condSummary.name} in Kerala | Omshree`,
    metaDescription: `Discover Omshree Sidha Hospital's authentic Ayurvedic approach to managing ${condSummary.name} in Kerala, India.`,
    heroDescription: condSummary.heroDescription,
    quickAnswer: `${condSummary.name} is managed in Ayurveda by identifying the root Dosha and Agni imbalances. At Omshree Sidha Hospital, clinical care is tailored to the individual's constitution after a detailed physical assessment.`,
    understanding: `${condSummary.heroDescription} Chronic management requires a structured approach focusing on restoring digestive fire, clearing circulatory channels (Srotas), and balancing systemic vital energies.`,
    ayurvedicPerspective: category.ayurvedicPerspective,
    omshreeApproach: `At Omshree Sidha Hospital, treatment for ${condSummary.name} begins with an in-depth clinical consultation. Our physicians formulate an individualized plan consisting of classical herbal formulations, dietary (Pathya) guidelines, and external therapies tailored to your constitution.`,
    therapies: [
      {
        name: "Abhyanga",
        slug: "abhyanga",
        description: "Therapeutic full-body medicated oil application to balance Doshas and improve peripheral circulation."
      },
      {
        name: "Internal Herbal Formulations",
        slug: "internal-medications",
        description: "Personalized classical herbal decoctions prescribed after physician evaluation."
      }
    ],
    whoShouldSeek: `You may consider an Ayurvedic consultation for ${condSummary.name} if you are seeking a structured, holistic approach to long-term health management. Always discuss complementary care with your primary medical specialist.`,
    faqs: category.faqs || [],
    needsVerification: true
  };

  return { condition: dynamicCondition, category };
};

type Props = {
  params: Promise<{ category: string; condition: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, condition: conditionSlug } = await params;
  const { condition } = getConditionData(categorySlug, conditionSlug);
  if (!condition) return { title: "Condition Not Found" };
  
  return {
    title: condition.metaTitle,
    description: condition.metaDescription,
  };
}

export default async function ConditionPage({ params }: Props) {
  const { category: categorySlug, condition: conditionSlug } = await params;
  const { condition, category } = getConditionData(categorySlug, conditionSlug);
  
  if (!condition || !category) {
    notFound();
  }

  // Schema for AEO/SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://omshreeayur.com/conditions/${category.slug}/${condition.slug}#webpage`,
        "name": condition.metaTitle,
        "description": condition.metaDescription,
        "about": {
          "@type": "MedicalCondition",
          "name": condition.name
        },
        "publisher": {
          "@id": "https://omshreeayur.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omshreeayur.com/" },
          { "@type": "ListItem", "position": 2, "name": "Health Conditions", "item": "https://omshreeayur.com/conditions" },
          { "@type": "ListItem", "position": 3, "name": category.name, "item": `https://omshreeayur.com/conditions/${category.slug}` },
          { "@type": "ListItem", "position": 4, "name": condition.name, "item": `https://omshreeayur.com/conditions/${category.slug}/${condition.slug}` }
        ]
      },
      ...(condition.faqs && condition.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": condition.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />



      {/* SECTION 1: HERO */}
      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24 relative overflow-hidden">
        <div className="container px-[4%] max-w-5xl mx-auto relative z-20">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-[#E3D8C1] mb-8" aria-label="Breadcrumb">
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
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href={`/conditions/${category.slug}`} className="hover:text-white transition-colors">{category.name}</Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
              Understanding {condition.name}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
              {condition.name}
            </h1>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-10">
              {condition.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button render={<Link href="/patient-care/consultation" />} size="lg" className="w-full sm:w-auto bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-8 h-14 font-bold shadow-lg border border-[#6F9940]/40">
                Book a Consultation
              </Button>
              <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="outline" size="lg" className="w-full sm:w-auto border-[#E3D8C1]/40 text-[#F7F1E1] hover:bg-white/10 rounded-full px-6 h-14 font-medium backdrop-blur-xs">
                <span className="flex items-center justify-center"><MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" /> WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK ANSWER (AEO Block) */}
      <section className="bg-[#E3D8C1]/40 py-12 border-b border-[#DBCFA8]">
        <div className="container px-[4%] max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xs border border-[#DBCFA8]">
            <h2 className="text-xl font-bold text-[#66371B] mb-3 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-[#517B32]" />
              What is {condition.name}?
            </h2>
            <p className="text-[#66371B]/90 text-lg leading-relaxed font-light">
              {condition.quickAnswer}
            </p>
          </div>
        </div>
      </section>

      <div className="container px-[4%] max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* SECTION 3: UNDERSTANDING */}
            <section id="understanding">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">
                Understanding the Condition
              </h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>{condition.understanding}</p>
              </div>
            </section>

            {/* SECTION 4: AYURVEDIC PERSPECTIVE */}
            <section id="ayurveda" className="bg-[#E3D8C1]/30 p-8 sm:p-10 rounded-3xl border border-[#DBCFA8]">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">
                The Ayurvedic Perspective
              </h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>{condition.ayurvedicPerspective}</p>
              </div>
            </section>

            {/* SECTION 5: OMSHREE'S APPROACH */}
            <section id="approach">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">
                Omshree's Approach to Care
              </h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4 mb-8">
                <p>{condition.omshreeApproach}</p>
              </div>
            </section>

            {/* SECTION 6: TREATMENTS / THERAPIES */}
            {condition.therapies && condition.therapies.length > 0 && (
              <section id="therapies">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#66371B] mb-6">
                  Common Therapies Utilized
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {condition.therapies.map((therapy) => (
                    <Card key={therapy.slug} className="border-[#DBCFA8] rounded-2xl bg-white shadow-xs">
                      <CardContent className="p-6">
                        <h4 className="font-heading font-bold text-[#66371B] text-lg mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#517B32]" />
                          {therapy.name}
                        </h4>
                        <p className="text-[#81754B] text-sm leading-relaxed font-light">
                          {therapy.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-xs text-[#81754B] mt-4 italic font-light">
                  Note: Treatment recommendations are determined after individual assessment. Not all therapies are suitable for all patients.
                </p>
              </section>
            )}

            {/* SECTION 7: WHO SHOULD SEEK CONSULTATION */}
            <section id="consultation" className="bg-[#402816] text-[#F7F1E1] p-8 sm:p-12 rounded-3xl space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                Who Should Seek an Ayurvedic Consultation?
              </h2>
              <p className="text-[#E3D8C1]/90 text-lg leading-relaxed font-light">
                {condition.whoShouldSeek}
              </p>
              <Button render={<Link href="/patient-care/consultation" />} size="lg" className="bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-8 font-bold border border-[#6F9940]/40">
                Speak with our Care Team
              </Button>
            </section>

            {/* SECTION 9: FAQ */}
            {condition.faqs && condition.faqs.length > 0 && (
              <section id="faq">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8">
                  Frequently Asked Questions
                </h2>
                <Accordion className="w-full space-y-4">
                  {condition.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-white border border-[#DBCFA8] rounded-2xl px-6 py-2">
                      <AccordionTrigger className="text-left font-heading font-bold text-[#66371B] text-lg hover:text-[#517B32] transition-colors py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#81754B] text-base leading-relaxed font-light pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

          </div>

          {/* Sidebar / Sticky Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              {/* SECTION 8: PATIENT JOURNEY MINIFIED */}
              <Card className="border-[#DBCFA8] shadow-xs bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#66371B] mb-4">The Patient Journey</h3>
                  <ul className="space-y-3 text-sm text-[#81754B] font-light">
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Enquire & Consult</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Clinical Assessment</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Personalized Plan</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Therapy Administration</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Recovery & Follow-up</li>
                  </ul>
                </CardContent>
              </Card>

              {/* SECTION 10: RELATED CONDITIONS */}
              {category.conditions.length > 1 && (
                <Card className="border-[#DBCFA8] shadow-xs bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-xl text-[#66371B] mb-4">Related Conditions</h3>
                    <ul className="space-y-3">
                      {category.conditions
                        .filter(c => c.slug !== condition.slug)
                        .map(c => (
                        <li key={c.slug}>
                          <Link href={`/conditions/${category.slug}/${c.slug}`} className="text-[#517B32] hover:text-[#6F9940] text-sm font-medium flex items-center gap-2">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Sidebar CTA */}
              <Card className="border-none shadow-md bg-[#402816] text-[#F7F1E1] rounded-2xl">
                <CardContent className="p-8 text-center space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-[#F7F1E1]">International Patients</h3>
                  <p className="text-[#E3D8C1]/90 text-sm font-light leading-relaxed">
                    Travelling to Kerala for Ayurvedic care? Begin with an online consultation before planning your travel.
                  </p>
                  <Button render={<Link href="/international-patients" />} variant="outline" className="w-full border-[#E3D8C1]/40 text-[#F7F1E1] hover:bg-white/10 rounded-full">
                    International Enquiry
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
