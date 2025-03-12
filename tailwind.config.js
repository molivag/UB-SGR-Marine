/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily:{
	Montserrat:["Montserrat", "sans-serif"],
	Barlow: ["Barlow", "sans-serif"],

      },
      colors: {
	'UBfoothead':'#01204e',
	'UBtitles':'#086375',
	'UBnone':'#bedcd0',
	'UBfondo': '#fbf2e5',
	'UBhover':'#feae6f'
      },
    },
  },
  plugins: [require('preline/plugin'),flowbite.plugin()],
};
