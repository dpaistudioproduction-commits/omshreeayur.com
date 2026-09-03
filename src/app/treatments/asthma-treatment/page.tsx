import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { HeartHandshake, FileText, CheckCircle2 } from "lucide-react";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Asthma Treatment - Money Back Guarantee | Omshree Sidha Hospital",
  description: "We are the only one hospital in the world providing money back guaranteed treatment for Asthma. More than 80% patients can leave the inhaler in the very first day.",
  alternates: {
    canonical: "/treatments/asthma-treatment",
  },
  openGraph: {
    title: "Asthma Treatment - Money Back Guarantee | Omshree Sidha Hospital",
    description: "We are the only one hospital in the world providing money back guaranteed treatment for Asthma.",
    url: "https://omshreeayur.com/treatments/asthma-treatment",
    images: [
      {
        url: "/images/treatments/asthma/lungs1.jpg",
        width: 1200,
        height: 630,
        alt: "Asthma Treatment at Omshree Sidha Hospital",
      },
    ],
  },
};

export default function AsthmaTreatmentPage() {
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
              <li className="text-[#66371B]">Asthma Treatment</li>
            </ol>
          </nav>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
              Asthma Treatment
            </h1>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-xl">
            <Image 
              src="/images/treatments/asthma/lungs1.jpg" 
              alt="Asthma Treatment" 
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
                    We are the only one hospital in the world providing money back guaranteed treatment for Asthma, there is option to pay after you are getting the result (subject to terms and conditions).
                  </p>
                  <p>
                    More than 80% patients can leave the inhaler/nebulizer (if they are using one) in the very first day of our treatment itself; others can leave it in few days. At least 95% patients will be cured in one to three months time. We are the only one hospital in the world curing asthma / allergy with a success rate of 99.99%.
                  </p>
                  <p>
                    The recovery is much faster than any other treatment, in a short time you are recovering from asthma attacks. If you are not improving in 2 days time, we will return your money including room rent and food, what else we can do for you? Sometimes the patients may be in their 80's or 90's and they have asthma from the childhood, or the patient is using inhaler and nebulizer many times a day, and using oxygen daily, in such conditions too our treatment is highly effective.
                  </p>
                  <p>
                    This is the herbal remedy or natural treatment for Asthma/Allergy. The duration of the treatment may vary according to the severity of the problem, age of the patient, and other health issues of the patient. Normally we admit the patients for 21 days, rare cases it may take few more days. If you are in short of time we will admit you minimum 11 days and give you 2 treatments daily instead of one normally.
                  </p>
                  <p>
                    If the condition is not improving up to our expectation, you have to continue the treatment without stop, until it reach the expected recovery level. (If the patient is using inhaler/nebulizer more than twice a day, there is chance for taking some more time). Patients have to continue the medicines for one year, rare cases it may take more time; normally we will reduce medicines in every 3 months.
                  </p>
                  <p>
                    If the patient is not having coughing (there is no mucus), and having asthma in such cases the panchakarma therapy and medication may take more time. If the patient is coming in the early stage, they may take comparatively less time.
                  </p>
                  <p>
                    If children is having regular cough, running nose, sneezing, breathing difficulty, fever etc... please bring them we will cure them in a short time. This saves their life, your time and money etc... This is natural treatment for asthma and it is better to start the treatment at the earliest.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm relative overflow-hidden">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">
                    Our challenging offer
                  </h2>
                  <p className="text-lg text-[#81754B] leading-relaxed font-light">
                    If you believe that your Asthma/Allergy is not curable, come to us, we will cure you. You can even pay after getting the result (no need to pay in the beginning of treatment) for more details regarding this offer see our challenging offer page.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Treatment</h2>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    Our asthma treatment is divided in to two parts, one is detoxification therapy (panchakarma) plus internal and external medicines. We will remove toxins and clean your lungs, remove swelling and infection.
                  </p>
                  <p>
                    In case of Asthma our body is producing mucus without any control. In our treatment we are removing the accumulated mucus (cough) from the body, prevents infection, and controls further production of mucus/cough and increase your immune power.
                  </p>
                  <p>
                    A good number of Asthma patients have Skin problems like Eczema/psoriasis. We have our special medicines and treatment techniques to treat them together and cure you. In most cases there is Sneezing, running nose, Sinusitis etc... we have effective treatment for all these ailments.
                  </p>
                  <p>
                    We can assure you the best result. You can go to our testimonials page, there you can see the patients are telling or writing their experience with us, with their names and address, (photo if available) some of them may be known to you, or you may have some close friends near to them. You can enquire them personally.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Medicine</h2>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    We are using pure Ayurvedic/herbal/natural medicines for the treatment of Asthma. We have our own patented medicines for the treatment of the same. We have special medicines to meet the problems faced by each and every Asthma patients.
                  </p>
                  <p>
                    The medicines differ according to the condition and requirements of the patients. Each patient is different from the other, and their problems too differ slightly, but we have solutions for all of their problems.
                  </p>
                  <p>
                    We have our own Medicine Manufacturing unit, having GMP Certificate. We use quality materials for the manufacture of these quality medicines.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-8 text-[#66371B]">Benefits of our treatment</h2>
                  <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                    <p>
                      More than 80% of the patients can live without inhaler (if they are using one) in the first day of our treatment itself; others can leave the inhaler within a few days. More than 95% people will be cured with in one to three months time. Others may take some more time.
                    </p>
                    <p>
                      The speed of recovery depends on many factors including the severity of the problem, the age of the patient, how long the patient is suffering from asthma, his/her food habits, place of living, other medicines they are using to treat other ailments, and to what extent they are following the instructions given by us.
                    </p>
                    <p>
                      Our treatment is beneficial to everybody. This is giving 99.99% results. You need not to waste your money and time. If you are not cured we will return your money (subject to terms and conditions).
                    </p>
                    <p>
                      Our medicines are free from side effects and at the same time it protects you from some other ailments as well. Your immune system will work much better than before. Our medicines help to remove the side effects of medicines that you have taken earlier.
                    </p>
                    <p>
                      Our medications for asthma will help to remove the inflammation in your airways, lungs and throat etc... and will also controls/stop further production of sputum/mucus. Inflammation, infections and sputum creates blocks in the airways and you will not be able to breathe properly. Sometimes the sputum may be sticky and creates more problems; in our treatment firstly we will remove the sputum, infection and inflammation.
                    </p>
                    <p>
                      The medications will also remove toxins from the body and increase expansion and contraction power of the lungs as well. We are not suppressing the cough, we are removing it.
                    </p>
                    <p>
                      We provide you with the best facilities and comfort while you are with us. You may have noticed that your lungs capacity is gradually decreasing. Our treatment helps to regain the lungs capacity. This is comparatively cost effective and normal people can afford it.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">Duration of the treatment</h2>
                <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                  <p>
                    Normally more than 95% of the patient will be cured within three months; others may take some more time. Everybody have to continue the medications normally for one year, and we will reduce the medicines quarterly.
                  </p>
                  <p>
                    Rare cases the duration may increase, all depends on how fast the patient is recovering. There may be exceptional cases, they have to continue the medicine for more than one year. In case of premature babies and older people, it may take comparatively more time, we can't say it exactly .
                  </p>
                  <p>
                    If a patient is under treatment for other ailments, there is chance for taking comparatively more time. If the immune system is very weak, it may take comparatively more time.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                    <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">Things to follow</h3>
                    <p className="text-[#81754B] font-light leading-relaxed">
                      Asthma patients must avoid cold foods and drinks, curd, anything soured, fermented items, yogurt, pickles, vegetables like ladies finger, Brinjal, and vegetable leafs. Avoid foods like Dossa, Iddaly and like ones. Avoid sprays, cosmetics and powder. It is better to avoid soft drinks, readymade foods, toffees, chocolates etc... If you find anything allergic to you avoid it. While taking bath use lukewarm water, do not expose to cold winds. If you are using A/c, avoid the cold wind directly touching your body, change the direction of air flow.
                    </p>
                  </div>

                  <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                    <h3 className="font-heading font-normal text-2xl mb-4 text-[#66371B]">How to boost your immune</h3>
                    <p className="text-[#81754B] font-light leading-relaxed">
                      After taking treatment and medicines from us your immune system will be much better than before. You have to keep it. Everybody knows that the use of antibiotics and number of other medicines will harming your immune system. Naturally you too have normal cough, cold etc... If you have any such issues use our medicines, which will solve your problem much faster than the other medicines and keeps your immune better and better. Normally one or two packets of medicine will be sufficient for one year. It is cost effective too. Your family members too can use these medicines if they have cough, cold etc...
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">What is Asthma ?</h2>
                  <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                    <p>
                      Asthma is the common chronic long lasting inflammatory disease of the airways characterized by variable and recurring symptoms, reversible airflow obstruction, and bronchospasam. Sometimes it is hereditary.
                    </p>
                    <p>
                      Inflammation causes the airways to spasm and swells periodically so that the airways narrow. Asthma patients usually experience these symptoms most frequently during the night and in the early morning. Symptoms may include wheezing, coughing, chest tightness and shortness of breath. It is caused by a combination of genetic and environmental factors the individual then wheezes or gasps for air.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2.5rem] border border-[#DBCFA8]/50 shadow-sm relative overflow-hidden">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl mb-6 text-[#66371B]">About this Invention</h2>
                  <div className="prose prose-lg max-w-none text-[#81754B] font-light leading-relaxed">
                    <p>
                      I Jose Vaidhyan developed this new treatment techniques and medicines during the period of 1996 – 2002. My wife and son was suffering from Asthma for long time and tried all types of medicines (Allopathy, Ayurveda and Homeopathy). They got only temporary relief and the problem worsens day by day.
                    </p>
                    <p>
                      I discussed this problem with my father Audhan Vaidhyan and he shared his experience with my Grandfather (Kochukutty Vaidhyan) who treated many Asthma patients and the patients got some relief. I want to give some relief to my wife and son.
                    </p>
                    <p>
                      In 1996 I tried some Ayrvedic medicines under the guidance of my father and her condition improved little. I continued my effort, I want success, I am not satisfied with anything else. I referred many Ayurveda books and learned more and more. I developed my on herbal combinations which gave better result. I tried to understand more and more.
                    </p>
                    <p>
                      I continued my effort by changing the combinations and closely watching the results. Finally in 2001-2002 I cured both of them successfully. Some of our friends came to know about this and requested to cure them too and I cured them successfully. Finally in 2004 I applied for the Indian Patent right and I Got it in 2007. I belong to a traditional Ayurveda Vaidhya family; details are available in the Home Page.
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
                      <Button render={<Link href="/patient-care/consultation" />} className="w-full bg-[#517B32] hover:bg-[#6F9940] text-white rounded-full px-6 h-12 text-xs tracking-widest uppercase font-bold transition-colors">
                        Start Assessment
                      </Button>
                      <Button render={<Link href="https://wa.me/919846992789" target="_blank" />} variant="outline" className="w-full border-[#DBCFA8] text-[#66371B] hover:bg-[#FDFBF7] rounded-full px-6 h-12 text-xs tracking-widest uppercase font-bold transition-colors">
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
