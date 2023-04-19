import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      yellow: "#DBAC2C",
      "yellow-dark": "#C47F17",
      "yellow-light": "#F1E9C9",

      purple: "#8047F8",
      "purple-dark": "#4B2995",
      "purple-light": "#EBE5F9",

      "base-title": "#272221",
      "base-subtitle": "#403937",
      "base-text": "#574F4D",
      "base-label": "#8D8686",
      "base-hover": "#D7D5D5",
      "base-button": "#E6E5E5",
      "base-input": "#EDEDED",
      "base-card": "#F3F2F2",

      background: "#FAFAFA",
      white: "#FFF",
    },
    fontSizes: {
      "2xs": "0.625rem", // 10px
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "3xl": "3rem", // 48px
    },
    fonts: {
      "font-header": "'Baloo 2', cursive",
      "font-text": "'Roboto', sans-serif",
    },
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
    },
  },
});
