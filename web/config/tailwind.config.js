module.exports = {
  mode: 'jit',
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
      },
      // backgroundImage: {
      //   wave: "url('../public/wave-haikei.svg')",
      //   layered: "url('../public/layered.svg')",
      // },
    },
  },
  plugins: [],
}
