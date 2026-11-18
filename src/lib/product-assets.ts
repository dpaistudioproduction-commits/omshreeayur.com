/**
 * Centralized Product & Medicine Asset Registry
 * Omshree Sidha Hospital (Ayurvedic Hospital • Healing Since 1880)
 * 
 * Maps all authentic GMP in-house formulation assets to verified institutional information.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: "Classical" | "Proprietary" | "Rasayana" | "Respiratory" | "Dermatology";
  categoryLabel: string;
  image: string;
  description: string;
  therapeuticFocus: string;
  patentStatus?: string;
  badge?: "Patented" | "Classic" | "Proprietary" | string;
  isAuthenticAsset: boolean;
  prescriptionOnly: boolean;
  /** Optional route to a dedicated product page */
  detailPath?: string;
}

export const AUTHENTIC_PRODUCTS: ProductItem[] = [
  {
    id: "coughpro",
    name: "CoughPro",
    category: "Respiratory",
    categoryLabel: "Respiratory & Shwasahara",
    image: "/images/products/coughpro.png",
    description: "Specialized Ayurvedic bronchial herbal formulation prepared from fresh botanicals in our Vayala medicinal gardens to support respiratory function.",
    therapeuticFocus: "Bronchial soothing, chronic cough management, and Pranavaha Srotas balance.",
    patentStatus: "Government of India Patented Innovation",
    badge: "Patented",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "gandha",
    name: "Gandha Thailam",
    category: "Classical",
    categoryLabel: "Classical Medicated Oil & Bone Care",
    image: "/images/products/gandha.png",
    description: "Time-tested classical Ayurvedic medicated oil formulation renowned for bone fracture recovery, joint strength, and ligament rejuvenation.",
    therapeuticFocus: "Bone healing, joint strength, ligament support, and Vata-pacifying rehabilitation.",
    patentStatus: "Classical Lineage Formulation",
    badge: "Classic",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "kafastha",
    name: "Kafastha",
    category: "Respiratory",
    categoryLabel: "Kapha-Pacifying Formulation",
    image: "/images/products/kafastha.png",
    detailPath: "/products/kafastha",
    description: "Targeted Ayurvedic compound formulated under Sri M.J. Jose to alleviate stubborn mucus accumulation and balance respiratory Agni.",
    therapeuticFocus: "Kapha dosha pacification, chest congestion, and airway clearance.",
    patentStatus: "Proprietary In-House Clinical Regimen",
    badge: "Patented",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "maha",
    name: "Maharajaprasarini Thailam",
    category: "Classical",
    categoryLabel: "Classical Deep-Tissue Medicine",
    image: "/images/products/maha.png",
    description: "Nutrient-dense lipid and herbal decoction formulated to promote Dhatu Poshana (tissue nourishment) during in-patient chronic recovery.",
    therapeuticFocus: "Systemic rejuvenation, chronic fatigue, and post-illness convalescence.",
    patentStatus: "Classical Lineage Formulation",
    badge: "Classic",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "nirmal",
    name: "Nirmal",
    category: "Proprietary",
    categoryLabel: "Lungs Cleaner",
    image: "/images/products/nirmal.png",
    description: "Herbal formulation developed to cleanse the lungs and act as a natural immunity booster.",
    therapeuticFocus: "Lung cleansing, respiratory wellness, and natural immunity support.",
    patentStatus: "Government of India Patented Innovation",
    badge: "Patented",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "skinpro",
    name: "SkinPro",
    category: "Dermatology",
    categoryLabel: "Dermatological & Blood Purifier",
    image: "/images/products/skinpro.png",
    description: "Herbal dermatological formulation designed to pacify Rakta and Pitta doshas in chronic skin conditions like psoriasis and eczema.",
    therapeuticFocus: "Rakta Dhatu purification, skin barrier restoration, and Pitta alleviation.",
    patentStatus: "Proprietary In-House Clinical Regimen",
    badge: "Patented",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
];
