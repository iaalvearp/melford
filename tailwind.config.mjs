/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'brand': 'brand',
			'against': 'against',
			'montse': 'montse'
		},
		colors: {
			'primary': '#68745B',
			'secondary': '#586A51',
			'text': '#3C3C3B',
			'bg': '#FFFFFF'
		}
	},
	plugins: [],
}
