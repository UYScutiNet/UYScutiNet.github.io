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
        disable: "#7c7c7c",
        primary: "#6ea8e7",
        secondary: "#00c38b",
      },

      screens: { xs: "500px", "3xl": "1680px" },
      spacing: { "5%": "5%", "20%": "20%" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
