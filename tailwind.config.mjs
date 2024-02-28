/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  safelist: [
    {
      pattern:
        /(border|bg|text)-(pink|cyan|sky|green|violet|orange|yellow|gray)-(50|200|900|950)/,
      variants: ["dark"],
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#f2f5ff",
          50: "#dde5fb",
          100: "#c8d0f3",
          200: "#ccdbf9",
          300: "#adc2f4",
          400: "#8b9fff",
          500: "#7c8ce6",
          600: "#6e78b3",
          700: "#4e4e8f",
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
      },
      animation: {
        waving: "waving 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("hover", "@media (any-hover: hover) { &:hover }");
      addVariant(
        "group-hover",
        "@media (any-hover: hover) { :merge(.group):hover & }",
      );
      addVariant("hover-active", [
        "@media (any-hover: hover) { &:hover }",
        "&:active",
      ]);
      addVariant("group-hover-active", [
        "@media (any-hover: hover) { :merge(.group):hover & }",
        ":merge(.group):active &",
      ]);
    },
    animations,
  ],
};
