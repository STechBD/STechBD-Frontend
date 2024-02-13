import type { Config } from 'tailwindcss'


const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				xs: '1px',
			},
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
export default config
