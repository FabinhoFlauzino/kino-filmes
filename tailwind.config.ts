import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /grid-cols-/ },
    { pattern: /grid-rows-/ },
    "text-center",
    "text-left",
    "text-right",
  ],
  theme: {
    extend: {
      animation: {
        timer: "wiggle 1s ease-in-out"
      },
      keyframes: {
        timer: {
          "0%": { width: '0%' },
          "100%": { width: '100%' },
        }
      },
      colors: {
        ...colors,
        red: {
          ...colors.red,
          kino: "#E50914"
        }
      },
    },
  },
  plugins: [],
};
export default config;
