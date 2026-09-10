import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Omshree Sidha Hospital",
  description: "Terms and conditions for Omshree Sidha Hospital's website and services.",
};

export default function TermsAndConditionsPage() {
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
                  <span className="text-[#E3D8C1]/80">Terms and Conditions</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed">
              Please read these terms and conditions carefully before using our services or website.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTENT */}
      <div className="w-full px-[4%] py-16 md:py-24 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#DBCFA8]">
          <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed space-y-8">
            
            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Omshree Sidha Hospital website, you accept and agree to be bound by the terms and provisions of this agreement. Furthermore, when using our services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">2. Medical Disclaimer</h2>
              <p>
                The content provided on this website—including all text, graphics, images, and information—is for general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">3. Treatment Outcomes & Challenging Offer</h2>
              <p>
                While Omshree Sidha Hospital strives to provide the highest quality of Ayurvedic care, medical outcomes can vary from patient to patient based on individual health conditions, adherence to prescribed regimens, and other physiological factors. Specific terms apply to our "Money Back Challenging Offer," which are detailed during the patient admission process and require explicit written agreement prior to the commencement of treatment.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">4. Privacy & Data Protection</h2>
              <p>
                Your privacy is extremely important to us. Any personal information or medical records submitted through our contact forms or consultations are handled with the utmost confidentiality in accordance with applicable healthcare data protection regulations. We do not sell or distribute your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">5. Intellectual Property</h2>
              <p>
                All content, logos, text, and imagery on this site are the property of Omshree Sidha Hospital. Unauthorized use, reproduction, or distribution of this material without express written consent is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-4">6. Contact Information</h2>
              <p>
                If you have any questions regarding these Terms and Conditions, please contact us:
              </p>
              <ul className="list-none pl-0 mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#517B32]" />
                  <span>Email: mail@omshreeayur.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#517B32]" />
                  <span>Phone: +91 4822 229434</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#517B32]" />
                  <span>Address: Meenachil P.O, Pala, Kottayam, Kerala - 686589</span>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
