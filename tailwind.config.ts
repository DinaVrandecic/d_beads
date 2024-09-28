import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "top-right": "8px -8px 12px rgba(105, 90, 90, 0.3)",
        "top-right-bottom":
          "8px -8px 12px rgba(105, 90, 90, 0.3), 0px 8px 15px rgba(105, 90, 90, 0.3)",
      },

      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        "brand-purple": {
          50: "#F2F4FE",
          100: "#D8DBFD",
          200: "#C5CAFC",
          300: "#ABB2FA",
          400: "#9AA3F9",
          500: "#818CF8",
          600: "#757FE2",
          700: "#5C63B0",
          800: "#474D88",
          900: "#363B68",
        },
        peach1: "#EBCFB2",
        brown1: "#695A5A",
        blue1: "#25669C",
        dark_blue: "#2A4F6E",
        beige1: "#BFA890",
        faded_beige: "#C5BAAF",
        beige_text: "#EAE0DA",
        nf_blue: "#84ACCD",
        light_blue: "#A3D6FF",
        page_background: "#F7F5EB",
        "brand-orange": {
          50: "#FFF5E6",
          600: "#E88C00",
          800: "#8C5500",
        },
      },
    },
  },
  plugins: [],
};
export default config;
