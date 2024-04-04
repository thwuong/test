import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "green-gradient":
          "linear-gradient(148.41deg, #D0E1AA 17.07%, #90C478 78.61%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair_display)"],
        garamond: ["var(--font-eb_garamond)"],
      },
      colors: {
        primary: {
          DEFAULT: "#365C24",
          50: "#8CC770",
          100: "#81C162",
          200: "#6AB446",
          300: "#58973B",
          400: "#47792F",
          500: "#365C24",
          600: "#1E3414",
          700: "#070B04",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        amulet: {
          DEFAULT: "#809D79",
          50: "#E5EBE3",
          100: "#D9E2D7",
          200: "#C3D1C0",
          300: "#ADBFA8",
          400: "#96AE91",
          500: "#809D79",
          600: "#64805E",
          700: "#4B6046",
          800: "#323F2E",
          900: "#181F17",
          950: "#0C0F0B",
        },
        mint: "#DCECD8",
        cream: "#F9ECDD",
        "custom-orange": "#E69637",
        "custom-brown": "#6F3518",
        "green-yellow": "#B7B890",
        neutral: {
          50: "#000",
          100: "#121212",
          200: "#2b2b2b",
          300: "#444444",
          400: "#7c7c7c",
          500: "#939393",
          600: "#c2c2c2",
          700: "#ececec",
          800: "#f2f2f2",
          900: "#fff",
          950: "#fff",
        },
      },
      keyframes: {
        slideRight: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        slideLeft: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        slideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        slideRight: "slideRight 100ms ease-in-out",
        slideLeft: "slideLeft 100ms ease-in-out",
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
