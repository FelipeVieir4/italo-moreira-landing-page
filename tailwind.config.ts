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
        primary: "#003366", // Azul Marinho (Fundo principal)
        secondary: "#1a242e", // Cinza Chumbo (Seções alternadas)
        textPrimary: "#F9F9F9", // Branco Neve (Texto principal)
        textSecondary: "#1a242e", // Cinza Chumbo (Texto secundário)
        highlight: "#C9A349", // Dourado Suave (Destaques e botões)
        muted: "#FFFFFF", // Cinza Claro (Seções secundárias)
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans", "serif"],
        secondary: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
