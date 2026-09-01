import { Award, ShieldCheck, Heart, Leaf } from "lucide-react";

interface TrustSignalProps {
  className?: string;
}

export function TrustSignals({ className = "" }: TrustSignalProps) {
  return (
    <section className={`bg-[#402816] py-6 sm:py-8 border-t border-[#66371B]/30 ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-[4%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          <div className="flex items-center gap-4 group">
            <div className="shrink-0 h-14 w-14 rounded-2xl bg-[#B4833D]/10 flex items-center justify-center border border-[#B4833D]/20 transition-transform duration-300 group-hover:scale-105">
              <Award className="h-6 w-6 text-[#B4833D]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-[#F7F1E1] text-sm uppercase tracking-wider mb-0.5">ISO 9001:2015</h4>
              <p className="text-xs text-[#E3D8C1]/70 font-light">Certified Hospital Quality</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="shrink-0 h-14 w-14 rounded-2xl bg-[#B4833D]/10 flex items-center justify-center border border-[#B4833D]/20 transition-transform duration-300 group-hover:scale-105">
              <ShieldCheck className="h-6 w-6 text-[#B4833D]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-[#F7F1E1] text-sm uppercase tracking-wider mb-0.5">140+ Years Heritage</h4>
              <p className="text-xs text-[#E3D8C1]/70 font-light">Traditional Kerala Lineage</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="shrink-0 h-14 w-14 rounded-2xl bg-[#B4833D]/10 flex items-center justify-center border border-[#B4833D]/20 transition-transform duration-300 group-hover:scale-105">
              <Leaf className="h-6 w-6 text-[#B4833D]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-[#F7F1E1] text-sm uppercase tracking-wider mb-0.5">GMP Pharmacy</h4>
              <p className="text-xs text-[#E3D8C1]/70 font-light">In-house Formulation Unit</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="shrink-0 h-14 w-14 rounded-2xl bg-[#B4833D]/10 flex items-center justify-center border border-[#B4833D]/20 transition-transform duration-300 group-hover:scale-105">
              <Heart className="h-6 w-6 text-[#B4833D]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-[#F7F1E1] text-sm uppercase tracking-wider mb-0.5">Clinical Ayurveda</h4>
              <p className="text-xs text-[#E3D8C1]/70 font-light">Targeted Chronic Disease Care</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
