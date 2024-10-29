/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          default: 'hsl(26, 100%, 55%)',
          pale: 'hsl(25, 100%, 94%)',
        },
        blue: {
          dark: 'hsl(220, 13%, 13%)',
          darkGrayish: 'hsl(219, 9%, 45%)',
          lightGrayish: 'hsl(223, 64%, 98%)',
          grayish: 'hsl(220, 14%, 75%)',
        },
        lightbox: 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        Kumbh: ['Kumbh Sans'],
      },
    },
  },
  plugins: [],
}
