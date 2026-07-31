"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, Wind, Activity, Leaf, ArrowRight, ShieldCheck, Clock, 
  Users, Stethoscope, Microscope, Quote, CheckCircle2, Pill
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background overflow-hidden font-sans">
      
      {/* 1. Hero Section (Full-width Cinematic Banner) */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kizhi_hero.png"
            alt="Authentic Ayurvedic Kizhi Treatment at Omshree Sidha"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/50 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/50 sm:to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 w-full pt-16">
          <div className="max-w-2xl text-center sm:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] text-primary-foreground uppercase">Welcome to Omshree</span>
                <span className="w-8 h-px bg-primary sm:hidden" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.15] tracking-tight text-shadow-sm">
                Natural care for<br />
                <span className="font-bold text-white">deep healing.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed font-light text-shadow-sm">
                Specialized Ayurveda & Siddha treatments for Cardiology, Respiratory, and chronic conditions. Experience authentic healing backed by clinical evidence.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-sm font-bold uppercase tracking-widest transition-all shadow-xl">
                  Discover More
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black rounded-full px-10 h-14 text-sm font-bold uppercase tracking-widest transition-all bg-white/10 backdrop-blur-md">
                  Book Consultation
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Floating Cards */}
      <section className="relative z-20 -mt-20 mb-20">
        <div className="container px-4 md:px-6">
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Online Consultations", icon: Stethoscope, desc: "Global expert access" },
              { title: "Specialized Treatments", icon: Heart, desc: "Root-cause healing", active: true },
              { title: "Proprietary Medicines", icon: Pill, desc: "GMP Certified safety" }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <Card className={`border-none shadow-xl h-full transition-all hover:-translate-y-1 cursor-pointer ${item.active ? 'bg-[#599863] text-white' : 'bg-white text-foreground'}`}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`p-3 rounded-full ${item.active ? 'bg-white/20' : 'bg-[#eef6ec] text-[#599863]'}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className={`text-sm ${item.active ? 'text-white/80' : 'text-muted-foreground'}`}>{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Experience Split Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070" 
                  alt="Clinical Ayurveda Treatment" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#599863] text-white flex flex-col items-center justify-center shadow-xl border-4 border-white z-10">
                <span className="text-3xl font-bold font-heading">25+</span>
                <span className="text-xs font-medium uppercase tracking-wider text-center leading-tight mt-1">Years<br/>Experience</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-6">
              <h2 className="font-heading text-4xl lg:text-5xl font-light text-foreground leading-tight">
                The combination of <br/><span className="font-bold">nature and science.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our approach integrates classical Panchakarma practices with modern clinical diagnostics. We document your healing journey using Echocardiograms, PFTs, and comprehensive blood panels to prove the efficacy of our natural interventions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#599863]/10 text-[#599863]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Expert Chief Physicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#599863]/10 text-[#599863]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Clinical Evidence Backed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#599863]/10 text-[#599863]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-medium">GMP Certified Medicines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#599863]/10 text-[#599863]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Global Patient Support</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 4. Dark Parallax Banner */}
      <section className="relative py-20 md:py-32 bg-[#2a4533] text-white overflow-hidden my-8 md:my-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070')] opacity-20 mix-blend-overlay bg-cover bg-fixed bg-center" />
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              Extraordinary medicine for <br/><span className="font-bold">chronic conditions.</span>
            </h2>
            <Button size="lg" className="bg-[#599863] text-white hover:bg-white hover:text-[#599863] rounded-full px-8 h-12 text-base font-medium transition-all shadow-md">
              Discover More
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 5. Stats Bar */}
      <section className="py-12 bg-white border-b border-border shadow-sm relative z-20 -mt-20 mx-4 md:mx-auto max-w-6xl rounded-2xl">
        <div className="container px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="md:pr-8">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                We offer Ayurvedic Treatments based on the revered Ashta Vaidya Tradition from Kerala, India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:pl-8 pt-6 md:pt-0 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-1">14K<span className="text-[#599863]">+</span></div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Patients Cured</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-1">95<span className="text-[#599863]">%</span></div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Cardiac Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Services 6-Grid (Dark Glassmorphism) */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#12221b]">
        {/* Subtle glowing background orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#25D366]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">What we offer</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-white">
              Centers of <span className="font-bold">Excellence.</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Heart Disease", desc: "Reversing cardiomyopathy, blocks & improving low Ejection Fraction.", icon: Heart },
              { title: "Respiratory Care", desc: "Effective clinical management for Asthma, Bronchitis & COPD.", icon: Wind },
              { title: "Gastrointestinal", desc: "Healing IBS, GERD, Gastritis and restoring gut microbiome.", icon: Activity },
              { title: "Panchakarma", desc: "Authentic therapies for deep cellular detox and rejuvenation.", icon: Leaf },
              { title: "Online Consultations", desc: "Global access to our senior Ayurvedic cardiologists and specialists.", icon: Stethoscope },
              { title: "Proprietary Medicine", desc: "Access our exclusive GMP certified formulas like KAFASTHA.", icon: Pill },
            ].map((service, i) => (
              <StaggerItem key={i}>
                <Card className="h-full border border-white/10 shadow-2xl hover:shadow-[0_0_40px_rgba(89,152,99,0.15)] hover:border-primary/40 transition-all duration-500 bg-white/5 backdrop-blur-xl group rounded-2xl overflow-hidden relative">
                  <CardContent className="p-8 flex flex-col h-full items-start text-left">
                    {/* Background Watermark Icon */}
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      <service.icon className="w-32 h-32 text-primary translate-x-4 -translate-y-4" />
                    </div>
                    
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10 shadow-[0_0_15px_rgba(89,152,99,0.2)]">
                      <service.icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="font-heading text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300 relative z-10">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow pr-4 relative z-10">
                      {service.desc}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold text-sm mt-auto group-hover:translate-x-2 group-hover:text-white transition-all duration-300 relative z-10 cursor-pointer">
                      <span>Explore treatments</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Products Grid */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-foreground">
              Our Proprietary <span className="font-bold">Medicines.</span>
            </h2>
            <p className="text-muted-foreground mt-4">Formulated from clinical research. Manufactured in our GMP certified facility.</p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "KAFASTHA", desc: "For Cardiovascular Support", price: "₹850", image: "/images/products/premium_bottle.png" },
              { title: "CUFPRO", desc: "For Respiratory Health", price: "₹650", image: "/images/products/premium_bottle.png" },
              { title: "HRUDYAM", desc: "Heart Muscle Tonic", price: "₹1200", image: "/images/products/premium_bottle.png" },
              { title: "GASTROCARE", desc: "Digestive Balance", price: "₹750", image: "/images/products/premium_bottle.png" },
            ].map((product, i) => (
              <StaggerItem key={i}>
                <Card className="border border-border shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden text-center group">
                  <div className="h-48 bg-white relative flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
                    <Image 
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-1">{product.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4 h-8">{product.desc}</p>
                    <div className="flex items-center justify-between mt-4 border-t border-border pt-4">
                      <span className="font-bold text-[#599863]">{product.price}</span>
                      <Button size="sm" className="rounded-full bg-[#599863] hover:bg-[#4a8153] text-white px-4">
                        Add to cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. Promo / Consultation Banner */}
      <section className="py-24 relative bg-[#1a2e22] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070')] opacity-30 mix-blend-overlay bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e22] to-transparent opacity-80" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Free Preliminary <span className="font-bold">Assessment.</span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Upload your recent medical reports (Echo, ECG, Blood tests). Our senior cardiologists will review them and provide a preliminary opinion on whether our Ayurvedic protocols can help your specific condition.
            </p>
            <Button size="lg" className="bg-white text-[#1a2e22] hover:bg-gray-100 rounded-full px-10 h-14 text-lg font-bold shadow-xl">
              Upload Reports Now
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 bg-[#f9fbf9]">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-foreground">
              What they <span className="font-bold">say about us</span>
            </h2>
            <p className="text-muted-foreground mt-4">Real clinical outcomes from our patients worldwide.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh K.", location: "Kerala, India", text: "I was told a heart transplant was my only option. After 6 months of strict treatment at Omshree Sidha, my Ejection Fraction improved dramatically. I have my life back." },
              { name: "Sarah M.", location: "Dubai, UAE", text: "The international patient care team was exceptional. The combination of CUFPRO and their classical treatments cured a chronic cough I suffered with for 3 years." },
              { name: "Anand V.", location: "Mumbai, India", text: "Dr. Omshree's approach is highly scientific. They reviewed all my allopathic reports and guided me perfectly. The swelling in my legs is gone, and I can walk miles now." },
            ].map((testimonial, i) => (
              <StaggerItem key={i}>
                <Card className="h-full border-none shadow-sm bg-white rounded-2xl p-8 flex flex-col relative">
                  <Quote className="absolute top-8 right-8 h-8 w-8 text-[#eef6ec]" />
                  <p className="text-muted-foreground leading-relaxed flex-grow italic relative z-10">"{testimonial.text}"</p>
                  <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                    <div className="w-10 h-10 rounded-full bg-[#599863] text-white flex items-center justify-center font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 10. Simple Footer Newsletter */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-primary-foreground/20 pb-12 mb-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">Newsletter</h3>
              <p className="text-primary-foreground/80 text-sm">Subscribe to get medical updates and wellness tips.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded-l-full px-6 py-3 text-sm outline-none focus:bg-white/20 text-white placeholder:text-white/50 w-full"
              />
              <Button className="rounded-r-full rounded-l-none bg-white text-primary hover:bg-gray-100 h-auto px-6 font-bold">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-white" />
              <span className="font-heading font-bold text-white text-lg">Omshree Sidha Hospital</span>
            </div>
            <p>Copyright © 2026 Omshree. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
