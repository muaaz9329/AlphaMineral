/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      red: "#DC2626",
      blue_100: "#A3C0FF",
      blue_200: "#7FA5FF",
      blue_300: "#5C8BFF",
      blue_400: "#3F7AE0",
      gold: "#F2C580",
      green: "#4CB592",
      theme: {
        100: "#5B6B79",
        200: "rgba(25, 56, 70, 0.2)",
        300: "#193846",
      },
      grayLight: "rgba(25, 56, 70, 0.2)",
      white: "#fff",
      whiteSmoke: "#f5f5f5",
    },
  },
  plugins: [],
};
