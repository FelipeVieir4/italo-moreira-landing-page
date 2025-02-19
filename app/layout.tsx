import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  description: "Especialista em direito civil e empresarial. Atendimento personalizado para suas necessidades jurídicas. Consulte um especialista hoje!",
  keywords: [
    "Advocacia especializada",
    "Advogado Dr. Italo Moreira",
    "Direito civil",
    "Direito empresarial",
    "Consultoria jurídica",
    "Assessoria jurídica",
  ],
  authors: [{ name: "Dr. Italo Moreira" }],
  robots: "index, follow",
  openGraph: {
    title: "Advocacia Especializada | Dr. Italo Moreira",
    description: "Especialista em direito civil e empresarial. Consulte um especialista hoje!",
    url: "https://www.italomoreira.com",
    type: "website",
    siteName: "Dr. Italo Moreira Advocacia",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.italomoreira.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Advocacia Especializada - Dr. Italo Moreira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@italomoreira",
    creator: "@italomoreira",
    title: "Advocacia Especializada | Dr. Italo Moreira",
    description: "Especialista em direito civil e empresarial. Consulte um especialista hoje!",
    images: ["https://www.italomoreira.com/twitter-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
