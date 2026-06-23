export interface PersonalDetails {
  name: string;
  dob: string;
  location: string;
  languages: string[];
  college: string;
  degree: string;
  year: string;
  dreamRole: string;
  email: string;
  phone: string;
}

export interface EducationItem {
  stage: string;
  institution: string;
  status: string;
  score?: string;
  yearRange?: string;
}

export interface SkillItem {
  name: string;
  level: number; // Percentage from 0 to 100
  category: 'Technical' | 'Soft' | 'Strength';
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  status: string;
  tags: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface InterestItem {
  name: string;
  iconName: string;
  description: string;
}
