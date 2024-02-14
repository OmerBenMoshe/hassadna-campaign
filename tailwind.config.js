/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
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
    },
  },
  plugins: [],
};
