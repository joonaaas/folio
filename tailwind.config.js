module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			regular: ['Regular', 'sans-serif'],
			heading: ['ExtraboldItalic', 'sans-serif'],
		},
		extend: {
			colors: {
				black: '#111111',
				'dirty-white': '#ECE9E4',
				gray: '#9E9E9E',
				green: '#00E599',
			},
			width: {
				260: '260px',
			},
			height: {
				132: '132px',
				320: '320px',
			},
		},
		borderWidth: {
			3: '3px',
		},
		borderColor: (theme) => ({
			DEFAULT: theme('colors.black', 'currentColor'),
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
