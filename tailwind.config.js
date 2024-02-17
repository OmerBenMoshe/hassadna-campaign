/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}", "*.html"],
  theme: {
    extend: {
      boxShadow: {
        sharp: "0.25rem 0.25rem black",
      },
    },
    colors: {
      orange: "#FFA42C",
      neon: "#28FFE6",
      darkGray: "#303A3A",
      white: "#FCFCF8",
      blue: "#6C22E5"
    },
    fontFamily: {
      primary: "Anomalia",
      secondary: "SimplerPro",
    },
  },
  plugins: [],
};
