export interface TreatmentFAQ {
  q: string;
  a: string;
}

export interface TreatmentData {
  slug: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImageUrl: string;
  };
  overview: string;
  symptoms: string[];
  causes: string[];
  treatmentApproach: string;
  benefits: string[];
  recoveryTimeline: string;
  faqs: TreatmentFAQ[];
}
