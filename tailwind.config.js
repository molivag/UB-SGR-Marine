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
	'UBop1':'#7A3B69',
	'UBop2':'#5A746E',
      },
    },
  },
  plugins: [require('preline/plugin'),flowbite.plugin()],
};
