/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
      },
      perspective: {
        1000: 'perspective(1000px)',
        500: 'perspective(500px)',
      },
    },
  },
  plugins: [],
};
