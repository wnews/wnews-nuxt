const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,vue,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['uncut-sans', ...defaultTheme.fontFamily.sans],
				serif: ['sprat', ...defaultTheme.fontFamily.serif],
				roboto: ['Roboto', 'sans-serif'],
				'crimson-pro': ['"Crimson Pro"', 'serif'],
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
