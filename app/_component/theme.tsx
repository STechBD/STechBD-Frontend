'use client'

import { JSX, useState } from 'react'


/**
 * The Theme Switcher Panel component.
 *
 * @returns { JSX.Element } The Theme Switcher Panel component.
 * @since 3.0.0
 */
export default function Theme(): JSX.Element {
	const themeList: string[] = [
		'red',
		'green',
		'teal',
		'blue',
		'indigo',
		'purple',
	]
	const [ theme, setTheme ] = useState<string>('indigo')
	const [ darkMode, setDarkMode ] = useState<boolean>(false)

	function toggleTheme(theme: string): void {
		if (themeList.find(t => t === theme)) {
			setTheme(theme)
			document.documentElement.classList.remove('theme-red', 'theme-green', 'theme-teal', 'theme-blue', 'theme-indigo', 'theme-purple')
			document.documentElement.classList.add(`theme-${theme}`)
		} else {
			setTheme('indigo')
			document.documentElement.classList.remove('theme-red', 'theme-green', 'theme-teal', 'theme-blue', 'theme-indigo', 'theme-purple')
			document.documentElement.classList.add('theme-indigo')
		}
	}

	function toggleDarkMode(): void {
		setDarkMode(!darkMode)
		document.documentElement.classList.toggle('dark')

	}

	return (
		<div className="fixed bottom-0 right-0 m-4 p-4 bg-white dark:bg-[#020102] rounded-lg shadow-lg z-[100]">
			<div className="flex items-center justify-between">
				<div>
					<label htmlFor="theme" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
						Theme
					</label>
					<select
						id="theme"
						name="theme"
						className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md"
						value={ theme }
						onChange={ e => toggleTheme(e.target.value) }
					>
						{ themeList.map(t => (
							<option key={ t } value={ t }>{ t }</option>
						)) }
					</select>
				</div>
				<div>
					<label htmlFor="darkMode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
						Dark Mode
					</label>
					<button
						id="darkMode"
						name="darkMode"
						type="button"
						className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md dark:bg-[#020102] dark:text-gray-300 bg-gray-100 text-gray-900"
						onClick={ toggleDarkMode }
					>
						{ darkMode ? 'On' : 'Off' }
					</button>
				</div>
			</div>
		</div>
	)
}
