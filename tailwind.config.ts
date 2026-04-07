import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xsmall": "320px",
      xsmall: "412px",
      small: "520px",
      medium: "680px",
      large: "980px",
      xlarge: "1200px",
      "2xlarge": "1440px",
    },
    extend: {
      colors: {
        primary: {
          50: "#EAF2FF",
          100: "#D7E8FF",
          200: "#B6D5FF",
          300: "#87B9FF",
          400: "#5F95F3",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#0B2556",
        },
        neutral: {
          25: "#F8FAFC",
          75: "#F3F4F6",
          150: "#E5E7EB",
          850: "#101318",
          925: "#080A0F",
          950: "#05070B",
        },
      },
      fontFamily: {
        display: ["var(--font-sf-pro)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(37, 99, 235, 0.42)",
        card: "0 18px 80px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "blue-glow":
          "radial-gradient(circle at center, rgba(37,99,235,0.7), rgba(37,99,235,0.08) 54%, transparent 70%)",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", ".light &");
    }),
  ],
};

export default config;
