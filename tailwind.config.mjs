/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          // 50: "#eff8ff",
          // 100: "#dceefd",
          // 200: "#c0e2fd",
          // 300: "#95d0fb",
          // 400: "#63b5f7",
          // 500: "#479bf3",
          // 600: "#2979e7",
          // 700: "#2163d4",
          // 800: "#2150ac",
          // 900: "#204688",
          // 950: "#182c53",
          // 50: "#f0f5fd",
          // 100: "#e3ecfc",
          // 200: "#ccdbf9",
          // 300: "#adc2f4",
          // 400: "#8ca2ed",
          // 500: "#7c8ce6",
          // 600: "#555fd6",
          // 700: "#464cbc",
          // 800: "#3b4298",
          // 900: "#363d79",
          // 950: "#1f2147",
          1: "#f2f5ff",
          50: "#dde5fb",
          100: "#c8d0f3",
          200: "#ccdbf9",
          300: "#adc2f4",
          400: "#8b9fff",
          500: "#7c8ce6",
          600: "#6e78b3",
          700: "#464cbc",
          800: "#3b4298",
          900: "#363d79",
          950: "#272c43",
          1000: "#202030",
        },
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      keyframes: {
        waving: {
          "0%, 60%, 100%": { transform: "rotate(0)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-15px)" },
          "50%": { transform: "translateY(15px)" },
        },
      },
      animation: {
        waving: "waving 2.5s ease-in-out infinite",
        float: "float 3s linear infinite",
      },
    },
    screens: {
      xs: "340px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".svg-from": {
          stopColor: theme("colors.primary.100"),
        },
        ".svg-to": {
          stopColor: theme("colors.primary.400"),
        },
      });
    },
  ],
};
