import { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Leaf, ShieldCheck, Clock, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Omshree Sidha Hospital",
  description: "Learn about the heritage, clinical expertise, and founder of Omshree Sidha Hospital, Kerala's trusted destination for authentic Ayurveda.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070')] bg-cover bg-center" />
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-6">
              A Legacy of Authentic Healing
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Omshree Sidha Hospital combines the ancient wisdom of Kerala Ayurveda and Siddha with modern clinical standards to offer hope and healing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                {/* Placeholder for Founder Image */}
                <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                   <div className="text-center text-secondary-foreground p-8">
                     <Users className="h-16 w-16 mx-auto mb-4 opacity-50 text-primary" />
                     <p className="font-heading text-xl opacity-70">Chief Physician & Founder</p>
                   </div>
                </div>
              </div>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Founder's Vision</h2>
                <div className="w-20 h-1 bg-accent mt-4 mb-6 rounded-full" />
              </FadeIn>
              <FadeIn delay={0.2} className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Rooted in the rich traditions of Kerala, Omshree Sidha Hospital was established with a singular mission: to provide genuine, evidence-based Ayurvedic and Siddha treatments for severe chronic illnesses that often challenge conventional medicine.
                </p>
                <p>
                  Under the guidance of our esteemed Chief Physician, the hospital has pioneered integrative approaches to Cardiology (specifically managing Low EF and Heart Failure), Respiratory disorders, and complex Gastrointestinal diseases.
                </p>
                <p>
                  "We do not just treat the disease; we treat the person. Our goal is to restore harmony at the cellular level, empowering the body's innate ability to heal itself."
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Approach */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Clinical Approach</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We uphold the highest standards of safety, hygiene, and authenticity.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <Card className="h-full border-border bg-card">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">100% Authentic Medicines</h3>
                  <p className="text-muted-foreground">All our medicines are prepared under strict supervision using high-quality raw herbs, ensuring maximum efficacy.</p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full border-border bg-card">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">Evidence-Based Practice</h3>
                  <p className="text-muted-foreground">We rely on documented case studies, modern diagnostics (ECGs, Echos), and classical texts to formulate treatment plans.</p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full border-border bg-card">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">Expert Doctors</h3>
                  <p className="text-muted-foreground">Our team consists of highly qualified Ayurvedic and Siddha practitioners with decades of specialized clinical experience.</p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
