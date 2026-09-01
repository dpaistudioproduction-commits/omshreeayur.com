/**
 * Centralized Product & Medicine Asset Registry
 * Omshree Sidha Hospital (Ayurvedic Hospital • Est. 1880)
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
  isAuthenticAsset: boolean;
  prescriptionOnly: boolean;
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
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "gandha",
    name: "Gandha Rasayana",
    category: "Rasayana",
    categoryLabel: "Cellular Rejuvenation & Rasayana",
    image: "/images/products/gandha.png",
    description: "Classical mineral-herbal purified formulation processed through traditional Bhavana techniques for metabolic correction and deep tissue recovery.",
    therapeuticFocus: "Cellular vitality, chronic inflammation management, and tissue purification.",
    patentStatus: "Classical GMP Certified Preparation",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "kafastha",
    name: "Kafastha",
    category: "Respiratory",
    categoryLabel: "Kapha-Pacifying Formulation",
    image: "/images/products/kafastha.png",
    description: "Targeted Ayurvedic compound formulated under Sri M.J. Jose to alleviate stubborn mucus accumulation and balance respiratory Agni.",
    therapeuticFocus: "Kapha dosha pacification, chest congestion, and airway clearance.",
    patentStatus: "Proprietary In-House Clinical Regimen",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "maha",
    name: "Maha Rasayana",
    category: "Classical",
    categoryLabel: "Classical Deep-Tissue Medicine",
    image: "/images/products/maha.png",
    description: "Nutrient-dense lipid and herbal decoction formulated to promote Dhatu Poshana (tissue nourishment) during in-patient chronic recovery.",
    therapeuticFocus: "Systemic rejuvenation, chronic fatigue, and post-illness convalescence.",
    patentStatus: "Classical Lineage Formulation",
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
  {
    id: "nirmal",
    name: "Nirmal",
    category: "Proprietary",
    categoryLabel: "Metabolic & Hepatic Cleanser",
    image: "/images/products/nirmal.png",
    description: "Hepatoprotective and blood-cleansing herbal elixir developed to eliminate Ama (accumulated toxins) and support liver enzyme balance.",
    therapeuticFocus: "Liver detoxification, lipid metabolic balance, and digestive regulation.",
    patentStatus: "Government of India Patented Innovation",
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
    isAuthenticAsset: true,
    prescriptionOnly: true,
  },
];
