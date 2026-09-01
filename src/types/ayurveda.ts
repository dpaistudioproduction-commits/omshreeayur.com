export interface AyurvedaTopicFAQ {
  question: string;
  answer: string;
}

export interface AyurvedaTopic {
  slug: string;
  name: string;
  heroDescription: string;
  quickAnswer: string; // Used for AEO "What is this?"
  coreContent: React.ReactNode; // To allow rich text or standard markdown strings
  faqs: AyurvedaTopicFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface Therapy {
  slug: string;
  name: string;
  heroDescription: string;
  quickAnswer: string; // "What is [Therapy]?"
  traditionalContext: string;
  procedure: string; // How it is performed
  indications: string[]; // When it might be recommended
  relatedTreatments: { slug: string; name: string }[];
  faqs: AyurvedaTopicFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface TreatmentPackage {
  slug: string;
  name: string;
  description: string;
  inclusions: string[];
  durationNote: string;
  metaTitle: string;
  metaDescription: string;
}
