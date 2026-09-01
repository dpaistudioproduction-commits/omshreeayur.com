export interface TherapyData {
  slug: string;
  name: string;
  shortDescription: string;
  whatItIs: string;
  ayurvedicContext: string;
  procedure: string;
  whyIncluded: string;
  whoMayNeed: string;
  suitabilityNote: string;
  relatedTreatments: {
    name: string;
    slug: string;
  }[];
  relatedConditions: {
    name: string;
    slug: string;
    categorySlug: string;
  }[];
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
}
