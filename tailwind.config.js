/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./components/**/*.js", "./pages/**/*.html" ,"./src/script/**/*.js"],
  theme: {
    extend: {
      screens: {
        'smin':'600px',
        'min': '960px',
        'des': '1920px',
      },
      fontFamily: {
        'Futura': 'Futura',
        'HelveticaNowText-Regular': 'HelveticaNowText-Regular',
        'HelveticaNowText-Medium' : 'HelveticaNowText-Medium'
      }
    },
  },
  plugins: [],
}

