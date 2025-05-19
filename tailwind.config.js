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
	// Barlow: ["Barlow", "sans-serif"],

      },
      colors: {
	'UBfoothead':'#01204e',
	'UBtitles':'#086375',
	'UBnone':'#bedcd0',
	'UBfondo': '#fbf2e5',
	'UBop1':'#7A3B69',
	'UBop2':'#5A746E',
      },
       screens: {
	'xsm' : '350px',
        '3xl': '1736px', //pantallas desde 1736
        '4xl': '1900px', //pantallas desde 1900 la dell es 1920
        '5xl': '2350px', // pantallas desde 2350 y superior
      },
      maxWidth: {
	'screen-xsm':'300px',
        'screen-3xl': '1600px',
        'screen-4xl': '1700px',
        'screen-5xl': '2200px',
      },
    },
  },
  plugins: [require('preline/plugin'),flowbite.plugin()],
};
