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
		fontSize: {
			xs: [
				'0.75rem',
				{
					lineHeight: '1rem',
				},
			],
			sm: [
				'0.875rem',
				{
					lineHeight: '1.25rem',
				},
			],
			base: [
				'1rem',
				{
					lineHeight: '1.5rem',
				},
			],
			lg: [
				'1.125rem',
				{
					lineHeight: '1.75rem',
				},
			],
			xl: [
				'1.25rem',
				{
					lineHeight: '1.75rem',
				},
			],
			'2xl': [
				'1.5rem',
				{
					lineHeight: '2rem',
				},
			],
			'3xl': [
				'1.875rem',
				{
					lineHeight: '2.25rem',
				},
			],
			'4xl': [
				'2.25rem',
				{
					lineHeight: '2.5rem',
				},
			],
			'4.5xl': [
				'2.5rem',
				{
					lineHeight: '2.5rem',
				},
			],
			'5xl': [
				'3rem',
				{
					lineHeight: '1',
				},
			],
			'5.5xl': [
				'3.5rem',
				{
					lineHeight: '1',
				},
			],
			'6xl': [
				'4rem',
				{
					lineHeight: '1',
				},
			],
			'7xl': [
				'4.5rem',
				{
					lineHeight: '1',
				},
			],
		},
		screens: {
			xxs: '440px',
			xs: '540px',
			sm: '640px',
			md: '768px',
			md2: '900px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
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
				280: '280px',
				300: '300px',
				320: '320px',
				400: '400px',
			},
			height: {
				132: '132px',
				224: '224px',
				320: '320px',
				440: '440px',
				500: '500px',
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
