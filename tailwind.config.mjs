/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [require("daisyui"), typography],

  theme: {
    extend: {
      colors: {
        "primary-light": "var(--primary-light)",
        "primary-medium": "var(--primary-medium)",
        "primary-dark": "var(--primary-dark)",
      },
      fontFamily: {
        body: [
          "Albert Sans Variable",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Albert Sans Variable",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },

  darkMode: ["class", '[data-theme="dracula"]'],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#a855f7",
          "--primary-light": "#c084fc",
          "--primary-medium": "#a855f7",
          "--primary-dark": "#9333ea",
        },
        "blue-light": {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#0ea5e9",
          "--primary-light": "#bae6fd",
          "--primary-medium": "#0ea5e9",
          "--primary-dark": "#0284c7",
        },

        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          primary: "#7e22ce",
          "--primary-light": "#9333ea",
          "--primary-medium": "#7e22ce",
          "--primary-dark": "#6b21a8",
        },
        "blue-dracula": {
          ...require("daisyui/src/theming/themes")["dracula"],
          primary: "#0369a1",
          "--primary-light": "#0284c7",
          "--primary-medium": "#0369a1",
          "--primary-dark": "#0c4a6e",
        },
      },
    ],
  },
};
