/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3B',
          light: '#152C4F', // Slightly lighter for hover states
          dark: '#050E1C',
        },
        lime: {
          DEFAULT: '#C8F032',
          hover: '#B6DA2D',
          light: '#D9F57A',
        },
        'cool-grey': {
          DEFAULT: '#F5F7FA',
          dark: '#E2E8F0',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(11, 31, 59, 0.05), 0 2px 4px -1px rgba(11, 31, 59, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(11, 31, 59, 0.1), 0 10px 10px -5px rgba(11, 31, 59, 0.04)',
      }
    },
  },
  plugins: [],
}
