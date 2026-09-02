import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospital History & Heritage | Omshree Sidha Hospital",
  description: "Discover the 140+ year heritage of Omshree Sidha Hospital, founded in the 1880s by Sri Kochukutty Vaidhyar in Vayala, Kerala.",
};

export default function HistoryPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How old is Omshree Sidha Hospital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omshree Sidha Hospital has a heritage spanning over 140 years. It was founded in the 1880s by the respected healer Sri Kochukutty Vaidhyar of the Marozhukayil family in Vayala, Kerala."
      }
    }]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/about" className="hover:text-[#66371B] transition-colors">About</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Heritage</li>
            </ol>
          </nav>
          
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#B4833D]"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">Lineage</span>
            <span className="h-px w-8 bg-[#B4833D]"></span>
          </div>

          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            140+ Years of Healing Heritage
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto">
            A legacy of traditional Ayurvedic medicine preserved across three generations in the Marozhukayil family.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32 border-y border-[#DBCFA8]/30">
        <div className="w-full px-[4%] text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex justify-center items-center h-20 w-20 rounded-full bg-[#FDFBF7] border border-[#DBCFA8] text-[#B4833D] mb-10 shadow-sm">
              <Info className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-[#66371B] mb-8">
              How long has Omshree been providing care?
            </h2>
            <p className="text-[#81754B] text-lg md:text-xl leading-relaxed font-light">
              Our clinical heritage dates back to the <strong className="font-medium text-[#66371B]">1880s</strong>. Founded by Sri Kochukutty Vaidhyar of the Marozhukayil family in Vayala, the practice began as a community service treating complex fractures, respiratory conditions, and skin diseases. Today, this unbroken lineage spans more than <strong className="font-medium text-[#66371B]">140 years</strong>, evolving from a village practice into a modern Ayurvedic clinical hospital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#FDFBF7] relative">
        <div className="w-full px-[4%]">
          
          <div className="relative max-w-6xl mx-auto">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#DBCFA8] to-transparent transform -translate-x-1/2 opacity-80"></div>
            
            <div className="space-y-24 md:space-y-40">
              
              {/* Gen 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                {/* Node for Desktop */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FDFBF7] border-2 border-[#B4833D] rounded-full z-10 group-hover:bg-[#B4833D] group-hover:scale-150 transition-all duration-300 shadow-[0_0_0_6px_rgba(253,251,247,1)]"></div>
                
                {/* Image Side */}
                <div className="w-full md:w-1/3 lg:w-[30%] mb-10 md:mb-0">
                  <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-sm border border-[#DBCFA8]/30 group-hover:shadow-2xl transition-all duration-700 bg-white">
                    <Image
                      src="/images/doctors/Kochukutty Vaidyan .webp"
                      alt="Sri Kochukutty Vaidhyar"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 md:pl-10">
                  <p className="text-[10px] md:text-xs text-[#B4833D] font-bold tracking-[0.3em] uppercase mb-4">1880s • First Generation</p>
                  <h3 className="font-heading text-4xl sm:text-5xl font-normal text-[#66371B] mb-6">Sri Kochukutty Vaidhyar</h3>
                  <div className="w-16 h-px bg-[#DBCFA8] mb-8"></div>
                  <p className="text-[#81754B] text-base md:text-lg leading-relaxed font-light">
                    Sri Kochukutty Vaidhyar established the foundation of what would become Omshree Sidha Hospital. A deeply respected traditional healer, he viewed his medical practice as a sacred duty rather than a business. Patients from surrounding villages traveled to Vayala seeking his expertise in treating arthritis, fractures, and asthma using profound herbal knowledge.
                  </p>
                </div>
              </div>

              {/* Gen 2 (Reversed) */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FDFBF7] border-2 border-[#B4833D] rounded-full z-10 group-hover:bg-[#B4833D] group-hover:scale-150 transition-all duration-300 shadow-[0_0_0_6px_rgba(253,251,247,1)]"></div>
                
                <div className="w-full md:w-1/3 lg:w-[30%] mb-10 md:mb-0">
                  <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-sm border border-[#DBCFA8]/30 group-hover:shadow-2xl transition-all duration-700 bg-white">
                    <Image
                      src="/images/doctors/Audhan vaidyan .webp"
                      alt="Sri Audhan Vaidhyar"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 md:pr-10 text-left md:text-right flex flex-col md:items-end">
                  <p className="text-[10px] md:text-xs text-[#B4833D] font-bold tracking-[0.3em] uppercase mb-4">Mid 20th Century • Second Generation</p>
                  <h3 className="font-heading text-4xl sm:text-5xl font-normal text-[#66371B] mb-6">Sri Audhan Vaidhyar</h3>
                  <div className="w-16 h-px bg-[#DBCFA8] mb-8"></div>
                  <p className="text-[#81754B] text-base md:text-lg leading-relaxed font-light md:text-right">
                    Sri Audhan Vaidhyar (M.M. Joseph) inherited his father's medical manuscripts and clinical acumen. He dedicated his life to serving the local community, preserving the precise formulations and ethical standards established by his father, and solidifying the Marozhukayil family's clinical reputation in Kerala.
                  </p>
                </div>
              </div>

              {/* Gen 3 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FDFBF7] border-2 border-[#B4833D] rounded-full z-10 group-hover:bg-[#B4833D] group-hover:scale-150 transition-all duration-300 shadow-[0_0_0_6px_rgba(253,251,247,1)]"></div>
                
                <div className="w-full md:w-1/3 lg:w-[30%] mb-10 md:mb-0">
                  <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-sm border border-[#DBCFA8]/30 group-hover:shadow-2xl transition-all duration-700 bg-white">
                    <Image
                      src="/images/doctors/Jose M J .webp"
                      alt="Sri M.J. Jose"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 md:pl-10">
                  <p className="text-[10px] md:text-xs text-[#B4833D] font-bold tracking-[0.3em] uppercase mb-4">Present Day • Third Generation</p>
                  <h3 className="font-heading text-4xl sm:text-5xl font-normal text-[#66371B] mb-6">Sri M.J. Jose</h3>
                  <div className="w-16 h-px bg-[#DBCFA8] mb-8"></div>
                  <p className="text-[#81754B] text-base md:text-lg leading-relaxed font-light">
                    Under his leadership, the practice was formalized into Omshree Sidha Hospital. Sri Jose focused heavily on standardizing treatments for severe chronic diseases and holds multiple patents from the Government of India for his Ayurvedic innovations. He established the in-house GMP-certified pharmacy to ensure the uncompromising quality of medicines.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
