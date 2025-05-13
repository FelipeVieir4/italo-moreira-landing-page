export interface ServiceDataType {
  title: string;
  secondTittle: string;
  description: string;
  heroImage: string;
  ctaPrimary: {
    label: string;
  };
  benefits: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
