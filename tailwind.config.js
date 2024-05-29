/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./components/**/*.js", "./pages/**/*.html" ,"./src/script/**/*.js"],
  theme: {
    extend: {
      screens: {
        'min': '960px',
      }
    },
  },
  plugins: [],
}

