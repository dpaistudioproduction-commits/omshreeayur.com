import { TherapyData } from "@/types/therapy";

export const therapies: TherapyData[] = [
  {
    slug: "abhyanga",
    name: "Abhyanga (Therapeutic Massage)",
    shortDescription: "Full-body application of warm, medicated oils to improve circulation and calm the nervous system.",
    whatItIs: "Abhyanga is a traditional Ayurvedic therapy involving a full-body massage using specific warm, medicated oils.",
    ayurvedicContext: "In Ayurveda, Abhyanga is primarily used to pacify Vata dosha. It nourishes the Dhatus (tissues), lubricates the joints, and encourages the movement of Ama (toxins) toward the gastrointestinal tract for elimination.",
    procedure: "Warm herbal oil, selected specifically for your body type and condition, is rhythmically massaged into the body by trained therapists. The strokes are designed to stimulate arterial and lymphatic circulation.",
    whyIncluded: "It is often included in treatment plans to relieve fatigue, improve sleep quality, reduce muscular stiffness, and prepare the body for deeper Panchakarma purification therapies.",
    whoMayNeed: "Patients experiencing Vata imbalances, joint pain, stress, neurological fatigue, or those undergoing a comprehensive detoxification program.",
    suitabilityNote: "Abhyanga is generally safe but is contraindicated during high fever, acute indigestion, or certain severe inflammatory conditions. Its suitability depends entirely on a doctor's assessment.",
    relatedTreatments: [
      { name: "Heart Disease & Cardiomyopathy", slug: "heart-disease" }
    ],
    relatedConditions: [
      { name: "Low Ejection Fraction", slug: "low-ejection-fraction", categorySlug: "cardiovascular" },
      { name: "Fatty Liver", slug: "fatty-liver", categorySlug: "liver" }
    ],
    seoTitle: "Abhyanga Ayurvedic Massage in Kerala | Omshree Sidha Hospital",
    seoDescription: "Learn about Abhyanga, the traditional Ayurvedic therapeutic oil massage offered as part of clinical care at Omshree Sidha Hospital.",
    heroImage: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070"
  },
  {
    slug: "hrid-basti",
    name: "Hrid Basti",
    shortDescription: "Retention of warm medicated oil over the heart region to strengthen cardiac muscles.",
    whatItIs: "Hrid Basti (also known as Uro Basti) is a localized therapy where a pool of warm, medicated herbal oil is retained over the chest area, specifically over the heart.",
    ayurvedicContext: "The heart (Hridaya) is the seat of Prana (life force) and Sadhaka Pitta (emotions). This therapy deeply nourishes the local tissues, pacifies Vata, and helps clear the Rasa and Rakta channels connected to the heart.",
    procedure: "A ring of dough (usually black gram flour) is placed on the chest over the heart. Warm, medicated oil (such as Dhanwantharam or Mahanarayana thailam) is poured into this well and maintained at a specific temperature for about 30-45 minutes.",
    whyIncluded: "It is included in cardiovascular treatment plans to relieve deep-seated stress, strengthen the myocardium (heart muscle), and improve local blood circulation.",
    whoMayNeed: "Patients with conditions like cardiomyopathy, low ejection fraction, palpitations, or those recovering from severe emotional or physical stress affecting the chest.",
    suitabilityNote: "While highly beneficial, it is only administered after a careful evaluation of the patient's cardiac stability and overall strength.",
    relatedTreatments: [
      { name: "Heart Disease & Cardiomyopathy", slug: "heart-disease" }
    ],
    relatedConditions: [
      { name: "Low Ejection Fraction", slug: "low-ejection-fraction", categorySlug: "cardiovascular" },
      { name: "Blood Pressure", slug: "blood-pressure", categorySlug: "cardiovascular" }
    ],
    seoTitle: "Hrid Basti Ayurvedic Treatment for Heart | Omshree Sidha Hospital",
    seoDescription: "Discover Hrid Basti, an authentic Ayurvedic therapy for strengthening heart muscles and relieving stress, available at Omshree Sidha Hospital, Kerala.",
    heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020"
  },
  {
    slug: "elakizhi",
    name: "Elakizhi (Patra Pinda Sweda)",
    shortDescription: "Fomentation therapy using warm poultices of medicinal leaves for joint and muscle care.",
    whatItIs: "Elakizhi is a specialized swedana (sweating) therapy where fresh medicinal leaves are fried with herbal ingredients and tied into cloth boluses (kizhis), which are then applied warmly to the body.",
    ayurvedicContext: "This therapy aggressively combats Vata and Kapha imbalances in the musculoskeletal system. It induces sweating, which opens the channels (Srotas) and expels deep-seated Ama (toxins) while reducing inflammation.",
    procedure: "The medicated boluses are continuously heated in warm herbal oil and stamped rhythmically over the entire body or specific affected areas by trained therapists.",
    whyIncluded: "It is highly effective for reducing pain, swelling, and stiffness in the joints and muscles, and is a staple in managing arthritis and sports injuries.",
    whoMayNeed: "Individuals suffering from osteoarthritis, rheumatoid arthritis (in specific stages), muscle cramps, back pain, or neurological stiffness.",
    suitabilityNote: "Elakizhi is generally safe but must be avoided in cases of severe Pitta aggravation or active inflammatory conditions where heat is contraindicated.",
    relatedTreatments: [],
    relatedConditions: [],
    seoTitle: "Elakizhi Ayurvedic Therapy in Kerala | Omshree Sidha Hospital",
    seoDescription: "Experience Elakizhi (Patra Pinda Sweda), a traditional Kerala Ayurvedic therapy for joint pain and arthritis management at Omshree Sidha Hospital.",
    heroImage: "/images/kizhi_hero.png"
  },
  {
    slug: "shirodhara",
    name: "Shirodhara",
    shortDescription: "Continuous pouring of warm medicated liquid over the forehead to profoundly relax the nervous system.",
    whatItIs: "Shirodhara is a deeply relaxing therapy where a continuous, rhythmic stream of warm medicated oil, herbal decoction, or buttermilk is poured gently over the forehead.",
    ayurvedicContext: "The forehead corresponds to the 'Ajna Chakra' and the seat of Prana Vata. Shirodhara directly calms the central nervous system, stabilizes the mind, and balances Vata and Pitta doshas.",
    procedure: "The patient lies comfortably on their back. A specialized vessel is suspended above the head, and the liquid is poured in a continuous, oscillating stream across the forehead for 45 to 60 minutes.",
    whyIncluded: "It is often prescribed to manage severe stress, insomnia, anxiety, hypertension, and various neurological disorders by inducing a state of deep mental rest.",
    whoMayNeed: "Patients dealing with high blood pressure, sleep disorders, chronic headaches, or severe psychological stress.",
    suitabilityNote: "The choice of liquid (oil vs. buttermilk) is critical and depends strictly on the physician's assessment of the patient's Dosha imbalance.",
    relatedTreatments: [
      { name: "Heart Disease & Cardiomyopathy", slug: "heart-disease" }
    ],
    relatedConditions: [
      { name: "Blood Pressure", slug: "blood-pressure", categorySlug: "cardiovascular" }
    ],
    seoTitle: "Shirodhara Treatment in Kerala | Omshree Sidha Hospital",
    seoDescription: "Learn about Shirodhara, a powerful Ayurvedic therapy for stress, insomnia, and hypertension, carefully administered at Omshree Sidha Hospital.",
    heroImage: "/images/shirodhara_hero.png"
  },
  {
    slug: "virechana",
    name: "Virechana (Therapeutic Purgation)",
    shortDescription: "A primary Panchakarma procedure that safely eliminates excess Pitta toxins from the gastrointestinal tract.",
    whatItIs: "Virechana is one of the five major purification therapies (Panchakarma) in Ayurveda, involving medically induced, controlled purgation to cleanse the lower digestive tract.",
    ayurvedicContext: "It specifically targets the elimination of morbid Pitta dosha and Ama from the liver, gallbladder, and small intestine. It is a highly systemic detoxification process.",
    procedure: "After several days of internal and external oleation (Snehana) and sweating (Swedana) to loosen toxins, a specific herbal purgative is administered on an empty stomach. The patient then experiences multiple controlled bowel movements.",
    whyIncluded: "It is a foundational treatment for chronic skin diseases, severe gastrointestinal disorders, metabolic issues, and liver dysfunction.",
    whoMayNeed: "Patients with hyperacidity, jaundice, chronic skin conditions (like psoriasis), or metabolic toxemia.",
    suitabilityNote: "Virechana is a rigorous clinical procedure that requires the patient to have sufficient physical strength (Bala). It is strictly monitored by a physician.",
    relatedTreatments: [],
    relatedConditions: [
      { name: "Acidity & GERD", slug: "acidity", categorySlug: "gastrointestinal" },
      { name: "Fatty Liver", slug: "fatty-liver", categorySlug: "liver" }
    ],
    seoTitle: "Virechana Panchakarma Therapy | Omshree Sidha Hospital",
    seoDescription: "Virechana is a core Panchakarma purification therapy used for Pitta and liver disorders. Read about its clinical application at Omshree Sidha Hospital.",
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070"
  }
];
