module.exports = {
	purge: {
		purge: false,
		content: [
			'./pages/**/*.{js,ts,jsx,tsx}',
			'./components/**/*.{js,ts,jsx,tsx}',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			regular: ['Regular', 'sans-serif'],
			heading: ['ExtraboldItalic', 'sans-serif'],
			link: ['RobotoMono-SemiBoldItalic', 'Regular', 'sans-serif'],
		},
		extend: {
			colors: {
				current: '#111111',
				black: '#111111',
				'dirty-white': '#ECE9E4',
				gray: '#343434',
				'green-light': '#00E599',
				'green-dark': '#0BB36D',
			},
			width: {
				260: '260px',
			},
			height: {
				132: '132px',
				224: '224px',
				320: '320px',
			},
		},
		borderWidth: {
			2: '2px',
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
