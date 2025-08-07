// @ts-check
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: '#1A133D',
        navyLight: '#2D1B69',
        cyan: '#00D1FF',
        indigo: '#6C47FF',
        magenta: '#E84CFF',
        mint: {
          DEFAULT: '#0EE6B8',
          400: '#0EE6B8',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00D1FF 0%, #6C47FF 50%, #E84CFF 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1A133D 0%, #2D1B69 50%, #1A133D 100%)',
      },
    },
  },
  plugins: [],
};
