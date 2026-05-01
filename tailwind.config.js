/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef7ff',
          100: '#d9ecff',
          200: '#b4d9ff',
          300: '#84beff',
          400: '#4f9bff',
          500: '#2779ff',
          600: '#155cf0',
          700: '#1148c2',
          800: '#143e99',
          900: '#163878',
        },
        accent: {
          400: '#f59e0b',
          500: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        kid: ['"Comic Sans MS"', '"Comic Neue"', 'Inter', 'sans-serif'],
      },
      keyframes: {
        pop: {
          '0%':   { transform: 'scale(1)' },
          '50%':  { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        confetti: {
          '0%':   { transform: 'translateY(-10px) rotate(0)', opacity: '1' },
          '100%': { transform: 'translateY(120vh) rotate(720deg)', opacity: '0' },
        },
        shake: {
          '0%,100%': { transform: 'translateX(0)' },
          '20%,60%': { transform: 'translateX(-4px)' },
          '40%,80%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        pop: 'pop 250ms ease-out',
        confetti: 'confetti 1500ms ease-in forwards',
        shake: 'shake 350ms ease-in-out',
      },
    },
  },
  plugins: [],
};
