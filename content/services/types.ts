export interface FaqEntry {
  id?: number;
  question: string;
  answer: string;
  cta?: string;
}

export interface ServicePage {
  title: string;
  subTitle: string;
  tagline?: string;
  description: { p?: string; ul?: string[]; p2?: string }[];
  heroImage: string;
  ctaPrimary: { label: string };
  benefits: string[];
  faq: FaqEntry[];
  seo: { title: string; description: string; keywords: string[] };
}
