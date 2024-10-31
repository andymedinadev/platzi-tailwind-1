/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#F3C614',
        'secondary':'#353535'
      },
      backgroundImage:{
        'restaurant':"url('../images/restaurant.jpg')"
      },
      height:{
        '100':'25rem'
      }
    },
  },
  plugins: [],
}

