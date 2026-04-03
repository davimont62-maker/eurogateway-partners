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
        ink: "#0f1b2d",
        slate: "#51627d",
        line: "#d7dfec",
        mist: "#f3f6fb",
        accent: "#1d4c98",
        accentSoft: "#edf3fc",
        gold: "#b68b3c",
        goldSoft: "#f4ebd7",
        panel: "#102846",
        success: "#2f6b52"
      },
      boxShadow: {
        soft: "0 22px 60px rgba(15, 27, 45, 0.08)",
        glow: "0 20px 80px rgba(29, 76, 152, 0.18)"
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
