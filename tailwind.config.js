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


