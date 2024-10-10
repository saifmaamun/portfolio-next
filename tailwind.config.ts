import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glowinglime: "#39FF14",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      boxShadow: {
        glow: "0 0 10px rgba(0, 255, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
