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
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        float: 'float 4s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)'},
          '50%': { transform: 'translateY(-10px)',},
        }
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
