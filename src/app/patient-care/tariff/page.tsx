import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tariff & Pricing | Omshree Sidha Hospital",
  description: "View the transparent pricing and tariff structure for Ayurvedic hospital accommodation and standard treatments at Omshree Sidha Hospital, Kerala.",
};

export default function TariffPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      
      <section className="bg-emerald-900 text-white py-16 md:py-24">
        <div className="container px-[4%] max-w-5xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Hospital Tariff
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto">
            Transparent pricing for accommodation, food, and standard Ayurvedic therapies.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-[4%] max-w-4xl mx-auto">
          
          <div className="bg-amber-50 border border-amber-200 text-amber-900 p-6 rounded-xl mb-12">
            <h2 className="font-bold text-lg mb-2">Subject to Confirmation</h2>
            <p className="text-sm leading-relaxed">
              The prices listed below are indicative and subject to change. The final cost of your treatment will depend on the personalized plan created by your physician during consultation, including specific therapies, duration, and internal medications required.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Accommodation Table */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Accommodation (Per Day)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Room Type</th>
                      <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Price (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 border-b border-slate-200 text-slate-700">Non-A/C Standard Room</td>
                      <td className="p-4 border-b border-slate-200 text-slate-700 font-medium">₹ 1,500</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 border-b border-slate-200 text-slate-700">A/C Deluxe Room</td>
                      <td className="p-4 border-b border-slate-200 text-slate-700 font-medium">₹ 2,500</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 border-b border-slate-200 text-slate-700">Suite Room</td>
                      <td className="p-4 border-b border-slate-200 text-slate-700 font-medium">₹ 3,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Standard Therapies Table */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Standard Therapy Estimates (Per Session)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Therapy</th>
                      <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Estimated Price (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 border-b border-slate-200 text-slate-700">Abhyanga (General Massage)</td>
                      <td className="p-4 border-b border-slate-200 text-slate-700 font-medium">₹ 1,200 - ₹ 1,500</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 border-b border-slate-200 text-slate-700">Elakizhi (Leaf Poultice)</td>
                      <td className="p-4 border-b border-slate-200 text-slate-700 font-medium">₹ 1,800 - ₹ 2,200</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 border-b border-slate-200 text-slate-700">Shirodhara</td>
                      <td className="p-4 border-b border-slate-200 text-slate-700 font-medium">₹ 2,000 - ₹ 2,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                Note: Cost varies based on the specific medicated oils (Thailam) and herbs prescribed by the doctor.
              </p>
            </div>

          </div>

          <div className="mt-16 text-center">
            <Button render={<Link href="/contact" />} size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8">
              Enquire About Treatment Costs
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
