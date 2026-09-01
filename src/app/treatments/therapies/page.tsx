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
    <div className="flex flex-col w-full font-sans overflow-hidden">

      <section className="bg-emerald-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center relative z-10">
          <nav className="flex justify-center text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
              <li><span>/</span></li>
              <li className="text-white font-medium">Therapies</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ayurvedic Therapies Directory
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            These traditional external and internal procedures form the building blocks of an individualized Ayurvedic treatment plan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          
          <div className="bg-blue-50 border border-blue-200 text-blue-800 p-8 rounded-xl mb-12 shadow-sm">
            <h2 className="font-heading font-bold text-xl mb-3">Therapies are Clinical Tools, Not Independent Cures</h2>
            <p className="text-base leading-relaxed">
              In clinical Ayurveda, a single therapy (like a massage) does not cure a disease. Therapies are clinical procedures prescribed by a physician in combination with internal medicines, dietary changes, and lifestyle management to restore health.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {therapies.map((therapy) => (
              <div key={therapy.slug} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all overflow-hidden flex flex-col">
                <div className="h-48 relative bg-slate-100">
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply z-10" />
                  <Image 
                    src={therapy.heroImage} 
                    alt={`Ayurvedic therapy procedure - ${therapy.name}`} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover" 
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{therapy.name}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1">
                    {therapy.shortDescription}
                  </p>
                  <Button render={<Link href={`/treatments/therapies/${therapy.slug}`} />} variant="outline" className="text-emerald-700 border-emerald-200 hover:bg-emerald-50 self-start">
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
