import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Omshree Sidha Hospital",
  description: "Privacy policy and patient data protection disclosures for Omshree Sidha Hospital.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24 relative overflow-hidden">
        <div className="w-full px-[4%] relative z-20">
          <nav className="flex text-sm text-[#E3D8C1] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-[#E3D8C1]/80">Privacy Policy</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#517B32]/30 border border-[#517B32]/40 text-[#E3D8C1] text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#517B32]" />
              Patient Data Confidentiality
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed">
              How Omshree Sidha Hospital protects your personal data, medical confidentiality, and patient rights.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTENT */}
      <div className="w-full px-[4%] py-16 md:py-24 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#DBCFA8]">
          <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed space-y-8">
            
            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">1. Overview & Scope</h2>
              <p>
                Omshree Sidha Hospital (&ldquo;the Hospital&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), established in 1880 and situated at Vayala P.O., Kaduthuruthy, Kottayam, Kerala 686587, is committed to safeguarding the privacy and confidentiality of individuals who visit our website ([https://omshreeayur.com](https://omshreeayur.com)) or communicate with us regarding medical consultations and hospital care.
              </p>
              <p className="mt-3">
                This Privacy Policy outlines how we collect, process, manage, and protect personal and sensitive medical data in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">2. Information We Collect</h2>
              <p>
                When you submit a consultation enquiry or communicate with our clinical coordination team, we collect only the information necessary to evaluate your medical enquiry:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                <li><strong>Identity Information:</strong> Patient&apos;s full name.</li>
                <li><strong>Contact Details:</strong> Telephone number, WhatsApp number, and email address.</li>
                <li><strong>Demographic Information:</strong> City, state, or country of residence.</li>
                <li><strong>Clinical Enquiry Details:</strong> Primary health concerns, conditions, or brief descriptive notes voluntarily provided to assist our clinical team in initial triage.</li>
              </ul>
              <p className="mt-3 text-sm italic">
                Note: We request that detailed diagnostic scans and comprehensive medical records are not transmitted via online public forms; our clinical team will arrange secure channels following initial coordination.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">3. Purpose of Processing</h2>
              <p>Personal and health information provided by patients is used exclusively for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                <li>Initial medical triage and consultation scheduling by our physicians.</li>
                <li>Direct communication with patients regarding appointments, tariffs, and treatment suitability.</li>
                <li>Hospital administrative records, compliance with healthcare regulations, and patient follow-up.</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, monetize, or trade patient contact details or medical information to any commercial third parties or advertisers.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">4. Medical Confidentiality & Data Security</h2>
              <p>
                Omshree Sidha Hospital adheres to high standards of clinical confidentiality and physician-patient privilege. We enforce technical and procedural safeguards to protect your personal information against unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">5. Patient Rights</h2>
              <p>Under applicable data protection legislation, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-700">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or updating of inaccurate personal records.</li>
                <li>Withdraw consent for non-statutory communication by contacting our hospital administration.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">6. Grievance Officer & Contact Information</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your data, please contact our designated Grievance Officer:
              </p>
              <div className="bg-[#FAF8F3] p-6 rounded-2xl border border-[#DBCFA8]/60 mt-4 space-y-2 text-[#66371B]">
                <p><strong>Designation:</strong> Patient Grievance & Data Protection Officer</p>
                <p><strong>Hospital:</strong> Omshree Sidha Hospital & Research Centre</p>
                <p><strong>Address:</strong> Vayala P.O., Kaduthuruthy, Kottayam District, Kerala 686587, India</p>
                <p><strong>Email:</strong> <a href="mailto:info@omshreeayur.com" className="text-[#517B32] font-semibold underline">info@omshreeayur.com</a></p>
                <p><strong>Direct Telephone:</strong> <a href="tel:+919846992789" className="text-[#517B32] font-semibold underline">+91 98469 92789</a></p>
              </div>
            </section>

            <div className="pt-8 border-t border-[#DBCFA8]/40 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#81754B]/70">
                Last Updated: October 2026 • Omshree Sidha Hospital
              </p>
              <Link 
                href="/terms-and-conditions" 
                className="inline-flex items-center gap-1.5 text-xs text-[#517B32] font-semibold hover:underline"
              >
                View Terms & Conditions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
