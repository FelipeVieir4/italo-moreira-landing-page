import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          950: "rgb(var(--ink-950) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--paper) / <alpha-value>)",
          2: "rgb(var(--paper-2) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
        body: "rgb(var(--body) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          light: "rgb(var(--gold-light) / <alpha-value>)",
          dark: "rgb(var(--gold-dark) / <alpha-value>)",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "76rem",
        prose: "44rem",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,.04), 0 12px 32px -12px rgba(11,18,32,.14)",
        lift: "0 2px 4px rgba(11,18,32,.06), 0 24px 48px -16px rgba(11,18,32,.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
