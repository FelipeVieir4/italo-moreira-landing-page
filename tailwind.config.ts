import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",       // Azul Escuro Profundo (Cor Principal)
        "secondary": "var(--secondary)",     // Azul Acinzentado (Cor Secundária)
        "textPrimary": "var(--text-primary)",   // Branco (Texto Principal)
        "textSecondary": "var(--text-secondary)", // Azul Escuro Profundo (Texto Secundário)
        "highlight": "var(--highlight)",     // Dourado (Destaque)
        "highlightDark": "var(--highlight-dark)", // Dourado Escuro (Destaque Escuro)
        "muted": "var(--muted)" ,         // Branco (Cor Suave / Neutra)
        "whatsAppColor": "var(--whatsAppColor)" // Verde WhatsApp

      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Plus Jakarta Sans", "serif"],

      },
    },
  },
  plugins: [],
} satisfies Config;
