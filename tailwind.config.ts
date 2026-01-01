import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#3B82F6",
        "brand-secondary": "#8B5CF6",
        "brand-accent": "#F97316"
      },
      boxShadow: {
        subtle: "0 10px 40px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
