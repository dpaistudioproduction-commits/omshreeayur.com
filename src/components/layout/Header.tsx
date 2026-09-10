"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand/BrandLogo";
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
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { 
  Menu, Phone, Clock, MessageCircle, MapPin, Globe, ChevronRight
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col antialiased shadow-sm bg-[#F7F1E1]">
      
      {/* =========================================================================
          TIER 1: TOP UTILITY BAR (Slim Dark Natural-Green Bar)
          ========================================================================= */}
      <div className="w-full h-9 bg-[#517B32] text-[#F7F1E1] text-[11px] font-medium tracking-wider py-1.5 border-b border-[#6F9940]/40">
        <div className="w-full px-[4%] flex justify-between sm:justify-end items-center h-full gap-3 sm:gap-6 lg:gap-8">
          {/* Location & Hours */}
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5 text-[#F7F1E1] font-medium truncate">
              <MapPin className="h-3.5 w-3.5 text-[#B4833D] shrink-0" />
              <span className="hidden sm:inline">VAYALA P.O., KOTTAYAM, KERALA</span>
              <span className="sm:hidden">KOTTAYAM, KERALA</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#E3D8C1]">
              <Clock className="h-3.5 w-3.5 text-[#B4833D] shrink-0" />
              <span>MON–SUN (09:00 AM – 06:00 PM)</span>
            </span>
          </div>

          {/* International Patient Action */}
          <div className="flex items-center shrink-0">
            <Link
              href="/international-patients"
              className="flex items-center gap-1.5 text-[#F7F1E1] hover:text-[#B4833D] transition-colors font-bold uppercase tracking-wider text-[10.5px] sm:text-[11px]"
            >
              <Globe className="h-3.5 w-3.5 text-[#B4833D] shrink-0" />
              <span className="hidden xs:inline sm:inline">INTERNATIONAL PATIENT ENQUIRY</span>
              <span className="xs:hidden">INTERNATIONAL</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TIER 2: MAIN NAVIGATION (Full-width Warm Ivory / Global Content Container)
          ========================================================================= */}
      <div className="w-full bg-[#F7F1E1] transition-all duration-300 h-18 lg:h-20 flex items-center">
        <div className="w-full px-[4%] h-full flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
          
          {/* Left: Authentic Hospital Brand Logo */}
          <div className="shrink-0 flex items-center">
            <BrandLogo variant="header" />
          </div>

          {/* Center: Desktop Navigation Menu (Active from 1200px and above) */}
          <div className="hidden min-[1200px]:flex items-center justify-center flex-1 min-w-0 px-2">
            <NavigationMenu className="max-w-full">
              <NavigationMenuList className="gap-1 2xl:gap-2">
                
                {/* 1. About */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] data-[state=open]:text-[#517B32] h-9 px-2.5 2xl:px-3.5 transition-colors cursor-pointer">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-1 p-3 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
                      <li>
                        <Link href="/about" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Our Hospital
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/history" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Heritage & Legacy (1880)
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/doctors" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Our Doctors & Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/why-omshree" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Why Choose Us
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 2. Ayurveda */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] data-[state=open]:text-[#517B32] h-9 px-2.5 2xl:px-3.5 transition-colors cursor-pointer">
                    Ayurveda
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-1 p-3 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
                      <li>
                        <Link href="/ayurveda" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Understanding Ayurveda
                        </Link>
                      </li>
                      <li>
                        <Link href="/ayurveda/kerala" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Kerala Ayurveda
                        </Link>
                      </li>
                      <li>
                        <Link href="/ayurveda/panchakarma" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Panchakarma Therapies
                        </Link>
                      </li>
                      <li>
                        <Link href="/ayurveda/consultation" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Consultation Process
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* 3. Treatments */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] data-[state=open]:text-[#517B32] h-9 px-2.5 2xl:px-3.5 transition-colors cursor-pointer">
                    Treatments
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-1 p-3 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
                      <li>
                        <Link href="/treatments" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Ayurvedic Treatments
                        </Link>
                      </li>
                      <li>
                        <Link href="/treatments/therapies" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Signature Therapies
                        </Link>
                      </li>
                      <li>
                        <Link href="/treatments/heart-disease" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Heart Disease
                        </Link>
                      </li>
                      <li>
                        <Link href="/treatments/liver-disease" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Liver Disease
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 4. Conditions */}
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/conditions" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] h-9 px-2.5 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors")}>
                    Conditions
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 4.5. Products */}
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/products" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] h-9 px-2.5 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors")}>
                    Products
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 4.6. Testimonials */}
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/testimonials" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] h-9 px-2.5 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors")}>
                    Testimonials
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 5. Patient Care */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] data-[state=open]:text-[#517B32] h-9 px-2.5 2xl:px-3.5 transition-colors cursor-pointer">
                    Patient Care
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-1 p-3 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
                      <li>
                        <Link href="/patient-care" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Care Overview
                        </Link>
                      </li>
                      <li>
                        <Link href="/patient-care/facilities" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          In-Patient Facilities
                        </Link>
                      </li>
                      <li>
                        <Link href="/patient-care/journey" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Patient Journey
                        </Link>
                      </li>
                      <li>
                        <Link href="/patient-care/tariff" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Tariff & Pricing
                        </Link>
                      </li>
                      <li>
                        <Link href="/patient-care/challenging-offer" className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#517B32] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors">
                          Challenging Offer
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 6. Contact */}
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/contact" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] h-9 px-2.5 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors")}>
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Contact Buttons & Primary CTA (Desktop from 1200px+) */}
          <div className="hidden min-[1200px]:flex items-center justify-end gap-2 xl:gap-2.5 shrink-0">
            {/* Phone Button */}
            <a
              href="tel:+914822229434"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 2xl:px-3 2xl:py-2 rounded-xl bg-white border border-[#DBCFA8] hover:border-[#517B32] hover:bg-[#E3D8C1]/40 text-[#66371B] text-xs font-semibold transition-all shadow-2xs whitespace-nowrap"
              title="Call Omshree Sidha Hospital"
            >
              <Phone className="h-3.5 w-3.5 text-[#517B32]" />
              <span className="hidden 2xl:inline">Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919846992789"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 2xl:px-3 2xl:py-2 rounded-xl bg-white border border-[#DBCFA8] hover:border-[#25D366] hover:bg-[#E3D8C1]/40 text-[#66371B] text-xs font-semibold transition-all shadow-2xs whitespace-nowrap"
              title="WhatsApp Enquiry"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span className="hidden 2xl:inline">WhatsApp</span>
            </a>

            {/* Primary CTA: Book Consultation */}
            <Button
              render={<Link href="/patient-care/consultation" />}
              variant="default"
              className="px-6 shadow-md shadow-[#517B32]/20 hover:-translate-y-0.5"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile / Tablet Action Suite (< 1200px) */}
          <div className="min-[1200px]:hidden flex items-center justify-end gap-2 sm:gap-3">
            <a
              href="tel:+914822229434"
              aria-label="Call Hospital"
              className="p-2 sm:px-3 sm:py-2 rounded-xl sm:rounded-full text-[#66371B] bg-white border border-[#DBCFA8] hover:bg-[#E3D8C1] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="h-4 w-4 text-[#517B32]" />
              <span className="hidden sm:inline text-xs font-semibold">Call</span>
            </a>
            
            <a
              href="https://wa.me/919846992789"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Us"
              className="p-2 sm:px-3 sm:py-2 rounded-xl sm:rounded-full text-[#25D366] bg-white border border-[#DBCFA8] hover:bg-[#E3D8C1] flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline text-xs font-semibold text-[#66371B]">Chat</span>
            </a>

            {/* Book Consultation button on medium screens (640px to 1199px) */}
            <div className="hidden sm:block">
              <Button
                render={<Link href="/patient-care/consultation" />}
                variant="default"
                size="sm"
                className="shadow-sm"
              >
                Book
              </Button>
            </div>

            {/* Mobile Sheet Navigation Menu Drawer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-[#66371B] hover:bg-[#E3D8C1] p-2 rounded-xl border border-[#DBCFA8]/60 bg-white/60"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              } />
              <SheetContent side="right" className="bg-[#F7F1E1] w-[88vw] sm:w-[380px] overflow-y-auto border-l-[#DBCFA8] p-6">
                <SheetHeader className="text-left border-b border-[#DBCFA8] pb-4 mb-4">
                  <SheetTitle className="text-[#517B32] font-heading font-bold text-xl">
                    Omshree Sidha Hospital
                  </SheetTitle>
                  <p className="text-xs text-[#81754B] font-medium uppercase tracking-wider">
                    Ayurvedic Hospital • Est. 1880
                  </p>
                </SheetHeader>

                <nav className="flex flex-col gap-4">
                  {/* Primary Navigation Links */}
                  <div className="flex flex-col text-[#66371B] text-base font-medium divide-y divide-[#DBCFA8]/40">
                    <Link 
                      href="/" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>Home</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>
                    
                    <Link 
                      href="/about" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>About Hospital</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>

                    <Link 
                      href="/about/doctors" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between pl-3 text-sm text-[#66371B]/80"
                    >
                      <span>— Our Doctors & Vaidyans</span>
                    </Link>

                    <Link 
                      href="/about/history" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between pl-3 text-sm text-[#66371B]/80"
                    >
                      <span>— Heritage (Est. 1880)</span>
                    </Link>

                    <Link 
                      href="/ayurveda" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>Ayurveda & Panchakarma</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>

                    <Link 
                      href="/treatments" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>Treatments & Therapies</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>

                    <Link 
                      href="/conditions" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>Health Conditions</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>

                    <Link 
                      href="/products" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>Medicines & Products</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>

                    <Link 
                      href="/testimonials" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>Testimonials</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>

                    <Link 
                      href="/patient-care" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>Patient Care & In-Patient Facilities</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>

                    <Link 
                      href="/international-patients" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between text-[#517B32] font-semibold"
                    >
                      <span>International Patients</span>
                      <ChevronRight className="h-4 w-4 text-[#517B32]" />
                    </Link>

                    <Link 
                      href="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#517B32] flex items-center justify-between"
                    >
                      <span>Contact Hospital</span>
                      <ChevronRight className="h-4 w-4 text-[#B4833D]/60" />
                    </Link>
                  </div>

                  {/* Actions in Mobile Drawer */}
                  <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-[#DBCFA8]">
                    <Button 
                      render={<Link href="/patient-care/consultation" />} 
                      onClick={() => setIsOpen(false)}
                      variant="default"
                      className="w-full justify-center"
                    >
                      Book a Consultation
                    </Button>
                    <Button 
                      render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} 
                      variant="outline" 
                      className="w-full justify-center text-[#25D366] border-[#25D366] hover:bg-[#25D366]/10"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" /> Chat on WhatsApp
                    </Button>
                    <Button 
                      render={<a href="tel:+914822229434" />} 
                      variant="outline" 
                      className="w-full justify-center"
                    >
                      <Phone className="h-4 w-4 mr-2 text-[#517B32]" /> Call Hospital (+91 4822229434)
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
