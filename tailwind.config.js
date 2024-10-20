/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajoutez vos fichiers ici
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      futura: ['futura-pt', 'sans-serif'],
     
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'sketch': 'sketch 3s infinite alternate',
      },
      keyframes: {
        sketch: {
          '0%, 100%': { textShadow: '1px 1px 1px #7f8c8d' },
          '50%': { textShadow: '-1px -1px 1px #7f8c8d' },
        }
      },
    
    },

    plugins: [],
  }

}