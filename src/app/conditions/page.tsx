import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Brain, Leaf, Wind, Sparkles, Move } from "lucide-react";
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
    hasContent: false,
  },
  {
    name: "Musculoskeletal",
    slug: "musculoskeletal",
    icon: Move,
    description: "Treatments for Arthritis, Spondylosis, Sciatica, and joint mobility.",
    hasContent: false,
  },
  {
    name: "Respiratory",
    slug: "respiratory",
    icon: Wind,
    description: "Management of Asthma, COPD, Sinusitis, and breathing difficulties.",
    hasContent: false,
  },
  {
    name: "Skin",
    slug: "skin",
    icon: Sparkles,
    description: "Ayurvedic therapies for Psoriasis, Eczema, Vitiligo, and skin health.",
    hasContent: false,
  },
];

export default function ConditionsHubPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#F7F1E1]">
      
      {/* HERO SECTION */}
      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
            Clinical Care Areas
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
            Health Conditions We Manage
          </h1>
          <p className="text-xl text-[#E3D8C1] font-light leading-relaxed max-w-3xl mx-auto">
            Omshree Sidha Hospital offers authentic Ayurvedic care for a wide range of chronic and lifestyle conditions. We focus on identifying the root cause (Dosha/Agni imbalance) and providing personalized, structured treatment programs.
          </p>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-24 bg-[#F7F1E1]">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <Card key={cat.slug} className={`h-full border-[#DBCFA8] rounded-2xl bg-white shadow-xs ${!cat.hasContent ? 'opacity-60 grayscale' : 'hover:border-[#517B32] hover:shadow-md transition-all'}`}>
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="h-12 w-12 rounded-full bg-[#E3D8C1] text-[#517B32] flex items-center justify-center mb-6 border border-[#DBCFA8]">
                      <cat.icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-3">{cat.name}</h2>
                    <p className="text-[#81754B] mb-6 text-sm font-light leading-relaxed">{cat.description}</p>
                  </div>
                  
                  <div>
                    {cat.hasContent ? (
                      <Button render={<Link href={`/conditions/${cat.slug}`} />} variant="outline" className="text-[#517B32] border-[#517B32] hover:bg-[#E3D8C1] rounded-full w-full">
                        Explore {cat.name} Conditions &rarr;
                      </Button>
                    ) : (
                      <span className="text-xs font-bold text-[#81754B] uppercase tracking-wider block text-center py-2">
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

      {/* DISCLAIMER */}
      <section className="py-12 bg-[#402816] text-[#E3D8C1]/80 border-t border-[#66371B]">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-light leading-relaxed">
            <strong className="text-[#E3D8C1]">Important Medical Notice:</strong> The information provided is for educational purposes regarding Ayurvedic approaches. Treatment is individualized after consultation and assessment. Suitability depends on the individual's condition. Patients should discuss changes to prescribed medication with their treating physician.
          </p>
        </div>
      </section>
      
    </div>
  );
}
