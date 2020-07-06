export interface SubjectDetails {
    id: number;
    type: string;
    key: string;
    name: string;
    firstName: string;
    midName: string;
    lastName: string;
    openDate: string;
    segment: string | string[];
    sector: string;
    classification: string | string[];
    region: string;
    currency: string;
    primaryPhoneNo: string;
    secondaryPhoneNo: string;
    emailId: string;
    documentType: string;
    documentNo: string;
    effective: string;
    expires: string;
    country: string;
    state: string;
    issuer: string;
    addresses: {
      name: string;
      line1: string;
      line2: string;
      line3: string;
      line4?: string;
    }[];
  }