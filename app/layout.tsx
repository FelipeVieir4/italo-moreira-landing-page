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
  title: "Dr. Italo Moreira",
  description: "Dr. Italo Moreira - Advocacia especializada",
  keywords: ["Advocacia", "Especializada", "Dr. Italo Moreira", "Lawyer"],
  authors: [{ name: "Dr. Italo Moreira" }],
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
