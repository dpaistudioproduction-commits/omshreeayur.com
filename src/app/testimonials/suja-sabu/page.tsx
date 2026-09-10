import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Migraine Treatment Success Story | Suja Sabu | Omshree Sidha Hospital",
  description: "Watch Suja Sabu's inspiring video testimonial about her successful Ayurvedic treatment for migraine at Omshree Sidha Hospital.",
};

export default function SujaSabuTestimonialPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#402816] text-[#F7F1E1] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#66371B] rounded-full blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/3" />
        <div className="w-full px-[4%] relative z-20">
          
          <Link href="/testimonials" className="inline-flex items-center gap-2 text-[#E3D8C1] hover:text-white transition-colors mb-8 text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Testimonials
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
              Patient Success Story
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-[#F7F1E1] leading-tight">
              Suja Sabu's Journey: Overcoming Severe Migraines
            </h1>
            <p className="text-xl text-[#E3D8C1] font-light max-w-2xl">
              Discover how traditional Ayurvedic and Siddha treatments provided lasting relief from chronic migraines.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="w-full px-[4%]">
          <div className="max-w-4xl mx-auto">
            
            {/* White Card Container */}
            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-[#DBCFA8]">
              
              {/* Video Embed */}
              <div className="w-full aspect-video bg-[#402816] rounded-2xl flex items-center justify-center overflow-hidden shadow-sm mb-12">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/nLY08u7eUns" 
                  title="Suja Sabu Testimonial - Migraine Treatment" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Text Content */}
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#DBCFA8]/30 rotate-180" />
                
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed space-y-6 relative z-10 pl-6 border-l-2 border-[#DBCFA8]/50">
                  <p>
                    Watch the video above to hear directly from Suja Sabu about her experience at Omshree Sidha Hospital. Struggling with severe and debilitating migraines that disrupted her daily life, she turned to our specialized Ayurvedic protocols.
                  </p>
                  <p>
                    Through a personalized combination of internal herbal medicines and external therapies, our doctors worked to address the root cause of her condition rather than just suppressing the symptoms. Today, she shares her story of natural recovery and restored well-being.
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
