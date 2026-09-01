export interface EnquiryPayload {
  patientType: 'domestic' | 'international';
  fullName: string;
  email: string;
  phone: string;
  state?: string;
  city?: string;
  country?: string;
  healthConcern: string;
  message?: string;
  
  // Anti-spam honeypot (bots fill this)
  website?: string;
  
  // Attribution & Source
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  landingPage?: string;
  referrer?: string;
  timestamp?: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  leadId?: string;
  fieldErrors?: Record<string, string>;
}
