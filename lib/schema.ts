import { site, absoluteUrl } from "@/lib/site";
import { areas } from "@/content/services/catalog";

export const ids = {
  firm: `${site.url}/#escritorio`,
  person: `${site.url}/#italo-moreira`,
  website: `${site.url}/#website`,
};

/** Dados estruturados do escritório, do advogado e do site (página inicial). */
export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "LocalBusiness"],
        "@id": ids.firm,
        name: site.name,
        url: site.url,
        description: site.description,
        image: absoluteUrl(site.images.og),
        logo: absoluteUrl("/icon.png"),
        telephone: site.phoneE164,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
        hasMap: site.mapsLink,
        areaServed: [
          { "@type": "City", name: "Belo Horizonte" },
          { "@type": "Country", name: "Brasil" },
        ],
        knowsAbout: areas.map((a) => a.name),
        founder: { "@id": ids.person },
        employee: { "@id": ids.person },
        sameAs: [site.social.instagram, site.social.linkedin],
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: site.lawyer,
        jobTitle: "Advogado",
        description: `Advogado inscrito na ${site.oab}, com atuação em Direito do Consumidor, Bancário e Cível.`,
        image: absoluteUrl(site.images.portrait),
        url: site.url,
        worksFor: { "@id": ids.firm },
        knowsAbout: ["Direito do Consumidor", "Direito Bancário", "Direito Civil", "Direito de Família"],
        sameAs: [site.social.instagram, site.social.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: site.url,
        name: site.name,
        inLanguage: "pt-BR",
        publisher: { "@id": ids.firm },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
