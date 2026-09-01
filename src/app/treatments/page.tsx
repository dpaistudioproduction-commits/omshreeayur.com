import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#F7F1E1]">

      {/* HERO SECTION */}
      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-20 text-center">
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
            Therapeutic Excellence
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
            Clinical Ayurvedic Treatments
          </h1>
          <p className="text-xl text-[#E3D8C1] font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            At Omshree Sidha Hospital, treatment is not a menu of services. It is a structured, medical process of restoring health through individualized assessment and traditional Ayurvedic protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button render={<Link href="/patient-care/consultation" />} size="lg" className="bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-8 h-14 font-bold shadow-lg border border-[#6F9940]/40">
              Book a Consultation
            </Button>
            <Button render={<Link href="/international-patients" />} variant="outline" size="lg" className="border-[#E3D8C1]/40 text-[#F7F1E1] hover:bg-white/10 rounded-full px-8 h-14 font-bold backdrop-blur-xs">
              International Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* HOW TREATMENT IS PLANNED */}
      <section className="py-24 bg-[#F7F1E1]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#517B32] mb-2 block">
              Medical Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#66371B] mb-4">How Treatment is Planned</h2>
            <p className="text-base sm:text-lg text-[#81754B] max-w-2xl mx-auto font-light">
              Your treatment journey is meticulously designed by our physicians based on your unique constitution (Prakriti) and the state of your disease.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#DBCFA8] flex flex-col items-center text-center space-y-3">
              <div className="h-14 w-14 rounded-full bg-[#E3D8C1] text-[#517B32] flex items-center justify-center border border-[#DBCFA8] shadow-xs">
                <ClipboardList className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#66371B]">1. Assessment</h3>
              <p className="text-xs sm:text-sm text-[#81754B] font-light leading-relaxed">A detailed evaluation of your medical history, modern diagnostics, and pulse (Nadi Pariksha).</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-[#DBCFA8] flex flex-col items-center text-center space-y-3">
              <div className="h-14 w-14 rounded-full bg-[#E3D8C1] text-[#517B32] flex items-center justify-center border border-[#DBCFA8] shadow-xs">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#66371B]">2. Planning</h3>
              <p className="text-xs sm:text-sm text-[#81754B] font-light leading-relaxed">The physician designs a highly specific protocol of internal medicines and dietary modifications.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DBCFA8] flex flex-col items-center text-center space-y-3">
              <div className="h-14 w-14 rounded-full bg-[#E3D8C1] text-[#517B32] flex items-center justify-center border border-[#DBCFA8] shadow-xs">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#66371B]">3. Therapies</h3>
              <p className="text-xs sm:text-sm text-[#81754B] font-light leading-relaxed">Specialized external therapies (like Panchakarma, Shirodhara, or Abhyanga) are integrated.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DBCFA8] flex flex-col items-center text-center space-y-3">
              <div className="h-14 w-14 rounded-full bg-[#E3D8C1] text-[#517B32] flex items-center justify-center border border-[#DBCFA8] shadow-xs">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#66371B]">4. Follow-up Care</h3>
              <p className="text-xs sm:text-sm text-[#81754B] font-light leading-relaxed">Continuous monitoring of your progress and adjustments to ensure long-term stability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT APPROACHES */}
      <section className="py-24 bg-[#E3D8C1]/40 border-t border-[#DBCFA8]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#517B32] mb-2 block">
              Clinical Specialities
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#66371B] mb-4">Our Treatment Approaches</h2>
            <p className="text-base sm:text-lg text-[#81754B] max-w-2xl font-light">
              Explore our specific clinical protocols for managing complex chronic diseases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment: any) => (
              <Card key={treatment.slug} className="border-[#DBCFA8] hover:border-[#517B32] hover:shadow-md transition-all flex flex-col bg-white overflow-hidden rounded-2xl">
                <div className="h-44 bg-[#E3D8C1] relative">
                   <Image 
                     src={treatment.hero.backgroundImageUrl} 
                     alt={`Clinical treatment approach for ${treatment.name}`} 
                     fill 
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className="object-cover" 
                   />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-xl text-[#66371B] mb-3">{treatment.name}</h3>
                  <p className="text-[#81754B] mb-6 flex-1 text-sm leading-relaxed font-light">
                    {treatment.quickAnswer.substring(0, 140)}...
                  </p>
                  <Button render={<Link href={`/treatments/${treatment.slug}`} />} variant="outline" className="text-[#517B32] border-[#517B32] w-full hover:bg-[#E3D8C1] rounded-full">
                    Read Treatment Approach
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE (Therapies, Conditions, Packages) */}
      <section className="py-24 bg-[#F7F1E1] border-t border-[#DBCFA8]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-xs">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-[#E3D8C1] text-[#517B32] flex items-center justify-center mb-6 border border-[#DBCFA8]">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#66371B] mb-3">Health Conditions Directory</h3>
                <p className="text-[#81754B] mb-6 text-sm leading-relaxed font-light">
                  View the comprehensive list of health conditions we manage, organized by medical specialty.
                </p>
                <Link href="/conditions" className="text-[#517B32] font-bold text-sm flex items-center group">
                  View Health Conditions <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-[#DBCFA8] bg-white rounded-2xl shadow-xs">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-[#E3D8C1] text-[#517B32] flex items-center justify-center mb-6 border border-[#DBCFA8]">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#66371B] mb-3">Therapies Directory</h3>
                <p className="text-[#81754B] mb-6 text-sm leading-relaxed font-light">
                  Learn about the clinical purpose of individual therapies like Abhyanga, Panchakarma, and Shirodhara.
                </p>
                <Link href="/treatments/therapies" className="text-[#517B32] font-bold text-sm flex items-center group">
                  Explore Therapies <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-12 bg-[#402816] text-[#E3D8C1]/80">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-light leading-relaxed">
            <strong className="text-[#E3D8C1]">Clinical Notice:</strong> A specific therapy or treatment program is only administered after a thorough clinical assessment by our Ayurvedic physicians. The information provided is for educational transparency and does not constitute a guaranteed medical prescription.
          </p>
        </div>
      </section>
      
    </div>
  );
}
