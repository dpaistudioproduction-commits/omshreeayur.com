import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { HeartHandshake, FileText, CheckCircle2 } from "lucide-react";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Irritable bowel syndrome (IBS) - Money Back Guarantee | Omshree Sidha Hospital",
  description: "We are the only one hospital in the world, providing money back guaranteed treatment for IBS.",
  alternates: {
    canonical: "/treatments/irritable-bowel-syndrome-ibs",
  },
  openGraph: {
    title: "Irritable bowel syndrome (IBS) | Omshree Sidha Hospital",
    description: "We are the only one hospital in the world, providing money back guaranteed treatment for IBS.",
    url: "https://omshreeayur.com/treatments/irritable-bowel-syndrome-ibs",
    images: [
      {
        url: "/images/treatments/ibs.jpg",
        width: 1200,
        height: 630,
        alt: "Irritable Bowel Syndrome (IBS) Treatment at Omshree Sidha Hospital",
      },
    ],
  },
};

export default function IBSTreatmentPage() {
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
              <li className="text-[#66371B]">Irritable bowel syndrome (IBS)</li>
            </ol>
          </nav>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
              Irritable bowel syndrome (IBS)
            </h1>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-xl">
            <Image 
              src="/images/treatments/ibs.jpg" 
              alt="Irritable bowel syndrome (IBS)" 
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
                  <p className="text-xl md:text-2xl text-[#66371B] font-medium leading-relaxed mb-6">
                    We are the only one hospital in the world, providing money back guaranteed treatment for IBS (subject to terms and conditions).  We will cure your Irritable Bowel Syndrome (IBS) in short time. Patient will feel much better in the first day itself. If you are not improving in 3 days’, you need not to pay anything, you can go without making any payment.   You have to stop all other medicines that you are taking for IBS, once you start treatment from Omshree Sidha Hospital, nothing will worse, your condition will improve day by day. We start treatment only after admitting patients for 28 days. Within this time, your condition will improve at least 75%, rare cases, if your haemoglobin (HB) level is very low or you have severe complications of IBS, it may be taking some more time to recover. Our policy is to give relief to the patients first, charge them only after giving some relief. Initially you need not to pay any advance payment, pay on the 3rd or 4th day for the first week. (Our policy is weekly advance).
                  </p>
                  <p>
                    This is the best natural treatment for IBS. We know how to control IBS in short time. Even if you are in the worst condition and passing motion even more than 50 times a day, or you are passing motion without coming to know it is going, in all such cases we will give you immediate result. No need for any further tension, come to Omshree Sidha Hospital, relax and get it cured. Abdominal pain, diarrhoea or constipation, mucus, urgency, feeling of incomplete evacuation, bloating, excess gas acidity, rectum bleeding, vomiting, anemia, swelling, infection and inflammation in the stomach etc… will come down day by day. In two three weeks things become under control and in 4 weeks’ patients will be almost normal (minimum 75%relief). In most cases patients may start regaining their weight from here itself.  Usually patients will be cured in one to three months’ time. They have to continue the medicines for one year.
                  </p>
                  <p>
                    Omshree Sidha Hospital is the best IBS hospital. You may be looking for Irritable Bowel Syndrome (IBS) treatment without side effects. Here we are using Ayurvedic/natural/herbal medicines for the treatment of IBS, which are free from any known side effects.  First of all we will give you quick relief from IBS pain and quick relief from IBS diarrhoea or IBS constipation. At the same time our treatment and medicines helps to remove the side effects of medicines that you have taken earlier. We have the best Gastrologist (Ayurveda) to hear you, help you and guide you properly and cure you in time.  Our IBS treatment aims at controlling infection and inflammation and at the same time killing the microorganisms, which is creating the problems. Here we have best IBS Doctors, who are able to give you the best treatment for IBS.
                  </p>
                  <p>
                    We are treating IBS for many years and always getting the positive results. If you take the treatment as per our instructions, taking the medicines in the prescribed quantity at the prescribed time and avoid junk foods and foods from outside, and follow the food restrictions if any, you will get 100% result. Our continues research helps us to treat such conditions more and more effectively and efficiently. You may have undergone Allopathy, Homeopathy and Ayurveda treatment or some other treatment for IBS. If none of them benefited you, come to us we will cure you.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm relative overflow-hidden">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Our Special offer</h2>
                  <p className="text-lg text-[#81754B] leading-relaxed font-light">
                    We are giving you an opportunity to start this treatment without paying anything. Your condition will improve considerably within 3 days itself. On the 4th day after confirming the efficacy, you have to make the advance payment for one week. We are sure about the result, our patients are recovering quickly, that is why we are able to give you such an offer. Every week you have to pay in advance for that week only. No need to pay the full amount in advance.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm relative overflow-hidden">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Our challenging offer</h2>
                  <p className="text-lg text-[#81754B] leading-relaxed font-light">
                    If you believe that your IBS (Irritable bowel syndrome) is not curable, come to us, we will cure you in short time. Sometimes you may think that even though the condition improves for few days, flare-ups may come again, you may have such experience. You can confirm everything before making the payment. First of all, you start the treatment and ensure it is working, if in any case your condition is not improving within 4 weeks you can go without paying anything. Under this scheme you have to execute an agreement and give bank guarantee for the amount, we will charge 50% extra on our basic rate in such cases. For more details regarding this offer visit our challenging offer page.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Medicine for Irritable Bowel Syndrome (IBS)</h2>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    We are using pure Ayurveda medicines for the treatment of Irritable Bowel Syndrome (IBS).  We have our own special medicines as well for the treatment of the same. In addition, we will do Panchakarma therapy depending on the condition of the patient. Medicines may vary with condition of the patient. We have our own Medicine Manufacturing unit, having GMP Certificate.  We use quality materials for the manufacture of these quality medicines to ensure the best result.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Side effects vs side benefits</h2>
                  <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                    <p>
                      This is a pure Ayurveda treatment and it is free from any known side effects. At the same time it is having lot of side benefits, which helps in curing other disease conditions, directly or indirectly. Our treatment improves the functioning of your immune system. Your blood circulation also improves considerably. Finally, all these contributes to better immune power. The most interesting thing is, it helps in removing the side effects of medicines that you have taken earlier.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                    <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">Speed of recovery</h3>
                    <p className="text-[#81754B] font-light leading-relaxed">
                      In our treatment the speed of recovery is much faster than any other treatment. In 4 weeks itself patients condition will improve approximately 75% and most of the patients will ve cured in 3 months. Our treatment gives the best result in the shortest time, that you can't compare with the other's treatments. This is the fastest and safest treatment available all over the world.
                    </p>
                  </div>

                  <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                    <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">Better taste of medicines.</h3>
                    <p className="text-[#81754B] font-light leading-relaxed">
                      Comparing to other Ayurveda medicines, it is easy to take. Most of the medicines are easy to take, only few patients are having taste issue with some medicines, still it is manageable.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">We will cure you without any surgery.</h2>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    There is no surgery or injection. No painful exercise or painful treatment. In our treatment there is only internal (oral) and external application of medicines. In addition, we use panchakarma treatment techniques to remove the toxins from the body and improve the blood circulation. This helps in fast recovery. We develop the Panchakarma treatment techniques according to the disease conditions. This ensures fastest healing in every case.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Cure Vs temporary relief or control</h2>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    This is a curative treatment technique. That too we do it very fast. No need to wait long time to get the result. We will cure you in the shortest possible time. You can't compare it with other's treatment.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-8 text-[#66371B]">Benefits of our IBS treatment</h2>
                  <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                    <p>1. We will cure you in short time. It is a cure, not a temporary relief.<br/>
                    2. It is highly cost effective. Some patients are spending very good amount of money and time again and again, some patients are spending tens of thousands of Dollars on IBS treatment every year, still it is not benefiting them.<br/>
                    3. Normally patients will feel relaxed  in the first day of our treatment itself and within 2 or 3 days they will feel much relaxed and the stomach will be much better than before.<br/>
                    4. In 4 weeks, patients condition will improve at least 75%<br/>
                    5. Our medications for   IBS will help to remove toxins, inflammation, infection cramping etc. and improves immune power.<br/>
                    6. Weakness and tiredness will come down gradually, you will feel energetic and active, and starts regaining weight.<br/>
                    7. Appetite will improve gradually/<br/>
                    8. Our medicines are free from any known side effects.<br/>
                    9. Our treatment helps to remove the side effects of medicines that you have taken earlier.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Duration of the IBS treatment</h2>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    Normally we admit patients for 4 weeks initially, there after they have to continue medicines at home for one year. rare cases it may take some more time.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                  <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">Things to followed by IBS patients</h3>
                  <p className="text-[#81754B] font-light leading-relaxed">
                    The patient must avoid Jung foods, food from outside, they can have homely food. In addition, they have to avoid non veg., alcohol, soft drinks. any food which causes gas or digestive problem.    In certain cases, the patients have to control the quantity of foods and drinks.  If you are allergic to any food, you have to avoid it for 6 months.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">What is Irritable bowel syndrome (IBS)?</h2>
                  <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                    <p>
                      Irritable bowel syndrome (IBS) is a common disorder that affects large intestine, which may cause cramping, abdominal pain, mucus, bloating gas, diarrhoea or constipation, urgency and feeling of incomplete evacuation. There are 3 types of IBS, (1)IBS with diarrhoea (IBS-D) (2) IBS with Constipation (IBS-C) and (3) IBS with mixed bowel habits. It may be caused by a bacterial infection or parasitic infection (giardiasis) of the intestines. There are some researches to support IBS being caused by an undiscovered active infection.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm relative overflow-hidden">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">What Are the complications of IBS?</h2>
                  <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                    <p>
                      Bloating, Haemorrhoids, Diarrhea, feeling that bowel movement is incomplete, Depression, Fatigue, Fecal impaction, Malnourishment, Anal fissures. Long term complications of IBS includes sleep disturbances, pelvic pain, interstitial cystitis, back pain, fibromyalgia, migraine, temporomandibular joint disorders, post – traumatic stress etc.
                    </p>
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
