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
          50: "#f1f8fd",
          100: "#e0eff9",
          200: "#c9e3f4",
          300: "#a3d2ed",
          400: "#78b8e2",
          500: "#589ed9",
          600: "#3b7fca",
          700: "#3a71bb",
          800: "#345c99",
          900: "#2f4e79",
          950: "#20314b",
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
