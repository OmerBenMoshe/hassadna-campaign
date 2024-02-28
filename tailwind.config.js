/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}", "*.html"],
  theme: {
    extend: {
      boxShadow: {
        sharp: "0.25rem 0.25rem black",
      },
      fontSize: {
        '8.5xl': '7rem',
      },
      borderRadius: {
        '40': '40px'
      },
      width: {
        '0.65': '65%',
        '0.35': '35%'
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
