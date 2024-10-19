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
        glowinglime: "#28F0B4",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      boxShadow: {
        glow: "0 0 8px rgba(40, 240, 180, 0.8), 0 0 16px rgba(40, 240, 180, 0.5), 0 0 24px rgba(40, 240, 180, 0.3)",
      },
      textShadow: {
        glow: "0 0 5px rgba(40, 240, 180, 0.8), 0 0 10px rgba(40, 240, 180, 0.5), 0 0 15px rgba(40, 240, 180, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
