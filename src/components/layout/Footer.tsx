import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#362111] border-t border-[#66371B]/50 pt-20 pb-10 text-[#E3D8C1] font-sans">
      <div className="w-full px-[4%]">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-12 gap-y-16 mb-16">
          
          {/* Column 1 & 2: Brand & Intro */}
          <div className="lg:col-span-2 space-y-8 pr-4">
            <BrandLogo variant="footer" />
            <p className="text-sm leading-relaxed text-[#E3D8C1]/70 max-w-sm">
              An authentic Ayurvedic Hospital in Kerala, India. We bring over 140 years of traditional healing heritage, combining clinical rigor with personalized patient care.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:info@omshreeayur.com" className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#B4833D] hover:border-[#B4833D] hover:text-white transition-all text-[#E3D8C1]">
                <Mail className="h-4 w-4" />
              </a>
              <a href="/contact" className="text-xs font-bold uppercase tracking-widest text-[#B4833D] hover:text-[#E3D8C1] transition-colors border-b border-[#B4833D]/30 hover:border-[#E3D8C1] pb-1">
                View Contact details
              </a>
            </div>
          </div>

          {/* Column 3: Explore */}
          <div className="space-y-6">
            <h3 className="font-heading font-normal text-xl text-[#F7F1E1]">Explore</h3>
            <ul className="space-y-4 text-sm text-[#E3D8C1]/70">
              <li><Link href="/about" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">About Us</Link></li>
              <li><Link href="/ayurveda" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Ayurveda</Link></li>
              <li><Link href="/treatments" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Treatments</Link></li>
              <li><Link href="/conditions" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Health Conditions</Link></li>
              <li><Link href="/about/doctors" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Our Doctors</Link></li>
              <li><Link href="/patient-care/facilities" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Facilities</Link></li>
            </ul>
          </div>

          {/* Column 4: Patient Care */}
          <div className="space-y-6">
            <h3 className="font-heading font-normal text-xl text-[#F7F1E1]">Patient Care</h3>
            <ul className="space-y-4 text-sm text-[#E3D8C1]/70">
              <li><Link href="/patient-care/consultation" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Consultation</Link></li>
              <li><Link href="/patient-care/journey" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Patient Journey</Link></li>
              <li><Link href="/patient-care/tariff" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Tariff</Link></li>
              <li><Link href="/international-patients" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">International Patients</Link></li>
              <li><Link href="/patient-care/challenging-offer" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors inline-block">Challenging Offer</Link></li>
            </ul>
          </div>

          {/* Column 5: Kottayam Hospital */}
          <div className="space-y-6">
            <h3 className="font-heading font-normal text-xl text-[#F7F1E1] flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#B4833D]" /> Kottayam
            </h3>
            <div className="space-y-4 text-sm text-[#E3D8C1]/70">
              <p className="leading-relaxed">
                <strong className="text-[#E3D8C1] font-medium block mb-1">Main Hospital</strong>
                Vayala P.O, Kottayam<br />
                Kerala 686587, India
              </p>
              <div className="pt-2 space-y-2">
                <a href="tel:+914822229434" className="flex items-center gap-2 hover:text-[#B4833D] transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#B4833D]/70" /> +91 4822229434
                </a>
                <a href="tel:+919846992789" className="flex items-center gap-2 hover:text-[#B4833D] transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#B4833D]/70" /> +91 9846992789
                </a>
                <a href="tel:+914822229435" className="flex items-center gap-2 hover:text-[#B4833D] transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#B4833D]/70" /> +91 4822229435
                </a>
                <a href="tel:+918086662789" className="flex items-center gap-2 hover:text-[#B4833D] transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#B4833D]/70" /> +91 8086662789
                </a>
              </div>
            </div>
          </div>

          {/* Column 6: Kochi Branch */}
          <div className="space-y-6">
            <h3 className="font-heading font-normal text-xl text-[#F7F1E1] flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#B4833D]" /> Kochi
            </h3>
            <div className="space-y-4 text-sm text-[#E3D8C1]/70">
              <p className="leading-relaxed">
                <strong className="text-[#E3D8C1] font-medium block mb-1">City Branch</strong>
                K.P Vallon Road, Pavana Homes<br />
                Kadavanthra, Kochi
              </p>
              <div className="pt-2 space-y-2">
                <a href="tel:+916282553899" className="flex items-center gap-2 hover:text-[#B4833D] transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#B4833D]/70" /> +91 6282553899
                </a>
                <a href="tel:+914842324899" className="flex items-center gap-2 hover:text-[#B4833D] transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#B4833D]/70" /> +91 4842324899
                </a>
                <a href="tel:+914842324789" className="flex items-center gap-2 hover:text-[#B4833D] transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#B4833D]/70" /> +91 4842324789
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E3D8C1]/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E3D8C1]/50">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} Omshree Sidha Hospital. All rights reserved.</p>
            <span className="hidden md:inline px-1 text-[#E3D8C1]/20">|</span>
            <span>Ayurvedic Hospital • Est. 1880</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#E3D8C1] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#E3D8C1] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
