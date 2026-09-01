import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#402816] border-t border-[#66371B] pt-16 pb-8 text-[#E3D8C1]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Intro */}
          <div className="space-y-6">
            <BrandLogo variant="footer" />
            <p className="text-sm leading-relaxed text-[#E3D8C1]/80">
              An Ayurvedic Hospital in Kerala, India. We bring 140+ years of traditional healing heritage to personalized patient care.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-[#F7F1E1]">Explore</h3>
            <ul className="space-y-3 text-sm text-[#E3D8C1]/80">
              <li>
                <Link href="/about" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/ayurveda" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Ayurveda</Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Treatments</Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Health Conditions</Link>
              </li>
              <li>
                <Link href="/about/doctors" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Our Doctors</Link>
              </li>
              <li>
                <Link href="/patient-care/facilities" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Facilities</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient Care */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-[#F7F1E1]">Patient Care</h3>
            <ul className="space-y-3 text-sm text-[#E3D8C1]/80">
              <li>
                <Link href="/ayurveda/consultation" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Consultation</Link>
              </li>
              <li>
                <Link href="/patient-care/journey" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Patient Journey</Link>
              </li>
              <li>
                <Link href="/patient-care/tariff" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Tariff</Link>
              </li>
              <li>
                <Link href="/international-patients" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">International Patients</Link>
              </li>
              <li>
                <Link href="/patient-care/challenging-offer" className="hover:text-[#B4833D] focus:text-[#B4833D] transition-colors">Challenging Offer</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-[#F7F1E1]">Connect</h3>
            <ul className="space-y-4 text-sm text-[#E3D8C1]/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#B4833D] shrink-0 mt-0.5" />
                <span>
                  Omshree Sidha Hospital<br />
                  Vayala P.O., Kottayam<br />
                  Kerala 686587, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#B4833D] shrink-0" />
                <a href="tel:+914822229434" className="hover:text-[#B4833D] transition-colors">+91 4822229434</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#B4833D] shrink-0" />
                <a href="mailto:info@omshreeayur.com" className="hover:text-[#B4833D] transition-colors">info@omshreeayur.com</a>
              </li>
              <li>
                <Link href="/contact" className="inline-block mt-2 text-[#B4833D] hover:text-[#E3D8C1] font-medium transition-colors">
                  View Full Contact Details &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#66371B]/60 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E3D8C1]/60">
          <div className="flex items-center gap-2">
            <p>© {new Date().getFullYear()} Omshree Sidha Hospital. All rights reserved.</p>
            <span className="hidden md:inline px-2 text-[#81754B]">|</span>
            <span className="text-[#E3D8C1]/70">Ayurvedic Hospital • Est. 1880</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#E3D8C1]/70">Vayala P.O., Kottayam, Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
