import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Wellness Ayurvedic Treatments - OmShree Sidha Hospital",
  description: "Omshree Sidha Hospital offers wellness Ayurvedic treatments including detoxification, rejuvenation, stress relief, skin care, and programs for obesity and diabetes.",
  alternates: {
    canonical: "/treatments/wellness-ayurvedic-treatments",
  },
  openGraph: {
    title: "Wellness Ayurvedic Treatments - OmShree Sidha Hospital",
    description: "Omshree Sidha Hospital offers wellness Ayurvedic treatments including detoxification, rejuvenation, stress relief, skin care, and programs for obesity and diabetes.",
    url: "https://omshreeayur.com/treatments/wellness-ayurvedic-treatments",
    images: [
      {
        url: "/images/treatments/wellness-ayurvedic-treatments.jpg",
        width: 1916,
        height: 1020,
        alt: "Wellness Treatments",
      },
    ],
  },
};

export default function WellnessTreatmentsPage() {
  return (
    <div className="flex flex-col w-full bg-[#FDFBF7] font-sans">
      {/* Hero Section */}
      <section className="bg-[#FDFBF7] pt-32 pb-16 md:pb-24">
        <div className="w-full px-[4%]">
          <nav className="flex justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B4833D] mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-3">
              <li><Link href="/" className="hover:text-[#66371B] transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/treatments" className="hover:text-[#66371B] transition-colors">Treatments</Link></li>
              <li><span>/</span></li>
              <li className="text-[#66371B]">Wellness Treatments</li>
            </ol>
          </nav>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-heading font-normal text-5xl sm:text-6xl md:text-7xl text-[#66371B] leading-[1.1] mb-8">
              Wellness Treatments
            </h1>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-xl">
            <Image 
              src="/images/treatments/wellness-ayurvedic-treatments.jpg" 
              alt="Wellness Treatments" 
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
                  
                  <h1 className="text-4xl text-center font-heading font-normal text-[#66371B] mt-12 mb-6">Wellness Treatments</h1>
                  
                  <ol className="list-decimal pl-6 space-y-2">
                    <li className="text-left"><strong>Wellness to remove stress</strong></li>
                    <li className="text-left"><strong>Wellness to remove toxins</strong> (De toxification programme)</li>
                    <li className="text-left"><strong>Wellness to remove Psoriasis, Eczema, Black spots, other skin problems, and general skin care.</strong></li>
                    <li className="text-left"><strong>Wellness to remove pain, stiffness, swelling and regain flexibility</strong>.</li>
                    <li className="text-left"><strong>Wellness to remove Asthma/Allergy/Sneezing/ running nose/Migraine/Sinusitis</strong></li>
                    <li className="text-left"><strong>Wellness to remove sexual disorders and revitalization therapy </strong></li>
                    <li className="text-left"><strong>Rejuvenation therapy</strong></li>
                    <li className="text-left"><strong>Wellness to remove Obesity/Over weight</strong></li>
                    <li className="text-left"><strong>Wellness for Diabetics. Remove numbness, pain swelling etc…. and improve blood circulation</strong></li>
                  </ol>
                  
                  <p>&nbsp;</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>1. Wellness to remove stress and sleeplessness<br/></strong></h2>
                  <p>We deliver a de-stress programme which comprises:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Full body relaxation massage using special ayurvedic oil</li>
                    <li>Medicated Steam bath</li>
                    <li>Shirodhara using special ayurvedic oil</li>
                    <li>Therapeutic vomiting(<em>vamana</em> ), purgation (<em>virechana</em> ), and internal medicines are optional</li>
                  </ol>
                  <p>The treatment helps in reducing stress &amp; provides a good sleep with the calmness of mind and soul. Even though you are not getting  sleep for very long time, our treatment will give you very good sleep.</p>
                  <p>Duration:-7-28 days</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Our Stress removing package starts from INR 2800.00 per day (Which includes full body massage, steam bath and shirodhara total 90 minutes)  Better packages for INR 3550 (120 minutes), INR 4050 (150 minutes), INR 4750 (180 minutes).  Details of room rent and food is available in our website</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"> 2. <strong>Wellness to remove toxins</strong> (De toxification program)</h2>
                  <p>This Treatment includes:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Full body Ayurvedic Oil massage using special oils</li>
                    <li>Ela Kizhi</li>
                    <li>Vasti</li>
                    <li>Shirodhara</li>
                    <li>Njavarakizhi</li>
                    <li>Nasyam</li>
                    <li>Therapeutic vomiting(<em>vamana</em> ), purgation (<em>virechana</em> ), and internal medicines are optional</li>
                  </ol>
                  <p>This treatment helps in prevention of diseases and long-term maintenance of health by Panchakarma treatments and it helps in balancing body,  mind and soul. It also helps to correct metabolism and also helps in the evacuation of toxins.</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Our Detoxification  package starts from INR 3500.00 per day.<br/>Duration:- 7 &#8211; 28 days</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>Our Toxin removing package starts from INR 3500.00 per day.</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6">3. <strong>Wellness to remove Psoriasis, Eczema, Black spots, other skin problems, and general skin care.</strong></h2>
                  <p>Treatment includes:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Full body Ayurveda oil massage using special oil</li>
                    <li>Full body special herbal Dhara</li>
                    <li>Deeply penetrating herbal paste lymphatic massage</li>
                    <li>Steam Bath</li>
                    <li>Therapeutic vomiting(<em>vamana</em> ), purgation (<em>virechana</em> ), and internal medicines are optional</li>
                  </ol>
                  <p>This treatment helps in removing itching, scaling plaques, patches, roughness,  inflammation, cracks, bleeding,  oozing or crustingsoreness, burning, psoriatic arthritis etc…and makes the skin glossy and removes the marks caused by psoriasis or eczema. If you continue at least external medicines you will regain original skin color in 3 months and prevents further attacks.</p>
                  <p>Duration:-21-28 days</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Our psoriasis or eczema removing package starts from INR 3500.00 per day.</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"> 4. <strong>Wellness to remove pain, swelling and regain flexibility</strong></h2>
                  <p>This is extremely  good in Arthritis, Osteoarthritis, Knee pain, Rheumatoid arthritis, Spondylosis, Muscle pain, degeneration etc…</p>
                  <p>Treatment includes:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Full body Ayurveda oil massage using special oil</li>
                    <li>Herbal Steam bath</li>
                    <li>Pinda Swedana (A deep cleansing treatment using special rice cooked in milk or herbs that is massaged into the tissues and joints.) or Elakizhi or podikizhi</li>
                    <li>Udvartanam : Deeply penetrating herbal powder/paste lymphatic massage</li>
                    <li>Therapeutic  purgation (<em>virechana</em>),  Nasal cleansing (<em>nasya</em> )and internal medicines are optional</li>
                  </ol>
                  <p>This treatment helps in removing pain, swelling, stiffness etc…and makes the body flexible and healthy. You will be able to bend forward and backward, climb steps easily etc… It helps in preventing further degeneration.<br/>Duration:-21-28 days</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Our pain and swelling removing package starts from INR 3500.00 per day.</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>5. Wellness to remove Asthma/Allergy/Sneezing/ running nose/Migraine/Sinusitis</strong></h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Full body Ayurveda oil massage using special oil</li>
                    <li>Herbal Steam bath</li>
                    <li>Nasal cleansing (<em>nasya</em> )</li>
                    <li>Udvartanam : Deeply penetrating herbal paste lymphatic massage</li>
                    <li>Therapeutic vomiting(<em>vamana</em> ), purgation (<em>virechana</em> ), and internal medicines are optional</li>
                  </ol>
                  <p>This treatment helps in removing cough, breathing difficulty, sneezing, running nose, head ache etc…and you will be able to breath easily, tiredness will come down and you will be able to perform all activities much better than before. If you use internal medicines and continue it for some time as per direction, it will cure you.<br/>Duration:-21-28 days</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Our Asthma/Allergy/Sneezing/ running nose/Migraine/Sinusitis</p>
                  <p>package starts from INR 3500.00 per day.</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>6. Wellness to remove sexual disorders</strong></h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Full body Ayurveda oil massage using special oil</li>
                    <li>Ela Kizhi</li>
                    <li>Vasti</li>
                    <li>Herbal Steam bath</li>
                    <li>Internal medicine</li>
                    <li>Therapeutic vomiting(<em>vamana</em> ), purgation (<em>virechana</em> ), and internal medicines are optional</li>
                  </ol>
                  <p>In case of men this treatment helps in better blood flow, removes erection problems, gets much more mental and physical satisfaction, makes you healthy and energetic.  In case of woman this treatment helps in removing pain, PCOD/PCOS, normalize menstrual cycle, gives better shape to the body, removes fat deposits in and around stomach, vaginal  itching etc…<br/>Duration:-21-28 days</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Sexual disorder removing package starts from INR 3500.00 per day.</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>7. Rejuvenation therapy</strong></h2>
                  <p>Rejuvenation is like a treasure where everybody quenches to achieve it. The package includes:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Ayurveda Oil massage</li>
                    <li>Pinda Swedana (A deep cleansing treatment using special rice cooked in milk or herbs that is massaged into the tissues and joints.</li>
                    <li>Herbal steam bath</li>
                    <li>Kashayavasti</li>
                    <li>Therapeutic vomiting(<em>vamana</em> ), purgation (<em>virechana</em> ), and internal medicines are optional</li>
                  </ol>
                  <p>The treatment helps in keeping body young and agile, increases the longevity of life and immunity, enhances one&#8217;s energy and also helps in preventing/curing diseases.</p>
                  <p>Duration:-21-28 days</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Our Rejuvenation therapy package starts from INR 3500.00 per day.</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>8. Wellness to remove Obesity/Over weight</strong></h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Full body massage using special oils</li>
                    <li>Deep, dry massages using special herbal powders and pastes</li>
                    <li>Herbal steam bath</li>
                    <li>Therapeutic vomiting(<em>vamana</em> ), purgation (<em>virechana</em> ), and internal medicines are optional</li>
                  </ol>
                  <p>This treatment helps in melting and removing fat deposits and gives your body better shape and attractive.  Body weight will come down daily.  This treatment is also helpful in removing toxins, improving immune power and helps in preventing a number of diseases.  You may feel much younger than before.</p>
                  <p>Duration:-21-28 days</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Our Obesity/overweight package starts from INR 3500.00 per day.</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>9. Wellness for Diabetics/diabetic neuropathy</strong></h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Full body massage using special oils</li>
                    <li>Deep, dry massages using special herbal powders and pastes</li>
                    <li>Pinda Swedana (A deep cleansing treatment using special rice cooked in milk or herbs that is massaged into the tissues and joints</li>
                    <li>Herbal steam bath.</li>
                    <li>Therapeutic vomiting (<em>vamana</em> ), purgation (<em>virechana</em> ), and internal medicines are optional</li>
                  </ol>
                  <p>This treatment helps in removing diabetic neuropathy, numbness, toxins, fat deposits and pain, improves blood circulation, fat deposits and gives your body better shape and attractive  You may feel much younger than before.</p>
                  <p>Duration:-21-28 days treatment</p>
                  <p>Location: You can choose a calm and quite village area called Vayala or you can choose a city Kochi (Cochin) as per your preference.</p>
                  <p>We have different packages to suite your budget.</p>
                  <p>Our Diabetics/diabetic neuropathy package starts from INR 3500.00 per day.</p>
                  
                  <p>&nbsp;</p>
                  
                  <h1 className="text-4xl text-center font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>Wellness Treatments</strong></h1>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>1. Wellness to remove stress/sleeplessness</strong></h2>
                  <p>The treatment helps in reducing stress &amp; provides a good sleep with the calmness of mind and soul. Duration:-7-21 days</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>2. Wellness to remove toxins</strong>(De toxification programme)</h2>
                  <p>This treatment helps in prevention of diseases and long-term maintenance of health by Panchakarma treatments and it helps in balancing body, mind and soul. It also helps to correct metabolism and also helps in the evacuation of toxins. Duration:-21-28 days</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>3. Wellness to remove Psoriasis, Eczema and other skin problems</strong></h2>
                  <p>This treatment helps in removing itching, scaling plaques, patches, roughness,  inflammation, cracks, bleeding,  oozing or crustingsoreness, burning, psoriatic arthritis etc…and makes the skin glossy and removes the marks caused by psoriasis or eczema. If you continue at least external medicines you will regain original skin color in 3 months and prevents further attacks.   Duration:- 21-28 daysW</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>4. Wellness to remove pain &amp; swelling and regain flexibility</strong>.</h2>
                  <p>This treatment helps in removing swelling, stiffness etc…and makes the body flexible and healthy. You will be able to bend forward and backward, climb steps easily etc… It helps in preventing further degeneration. Duration:- 21-28 days</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>5. Wellness to remove Asthma/Allergy/ Sneezing/ Running nose/Migraine/Sinusitis</strong></h2>
                  <p>This treatment helps in removing cough, breathing difficulty, sneezing, running nose, head ache etc…and you will be able to breath easily, tiredness will come down and you will be able to perform all activities much better than before. If you use internal medicines and continue it for some time as per direction, it will cure you. Duration:- 21-28 days</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>6. Wellness to remove sexual disorders</strong></h2>
                  <p>In case of men this treatment helps in better blood flow, removes erection problems, gets much more mental and physical satisfaction, makes you healthy and energetic.  In case of woman this treatment helps in removing pain, PCOD/PCOS, normalize menstrual cycle, gives better shape to the body, removes fat deposits in and around stomach etc… Duration:- 21-28 days</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>7. Rejuvenation therapy</strong></h2>
                  <p>Rejuvenation is like a treasure where everybody quenches to achieve it. It helps in keeping body young and agile, increases longevity of life &amp; immunity, enhances one&#8217;s energy, helps in preventing/curing diseases. Duration:- 21-28 days</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>8. Wellness to remove Obesity/Over weight</strong></h2>
                  <p>This treatment helps in melting and removing fat deposits and gives your body better shape and makes more attractive.  Body weight will come down daily.  This treatment is also helpful in removing toxins, improving immune power and helps in preventing a number of diseases.  You may feel much younger than before. Duration:- 21-28 days</p>
                  
                  <h2 className="text-3xl font-heading font-normal text-[#66371B] mt-12 mb-6"><strong>9. Wellness for Diabetics/Diabetic neuropathy</strong></h2>
                  <p>This treatment helps in removing diabetic neuropathy, numbness, toxins, fat deposits and pain, swelling. It improves blood circulation, and gives your body better shape and become more attractive  You may feel much younger than before. Duration:- 21-28 days</p>
                  
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
