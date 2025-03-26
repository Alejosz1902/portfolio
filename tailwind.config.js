/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        funnel: ['"Funnel Display"', 'sans-serif'],
        geist: ['"Geist Mono"', 'monospace'], 
        mulish: ['Mulish', 'sans-serif'],
      },
      colors:{
        darkBlue: '#000F24',
        mainBlue: '#052355',
        lightBlue: '#557FAF',
        grayishBlue: '#7DA0CA'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
