import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Low Ejection Fraction (EF) | Omshree Sidha Hospital",
  description: "Advanced Ayurvedic Approach to Low Ejection Fraction at Omshree Sidha Hospital.",
};

export default function LowEjectionFractionPage() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
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
                  <Link href="/conditions/cardiovascular" className="hover:text-white transition-colors">Cardiovascular</Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[#517B32]/40 text-[#E3D8C1] border border-[#6F9940]/40 text-xs font-bold uppercase tracking-wider mb-6">
              Understanding
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F7F1E1]">
              Low Ejection Fraction (EF)
            </h1>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-10">
              Low EF means that your heart muscle is not pumping out enough blood to the body with each beat. Ejection fraction is a measurement calculated as a percentage. It represents the amount of blood the lower left chamber (left ventricle) of your heart pumps out each time it contracts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button render={<Link href="/patient-care/consultation" />} size="lg" className="w-full sm:w-auto">
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
          <div className="lg:col-span-8 space-y-12">
            
            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Classification</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>Understanding Your Heart’s Functional Stage: The NYHA classification. To help track how your heart condition affects your daily life, healthcare providers use a standard four-stage system called the New York Heart Association (NYHA) Classification.</p>
                <p>This system looks at how much physical activity you can do before feeling symptoms like shortness of breath or fatigue. Understanding your class helps us tailor your care and measure your steady progress.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Class I (No Symptoms):</strong> Your heart is working well enough that you do not experience any heart failure symptoms during regular, everyday activities. You can move around and go about your day normally.</li>
                  <li><strong>Class II (Mild Symptoms):</strong> You feel perfectly comfortable while resting and can handle simple everyday tasks. However, pushing yourself—such as climbing a steep hill or lifting heavy groceries—causes mild shortness of breath or fatigue.</li>
                  <li><strong>Class III (Moderate Symptoms):</strong> Your physical activity is noticeably limited. While you still feel completely fine while sitting or resting, even basic, light household chores or walking short distances make you feel tired or short of breath.</li>
                  <li><strong>Class IV (Severe Symptoms):</strong> This is the most advanced stage, where you are unable to carry out any physical activity without discomfort. Symptoms like shortness of breath, fatigue, or chest tightness occur even while you are sitting still or resting in bed.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">How can I improve my Ejection Fraction (EF)</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>Improving Ejection Fraction (EF) depends on how you are treating the underlying cause of the weakened heart. EF can improve with proper treatment, lifestyle changes, and regular monitoring. At Omshree Sidha Hospital, we improve EF in short time. We can improve EF considerably in a month or two. If you have only low EF and there is no other health issues, EF will improve faster. If you have other health issues, the progress is bit slower. We have the Best Ayurvedic Treatment for Low Ejection Fraction (EF). We can do Echo after 7 or 14 days and ensure the EF is improving. Patients have to continue their current modern medicine until they fully recover.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Treatment</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-8 mb-4">What happens to you in the first one to three months</h3>
                <h4 className="font-heading text-xl font-bold text-[#66371B] mb-4">Reclaiming Your Heart Health: What to Expect from Your Treatment</h4>
                <p>Once you begin your low Ejection Fraction (EF) treatment at Omshree Sidha Hospital, our primary focus is to naturally revitalize your heart muscle and restore its pumping power. As your heart becomes stronger, blood circulation and oxygen levels throughout your entire body will improve, allowing your symptoms to lift gradually.</p>
                <p>Here is what most patients experience as their heart heals:</p>
                
                <h4 className="font-heading text-xl font-bold text-[#66371B] mt-6 mb-2">Within the First Month:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Comfortable Breathing & Better Sleep:</strong> Shortness of breath begins to lift, allowing you to breathe easily and rest peacefully throughout the night without discomfort.</li>
                  <li>Most cases EF will improve approximately 25% to 50% of your existing EF within a month (if it is 30% it becomes 37.5% to 45% approximately), exceptional cases it may take more time for e.g. if ICD is inserted, it takes more time. Percentage of improvement vary from patient to patient.</li>
                  <li><strong>Relief from Coughing:</strong> Persistent coughing or chest congestion typically resolves within these first few weeks.</li>
                  <li><strong>Fluid Reduction:</strong> Swelling in your legs, ankles, or abdomen will start to disappear entirely, making you feel much lighter and more comfortable.</li>
                  <li><strong>Improved Digestion:</strong> Your appetite will be better and digestive discomfort will significantly ease.</li>
                </ul>

                <h4 className="font-heading text-xl font-bold text-[#66371B] mt-6 mb-2">Over the Next 3 to 6 Months:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Restored Energy & Stamina:</strong> Your fatigue will give way to lasting energy. Most patients find themselves comfortably walking 5 to 6 kilometres and climbing stairs without struggling.</li>
                  <li><strong>Heart Rhythm & BP Stabilization:</strong> Your blood pressure will naturally balance out, and uncomfortable heart palpitations will steadily fade away.</li>
                  <li><strong>Freedom from Fluid Restrictions:</strong> As your heart's efficiency is fully restored, you will be able to drink plenty of water safely and comfortably without any daily limits.</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-8 mb-4">How We Track Your Success</h3>
                <p>A complete recovery is typically achieved within 3 to 6 months. Your physical healing will be matched by clinical proof; we will closely monitor your steady heart improvement through regular echocardiograms (Echo) and supportive blood tests so you can see your heart is getting stronger every single month.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Causes of low EF</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>A low ejection fraction (EF) is caused by conditions that weaken, stretch, or permanently damage the heart muscle, hindering its ability to contract powerfully. The most frequent underlying causes of a low EF include:</p>
                
                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">Damage to the Heart Muscle</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Coronary Artery Disease (CAD):</strong> Narrowed arteries restrict oxygen-rich blood flow to the heart, gradually starving and weakening the muscle tissue over time.</li>
                  <li><strong>Heart Attack (Myocardial Infarction):</strong> A sudden blockage completely cuts off blood supply to a portion of the heart, replacing healthy muscle tissue with non-pumping scar tissue.</li>
                  <li><strong>Cardiomyopathy:</strong> A disease of the heart muscle itself that causes it to become stretched out and enlarged (dilated cardiomyopathy), preventing efficient contractions.</li>
                  <li><strong>Myocarditis:</strong> Inflammation of the heart muscle, typically triggered by a viral infection, which temporarily or permanently reduces pumping strength.</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">Structural and Mechanical Strain</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chronic High Blood Pressure (Hypertension):</strong> Forces the heart to work much harder to push blood out to the body, eventually causing the muscle to stiffen or wear out.</li>
                  <li><strong>Heart Valve Disease:</strong> Leaky or narrowed valves disrupt smooth blood flow, causing blood to back up or forcing the heart to pump against intense resistance.</li>
                  <li><strong>Congenital Heart Defects:</strong> Structural heart abnormalities present since birth can cause abnormal wear and tear on the ventricles over time.</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">Other Contributing Factors</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Severe Arrhythmias:</strong> An abnormally fast or chaotic heart rate over a prolonged period does not allow the heart chambers to fill or contract effectively, exhausting the muscle.</li>
                  <li><strong>Cardiotoxicity:</strong> Certain heavy medical interventions, such as specific chemotherapy drugs or radiation therapy to the chest, can damage cardiac cells.</li>
                  <li><strong>Substance Abuse:</strong> Long-term excessive consumption of alcohol or illegal drugs directly damages heart tissue (toxic cardiomyopathy).</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Symptoms of low EF</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>Symptoms of a low ejection fraction (EF) occur because the weakened heart muscle cannot pump enough oxygen-rich blood to meet the body's needs, causing blood and fluid to back up into the lungs and tissues.</p>
                <p>The primary symptoms are grouped by how they affect the body:</p>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">Breathing Difficulties (Fluid Dynamics)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Shortness of Breath (Dyspnea):</strong> Feeling winded during everyday activities, like walking or climbing stairs.</li>
                  <li><strong>Orthopnea:</strong> Difficulty breathing when lying flat, often requiring extra pillows to sleep comfortably.</li>
                  <li><strong>Paroxysmal Nocturnal Dyspnea:</strong> Waking up suddenly in the middle of the night gasping for air.</li>
                  <li><strong>Chronic Cough or Wheezing:</strong> A persistent cough that may produce white or pink-tinged phlegm, caused by fluid building up in the lungs.</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">Systemic Fluid Retention (Congestion)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Peripheral Edema:</strong> Obvious swelling in the legs, ankles, and feet.</li>
                  <li><strong>Abdominal Swelling (Ascites):</strong> Bloating, tightness, or swelling in the stomach area.</li>
                  <li><strong>Sudden Weight Gain:</strong> Gaining 1 to 1.5 kg (2 to 3 pounds) in a single day or over 2 kg in a week, which indicates rapid water retention rather than fat.</li>
                  <li><strong>Gastrointestinal Distress:</strong> A constant feeling of fullness, nausea, or a total loss of appetite due to fluid backing up into the digestive organs.</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">Low Blood Flow (Perfusion Issues)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Severe Fatigue:</strong> Feeling profoundly exhausted or weak because muscles are starved of oxygenated blood.</li>
                  <li><strong>Exercise Intolerance:</strong> Finding it physically impossible to complete exercises or chores that used to be easy.</li>
                  <li><strong>Cognitive Changes:</strong> Dizziness, lightheadedness, confusion, or difficulty concentrating caused by reduced blood flow to the brain.</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">Cardiac Compensation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Palpitations:</strong> A sensation of a racing, pounding, fluttering, or skipping heartbeat as the heart attempts to beat faster to make up for its low pumping power.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Treat the Underlying Causes of low EF</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>Low Ejection Fraction treatment at Omshree Sidha Hospital, with proper medication, Panchakarma, and proper physical exercise, we improve the EF in short time. We treat it from the root cause level. Low EF often occurs due to conditions such as coronary artery blockage (plaque build-up, clot or calcification), cardiomyopathy, high blood pressure, heart valve disease, or previous heart attack. Treating these root causes can improve heart function in a short time.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Management of low EF</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>At Omshree Sidha Hospital manage the low EF in the following ways:</p>
                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">Medications for low Ejection Fraction</h3>
                <h4 className="font-heading text-xl font-bold text-[#66371B] mb-2">Our Advanced Ayurvedic Approach to Low Ejection Fraction</h4>
                <p>At Omshree Sidha Hospital, we specialize in providing advanced, non-surgical treatment to restore your heart's natural pumping power. Every patient’s heart is unique, which is why we customize your treatment plan using a precise combination of classical Ayurvedic formulations, proprietary blends, and specialized medicines tailored entirely to your specific condition.</p>
                <p>Our targeted treatments are designed to heal and revitalize your heart at the root level by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Healing the Heart Muscle:</strong> Our natural formulations help reduce swelling, soften stiffness, and minimize scar tissue within the heart walls.</li>
                  <li><strong>Boosting Pumping Power:</strong> By strengthening the heart muscle and improving blood circulation directly to the heart, your left ventricle is naturally able to pump blood more effectively and efficiently.</li>
                  <li><strong>Stabilizing Vital Signs:</strong> Our therapies help bring your pulse rate and blood pressure back into a healthy, balanced range.</li>
                </ul>

                <h4 className="font-heading text-xl font-bold text-[#66371B] mt-6 mb-2">Premium Quality & Comprehensive Care</h4>
                <p>To ensure the absolute highest standards of safety and efficacy, all of our internal and external Ayurvedic medicines are meticulously prepared right here in our own state-of-the-art, GMP-certified manufacturing unit.</p>
                <p>Depending on your overall health and needs, our comprehensive low EF care plans also integrate specialized Panchakarma therapies—gentle, deep-acting detox and rejuvenation treatments that help lower stress on your cardiac system and accelerate your path to recovery.</p>
                <p>Experience the pinnacle of natural cardiac healing at our world-class center for Ayurvedic cardiomyopathy treatment in Kerala, India.</p>
                <p>We have best medicines to treat low EF. We use pure Ayurveda medicines for the treatment of low E F. We use classical medicines, Patent/Proprietary medicines and Special medicines according to your condition. Medicines for low Ejection Fraction, that we use help to remove swelling in the heart muscles, remove scars and stiffness in the heart muscles. Our medicines Improves blood circulation in the heart muscles and strengthen the heart muscles. These in turn results in improving heart’s ability to pump more effectively and efficiently. These Ayurveda medicines will help in stabilising pulse rate and Blood pressure etc. We have the best cardiomyopathy treatment in India, Kerala. There are internal and External Ayurvedic medicines for the treatment of low Ejection Fraction (EF), which we are preparing at our own GMP certified manufacturing unit. Our Ayurvedic treatment for low ejection fraction includes Panchakarma.</p>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-8 mb-4">2. Panchakarma therapy to improve EF</h3>
                <p>It includes Ayurvedic oil massage (Abhyanga), Elakizhi or Podikizhi and Hrudaya Basti.</p>

                <h4 className="font-heading text-xl font-bold text-[#66371B] mt-6 mb-2">Ayurvedic oil massage (Abhyanga)</h4>
                <p>Massage using specially prepared Ayurvedic herbal oils, helps to nourish the tissues, improve circulation, remove swelling, toxins, and restore the natural balance in the body.</p>
                <h5 className="font-heading text-lg font-bold text-[#66371B] mt-4 mb-2">Main Benefits of Abhyanga</h5>
                
                <div className="my-8 rounded-2xl overflow-hidden border border-[#DBCFA8]">
                  <Image src="/images/conditions/low-ejection-fraction/low-ef-abhyanga.webp" alt="Abhyanga Ayurvedic Oil Massage" width={800} height={500} className="w-full h-auto object-cover" />
                </div>

                <ul className="space-y-4">
                  <li><strong>1. Improves Blood Circulation in the Heart</strong><br/>Massage with specially prepared warm herbal oils improves blood flow, helping oxygen and nutrients reach tissues more effectively.</li>
                  <li><strong>2. Strengthen Heart Muscles</strong><br/>Oil massage nourishes muscles and joints, reducing stiffness, pain, and fatigue.</li>
                  <li><strong>3. Relieves Stress and Promotes Relaxation</strong><br/>The soothing effect of our special herbal oils calms the nervous system, reduces stress, and improves sleep quality.</li>
                  <li><strong>4. Improves Skin Health</strong><br/>Herbal oils deeply moisturize the skin, improve texture, and maintain skin elasticity.</li>
                  <li><strong>5. Helps in Detoxification of Heart and body</strong><br/>Massage using our special herbal oil stimulates lymphatic circulation and helps the body remove metabolic wastes and toxins.</li>
                  <li><strong>6. Improves Heart and Nervous System Function</strong><br/>Gentle oil massage over the chest and body with our specially prepared Ayurvedic oils helps relax the heart area, removes swelling, improves circulation, and supports overall cardiovascular health.</li>
                  <li><strong>7. Increases Energy and Vitality</strong><br/>Regular Abhyanga (oil message) improves strength, flexibility, and overall well-being</li>
                </ul>

                <h4 className="font-heading text-xl font-bold text-[#66371B] mt-10 mb-2">Elakizhi and Podikizhi</h4>
                <div className="my-8 rounded-2xl overflow-hidden border border-[#DBCFA8]">
                  <Image src="/images/conditions/low-ejection-fraction/low-ef-kizhi-clean.png" alt="Elakizhi and Podikizhi Therapy" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
                <p>Elakizhi and Podikizhi are specialized Ayurvedic therapies (Kizhi) involving medicinal boluses applied to the body. Elakizhi uses medicated leaves, offering a soothing, nourishing effect for muscle. Podikizhi uses dried herbal powders, providing a dry, stimulating, and invigorating treatment for stiffness and inflammation.</p>
                
                <h5 className="font-heading text-lg font-bold text-[#66371B] mt-4 mb-2">Main Benefits Kizhi</h5>
                <ul className="space-y-4">
                  <li><strong>Reduces Pain and Inflammation of Heart Muscles.</strong> It is very effective for heart muscle stiffness, and inflammatory conditions like cardiomyopathy.</li>
                  <li><strong>Improves Blood Circulation</strong><br/>Enhance circulation and nourish muscles.</li>
                  <li><strong>Relieves Heart Muscle Stiffness</strong><br/>Helps loosen tight/stiff heart muscles and improves flexibility.</li>
                  <li><strong>Useful in Neurological Disorders</strong><br/>Beneficial in nerve-related weakness.</li>
                  <li><strong>Detoxifies the Heart and Body</strong><br/>The sweating effect helps remove toxins from tissues.</li>
                  <li><strong>Reduces Swelling of Heart muscles and Edema</strong><br/>Particularly useful in inflammatory swellings of heart muscles.</li>
                </ul>

                <h4 className="font-heading text-xl font-bold text-[#66371B] mt-10 mb-2">Hrudaya Basti</h4>
                <div className="my-8 rounded-2xl overflow-hidden border border-[#DBCFA8]">
                  <Image src="/images/conditions/low-ejection-fraction/low-ef-hrudaya-basti-clean-close.png" alt="Hrudaya Basti Therapy" width={1024} height={600} className="w-full max-h-[500px] object-cover" />
                </div>
                <p>Hrudaya Basti is a special Ayurvedic therapy in which warm medicated oil is retained over the heart region (chest) using a dough ring for a specific period (30 to 45 minutes). This treatment nourishes the heart muscles, improves blood circulation, and strengthens the cardiac muscles.</p>
                
                <h5 className="font-heading text-lg font-bold text-[#66371B] mt-4 mb-2">Main Benefits Hrudaya Basti</h5>
                <ul className="space-y-4">
                  <li><strong>1. Strengthens the Heart Muscles</strong><br/>The warm medicated oil nourishes the heart tissues and helps improve cardiac function.</li>
                  <li><strong>2. Improves Blood Circulation</strong><br/>Enhances blood flow around the heart and chest region, improving oxygen supply to tissues.</li>
                  <li><strong>3. Helps in Low Ejection Fraction (Low EF)</strong><br/>Supports heart muscle strength and may help improve pumping efficiency.</li>
                  <li><strong>4. Relieves Chest Tightness and Discomfort</strong><br/>Reduces heaviness, tightness, and discomfort in the chest area, which in turn improves the pumping.</li>
                  <li><strong>5. Beneficial for Heart Diseases</strong><br/>Useful in conditions like heart weakness, cardiomyopathy, and post-cardiac illness recovery.</li>
                  <li><strong>6. Reduces Stress and Anxiety</strong><br/>The warmth and herbal oils calm the nervous system and reduce emotional stress affecting the heart.</li>
                  <li><strong>7. Improves Lung Function</strong><br/>Helps relieve breathing discomfort and improves chest expansion.</li>
                  <li><strong>8. Strengthens Nerves Around the Heart</strong><br/>Supports the nervous system and improves coordination between the heart and nerves.</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-10 mb-4">3. Healthy Lifestyle Changes</h3>
                <p>We always advise our patients to adopting heart-healthy habits, which can significantly support EF improvement:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Eat a low-salt, heart-healthy diet</li>
                  <li>Stop smoking and alcohol</li>
                  <li>Maintain healthy body weight</li>
                  <li>Control diabetes, cholesterol, and blood pressure</li>
                  <li>Manage stress and sleep well</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-8 mb-4">4. Regular Physical Activity</h3>
                <p>Doctor-approved moderate exercise can strengthen the heart muscle and improve circulation. We recommend our patients go for a walk in the morning and evening. They will be able to walk 5 - 6 Km without any difficulty within one to three months.</p>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-8 mb-4">5. Yoga</h3>
                <p>Yoga can help improve overall heart function, circulation, breathing efficiency, stress control, and exercise tolerance in patients with Low Ejection Fraction (Low EF), cardiomyopathy, and heart failure — when practiced gently and under proper supervision and guidance.</p>
                <p>Patients with severe Low EF should avoid forceful, strenuous, or breath-holding exercises.</p>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-8 mb-4">6. Regular Monitoring</h3>
                <p>We conduct Periodic tests such as echocardiography, which help to monitor EF and treatment progress.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">How long low EF patients have to stay in the Hospital</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>If you have only low EF and there is no other disease conditions, recovery will be faster, If there are other diseases it may require comparatively more time. If your EF is less, accordingly it may take more time. Duration depends on the condition of the patient, and how fast they are recovering. It is better to start the treatment as an inpatient, which will help in fast recovery. If your condition is not allowing you come and start the treatment, we can have online consultation. You have to send the test reports.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Relation between Low Ejection Fraction (Low EF), Cardiomyopathy and Heart failure.</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <div className="my-8 rounded-2xl overflow-hidden border border-[#DBCFA8] bg-white flex justify-center p-4">
                  <Image src="/images/conditions/low-ejection-fraction/low-ef-cardiomyopathy.webp" alt="Cardiomyopathy diagram" width={800} height={500} className="w-full h-auto object-contain max-h-[600px]" />
                </div>
                <p>Low Ejection Fraction (Low EF) and Cardiomyopathy are interconnected heart conditions, where the heart muscle is weakened, thickened, or enlarged, causing it to pump less than 40% of its blood capacity. Cardiomyopathy leads to reduced blood circulation, resulting in symptoms such as fatigue, swelling, and breathlessness. Heart failure, often a final stage, occurs when the weakened heart cannot meet the body's oxygen needs, leading to fluid accumulation and potential lung congestion. Omshree Sidha Hospital offers Ayurvedic treatment aimed at reversing these conditions, specifically focusing on strengthening the heart muscle, treating enlarged hearts, and improving ejection fraction naturally without surgery or transplantation. This approach aims to address the root causes of the disease rather than just managing symptoms.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Congestive heart failure (CHF)</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>Congestive heart failure (CHF) is a chronic, progressive condition where the heart cannot pump blood efficiently, causing fluid buildup (congestion) in the lungs, legs, and body. We are providing the best treatment for Congestive Heart Failure. Only in Ayurveda you can get such an effective treatment for Congestive Heart Failure. In modern medicine, there is only control, not a cure for Congestive Heart Failure. You can confirm it from your cardiologist. We are doing low heart function treatment for years.</p>
                <div className="my-8 rounded-2xl overflow-hidden border border-[#DBCFA8] bg-white flex justify-center p-4">
                  <Image src="/images/conditions/low-ejection-fraction/low-ef-congestive-heart-failure.webp" alt="Congestive heart failure (CHF) diagram" width={800} height={500} className="w-full h-auto object-contain max-h-[600px]" />
                </div>
                <p>Heart Failure is a condition where the heart cannot pump enough oxygenated blood to meet the body’s requirements.</p>
                <p>Symptoms of Heart failure include Breathlessness, Fatigue, Swelling (legs, abdomen) Fluid retention in the lungs.</p>
                <p>Heart failure is the result (final stage) of poor heart function. Cardiomyopathy leads to Low EF, low EF leads to Heart Failure. Not all cardiomyopathy leads to immediate heart failure, but risk is high. Low EF is a warning sign before severe symptoms starts. Some patients can have heart failure even with normal EF (HFpEF). Cardiomyopathy is the disease → Low EF shows how weak the heart is → Heart failure is the condition that develops when pumping becomes insufficient.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Diagnosis</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>To diagnose heart failure, your healthcare professional will perform a thorough physical examination and evaluate your full medical history and current symptoms. They will also screen for major risk factors, such as chronic high blood pressure, coronary artery disease, and diabetes.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Tests</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">1. Primary Imaging (To Measure EF)</h3>
                <p>Echocardiogram (Echo), Cardiac MRI (Magnetic Resonance Imaging), MUGA Scan (Multiple-Gated Acquisition Scan), Cardiac CT Scan:</p>
                
                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">2. Investigating the Underlying Cause</h3>
                <p>Once a low EF is confirmed, doctors run additional tests to see why the heart muscle is weak:</p>
                <p>Coronary Angiogram, Electrocardiogram (ECG/EKG, and Exercise Stress Test.</p>
                
                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-6 mb-2">3. Supportive Lab and Baseline Tests</h3>
                <p>BNP or NT-proBNP Blood Tests, and Chest X-ray.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">About this Invention</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>I Jose Vaidhyan developed these new treatment techniques and medicines during 1998 – 2000. My own Father had heart attacks in December 1997, again in 1998 December, and in 1999 December. His condition was very bad and he was unable to walk even 100 Meters. The whole family was very upset about his health. I discussed the possibilities with him, and we decided to start our own medicines and panchakarma therapy, initially, there was some improvement, and we tried a few formulations from the texts. Then we were trying our own preparations, and finally, in nine months, he was completely cured. He was not using any more medicines thereafter. On 23rd Dec. 2004 he expired, after a fall, on that day too his heart was working perfectly. He was 84 years old at that time.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Important herbs used in low EF treatment</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4 mb-8">
                <p>Arjuna, Ashwagandha, Bala, Guduchi, Amalaki, Punarnava, Gokshura, and Varuna.</p>
              </div>
            </section>

          </div>

          {/* Sidebar / Sticky Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              <Card className="border-[#DBCFA8] shadow-xs bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#66371B] mb-4">The Patient Journey</h3>
                  <ul className="space-y-3 text-sm text-[#81754B] font-light">
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
