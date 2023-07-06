/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#181818',
        secondary: '#141414',
        white: '#dcdcdc',
        tertiary: '#40E675',
      },
    },
  },
  plugins: [],
};
