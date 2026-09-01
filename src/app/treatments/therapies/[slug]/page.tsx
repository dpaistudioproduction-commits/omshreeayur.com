import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowRight, ClipboardList, Info, HeartHandshake } from "lucide-react";
import { therapies } from "@/data/therapies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = therapies.find(t => t.slug === slug);
  
  if (!data) {
    return { title: "Therapy Not Found" };
  }

  return {
    title: data.seoTitle,
    description: data.seoDescription,
  };
}

export default async function TherapyPage({ params }: Props) {
  const { slug } = await params;
  const data = therapies.find(t => t.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-[#F7F1E1]">
      
      {/* Dynamic Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#402816] text-[#F7F1E1]">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.heroImage}
            alt={`Ayurvedic therapy procedure - ${data.name}`}
            fill
            sizes="100vw"
            className="object-cover opacity-25 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <nav className="flex text-sm text-[#E3D8C1] mb-6 font-medium tracking-wide" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-2">
                  <li><Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
                  <li><span>/</span></li>
                  <li><Link href="/treatments/therapies" className="hover:text-white transition-colors">Therapies</Link></li>
                  <li><span>/</span></li>
                  <li className="text-[#B4833D] font-bold">{data.name}</li>
                </ol>
              </nav>
              <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
                Panchakarma & External Therapy
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#F7F1E1]">
                {data.name}
              </h1>
              <p className="text-lg sm:text-xl text-[#E3D8C1] leading-relaxed mb-10 border-l-2 border-[#B4833D] pl-6 py-2 font-light">
                {data.whatItIs}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Clinical Content */}
            <div className="lg:col-span-2 space-y-16">
              
              <FadeIn>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 text-[#66371B] flex items-center gap-3">
                  <Info className="text-[#517B32] h-7 w-7" /> Traditional Context
                </h2>
                <div className="bg-white p-8 rounded-2xl border border-[#DBCFA8] shadow-xs">
                  <p className="text-base sm:text-lg text-[#81754B] leading-relaxed font-light">
                    {data.ayurvedicContext}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 text-[#66371B] flex items-center gap-3">
                  <ClipboardList className="text-[#517B32] h-7 w-7" /> What Happens During the Procedure?
                </h2>
                <div className="bg-white p-8 rounded-2xl border border-[#DBCFA8] shadow-xs">
                  <p className="text-base sm:text-lg text-[#81754B] leading-relaxed font-light">
                    {data.procedure}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DBCFA8]">
                    <h3 className="font-heading text-xl font-bold mb-3 text-[#66371B]">Why It's Included</h3>
                    <p className="text-[#81754B] leading-relaxed text-sm font-light">
                      {data.whyIncluded}
                    </p>
                  </div>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DBCFA8]">
                    <h3 className="font-heading text-xl font-bold mb-3 text-[#66371B]">Who May Need It</h3>
                    <p className="text-[#81754B] leading-relaxed text-sm font-light">
                      {data.whoMayNeed}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-[#E3D8C1]/40 border-l-4 border-[#B4833D] p-6 rounded-r-2xl">
                  <div className="flex gap-4">
                    <AlertCircle className="h-6 w-6 text-[#517B32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-[#66371B] mb-2 text-lg">Important Suitability Note</h4>
                      <p className="text-[#81754B] text-sm leading-relaxed font-light">
                        {data.suitabilityNote} This therapy will only be administered if deemed appropriate for your specific constitution during your medical assessment.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Related Links */}
                {(data.relatedTreatments.length > 0 || data.relatedConditions.length > 0) && (
                  <FadeIn>
                    <Card className="border-[#DBCFA8] shadow-xs bg-white rounded-2xl">
                      <CardContent className="p-6">
                        <h3 className="font-heading text-xl font-bold mb-4 text-[#66371B] border-b border-[#DBCFA8] pb-4">Related Care Areas</h3>
                        
                        {data.relatedTreatments.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-xs font-bold text-[#B4833D] uppercase tracking-wider mb-3">Treatments</h4>
                            <ul className="space-y-3">
                              {data.relatedTreatments.map(t => (
                                <li key={t.slug}>
                                  <Link href={`/treatments/${t.slug}`} className="text-[#517B32] font-medium hover:text-[#6F9940] flex items-center gap-2 text-sm">
                                    <ArrowRight className="h-4 w-4" /> {t.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {data.relatedConditions.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold text-[#B4833D] uppercase tracking-wider mb-3">Conditions</h4>
                            <ul className="space-y-3">
                              {data.relatedConditions.map(c => (
                                <li key={c.slug}>
                                  <Link href={`/conditions/${c.categorySlug}/${c.slug}`} className="text-[#517B32] font-medium hover:text-[#6F9940] flex items-center gap-2 text-sm">
                                    <ArrowRight className="h-4 w-4" /> {c.name}
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

                {/* Global Lead Gen Sidebar */}
                <FadeIn delay={0.1}>
                  <Card className="border-[#DBCFA8] shadow-md bg-white overflow-hidden rounded-2xl">
                    <div className="bg-[#402816] p-6 text-[#F7F1E1] text-center space-y-2">
                      <HeartHandshake className="h-8 w-8 mx-auto text-[#B4833D]" />
                      <h3 className="font-heading text-2xl font-bold">Book a Consultation</h3>
                      <p className="text-xs text-[#E3D8C1]/90 font-light">Get a clinical assessment by our expert physicians.</p>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <Button render={<Link href="/patient-care/consultation" />} className="w-full h-12 bg-[#517B32] hover:bg-[#6F9940] text-white text-sm font-bold shadow-xs rounded-full">
                        Start Assessment
                      </Button>
                      <Button render={<Link href="https://wa.me/919846992789" target="_blank" />} variant="outline" className="w-full h-12 border-[#517B32] text-[#517B32] hover:bg-[#E3D8C1] text-sm rounded-full">
                        WhatsApp Us
                      </Button>
                      <p className="text-center text-xs text-[#81754B] mt-4 font-light">
                        Or call directly: <strong className="text-[#66371B] font-bold">+91 4822229434</strong>
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
