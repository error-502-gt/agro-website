import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#faf6f0",
        agro: {
          50: "#f4f8ed",
          100: "#e6efd5",
          200: "#cee0ad",
          300: "#aecc7c",
          400: "#8eb454",
          500: "#6f9a36",
          600: "#557a26",
          700: "#425e1f",
          800: "#374b1d",
          900: "#2f401c",
          950: "#17220a",
        },
        earth: {
          50: "#faf6f0",
          100: "#f2e9d8",
          200: "#e3d0aa",
          300: "#d4b27c",
          400: "#c79858",
          500: "#b07d3e",
          600: "#946431",
          700: "#774d2a",
          800: "#624027",
          900: "#523623",
          950: "#2e1c11",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
