import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#122033",
        slate: "#4c5b70",
        line: "#d7deea",
        mist: "#f3f6fb",
        accent: "#234f9d",
        accentSoft: "#e8eef9",
        success: "#2f6b52"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(18, 32, 51, 0.08)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(18,32,51,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,32,51,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
