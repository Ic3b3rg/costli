module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0093ED",
        dark: "#0072B1",
        light: "#7DD8FF",
        ultralight: "#D6F5FF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}