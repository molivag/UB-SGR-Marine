const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
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
