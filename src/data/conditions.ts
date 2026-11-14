import { ConditionCategory, Condition } from "@/types/condition";

export const cardiovascularCategory: ConditionCategory = {
  id: "cardiovascular",
  slug: "cardiovascular",
  name: "Cardiovascular Health",
  description: "Traditional Ayurvedic management for heart health, circulation, and vascular function. We focus on identifying root imbalances in Dosha and Agni to support cardiovascular vitality.",
  ayurvedicPerspective: "In Ayurveda, the heart (Hridaya) is the seat of Ojas (vitality) and Prana (life force). Cardiovascular conditions are often viewed as a result of Vata and Pitta imbalances, accompanied by the accumulation of Ama (toxins) in the Rasa (plasma) and Rakta (blood) dhatus. Treatment focuses on clearing the channels (Srotas), strengthening the heart muscle, and restoring digestive fire (Agni).",
  metaTitle: "Cardiovascular Health & Ayurvedic Care",
  metaDescription: "Explore Omshree Sidha Hospital's authentic Ayurvedic approach to cardiovascular health, including Low Ejection Fraction, Heart Blocks, and Blood Pressure.",
  conditions: [
    {
      id: "low-ejection-fraction",
      slug: "low-ejection-fraction",
      name: "Low Ejection Fraction",
      heroDescription: "Ayurvedic management strategies focusing on heart strength and vitality.",
    },
    {
      id: "heart-disease-and-blocks",
      slug: "heart-disease-and-blocks",
      name: "Heart Disease & Blocks",
      heroDescription: "Individualized Ayurvedic care to support vascular health and circulation.",
    },
    {
      id: "blood-pressure",
      slug: "blood-pressure",
      name: "Blood Pressure",
      heroDescription: "Supportive management of hypertension and hypotension through Ayurveda.",
    },
    {
      id: "cholesterol",
      slug: "cholesterol",
      name: "Cholesterol Management",
      heroDescription: "Metabolic regulation to maintain healthy lipid levels naturally.",
    }
  ],
  faqs: [
    {
      question: "How does Ayurveda approach cardiovascular health?",
      answer: "Ayurveda views cardiovascular health as a balance of Prana Vata, Sadhaka Pitta, and Avalambaka Kapha. We focus on removing Ama (toxins) from the circulatory channels, strengthening the heart muscle with specific herbs, and modifying diet to reduce stress on the cardiovascular system."
    },
    {
      question: "Is Ayurvedic treatment safe to combine with modern heart medications?",
      answer: "Patients should never stop prescribed modern medications without consulting their treating physician. Our Ayurvedic doctors carefully evaluate your current medical history and integrate Ayurvedic therapies safely to support overall cardiovascular function."
    },
    {
      question: "Can Ayurveda reverse every blockage?",
      answer: "No. We do not claim to reverse every blockage or guarantee a 100% cure. Our approach provides individualized Ayurvedic care for supportive management and assessment-based treatment planning."
    }
  ]
};

export const liverCategory: ConditionCategory = {
  id: "liver",
  slug: "liver",
  name: "Liver Health",
  description: "Ayurvedic care for liver conditions, focusing on detoxification, metabolic balance, and restoring healthy liver function naturally.",
  ayurvedicPerspective: "The liver (Yakrit) is the seat of Pitta dosha and Agni (metabolic fire). Liver disorders often stem from excess Pitta and accumulation of Ama (toxins), leading to inflammation and impaired digestion. Ayurvedic treatment focuses on cooling and pacifying Pitta, clearing Ama, and rejuvenating the liver tissues (Yakrit Poshana).",
  metaTitle: "Liver Health & Ayurvedic Treatments",
  metaDescription: "Discover Omshree Sidha Hospital's Ayurvedic approach to managing Liver conditions such as Fatty Liver, Hepatitis, and Liver Cirrhosis.",
  conditions: [
    {
      id: "fatty-liver",
      slug: "fatty-liver",
      name: "Fatty Liver",
      heroDescription: "Ayurvedic management of hepatic steatosis through metabolic correction and detoxification.",
    },
    {
      id: "hepatitis",
      slug: "hepatitis",
      name: "Hepatitis",
      heroDescription: "Supportive Ayurvedic care focusing on reducing liver inflammation and restoring balance.",
    },
    {
      id: "liver-cirrhosis",
      slug: "liver-cirrhosis",
      name: "Liver Cirrhosis",
      heroDescription: "Individualized Ayurvedic care to support liver function and improve quality of life.",
    }
  ],
  faqs: [
    {
      question: "How does Ayurveda treat Fatty Liver?",
      answer: "In Ayurveda, Fatty Liver is treated by correcting the digestive fire (Agni) and eliminating accumulated toxins (Ama) and excess fat (Meda). Treatment includes specific dietary changes (Pathya), herbal medicines (like Kalmegh and Kutki), and sometimes Panchakarma therapies if the patient is deemed fit."
    },
    {
      question: "Can Ayurveda cure Liver Cirrhosis?",
      answer: "Liver Cirrhosis is an advanced condition involving scarring of the liver. Ayurvedic treatment does not claim to 'cure' or reverse severe cirrhosis, nor does it replace essential conventional medical care or emergencies. Instead, it offers supportive management aiming to protect remaining liver function and improve the patient's quality of life. [VERIFY BEFORE PUBLICATION]"
    }
  ]
};

export const gastrointestinalCategory: ConditionCategory = {
  id: "gastrointestinal",
  slug: "gastrointestinal",
  name: "Gastrointestinal Health",
  description: "Comprehensive Ayurvedic management for digestive disorders, from acidity and IBS to complex conditions like Crohn's and Colitis.",
  ayurvedicPerspective: "In Ayurveda, digestion is understood through the concept of Agni, or digestive function. When Agni is imbalanced (Manda, Tikshna, or Vishama), it leads to the formation of Ama (toxins), causing gastrointestinal pathology. During consultation, the practitioner considers digestion, appetite, bowel habits and other individual factors while developing a care plan.",
  metaTitle: "Gastrointestinal Health & Ayurvedic Care",
  metaDescription: "Omshree Sidha Hospital provides traditional Ayurvedic treatment for IBS, Crohn's Disease, Ulcerative Colitis, Acidity, Piles, and Fistula in Kerala, India.",
  conditions: [
    {
      id: "ibs",
      slug: "ibs",
      name: "IBS (Irritable Bowel Syndrome)",
      heroDescription: "Ayurvedic regulation of bowel function and correction of digestive fire.",
    },
    {
      id: "crohns-disease",
      slug: "crohns-disease",
      name: "Crohn's Disease",
      heroDescription: "Supportive management for intestinal inflammation and auto-immune digestive concerns.",
    },
    {
      id: "ulcerative-colitis",
      slug: "ulcerative-colitis",
      name: "Ulcerative Colitis",
      heroDescription: "Ayurvedic care targeting colon inflammation and restoring mucosal health.",
    },
    {
      id: "acidity",
      slug: "acidity",
      name: "Acidity & GERD",
      heroDescription: "Natural pacification of excess Pitta to manage acid reflux and heartburn.",
    },
    {
      id: "piles",
      slug: "piles",
      name: "Piles (Hemorrhoids)",
      heroDescription: "Ayurvedic management of hemorrhoids through diet, medicine, and localized therapies.",
    },
    {
      id: "fistula",
      slug: "fistula",
      name: "Fistula",
      heroDescription: "Traditional Ayurvedic interventions, including Ksharasutra, for fistula management.",
    }
  ],
  faqs: [
    {
      question: "How does Ayurveda approach IBS?",
      answer: "Ayurveda views IBS primarily as Grahani Roga, an imbalance in the functioning of the digestive fire (Agni) and the retaining capacity of the intestines. Treatment involves deep digestive correction, stress management, and specific herbs to regulate bowel movements."
    },
    {
      question: "Is Ksharasutra available at Omshree Sidha Hospital?",
      answer: "Yes, for conditions like Fistula and Piles, Ksharasutra (a specialized Ayurvedic para-surgical procedure) may be considered upon detailed evaluation by our specialized physicians."
    }
  ]
};

export const lowEjectionFraction: Condition = {
  id: "low-ejection-fraction",
  slug: "low-ejection-fraction",
  name: "Low Ejection Fraction",
  categoryId: "cardiovascular",
  metaTitle: "Ayurvedic Treatment for Low Ejection Fraction in Kerala | Omshree",
  metaDescription: "Understand Omshree Sidha Hospital's personalized Ayurvedic approach to managing Low Ejection Fraction (Low EF) and improving cardiovascular vitality.",
  heroDescription: "Low Ejection Fraction indicates a weakened heart muscle. Our Ayurvedic approach focuses on strengthening the heart, improving circulation, and enhancing overall vitality through personalized therapies.",
  quickAnswer: "Low Ejection Fraction (Low EF) is a medical measurement indicating how well your heart is pumping blood with each beat. A low EF means the heart muscle is weakened and is not pumping blood efficiently to meet the body's needs. In Ayurveda, this is often approached by strengthening the heart (Hridaya) and clearing blockages in the circulatory channels (Rasa Vaha Srotas).",
  understanding: "The ejection fraction compares the amount of blood in the heart to the amount of blood pumped out. A normal ejection fraction is usually between 50% and 70%. When it drops below normal, patients may experience fatigue, shortness of breath, swelling in the legs, and reduced physical stamina. Proper assessment is critical to understanding the underlying stress on the heart muscle.",
  ayurvedicPerspective: "In Ayurveda, conditions resembling Low EF are often linked to a profound imbalance of Vata dosha (specifically Prana and Vyana Vata), which governs movement and circulation. When Ama (metabolic toxins) obstructs the Rasa (plasma) and Rakta (blood) channels, the heart must work harder. Additionally, diminished Ojas (the ultimate essence of health and immunity) results in muscular weakness. Treatment aims to pacify Vata, clear Ama, and nourish the Dhatus (tissues).",
  omshreeApproach: "At Omshree Sidha Hospital, we do not employ a 'one-size-fits-all' protocol. Management of Low Ejection Fraction begins with a rigorous consultation to understand your unique constitution (Prakriti) and the specific nature of your imbalance. We then create a personalized care plan that may include specialized herbal formulations (such as those based on Arjuna), targeted Panchakarma therapies (if appropriate and safe for the patient's strength), and strict dietary (Pathya) modifications. We monitor progress closely throughout your stay.",
  therapies: [
    {
      name: "Hrid Basti",
      slug: "hrid-basti",
      description: "A specialized therapy where warm medicated oil is retained over the chest area (heart region) to nourish the heart muscles and relieve stress."
    },
    {
      name: "Abhyanga",
      slug: "abhyanga",
      description: "Therapeutic full-body massage with specific herbal oils to improve circulation, reduce Vata imbalance, and induce deep relaxation."
    },
    {
      name: "Internal Medications",
      slug: "internal-medications",
      description: "Personalized herbal decoctions and formulations, often featuring cardio-protective herbs, to strengthen the heart and clear channels."
    }
  ],
  whoShouldSeek: "You may consider an Ayurvedic consultation for Low Ejection Fraction if you are looking to support your heart health naturally, wish to improve your energy levels and stamina, or are seeking a holistic approach to cardiovascular wellness. Always discuss complementary treatments with your primary cardiologist, especially if you have a severe condition or are experiencing acute symptoms like severe shortness of breath or chest pain.",
  faqs: [
    {
      question: "What is Low Ejection Fraction?",
      answer: "Low Ejection Fraction is a measurement showing that the heart is not pumping out a normal percentage of blood with each contraction, indicating a weakened heart muscle."
    },
    {
      question: "What symptoms are commonly associated with Low EF?",
      answer: "Common symptoms include persistent fatigue, shortness of breath (especially during exertion or while lying down), swelling in the ankles or legs (edema), and a rapid or irregular heartbeat."
    },
    {
      question: "How does Ayurveda approach Low Ejection Fraction?",
      answer: "Ayurveda approaches it by aiming to balance the Doshas (primarily Vata), clear metabolic toxins (Ama) from the circulatory channels, and nourish the heart muscle (Hridaya) using specific herbs, diet, and lifestyle adjustments."
    },
    {
      question: "How is treatment planned at Omshree Sidha Hospital?",
      answer: "Treatment is entirely individualized. It begins with a detailed consultation to assess your Prakriti (constitution) and current health status. Based on this, a customized plan involving internal medicines, external therapies, and diet is created."
    },
    {
      question: "How long does treatment take?",
      answer: "Treatment duration depends strictly on individual assessment, the chronicity of the condition, and the patient's response to therapy. An estimated timeline is provided after the initial consultation."
    },
    {
      question: "Can I consult Omshree before travelling to Kerala?",
      answer: "Yes. We highly recommend international and out-of-state patients begin with an online video consultation to discuss their medical history and determine if travel to our hospital is appropriate for their specific condition."
    }
  ],
  needsVerification: true
};

export const neurologicalCategory: ConditionCategory = {
  id: "neurological",
  slug: "neurological",
  name: "Neurological Care",
  description: "Ayurvedic management and supportive rehabilitation for chronic neurological conditions, including Motor Neuron Disease (MND), Stroke, Paralysis, Migraine, and Vertigo.",
  ayurvedicPerspective: "In Ayurveda, neurological disorders are classified under Vata Vyadhi—disorders arising from severe aggravation of Vata dosha, particularly Prana, Udana, and Vyana Vata. Vata governs all sensory perception, motor activity, and nerve impulses. Chronic depletion of Dhatus (Dhatukshaya) or obstruction of subtle cranial and peripheral channels (Avarana) leads to neuro-muscular impairment, stiffness, pain, and loss of motor control. Treatment focuses on clearing channel obstructions, pacifying aggravated Vata with intensive internal and external oleation (Snehana), gentle fomentation (Swedana), and nourishing depleted nervous and muscular tissues (Brimhana and Rasayana).",
  metaTitle: "Neurological Care & Ayurvedic Treatment in Kerala | Omshree",
  metaDescription: "Comprehensive Ayurvedic care for neurological conditions including Stroke recovery, Paralysis, MND supportive care, Migraine, and Vertigo at Omshree Sidha Hospital, Kerala.",
  conditions: [
    {
      id: "stroke",
      slug: "stroke",
      name: "Stroke Rehabilitation",
      heroDescription: "Integrative Ayurvedic post-acute stroke neuro-rehabilitation to regain motor control, improve mobility, and reduce spasticity.",
    },
    {
      id: "paralysis",
      slug: "paralysis",
      name: "Paralysis (Pakshaghata)",
      heroDescription: "Classical Ayurvedic therapies designed to stimulate neuromuscular pathways, rebuild muscle tone, and restore functional independence.",
    },
    {
      id: "mnd",
      slug: "motor-neuron-disease",
      name: "Motor Neuron Disease (MND)",
      heroDescription: "Supportive, palliative Ayurvedic care focused on maintaining muscle nourishment, alleviating stiffness, and supporting quality of life.",
    },
    {
      id: "migraine",
      slug: "migraine",
      name: "Migraine",
      heroDescription: "Targeted Ayurvedic protocols combining Shirodhara, Nasyam, and herbal formulations to calm neurovascular inflammation.",
    },
    {
      id: "vertigo",
      slug: "vertigo",
      name: "Vertigo (Bhrama)",
      heroDescription: "Ayurvedic approaches to address vestibular imbalance, dizziness, and related cervical tension through customized therapies.",
    }
  ],
  faqs: [
    {
      question: "How does Ayurveda approach neurological conditions?",
      answer: "Ayurveda categorizes neurological disorders predominantly as Vata Vyadhi. Treatment aims to pacify aggravated Vata, remove metabolic toxins (Ama) obstructing nerve pathways (Srotas), and nourish the nervous system through specialized medicated oils, Panchakarma procedures, and herbal neuro-rejuvenative (Medhya and Rasayana) medicines."
    },
    {
      question: "Is acute stroke treated with Ayurveda at Omshree Sidha Hospital?",
      answer: "No. Acute stroke is a medical emergency requiring immediate modern emergency hospital evaluation, neuro-imaging, and critical stabilization. Ayurvedic care at Omshree Sidha Hospital is indicated during the sub-acute and chronic rehabilitation phase, once the patient is hemodynamically stable, to assist in regaining motor strength, speech recovery, and mobility."
    },
    {
      question: "Can Ayurveda cure Motor Neuron Disease (MND)?",
      answer: "No. We do not claim to cure or reverse Motor Neuron Disease (MND / ALS). Ayurvedic management is strictly supportive and palliative, aiming to slow functional deterioration, alleviate muscle spasms, preserve physical comfort, and enhance the patient's daily quality of life through nourishing therapies."
    },
    {
      question: "Can I take Ayurvedic medicines alongside modern neurological prescriptions?",
      answer: "Yes, in most cases Ayurvedic therapies and medicines can be safely integrated alongside your existing conventional medications. Patients must never abruptly discontinue prescribed anti-hypertensive, anti-platelet, blood-thinning, or anticonvulsant drugs without their primary neurologist's explicit supervision. A mandatory time interval is maintained between different medicines."
    },
    {
      question: "What therapies are commonly used for neurological rehabilitation?",
      answer: "Depending upon the patient's individual assessment and physical strength, therapies commonly prescribed include Shirodhara (warm medicated oil stream on forehead), Nasyam (nasal instillation of medicinal oils), Njavarakizhi (medicated rice bolus massage for muscle nourishment), Pizhichil (continuous warm herbal oil bath), Shirovasti, and therapeutic Abhyangam."
    }
  ]
};

export const musculoskeletalCategory: ConditionCategory = {
  id: "musculoskeletal",
  slug: "musculoskeletal",
  name: "Musculoskeletal Care",
  description: "Authentic Ayurvedic clinical care for chronic joint and spine disorders, including Osteoarthritis, Rheumatoid Arthritis, Cervical and Lumbar Spondylosis, Sciatica, and mobility limitations.",
  ayurvedicPerspective: "In Ayurveda, musculoskeletal disorders are fundamentally understood as imbalances in Vata dosha, often interacting with Kapha, Pitta, and metabolic endotoxins (Ama). Vata governs all bone structures (Asthi Dhatu), joints (Sandhi), and bodily movement. Degenerative joint concerns (Sandhivata) represent tissue depletion (Dhatukshaya), while inflammatory arthritic conditions (Amavata) represent toxin-laden systemic blockage. Ayurvedic management focuses on clearing morbid Ama, pacifying aggravated Vata, deeply lubricating articular surfaces through Snehana (oleation), opening channels via Swedana (fomentation), and restoring strength and flexibility to ligaments, discs, and tendons (Brimhana and Rasayana).",
  metaTitle: "Musculoskeletal Care & Ayurvedic Arthritis Treatment in Kerala | Omshree",
  metaDescription: "Comprehensive Ayurvedic treatments for Osteoarthritis, Spondylosis, Sciatica, Rheumatoid Arthritis, and joint pain at Omshree Sidha Hospital, Kerala.",
  conditions: [
    {
      id: "osteoarthritis",
      slug: "osteoarthritis-knee-pain",
      name: "Osteoarthritis (Sandhivata / Knee Pain)",
      heroDescription: "Specialized Ayurvedic protocols utilizing Elakizhi, Janu Basti, and herbal lepam to reduce joint inflammation, lubricate cartilage, and restore ease of movement.",
    },
    {
      id: "rheumatoid-arthritis",
      slug: "rheumatoid-arthritis",
      name: "Rheumatoid Arthritis (Amavata)",
      heroDescription: "Integrative management targeting digestive Agni, eliminating systemic Ama toxins, and relieving chronic joint stiffness and inflammation.",
    },
    {
      id: "spondylosis",
      slug: "cervical-lumbar-spondylosis",
      name: "Cervical & Lumbar Spondylosis",
      heroDescription: "Targeted spinal therapies including Kati Basti, Greeva Basti, and Kizhi to decompress paraspinal nerves, ease muscular spasm, and nourish intervertebral discs.",
    },
    {
      id: "sciatica",
      slug: "sciatica",
      name: "Sciatica (Gridhrasi & Disc Bulge)",
      heroDescription: "Conservative neuro-musculoskeletal care combining warm medicated oil pooling, herbal fomentation, and gentle tractive therapies to relieve radiating leg pain.",
    },
    {
      id: "ankylosing-spondylitis",
      slug: "ankylosing-spondylitis",
      name: "Ankylosing Spondylitis",
      heroDescription: "Long-term supportive therapies designed to preserve spinal mobility, reduce enthesitis, and alleviate chronic sacroiliac and back stiffness.",
    }
  ],
  faqs: [
    {
      question: "How does Ayurveda approach chronic joint pain and arthritis?",
      answer: "Ayurveda categorizes joint disorders into degenerative (Sandhivata) and inflammatory-metabolic (Amavata). Rather than merely masking pain, treatment focuses on clearing toxic metabolic residues (Ama), restoring digestive fire (Agni), nourishing cartilage and bone tissue (Asthi-Majja Dhatu), and pacifying Vata dosha through specialized external Panchakarma therapies and internal classical herbal formulations."
    },
    {
      question: "Can Ayurvedic treatment help avoid knee replacement or spinal surgery?",
      answer: "Many patients explore conservative Ayurvedic care for mild, moderate, or advanced degenerative joint and disc issues to alleviate chronic pain, regain functional range of motion, and reduce dependence on strong analgesics. However, surgical necessity is assessed on an individual basis; our physicians conduct an honest, objective clinical assessment of scan reports and physical stability before recommending conservative therapy."
    },
    {
      question: "What therapies are commonly used for musculoskeletal conditions?",
      answer: "Depending on your specific condition and tissue vitality, therapies may include Elakizhi (leaf bolus fomentation), Njavarakizhi (nourishing rice bolus treatment), Pizhichil (continuous warm oil bath), Kati Basti / Greeva Basti (localized spinal oil retention), Janu Basti (knee joint oil retention), Lepanam (herbal paste application), and therapeutic Abhyangam."
    },
    {
      question: "Should I stop taking prescribed painkillers or DMARDs before Ayurvedic treatment?",
      answer: "No. You should never abruptly stop or alter prescribed medications, including conventional analgesics, anti-inflammatories, DMARDs, or corticosteroids, without the guidance of your treating physician or rheumatologist. In our clinical practice, Ayurvedic therapies are coordinated safely alongside conventional regimens, with gradual tapering considered only under physician supervision as symptoms stabilize."
    },
    {
      question: "How long does a musculoskeletal treatment program typically take at the hospital?",
      answer: "Inpatient programs for chronic joint and spine conditions generally range between 2 to 4 weeks depending on the severity of degeneration, chronicity, and the patient's age and mobility. This intensive phase is typically followed by a home regimen of internal herbal medicines and guided joint exercises for 6 to 12 months."
    }
  ]
};

export const respiratoryCategory: ConditionCategory = {
  id: "respiratory",
  slug: "respiratory",
  name: "Respiratory Care",
  description: "Specialized Ayurvedic management and supportive pulmonary rehabilitation for chronic respiratory conditions, including Bronchial Asthma, COPD, Chronic Sinusitis, and Allergic Rhinitis.",
  ayurvedicPerspective: "In Ayurveda, respiratory health is governed by Prana Vata and Kledaka/Avalambaka Kapha, functioning within the respiratory channels (Pranavaha Srotas). When digestive fire (Agni) is impaired, it generates metabolic toxins (Ama) that combine with vitiated Kapha, producing thick, tenacious phlegm that obstructs Prana Vata, leading to bronchospasm, breathlessness (Swasa Roga), chronic cough (Kasa), and paranasal congestion (Pratishyaya). Ayurvedic treatment focuses on clearing morbid Kapha obstructions, pacifying aggravated Vata, dilating respiratory passages through Snehana and Swedana, kindling Agni, and restoring mucosal immunity through Rasayana therapies.",
  metaTitle: "Respiratory Care, Asthma & COPD Ayurvedic Treatment in Kerala | Omshree",
  metaDescription: "Comprehensive Ayurvedic management for Bronchial Asthma, COPD, Sinusitis, and Allergic Rhinitis at Omshree Sidha Hospital, Kerala.",
  conditions: [
    {
      id: "asthma",
      slug: "asthma-treatment",
      name: "Bronchial Asthma (Tamaka Swasa)",
      heroDescription: "Personalized Ayurvedic protocols aimed at reducing airway hyper-reactivity, liquefying thick phlegm, and easing nocturnal breathlessness.",
    },
    {
      id: "copd",
      slug: "copd-chronic-obstructive-pulmonary-disease",
      name: "Chronic Obstructive Pulmonary Disease (COPD)",
      heroDescription: "Supportive Ayurvedic pulmonary rehabilitation focusing on mucociliary clearance, diaphragmatic breathing ease, and stamina enhancement.",
    },
    {
      id: "sinusitis",
      slug: "sinusitis-treatment",
      name: "Chronic Sinusitis (Dushta Pratishyaya)",
      heroDescription: "Targeted Ayurvedic therapies including Nasyam, herbal steam inhalation, and anti-inflammatory Lepams to relieve facial pressure and drain blocked sinuses.",
    },
    {
      id: "allergic-rhinitis",
      slug: "sneezing-treatment",
      name: "Allergic Rhinitis & Frequent Sneezing",
      heroDescription: "Constitutional therapy to balance Prana Vata and Kapha, strengthen upper respiratory mucosal resistance, and reduce sensitivity to environmental triggers.",
    }
  ],
  faqs: [
    {
      question: "How does Ayurveda approach chronic respiratory conditions like asthma and COPD?",
      answer: "Ayurveda views chronic respiratory disorders as imbalances of Prana Vata and Kapha affecting the Pranavaha Srotas (respiratory pathways). Treatment focuses on removing deep-seated mucus (Kapha) and toxins (Ama), pacifying spasms in the airways, kindling digestive Agni to halt further toxin production, and strengthening pulmonary tissue resilience through classical herbs and Panchakarma therapies."
    },
    {
      question: "Can I stop using my inhalers, nebulizers, or oxygen while taking Ayurvedic treatment?",
      answer: "No. You must never discontinue or reduce your prescribed conventional medications, rescue inhalers, inhaled corticosteroids, or supplemental oxygen without explicit instructions from your treating pulmonologist. In our clinical practice, Ayurvedic care is provided safely alongside your existing treatments. As your lung function and stamina improve over time, any modification to your conventional prescriptions is made only by your primary medical specialist."
    },
    {
      question: "Can Ayurveda cure chronic asthma or COPD permanently?",
      answer: "No. We do not claim a '100% cure' or permanent reversal for chronic asthma or COPD. Both are chronic pulmonary conditions. Our physician-directed Ayurvedic care focuses on realistic, sustainable outcomes: easing chronic breathlessness, liquefying stubborn phlegm, reducing the severity and frequency of seasonal flare-ups, and improving everyday stamina and physical comfort."
    },
    {
      question: "What therapies are commonly used for respiratory health at Omshree Sidha Hospital?",
      answer: "Depending on individual assessment, therapies may include Nasyam (nasal administration of medicated herbal oils to clear upper respiratory passages), Dhoomapana (inhalation of medicated herbal smoke/steam), Uro-Basti (warm medicated oil retention over the chest to soothe thoracic tightness), localized Swedanam (herbal steam fomentation), and proprietary formulations like Kafastha granules alongside classical Kashayams."
    },
    {
      question: "How long does an inpatient respiratory care program typically take?",
      answer: "Inpatient programs for chronic respiratory ailments typically range between 2 to 3 weeks under close physician observation. This is followed by a structured home regimen of internal herbal medicines and dietary guidelines for 6 to 12 months to support sustained respiratory health."
    }
  ]
};

export const skinCategory: ConditionCategory = {
  id: "skin",
  slug: "skin",
  name: "Skin Care",
  description: "Authentic Ayurvedic management for chronic dermatological conditions, including Psoriasis, Eczema, Vitiligo, and chronic inflammatory skin concerns.",
  ayurvedicPerspective: "In Ayurveda, skin disorders are broadly classified under Kushta Roga, arising from the vitiation of all three Doshas (Vata, Pitta, Kapha) interacting with the four primary bodily constituents: Twak (skin), Rakta (blood), Mamsa (muscle tissue), and Lasika (lymphatic fluid). Impaired digestive fire (Agni) leads to the accumulation of systemic toxins (Ama) that circulate in the bloodstream and manifest as chronic dermal inflammation, scaling, itching, and pigmentation loss. Ayurvedic treatment focuses on deep metabolic detoxification through Panchakarma (especially Virechana and Takradhara), blood purification (Raktaprasadana), topical barrier restoration through medicated herbal oils and Lepams, and strict dietary regulation (Pathya).",
  metaTitle: "Ayurvedic Skin Care, Psoriasis & Eczema Treatment in Kerala | Omshree",
  metaDescription: "Specialized Ayurvedic clinical care for Psoriasis, Eczema, Vitiligo, and chronic dermatological conditions at Omshree Sidha Hospital, Kerala.",
  conditions: [
    {
      id: "psoriasis",
      slug: "psoriasis",
      name: "Psoriasis (Kitibha / Ekakushta)",
      heroDescription: "Comprehensive Ayurvedic protocols utilizing Takradhara, Kashaya Dhara, and blood-purifying herbal formulations to soothe scaly plaques, relieve itching, and support long-term remission.",
    },
    {
      id: "eczema",
      slug: "eczema",
      name: "Eczema / Atopic Dermatitis (Vicharchika)",
      heroDescription: "Gentle therapies focusing on skin barrier restoration, Pitta pacification, and herbal Lepams to calm chronic redness, oozing, and intense pruritus.",
    },
    {
      id: "vitiligo",
      slug: "vitiligo",
      name: "Vitiligo (Shvitra / Kilasa)",
      heroDescription: "Supportive Ayurvedic management addressing metabolic Agni, liver function, and specialized topical herbal applications to encourage natural skin repigmentation.",
    },
    {
      id: "chronic-dermatitis",
      slug: "dandruff",
      name: "Chronic Scalp Dermatitis & Scaling",
      heroDescription: "Targeted head therapies including Shirodhara with medicated buttermilk, anti-fungal herbal washes, and medicated oils to normalize scalp health.",
    }
  ],
  faqs: [
    {
      question: "How does Ayurveda approach chronic skin conditions like psoriasis and eczema?",
      answer: "Rather than viewing skin conditions as merely superficial issues, Ayurveda recognizes them as external manifestations of deep-seated internal imbalances involving the Doshas, impaired digestive fire (Agni), and accumulated toxins (Ama) in the blood (Rakta Dhatu). Treatment combines internal blood-purifying herbal decoctions, supervised Panchakarma detoxification (such as Virechana), external soothing therapies (like Takradhara and Lepam), and strict dietary adjustments to address root metabolic triggers."
    },
    {
      question: "Are skin conditions like psoriasis, eczema, or vitiligo contagious?",
      answer: "No. None of these conditions are contagious. You cannot transmit or catch psoriasis, eczema, or vitiligo through physical touch, sharing personal items, or swimming. Psoriasis and vitiligo are autoimmune-related conditions, while eczema involves skin barrier dysfunction and immune hyper-reactivity."
    },
    {
      question: "Can I stop using my prescribed steroid creams or immunosuppressants?",
      answer: "No. You should never abruptly discontinue prescribed topical corticosteroids, oral steroids, or immunosuppressive medications without the explicit guidance of your dermatologist. Abruptly stopping steroids can trigger a severe rebound flare. In our clinical practice, Ayurvedic therapies are coordinated safely alongside conventional regimens, with gradual tapering evaluated only under physician supervision as the skin stabilizes."
    },
    {
      question: "Can Ayurveda cure psoriasis or vitiligo permanently?",
      answer: "No. We do not claim a guaranteed permanent cure for chronic conditions like psoriasis or vitiligo. Both are complex, relapsing disorders. Our physician-directed Ayurvedic care focuses on realistic and meaningful outcomes: clearing active plaques, alleviating severe itching and burning, extending symptom-free remission periods, and supporting natural skin barrier restoration."
    },
    {
      question: "What therapies are commonly used for skin health at Omshree Sidha Hospital?",
      answer: "Depending on your specific condition and Dosha staging, therapies may include Takradhara (continuous pouring of medicated buttermilk over the forehead or body to cool Pitta), Kashaya Dhara (warm medicated herbal decoction stream), Virechana (therapeutic purgation for blood purification), specialized herbal Lepams, and application of classical medicated oils like Danthapala or Nalpamaradi tailam."
    },
    {
      question: "How long does an inpatient skin care program typically take?",
      answer: "Inpatient programs for chronic skin conditions generally range between 3 to 4 weeks under daily physician monitoring. This intensive Panchakarma phase is followed by a home maintenance regimen of internal herbal medicines, skin barrier oils, and dietary guidelines for 6 to 12 months to prevent recurrence."
    }
  ]
};

export const conditionCategories = [
  cardiovascularCategory,
  liverCategory,
  gastrointestinalCategory,
  neurologicalCategory,
  musculoskeletalCategory,
  respiratoryCategory,
  skinCategory,
];
