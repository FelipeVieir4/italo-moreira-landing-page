import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-family-primary",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-family-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Italo Moreira - Advogado | Advocacia Especializada  ",
  description:
    "Especialista em direito civil e criminal. Atendimento personalizado para suas necessidades jurídicas. Consulte um especialista hoje!",
  keywords: [
    "Advocacia especializada",
    "Advogado Dr. Italo Moreira",
    "Direito civil",
    "Direito criminal",
    "Consultoria jurídica",
    "Assessoria jurídica",
  ],
  authors: [{ name: "Dr. Italo Moreira" }],
  robots: "index, follow",
  openGraph: {
    title: "Advocacia Especializada | Dr. Italo Moreira",
    description:
      "Especialista em direito civil e criminal. Consulte um especialista hoje!",
    url: "https://www.italomoreira.adv.br",
    type: "website",
    siteName: "Dr. Italo Moreira Advocacia",
    locale: "pt_BR",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Advocacia Especializada - Dr. Italo Moreira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@i",
    title: "Advocacia Especializada | Dr. Italo Moreira",
    description:
      "Especialista em direito civil e criminal. Consulte um especialista hoje!",
    images: ["#"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
   
        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W8Z26NQ8');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
     
      <body
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8Z26NQ8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {children}
      </body>
    </html>
  );
}
