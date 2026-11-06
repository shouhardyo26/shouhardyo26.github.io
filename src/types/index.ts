export type Language = 'en' | 'bn';

export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  labelEn: string;
  labelBn: string;
  href: string;
}

export interface SkillItem {
  id: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  category: string;
  iconName: string;
}

export interface TimelineCard {
  id: string;
  labelEn: string;
  labelBn: string;
  headingEn: string;
  headingBn: string;
  descEn: string;
  descBn: string;
  isCurrent?: boolean;
}

export interface InterestCard {
  id: string;
  iconName: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
}

export interface ExploreCard {
  number: string;
  headingEn: string;
  headingBn: string;
  descEn: string;
  descBn: string;
  iconName: string;
}

export interface GoalCard {
  number: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}
