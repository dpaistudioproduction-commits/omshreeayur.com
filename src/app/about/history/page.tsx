import { Metadata } from "next";
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

      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <nav className="flex justify-center text-sm text-[#E3D8C1] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><span>/</span></li>
              <li className="text-[#B4833D] font-medium">History</li>
            </ol>
          </nav>
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
            Heritage & Lineage
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
            140+ Years of Healing Heritage
          </h1>
          <p className="text-xl text-[#E3D8C1] font-light leading-relaxed max-w-3xl mx-auto">
            A legacy of traditional Ayurvedic medicine preserved across three generations in the Marozhukayil family.
          </p>
        </div>
      </section>

      <section className="bg-[#E3D8C1]/40 py-12 border-b border-[#DBCFA8]">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xs border border-[#DBCFA8]">
            <h2 className="text-xl font-bold text-[#66371B] mb-3 flex items-center gap-2">
              <Info className="h-6 w-6 text-[#517B32]" />
              How long has Omshree been providing care?
            </h2>
            <p className="text-[#66371B]/90 text-lg leading-relaxed font-light">
              Our clinical heritage dates back to the 1880s. Founded by Sri Kochukutty Vaidhyar of the Marozhukayil family in Vayala, the practice began as a community service treating complex fractures, respiratory conditions, and skin diseases. Today, this unbroken lineage spans more than 140 years, evolving from a village practice into a modern Ayurvedic hospital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F1E1]">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          
          <div className="relative border-l-2 border-[#DBCFA8] pl-8 ml-4 md:ml-0 space-y-16 py-8">
            
            {/* Gen 1 */}
            <div className="relative">
              <div className="absolute w-6 h-6 bg-[#517B32] rounded-full -left-[45px] top-1 border-4 border-[#F7F1E1] shadow-xs"></div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#66371B] mb-2">The Founder: Sri Kochukutty Vaidhyar</h3>
              <p className="text-xs text-[#B4833D] font-bold tracking-widest uppercase mb-4">1880s</p>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  Sri Kochukutty Vaidhyar established the foundation of what would become Omshree Sidha Hospital. A deeply respected traditional healer, he viewed his medical practice as a sacred duty rather than a business. Patients from surrounding villages traveled to Vayala seeking his expertise in treating arthritis, fractures, and asthma using profound herbal knowledge.
                </p>
              </div>
            </div>

            {/* Gen 2 */}
            <div className="relative">
              <div className="absolute w-6 h-6 bg-[#517B32] rounded-full -left-[45px] top-1 border-4 border-[#F7F1E1] shadow-xs"></div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#66371B] mb-2">The Second Generation: Sri Audhan Vaidhyar</h3>
              <p className="text-xs text-[#B4833D] font-bold tracking-widest uppercase mb-4">Mid 20th Century</p>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  Sri Audhan Vaidhyar (M.M. Joseph) inherited his father's medical manuscripts and clinical acumen. He dedicated his life to serving the local community, preserving the precise formulations and ethical standards established by his father, and solidifying the Marozhukayil family's reputation in Kerala.
                </p>
              </div>
            </div>

            {/* Gen 3 */}
            <div className="relative">
              <div className="absolute w-6 h-6 bg-[#517B32] rounded-full -left-[45px] top-1 border-4 border-[#F7F1E1] shadow-xs"></div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#66371B] mb-2">Modern Evolution: Sri M.J. Jose</h3>
              <p className="text-xs text-[#B4833D] font-bold tracking-widest uppercase mb-4">Present Day</p>
              <div className="text-[#81754B] text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p>
                  Today, the legacy is led by his grandson, Sri M.J. Jose. Under his leadership, the practice was formalized into Omshree Sidha Hospital. Sri Jose has focused heavily on standardizing treatments for severe chronic diseases and holds multiple patents from the Government of India for his Ayurvedic innovations. He established the in-house GMP-certified pharmacy to ensure the uncompromising quality of the medicines used in patient care.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
