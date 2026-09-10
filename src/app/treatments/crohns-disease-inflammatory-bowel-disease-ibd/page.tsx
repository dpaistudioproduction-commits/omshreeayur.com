import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { HeartHandshake, FileText, CheckCircle2 } from "lucide-react";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Crohn's Disease (Inflammatory bowel disease (IBD)) | OmShree Sidha Hospital",
  description: "Get the best Ayurvedic medicine for Crohn’s disease at OmShree Sidha Hospital, Kerala. Natural healing therapies and personalized treatments for long-lasting relief.",
  alternates: {
    canonical: "/treatments/crohns-disease-inflammatory-bowel-disease-ibd",
  },
  openGraph: {
    title: "Effective Ayurvedic Medicine & Treatment for Crohn’s Disease in Kerala, India",
    description: "OmShree Sidha Hospital offers specialized Ayurvedic treatment and medicine for Crohn’s disease, focusing on holistic care and long-term relief from digestive issues.",
    url: "https://omshreeayur.com/treatments/crohns-disease-inflammatory-bowel-disease-ibd",
    images: [
      {
        url: "/images/treatments/crohns-disease.jpg",
        width: 1200,
        height: 630,
        alt: "Crohn's Disease Treatment at Omshree Sidha Hospital",
      },
    ],
  },
};

export default function CrohnsDiseaseTreatmentPage() {
  return (
    <div className="flex flex-col w-full bg-[#FDFBF7] font-sans">
      {/* 1. Hero Section */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%]">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/treatments" className="hover:text-[#66371B] transition-colors">Treatments</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Crohn’s disease (Inflammatory bowel disease (IBD))</li>
            </ol>
          </nav>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
              Crohn’s Disease/ IBD
            </h1>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-xl">
            <Image 
              src="/images/treatments/crohns-disease.jpg" 
              alt="Crohn’s Disease/ IBD" 
              fill 
              sizes="100vw"
              className="object-cover" 
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24 bg-white border-t border-[#DBCFA8]/30">
        <div className="w-full px-[4%] max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column: Long-form Editorial Content */}
            <div className="lg:col-span-2 space-y-16">
              
              <FadeIn>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    We are the only one hospital in the world, providing money back guaranteed treatment for Cohn’s disease. We will cure you in short time.  We start the treatment only after admitting patients for 4 weeks, rare cases it may take some more time. Patient will feel much better from the first day onwards. No need to pay any advance initially. If you are not improving in 3 days, you need not to pay anything, you can go without making any payment.   We will stop all other medicines that you are taking for Crohn’s disease, from the first day, nothing will worse, your condition will improve day by day. Within 4 weeks, your condition will improve at least 75%, if you have swelling in face, leg or any other part of the body, or your haemoglobin (Hb) level is very low and you are frequently doing blood transfusion or you are regularly taking vitamin infusion, in such cases it may be taking some more time to recover. Our policy is to give relief to the patients first, charge them only after giving result, you have to pay on the 3rd or 4th day for the first week. (Our policy is weekly advance).<br/>
                    We know how to control and cure IBD in short time. Even if you are in the worst condition and passing motion even more than 50 times a day, or you are passing motion without coming to know it is going, in all such cases we will give you immediate result. No need for any further tension, come to Omshree Sidha Hospital, relax and get it cured. Abdominal pain, diarrhoea or constipation, mucus, urgency, feeling of incomplete evacuation, bloating, excess gas acidity, rectum bleeding, fever, fatigue, cramping, mouth sores vomiting, anemia, swelling, infection and inflammation in the stomach etc… will come down day by day. In two three weeks things become under control and in 4 weeks’ patients will be almost normal (minimum 75% improvement). Patients may start regaining their weight.  Usually patients will be cured in one to three months’ time, rare cases it may be taking some more time. They have to continue the medicines for one year.
                  </p>
                  <p>
                    We are giving the best treatment for Crohn’s disease. You may be looking for Inflammatory Bowel Disease treatment without any side effects. Here we are using Ayurvedic/natural/herbal medicines for the treatment of Crohn’s disease, which are free from any known side effects.  First of all we will give you quick relief from Crohn’s disease cramps and pain and quick relief from diarrhoea and other symptoms you have at the moment. At the same time our treatment and medicines help to remove the side effects of other medicines that you have taken earlier. Patients are much worried about the side effects of medicines that they have taken. You can do LFT and RFT tests just before starting the treatment and during every week, and at the end of the treatment and ensure that your liver and kidneys are working better than before. Patients can relax now. We have the best Gastrologist (Ayurveda) to hear you, help you and guide you properly and cure you in short time. Our Crohn’s disease treatment aims at controlling infection and inflammation and at the same time killing the microorganisms, which are creating the problems. At the same time, our treatment helps in growing good bacteria, which is helping us. Here we have best Crohn’s disease Doctors, who are able to give, the best treatment available in the world.<br/>
                    We are treating Crohn’s disease for many years and always getting the positive results. The knowledge passed from generation to generation, helps us to give you the best result in short time. If you take the treatment as per our instructions, taking the medicines in the prescribed quantity at the prescribed time and avoid junk foods and foods from outside, and follow the food restrictions if any, you will get 100% result. Our continues research helps us to treat such conditions more and more effectively and efficiently. You may have undergone Allopathy, Homeopathy and Ayurveda treatment or some other treatment for Crohn’s disease. If none of them benefited you, come to us, no doubt, we will cure you in short time.
                  </p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Our Special offer</h2>
                  <p>
                    We are giving you an opportunity to start this treatment without paying anything in advance. Your condition will improve considerably within 3 days itself. On the 4th day after confirming the efficacy, you have to make the advance payment for one week. We are sure about the result, our patients are recovering quickly, that is why we are able to give you such an offer. Every week you have to pay in advance for that week only. No need to pay the full amount in advance.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Our challenging offer</h2>
                  <p>
                    If you believe that your Crohn’s disease is not curable, come to us, we will cure you in short time. Sometimes you may think that even though the condition improves for few days, flare-ups may come again, you may have such experience. You can confirm everything before making the payment. First of all, you start the treatment and follow all the instructions, takes medicines in time, and take the proper quantity of medicines and ensure it is working. If in any case your condition is not improving within 4 weeks you can go without paying anything. We are quite sure about the result, once you experience it, then only you can believe it. Under this scheme you have to execute an agreement and give bank guarantee for the amount, we will charge 50% extra on our basic rate. (we request you to opt for this scheme only if you are very sceptical and if you prefer to make payment only after seeing the actual result).
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Medicine for Crohn’s disease</h2>
                  <p>
                    We are using pure Ayurvedic medicines for the treatment of Crohn’s disease. We have our own special medicines for the treatment of Crohn’s disease.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Side effects vs side benefits</h2>
                  <p>
                    Usually patients are worried about the side effects of medicines they are taking for Cohn’s disease.  But we can assure you that our medicines are free from any known side effects; on the other hand, it has side benefits. Usually it helps to improve the proper functioning of Kidney, liver etc… patients can do Liver Function Test (LFT) and Renal Function Test (RFT) and other tests to see the progress.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Speed of recovery</h2>
                  <p>
                    Usually in 4 weeks, your condition will improve minimum 75%, if you have swelling in face, leg or any other part of the body, or your haemoglobin (Hb) level is very low and you are frequently doing blood transfusion or you are regularly taking vitamin infusion, in such cases it may be taking some more time to recover.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Better taste of medicines.</h2>
                  <p>
                    Most of our medicines are tasty.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">We will cure you without any surgery.</h2>
                  <p>
                    There is no surgery or injection. No painful exercise or painful treatment. In our treatment there is only internal (oral) and external application of medicines. In addition, we use panchakarma treatment techniques to remove the toxins from the body and improve the blood circulation. This helps in fast recovery. We develop the Panchakarma treatment techniques according to the disease conditions. This ensures fastest healing in every case.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Cure Vs temporary relief or control</h2>
                  <p>
                    This is a curative treatment technique. That too we do it very fast. No need to wait long time to get the result. We will cure you in the shortest possible time. You can’t compare it with other’s treatment.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Benefits of our Crohn’s disease treatment</h2>
                  <p>
                    1. 1.We will cure you in short time. Even the worst cases, we will cure the patients, we have to get some time to cure.<br/>
                    2. It is highly cost effective. Patients are spending very good amount of money and time again and again on treatment. Some patients are spending lakhs of Rupees every year, still it is not benefiting them. Normal people can’t afford such amounts. This treatment is affordable to normal people.<br/>
                    3. Normally patients will feel relaxed in the first day of our treatment itself and within 2 or 3 days they will feel much relaxed and the stomach will be much better than before.<br/>
                    4. In 4 weeks, patients’ condition will improve at least 75%<br/>
                    5. Our medications for Crohn’s disease will help to remove toxins, inflammation, infection cramping etc.<br/>
                    6. Weakness and tiredness will be over in one or two weeks, you will feel energetic and active.  Gradually you will regain the weight.<br/>
                    7. Appetite will improve gradually/<br/>
                    8. Our medicines are free from any known side effects.<br/>
                    9. Patients are worried about the side effects of medicines. Our treatment helps to remove the side effects of medicines that you have taken earlier.<br/>
                    10. We have treatment for other disease conditions, which needs attention. We can treat such conditions along with Crohn’s disease, we will charge them separately.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Duration of the Crohn’s disease treatment</h2>
                  <p>
                    Normally we admit patients for 4 weeks initially, there after they have to continue medicines at home for one year. rare cases it may take some more time.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Things to followed by Crohn’s disease patients</h2>
                  <p>
                    The patient must avoid Jung foods, food from outside, they can have homely food. In addition, they have to avoid non veg., alcohol, soft drinks. any food which causes gas or digestive problem.    In certain cases, the patients have to control the quantity of foods and drinks.  If you are allergic to any food, you have to avoid it for 6 months.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">What is Crohn’s disease?</h2>
                  <p>
                    Crohn’s disease is a chronic inflammatory disease of the digestive tract, that may affect any part of the mouth to anus.  IBD is an autoimmune disorder, which means the body’s immune system attacks healthy tissues. But some research suggests that the chronic inflammation may not be due to the immune system attacking the body itself, instead, it is a result of the immune system attacking a harmless virus, bacteria, or food in the gut, causing  inflammation that leads to bowel injury Inflammatory bowel disease (IBD) is a term that is used to denote disorders of chronic inflammation of the tissues in the digestive tract . IBD is used to denote  two conditions (!) Crohn’s disease and (2) Ulcerative colitis, which are characterized by the chronic inflammation of the gastrointestinal tract. Prolonged infection and inflammation results in damaging the gastrointestinal tract.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Symptoms of Crohn’s disease (IBD)</h2>
                  <p>
                    Diarrhoea, Fever, Fatigue, Abdominal pain and cramping, Blood in your stool, Mouth sores Reduced appetite, Anemia and weight loss.
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Complications of Crohn’s disease (IBD)</h2>
                  <p>
                    <strong>Colon cancer.</strong> IBD may increase your risk of colon cancer.<br/>
                    <strong>Medication side effects. </strong>Certain medications increase risk of developing certain cancers. Corticosteroids can cause osteoporosis, high blood pressure and other conditions.<br/>
                    <strong>Blood clots.</strong> IBD may increases risk of blood clots in veins and arteries.<br/>
                    Excessive diarrhoea may result in dehydration.<br/>
                    <strong>Bowel obstruction.</strong> Crohn’s disease affects the full thickness of the intestinal wall. Parts of the bowel may  thicken and become  narrow. Which may block the flow of digestive contents.<br/>
                    <strong>Malnutrition.</strong> Diarrhoea, abdominal pain and cramping may make it difficult for patients to eat properly. Digestive power may come down and it became difficult for your intestine to absorb enough nutrients. Anemia may develop due to poor absorption of iron or vitamin B-12.<br/>
                    <strong>Fistulas.</strong> Sometimes infection and inflammation in the intestinal walls may create fistula. Fistulas near or around the anal area, a fistula may become infected and form an infected pocket of pus known as an abscess.<br/>
                    <strong>Anal fissure.</strong> This is a small tear in the tissue that lines the anus or in the skin around the anus. It may cause painful bowel movement, it may lead to a perianal fistula.<br/>
                    <strong>Eyes:</strong> redness and inflammation due to episclerites or uveitis. Mouth sores and ulcers<br/>
                    <strong>Steatosis</strong> (fat in the liver)<br/>
                    <strong>Gallstones </strong>and inflammation of the bile duct system<br/>
                    <strong>Kidney Stone</strong>, hydronephrosis (swollen kidneys caused by a backup of urine), and UTI<br/>
                    <strong>Skin.</strong> Erythema nodosum (tender, red bumps on the shins), pyoderma gangrenosum, a rare condition that causes severe skin ulcers on the legs.<br/>
                    <strong>Joints and spine: </strong>Arthritis may affect the spine, pelvis, hands and legs.<br/>
                    <strong>Blood circulation,</strong> blood vessels may become inflamed and that may affect the blood circulation<br/>
                    Types of Crohn’s disease (IBD)<br/>
                    <strong>Ileocolitis: </strong>In this case Inflammation occurs in the small intestine and part of the large intestine.  This  is the most common type of Crohn’s disease.<br/>
                    <strong>Ileitis:</strong> In this case Swelling and inflammation develops in the small intestine, which is called ileum.<br/>
                    <strong>Gastroduodenal:</strong> In this case irritation and Inflammation affects the stomach and the top of the small intestine, which is called duodenum.<br/>
                    <strong>Jejunoileitis:</strong>  In this case inflammation develops in the jejunum (the upper half of the small intestine)
                  </p>

                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">Causes Crohn’s disease (IBD)</h2>
                  <p>
                    The exact cause of IBD still remains unknown. Earlier, diet and stress were suspected, but now doctors know that these factors may aggravate it.  Diet and stress aren’t the exact cause of IBD.<br/>
                    Another possible cause of IBD is the malfunctioning of our own immune system. When our immune system ties to fight with an invading bacteria or virus, our immune response causes, the immune system to attack our own cells in the digestive tract, too.<br/>
                    In some cases, IBD may be hereditary.
                  </p>
                </div>
              </FadeIn>

              {/* YouTube Video Testimonial mapping */}
              <FadeIn>
                 <div className="mt-16 bg-[#FDFBF7] p-8 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                   <h3 className="font-heading font-normal text-2xl text-[#66371B] mb-6">Patient Testimonials</h3>
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="flex flex-col items-center">
                        <h4 className="font-heading text-xl text-[#66371B] mb-2">Venkat Rama</h4>
                        <p className="text-[#81754B] mb-4 text-center">Crohn’s disease (Inflammatory bowel disease (IBD))</p>
                        <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 shadow-sm">
                           <iframe className="w-full h-full" src="https://www.youtube.com/embed/kWubkwr0byM" frameBorder="0" allowFullScreen></iframe>
                        </div>
                     </div>
                   </div>
                 </div>
              </FadeIn>

            </div>

            {/* Right Column: Global Lead Gen Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                <FadeIn delay={0.1}>
                  <div className="bg-white rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm overflow-hidden">
                    <div className="bg-[#66371B] p-8 text-white text-center">
                      <HeartHandshake className="h-10 w-10 mx-auto mb-4 text-[#E3D8C1]" />
                      <h3 className="font-heading font-normal text-3xl mb-2">Book a Consultation</h3>
                      <p className="text-[#E3D8C1] font-light text-sm">Get a clinical assessment by our expert physicians.</p>
                    </div>
                    <div className="p-8 space-y-4">
                      <Button render={<Link href="/patient-care/consultation" />} className="w-full">
                        Start Assessment
                      </Button>
                      <Button render={<Link href="https://wa.me/919846992789" target="_blank" />} variant="outline" className="w-full">
                        WhatsApp Us
                      </Button>
                      <p className="text-center text-xs text-[#81754B] font-light mt-4">
                        Or call us directly at <br/><strong className="text-[#66371B] font-medium">+91 4822229434</strong>
                      </p>
                    </div>
                  </div>
                </FadeIn>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
