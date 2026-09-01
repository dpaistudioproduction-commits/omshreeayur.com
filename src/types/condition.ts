export interface ConditionFAQ {
  question: string;
  answer: string;
}

export interface ConditionTherapy {
  name: string;
  slug: string;
  description: string;
}

export interface Condition {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  heroDescription: string;
  quickAnswer: string;
  understanding: string;
  ayurvedicPerspective: string;
  omshreeApproach: string;
  therapies: ConditionTherapy[];
  whoShouldSeek: string;
  faqs: ConditionFAQ[];
  metaTitle: string;
  metaDescription: string;
  needsVerification?: boolean;
}

export interface ConditionCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  ayurvedicPerspective: string;
  conditions: Pick<Condition, 'id' | 'slug' | 'name' | 'heroDescription'>[];
  faqs: ConditionFAQ[];
  metaTitle: string;
  metaDescription: string;
}
