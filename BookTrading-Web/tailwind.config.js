/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slideDown 1s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'poppins'],
        overpass: ['Overpass', 'sans-serif'], // Burada Roboto fontunu tanımlıyoruz
      },
    },
  },
  plugins: [],
}
