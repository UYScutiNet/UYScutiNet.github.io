module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#1d9bf0",
        secondary: "#00c38b",
        third: "#807777",
      },
      maxWidth: {
        200: "50rem",
      },
      backgroundImage: {
        farm: "url('/src/assets/images/LP-bg.b4b6813f.png')",
        distribution: "url('/src/assets/images/bottom-bg.03a22c4b.png')",
      },
      colors: {
        farm: "#eeeeee",
      },
      screens: { xs: "500px" },
      spacing: { "5%": "5%" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
