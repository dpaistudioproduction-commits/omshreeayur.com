import { Metadata } from "next";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials & Videos | Omshree Sidha Hospital",
  description: "Watch video testimonials and learn about our Ayurvedic treatments at Omshree Sidha Hospital.",
};

const VIDEOS = [
  { id: "PfE1e414PwY", title: "Ayurveda Treatment Specialties" },
  { id: "rtWJ4UpaIVQ", title: "Ayurvedic Treatment Overview" },
  { id: "vJY0Gf4Fz4w", title: "Crohn's Disease Treatment" },
  { id: "U5sKJH0yCSM", title: "Heart Blocks Treatment" },
  { id: "7crZwzsadIA", title: "Specialties Treatments in Ayurveda" },
  { id: "nLY08u7eUns", title: "Ulcerative Colitis, Fissure, Migraine Treatment" },
  { id: "cQVupbM5Apk", title: "Varicose Vein Treatment" },
  { id: "wvWXH1VOUc0", title: "Psoriasis Treatment" },
];

export default function TestimonialsPage() {
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
                  <span className="text-[#E3D8C1]/80">Testimonials</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
              Patient Success Stories
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
              Video Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed">
              Watch real stories from our patients and learn about our specialized Ayurvedic treatments directly from our clinical team.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: VIDEO GRID */}
      <div className="w-full px-[4%] py-16 md:py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {VIDEOS.map((video) => (
              <div key={video.id} className="flex flex-col space-y-4">
                <div className="w-full aspect-video bg-[#402816] rounded-2xl flex items-center justify-center overflow-hidden shadow-sm group relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full relative z-20"
                  ></iframe>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#66371B] leading-tight">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
