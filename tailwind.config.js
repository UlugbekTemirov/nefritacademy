/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fantacy:
          "linear-gradient(90deg,#0ea5ea,#0bd1d1 51%,#0ea5ea) var(--x,0)/200%",
        light: {
          default: "",
        },
        dark: {
          default: "#0F172A",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
