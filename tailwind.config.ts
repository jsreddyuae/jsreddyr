import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "9.5": "2.375rem",
        "11.5": "2.875rem",
      },
      colors: {
        black: "#05070A",
        panel: "#0B0F16",
        panel2: "#0E141D",
        line: "rgba(232,236,242,0.08)",
        lineStrong: "rgba(232,236,242,0.14)",
        text: "#E8ECF2",
        muted: "#8892A0",
        muted2: "#5C6673",
        gold1: "#C9A227",
        gold2: "#F0D98C",
        blue1: "#2E8FFF",
        blue2: "#6FD2FF",
        danger: "#FF5D5D",
        warn: "#F0B429",
        ok: "#3DDC97",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
