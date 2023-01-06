/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'custom-sreen': { min: '305px', max: '504px' },
      },
    },
  },
  plugins: [],
};
