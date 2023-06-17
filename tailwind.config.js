/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b2336",
        secondary: "#29303B",
        main: "#710193",
        search: "#16839c",
        footer: "#2e3440",
        btnPink: "#ff1f59",
        form: "#f8faff",
      },
      boxShadow: {
        "product-card": "0 20px 50px rgb(0 0 0 / 5%)",
        "product-card-hover": "0 20px 50px rgb(0 0 0 / 20%)",
      },
      container: {
        center: true,
        padding: "12px",
      },
    },
  },
  plugins: [],
};
