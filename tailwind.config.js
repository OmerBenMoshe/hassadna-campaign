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
      orange: "#FE7833",
      neon: "#29FFC7",
      darkGray: "#1F2725",
      white: "#FCFCF8",
      purple: "#7C2BDB",
    },
    fontFamily: {
      primary: "Anomalia",
      secondary: "SimplerPro",
    },
  },
  plugins: [],
};
