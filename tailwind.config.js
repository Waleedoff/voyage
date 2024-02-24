/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainBackground: "url('/public/assets/images/background.jpeg')",
      },
      colors: {
        naturalGray500: "#737373",
        neonGreen: "#56EF21",
        secondaryGreen: "#50C5B1",
      },
    },
  },
  plugins: [],
};
