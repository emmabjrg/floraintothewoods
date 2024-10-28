/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{astro,html,js}", 
    "./pages/**/*.{astro,html,js}", 
  ],
  theme: {
    colors: {
      black: '#171719',
      accent:'#A72631',
      primary: '#517587',
      detail: '#969A9E',    
    },
       



    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
      letterSpacing: {
        'extra-tight': '-0.10em',
      },
      
    },
  },
  plugins: [],
}


