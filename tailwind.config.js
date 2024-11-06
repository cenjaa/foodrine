/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        colors: {
          green1bg: '#2F5135',
          green2bg: '#81A263'
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          
        }
    },
  },
  plugins: [],
}
