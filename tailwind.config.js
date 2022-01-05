module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      }
    },
    colors:{
      'Mine':'#06202A', 
      'gray':'#d1d5db',
      'white':'#ffffff',
      'red':'#dc2626',
      'blurrr':'#06202A'
      
    }
  },
  variants: {
    extend: {
      animation: ['hover','group-hover'],
      fontWeight: ["hover"]
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
