/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html","./components/**/*.js"],
  theme: {
    extend: {
      screens: {
        'min': '960px',
      }
    },
  },
  plugins: [],
}

