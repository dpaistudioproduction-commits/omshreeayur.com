"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { 
  Menu, Leaf, Phone, MapPin, Clock, Search, Globe, MessageCircle, 
  Award, HeartPulse, ShieldCheck, Microscope, Plane 
} from "lucide-react";

const treatmentCategories = [
  {
    category: "Heart Care",
    items: [
      { title: "Low EF & Heart Failure", href: "/treatments/low-ef" },
      { title: "Cardiomyopathy", href: "/treatments/heart-disease" },
      { title: "Heart Blocks", href: "/treatments/heart-disease" },
      { title: "Arrhythmia", href: "/treatments/heart-disease" },
    ]
  },
  {
    category: "Respiratory",
    items: [
      { title: "Asthma", href: "/treatments/respiratory" },
      { title: "COPD", href: "/treatments/respiratory" },
      { title: "Bronchitis", href: "/treatments/respiratory" },
    ]
  },
  {
    category: "Other Specialties",
    items: [
      { title: "Gastroenterology", href: "/treatments/gastro" },
      { title: "Liver & Kidney", href: "/treatments/gastro" },
      { title: "Rheumatoid Arthritis", href: "/treatments/panchakarma" },
      { title: "Panchakarma Detox", href: "/treatments/panchakarma" },
    ]
  }
];

const products = [
  {
    title: "KAFASTHA",
    href: "/products/kafastha",
    description: "Premium Cardiac & Respiratory Rejuvenator",
  },
  {
    title: "CUFPRO",
    href: "/products/cufpro",
    description: "Advanced Herbal Expectorant",
  },
];

const trustIndicators = [
  { icon: Award, text: "25+ Years of Ayurvedic Excellence" },
  { icon: HeartPulse, text: "Heart Disease Specialists" },
  { icon: ShieldCheck, text: "GMP Certified Medicines" },
  { icon: Microscope, text: "Research-Based Treatments" },
  { icon: Plane, text: "International Patients Welcome" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full z-50 flex flex-col fixed top-0 transition-all duration-300">
        
        {/* Tier 1: Top Utility Bar */}
        <div className={cn(
          "hidden lg:flex w-full bg-primary text-primary-foreground text-[11px] uppercase tracking-widest font-medium py-2 px-4 transition-all duration-500",
          isScrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        )}>
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="h-3 w-3" /> +91 4822229434
              </span>
              <span className="flex items-center gap-2 opacity-80">
                <Clock className="h-3 w-3" /> Mon–Sun (09:00 AM–06:00 PM)
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
                <Globe className="h-3 w-3" />
                <span>ENG | മലയാളം</span>
              </div>
              <Link href="/international-patients" className="text-accent hover:text-white transition-colors">
                International Patients
              </Link>
            </div>
          </div>
        </div>

        {/* Tier 2: Primary Navigation (Glassmorphism) */}
        <div className={cn(
          "w-full transition-all duration-500",
          isScrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3" 
            : "bg-background border-b border-border/50 py-5 lg:py-6"
        )}>
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-8">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="p-2.5 bg-primary text-primary-foreground rounded-full shadow-sm group-hover:scale-105 transition-transform">
                  <Leaf className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-medium text-xl md:text-2xl leading-none text-foreground tracking-tight">
                    Omshree <span className="font-bold text-primary">Sidha</span>
                  </span>
                  <span className="hidden md:block text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-1">
                    Ayurveda Hospital
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center justify-center flex-1">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink render={<Link href="/" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[14px] font-medium text-muted-foreground hover:text-primary")}>
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink render={<Link href="/about" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[14px] font-medium text-muted-foreground hover:text-primary")}>
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink render={<Link href="/treatments/heart-disease" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[14px] font-semibold text-primary")}>
                      Heart Centre
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Treatments Mega Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-[14px] font-medium text-muted-foreground hover:text-primary">Treatments</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-3 w-[700px] p-6 gap-6 bg-background rounded-xl border border-border shadow-2xl">
                        {treatmentCategories.map((category) => (
                          <div key={category.category} className="space-y-3">
                            <h4 className="font-heading font-bold text-primary border-b border-border/50 pb-2">{category.category}</h4>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.title}>
                                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1">
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Products Mega Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-[14px] font-medium text-muted-foreground hover:text-primary">Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-background rounded-xl border border-border shadow-2xl">
                        {products.map((product) => (
                          <li key={product.title}>
                            <NavigationMenuLink render={<Link href={product.href} />} className="flex items-center gap-4 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted">
                              <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                <Leaf className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-primary mb-1">{product.title}</div>
                                <p className="text-[13px] text-muted-foreground line-clamp-1">{product.description}</p>
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink render={<Link href="/about" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[14px] font-medium text-muted-foreground hover:text-primary")}>
                      Patient Stories
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink render={<Link href="/contact" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[14px] font-medium text-muted-foreground hover:text-primary")}>
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden xl:flex items-center justify-end gap-4">
              <a href="https://wa.me/914822229434" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#25D366] transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shadow-md transition-all">
                Book Appointment
              </Button>
            </div>

            {/* Mobile Nav Top Bar Icons */}
            <div className="xl:hidden flex items-center justify-end gap-3 flex-1">
              <a href="tel:+914822229434" className="p-2 rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://wa.me/914822229434" className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="h-5 w-5" />
              </a>
              
              <Sheet>
                <SheetTrigger render={
                  <Button variant="ghost" size="icon" className="text-foreground ml-1 hover:bg-muted">
                    <Menu className="h-7 w-7" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                } />
                <SheetContent side="right" className="bg-background w-[85vw] sm:w-[350px] overflow-y-auto border-l-border">
                  <SheetTitle className="text-left text-primary font-heading border-b border-border/50 pb-4 mb-4">Menu</SheetTitle>
                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="text-lg font-medium text-foreground hover:text-primary">Home</Link>
                    <Link href="/about" className="text-lg font-medium text-foreground hover:text-primary">About</Link>
                    <Link href="/treatments/heart-disease" className="text-lg font-bold text-primary">Heart Centre</Link>
                    
                    <div className="py-2">
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 block">Treatments</span>
                      <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20">
                        <Link href="/treatments/heart-disease" className="text-foreground hover:text-primary">Heart Care</Link>
                        <Link href="/treatments/respiratory" className="text-foreground hover:text-primary">Respiratory</Link>
                        <Link href="/treatments/gastro" className="text-foreground hover:text-primary">Gastroenterology</Link>
                        <Link href="/treatments/panchakarma" className="text-foreground hover:text-primary">Panchakarma</Link>
                      </div>
                    </div>

                    <div className="py-2">
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 block">Products</span>
                      <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20">
                        <Link href="/products/kafastha" className="text-foreground hover:text-primary">KAFASTHA</Link>
                        <Link href="/products/cufpro" className="text-foreground hover:text-primary">CUFPRO</Link>
                      </div>
                    </div>

                    <Link href="/international-patients" className="text-lg font-medium text-foreground hover:text-primary">International Patients</Link>
                    <Link href="/contact" className="text-lg font-medium text-foreground hover:text-primary">Contact</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[72px] xl:h-[100px] w-full" />

      {/* Mobile Sticky Bottom CTA */}
      <div className="xl:hidden fixed bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-md border-t border-border z-50 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <Button className="w-full h-12 bg-primary text-primary-foreground font-bold text-lg rounded-full shadow-lg">
          Book Consultation
        </Button>
      </div>
    </>
  );
}
