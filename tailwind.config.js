/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
      },
      width: {
        desktop: '1440px',
        mobile: '375px',
      },
      perspective: {
        1000: 'perspective(1000px)',
        500: 'perspective(500px)',
      },
    },
  },
  plugins: [],
};
