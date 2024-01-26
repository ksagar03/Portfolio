/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217}
        yellowgreen:"#9acd32"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        "circularlight": "repeating-radial-gradient(rgba(27,27,27,0.6) 2px, #f5f5f5 7px, #f5f5f5 100px);",
        "circulardark":"repeating-radial-gradient(rgba(245,245,245,0.6) 2px, #1b1b1b 7px, #1b1b1b 100px);"
      },
    },
    screens: {
      // it will add a media query of max width
      "2xl": { max: "1535px" },
    // => @media (max-width: 1535px)

    xl: { max: "1279px" },
    // => @media (max-width: 1279px)

    lg: { max: "1023px" },
    // => @media (max-width: 1023px)

    md: { max: "767px" },
    // => @media (max-width: 767px)

    sm: { max: "639px" },
    // => @media (max-width: 639px) 

    xs: { max: "479px" },
    // => @media (max-width: 479px) 
    }
  },
  plugins: [],
};
