import { Metadata } from "next";
import Link from "next/link";
import { Info, Award } from "lucide-react";
import { DoctorAvatar } from "@/components/brand/DoctorAvatar";
import { BRAND_ASSETS } from "@/lib/brand-assets";

export const metadata: Metadata = {
  title: "Our Doctors & Specialists | Omshree Sidha Hospital",
  description: "Meet the verified Ayurvedic physicians at Omshree Sidha Hospital, combining traditional lineage with rigorous modern Ayurvedic (BAMS) qualifications.",
};

export default function DoctorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "name": "Sri M.J. Jose",
        "jobTitle": "Chief Ayurvedic Researcher & Hospital Director",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "Omshree Sidha Hospital"
        }
      },
      {
        "@type": "Physician",
        "name": "Dr. Justin M J",
        "jobTitle": "Ayurvedic Physician (BAMS)",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "Omshree Sidha Hospital"
        }
      },
      {
        "@type": "Physician",
        "name": "Dr. Susme M J",
        "jobTitle": "Ayurvedic Physician (BAMS)",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "Omshree Sidha Hospital"
        }
      }
    ]
  };

  const [sriJose, drJustin, drSusme] = BRAND_ASSETS.doctors;

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#FDFBF7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%] text-center">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/about" className="hover:text-[#66371B] transition-colors">About Us</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Doctors</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#B4833D]"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#B4833D]">Clinical Leadership</span>
            <span className="h-px w-8 bg-[#B4833D]"></span>
          </div>

          <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
            Our Clinical Team & Physicians
          </h1>
          <p className="text-lg md:text-xl text-[#81754B] font-light leading-relaxed max-w-3xl mx-auto">
            Experienced Ayurvedic practitioners dedicated to patient assessment, authentic formulation, and chronic disease management.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%]">
          
          <div className="space-y-16">
            
            {/* Sri M.J. Jose */}
            <div className="bg-[#FDFBF7] p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-[#DBCFA8]/50 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <DoctorAvatar
                    name={sriJose.name}
                    initials={sriJose.initials}
                    imagePath={sriJose.imagePath}
                    altText={sriJose.altText}
                  />
                  <div className="bg-white border border-[#DBCFA8] text-[#B4833D] text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-full flex items-center gap-2 mt-8 shadow-xs">
                    <Award className="h-4 w-4" />
                    Govt. Patent Holder
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h2 className="font-heading text-4xl md:text-5xl font-normal text-[#66371B] mb-3">Sri M.J. Jose</h2>
                  <p className="text-[10px] md:text-xs text-[#517B32] font-bold tracking-[0.3em] uppercase mb-8">Hospital Director & Lead Ayurvedic Researcher</p>
                  <div className="w-12 h-px bg-[#DBCFA8] mb-8 mx-auto md:mx-0"></div>
                  <div className="text-[#81754B] text-base lg:text-lg leading-relaxed font-light space-y-6">
                    <p>
                      As the third-generation custodian of the Marozhukayil family's healing heritage, Sri M.J. Jose leads Omshree Sidha Hospital. He brings decades of practical experience and deep knowledge of classical formulations inherited from his grandfather.
                    </p>
                    <p>
                      Sri Jose is particularly recognized for his ongoing research into Ayurvedic disease management for complex conditions such as asthma, diabetes, and arthritis. In recognition of his innovative formulations, he has been awarded multiple patents by the Government of India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Justin M J */}
            <div className="bg-[#FDFBF7] p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-[#DBCFA8]/50 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <DoctorAvatar
                    name={drJustin.name}
                    initials={drJustin.initials}
                    imagePath={drJustin.imagePath}
                    altText={drJustin.altText}
                  />
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h2 className="font-heading text-4xl md:text-5xl font-normal text-[#66371B] mb-3">Dr. Justin M J</h2>
                  <p className="text-[10px] md:text-xs text-[#517B32] font-bold tracking-[0.3em] uppercase mb-2">Ayurvedic Physician</p>
                  <p className="text-[10px] text-[#B4833D] font-bold tracking-[0.2em] uppercase mb-8">B.A.M.S.</p>
                  <div className="w-12 h-px bg-[#DBCFA8] mb-8 mx-auto md:mx-0"></div>
                  <div className="text-[#81754B] text-base lg:text-lg leading-relaxed font-light space-y-6">
                    <p>
                      Dr. Justin combines the rigorous academic training of a Bachelor of Ayurvedic Medicine and Surgery (BAMS) with the extensive clinical exposure provided by the hospital's heritage. He plays a vital role in daily patient diagnosis (Nadi Pariksha), treatment protocol design, and the direct supervision of Panchakarma therapies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Susme M J */}
            <div className="bg-[#FDFBF7] p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-[#DBCFA8]/50 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <DoctorAvatar
                    name={drSusme.name}
                    initials={drSusme.initials}
                    imagePath={drSusme.imagePath}
                    altText={drSusme.altText}
                  />
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h2 className="font-heading text-4xl md:text-5xl font-normal text-[#66371B] mb-3">Dr. Susme M J</h2>
                  <p className="text-[10px] md:text-xs text-[#517B32] font-bold tracking-[0.3em] uppercase mb-2">Ayurvedic Physician</p>
                  <p className="text-[10px] text-[#B4833D] font-bold tracking-[0.2em] uppercase mb-8">B.A.M.S.</p>
                  <div className="w-12 h-px bg-[#DBCFA8] mb-8 mx-auto md:mx-0"></div>
                  <div className="text-[#81754B] text-base lg:text-lg leading-relaxed font-light space-y-6">
                    <p>
                      Dr. Susme is a qualified Ayurvedic physician (BAMS) dedicated to holistic patient care. She is involved in detailed clinical assessments, managing in-patient recovery, and ensuring that all dietary and therapeutic protocols are strictly followed according to classical Ayurvedic principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
