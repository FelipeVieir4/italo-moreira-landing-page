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
        primary: "#1D3557", // Azul Marinho (Fundo principal)
        secondary: "#2C2F33", // Cinza Chumbo (Seções alternadas)
        textPrimary: "#F9F9F9", // Branco Neve (Texto principal)
        highlight: "#C9A349", // Dourado Suave (Destaques e botões)
        muted: "#D9D9D9", // Cinza Claro (Seções secundárias)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
