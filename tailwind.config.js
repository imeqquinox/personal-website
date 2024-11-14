/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {
      colors: {
        "off-black": "#030507",
        "off-white": "#FBFBFC" 
      },
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      backgroundImage: {
        "white-fade": "linear-gradient(to right, rgba(251, 251, 251, 0), rgba(251, 251, 251, 0.75), rgba(251, 251, 251, 0));"
      },
      boxShadow: {
        "inset-white": 'inset 0px 0px 45px 5px rgba(251, 251, 251, 0.3)'
      },
      keyframes: {
        slideUpFadeIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1"}
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1"}
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1"}
        }
      },
      animation: {
        slideUpFadeIn: "slideUpFadeIn 2s ease-out forwards",
        fadeIn: "fadeIn 1s ease-in forwards",
        slideInFromLeft: "slideInFromLeft 2s ease-out forwards"
      },
    }
  },
  plugins: [],
}

