export interface TreatmentFAQ {
  q: string;
  a: string;
}

export interface TreatmentData {
  slug: string;
  name: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImageUrl: string;
  };
  quickAnswer: string;
  whatItMeans: string;
  ayurvedicContext: string;
  howTreatmentIsPlanned: string;
  therapies: {
    name: string;
    slug: string;
    description: string;
  }[];
  whoShouldSeek: string;
  patientJourney: string;
  faqs: TreatmentFAQ[];
  relatedConditions: {
    name: string;
    slug: string;
    categorySlug: string;
  }[];
  relatedTherapies: {
    name: string;
    slug: string;
  }[];
  needsVerification?: boolean;
}
