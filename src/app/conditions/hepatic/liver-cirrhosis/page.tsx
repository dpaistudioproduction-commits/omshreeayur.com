import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Understanding Liver Cirrhosis and Advanced Hepatic Function | Omshree Sidha Hospital",
  description: "Advanced Ayurvedic Approach to Liver Cirrhosis at Omshree Sidha Hospital.",
};

export default function LiverCirrhosisPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#F7F1E1]">
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
                  <Link href="/conditions" className="hover:text-white transition-colors">Conditions</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/conditions/hepatic" className="hover:text-white transition-colors">Hepatic</Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-[#F7F1E1] leading-tight">
              Understanding Liver Cirrhosis and Advanced Hepatic Function
            </h1>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-6">
              Liver cirrhosis is a long-term condition in which healthy liver tissue gradually becomes scarred due to ongoing liver damage. As the scarring increases, the liver may find it harder to carry out some of its important functions, such as processing nutrients, filtering substances from the blood, and supporting digestion. Cirrhosis can develop for different reasons, including chronic liver disease, viral hepatitis, alcohol-related liver damage, or fatty liver disease. As the extensive scarring gradually blocks the flow of blood through the organ, the liver loses its ability to perform critical life-sustaining functions—including filtering environmental toxins, synthesizing vital blood-clotting proteins, and processing crucial nutrients.
            </p>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-10">
              While early-stage cirrhosis typically shows no symptoms, advanced or "decompensated" stages manifest in severe complications like severe abdominal fluid buildup (ascites), yellowing of the eyes and skin (jaundice), easy bruising, and mental confusion caused by toxin
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button render={<Link href="/patient-care/consultation" />} size="lg" className="w-full sm:w-auto text-[#402816] bg-[#F7F1E1] hover:bg-[#E3D8C1]">
                Book a Consultation
              </Button>
              <Button render={<a href="https://wa.me/919846992789" target="_blank" rel="noreferrer" />} variant="glass" size="lg" className="w-full sm:w-auto">
                <span className="flex items-center justify-center"><MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" /> WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-[4%] py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            <section id="reclaiming-health" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Reclaiming Your Health: A Generational Approach to True Liver Recovery
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Our Living Legacy of Care</h3>
                  <div className="text-[#402816] text-lg leading-relaxed font-light space-y-4">
                    <p>Deep, lasting healing often relies on time-tested wisdom that cannot be found in standard textbooks alone. At our centre, the accumulated medical knowledge and experience of generations is carefully and consciously preserved and passed down, allowing us to treat complex conditions like liver cirrhosis with remarkable depth, safety, and efficiency.</p>
                    <p>Today, our third-generation Vaidyas and fourth-generation doctors work side-by-side at Omshree Sidha Hospital. By seamlessly uniting timeless Ayurvedic mastery with contemporary modern medical insights, our family ensures that you receive a highly advanced, integrated care protocol dedicated entirely to one goal: helping your liver recover naturally and completely.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Understanding Your Path to Liver Regeneration</h3>
                  <div className="text-[#402816] text-lg leading-relaxed font-light space-y-4">
                    <p>When facing a diagnosis of liver cirrhosis, it is crucial to understand all of your available choices. Modern medical approaches primarily focus on slowing down the progression of the disease rather than reversing it, often presenting a liver transplant as the only final option. However, as many families discover, securing a matching donor is an incredibly difficult challenge, and the financial and emotional toll of a transplant can be overwhelming.</p>
                    <p>You do not have to wait until you feel helpless. The human liver possesses an incredible, unique ability to regenerate—and our generational therapies are specifically formulated to stimulate and accelerate this natural regeneration process.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Why Early Intervention Changes Everything</h3>
                  <div className="text-[#402816] text-lg leading-relaxed font-light space-y-4">
                    <p>The timeline and predictability of your healing journey depend heavily on how early you begin the treatment, particularly concerning ascites (fluid accumulation):</p>
                    <div className="bg-[#E3D8C1]/30 p-6 rounded-2xl border border-[#DBCFA8] space-y-4">
                      <p><strong>Early Intervention:</strong> If you reach out to us as soon as you are diagnosed—especially while abdominal fluid retention is still mild or moderate—treating and recovering your liver is a highly predictable path. Most early-stage patients see profound structural recovery within 3 to 6 months.</p>
                      <p><strong>A Safe, Integrative Care Pathway:</strong> For your absolute peace of mind, you do not have to stop your current treatments. You can safely continue your modern medications in parallel with our natural remedies until your liver functions have fully recovered.</p>
                      <p><strong>The Risk of Delay:</strong> Once liver damage becomes severe and requires physical tapping (draining), the window for a fast, straightforward recovery becomes smaller and more complex by the day. Take a Wise Step for Your Health Today.</p>
                    </div>
                    <p>Our sole intention is to help you heal completely before your liver faces severe, irreversible complications. We encourage you to make a proactive, wise decision for your health and your family. Reach out to our expert doctors today and let our family's multi-generational medical heritage guide you safely back to health.</p>
                    <p>From an Ayurvedic perspective, liver health is closely connected with digestion, metabolism and the body's natural balance. Liver cirrhosis is a serious condition in which prolonged liver injury can lead to progressive scarring and reduced liver function Ayurvedic care may focus on supporting digestion, maintaining nourishment and promoting overall well-being through appropriate diet, lifestyle guidance and carefully selected therapies under qualified professional supervision. Since cirrhosis can be a complex and serious condition, Ayurvedic care should be individualized and used alongside appropriate medical evaluation and monitoring, which can be done through blood tests and Fibro scan tests.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="ayurvedic-approach" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Ayurvedic approach of Liver cirrhosis treatment at Omshree Sidha Hospital
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Generations of Wisdom, Working for Your Health</h3>
                  <div className="text-[#402816] text-lg leading-relaxed font-light space-y-4">
                    <p>Deep healing often relies on time-tested wisdom. At Omshree Sidha Hospital. the accumulated knowledge of generations is carefully and consciously passed down, allowing us to treat complex conditions like liver cirrhosis with remarkable depth and efficiency. Today, our third-generation Vaidyas and fourth-generation doctors work together. By blending ancient Ayurvedic mastery with modern medical expertise, we ensure that you receive the absolute best care possible, rooted in a legacy of true healing. We choose medicines and panchakarma therapies according to patient's condition.</p>
                    <p><strong>Tailored Therapies for Optimal Recovery</strong><br/>To ensure the highest standard of care, we customize our prescriptions based entirely on each patient's unique health profile. Our treatments utilize a precise combination of classical Ayurvedic remedies, certified patent medicines, our own proprietary medicines and special formulations, ensuring a highly targeted approach to your recovery.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="root-cause-recovery" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Comprehensive Root-Cause Recovery for Liver Cirrhosis
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light space-y-6">
                <p>Did you know that the liver is the only organ in the human body capable of completely regenerating itself? Our specialized Ayurvedic treatment focuses on unlocking this natural healing power of the Liver, to accelerate liver tissue repair and regeneration.</p>
                
                <div>
                  <p className="font-bold text-[#66371B] mb-2">Why Early Intervention Matters</p>
                  <p>The timeline and ease of your recovery depend heavily on how early you begin treatment, particularly concerning ascites (fluid accumulation):</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Mild to Moderate Ascites:</strong> If you reach us before fluid buildup becomes severe, recovery is significantly faster, safer, and highly predictable.</li>
                    <li><strong>Severe Ascites:</strong> When fluid accumulation becomes severe and requires medical tapping (draining), treatment becomes considerably more complex. While these advanced cases are more challenging to treat, we still offer specialized outpatient support. If patients strictly follow our expert medical guidelines and once the condition stabilize, they may later qualify for inpatient therapies to boost their recovery.</li>
                  </ul>
                </div>

                <div className="bg-[#F7F1E1] p-6 rounded-2xl border border-[#B4833D] space-y-4 mt-8">
                  <p className="font-bold text-[#66371B] text-xl mb-4">Our Structured 28-Day Inpatient Program</p>
                  <p>For patients with mild to moderate conditions, we recommend a focused 28-day residential treatment stay. We monitor your healing journey step-by-step through weekly blood tests:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-4"><span className="font-bold text-[#517B32] min-w-[100px]">Weeks 1 & 2:</span> Watch your liver enzyme markers (Bilirubin, SGPT, and SGOT) safely decline day by day.</li>
                    <li className="flex gap-4"><span className="font-bold text-[#517B32] min-w-[100px]">Weeks 3 & 4:</span> See your platelet counts naturally begin to rise, signalling systemic recovery.</li>
                    <li className="flex gap-4"><span className="font-bold text-[#517B32] min-w-[100px]">Before Discharge:</span> We guide you can have a Fibro scan to physically document the reduction of scar tissue.</li>
                  </ul>
                </div>

                <p className="mt-6">Over a full course of 3 to 6 months, your liver cells can completely regenerate, gradually melting away scar tissue and restoring normal, healthy liver function. Patients have to continue medicines for one year.</p>
                <p>The Ayurvedic approach to managing Liver Cirrhosis (Yakrit Vikara / Kumbha Kamala) focuses on clearing deep-seated toxins, protecting liver cells, and stimulating tissue regeneration.</p>
              </div>
            </section>

            <section id="managing-liver-cirrhosis" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Ayurvedic way of managing Liver Cirrhosis
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light space-y-6">
                <p>Ayurvedic management follows a highly structured, sequential pathway designed to restore structural and functional harmony to the liver:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 bg-white rounded-xl border border-[#DBCFA8] shadow-sm">
                    <h4 className="font-bold text-[#517B32] text-xl mb-2">Agni Deepana & Amapachana (Digestive Correction)</h4>
                    <p>Before tackling liver tissue directly, therapies must ignite the metabolic fire (Agni) and digest internal metabolic toxins (Ama).</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-[#DBCFA8] shadow-sm">
                    <h4 className="font-bold text-[#517B32] text-xl mb-2">Srotoshodhana (Channel Cleansing)</h4>
                    <p>Utilizing specific herbs to clear structural blockages within the Raktavaha (blood) and Udakavaha (fluid) channels.</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-[#DBCFA8] shadow-sm">
                    <h4 className="font-bold text-[#517B32] text-xl mb-2">Virechana (Controlled Purgation)</h4>
                    <p>Mild, highly supervised purgation is the premier panacea for liver care. It flushes out excess, stagnant Ranjaka Pitta (bile) and reduces internal abdominal pressure. Most patients faces severe constipation before starting treatment.</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-[#DBCFA8] shadow-sm">
                    <h4 className="font-bold text-[#517B32] text-xl mb-2">Rasayana Chikitsa (Tissue Regeneration)</h4>
                    <p>Once channels are clear, specialized tissue-rejuvenating therapies are introduced to speed up the liver's natural ability to regenerate and replace hardened scar tissue with healthy cells.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="core-herbs" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Core Hepato-Protective Herbs Used in Ayurveda Treatments
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light">
                <p className="mb-6">Ayurvedic clinical practice relies on a specific group of powerful, scientifically backed herbs to manage liver cirrhosis by addressing its complex root causes.</p>
                
                <ul className="space-y-6">
                  <li className="pl-6 border-l-2 border-[#517B32]">
                    <strong className="text-[#66371B]">Bhumi Amlaki (Phyllanthus niruri)</strong>, known locally in Malayalam as Keezharneelli, a premier liver healer that actively reduces elevated liver enzymes like SGOT, SGPT, and Bilirubin while safeguarding liver cell walls.
                  </li>
                  <li className="pl-6 border-l-2 border-[#517B32]">
                    It works alongside <strong className="text-[#66371B]">Katuki (Picrorhiza kurroa)</strong>, known as Kadugurohini, a potent bitter herb that stimulates natural bile flow, clears deep channel obstructions, and helps safely regulate declining platelet counts.
                  </li>
                  <li className="pl-6 border-l-2 border-[#517B32]">
                    To combat fluid retention, practitioners introduce <strong className="text-[#66371B]">Punarnava (Boerhavia diffusa)</strong>, or Thazhuthama, which literally translates to "that which renews the body" and acts as an exceptional natural diuretic to safely reverse mild to moderate ascites.
                  </li>
                  <li className="pl-6 border-l-2 border-[#517B32]">
                    Finally, the formulation is enhanced with <strong className="text-[#66371B]">Sharapunkha (Tephrosia purpurea)</strong>, known regionally as Kozhunjil, an ingredient highly valued for its unique clinical ability to regenerate damaged liver cells and systematically reduce the density of fibrous scar tissue.
                  </li>
                </ul>
              </div>
            </section>

            <section id="classical-medicines" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Classical Ayurveda Medicines used in treating Liver cirrhosis.
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light space-y-6">
                <p>Depending on the patient's exact stage and symptoms, clinicians typically utilize established classic formulations. These concentrated herbal medicines are the first line of defines to cleanse the channels and normalize elevated liver markers, few of them are given below:</p>
                
                <div className="space-y-4">
                  <div className="bg-[#E3D8C1]/30 p-5 rounded-lg">
                    <strong className="text-[#66371B] block text-xl mb-1">Punarnavadi Kashayam:</strong> 
                    An essential herbal decoction used to treat fluid retention, effectively lowering abdominal distension.
                  </div>
                  <div className="bg-[#E3D8C1]/30 p-5 rounded-lg">
                    <strong className="text-[#66371B] block text-xl mb-1">Patolakaturohinyadi Kashayam:</strong> 
                    A premier bitter formulation widely used in clinical case studies to combat advanced cirrhosis. It targets Ranjaka Pitta to naturally lower high serum bilirubin and liver enzymes.
                  </div>
                  <div className="bg-[#E3D8C1]/30 p-5 rounded-lg">
                    <strong className="text-[#66371B] block text-xl mb-1">Drakshadi Kashayam:</strong> 
                    Combats alcohol-induced liver toxicity, clearing deep metabolic heat (Pitta) and easing chronic physical fatigue.
                  </div>
                  <div className="bg-[#E3D8C1]/30 p-5 rounded-lg">
                    <strong className="text-[#66371B] block text-xl mb-1">Guluchyadi Kashayam:</strong> 
                    Combines a powerful systemic anti-inflammatory (Guduchi) with rich antioxidants to slow the deposition of fibrotic scar tissue.
                  </div>
                  <div className="bg-[#E3D8C1]/30 p-5 rounded-lg">
                    <strong className="text-[#66371B] block text-xl mb-1">Phalatrikadi Kwath:</strong> 
                    Formulated with antioxidant-rich ingredients like Triphala and Neem, this decoction serves as a powerful hepato-protective shield. Clinical observations show it effectively reduces cellular inflammation and fatty tissue accumulation in the liver.
                  </div>
                  <div className="bg-[#E3D8C1]/30 p-5 rounded-lg">
                    <strong className="text-[#66371B] block text-xl mb-1">Arogyavardhini Vati:</strong> 
                    Celebrated as a foundational formula for chronic liver conditions, clinical trials indicate it aids in metabolizing toxic fat buildup and supporting structural regeneration. It contains high amounts of Katuki, which clears biliary stagnation.
                  </div>
                  <div className="bg-[#E3D8C1]/30 p-5 rounded-lg">
                    <strong className="text-[#66371B] block text-xl mb-1">Mandura Vatika / Punarnava Mandura:</strong> 
                    Iron-rich herbo-mineral tablets often help to boost red blood cell and platelet count
                  </div>
                </div>

                <p className="mt-8 font-medium italic">These medicines should use if prescribed by your doctor, under strict supervision. They will tell you which one is good for you according to your conditions.</p>
              </div>
            </section>

            <section id="panchakarma-therapies" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Panchakarma Therapies for Liver Cirrhosis and Their Potential Benefits
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light space-y-6">
                <p>In Ayurveda, treatment for advanced liver disease is individualized according to the stage of disease, presence of ascites, digestive strength (Agni), and overall strength (Rogi Bala).</p>
                
                <div className="space-y-6 mt-8">
                  <div className="border border-[#B4833D]/30 p-6 rounded-xl bg-white shadow-sm">
                    <h3 className="font-heading text-2xl font-bold text-[#517B32] mb-3">1.Virechana (mild therapeutic purgation):</h3>
                    <p>In Ayurveda, Virechana (therapeutic purgation) is traditionally used in disorders involving aggravated Pitta and is also described in the management of Udara Roga/Jalodara. Potential benefits include reduction of ascites, Improvement in liver-function parameters, Improvement in coagulation parameters, Improvement in appetite and digestive function, and reduction in abdominal heaviness and discomfort.</p>
                  </div>

                  <div className="border border-[#B4833D]/30 p-6 rounded-xl bg-white shadow-sm">
                    <h3 className="font-heading text-2xl font-bold text-[#517B32] mb-3">2. Abhyanga (therapeutic oil massage):</h3>
                    <p>Gentle Abhyanga may be used as a supportive therapy depending on the patient's strength. Its main intended role is improving comfort, relaxation and general well-being.</p>
                  </div>

                  <div className="border border-[#B4833D]/30 p-6 rounded-xl bg-white shadow-sm">
                    <h3 className="font-heading text-2xl font-bold text-[#517B32] mb-3">3. Swedana (mild sudation):</h3>
                    <p>Mild, carefully controlled Swedana is good in some cases.</p>
                  </div>

                  <div className="border border-[#B4833D]/30 p-6 rounded-xl bg-white shadow-sm">
                    <h3 className="font-heading text-2xl font-bold text-[#517B32] mb-3">4. Basti (medicated enema):</h3>
                    <p>Basti may be considered by an Ayurvedic physician in selected patients based on Dosha, bowel function and strength.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="causes" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Causes of liver cirrhosis
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light space-y-6">
                <p><strong className="text-[#66371B]">Primary Causes:</strong> The vast majority of cases are caused by three main conditions: chronic alcohol misuse (long-term cellular damage), MASH (severe fat accumulation linked to diabetes and obesity), and chronic viral Hepatitis B or C infections.</p>
                <p><strong className="text-[#66371B]">Secondary Causes:</strong> Rarer causes include autoimmune hepatitis (the body attacking its own liver cells), biliary diseases like PBC or PSC (trapped bile causing tissue destruction), and genetic mutations like Hemochromatosis or Wilson's disease.</p>
                <div className="bg-[#402816] text-[#F7F1E1] p-6 rounded-xl mt-6">
                  <strong className="text-[#E3D8C1] block text-xl mb-2">Differential Diagnoses:</strong> 
                  <p className="text-sm font-light leading-relaxed">When diagnosing liver scarring, a physician must explicitly rule out at least three distinct alternative conditions that mimic these symptoms: Budd-Chiari syndrome (hepatic vein blood clots), chronic right-sided heart failure (backward blood backup causing liver congestion), and hepatic schistosomiasis (a parasitic tropical infection causing focal scarring).</p>
                </div>
              </div>
            </section>

            <section id="symptoms" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Symptoms of Liver cirrhosis
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light space-y-6">
                <p><strong className="text-[#66371B]">Early-Stage Symptoms:</strong> Early signs include debilitating fatigue, muscle loss, chronic mild nausea, and a loss of appetite. Hormonal imbalances often trigger visible skin changes like spider angiomas (spider-like chest capillaries) and palmar erythema (reddened palms), alongside severe skin itching from trapped bile salts.</p>
                <p><strong className="text-[#66371B]">Late-Stage Complications:</strong> Advanced failure manifests as jaundice (yellow skin and eyes with dark urine), severe fluid accumulation known as ascites (tense abdominal swelling) and lower leg edema, easy bruising from low clotting proteins, and hepatic encephalopathy (mental confusion and hand tremors caused by toxic ammonia buildup in the brain). Fragile veins can also rupture, causing life-threatening internal gastrointestinal bleeding.</p>
                <div className="bg-[#402816] text-[#F7F1E1] p-6 rounded-xl mt-6">
                  <strong className="text-[#E3D8C1] block text-xl mb-2">Differential Diagnoses:</strong> 
                  <p className="text-sm font-light leading-relaxed">When diagnosing these symptoms, a physician must explicitly rule out at least three distinct alternative conditions that mimic them: chronic right-sided heart failure (causing backward blood backup and abdominal swelling), peritoneal malignancies (advanced abdominal cancers that leak fluid into the tummy), and chronic malnutrition (severe protein loss that leads to system-wide fluid shifts).</p>
                </div>
              </div>
            </section>

            <section id="types" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Types Liver cirrhosis
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light space-y-6">
                <p>Liver cirrhosis can be classified mainly according to its cause and severity. Based on the cause, common types include alcoholic cirrhosis, viral cirrhosis (hepatitis B or C), NASH/fatty-liver-related cirrhosis, biliary cirrhosis, autoimmune cirrhosis, genetic cirrhosis, cardiac cirrhosis, and cryptogenic cirrhosis where the exact cause is unknown. Based on severity, it is divided into compensated cirrhosis, where the liver still performs most of its functions, and decompensated cirrhosis, where complications such as jaundice, ascites, variceal bleeding, or hepatic encephalopathy develop.</p>
              </div>
            </section>

            <section id="complications" className="scroll-mt-32">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8 pb-4 border-b border-[#DBCFA8]">
                Complications of liver cirrhosis
              </h2>
              
              <div className="text-[#402816] text-lg leading-relaxed font-light space-y-6">
                <p>As cirrhosis progresses, extensive scarring affects liver function and blood flow through the liver. Important complications include portal hypertension, ascites (fluid accumulation in the abdomen), swelling of the legs, esophageal or gastric varices that may cause serious bleeding, jaundice, hepatic encephalopathy (confusion or altered consciousness due to toxin accumulation), increased risk of infections, easy bruising and bleeding, malnutrition and muscle wasting, kidney dysfunction (hepatorenal syndrome), fluid accumulation around the lungs (hepatic hydrothorax), and an increased risk of liver cancer (hepatocellular carcinoma). In advanced stages, cirrhosis can progress to liver failure.</p>
              </div>
            </section>

          </div>

          {/* Sidebar / Sticky Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              {/* Table of Contents */}
              <Card className="border-[#DBCFA8] shadow-sm bg-white rounded-2xl hidden md:block">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#66371B] mb-4">Contents</h3>
                  <ul className="space-y-3 text-sm text-[#517B32] font-medium flex flex-col">
                    <a href="#reclaiming-health" className="hover:text-[#6F9940] transition-colors leading-snug">Reclaiming Your Health</a>
                    <a href="#ayurvedic-approach" className="hover:text-[#6F9940] transition-colors leading-snug">Ayurvedic approach of Liver cirrhosis treatment</a>
                    <a href="#root-cause-recovery" className="hover:text-[#6F9940] transition-colors leading-snug">Comprehensive Root-Cause Recovery</a>
                    <a href="#managing-liver-cirrhosis" className="hover:text-[#6F9940] transition-colors leading-snug">Ayurvedic way of managing Liver Cirrhosis</a>
                    <a href="#core-herbs" className="hover:text-[#6F9940] transition-colors leading-snug">Core Hepato-Protective Herbs</a>
                    <a href="#classical-medicines" className="hover:text-[#6F9940] transition-colors leading-snug">Classical Ayurveda Medicines</a>
                    <a href="#panchakarma-therapies" className="hover:text-[#6F9940] transition-colors leading-snug">Panchakarma Therapies</a>
                    <a href="#causes" className="hover:text-[#6F9940] transition-colors leading-snug">Causes of liver cirrhosis</a>
                    <a href="#symptoms" className="hover:text-[#6F9940] transition-colors leading-snug">Symptoms of Liver cirrhosis</a>
                    <a href="#types" className="hover:text-[#6F9940] transition-colors leading-snug">Types Liver cirrhosis</a>
                    <a href="#complications" className="hover:text-[#6F9940] transition-colors leading-snug">Complications of liver cirrhosis</a>
                  </ul>
                </CardContent>
              </Card>

              {/* Patient Journey */}
              <Card className="border-[#DBCFA8] shadow-xs bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#66371B] mb-4">The Patient Journey</h3>
                  <ul className="space-y-3 text-sm text-[#402816] font-light">
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Enquire & Consult</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Clinical Assessment</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Personalized Plan</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Therapy Administration</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Recovery & Follow-up</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sidebar CTA */}
              <Card className="border-none shadow-md bg-[#402816] text-[#F7F1E1] rounded-2xl">
                <CardContent className="p-8 text-center space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-[#F7F1E1]">International Patients</h3>
                  <p className="text-[#E3D8C1]/90 text-sm font-light leading-relaxed">
                    Travelling to Kerala for Ayurvedic care? Begin with an online consultation before planning your travel.
                  </p>
                  <Button render={<Link href="/international-patients" />} variant="glass" className="w-full">
                    International Enquiry
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
