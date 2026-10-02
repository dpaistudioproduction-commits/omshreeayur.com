import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowRight, CheckCircle2, Activity, HeartPulse, AlertTriangle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Heart Disease & Blocks | Omshree Sidha Hospital",
  description: "Understanding the difference between coronary artery blockage and electrical heart block. Learn about causes, symptoms, and diagnosis.",
};

export default function HeartDiseaseAndBlocksPage() {
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
              Heart Disease & Blocks
            </h1>
            <p className="text-xl md:text-2xl text-[#E3D8C1] font-light leading-relaxed mb-10">
              Heart disease is a broad term covering conditions that affect the heart muscle, heart valves, coronary arteries and the electrical system that controls the heartbeat. For patients, however, the terminology can become confusing.
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
          <div className="lg:col-span-8 space-y-16">

            {/* Intro Highlight Section */}
            <section className="bg-white p-8 rounded-2xl border-l-4 border-[#517B32] shadow-sm">
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>You may be told that you have a “heart blockage” after an angiogram. Someone else may be told they have a “heart block” after an ECG.</p>
                <p>Although the words sound similar, they can refer to two very different problems.</p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#F7F1E1] p-4 rounded-xl border border-[#DBCFA8]">
                    <Activity className="h-6 w-6 text-[#66371B] mb-2" />
                    <p className="font-medium text-[#66371B]">A coronary artery blockage involves blood flow to the heart muscle.</p>
                  </div>
                  <div className="bg-[#F7F1E1] p-4 rounded-xl border border-[#DBCFA8]">
                    <HeartPulse className="h-6 w-6 text-[#66371B] mb-2" />
                    <p className="font-medium text-[#66371B]">An electrical heart block involves the signals that control the heartbeat.</p>
                  </div>
                </div>
                <p className="mt-6">Understanding exactly what your doctor means by “block” is an important first step toward understanding your condition.</p>
                <p>At Omshree Sidha Hospital in Kerala, cardiovascular care is one of the areas in which the hospital provides Ayurvedic consultation and treatment. Omshree's practice is rooted in a 140+ year Ayurvedic healing legacy, with patients from India and abroad seeking care for a range of chronic health conditions.</p>
              </div>
            </section>
            
            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6 flex items-center gap-3">
                <span className="bg-[#66371B] text-[#F7F1E1] rounded-full h-10 w-10 flex items-center justify-center text-xl">1</span> 
                What Is a Heart Blockage?
              </h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <div className="my-8 rounded-2xl overflow-hidden border border-[#DBCFA8] bg-white">
                  <Image src="/images/conditions/heart-disease-and-blocks/coronary_blockage.png" alt="Coronary Artery Blockage Illustration" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
                <p>A coronary artery blockage usually refers to narrowing or obstruction in one or more of the arteries that supply blood to the heart muscle.</p>
                <p>The coronary arteries can become narrowed when plaque builds up inside their walls. This process is known as atherosclerosis.</p>
                <p>As the artery becomes narrower, the amount of blood and oxygen reaching the heart muscle may be reduced.</p>
                <p>A complete blockage of a coronary artery can result in a heart attack.</p>
                
                <Card className="bg-[#F7F1E1]/50 border-[#DBCFA8] shadow-none mt-6">
                  <CardContent className="p-6">
                    <p className="font-bold text-[#66371B] mb-4">However, the significance of a coronary blockage cannot be determined by the percentage alone. Doctors may consider:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#517B32] shrink-0 mt-0.5"/> <span>Which artery is affected</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#517B32] shrink-0 mt-0.5"/> <span>Where the narrowing is located</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#517B32] shrink-0 mt-0.5"/> <span>How severe the narrowing is</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#517B32] shrink-0 mt-0.5"/> <span>Whether blood flow is affected</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#517B32] shrink-0 mt-0.5"/> <span>Whether symptoms are present</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#517B32] shrink-0 mt-0.5"/> <span>Whether there is evidence of heart muscle damage</span></li>
                      <li className="flex items-start gap-2 md:col-span-2"><CheckCircle2 className="h-5 w-5 text-[#517B32] shrink-0 mt-0.5"/> <span>Other cardiovascular conditions and risk factors</span></li>
                    </ul>
                  </CardContent>
                </Card>
                <p className="mt-4">This is why a percentage written on an angiography report needs to be understood in its clinical context.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6 flex items-center gap-3">
                <span className="bg-[#66371B] text-[#F7F1E1] rounded-full h-10 w-10 flex items-center justify-center text-xl">2</span> 
                What Is Heart Block?
              </h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <div className="my-8 rounded-2xl overflow-hidden border border-[#DBCFA8] bg-white">
                  <Image src="/images/conditions/heart-disease-and-blocks/electrical_heart_block.png" alt="Electrical Heart Block Illustration" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
                <p>Heart block is different from a blocked coronary artery.</p>
                <p>Heart block refers to a problem with the electrical signals that tell the heart when to beat.</p>
                <p>Normally, electrical signals travel through the heart in an organized pattern.</p>
                <p>With atrioventricular, or AV, heart block, these signals may be delayed or may not pass normally from the upper chambers to the lower chambers.</p>
                <p>There are different types of heart block, and their significance can vary.</p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <Card className="border-[#DBCFA8] shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-bold text-[#66371B] mb-3">First-Degree AV Block</h3>
                      <p className="text-sm">In first-degree AV block, every electrical signal reaches the lower chambers, but it takes longer than usual.</p>
                      <p className="text-sm mt-2">Some people have no symptoms and may not require specific treatment.</p>
                      <p className="text-sm mt-2 font-medium">The finding still needs to be interpreted in the context of the person's overall heart health.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-[#DBCFA8] shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-bold text-[#66371B] mb-3">Second-Degree AV Block</h3>
                      <p className="text-sm">In second-degree AV block, some electrical signals from the upper chambers do not reach the lower chambers.</p>
                      <p className="text-sm mt-2">There are different patterns, including:</p>
                      <ul className="list-disc pl-5 text-sm mt-1 mb-2">
                        <li>Mobitz type I</li>
                        <li>Mobitz type II</li>
                      </ul>
                      <p className="text-sm font-medium">These forms do not have the same clinical significance, which is why identifying the exact type matters.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-[#DBCFA8] shadow-sm bg-[#FFFBF0]">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-bold text-[#66371B] mb-3">Third-Degree AV Block</h3>
                      <p className="text-sm">Third-degree AV block is also called complete heart block.</p>
                      <p className="text-sm mt-2">In this condition, electrical signals from the upper chambers do not normally reach the lower chambers.</p>
                      <p className="text-sm mt-2">The upper and lower chambers can then beat independently.</p>
                      <p className="text-sm mt-2 font-medium text-red-700">This can result in a very slow heartbeat and reduced blood flow and requires urgent medical evaluation.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Coronary Blockage and Heart Block Are Not the Same</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>This distinction is particularly important if you are researching your diagnosis online.</p>
                
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-md border border-[#DBCFA8]">
                    <thead>
                      <tr className="bg-[#66371B] text-[#F7F1E1]">
                        <th className="p-5 font-heading text-xl font-bold border-r border-[#8A5A3C]">Coronary artery blockage</th>
                        <th className="p-5 font-heading text-xl font-bold">Electrical heart block</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b border-[#E3D8C1] hover:bg-[#F7F1E1]/50 transition-colors">
                        <td className="p-5 border-r border-[#E3D8C1]"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> Involves the blood vessels supplying the heart</span></td>
                        <td className="p-5"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> Involves the electrical conduction system</span></td>
                      </tr>
                      <tr className="border-b border-[#E3D8C1] hover:bg-[#F7F1E1]/50 transition-colors">
                        <td className="p-5 border-r border-[#E3D8C1]"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> Can reduce blood flow to heart muscle</span></td>
                        <td className="p-5"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> Can interfere with the timing of the heartbeat</span></td>
                      </tr>
                      <tr className="border-b border-[#E3D8C1] hover:bg-[#F7F1E1]/50 transition-colors">
                        <td className="p-5 border-r border-[#E3D8C1]"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> Often associated with coronary artery disease</span></td>
                        <td className="p-5"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> Can involve AV conduction abnormalities</span></td>
                      </tr>
                      <tr className="border-b border-[#E3D8C1] hover:bg-[#F7F1E1]/50 transition-colors">
                        <td className="p-5 border-r border-[#E3D8C1]"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> May be evaluated using coronary imaging and other cardiac tests</span></td>
                        <td className="p-5"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> ECG is a key diagnostic test</span></td>
                      </tr>
                      <tr className="hover:bg-[#F7F1E1]/50 transition-colors">
                        <td className="p-5 border-r border-[#E3D8C1]"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> Treatment depends on severity and clinical situation</span></td>
                        <td className="p-5"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#517B32]" /> Treatment depends on type, cause and symptoms</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#402816] text-[#F7F1E1] p-6 rounded-xl shadow-md text-center">
                  <p className="text-[#E3D8C1] mb-2">So if you have been told that you have a “heart block” or “heart blockage,” the first question should be:</p>
                  <p className="font-heading text-2xl font-bold text-white">Which condition has actually been diagnosed?</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Classification of Coronary Artery Disease</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>Coronary artery disease can involve one or more coronary arteries. Patients may hear terms such as:</p>
                <div className="flex flex-wrap gap-3 my-6">
                  {["Coronary artery disease", "Coronary artery narrowing", "Coronary artery blockage", "Coronary stenosis", "Single-vessel disease", "Multi-vessel disease", "Angina"].map((term) => (
                    <span key={term} className="bg-[#F7F1E1] text-[#66371B] border border-[#DBCFA8] px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                      {term}
                    </span>
                  ))}
                </div>
                <p>The number or percentage of a blockage does not provide the complete picture by itself.</p>
                <p>The location of the narrowing, its effect on blood flow, symptoms and other findings all matter.</p>
                <p className="font-medium p-4 bg-[#E3D8C1]/30 rounded-lg border-l-4 border-[#66371B]">This is why a report saying “70% blockage”, for example, should not be interpreted without understanding which artery is affected and what the rest of the cardiac assessment shows.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8">Causes</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4 border-b border-[#DBCFA8] pb-2">Causes of Coronary Artery Blockage</h3>
                  <div className="text-[#81754B] text-base leading-relaxed font-light space-y-4">
                    <p>Coronary artery disease most commonly develops through atherosclerosis.</p>
                    <p>Atherosclerosis occurs when fats, cholesterol and other substances accumulate in the walls of arteries and form plaque.</p>
                    <p>As plaque builds up, the arteries can become narrower and blood flow can be reduced. Factors associated with coronary artery disease include:</p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-[#66371B]">High Blood Pressure</h4>
                        <p className="text-sm">Long-standing high blood pressure can contribute to damage within the arteries and increase cardiovascular risk.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#66371B]">High Cholesterol</h4>
                        <p className="text-sm">Higher levels of certain blood lipids can contribute to plaque formation.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#66371B]">Diabetes</h4>
                        <p className="text-sm">Diabetes and insulin resistance are associated with increased cardiovascular risk.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#66371B]">Smoking and Tobacco Use</h4>
                        <p className="text-sm">Smoking can damage blood vessels and increase cardiovascular risk.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#66371B]">Physical Inactivity</h4>
                        <p className="text-sm">Low levels of physical activity are associated with increased cardiovascular risk.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#66371B]">Excess Body Weight</h4>
                        <p className="text-sm">Excess body weight can contribute to several cardiovascular risk factors.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#66371B]">Increasing Age</h4>
                        <p className="text-sm">The risk of coronary artery disease generally increases with age.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#66371B]">Family History</h4>
                        <p className="text-sm">A family history of heart disease can contribute to an individual's cardiovascular risk.</p>
                      </div>
                    </div>
                    <p className="italic bg-[#F7F1E1] p-3 rounded text-sm mt-4">Having one or more of these risk factors does not mean that a person definitely has a coronary blockage.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4 border-b border-[#DBCFA8] pb-2">Causes of Heart Block</h3>
                  <div className="text-[#81754B] text-base leading-relaxed font-light space-y-4">
                    <p>Electrical heart block can have several different causes. These may include:</p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#517B32] shrink-0 mt-1"/> <span>Previous heart attack</span></li>
                      <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#517B32] shrink-0 mt-1"/> <span>Heart disease or damage affecting the conduction system</span></li>
                      <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#517B32] shrink-0 mt-1"/> <span>Certain infections</span></li>
                      <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#517B32] shrink-0 mt-1"/> <span>Thyroid disorders</span></li>
                      <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#517B32] shrink-0 mt-1"/> <span>Electrolyte abnormalities</span></li>
                      <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#517B32] shrink-0 mt-1"/> <span>Inflammatory conditions</span></li>
                      <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#517B32] shrink-0 mt-1"/> <span>Certain medicines that slow heart rate or electrical conduction</span></li>
                      <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#517B32] shrink-0 mt-1"/> <span>Changes associated with the heart's electrical conduction system</span></li>
                    </ul>
                    <div className="bg-[#E3D8C1]/30 p-4 rounded-lg mt-6">
                      <p className="mb-2">Some causes may be reversible, while others may represent an ongoing problem with the heart's conduction system.</p>
                      <p className="font-medium text-[#66371B]">A healthcare professional needs to determine the underlying cause rather than assuming that every heart block has the same explanation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Symptoms of Heart Disease & Blockages</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-6">
                <p>Symptoms vary depending on the type of condition and its severity.</p>
                <p>Some people may have significant cardiovascular disease with few noticeable symptoms, while others may experience symptoms during everyday activities.</p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="border-[#DBCFA8] bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-6 text-center border-b border-[#E3D8C1] pb-4">Symptoms Associated With Coronary Artery Disease</h3>
                      <p className="text-sm mb-6 text-center">Possible symptoms include:</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-[#66371B] flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[#B4833D]"/> Chest Discomfort</h4>
                          <p className="text-sm mt-1">You may experience pressure, squeezing, heaviness, tightness or pain in the chest. This is commonly referred to as angina.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#66371B] flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[#B4833D]"/> Shortness of Breath</h4>
                          <p className="text-sm mt-1">Reduced blood flow to the heart can be associated with breathlessness, particularly during exertion.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#66371B] flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[#B4833D]"/> Fatigue</h4>
                          <p className="text-sm mt-1">Some people experience unusual tiredness or reduced ability to perform activities that were previously comfortable.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#66371B] flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[#B4833D]"/> Reduced Exercise Tolerance</h4>
                          <p className="text-sm mt-1">Physical activity may become more difficult when the heart is not receiving adequate blood supply.</p>
                        </div>
                      </div>
                      <p className="italic text-sm mt-6 pt-4 border-t border-[#E3D8C1]">Coronary artery disease can also remain unnoticed until symptoms become apparent.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-[#DBCFA8] bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-6 text-center border-b border-[#E3D8C1] pb-4">Symptoms Associated With Heart Block</h3>
                      <p className="text-sm mb-6 text-center">Symptoms depend on the type of electrical block and how much it affects the heart rate and blood flow.</p>
                      <p className="text-sm mb-4 font-bold text-[#66371B]">Possible symptoms include:</p>
                      
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3 p-2 bg-[#F7F1E1]/50 rounded"><span className="h-2 w-2 rounded-full bg-[#517B32]"></span> Fatigue</li>
                        <li className="flex items-center gap-3 p-2 bg-[#F7F1E1]/50 rounded"><span className="h-2 w-2 rounded-full bg-[#517B32]"></span> Dizziness</li>
                        <li className="flex items-center gap-3 p-2 bg-[#F7F1E1]/50 rounded"><span className="h-2 w-2 rounded-full bg-[#517B32]"></span> Lightheadedness</li>
                        <li className="flex items-center gap-3 p-2 bg-[#F7F1E1]/50 rounded"><span className="h-2 w-2 rounded-full bg-[#517B32]"></span> Feeling faint</li>
                        <li className="flex items-center gap-3 p-2 bg-[#F7F1E1]/50 rounded"><span className="h-2 w-2 rounded-full bg-[#517B32]"></span> Fainting</li>
                        <li className="flex items-center gap-3 p-2 bg-[#F7F1E1]/50 rounded"><span className="h-2 w-2 rounded-full bg-[#517B32]"></span> Reduced ability to exercise</li>
                      </ul>
                      
                      <div className="mt-8 p-4 bg-[#E3D8C1]/20 rounded-lg">
                        <p className="text-sm mb-2 font-medium">Some people with heart block may have no symptoms.</p>
                        <p className="text-sm">This is one reason an ECG and appropriate cardiac evaluation are important when a conduction abnormality is suspected.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="bg-red-50 p-8 rounded-2xl border border-red-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
              <h2 className="font-heading text-3xl font-bold text-red-900 mb-4">What Happens When a Coronary Artery Becomes Completely Blocked?</h2>
              <div className="text-red-800 text-lg leading-relaxed font-light space-y-4">
                <p>A complete blockage of a coronary artery can interrupt blood flow to part of the heart muscle. If blood flow is not restored, the affected heart muscle can become damaged.</p>
                <p className="font-bold text-red-700">This can result in a heart attack, which is a medical emergency.</p>
                
                <p className="mt-6 mb-2 font-medium">Possible symptoms can include:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 bg-red-500 rounded-full"></span> Chest pressure or pain</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 bg-red-500 rounded-full"></span> Shortness of breath</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 bg-red-500 rounded-full"></span> Cold sweating</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 bg-red-500 rounded-full"></span> Nausea</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 bg-red-500 rounded-full"></span> Dizziness</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 bg-red-500 rounded-full"></span> Pain or discomfort spreading to the arm, shoulder, back, neck or jaw</li>
                </ul>
                
                <p className="mt-4 text-sm">Symptoms can vary, and some people may experience less typical symptoms or very few symptoms.</p>
                
                <div className="mt-6 pt-4 border-t border-red-200">
                  <p className="font-bold text-lg text-red-700 flex items-center gap-2 uppercase tracking-wide"><AlertTriangle className="h-6 w-6"/> If you suspect a heart attack, seek emergency medical care immediately.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Treating the Underlying Cause</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>Treatment depends on the actual condition, its severity and the individual's clinical situation. A coronary artery blockage and an electrical heart block require different approaches.</p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-[#F7F1E1] p-6 rounded-xl shadow-sm border border-[#DBCFA8]">
                    <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Coronary Artery Disease</h3>
                    <p className="text-sm mb-4">Depending on the individual situation, treatment may include:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Lifestyle changes</li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Medicines</li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Coronary angioplasty and stent placement</li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Coronary artery bypass surgery</li>
                    </ul>
                    <p className="text-sm font-medium">Not every patient requires a procedure.</p>
                    <p className="text-sm mt-2">The appropriate approach depends on factors such as symptoms, anatomy, disease severity, blood flow and overall clinical assessment.</p>
                  </div>

                  <div className="bg-[#F7F1E1] p-6 rounded-xl shadow-sm border border-[#DBCFA8]">
                    <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-4">Electrical Heart Block</h3>
                    <p className="text-sm mb-4">Treatment depends on:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Type of heart block</li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Symptoms</li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Underlying cause</li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Heart rate</li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Whether the cause can be reversed</li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#517B32]"/> Other cardiac findings</li>
                    </ul>
                    <p className="text-sm">Some patients may only need monitoring, while certain forms of heart block may require pacing or a permanent pacemaker.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Managing Heart Disease & Blocks</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>Managing cardiovascular health is usually not about one treatment or one number. It may involve several areas of care.</p>

                <div className="space-y-8 mt-8">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-2 flex items-center gap-2"><ArrowRight className="text-[#B4833D] h-5 w-5"/> Medical Management</h3>
                    <p>Depending on the diagnosis, a healthcare professional may prescribe medicines to address issues such as:</p>
                    <div className="flex flex-wrap gap-2 mt-3 mb-4">
                      {["High blood pressure", "High cholesterol", "Blood clot risk", "Heart rhythm", "Other cardiovascular conditions"].map((item) => (
                        <span key={item} className="px-3 py-1 bg-white border border-[#DBCFA8] rounded-full text-sm">{item}</span>
                      ))}
                    </div>
                    <p className="font-bold text-[#66371B] bg-[#E3D8C1]/30 p-3 rounded">If you are already taking cardiac medication, do not stop or change it without discussing the decision with your treating healthcare professional.</p>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-2 flex items-center gap-2"><ArrowRight className="text-[#B4833D] h-5 w-5"/> Healthy Lifestyle Changes</h3>
                    <p>Heart-healthy lifestyle measures can support cardiovascular health. These may include:</p>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 mt-3 mb-4">
                      <li>Avoiding tobacco</li>
                      <li>Eating a balanced diet</li>
                      <li>Maintaining a healthy body weight</li>
                      <li>Managing blood pressure</li>
                      <li>Managing cholesterol</li>
                      <li>Managing diabetes</li>
                      <li>Appropriate physical activity</li>
                      <li>Managing stress</li>
                      <li>Maintaining adequate sleep</li>
                    </ul>
                    <p className="italic">The right lifestyle plan depends on the individual's medical condition.</p>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-2 flex items-center gap-2"><ArrowRight className="text-[#B4833D] h-5 w-5"/> Physical Activity</h3>
                    <p>Regular physical activity can be part of cardiovascular health management. However, the appropriate level of exercise is different for every patient.</p>
                    <p className="mt-2">People with significant coronary disease, active symptoms, severe heart dysfunction or certain rhythm and conduction problems may require medical assessment before increasing physical activity.</p>
                    <p className="mt-2 font-medium">Exercise recommendations should therefore be individualized.</p>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-2 flex items-center gap-2"><ArrowRight className="text-[#B4833D] h-5 w-5"/> Regular Monitoring</h3>
                    <p>Depending on the diagnosis, monitoring may involve:</p>
                    <div className="flex flex-wrap gap-2 mt-3 mb-4">
                      {["ECG/EKG", "Echocardiogram", "Blood tests", "Blood pressure monitoring", "Holter monitoring", "Stress testing", "Cardiac imaging", "Coronary imaging"].map((test) => (
                        <span key={test} className="px-3 py-1 bg-white border border-[#DBCFA8] rounded-full text-sm text-[#66371B] font-medium">{test}</span>
                      ))}
                    </div>
                    <p>Regular monitoring helps healthcare professionals understand whether the condition is stable and whether additional evaluation or treatment is required.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-[#402816] text-[#F7F1E1] p-8 md:p-12 rounded-3xl shadow-lg mt-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">Ayurvedic Care at Omshree</h2>
              <div className="text-[#E3D8C1] text-lg leading-relaxed font-light space-y-6">
                <p>If you are exploring Ayurveda for a cardiovascular condition, the first step should be understanding your diagnosis and reviewing your available medical information.</p>
                <p>At Omshree Sidha Hospital, the consultation process can begin with the patient's medical history and relevant cardiac reports.</p>
                <p>This may include:</p>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 my-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#B4833D]"/> The diagnosis</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#B4833D]"/> Current symptoms</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#B4833D]"/> Previous cardiac treatment</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#B4833D]"/> Current medicines</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#B4833D]"/> ECG and echocardiogram reports</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#B4833D]"/> Coronary imaging, where applicable</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#B4833D]"/> Other relevant investigations</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#B4833D]"/> Other health conditions</li>
                  </ul>
                </div>
                
                <p>This information helps the clinical team understand the individual situation before discussing whether Ayurvedic care is appropriate.</p>

                <div className="mt-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 text-[#B4833D]">An important distinction</h3>
                  <p className="mb-2">A treatment approach for coronary artery disease should not automatically be presented as the same treatment approach for electrical heart block. They are different medical conditions.</p>
                  <p className="font-medium text-white p-4 border-l-4 border-[#B4833D] bg-white/5">Any Omshree-specific treatment protocol, medicine, therapy or expected outcome for Heart Disease & Blocks should therefore be based on the hospital's clinically validated protocol.</p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">Ayurvedic Medicines</h3>
                  <p>Ayurvedic medicines should be considered according to the individual patient's diagnosis, health condition and existing treatment.</p>
                  <p className="mt-4 mb-2">For cardiovascular patients, the clinical team should determine:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Which medicines are appropriate</li>
                    <li>Which condition they are intended for</li>
                    <li>How they are incorporated into care</li>
                    <li>Relevant precautions</li>
                    <li>How they are considered alongside conventional cardiac medication</li>
                  </ul>
                  <p>Patients should provide the clinical team with a complete list of their current medicines.</p>
                  <p className="font-bold text-[#B4833D]">Do not stop or replace prescribed cardiac medicines without appropriate medical advice.</p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">Panchakarma & Ayurvedic Therapies</h3>
                  <p>Ayurvedic therapies may form part of an individualized treatment plan for some patients.</p>
                  <p className="mt-2 mb-2">The specific therapy should depend on:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["The patient's diagnosis", "Overall health", "Symptoms", "Other medical conditions", "Current treatment", "Clinical assessment"].map(t => (
                      <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                  <p className="mb-4">Omshree's existing cardiovascular material discusses therapies such as Abhyanga, Kizhi and Hrudaya Basti in relation to its Low EF treatment approach. These should not automatically be described as treatments for every form of coronary blockage or electrical heart block.</p>
                  <p className="mb-2 font-medium">For Heart Disease & Blocks, the hospital's clinical team should confirm:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Which therapies are used</li>
                    <li>Why they are used</li>
                    <li>Which patients may be considered</li>
                    <li>How they fit into the overall treatment plan</li>
                    <li>Relevant precautions</li>
                    <li>How progress is monitored</li>
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">Yoga & Supportive Practices</h3>
                  <p>Yoga, breathing practices and stress-management approaches may form part of an individualized wellness plan for some cardiovascular patients.</p>
                  <p className="mt-2">However, the specific practices should be selected according to the patient's medical condition and clinical guidance.</p>
                  <p className="mt-2 font-medium text-[#B4833D]">Patients with significant cardiac disease should not begin strenuous exercise or breath-holding practices without appropriate professional guidance.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Diagnosis & Tests</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-6">
                <p>The diagnostic process begins with understanding the patient's symptoms, medical history and cardiovascular risk factors.</p>
                <p>Depending on the suspected condition, healthcare professionals may evaluate:</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {["Blood pressure", "Heart rate", "Symptoms", "Medical history", "Family history", "Current medication", "Previous cardiac conditions", "Previous investigations"].map(x => (
                    <span key={x} className="bg-white border border-[#DBCFA8] px-3 py-1 rounded shadow-sm text-sm font-medium">{x}</span>
                  ))}
                </div>
                <p>The appropriate tests depend on the suspected diagnosis.</p>

                <h3 className="font-heading text-2xl font-bold text-[#66371B] mt-8 mb-4 border-b border-[#DBCFA8] pb-2">Tests for Heart Disease & Blocks</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#F7F1E1] p-5 rounded-xl border border-[#DBCFA8]">
                    <h4 className="font-heading text-xl font-bold text-[#66371B] mb-2">1. Electrocardiogram — ECG/EKG</h4>
                    <p className="text-sm">An ECG records the electrical activity of the heart.</p>
                    <p className="text-sm mt-1">It is a key test for identifying electrical conduction problems such as AV heart block.</p>
                  </div>

                  <div className="bg-[#F7F1E1] p-5 rounded-xl border border-[#DBCFA8]">
                    <h4 className="font-heading text-xl font-bold text-[#66371B] mb-2">2. Echocardiogram</h4>
                    <p className="text-sm mb-2">An echocardiogram uses sound waves to create images of the heart. It can provide information about:</p>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Heart chambers & Heart muscle</li>
                      <li>Heart valves & Blood flow</li>
                      <li>Overall heart function & Ejection fraction</li>
                    </ul>
                    <p className="text-sm mt-2">It may be used when evaluating different types of heart disease.</p>
                  </div>

                  <div className="bg-[#F7F1E1] p-5 rounded-xl border border-[#DBCFA8]">
                    <h4 className="font-heading text-xl font-bold text-[#66371B] mb-2">3. Holter Monitoring</h4>
                    <p className="text-sm">A Holter monitor records heart rhythm over a longer period.</p>
                    <p className="text-sm mt-1">It can be useful when an electrical abnormality occurs intermittently and is not captured during a short ECG.</p>
                  </div>

                  <div className="bg-[#F7F1E1] p-5 rounded-xl border border-[#DBCFA8]">
                    <h4 className="font-heading text-xl font-bold text-[#66371B] mb-2">4. Blood Tests</h4>
                    <p className="text-sm mb-2">Blood tests may be used to assess factors such as:</p>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Cholesterol & Blood sugar</li>
                      <li>Other cardiovascular risk factors</li>
                      <li>Possible causes of electrical conduction problems</li>
                    </ul>
                    <p className="text-sm mt-2">The specific tests depend on the clinical situation.</p>
                  </div>

                  <div className="bg-[#F7F1E1] p-5 rounded-xl border border-[#DBCFA8]">
                    <h4 className="font-heading text-xl font-bold text-[#66371B] mb-2">5. Stress Testing</h4>
                    <p className="text-sm">A stress test evaluates how the heart responds during physical activity.</p>
                    <p className="text-sm mt-1">It may be considered when symptoms occur with exertion or when additional assessment of blood flow and heart function is appropriate.</p>
                  </div>

                  <div className="bg-[#F7F1E1] p-5 rounded-xl border border-[#DBCFA8]">
                    <h4 className="font-heading text-xl font-bold text-[#66371B] mb-2">6. Coronary Imaging</h4>
                    <p className="text-sm mb-2">Depending on the situation, coronary artery disease may be evaluated using tests such as:</p>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Cardiac CT</li>
                      <li>Coronary angiography</li>
                      <li>Cardiac catheterization</li>
                      <li>Other cardiac imaging</li>
                    </ul>
                    <p className="text-sm mt-2">The appropriate test depends on the patient's symptoms and clinical findings.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">How Long Does Treatment Take?</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>There is no single treatment timeline for every patient with heart disease or a blockage.</p>
                <p>The duration of care depends on:</p>
                <ul className="grid grid-cols-2 gap-2 mt-2 mb-4">
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Type of condition</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Severity</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Underlying cause</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Symptoms</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Existing treatment</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Other health conditions</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Response to treatment</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#517B32]"/> Monitoring requirements</li>
                </ul>
                <div className="bg-[#E3D8C1]/30 border-l-4 border-[#66371B] p-4 rounded-r-lg">
                  <p className="font-medium text-[#66371B]">For this reason, Omshree-specific treatment duration should be discussed after individual clinical assessment.</p>
                  <p className="mt-2">A fixed number of days or months should not be assumed for every patient.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Heart Disease, Heart Block, Low EF & Heart Failure</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>These terms are sometimes used interchangeably by patients, but they describe different things.</p>
                
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="p-4 bg-white border border-[#DBCFA8] rounded-xl shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-[#66371B] mb-1">Coronary Artery Disease</h3>
                    <p className="text-sm">A disease affecting the arteries supplying blood to the heart.</p>
                  </div>
                  <div className="p-4 bg-white border border-[#DBCFA8] rounded-xl shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-[#66371B] mb-1">Coronary Artery Blockage</h3>
                    <p className="text-sm">Describes narrowing or obstruction within a coronary artery.</p>
                  </div>
                  <div className="p-4 bg-white border border-[#DBCFA8] rounded-xl shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-[#66371B] mb-1">Heart Block</h3>
                    <p className="text-sm">Refers to a problem with the electrical conduction system.</p>
                  </div>
                  <div className="p-4 bg-white border border-[#DBCFA8] rounded-xl shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-[#66371B] mb-1">Cardiomyopathy</h3>
                    <p className="text-sm">Refers to disease affecting the heart muscle.</p>
                  </div>
                  <div className="p-4 bg-white border border-[#DBCFA8] rounded-xl shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-[#66371B] mb-1">Low Ejection Fraction</h3>
                    <p className="text-sm">Describes reduced pumping function of the left ventricle.</p>
                  </div>
                  <div className="p-4 bg-white border border-[#DBCFA8] rounded-xl shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-[#66371B] mb-1">Heart Failure</h3>
                    <p className="text-sm">Describes a clinical syndrome in which the heart cannot adequately meet the body's needs.</p>
                  </div>
                </div>

                <p>These conditions can occur together, but one term should not automatically be used to diagnose another.</p>
                <p>For example, coronary artery disease can damage heart muscle and contribute to reduced heart function, while some heart conditions can also affect the electrical conduction system.</p>
                <p className="font-bold text-[#66371B] text-xl mt-4">Understanding which condition you actually have is therefore essential.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Why Omshree?</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>When considering Ayurvedic care for a chronic cardiovascular condition, patients often want to know more than just the treatment.</p>
                <p>They want to know who they are placing their care with.</p>
                <p>Omshree Sidha Hospital's Ayurvedic practice is built around a 140+ year healing legacy, carried through a lineage of Vaidyars. The hospital currently states that it has treated 5,000+ patients overall, offers 50+ specialized treatments, and has 5+ government patents.</p>
                <p>The hospital also provides care for patients from India and abroad, with online video consultations, email follow-ups and personal consultations available.</p>
                
                <div className="bg-[#F7F1E1] p-6 rounded-xl border border-[#DBCFA8] mt-6">
                  <h3 className="font-heading text-2xl font-bold text-[#66371B] mb-3">A 140+ Year Ayurvedic Legacy</h3>
                  <p className="mb-4">Omshree's history is part of what shapes its approach to Ayurvedic care today.</p>
                  <p className="mb-4">The hospital traces its tradition through a lineage of Vaidyars and describes its practice as being rooted in more than 140 years of Ayurvedic healing.</p>
                  <p className="mb-4">For a patient dealing with a heart condition, however, heritage is only one part of the decision.</p>
                  <p className="mb-2">The other part is understanding:</p>
                  <ul className="space-y-1 font-bold text-[#66371B] list-inside list-disc">
                    <li>What is my diagnosis?</li>
                    <li>What do my reports show?</li>
                    <li>What treatment am I already receiving?</li>
                    <li>Is Ayurvedic care appropriate for my situation?</li>
                    <li>What should happen next?</li>
                  </ul>
                  <p className="mt-4 italic">Those questions should form the basis of the consultation.</p>
                </div>

                <div className="mt-8">
                  <p>For cardiovascular patients, this experience should begin with understanding the individual diagnosis—not with assuming that every patient requires the same Ayurvedic approach.</p>
                  <p className="font-medium mt-2">That is why medical reports and existing treatment are an important part of the consultation process.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">Hospital Stay & Online Consultation</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>The appropriate treatment setting depends on the patient's condition and the clinical plan.</p>
                <p>Patients can begin by discussing their condition with the Omshree team and providing relevant medical reports.</p>
                <p>For patients who cannot immediately travel to Kerala, an online consultation can be an initial step for discussing the available information.</p>
                <p>For international patients, this can also help them understand the next steps before making travel arrangements.</p>
                <p>Omshree currently provides online video consultations, email-based follow-ups and personal in-clinic consultations.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-6">International Patients</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light space-y-4">
                <p>If you are considering travelling to Kerala for Ayurvedic care, you can begin with an online consultation before planning your journey. It can be useful to prepare:</p>
                
                <div className="grid sm:grid-cols-2 gap-3 my-6">
                  {["Recent ECG/EKG reports", "Echocardiogram reports", "Coronary angiography or cardiac imaging", "Blood-test results", "Previous cardiac reports", "Current medication list", "Previous diagnoses", "A brief description of current symptoms"].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-3 bg-white border border-[#DBCFA8] rounded-lg shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-[#517B32] shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <p>Sharing these reports can help the clinical team understand your medical history before discussing the next step.</p>
                <p>For an international patient, this also gives you an opportunity to understand the consultation process before committing to travel.</p>
              </div>
            </section>

            <section className="bg-[#66371B] text-[#F7F1E1] p-8 rounded-2xl shadow-lg mt-12">
              <h2 className="font-heading text-3xl font-bold text-white mb-6">What Should You Understand Before Considering Treatment?</h2>
              <div className="text-[#E3D8C1] text-lg leading-relaxed font-light space-y-4">
                <p>If you have been told that you have a heart blockage or heart block, start with these questions:</p>
                <ol className="grid gap-3 mt-6 pl-4 font-bold text-white list-decimal list-inside">
                  <li className="bg-white/5 p-3 rounded">What exactly has been diagnosed?</li>
                  <li className="bg-white/5 p-3 rounded">Is it a coronary artery blockage or an electrical heart block?</li>
                  <li className="bg-white/5 p-3 rounded">Which test identified it?</li>
                  <li className="bg-white/5 p-3 rounded">How significant is the finding?</li>
                  <li className="bg-white/5 p-3 rounded">What symptoms are present?</li>
                  <li className="bg-white/5 p-3 rounded">What is the underlying cause?</li>
                  <li className="bg-white/5 p-3 rounded">What treatment has already been recommended?</li>
                  <li className="bg-white/5 p-3 rounded">What medicines are you currently taking?</li>
                  <li className="bg-white/5 p-3 rounded">What monitoring is required?</li>
                  <li className="bg-white/5 p-3 rounded">Is the condition stable, or does it require urgent treatment?</li>
                </ol>
                <p className="mt-6">Understanding these questions can help you make sense of your reports and have a more informed discussion with your healthcare team.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#66371B] mb-8">Frequently Asked Questions</h2>
              <div className="grid gap-4">
                
                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> Is a heart blockage the same as heart block?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p className="font-bold text-[#66371B]">No.</p>
                      <p>A coronary artery blockage involves narrowing or obstruction of a blood vessel supplying the heart.</p>
                      <p>Heart block refers to a problem with the electrical signals controlling the heartbeat.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> What does a heart blockage mean?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p>The term usually refers to narrowing or obstruction in a coronary artery.</p>
                      <p>Its significance depends on the location and severity of the narrowing, its effect on blood flow, symptoms and other cardiac findings.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> What does a 70% heart blockage mean?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p>A percentage such as 70% generally describes the estimated degree of narrowing in a particular coronary artery.</p>
                      <p>The percentage alone does not determine the appropriate treatment. The artery involved, symptoms, blood flow and other clinical findings also matter.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> Can a heart blockage cause a heart attack?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p className="font-bold text-[#66371B]">Yes.</p>
                      <p>A complete blockage of a coronary artery can interrupt blood flow to the heart muscle and cause a heart attack.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> What is first-degree heart block?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p>First-degree AV block means that electrical signals still reach the lower chambers of the heart, but conduction takes longer than usual.</p>
                      <p>Some people have no symptoms and may not need specific treatment.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> What is second-degree heart block?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p>In second-degree AV block, some electrical signals from the upper chambers do not reach the lower chambers.</p>
                      <p>There are different forms, including Mobitz type I and Mobitz type II.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> What is third-degree heart block?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p>Third-degree AV block, also called complete heart block, occurs when electrical signals from the upper chambers do not normally reach the lower chambers.</p>
                      <p>It can result in a very slow heartbeat and reduced blood flow and requires urgent medical attention.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> Does every heart blockage require a stent?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p className="font-bold text-[#66371B]">No.</p>
                      <p>Treatment for coronary artery disease depends on the severity and location of the disease, symptoms, heart function and other clinical factors.</p>
                      <p>Some patients may be managed with medicines and lifestyle changes, while others may require a procedure such as angioplasty and stent placement or bypass surgery.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> Does every heart block require a pacemaker?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p className="font-bold text-[#66371B]">No.</p>
                      <p>Treatment depends on the type of heart block, symptoms, cause and whether the cause can be reversed.</p>
                      <p>Certain higher-grade forms, including some Mobitz type II, high-grade and third-degree AV blocks, may require a pacemaker.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> Can I take Ayurvedic treatment along with cardiac medicines?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p className="font-bold text-[#66371B]">Do not stop or change prescribed cardiac medicines on your own.</p>
                      <p>If you are considering Ayurvedic care, provide the clinical team with your complete list of current medicines so the overall treatment plan can be properly considered.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> Can Omshree treat heart blockage?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p>If you are considering Ayurvedic care at Omshree, the appropriate first step is a clinical consultation with your relevant medical reports.</p>
                      <p>Any specific treatment claim regarding coronary blockage or electrical heart block should be based on Omshree's documented clinical protocol and appropriate clinical validation.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#DBCFA8] shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2 flex items-start gap-2"><HelpCircle className="h-6 w-6 text-[#B4833D] shrink-0" /> Can international patients consult Omshree before travelling to Kerala?</h3>
                    <div className="ml-8 text-[#81754B] space-y-2">
                      <p className="font-bold text-[#66371B]">Yes.</p>
                      <p>An online consultation can be used as an initial step to discuss your condition and available medical reports before planning travel.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-[#E3D8C1]/30 p-8 md:p-12 rounded-3xl border border-[#DBCFA8] mt-12 text-center">
              <h2 className="font-heading text-3xl font-bold text-[#66371B] mb-6">Discuss Your Condition With Omshree</h2>
              <div className="text-[#81754B] text-lg leading-relaxed font-light max-w-3xl mx-auto space-y-6">
                <p>If you have been diagnosed with coronary artery disease, a coronary artery blockage or an electrical heart block and would like to explore Ayurvedic care, you can begin by sharing your medical history and relevant cardiac reports with the Omshree clinical team.</p>
                
                <div className="bg-white p-6 rounded-2xl border border-[#DBCFA8] shadow-sm mt-8 inline-block">
                  <h3 className="font-heading text-xl font-bold text-[#66371B] mb-2">International patients:</h3>
                  <Link href="/international-patients" className="inline-flex items-center justify-center h-12 px-6 bg-[#517B32] text-white rounded-full font-medium hover:bg-[#6F9940] transition-colors shadow-md hover:shadow-lg mt-2">
                    Start With an Online Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / Sticky Navigation */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-8">
              
              <Card className="border-[#DBCFA8] shadow-sm bg-[#E3D8C1]/30 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#66371B] mb-4">The Patient Journey</h3>
                  <ul className="space-y-4 text-sm text-[#81754B] font-medium">
                    <li className="flex items-center gap-3"><span className="flex items-center justify-center bg-[#517B32] text-white rounded-full h-6 w-6 text-xs shrink-0">1</span> Enquire & Consult</li>
                    <li className="flex items-center gap-3"><span className="flex items-center justify-center bg-[#517B32] text-white rounded-full h-6 w-6 text-xs shrink-0">2</span> Clinical Assessment</li>
                    <li className="flex items-center gap-3"><span className="flex items-center justify-center bg-[#517B32] text-white rounded-full h-6 w-6 text-xs shrink-0">3</span> Personalized Plan</li>
                    <li className="flex items-center gap-3"><span className="flex items-center justify-center bg-[#517B32] text-white rounded-full h-6 w-6 text-xs shrink-0">4</span> Treatment / Therapy</li>
                    <li className="flex items-center gap-3"><span className="flex items-center justify-center bg-[#517B32] text-white rounded-full h-6 w-6 text-xs shrink-0">5</span> Monitoring & Follow-Up</li>
                  </ul>
                  <p className="mt-4 text-xs italic text-[#81754B]">The exact clinical pathway should be confirmed by Omshree after assessment.</p>
                </CardContent>
              </Card>

              {/* Sidebar CTA */}
              <Card className="border-none shadow-md bg-[#402816] text-[#F7F1E1] rounded-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Activity className="h-24 w-24" />
                </div>
                <CardContent className="p-8 text-center space-y-6 relative z-10">
                  <h3 className="font-heading font-bold text-2xl text-white">International Patients</h3>
                  <p className="text-[#E3D8C1]/90 text-sm font-light leading-relaxed">
                    Travelling to Kerala for Ayurvedic care? Begin with an online consultation before planning your travel.
                  </p>
                  <Button render={<Link href="/international-patients" />} variant="glass" className="w-full bg-white/10 hover:bg-white/20 border-white/20">
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
