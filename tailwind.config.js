/** @type {import('tailwindcss').Config} */
export const content = [
	"./app/**/*.{js,ts,jsx,tsx}",
	"./pages/**/*.{js,ts,jsx,tsx}",
	"./components/**/*.{js,ts,jsx,tsx}",
	"./src/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = "class";
export const theme = {
	extend: {
		fontFamily: {
			roboto: ["Roboto"],
			poppins: ["Poppins"],
		},
	},
};
export const plugins = [];
