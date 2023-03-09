/** @type {import('tailwindcss').Config} */
const colors = require('./design/out/colors.json');

module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ...colors
      }
    }
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar-hide')],
  darkMode: 'class'
};
