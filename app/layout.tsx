import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import RevealObserver from "@/components/site/RevealObserver";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Italo Moreira | Advogado em Belo Horizonte — Consumidor, Bancário e Cível",
    template: "%s | Italo Moreira Advocacia",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.lawyer, url: site.url }],
  creator: site.lawyer,
  publisher: site.name,
  category: "Legal",
  keywords: [
    "advogado em Belo Horizonte",
    "advogado bancário",
    "advogado do consumidor",
    "golpe do PIX advogado",
    "fraude bancária",
    "negativação indevida",
    "advogado cível BH",
    "divórcio Belo Horizonte",
  ],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Italo Moreira | Advogado em Belo Horizonte",
    description: site.description,
    images: [{ url: site.images.og, width: 1200, height: 630, alt: "Italo Moreira — Advocacia Cível, do Consumidor e Bancária" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Italo Moreira | Advogado em Belo Horizonte",
    description: site.description,
    images: [site.images.og],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Habilita animações de entrada somente quando há JS (sem JS o conteúdo aparece normalmente) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
