/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					500: "#feee00",
				},
				secondary: {
					500: "#393d42",
				},
			},
		},
	},
	plugins: [],
}
