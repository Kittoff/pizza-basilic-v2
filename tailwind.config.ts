import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        bg: "var(--color-bg)",
        gray: "rgb(64, 64, 63)",
        customWhite: "#f4f4f4",
      },
      translate: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
export default config;
