/**
 * Centralized Brand & Asset Registry
 * Omshree Sidha Hospital (Ayurvedic Hospital • Est. 1880)
 * 
 * Provides single source of truth for all brand logos, doctor portraits,
 * facility imagery, therapy hero visuals, and product assets.
 */

export const BRAND_ASSETS = {
  institution: {
    name: "Omshree Sidha Hospital",
    brandName: "Omshree Sidha",
    properEntity: "Ayurvedic Hospital",
    founded: "1880",
    tagline: "Ayurvedic Hospital • Est. 1880",
    shortTagline: "Ayurvedic Hospital",
  },
  logo: {
    primaryWebp: "/images/logo/logo.webp",
    primarySvg: "/images/logo/logo.svg",
    primaryPng: "/images/logo/logo.png",
    canonicalUrl: "https://omshreeayur.com/images/logo/logo.webp",
    monogram: "OS",
    alt: "Omshree Sidha Hospital - Ayurvedic Hospital Est. 1880 Logo",
  },
  favicon: "/favicon.ico",
  doctors: [
    {
      id: "sri-mj-jose",
      name: "Sri M.J. Jose",
      role: "Hospital Director & Lead Ayurvedic Researcher",
      qualifications: "Govt. Patent Holder • 3rd Generation Lineage",
      initials: "MJ",
      imagePath: "/images/doctors/Jose M J .webp",
      altText: "Sri M.J. Jose, Director and Lead Ayurvedic Researcher at Omshree Sidha Hospital",
    },
    {
      id: "dr-justin-mj",
      name: "Dr. Justin M J",
      role: "Senior Ayurvedic Physician",
      qualifications: "B.A.M.S., Clinical Medicine",
      initials: "JM",
      imagePath: "/images/doctors/Dr. Justin M J .webp",
      altText: "Dr. Justin M J, Senior Ayurvedic Physician at Omshree Sidha Hospital",
    },
    {
      id: "dr-susme-mj",
      name: "Dr. Susme M J",
      role: "Ayurvedic Physician",
      qualifications: "B.A.M.S., Internal Medicine",
      initials: "SM",
      imagePath: "/images/doctors/Dr. Susme M J .webp",
      altText: "Dr. Susme M J, Ayurvedic Physician at Omshree Sidha Hospital",
    },
  ],
  hospital: {
    campusExterior: "/images/hospital/hospital-1.png",
    pharmacy: "/images/hospital/ayurvedic-pharmacy.webp",
  },
  facilities: {
    patientRooms: "/images/facilities/patient-rooms.webp",
    consultationChambers: "/images/facilities/consultation-chambers.webp",
  },
  therapies: {
    kizhi: "/images/kizhi_hero.png",
    shirodhara: "/images/shirodhara_hero.png",
    abhyanga: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070",
    hridBasti: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020",
    virechana: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070",
  },
  products: {
    bottle: "/images/products/bottle.png",
    jar: "/images/products/jar.png",
    premiumBottle: "/images/products/premium_bottle.png",
    coughpro: "/images/products/coughpro.png",
    gandha: "/images/products/gandha.png",
    kafastha: "/images/products/kafastha.png",
    maha: "/images/products/maha.png",
    nirmal: "/images/products/nirmal.png",
    skinpro: "/images/products/skinpro.png",
  },
} as const;
