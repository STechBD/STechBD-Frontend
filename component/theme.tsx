'use client'

import { JSX, useEffect, useState } from 'react'
import config from '@/stech.config'
import Cookie from 'js-cookie'


/**
 * The Theme Switcher Panel component.
 *
 * @returns { JSX.Element } The Theme Switcher Panel component.
 * @since 3.0.0
 */
export default function Theme(): JSX.Element {
	const [ theme, setTheme ] = useState<string>('indigo')
	const [ darkMode, setDarkMode ] = useState<boolean>(false)
	const [ themePanel, setThemePanel ] = useState<boolean>(false)

	function toggleTheme(theme: string): void {
		if (config.themes.find(t => t === theme)) {
			setTheme(theme)
			document.documentElement.classList.remove('theme-red', 'theme-green', 'theme-teal', 'theme-blue', 'theme-indigo', 'theme-purple')
			document.documentElement.classList.add(`theme-${ theme }`)
			Cookie.set('stechbd-theme', theme, {
				expires: 365,
				domain: process.env.MAIN_DOMAIN,
			})
		} else {
			setTheme('indigo')
			document.documentElement.classList.remove('theme-red', 'theme-green', 'theme-teal', 'theme-blue', 'theme-indigo', 'theme-purple')
			document.documentElement.classList.add('theme-indigo')
			Cookie.set('stechbd-theme', 'indigo', {
				expires: 365,
				domain: process.env.MAIN_DOMAIN,
			})
		}
	}

	function toggleDarkMode(): void {
		setDarkMode(!darkMode)
		document.documentElement.classList.toggle('dark')
		Cookie.set('stechbd-mode', darkMode ? 'light' : 'dark', {
			expires: 365,
			domain: process.env.MAIN_DOMAIN,
		})
	}

	useEffect((): void => {
		if (Cookie.get('stechbd-mode') === 'dark') {
			setDarkMode(false)
			document.documentElement.classList.add('dark')
		} else {
			setDarkMode(true)
			document.documentElement.classList.remove('dark')
		}

		if (Cookie.get('stechbd-theme')) {
			const theme = Cookie.get('stechbd-theme') as string
			setTheme(theme)
			document.documentElement.classList.add(`theme-${ theme }`)
		} else {
			setTheme('indigo')
			document.documentElement.classList.add('theme-indigo')
		}
	}, [])

	if (themePanel) {
		return (
			<div
				className="fixed top-0 bottom-0 right-0 w-[400px] max-w-[90%] m-4 p-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg z-[100] transition-opacity duration-500"
				style={ {
					animationName: themePanel ? 'fadeIn' : 'fadeOut',
					animationDuration: '0.5s',
					animationTimingFunction: 'ease-in-out',
				} }
			>
				<button
					className="absolute top-0 right-0 p-4 text-4xl text-gray-900 dark:text-gray-100"
					onClick={ () => setThemePanel(false) }
				>
					&times;
				</button>
				<div>
					<p className="text-3xl text-primary y-2">
						Color
					</p>
					<div className="grid grid-cols-4">
						{/* It doesn't work. Doesn't show the color in the circle. */ }
						{
							config.themes.map(theme => (
								<div key={ theme } className="flex flex-col items-center">
									<button
										onClick={ () => toggleTheme(theme) }
										className={ (darkMode ? 'border-white' : 'border-black') + ' w-12 h-12 rounded-full bg-' + theme + '-600 border m-2' }
									>
									</button>
									<span className="font-bold text-gray-800 dark:text-gray-200">
										{ theme.charAt(0).toUpperCase() + theme.slice(1) }
									</span>
								</div>
							))
						}

						{/* It works fine. Shows the color in the circle. */ }
						{/*<div className="flex flex-col items-center">
							<button
								onClick={ () => toggleTheme('red') }
								className={ (darkMode ? 'border-white' : 'border-black') + ' w-12 h-12 rounded-full bg-red-600 border m-2' }
							>
							</button>
							<span className="font-bold text-gray-800 dark:text-gray-200">
								Red
							</span>
						</div>
						<div className="flex flex-col items-center">
							<button
								onClick={ () => toggleTheme('green') }
								className={ (darkMode ? 'border-white' : 'border-black') + ' w-12 h-12 rounded-full bg-green-600 border m-2' }
							>
							</button>
							<span className="font-bold text-gray-800 dark:text-gray-200">
								Green
							</span>
						</div>
						<div className="flex flex-col items-center">
							<button
								onClick={ () => toggleTheme('teal') }
								className={ (darkMode ? 'border-white' : 'border-black') + ' w-12 h-12 rounded-full bg-teal-600 border m-2' }
							>
							</button>
							<span className="font-bold text-gray-800 dark:text-gray-200">
								Teal
							</span>
						</div>
						<div className="flex flex-col items-center">
							<button
								onClick={ () => toggleTheme('blue') }
								className={ (darkMode ? 'border-white' : 'border-black') + ' w-12 h-12 rounded-full bg-blue-600 border m-2' }
							>
							</button>
							<span className="font-bold text-gray-800 dark:text-gray-200">
								Blue
							</span>
						</div>
						<div className="flex flex-col items-center">
							<button
								onClick={ () => toggleTheme('indigo') }
								className={ (darkMode ? 'border-white' : 'border-black') + ' w-12 h-12 rounded-full bg-indigo-600 border m-2' }
							>
							</button>
							<span className="font-bold text-gray-800 dark:text-gray-200">
								Indigo
							</span>
						</div>
						<div className="flex flex-col items-center">
							<button
								onClick={ () => toggleTheme('purple') }
								className={ (darkMode ? 'border-white' : 'border-black') + ' w-12 h-12 rounded-full bg-purple-600 border m-2' }
							>
							</button>
							<span className="font-bold text-gray-800 dark:text-gray-200">
								Purple
							</span>
						</div>
						<div className="flex flex-col items-center">
							<button
								onClick={ () => toggleTheme('rose') }
								className={ (darkMode ? 'border-white' : 'border-black') + ' w-12 h-12 rounded-full bg-rose-600 border m-2' }
							>
							</button>
							<span className="font-bold text-gray-800 dark:text-gray-200">
								Rose
							</span>
						</div>*/ }
					</div>
				</div>
				<div className="mt-4">
					<p className="text-3xl text-primary my-2">
						Mode
					</p>
					<div className="flex flex-col items-center">
						<button onClick={ toggleDarkMode }
						        className={ (darkMode ? 'border-white bg-gray-700' : 'border-black bg-gray-300') + ' w-12 h-12 rounded-full bg-gray-700 border m-2' }>
						</button>
						<span className="font-bold text-gray-700 dark:text-gray-300">
							{ darkMode ? 'Light' : 'Dark' }
						</span>
					</div>
				</div>
			</div>
		)
	}

	return (
		<button
			className="fixed top-1/2 transform -translate-y-1/2 right-0 m-4 p-4 text-3xl bg-gray-100 dark:bg-gray-800 rounded-full shadow-lg z-[100]"
			onClick={ () => setThemePanel(true) }
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary"
			     viewBox="0 0 16 16">
				<path
					d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
			</svg>
		</button>
	)
}
