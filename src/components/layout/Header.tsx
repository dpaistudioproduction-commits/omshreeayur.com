"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand/BrandLogo";
import dynamic from "next/dynamic";
import { DesktopNavigationPlaceholder } from "@/components/layout/DesktopNavigationPlaceholder";

const DesktopNavigation = dynamic(
  () => import("@/components/layout/DesktopNavigation").then((m) => m.DesktopNavigation),
  {
    loading: () => <DesktopNavigationPlaceholder />,
    ssr: false,
  }
);
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { 
  Menu, Phone, Clock, MessageCircle, MapPin, Globe, ChevronRight
} from "lucide-react";

function subscribeDesktopQuery(callback: () => void) {
  const mql = window.matchMedia("(min-width: 1200px)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 1200px)").matches;
}

function getDesktopServerSnapshot() {
  return false;
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const isDesktop = React.useSyncExternalStore(
    subscribeDesktopQuery,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  );

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
          TIER 1: TOP UTILITY BAR (Slim Dark Natural-Green Bar - Accessible Contrast)
          ========================================================================= */}
      <div className="w-full h-9 bg-[#3D5F26] text-white text-[11px] font-medium tracking-wider py-1.5 border-b border-[#6F9940]/40">
        <div className="w-full px-4 sm:px-6 xl:px-8 max-w-[1720px] mx-auto flex justify-between sm:justify-end items-center h-full gap-3 sm:gap-6 lg:gap-8">
          {/* Location & Hours */}
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5 text-white font-medium truncate">
              <MapPin className="h-3.5 w-3.5 text-[#E3D8C1] shrink-0" />
              <span className="hidden sm:inline">VAYALA P.O., KOTTAYAM, KERALA</span>
              <span className="sm:hidden">KOTTAYAM, KERALA</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#E3D8C1]">
              <Clock className="h-3.5 w-3.5 text-[#E3D8C1] shrink-0" />
              <span>MON–SUN (09:00 AM – 06:00 PM)</span>
            </span>
          </div>

          {/* International Patient Action */}
          <div className="flex items-center shrink-0">
            <Link
              href="/international-patients"
              className="flex items-center gap-1.5 text-white hover:text-[#E3D8C1] transition-colors font-bold uppercase tracking-wider text-[10.5px] sm:text-[11px]"
            >
              <Globe className="h-3.5 w-3.5 text-[#E3D8C1] shrink-0" />
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
        <div className="w-full px-4 sm:px-6 xl:px-8 max-w-[1720px] mx-auto h-full flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
          
          {/* Left: Authentic Hospital Brand Logo */}
          <div className="shrink-0 flex items-center pr-1 xl:pr-2">
            <BrandLogo variant="header" />
          </div>

          {/* Center: Desktop Navigation Menu (Active from 1200px and above) */}
          <div className="hidden min-[1200px]:flex items-center justify-center flex-1 min-w-0 px-1 xl:px-2">
            {isDesktop ? <DesktopNavigation /> : <DesktopNavigationPlaceholder />}
          </div>

          {/* Right: Contact Buttons & Primary CTA (Desktop from 1200px+) */}
          <div className="hidden min-[1200px]:flex items-center justify-end gap-1.5 xl:gap-2 2xl:gap-2.5 shrink-0 pl-1 xl:pl-2">
            {/* Phone Button */}
            <a
              href="tel:+919846992789"
              className="inline-flex items-center justify-center size-8.5 2xl:size-auto 2xl:px-3 2xl:py-2 rounded-xl bg-white border border-[#DBCFA8] hover:border-[#3D5F26] hover:bg-[#E3D8C1]/40 text-[#66371B] text-xs font-semibold transition-all shadow-2xs whitespace-nowrap shrink-0"
              title="Call Omshree Sidha Hospital"
            >
              <Phone className="h-3.5 w-3.5 text-[#3D5F26]" />
              <span className="hidden 2xl:inline ml-1.5">Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919846992789"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center size-8.5 2xl:size-auto 2xl:px-3 2xl:py-2 rounded-xl bg-white border border-[#DBCFA8] hover:border-[#25D366] hover:bg-[#E3D8C1]/40 text-[#66371B] text-xs font-semibold transition-all shadow-2xs whitespace-nowrap shrink-0"
              title="WhatsApp Enquiry"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span className="hidden 2xl:inline ml-1.5">WhatsApp</span>
            </a>

            {/* Primary CTA: Book Consultation */}
            <Button
              render={<Link href="/contact" />}
              variant="default"
              className="h-8.5 2xl:h-9 px-3 xl:px-4 2xl:px-6 text-xs xl:text-[13px] 2xl:text-sm font-semibold shadow-md shadow-[#3D5F26]/20 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile / Tablet Action Suite (< 1200px) */}
          <div className="min-[1200px]:hidden flex items-center justify-end gap-2 sm:gap-3">
            <a
              href="tel:+919846992789"
              aria-label="Call Hospital"
              className="p-2 sm:px-3 sm:py-2 rounded-xl sm:rounded-full text-[#66371B] bg-white border border-[#DBCFA8] hover:bg-[#E3D8C1] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="h-4 w-4 text-[#3D5F26]" />
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
                render={<Link href="/contact" />}
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
                  <SheetTitle className="text-[#3D5F26] font-heading font-bold text-xl">
                    Omshree Sidha Hospital
                  </SheetTitle>
                  <p className="text-xs text-[#5C5232] font-medium uppercase tracking-wider">
                    Ayurvedic Hospital • Healing Since 1880
                  </p>
                </SheetHeader>

                <nav className="flex flex-col gap-4">
                  {/* Primary Navigation Links */}
                  <div className="flex flex-col text-[#66371B] text-base font-medium divide-y divide-[#DBCFA8]/40">
                    <Link 
                      href="/" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Home</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>
                    
                    <Link 
                      href="/about" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>About Hospital</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>

                    <Link 
                      href="/about/doctors" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between pl-3 text-sm text-[#66371B]/80"
                    >
                      <span>— Our Doctors & Vaidyans</span>
                    </Link>

                    <Link 
                      href="/about/history" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between pl-3 text-sm text-[#66371B]/80"
                    >
                      <span>— Heritage (Healing Since 1880)</span>
                    </Link>

                    <Link 
                      href="/ayurveda" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Ayurveda & Panchakarma</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>

                    <Link 
                      href="/treatments" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Treatments & Therapies</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>

                    <Link 
                      href="/conditions" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Health Conditions</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>

                    <Link 
                      href="/products" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Medicines & Products</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>

                    <Link 
                      href="/testimonials" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Testimonials</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>

                    <Link 
                      href="/patient-care" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Patient Care & In-Patient Facilities</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>

                    <Link 
                      href="/international-patients" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between text-[#3D5F26] font-semibold"
                    >
                      <span>International Patients</span>
                      <ChevronRight className="h-4 w-4 text-[#3D5F26]" />
                    </Link>

                    <Link 
                      href="/blog" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Blog & Health Insights</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>

                    <Link 
                      href="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="py-2.5 hover:text-[#3D5F26] flex items-center justify-between"
                    >
                      <span>Contact Hospital</span>
                      <ChevronRight className="h-4 w-4 text-[#8F5E18]/70" />
                    </Link>
                  </div>

                  {/* Actions in Mobile Drawer */}
                  <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-[#DBCFA8]">
                    <Button 
                      render={<Link href="/contact" />} 
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
                      render={<a href="tel:+919846992789" />} 
                      variant="outline" 
                      className="w-full justify-center"
                    >
                      <Phone className="h-4 w-4 mr-2 text-[#3D5F26]" /> Call Mobile (+91 98469 92789)
                    </Button>
                    <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1">
                      <a href="tel:+914822229434" className="py-2 px-1 bg-white border border-[#DBCFA8] rounded-xl text-[#66371B] font-medium hover:border-[#3D5F26] transition-colors">
                        Landline: 04822 229434
                      </a>
                      <a href="tel:+914822229435" className="py-2 px-1 bg-white border border-[#DBCFA8] rounded-xl text-[#66371B] font-medium hover:border-[#3D5F26] transition-colors">
                        Landline: 04822 229435
                      </a>
                    </div>
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
