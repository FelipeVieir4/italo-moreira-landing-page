/**
 * Configuração central do site. Altere aqui dados de contato, redes sociais
 * e informações institucionais — eles são usados em todo o site e no SEO.
 */
export const site = {
  name: "Italo Moreira Advocacia",
  lawyer: "Italo Moreira",
  shortName: "Italo Moreira",
  url: "https://www.italomoreira.adv.br",
  locale: "pt_BR",
  oab: "OAB/MG 235.948",
  tagline: "Advocacia Cível, do Consumidor e Bancária",
  description:
    "Advogado em Belo Horizonte com atuação em Direito do Consumidor, Bancário e Cível: golpes e fraudes bancárias, negativação indevida, família e contratos. Atendimento presencial em BH e online para todo o Brasil.",
  phoneDisplay: "(31) 99936-9653",
  phoneE164: "+5531999369653",
  whatsappNumber: "5531999369653",
  whatsappMessage: "Olá, Dr. Italo! Gostaria de falar sobre um atendimento jurídico.",
  city: "Belo Horizonte",
  region: "MG",
  country: "BR",
  geo: { latitude: -19.9443617, longitude: -43.9224433 },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5261884714596!2d-43.9224433!3d-19.944361699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6329e187aab557b%3A0x38da183254454fbb!2sItalo%20Moreira%20%7C%20Advocacia%20C%C3%ADvel%20e%20Criminal!5e0!3m2!1spt-BR!2sbr!4v1747786612754!5m2!1spt-BR!2sbr",
  mapsLink: "https://maps.google.com/?cid=4096613415488147387",
  social: {
    instagram: "https://www.instagram.com/advitalomoreira",
    instagramHandle: "@advitalomoreira",
    linkedin: "https://www.linkedin.com/in/italomoreira9211/",
  },
  images: {
    og: "/og/og-default.jpg",
    portrait: "/images/italo-retrato.webp",
    seated: "/images/italo-sentado.webp",
    avatar: "/images/italo-avatar.webp",
  },
  gtmId: "GTM-W8Z26NQ8",
} as const;

export const absoluteUrl = (path = "/") =>
  `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mainNav = [
  { href: "/", label: "Início" },
  { href: "/#atuacao", label: "Atuação" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
] as const;
