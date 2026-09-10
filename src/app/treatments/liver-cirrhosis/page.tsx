import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { HeartHandshake, FileText, CheckCircle2 } from "lucide-react";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Liver Cirrhosis | OmShree Sidha Hospital",
  description: "Liver Cirrhosis is the result of advanced Liver disease, characterized by replacement of liver tissues by fibrosis and regenerative nodules.",
  alternates: {
    canonical: "/treatments/liver-cirrhosis",
  },
  openGraph: {
    title: "Liver Cirrhosis | OmShree Sidha Hospital",
    description: "Liver Cirrhosis is the result of advanced Liver disease, characterized by replacement of liver tissues by fibrosis and regenerative nodules.",
    url: "https://omshreeayur.com/treatments/liver-cirrhosis",
    images: [
      {
        url: "/images/treatments/liver-cirrhosis.jpg",
        width: 1200,
        height: 630,
        alt: "Liver Cirrhosis Treatment at Omshree Sidha Hospital",
      },
    ],
  },
};

export default function LiverCirrhosisTreatmentPage() {
  return (
    <div className="flex flex-col w-full bg-[#FDFBF7] font-sans">
      {/* 1. Hero Section */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%]">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/treatments" className="hover:text-[#66371B] transition-colors">Treatments</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Liver Cirrhosis</li>
            </ol>
          </nav>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
              Liver Cirrhosis
            </h1>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-xl">
            <Image 
              src="/images/treatments/liver-cirrhosis.jpg" 
              alt="Liver Cirrhosis" 
              fill 
              sizes="100vw"
              className="object-cover" 
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column: Long-form Editorial Content */}
            <div className="lg:col-span-2 space-y-16">
              
              <FadeIn>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    Liver Cirrhosis is the result of advanced Liver disease, characterized by replacement of liver tissues by fibrosis and regenerative nodules.  Cirrhosis of the liver refers to scarring of the liver which results in abnormal liver function as a consequence of chronic  liver injury. The causes of Liver Cirrhosis are Fatty liver, Hepatitis B and Hepatitis C, Alcoholism and other unknown reasons.   Fluid retention in the abdominal cavity is a common complication of cirrhosis.
                  </p>
                  <p>
                    In Omshree Sidha Hospital we have effective treatment for Liver cirrhosis and Fatty liver.  We have special medicines and treatment techniques, which will give you the best result in a short time itself.  Swelling,  fluid retention and related problems decrease gradually   You may improve daily and normally within one to three months time you will be much better. If the patients come before starting the fluid retention, the speed of recovery will be faster.
                  </p>
                  <p>
                    Our Liver cirrhosis treatment consists of panchakarma plus internal and external medicine.   In extreme severe cases (if the patient’s condition is not stable and requires regular fluid taping/removal) we will start with internal and external medicine, we can send it by courier/post.  Normally we admit the patients and starts panchakarma and other medicines together.  Duration of stay in the hospital depends upon how fast the patient is recovering.
                  </p>
                  <p>
                    We are using pure Ayurvedic medicines for the treatment of Liver Cirrhosis. If you do the liver function  test after 15 days you may understand that how fast you are improving.   You can watch that how fast SGPT, SGOT, Bilirubin etc…  getting normal
                  </p>
                </div>
              </FadeIn>

            </div>

            {/* Right Column: Global Lead Gen Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                <FadeIn delay={0.1}>
                  <div className="bg-white rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm overflow-hidden">
                    <div className="bg-[#66371B] p-8 text-white text-center">
                      <HeartHandshake className="h-10 w-10 mx-auto mb-4 text-[#E3D8C1]" />
                      <h3 className="font-heading font-normal text-3xl mb-2">Book a Consultation</h3>
                      <p className="text-[#E3D8C1] font-light text-sm">Get a clinical assessment by our expert physicians.</p>
                    </div>
                    <div className="p-8 space-y-4">
                      <Button render={<Link href="/patient-care/consultation" />} className="w-full">
                        Start Assessment
                      </Button>
                      <Button render={<Link href="https://wa.me/919846992789" target="_blank" />} variant="outline" className="w-full">
                        WhatsApp Us
                      </Button>
                      <p className="text-center text-xs text-[#81754B] font-light mt-4">
                        Or call us directly at <br/><strong className="text-[#66371B] font-medium">+91 4822229434</strong>
                      </p>
                    </div>
                  </div>
                </FadeIn>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
