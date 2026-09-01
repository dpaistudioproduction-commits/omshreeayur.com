import { ConditionCategory, Condition } from "@/types/condition";

export const cardiovascularCategory: ConditionCategory = {
  id: "cardiovascular",
  slug: "cardiovascular",
  name: "Cardiovascular Health",
  description: "Traditional Ayurvedic management for heart health, circulation, and vascular function. We focus on identifying root imbalances in Dosha and Agni to support cardiovascular vitality.",
  ayurvedicPerspective: "In Ayurveda, the heart (Hridaya) is the seat of Ojas (vitality) and Prana (life force). Cardiovascular conditions are often viewed as a result of Vata and Pitta imbalances, accompanied by the accumulation of Ama (toxins) in the Rasa (plasma) and Rakta (blood) dhatus. Treatment focuses on clearing the channels (Srotas), strengthening the heart muscle, and restoring digestive fire (Agni).",
  metaTitle: "Ayurvedic Treatment for Cardiovascular Conditions in Kerala | Omshree",
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
  metaTitle: "Ayurvedic Treatment for Liver Conditions in Kerala | Omshree",
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
  metaTitle: "Ayurvedic Treatment for Gastrointestinal Issues in Kerala | Omshree",
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

export const conditionCategories = [cardiovascularCategory, liverCategory, gastrointestinalCategory];
