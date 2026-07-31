import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Heart, Leaf, Star, Sparkles, Microscope, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock database of products
const productsDb = {
  "kafastha": {
    name: "KAFASTHA",
    tagline: "Premium Cardiac Rejuvenator",
    description: "A specialized classical formulation tailored to balance Kapha and Vata doshas, explicitly supporting myocardial strength and reducing fluid retention in the lungs.",
    benefits: [
      "Strengthens the heart muscles (Hridya)",
      "Reduces chronic respiratory congestion",
      "Improves ejection fraction over consistent use",
      "Clears blocked channels in the cardiovascular system"
    ],
    ingredients: "Arjuna (Terminalia arjuna), Pushkarmool (Inula racemosa), Dashamoola, and proprietary Ayurvedic extracts.",
    dosage: "10-15 ml mixed with an equal quantity of warm water, twice daily after meals, or as directed by the physician.",
    indications: "Heart failure, Low EF, Cardiomyopathy, Asthma, COPD.",
    doctorAdvice: "For patients with severely low EF, KAFASTHA is often combined with strict dietary restrictions on salt and fluid intake to maximize its diuretic and strengthening properties.",
    precautions: "Not recommended for pregnant women without prior consultation. Monitor blood pressure regularly during the first two weeks of use.",
    faqs: [
      { q: "Is KAFASTHA safe with my regular heart medications?", a: "Generally yes, but a gap of 45 minutes should be maintained between allopathic drugs and Ayurvedic formulations. Please consult our doctors." },
      { q: "Are there any side effects?", a: "KAFASTHA is completely natural and safe when taken at the prescribed dosage." },
      { q: "How long does it take to see results?", a: "Clinical improvements are usually observed within 4 to 6 weeks of continuous usage along with prescribed dietary changes." },
      { q: "Do you ship internationally?", a: "Yes, we ship globally. However, international shipments require a valid prescription from our doctors via online consultation." }
    ]
  },
  "cufpro": {
    name: "CUFPRO",
    tagline: "Advanced Herbal Expectorant",
    description: "A potent, non-drowsy herbal syrup for chronic cough, bronchitis, and respiratory distress, crafted from time-tested Siddha and Ayurvedic ingredients.",
    benefits: [
      "Soothes inflamed airways",
      "Acts as a natural bronchodilator",
      "Relieves dry and wet cough without causing drowsiness",
      "Boosts local immunity in the respiratory tract"
    ],
    ingredients: "Tulsi (Holy Basil), Vasaka (Adhatoda vasica), Kantakari, Pippali (Long Pepper), and pure honey.",
    dosage: "1-2 teaspoons thrice daily for adults. Half a teaspoon for children over 5 years. Always consult a physician for precise dosing.",
    indications: "Chronic cough, Allergic Bronchitis, Asthma exacerbation, Smoker's cough.",
    doctorAdvice: "Avoid cold water, curd, and heavy sweets while on CUFPRO. Drink warm water throughout the day to aid expectoration.",
    precautions: "Diabetics should consult before use as the base contains natural sugars/honey.",
    faqs: [
      { q: "Can children take CUFPRO?", a: "Yes, it is safe for children above 5 years when given at half the adult dose." },
      { q: "Does it cause sleepiness?", a: "No, CUFPRO is a non-sedative, non-drowsy formula." },
      { q: "How long does it take to see results?", a: "Relief from acute symptoms is often felt within 24-48 hours of starting the recommended dosage." },
      { q: "Do you ship internationally?", a: "Yes, we ship globally. However, international shipments require a valid prescription from our doctors via online consultation." }
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsDb[slug as keyof typeof productsDb];
  
  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Omshree Sidha Hospital Products`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productsDb[slug as keyof typeof productsDb];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-[#FCFBF8] font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Soft Organic Background Blob */}
        <div className="absolute top-0 right-0 w-[150vw] md:w-[600px] h-[150vw] md:h-[700px] bg-[#EEF4ED] rounded-bl-full -z-10 translate-x-1/4" />
        
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <FadeIn className="max-w-xl">
              <span className="inline-block tracking-widest text-[11px] font-bold uppercase text-muted-foreground mb-6">
                Premium Ayurvedic Formula
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                {product.name}<sup className="text-2xl text-primary font-normal">TM</sup>
              </h1>
              <p className="text-xl font-medium text-foreground mb-4">
                {product.tagline}
              </p>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-lg">
                {product.description}
              </p>
              
              <Button size="lg" className="bg-[#8CA07A] text-white hover:bg-[#798C68] rounded-none px-12 h-14 text-sm font-bold uppercase tracking-widest transition-all">
                Learn More
              </Button>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative h-[500px] lg:h-[650px] w-full flex justify-center items-center">
              {/* Abstract Product Representation */}
              <div className="relative w-[80vw] max-w-[300px] md:max-w-[400px] aspect-[3/4] rounded-t-full bg-white shadow-xl flex flex-col items-center justify-center p-8 text-center border-4 border-[#EEF4ED]">
                <Leaf className="h-16 w-16 text-[#8CA07A] opacity-20 absolute top-10" />
                <h2 className="font-heading text-4xl font-bold text-[#4A5D4E] mt-auto">
                  {product.name}
                </h2>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground mt-4 mb-auto">
                  By Omshree
                </p>
                
                {/* Secondary bottle/box visual element */}
                <div className="absolute -bottom-4 sm:-bottom-10 -left-4 sm:-left-10 w-24 sm:w-40 h-24 sm:h-40 bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center p-4 border border-[#EEF4ED] rotate-[-5deg]">
                  <h3 className="font-heading font-bold text-[#4A5D4E] text-xl">{product.name}</h3>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground mt-2">Clinical Grade</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Trust Metrics */}
      <section className="py-12 border-y border-[#EEF4ED] bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-24 text-center md:text-left">
            <div>
              <p className="text-xl font-bold text-foreground">Trusted by over 50,000+ Patients</p>
              <p className="text-sm font-medium text-muted-foreground mt-1">worldwide since 2005</p>
            </div>
            
            <div className="flex gap-12">
              <div>
                <div className="flex text-[#D4AF37] mb-1">
                  <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                </div>
                <p className="font-heading font-bold text-2xl text-foreground">95<span className="text-[#8CA07A]">%</span>+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Clinical Success</p>
              </div>
              
              <div>
                <p className="font-heading font-bold text-2xl text-foreground">4.8</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Patient Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Split Section 1 (Image Left, Text Right) */}
      <section className="py-24 md:py-32 bg-[#FCFBF8]">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn className="order-2 lg:order-1 relative flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-square">
                {/* Floating elements mimicking the serum/cream bottles in design */}
                <div className="absolute top-0 right-0 w-3/4 h-[110%] bg-[#EEF4ED] rounded-t-full -z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[50vw] max-w-[200px] h-[70vw] max-h-[350px] bg-white shadow-2xl rounded-t-full border border-gray-100 flex flex-col items-center justify-center p-6 text-center">
                     <span className="text-[10px] tracking-widest font-bold uppercase text-muted-foreground mb-4">Herbal Extract</span>
                     <h3 className="font-heading font-bold text-[#4A5D4E] text-2xl">{product.name}</h3>
                  </div>
                </div>
                <div className="absolute bottom-10 -left-4 w-[40vw] max-w-[150px] h-[60vw] max-h-[200px] bg-white shadow-xl rounded-t-full flex items-center justify-center">
                  <h3 className="font-heading font-bold text-[#4A5D4E] text-lg rotate-[-90deg] whitespace-nowrap">{product.name}</h3>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="order-1 lg:order-2 max-w-lg">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#4A5D4E] mb-6">
                Clinical Details
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <span className="font-bold text-foreground block mb-2">Ingredients:</span>
                {product.ingredients}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                <span className="font-bold text-foreground block mb-2">Indications:</span>
                {product.indications}
              </p>
              
              {/* 3 Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <span className="block font-heading font-bold text-2xl text-[#4A5D4E] mb-2">100%</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Organic</span>
                </div>
                <div className="text-center">
                  <span className="block font-heading font-bold text-2xl text-[#4A5D4E] mb-2 flex justify-center"><CheckCircle2 className="h-7 w-7" /></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Clinical<br/>Approved</span>
                </div>
                <div className="text-center">
                  <span className="block font-heading font-bold text-2xl text-[#4A5D4E] mb-2 flex justify-center"><Leaf className="h-7 w-7" /></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Herbal<br/>Formula</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 4. Split Section 2 (Text Left, Image Right) */}
      <section className="py-24 md:py-32 bg-[#F6F5F2]">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn className="max-w-lg">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#4A5D4E] mb-6">
                Key Benefits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Our proprietary formulation is backed by centuries of classical wisdom and validated through modern clinical observation.
              </p>
              
              <ul className="space-y-6 mb-10">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8CA07A] mt-2.5 shrink-0" />
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="bg-[#8CA07A] text-white hover:bg-[#798C68] rounded-none px-12 h-14 text-sm font-bold uppercase tracking-widest transition-all">
                Learn More
              </Button>
            </FadeIn>

            <FadeIn delay={0.2} className="relative flex justify-center">
               <div className="relative w-full max-w-[500px] aspect-[4/3]">
                 {/* Decorative arrangement */}
                 <div className="absolute inset-0 bg-[#EEF4ED] rounded-xl -rotate-2 -z-10" />
                 <div className="absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center overflow-hidden">
                    <div className="w-[30vw] max-w-[120px] h-[60vw] max-h-[250px] bg-[#FCFBF8] border border-gray-200 shadow-inner absolute left-4 sm:left-12 bottom-0" />
                    <div className="w-[45vw] max-w-[180px] h-[70vw] max-h-[300px] bg-[#FCFBF8] border border-gray-200 shadow-lg absolute right-4 sm:right-12 bottom-4 sm:bottom-12 rounded-t-3xl flex flex-col items-center justify-center p-4">
                      <h3 className="font-heading font-bold text-[#4A5D4E] text-2xl">{product.name}</h3>
                      <span className="w-8 h-1 bg-[#8CA07A] mt-4" />
                    </div>
                    {/* Plant prop representation */}
                    <div className="absolute top-8 left-20 w-16 h-16 bg-[#8CA07A] rounded-full opacity-20 blur-xl" />
                 </div>
               </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn className="relative flex justify-center">
              <div className="w-[80vw] max-w-[300px] h-[120vw] max-h-[500px] bg-[#FCFBF8] rounded-full shadow-2xl border border-gray-100 rotate-12 flex flex-col items-center justify-center p-8">
                <span className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground uppercase mb-6">Omshree Sidha</span>
                <h3 className="font-heading font-bold text-[#4A5D4E] text-3xl tracking-widest mb-4">{product.name}</h3>
                <span className="text-[8px] tracking-[0.3em] font-bold text-muted-foreground uppercase">Medical Grade</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="max-w-lg">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#4A5D4E] mb-6">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Omshree Sidha Hospital adheres to the strictest manufacturing standards to ensure clinical efficacy and patient safety.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Quality Ingredients", desc: "All herbs are sourced sustainably and tested for heavy metals.", icon: Leaf },
                  { title: "GMP Certified", desc: "Manufactured in our state-of-the-art facility.", icon: ShieldCheck },
                  { title: "Clinical Efficacy", desc: "Formulations backed by decades of patient outcomes.", icon: Heart }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6 p-6 border border-gray-100 bg-[#FCFBF8] hover:bg-white transition-colors hover:shadow-md cursor-default">
                    <div className="w-12 h-12 rounded-full bg-[#EEF4ED] flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 text-[#8CA07A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24 md:py-32 bg-[#EEF4ED]/50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A5D4E]">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-4">
              {product.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 md:p-8 flex gap-4">
                  <div className="shrink-0 mt-1">
                    <Plus className="h-5 w-5 text-[#8CA07A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-[15px] mb-3">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Clinical Advice / Testimonials (Using same style as Testimonials) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EEF4ED] rounded-full -translate-y-1/2 translate-x-1/3 -z-10 opacity-50" />
        
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A5D4E]">
              Clinical Advice
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Important guidelines from our Chief Physicians regarding the safe usage of {product.name}.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <StaggerItem>
              <Card className="h-full border-gray-100 shadow-sm bg-white p-8">
                <div className="flex text-[#D4AF37] mb-6">
                  <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-sm text-muted-foreground leading-loose italic mb-8">
                  "{product.doctorAdvice}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#8CA07A] text-white flex items-center justify-center">
                    <Microscope className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Chief Physician</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Omshree Sidha</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full border-gray-100 shadow-sm bg-white p-8">
                 <div className="flex text-[#D4AF37] mb-6">
                  <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-sm text-muted-foreground leading-loose italic mb-8">
                  "{product.precautions}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#8CA07A] text-white flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Safety Guidelines</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Precautions</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
