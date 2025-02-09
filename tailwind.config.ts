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
        primary: "#020136",       // Azul Escuro Profundo (Cor Principal)
        secondary: "#1a242e",     // Azul Acinzentado (Cor Secundária)
        textPrimary: "#F9F9F9",   // Branco (Texto Principal)
        textSecondary: "#020136", // Azul Escuro Profundo (Texto Secundário)
        highlight: "#C9A349",     // Dourado (Destaque)
        highlightDark: "#A17E2A", // Dourado Escuro (Destaque Escuro)
        muted: "#FFFFFF"          // Branco (Cor Suave / Neutra)
      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Plus Jakarta Sans", "serif"],

      },
    },
  },
  plugins: [],
} satisfies Config;
