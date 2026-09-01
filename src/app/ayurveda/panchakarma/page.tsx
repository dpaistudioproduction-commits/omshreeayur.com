import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Understanding Panchakarma | Omshree Sidha Hospital",
  description: "Learn about Panchakarma, the traditional Ayurvedic detoxification therapies, and how they are administered under strict clinical supervision.",
};

export default function PanchakarmaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is Panchakarma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Panchakarma is a comprehensive system of deep cleansing and purification therapies in Ayurveda. It consists of five primary actions designed to safely eliminate deep-rooted metabolic toxins (Ama) from the body and restore balance to the Doshas."
      }
    }]
  };

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-emerald-900 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <nav className="flex justify-center text-sm text-emerald-200 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/ayurveda" className="hover:text-white transition-colors">Ayurveda</Link></li>
              <li><span>/</span></li>
              <li className="text-white font-medium">Panchakarma</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Panchakarma Therapy
          </h1>
          <p className="text-xl text-emerald-100 font-light leading-relaxed max-w-3xl mx-auto">
            Clinical purification and detoxification supervised by experienced Ayurvedic physicians.
          </p>
        </div>
      </section>

      <section className="bg-emerald-50 py-12 border-b border-emerald-100">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-emerald-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-emerald-600" />
              What is Panchakarma?
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Panchakarma (meaning "five actions") is the cornerstone of Ayurvedic purification. It is a highly structured, intense detoxification process designed to clear deep-rooted metabolic toxins (Ama) and correct Dosha imbalances. It involves preparatory procedures (Purvakarma), the main cleansing procedures (Pradhana Karma), and post-therapy care (Paschat Karma).
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="prose prose-emerald max-w-none text-slate-700 text-lg leading-relaxed space-y-8">
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl flex items-start gap-4">
              <ShieldAlert className="h-8 w-8 text-red-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-900 mt-0 mb-2">Important Medical Context</h3>
                <p className="text-red-800 text-base m-0">
                  Panchakarma is a powerful clinical intervention, not a spa treatment. It is not suitable for everyone. Administration requires strict medical supervision, careful assessment of the patient's strength (Bala), and precise dietary control. Not all five therapies are given to every patient; treatments are selected based on individual diagnosis.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Three Stages of Panchakarma</h2>
              
              <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-2">1. Purvakarma (Preparation)</h3>
              <p>Before purification, the body must be prepared to release toxins. This involves <em>Snehana</em> (internal and external oleation/oil therapies) and <em>Swedana</em> (therapeutic sweating) to loosen toxins and mobilize them toward the digestive tract.</p>

              <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-2">2. Pradhana Karma (Main Action)</h3>
              <p>The primary cleansing therapies. Depending on the condition, a physician may prescribe one or more of the following:</p>
              <ul>
                <li><strong>Vamana:</strong> Therapeutic emesis (controlled vomiting) primarily for Kapha disorders.</li>
                <li><strong>Virechana:</strong> Therapeutic purgation, highly effective for Pitta disorders.</li>
                <li><strong>Basti:</strong> Medicated enemas (oil or decoction) crucial for Vata disorders and gut health.</li>
                <li><strong>Nasya:</strong> Nasal administration of medicines for conditions above the collarbone.</li>
                <li><strong>Raktamokshana:</strong> Bloodletting therapy (rarely performed, only under specific clinical indications).</li>
              </ul>

              <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-2">3. Paschat Karma (Post-Therapy Care)</h3>
              <p>Following detoxification, the digestive fire (Agni) is weak. Strict dietary regimens (Samsarjana Krama) and lifestyle modifications are mandatory to safely restore strength and maximize the benefits of the therapy.</p>
            </div>

            <div className="mt-16 text-center border-t border-slate-100 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Is Panchakarma Right For You?</h2>
              <p className="mb-8">Suitability for Panchakarma can only be determined after a detailed consultation and pulse diagnosis.</p>
              <Button render={<Link href="/contact" />} size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8">
                Consult Our Doctors
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
