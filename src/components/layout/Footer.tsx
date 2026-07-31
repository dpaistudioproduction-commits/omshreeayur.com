import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-border pt-16 pb-8 text-sidebar-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight text-primary">
                  Omshree Sidha
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  Hospital
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A premium Ayurveda and Siddha specialty hospital in Kerala, blending traditional healing wisdom with modern medical excellence.
            </p>
          </div>

          {/* Treatments */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-primary">Specialties</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/treatments/heart-disease" className="hover:text-primary transition-colors">Heart Disease Center</Link>
              </li>
              <li>
                <Link href="/treatments/low-ef" className="hover:text-primary transition-colors">Low EF & Heart Failure</Link>
              </li>
              <li>
                <Link href="/treatments/respiratory" className="hover:text-primary transition-colors">Respiratory Care</Link>
              </li>
              <li>
                <Link href="/treatments/gastro" className="hover:text-primary transition-colors">Gastrointestinal</Link>
              </li>
              <li>
                <Link href="/treatments/panchakarma" className="hover:text-primary transition-colors">Panchakarma</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-primary">Quick Links</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">Ayurvedic Products</Link>
              </li>
              <li>
                <Link href="/international-patients" className="hover:text-primary transition-colors">International Patients</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact & Location</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-primary">Contact Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>
                  Omshree Sidha Hospital<br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>care@omshreeayur.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Omshree Sidha Hospital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
