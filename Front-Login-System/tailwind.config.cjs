/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bubble':"url('/src/img/bg-bubble.jpg')",
      },
      fontFamily: {
        'Cinzel': 'Cinzel'
      },
    },
  },
  plugins: [],
}
