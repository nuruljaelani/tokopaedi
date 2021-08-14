module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '100': '25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
