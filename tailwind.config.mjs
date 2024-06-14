/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  safelist: [
    {
      pattern:
        /(border|bg|text)-(pink|cyan|sky|green|violet|orange|yellow|gray)-(50|200|900|950)/,
      variants: ["dark"],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist Sans", "sans-serif"],
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
      // addVariant("hover", "@media (any-hover: hover) { &:hover }");
      // addVariant(
      //   "group-hover",
      //   "@media (any-hover: hover) { :merge(.group):hover & }",
      // );
      // addVariant(
      //   "peer-hover",
      //   "@media (any-hover: hover) { :merge(.peer):hover ~ & }",
      // );
      // addVariant("hover", [
      //   "@media (any-hover: hover) { &:hover }",
      //   "&:active",
      // ]);
      // addVariant("group-hover", [
      //   "@media (any-hover: hover) { :merge(.group):hover & }",
      //   ":merge(.group):active &",
      // ]);
      // addVariant("peer-hover", [
      //   "@media (any-hover: hover) { :merge(.peer):hover ~ & }",
      //   ":merge(.peer):active ~ &",
      // ]);
    },
  ],
};
