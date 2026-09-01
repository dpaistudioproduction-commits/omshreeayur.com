import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { therapies } from "@/data/therapies";

export const metadata: Metadata = {
  title: "Ayurvedic Therapies Directory | Omshree Sidha Hospital",
  description: "A comprehensive guide to the traditional Ayurvedic therapies administered at Omshree Sidha Hospital, including Abhyanga, Kizhi, and Basti.",
};

export default function TherapiesHubPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">

      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full max-w-[1440px] mx-auto px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/treatments" className="hover:text-[#66371B] transition-colors">Treatments</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Therapies</li>
            </ol>
          </nav>
          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            Ayurvedic Therapies Directory
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto mb-8">
            These traditional external and internal procedures form the building blocks of an individualized Ayurvedic treatment plan.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full max-w-[1440px] mx-auto px-[4%]">
          
          <div className="bg-[#FDFBF7] border border-[#DBCFA8]/50 p-10 md:p-14 rounded-[3.5rem] mb-16 shadow-sm text-center">
            <h2 className="font-heading font-normal text-3xl md:text-4xl text-[#66371B] mb-6">Therapies are Clinical Tools, Not Independent Cures</h2>
            <p className="text-lg text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto">
              In clinical Ayurveda, a single therapy (like a massage) does not cure a disease. Therapies are clinical procedures prescribed by a physician in combination with internal medicines, dietary changes, and lifestyle management to restore health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapies.map((therapy) => (
              <div key={therapy.slug} className="bg-white rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col">
                <div className="h-56 relative bg-[#FDFBF7]">
                  <div className="absolute inset-0 bg-[#66371B]/10 mix-blend-multiply z-10" />
                  <Image 
                    src={therapy.heroImage} 
                    alt={`Ayurvedic therapy procedure - ${therapy.name}`} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover" 
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="font-heading font-normal text-3xl text-[#66371B] mb-4">{therapy.name}</h3>
                  <p className="text-[#81754B] font-light text-lg leading-relaxed mb-8 flex-1">
                    {therapy.shortDescription}
                  </p>
                  <Button render={<Link href={`/treatments/therapies/${therapy.slug}`} />} variant="outline" className="border-[#DBCFA8] text-[#66371B] hover:bg-[#FDFBF7] rounded-full px-8 h-12 text-xs tracking-widest uppercase font-bold self-start transition-colors">
                    Read Therapy Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
    </div>
  );
}
