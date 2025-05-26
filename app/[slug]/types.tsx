export interface ServiceDataType {
  title: string;
  secondTittle: string;
  description: {
    p?: string;
    ul?: string[];
    p2?: string;
  }[];
  heroImage: string;
  ctaPrimary: {
    label: string;
  };
  benefits: string[];
  faq: {
    id: number;
    question: string;
    answer: string;
    cta?:  string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
