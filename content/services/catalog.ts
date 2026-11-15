import { Gavel, Landmark, ShieldCheck, Users, type LucideIcon } from "lucide-react";

export type AreaId = "bancario" | "consumidor" | "familia" | "criminal";

export interface Area {
  id: AreaId;
  name: string;
  headline: string;
  summary: string;
  icon: LucideIcon;
  /** Categoria do blog relacionada (para sugerir artigos). */
  blogCategory?: string;
  featured: boolean;
}

export interface ServiceEntry {
  slug: string;
  name: string;
  area: AreaId;
  summary: string;
  /** Rota da página. Por padrão é /{slug}. */
  href?: string;
}

export const areas: Area[] = [
  {
    id: "bancario",
    name: "Direito Bancário",
    headline: "Golpes, fraudes e cobranças abusivas",
    summary:
      "Defesa de quem foi vítima de golpes, teve empréstimos ou descontos não autorizados ou enfrenta juros e tarifas abusivas.",
    icon: Landmark,
    blogCategory: "Direito Bancário",
    featured: true,
  },
  {
    id: "consumidor",
    name: "Direito do Consumidor",
    headline: "Seus direitos respeitados nas relações de consumo",
    summary:
      "Negativação indevida, cobranças irregulares, produtos com defeito e serviços mal prestados — com pedido de reparação quando cabível.",
    icon: ShieldCheck,
    blogCategory: "Direito do Consumidor",
    featured: true,
  },
  {
    id: "familia",
    name: "Família e Cível",
    headline: "Segurança jurídica nos momentos que importam",
    summary:
      "Divórcio, pensão, guarda e contratos conduzidos com discrição, clareza e foco em soluções equilibradas.",
    icon: Users,
    blogCategory: "Direito de Família",
    featured: true,
  },
  {
    id: "criminal",
    name: "Direito Criminal",
    headline: "Defesa técnica em todas as fases",
    summary: "Atuação desde o inquérito até os recursos, com respeito às garantias constitucionais.",
    icon: Gavel,
    featured: false,
  },
];

export const services: ServiceEntry[] = [
  {
    slug: "direito-bancario",
    name: "Fraudes e cobranças bancárias",
    area: "bancario",
    summary: "Empréstimos não contratados, descontos indevidos, juros e tarifas abusivas.",
  },
  {
    slug: "golpe-do-pix",
    name: "Golpe do PIX",
    area: "bancario",
    summary: "O que fazer para tentar recuperar valores transferidos em golpes.",
    href: "/golpe-pix/A",
  },
  {
    slug: "defesa-consumidor",
    name: "Defesa do Consumidor",
    area: "consumidor",
    summary: "Cobranças indevidas, negativação, produtos e serviços com problema.",
  },
  {
    slug: "danos-morais",
    name: "Danos morais, materiais e estéticos",
    area: "consumidor",
    summary: "Reparação por prejuízos causados por terceiros.",
  },
  {
    slug: "divorcio",
    name: "Divórcio",
    area: "familia",
    summary: "Consensual ou litigioso, judicial ou em cartório.",
  },
  {
    slug: "pensao-e-guarda",
    name: "Pensão e guarda",
    area: "familia",
    summary: "Fixação, revisão e cobrança de alimentos; guarda e convivência.",
  },
  {
    slug: "contratos",
    name: "Contratos",
    area: "familia",
    summary: "Elaboração, revisão e disputas contratuais.",
  },
  {
    slug: "violencia-domestica",
    name: "Violência doméstica",
    area: "criminal",
    summary: "Medidas protetivas e atuação com base na Lei Maria da Penha.",
  },
  {
    slug: "crimes-sexuais",
    name: "Crimes sexuais",
    area: "criminal",
    summary: "Atuação técnica e sensível em todas as fases.",
  },
  {
    slug: "crimes-patrimoniais",
    name: "Crimes patrimoniais",
    area: "criminal",
    summary: "Furto, roubo, estelionato e receptação.",
  },
  {
    slug: "trafico-drogas",
    name: "Tráfico de drogas",
    area: "criminal",
    summary: "Defesa desde a audiência de custódia.",
  },
];

export const serviceHref = (s: ServiceEntry) => s.href ?? `/${s.slug}`;
export const servicesByArea = (id: AreaId) => services.filter((s) => s.area === id);
export const getArea = (id: AreaId) => areas.find((a) => a.id === id)!;
export const getService = (slug: string) => services.find((s) => s.slug === slug);
