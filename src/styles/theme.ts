export const theme = {
  colors: {
    purple: "#6E54FF",
    white: "#FFFFFF",
    lightGray: "#F6F7FB",
    gray: "#6D828B",
  },
  rounded: {
    full: "9999px",
  },
  transition: {
    default: "0.2s",
  },
} as const;

export type Theme = typeof theme;
