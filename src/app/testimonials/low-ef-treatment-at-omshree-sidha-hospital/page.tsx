import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote, UserCircle, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonial: Low Ejection Fraction | Omshree Sidha Hospital",
  description: "Read about our patient's journey and successful recovery from Low Ejection Fraction (Low EF) with our Ayurvedic treatments.",
};

export default function LowEFTestimonialPage() {
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
                  <Link href="/conditions" className="hover:text-white transition-colors">Conditions</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/conditions/cardiovascular/low-ejection-fraction" className="hover:text-white transition-colors">Low EF</Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
              Patient Success Story
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
              Overcoming Low Ejection Fraction
            </h1>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed">
              Discover how our specialized Ayurvedic treatments helped restore heart function and vitality.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: TESTIMONIAL CONTENT */}
      <div className="w-full px-[4%] py-16 md:py-24 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#DBCFA8] relative">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-[#E3D8C1]/40" />
            
            <div className="relative z-10 space-y-8">
              
              <div className="flex items-center gap-4 border-b border-[#E3D8C1]/50 pb-8">
                <div className="w-16 h-16 rounded-full bg-[#F7F1E1] flex items-center justify-center">
                  <UserCircle className="w-10 h-10 text-[#81754B]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-[#66371B]">Our Patient's Journey</h3>
                  <p className="text-[#81754B]">Treated for Low Ejection Fraction (Low EF)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Heart Blocks Treatment Video */}
                <div className="w-full aspect-video bg-[#402816] rounded-2xl flex items-center justify-center overflow-hidden shadow-sm">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/U5sKJH0yCSM" 
                    title="HEART BLOCKS TREATMENT" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Ayurvedic Treatment Specialties Video */}
                <div className="w-full aspect-video bg-[#402816] rounded-2xl flex items-center justify-center overflow-hidden shadow-sm">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/PfE1e414PwY" 
                    title="Ayurvedic Treatment Specialties" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed space-y-6">
                <p>
                  <em className="text-[#66371B] font-medium text-xl">
                    "Please provide the text content for the testimonial here..."
                  </em>
                </p>
                <p>
                  [Placeholder] When I first arrived at Omshree Sidha Hospital, my Ejection Fraction was critically low. I was experiencing severe shortness of breath, fatigue, and could barely walk short distances without feeling completely exhausted. The doctors at my previous hospital had suggested very invasive procedures.
                </p>
                <p>
                  [Placeholder] After consulting with the team at Omshree, they created a personalized Ayurvedic treatment plan for me. The combination of special internal medicines, Abhyanga, and Hrudaya Basti was deeply healing. Within the first month, my breathing became significantly easier, and my energy levels started to return. 
                </p>
                <p>
                  [Placeholder] By the end of my treatment course, my EF had improved remarkably. I can now walk several kilometers without any difficulty, and I feel like I've gotten my life back. The care and attention from the staff were exceptional. I am deeply grateful for this natural, non-surgical recovery.
                </p>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-6">
              Begin Your Healing Journey Today
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button render={<Link href="/conditions/cardiovascular/low-ejection-fraction" />} variant="outline" size="lg" className="border-[#66371B] text-[#66371B] hover:bg-[#66371B] hover:text-white w-full sm:w-auto">
                Learn More About Low EF Treatment
              </Button>
              <Button render={<Link href="/patient-care/consultation" />} size="lg" className="w-full sm:w-auto">
                Book a Consultation
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
