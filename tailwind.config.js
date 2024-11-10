/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "off-black": "#030507",
      "off-white": "#FBFBFC" 
    },
    fontFamily: {
      italiana: ["Italiana", "sans-serif"],
      notoSans: ["Noto Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}

