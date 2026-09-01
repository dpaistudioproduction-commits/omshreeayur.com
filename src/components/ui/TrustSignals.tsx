import { Award, ShieldCheck, Heart, Leaf } from "lucide-react";

interface TrustSignalProps {
  className?: string;
}

export function TrustSignals({ className = "" }: TrustSignalProps) {
  return (
    <section className={`border-y border-[#DBCFA8] bg-[#F7F1E1] py-8 ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="h-12 w-12 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center mb-3 shadow-xs">
              <Award className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-[#66371B] text-sm uppercase tracking-wider mb-1">ISO 9001:2015</h4>
            <p className="text-xs text-[#81754B]">Certified Hospital Quality</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="h-12 w-12 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center mb-3 shadow-xs">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-[#66371B] text-sm uppercase tracking-wider mb-1">140+ Years Heritage</h4>
            <p className="text-xs text-[#81754B]">Traditional Kerala Lineage</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="h-12 w-12 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center mb-3 shadow-xs">
              <Leaf className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-[#66371B] text-sm uppercase tracking-wider mb-1">GMP Pharmacy</h4>
            <p className="text-xs text-[#81754B]">In-house Formulation Unit</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="h-12 w-12 rounded-full bg-[#E3D8C1] text-[#517B32] border border-[#DBCFA8] flex items-center justify-center mb-3 shadow-xs">
              <Heart className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-[#66371B] text-sm uppercase tracking-wider mb-1">Clinical Ayurveda</h4>
            <p className="text-xs text-[#81754B]">Targeted Chronic Disease Care</p>
          </div>

        </div>
      </div>
    </section>
  );
}
