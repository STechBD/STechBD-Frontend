'use client'

import Cookie from 'js-cookie'
import config from '@/stech.config'
import type { State } from '@/data/type'
import { JSX, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMode, setTheme, toggleMode } from '@/context/reduxStore'


/**
 * The Theme Switcher Panel component.
 *
 * This panel contains the theme switcher and light mode toggle.
 *
 * @returns { JSX.Element } The Theme Switcher Panel component.
 * @since 3.0.0
 */
export default function Theme(): JSX.Element {
	const themes: string[] = config.themes
	const dispatch = useDispatch()
	const theme: string = useSelector((state: State): string => state.theme)
	const lightMode: boolean = useSelector((state: State): boolean => state.lightMode)
	const [ themePanel, setThemePanel ] = useState<boolean>(false)

	function changeTheme(theme: string): void {
		if (themes.find((name: string): boolean => name === theme)) {
			dispatch(setTheme(theme))

			themes.map((name: string): void => {
				document.documentElement.classList.remove(`theme-${ name }`)
			})
			document.documentElement.classList.add(`theme-${ theme }`)

			Cookie.set('stechbd-theme', theme, {
				expires: 365,
				domain: config.info.domain,
			})
		} else {
			dispatch(setTheme(themes[0]))
			themes.map((name: string): void => {
				document.documentElement.classList.remove(`theme-${ name }`)
			})

			document.documentElement.classList.add(`theme-${ themes[0] }`)
			Cookie.set('stechbd-theme', themes[0], {
				expires: 365,
				domain: config.info.domain,
			})
		}
	}

	function toggleLightMode(): void {
		dispatch(toggleMode())
		document.documentElement.classList.toggle('dark')
		Cookie.set('stechbd-mode', lightMode ? 'light' : 'dark', {
			expires: 365,
			domain: config.info.domain,
		})
	}

	useEffect((): void => {
		if (Cookie.get('stechbd-mode') === 'dark') {
			dispatch(setMode(false))
			document.documentElement.classList.add('dark')
		} else {
			dispatch(setMode(true))
			document.documentElement.classList.remove('dark')
		}

		if (Cookie.get('stechbd-theme')) {
			const name = Cookie.get('stechbd-theme') as string
			dispatch(setTheme(name))
			document.documentElement.classList.add(`theme-${ name }`)
		} else {
			dispatch(setTheme(themes[0]))
			document.documentElement.classList.add(`theme-${ themes[0] }`)
		}
		// eslint-disable-next-line
	}, [])

	return (<>
		<div
			className={ `${ themePanel ? 'fixed' : 'hidden' } top-0 left-0 h-screen w-screen backdrop-blur backdrop-opacity-100 bg-black bg-opacity-50 overflow-hidden z-[99] cursor-pointer` }
			onClick={ () => setThemePanel(false) }
		/>
		<div
			className={ `fixed top-0 bottom-0 right-0 w-[400px] max-w-[90%] p-12 overflow-y-auto bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg z-[100] transition-all duration-500 transform ${ themePanel ? 'm-4 translate-x-0' : 'translate-x-full' }` }
		>
			<button
				className="absolute top-0 right-0 p-4 text-4xl text-gray-900 dark:text-gray-100"
				onClick={ () => setThemePanel(false) }
			>
				&times;
			</button>
			<div className="mt-4">
				<p className="text-3xl text-primary text-center my-2">
					Color
				</p>
				<div className="grid grid-cols-4">
					{ themes.map((name: string): JSX.Element => (
						<div key={ name } className="flex flex-col items-center">
							<button
								onClick={ () => changeTheme(name) }
								className={ (lightMode ? 'border-black' : 'border-white') + ' w-12 h-12 rounded-full bg-' + name + '-600 border m-2' }
								disabled={ name === theme }
							/>
							<span className="font-bold text-gray-800 dark:text-gray-200">
								{ name.charAt(0).toUpperCase() + name.slice(1) }
							</span>
						</div>
					)) }
				</div>
			</div>
			<div className="mt-8">
				<p className="text-3xl text-primary text-center my-2">
					Mode
				</p>
				<div className="flex flex-col items-center">
					<button
						onClick={ toggleLightMode }
						className={ `${ lightMode ? 'bg-black' : 'bg-white' } border-primary cursor-pointer w-12 h-12 rounded-full border m-2` }
					/>
					<span className="font-bold text-gray-700 dark:text-gray-300">
						{ lightMode ? 'Dark' : 'Light' }
					</span>
				</div>
			</div>
		</div>
		<button
			className={ `${ themePanel ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0' } fixed top-1/2 transform -translate-y-1/2 right-0 m-4 p-2 lg:p-4 text-2xl lg:text-3xl bg-gray-100 dark:bg-gray-800 rounded-full shadow-lg z-[100] transition-all duration-500` }
			onClick={ () => setThemePanel(true) }
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				className="h-6 w-6 lg:h-8 lg:w-8 text-primary"
				viewBox="0 0 16 16"
			>
				<path
					d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
				/>
			</svg>
		</button>
	</>)
}
