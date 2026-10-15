import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Omshree Sidha Hospital",
  description: "Read our latest articles and insights on Ayurveda, heart health, and holistic treatments at Omshree Sidha Hospital.",
};

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden min-h-screen bg-[#F7F1E1]">
      <section className="bg-[#402816] text-[#F7F1E1] py-16 md:py-24 relative overflow-hidden">
        <div className="w-full px-[4%] relative z-20">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-[#E3D8C1] font-light max-w-2xl">
            Insights on classical Ayurveda, holistic healing, and natural care.
          </p>
        </div>
      </section>

      <section className="w-full px-[4%] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Article Card */}
          <Link href="/blog/what-is-ejection-fraction-and-what-does-it-tell-you-about-heart-function" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[#DBCFA8] hover:shadow-md transition-shadow">
            <div className="relative h-64 w-full overflow-hidden">
              <Image 
                src="/images/blog/ef-featured-image.png"
                alt="Heart anatomy illustration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold uppercase tracking-wider text-[#517B32] mb-3">
                Heart Health
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-3 group-hover:text-[#517B32] transition-colors">
                What Is Ejection Fraction and What Does It Tell You About Heart Function?
              </h2>
              <p className="text-[#81754B] text-sm leading-relaxed mb-6 flex-grow">
                Learn what ejection fraction means for your heart function, its causes, symptoms, and how Ayurvedic treatments can naturally improve it.
              </p>
              <div className="mt-auto flex items-center text-[#517B32] font-semibold text-sm">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Article Card: What Is an Echocardiogram */}
          <Link href="/blog/what-is-an-echocardiogram" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[#DBCFA8] hover:shadow-md transition-shadow">
            <div className="relative h-64 w-full overflow-hidden">
              <Image 
                src="/images/blog/echo-procedure-photo.jpg"
                alt="Clinical echocardiogram examination with ultrasound monitor and probe"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold uppercase tracking-wider text-[#517B32] mb-3">
                Cardiology Diagnostics
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-3 group-hover:text-[#517B32] transition-colors">
                What Is an Echocardiogram? A Patient-Friendly Guide to Your Echo Report
              </h2>
              <p className="text-[#81754B] text-sm leading-relaxed mb-6 flex-grow">
                Understand how a 2D echocardiogram works, how ejection fraction (EF) is measured, what chamber dimensions mean, and key questions to ask your doctor.
              </p>
              <div className="mt-auto flex items-center text-[#517B32] font-semibold text-sm">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Article Card: How to Stop Snoring Naturally */}
          <Link href="/blog/how-to-stop-snoring-naturally-without-surgery" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[#DBCFA8] hover:shadow-md transition-shadow">
            <div className="relative h-64 w-full overflow-hidden">
              <Image 
                src="/images/blog/snoring-remedies-hero.jpg"
                alt="How to stop snoring naturally without surgery with lifestyle and Ayurvedic remedies"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold uppercase tracking-wider text-[#517B32] mb-3">
                Sleep Health &amp; Ayurveda
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-3 group-hover:text-[#517B32] transition-colors">
                How to Stop Snoring Naturally Without Surgery: Causes, Remedies and Ayurvedic Relief?
              </h2>
              <p className="text-[#81754B] text-sm leading-relaxed mb-6 flex-grow">
                Explore common causes of snoring, simple non-surgical lifestyle remedies, and how personalized Ayurvedic care supports clearer breathing during sleep.
              </p>
              <div className="mt-auto flex items-center text-[#517B32] font-semibold text-sm">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Article Card: Can Liver Cirrhosis Be Managed with Ayurveda? */}
          <Link href="/blog/can-liver-cirrhosis-be-managed-with-ayurveda" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-[#DBCFA8] hover:shadow-md transition-shadow">
            <div className="relative h-64 w-full overflow-hidden">
              <Image 
                src="/images/blog/liver-cirrhosis-ayurveda-hero.jpg"
                alt="Can liver cirrhosis be managed with Ayurveda - holistic liver support"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold uppercase tracking-wider text-[#517B32] mb-3">
                Liver Health &amp; Ayurveda
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#66371B] mb-3 group-hover:text-[#517B32] transition-colors">
                Can Liver Cirrhosis Be Managed with Ayurveda? Understanding the Approach
              </h2>
              <p className="text-[#81754B] text-sm leading-relaxed mb-6 flex-grow">
                Learn how Ayurveda may support liver cirrhosis management through personalized diet, metabolic regulation, and traditional therapies alongside medical care.
              </p>
              <div className="mt-auto flex items-center text-[#517B32] font-semibold text-sm">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
