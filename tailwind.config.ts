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
        glowinglime: "#c9532e",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      boxShadow: {
        glow: "0 0 8px rgba(201, 83, 46, 0.8), 0 0 16px rgba(201, 83, 46, 0.5), 0 0 24px rgba(201, 83, 46, 0.3)",
      },
      textShadow: {
        glow: "0 0 5px rgba(201, 83, 46, 0.8), 0 0 10px rgba(201, 83, 46, 0.5), 0 0 15px rgba(201, 83, 46, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
