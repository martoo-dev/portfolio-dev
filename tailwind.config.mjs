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
          50: "#f0f8ff",
          100: "#ddeffd",
          200: "#bfe1fd",
          300: "#93d0fb",
          400: "#64b5f7",
          500: "#499bf3",
          600: "#124da1",
          700: "#153e84",
          800: "#122b5e",
          900: "#0f203e",
          950: "#0b1528",
        },
        secondary: {
          50: "#faf5f8",
          100: "#f7ecf3",
          200: "#f0dae7",
          300: "#e4bdd5",
          400: "#d393b8",
          500: "#c2729f",
          600: "#ad5582",
          700: "#a14873",
          800: "#7b3958",
          900: "#68334c",
          950: "#3d1a2a",
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
