/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'wine': '#722F37',
				'cream': '#F5F5F0',
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [],
}
