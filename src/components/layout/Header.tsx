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
  Menu, Phone, Clock, MessageCircle, MapPin, Globe, ChevronDown, CalendarCheck
} from "lucide-react";

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
    <header className="sticky -top-9 z-50 w-full flex flex-col">
      
      {/* =========================================================================
          TIER 1: TOP UTILITY BAR (Slim Dark Natural-Green Bar)
          ========================================================================= */}
      <div className="w-full h-9 bg-[#517B32] text-[#F7F1E1] text-[11px] font-medium tracking-wider py-1.5 border-b border-[#6F9940]/40">
        <div className="w-full max-w-[1440px] mx-auto px-[4%] flex justify-end items-center h-full gap-4 sm:gap-6 lg:gap-8">
          {/* Location & Hours */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-[#F7F1E1] font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#B4833D] shrink-0" />
              <span>VAYALA P.O., KOTTAYAM, KERALA</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#E3D8C1]">
              <Clock className="h-3.5 w-3.5 text-[#B4833D] shrink-0" />
              <span>MON–SUN (09:00 AM – 06:00 PM)</span>
            </span>
          </div>

          {/* International Patient Action */}
          <div className="flex items-center">
            <Link
              href="/international-patients"
              className="flex items-center gap-1.5 text-[#F7F1E1] hover:text-[#B4833D] transition-colors font-bold uppercase tracking-wider text-[11px]"
            >
              <Globe className="h-3.5 w-3.5 text-[#B4833D] shrink-0" />
              <span>INTERNATIONAL PATIENT ENQUIRY</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TIER 2: MAIN NAVIGATION (Full-width Warm Ivory / Global Content Container)
          ========================================================================= */}
      <div className={cn(
        "w-full bg-[#F7F1E1] border-b border-[#DBCFA8] transition-all duration-300",
        isScrolled 
          ? "h-16 lg:h-20 shadow-md backdrop-blur-md bg-[#F7F1E1]/98" 
          : "h-20 lg:h-24 shadow-xs"
      )}>
        <div className="w-full max-w-[1440px] mx-auto px-[4%] h-full flex items-center justify-between gap-2 lg:gap-4 xl:gap-6">
          
          {/* Left: Authentic Hospital Brand Logo (Aligned to Left Edge) */}
          <div className="flex-shrink-0 flex items-center">
            <BrandLogo variant="header" />
          </div>

          {/* Center: Desktop Navigation Menu (Active from 1080px and above) */}
          <div className="hidden min-[1080px]:flex items-center justify-center flex-1 min-w-0">
            <NavigationMenu className="max-w-full">
              <NavigationMenuList className="gap-0.5 2xl:gap-1.5">
                
                {/* 1. About */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-xs xl:text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] data-[state=open]:text-[#517B32] h-8 xl:h-9 px-1.5 xl:px-2.5 2xl:px-3">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[230px] gap-1.5 p-4 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
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
                  <NavigationMenuTrigger className="bg-transparent text-xs xl:text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] data-[state=open]:text-[#517B32] h-8 xl:h-9 px-1.5 xl:px-2.5 2xl:px-3">
                    Ayurveda
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[230px] gap-1.5 p-4 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
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
                  <NavigationMenuTrigger className="bg-transparent text-xs xl:text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] data-[state=open]:text-[#517B32] h-8 xl:h-9 px-1.5 xl:px-2.5 2xl:px-3">
                    Treatments
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[230px] gap-1.5 p-4 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
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
                          Heart Disease Protocol
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 4. Health Conditions */}
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/conditions" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs xl:text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] h-8 xl:h-9 px-1.5 xl:px-2.5 2xl:px-3 whitespace-nowrap")}>
                    Health Conditions
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 5. Patient Care */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-xs xl:text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] data-[state=open]:text-[#517B32] h-8 xl:h-9 px-1.5 xl:px-2.5 2xl:px-3">
                    Patient Care
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[230px] gap-1.5 p-4 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
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

                {/* 6. International Patients */}
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/international-patients" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs xl:text-[13px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#517B32] h-8 xl:h-9 px-1.5 xl:px-2.5 2xl:px-3 whitespace-nowrap")}>
                    International Patients
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Contact Buttons & Primary CTA (Aligned to Right Edge) */}
          <div className="hidden min-[1080px]:flex items-center justify-end gap-1.5 xl:gap-2.5 flex-shrink-0">
            {/* Phone Button */}
            <a
              href="tel:+914822229434"
              className="inline-flex items-center gap-1.5 px-2 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 rounded-xl bg-white border border-[#DBCFA8] hover:border-[#517B32] hover:bg-[#E3D8C1]/40 text-[#66371B] text-xs font-semibold transition-all shadow-2xs whitespace-nowrap"
              title="Call Omshree Sidha Hospital"
            >
              <Phone className="h-3.5 w-3.5 text-[#517B32]" />
              <span className="hidden xl:inline">Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919846992789"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 rounded-xl bg-white border border-[#DBCFA8] hover:border-[#25D366] hover:bg-[#E3D8C1]/40 text-[#66371B] text-xs font-semibold transition-all shadow-2xs whitespace-nowrap"
              title="WhatsApp Enquiry"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Primary CTA: Book Consultation */}
            <Button
              render={<Link href="/patient-care/consultation" />}
              className="bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-3.5 xl:px-5 2xl:px-6 h-9 xl:h-10 2xl:h-11 text-xs 2xl:text-sm font-bold shadow-md border border-[#6F9940]/40 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile / Tablet View (< 1080px) */}
          <div className="min-[1080px]:hidden flex items-center justify-end gap-2">
            <a
              href="tel:+914822229434"
              aria-label="Call Hospital"
              className="p-2 rounded-full text-[#66371B] bg-white border border-[#DBCFA8] hover:bg-[#E3D8C1]"
            >
              <Phone className="h-4 w-4 text-[#517B32]" />
            </a>
            <a
              href="https://wa.me/919846992789"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Us"
              className="p-2 rounded-full text-[#25D366] bg-white border border-[#DBCFA8] hover:bg-[#E3D8C1]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>

            <Sheet>
              <SheetTrigger render={
                <Button variant="ghost" size="icon" className="text-[#66371B] hover:bg-[#E3D8C1] ml-1">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              } />
              <SheetContent side="right" className="bg-[#F7F1E1] w-[85vw] sm:w-[360px] overflow-y-auto border-l-[#DBCFA8] p-6">
                <SheetHeader className="text-left border-b border-[#DBCFA8] pb-4 mb-6">
                  <SheetTitle className="text-[#517B32] font-heading font-bold text-xl">
                    Omshree Sidha Hospital
                  </SheetTitle>
                  <p className="text-xs text-[#81754B] font-medium uppercase tracking-wider">
                    Ayurvedic Hospital • Est. 1880
                  </p>
                </SheetHeader>

                <nav className="flex flex-col gap-5">
                  {/* Primary Navigation Links */}
                  <div className="flex flex-col gap-3 font-heading font-medium text-lg text-[#66371B]">
                    <Link href="/" className="hover:text-[#517B32] py-1 border-b border-[#DBCFA8]/40">Home</Link>
                    <Link href="/about" className="hover:text-[#517B32] py-1 border-b border-[#DBCFA8]/40">About Hospital</Link>
                    <Link href="/about/doctors" className="hover:text-[#517B32] py-1 border-b border-[#DBCFA8]/40">Our Doctors</Link>
                    <Link href="/ayurveda" className="hover:text-[#517B32] py-1 border-b border-[#DBCFA8]/40">Ayurveda</Link>
                    <Link href="/treatments" className="hover:text-[#517B32] py-1 border-b border-[#DBCFA8]/40">Treatments & Therapies</Link>
                    <Link href="/conditions" className="hover:text-[#517B32] py-1 border-b border-[#DBCFA8]/40">Health Conditions</Link>
                    <Link href="/patient-care" className="hover:text-[#517B32] py-1 border-b border-[#DBCFA8]/40">Patient Care & Facilities</Link>
                    <Link href="/international-patients" className="hover:text-[#517B32] py-1 border-b border-[#DBCFA8]/40 text-[#517B32]">International Patients</Link>
                    <Link href="/contact" className="hover:text-[#517B32] py-1">Contact Hospital</Link>
                  </div>

                  {/* Actions in Mobile Drawer */}
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#DBCFA8]">
                    <Button render={<Link href="/patient-care/consultation" />} className="w-full bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full font-bold h-12">
                      Book a Consultation
                    </Button>
                    <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="outline" className="w-full border-[#517B32] text-[#517B32] hover:bg-[#E3D8C1] rounded-full h-12 font-semibold">
                      <MessageCircle className="h-4 w-4 mr-2 text-[#25D366]" /> Chat on WhatsApp
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
