import type { Config } from 'tailwindcss'
import { safeList } from './app/_function/tailwind'


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
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				xs: '1px',
			},
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
			}
		},
	},
	darkMode: 'class',
	plugins: [],
	safelist: safeList,
}

export default config
