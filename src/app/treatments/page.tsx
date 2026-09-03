import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Stethoscope, Droplets, ArrowRight, ClipboardList, Activity, HeartHandshake } from "lucide-react";
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: "Clinical Ayurvedic Treatments & Care | Omshree Sidha Hospital",
  description: "Explore Omshree Sidha Hospital's clinical Ayurvedic treatment protocols, designed around individualized assessment, targeted therapies, and long-term care.",
};

export default function TreatmentsHubPage() {
  // Read treatments to display the verified ones
  const treatmentsDir = path.join(process.cwd(), 'src', 'data', 'treatments');
  const files = fs.existsSync(treatmentsDir) ? fs.readdirSync(treatmentsDir).filter(f => f.endsWith('.json')) : [];
  const treatments = files.map(file => {
    const content = fs.readFileSync(path.join(treatmentsDir, file), 'utf8');
    return JSON.parse(content);
  });

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">

      {/* HERO SECTION */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Treatments</li>
            </ol>
          </nav>
          <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-[#DBCFA8] text-[#517B32] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            Therapeutic Excellence
          </span>
          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            Clinical Ayurvedic Treatments
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            At Omshree Sidha Hospital, treatment is not a menu of services. It is a structured, medical process of restoring health through individualized assessment and traditional Ayurvedic protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button render={<Link href="/patient-care/consultation" />} size="lg" className="bg-[#66371B] hover:bg-[#B4833D] text-white rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
              Book a Consultation
            </Button>
            <Button render={<Link href="/international-patients" />} variant="outline" size="lg" className="border-[#DBCFA8] text-[#66371B] hover:bg-white bg-[#FDFBF7] rounded-full px-10 h-14 text-sm tracking-widest uppercase font-bold transition-colors w-full sm:w-auto">
              International Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* HOW TREATMENT IS PLANNED */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="text-center mb-16">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-4 block">
              Medical Process
            </span>
            <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#66371B] mb-6">How Treatment is Planned</h2>
            <p className="text-lg text-[#81754B] max-w-2xl mx-auto font-light leading-relaxed">
              Your treatment journey is meticulously designed by our physicians based on your unique constitution (Prakriti) and the state of your disease.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#FDFBF7] p-8 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-6 rounded-full bg-white text-[#517B32] flex items-center justify-center border border-[#DBCFA8] shadow-sm">
                <ClipboardList className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-2xl text-[#66371B] mb-4">1. Assessment</h3>
              <p className="text-base text-[#81754B] font-light leading-relaxed">A detailed evaluation of your medical history, modern diagnostics, and pulse (Nadi Pariksha).</p>
            </div>
            
            <div className="bg-[#FDFBF7] p-8 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-6 rounded-full bg-white text-[#517B32] flex items-center justify-center border border-[#DBCFA8] shadow-sm">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-2xl text-[#66371B] mb-4">2. Planning</h3>
              <p className="text-base text-[#81754B] font-light leading-relaxed">The physician designs a highly specific protocol of internal medicines and dietary modifications.</p>
            </div>

            <div className="bg-[#FDFBF7] p-8 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-6 rounded-full bg-white text-[#517B32] flex items-center justify-center border border-[#DBCFA8] shadow-sm">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-2xl text-[#66371B] mb-4">3. Therapies</h3>
              <p className="text-base text-[#81754B] font-light leading-relaxed">Specialized external therapies (like Panchakarma, Shirodhara, or Abhyanga) are integrated.</p>
            </div>

            <div className="bg-[#FDFBF7] p-8 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-6 rounded-full bg-white text-[#517B32] flex items-center justify-center border border-[#DBCFA8] shadow-sm">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-2xl text-[#66371B] mb-4">4. Follow-up Care</h3>
              <p className="text-base text-[#81754B] font-light leading-relaxed">Continuous monitoring of your progress and adjustments to ensure long-term stability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT APPROACHES */}
      <section className="py-24 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="mb-16 text-center">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-4 block">
              Clinical Specialities
            </span>
            <h2 className="font-heading font-normal text-4xl md:text-5xl text-[#66371B] mb-6">Our Treatment Approaches</h2>
            <p className="text-lg text-[#81754B] max-w-2xl mx-auto font-light leading-relaxed">
              Explore our specific clinical protocols for managing complex chronic diseases.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {treatments.map((treatment: any, index: number) => (
              <Link 
                key={treatment.slug} 
                href={`/treatments/${treatment.slug}`} 
                className="group relative bg-white rounded-[2rem] border border-[#DBCFA8]/50 hover:border-[#B4833D]/50 hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
              >
                {/* Thumbnail Image */}
                <div className="w-full h-48 relative bg-[#FDFBF7] overflow-hidden border-b border-[#DBCFA8]/30">
                  <div className="absolute inset-0 bg-[#66371B]/5 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <Image 
                     src={treatment.hero?.backgroundImageUrl || "/images/logo/logo.webp"} 
                     alt={`Clinical treatment approach for ${treatment.name}`} 
                     fill 
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                     className="object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                   {/* Number Badge */}
                   <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-sm text-[#B4833D] font-mono text-xs font-bold border border-[#DBCFA8]/30">
                     {String(index + 1).padStart(2, '0')}
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-1 relative z-10">
                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E3D8C1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <h3 className="font-heading font-normal text-xl text-[#66371B] mb-3 group-hover:text-[#517B32] transition-colors duration-300 relative z-10">
                    {treatment.name}
                  </h3>
                  
                  <p className="text-[#81754B] text-[13.5px] leading-relaxed font-light line-clamp-3 mb-6 flex-1 relative z-10">
                    {treatment.quickAnswer}
                  </p>

                  <div className="flex justify-between items-center relative z-10 mt-auto pt-4 border-t border-[#DBCFA8]/20">
                    <span className="text-[#517B32] text-xs font-bold uppercase tracking-widest group-hover:text-[#B4833D] transition-colors duration-300">
                      Explore Protocol
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FDFBF7] group-hover:bg-[#B4833D]/10 transition-colors duration-500">
                      <ArrowRight className="w-4 h-4 text-[#DBCFA8] group-hover:text-[#B4833D] group-hover:-rotate-45 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE (Therapies, Conditions, Packages) */}
      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-[#FDFBF7] p-10 rounded-[3rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col items-start">
              <div className="h-16 w-16 rounded-full bg-white text-[#517B32] flex items-center justify-center mb-8 border border-[#DBCFA8] shadow-sm">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-3xl text-[#66371B] mb-4">Health Conditions Directory</h3>
              <p className="text-[#81754B] mb-8 text-lg leading-relaxed font-light">
                View the comprehensive list of health conditions we manage, organized by medical specialty.
              </p>
              <Link href="/conditions" className="text-[#517B32] font-bold text-sm tracking-widest uppercase flex items-center group mt-auto">
                View Health Conditions <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-[#FDFBF7] p-10 rounded-[3rem] border border-[#DBCFA8]/50 shadow-sm flex flex-col items-start">
              <div className="h-16 w-16 rounded-full bg-white text-[#517B32] flex items-center justify-center mb-8 border border-[#DBCFA8] shadow-sm">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-normal text-3xl text-[#66371B] mb-4">Therapies Directory</h3>
              <p className="text-[#81754B] mb-8 text-lg leading-relaxed font-light">
                Learn about the clinical purpose of individual therapies like Abhyanga, Panchakarma, and Shirodhara.
              </p>
              <Link href="/treatments/therapies" className="text-[#517B32] font-bold text-sm tracking-widest uppercase flex items-center group mt-auto">
                Explore Therapies <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-12 bg-[#FDFBF7] border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] text-center">
          <p className="text-sm font-light text-[#81754B] leading-relaxed">
            <strong className="text-[#66371B] font-medium">Clinical Notice:</strong> A specific therapy or treatment program is only administered after a thorough clinical assessment by our Ayurvedic physicians. The information provided is for educational transparency and does not constitute a guaranteed medical prescription.
          </p>
        </div>
      </section>
      
    </div>
  );
}
