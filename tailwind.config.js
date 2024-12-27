/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'calm-green': '#D6E5E3',
        'deep-teal': '#0C646F',
        'accent-green': '#2CBCA4',
      }
    },
  },
  plugins: [],
}

