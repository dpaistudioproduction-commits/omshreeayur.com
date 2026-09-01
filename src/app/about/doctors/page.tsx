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
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <nav className="flex justify-center text-sm text-[#E3D8C1] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><span>/</span></li>
              <li className="text-[#B4833D] font-medium">Doctors</li>
            </ol>
          </nav>
          <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
            Clinical Leadership
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
            Our Clinical Team & Physicians
          </h1>
          <p className="text-xl text-[#E3D8C1] font-light leading-relaxed max-w-3xl mx-auto">
            Experienced Ayurvedic practitioners dedicated to patient assessment, authentic formulation, and chronic disease management.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F7F1E1]">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          
          <div className="space-y-12">
            
            {/* Sri M.J. Jose */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-[#DBCFA8]">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <DoctorAvatar
                    name={sriJose.name}
                    initials={sriJose.initials}
                    imagePath={sriJose.imagePath}
                    altText={sriJose.altText}
                  />
                  <div className="bg-[#E3D8C1] border border-[#DBCFA8] text-[#66371B] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 mt-4">
                    <Award className="h-4 w-4 text-[#B4833D]" />
                    Govt. Patent Holder
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="font-heading text-3xl font-bold text-[#66371B] mb-2">Sri M.J. Jose</h2>
                  <p className="text-[#517B32] font-semibold text-sm uppercase tracking-wider mb-6">Hospital Director & Lead Ayurvedic Researcher</p>
                  <div className="text-[#81754B] text-base leading-relaxed font-light space-y-4">
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
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-[#DBCFA8]">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <DoctorAvatar
                    name={drJustin.name}
                    initials={drJustin.initials}
                    imagePath={drJustin.imagePath}
                    altText={drJustin.altText}
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="font-heading text-3xl font-bold text-[#66371B] mb-2">Dr. Justin M J</h2>
                  <p className="text-[#517B32] font-semibold text-sm uppercase tracking-wider mb-1">Ayurvedic Physician</p>
                  <p className="text-[#B4833D] font-mono text-xs font-bold mb-6">Qualifications: B.A.M.S.</p>
                  <div className="text-[#81754B] text-base leading-relaxed font-light space-y-4">
                    <p>
                      Dr. Justin combines the rigorous academic training of a Bachelor of Ayurvedic Medicine and Surgery (BAMS) with the extensive clinical exposure provided by the hospital's heritage. He plays a vital role in daily patient diagnosis (Nadi Pariksha), treatment protocol design, and the direct supervision of Panchakarma therapies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Susme M J */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-[#DBCFA8]">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <DoctorAvatar
                    name={drSusme.name}
                    initials={drSusme.initials}
                    imagePath={drSusme.imagePath}
                    altText={drSusme.altText}
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="font-heading text-3xl font-bold text-[#66371B] mb-2">Dr. Susme M J</h2>
                  <p className="text-[#517B32] font-semibold text-sm uppercase tracking-wider mb-1">Ayurvedic Physician</p>
                  <p className="text-[#B4833D] font-mono text-xs font-bold mb-6">Qualifications: B.A.M.S.</p>
                  <div className="text-[#81754B] text-base leading-relaxed font-light space-y-4">
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
