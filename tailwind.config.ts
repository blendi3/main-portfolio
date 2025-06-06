import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0", // Fixed: Changed to string
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1", // Fixed: Changed to string
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
        },
        purple: "#CBACF9",
      },
    },
  },
  plugins: [],
} satisfies Config;
