import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-family-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-family-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://www.italomoreira.adv.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dr. Italo Moreira — Advogado | Belo Horizonte, MG",
    template: "%s | Dr. Italo Moreira Advocacia",
  },
  description:
    "Advogado especialista em Direito Civil e Criminal em Belo Horizonte, MG. Atendimento personalizado em divórcio, danos morais, defesa do consumidor, crimes e muito mais. OAB/MG.",
  keywords: [
    "advogado Belo Horizonte",
    "advogado OAB MG",
    "Dr. Italo Moreira",
    "Italo Moreira advogado",
    "advogado direito civil",
    "advogado direito criminal",
    "divórcio BH",
    "danos morais advogado",
    "defesa do consumidor advogado",
    "golpe do PIX advogado",
    "advocacia especializada BH",
    "consultoria jurídica Belo Horizonte",
  ],
  authors: [{ name: "Dr. Italo Moreira", url: BASE_URL }],
  creator: "Dr. Italo Moreira",
  publisher: "Italo Moreira Advocacia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Dr. Italo Moreira — Advogado | Belo Horizonte, MG",
    description:
      "Advogado especialista em Direito Civil e Criminal em Belo Horizonte. Atendimento personalizado, ético e eficiente. OAB/MG.",
    url: BASE_URL,
    type: "website",
    siteName: "Dr. Italo Moreira Advocacia",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Italo Moreira — Advogado especialista em Belo Horizonte, MG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Italo Moreira — Advogado | Belo Horizonte, MG",
    description:
      "Advogado especialista em Direito Civil e Criminal em Belo Horizonte. Atendimento ético e eficiente. OAB/MG.",
    images: ["/og-image.jpg"],
  },
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  name: "Dr. Italo Moreira Advocacia",
  description:
    "Escritório de advocacia especializado em Direito Civil e Criminal, atendendo clientes em Belo Horizonte, MG e todo o Brasil.",
  url: BASE_URL,
  telephone: "+5531999369653",
  email: "contato@italomoreira.adv.br",
  image: `${BASE_URL}/og-image.jpg`,
  logo: `${BASE_URL}/logo/logo-white.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -19.9191,
    longitude: -43.9386,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "State",
    name: "Minas Gerais",
  },
  sameAs: [
    "https://www.linkedin.com/in/italomoreira9211/",
    "https://www.instagram.com/advitalomoreira",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Jurídicos",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Divórcio e Separação" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pensão e Guarda" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contratos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Danos Morais, Materiais e Estéticos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Violência Doméstica" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crimes Sexuais" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crimes Patrimoniais" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tráfico de Drogas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Defesa do Consumidor" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* Google Tag Manager */}
      <Script id="gtm-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W8Z26NQ8');
        `}
      </Script>
      {/* JSON-LD Structured Data */}
      <Script
        id="jsonld-legalservice"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
      />
      <body
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8Z26NQ8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
