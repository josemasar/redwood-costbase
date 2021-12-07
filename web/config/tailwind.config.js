const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        wave: "url('../public/wave-haikei.svg')",
        layered: "url('../public/layered.svg')",
      },
    },
  },
  plugins: [],
}
