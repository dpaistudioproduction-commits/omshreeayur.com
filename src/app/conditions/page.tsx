import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Brain, Leaf, Wind, Sparkles, Move, ArrowRight, ActivitySquare, ShieldCheck, Microscope, MessageCircle } from "lucide-react";
import { cardiovascularCategory } from "@/data/conditions";

export const metadata: Metadata = {
  title: "Health Conditions & Ayurvedic Treatments | Omshree Sidha Hospital",
  description: "Explore the health conditions treated at Omshree Sidha Hospital using authentic Ayurvedic therapies and personalized care plans.",
};

const CATEGORIES = [
  {
    name: "Cardiovascular",
    slug: "cardiovascular",
    icon: Heart,
    description: "Ayurvedic management for heart health, circulation, and vascular function.",
    hasContent: true,
  },
  {
    name: "Liver",
    slug: "liver",
    icon: Activity,
    description: "Traditional approaches to fatty liver, hepatitis, and liver function.",
    hasContent: true,
  },
  {
    name: "Gastrointestinal",
    slug: "gastrointestinal",
    icon: Leaf,
    description: "Management of IBS, Crohn's Disease, Ulcerative Colitis, and digestive disorders.",
    hasContent: true,
  },
  {
    name: "Neurological",
    slug: "neurological",
    icon: Brain,
    description: "Ayurvedic care for MND, Stroke, Paralysis, Migraine, and Vertigo.",
    hasContent: true,
  },
  {
    name: "Musculoskeletal",
    slug: "musculoskeletal",
    icon: Move,
    description: "Treatments for Arthritis, Spondylosis, Sciatica, and joint mobility.",
    hasContent: true,
  },
  {
    name: "Respiratory",
    slug: "respiratory",
    icon: Wind,
    description: "Management of Asthma, COPD, Sinusitis, and breathing difficulties.",
    hasContent: true,
  },
  {
    name: "Skin",
    slug: "skin",
    icon: Sparkles,
    description: "Ayurvedic therapies for Psoriasis, Eczema, Vitiligo, and skin health.",
    hasContent: true,
  },
];

export default function ConditionsHubPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">
      
      {/* HERO SECTION */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Health Conditions</li>
            </ol>
          </nav>
          
          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            Clinical Care Areas
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Omshree Sidha Hospital offers authentic Ayurvedic care for a wide range of chronic and lifestyle conditions. We focus on identifying the root cause and providing personalized, structured treatment programs.
          </p>
        </div>
      </section>

      {/* APPROACH SECTION (Added for Landing Page feel) */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="text-center mb-16">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-4 block">
              Our Methodology
            </span>
            <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#66371B]">
              The Ayurvedic Approach
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FDFBF7] p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 text-center flex flex-col items-center">
              <div className="h-16 w-16 bg-[#DBCFA8]/30 text-[#517B32] rounded-full flex items-center justify-center mb-6">
                <Microscope className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-2xl text-[#66371B] mb-4">Root Cause Analysis</h3>
              <p className="text-[#81754B] font-light leading-relaxed">
                We diagnose conditions by analyzing Dosha (energy) and Agni (metabolic) imbalances, rather than just treating symptoms.
              </p>
            </div>
            
            <div className="bg-[#FDFBF7] p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 text-center flex flex-col items-center">
              <div className="h-16 w-16 bg-[#DBCFA8]/30 text-[#517B32] rounded-full flex items-center justify-center mb-6">
                <ActivitySquare className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-2xl text-[#66371B] mb-4">Integrative Care</h3>
              <p className="text-[#81754B] font-light leading-relaxed">
                Treatments combine internal medicines, external therapies, dietary corrections, and lifestyle management for complete recovery.
              </p>
            </div>
            
            <div className="bg-[#FDFBF7] p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 text-center flex flex-col items-center">
              <div className="h-16 w-16 bg-[#DBCFA8]/30 text-[#517B32] rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-2xl text-[#66371B] mb-4">Clinical Heritage</h3>
              <p className="text-[#81754B] font-light leading-relaxed">
                Our treatment protocols have been refined since 1880, bringing together authentic knowledge and clinical safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-24 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="text-center mb-16">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-4 block">
              Health Conditions
            </span>
            <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#66371B]">
              Conditions We Manage
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <Card key={cat.slug} className={`h-full border-[#DBCFA8]/50 rounded-[2.5rem] bg-white shadow-sm ${!cat.hasContent ? 'opacity-60 grayscale' : 'hover:border-[#517B32] hover:shadow-lg transition-all'}`}>
                <CardContent className="p-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="h-14 w-14 rounded-full bg-[#FDFBF7] text-[#517B32] flex items-center justify-center mb-6 border border-[#DBCFA8]/50">
                      <cat.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading font-normal text-3xl text-[#66371B] mb-4">{cat.name}</h3>
                    <p className="text-[#81754B] mb-8 text-lg font-light leading-relaxed">{cat.description}</p>
                  </div>
                  
                  <div>
                    {cat.hasContent ? (
                      <Button render={<Link href={`/conditions/${cat.slug}`} />} variant="link" className="text-[#517B32] px-0 self-start mt-auto flex items-center group font-bold tracking-widest text-xs uppercase hover:no-underline hover:text-[#B4833D] transition-colors">
                        Explore {cat.name} Conditions <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <span className="text-xs font-bold text-[#81754B] uppercase tracking-wider block py-2">
                        Content Verification Pending
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="bg-[#402816] rounded-[3.5rem] p-12 md:p-20 text-center text-[#F7F1E1] max-w-5xl mx-auto">
            <h2 className="font-heading font-normal text-4xl md:text-5xl mb-6">
              Discuss Your Case
            </h2>
            <p className="text-lg font-light text-[#E3D8C1] mb-12 max-w-2xl mx-auto leading-relaxed">
              Every body is different. Speak with our clinical team to find out if Ayurvedic treatment is right for your condition.
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

      {/* DISCLAIMER */}
      <section className="py-12 bg-[#FDFBF7] text-[#81754B] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] text-center">
          <p className="text-xs sm:text-sm font-light leading-relaxed max-w-4xl mx-auto">
            <strong className="text-[#66371B]">Important Medical Notice:</strong> The information provided is for educational purposes regarding Ayurvedic approaches. Treatment is individualized after consultation and assessment. Suitability depends on the individual's condition. Patients should discuss changes to prescribed medication with their treating physician.
          </p>
        </div>
      </section>
      
    </div>
  );
}
