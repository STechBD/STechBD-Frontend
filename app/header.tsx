'use client'

import { JSX, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


/**
 * Header component.
 *
 * @since 3.0.0
 */
export default function Header(): JSX.Element {
	const [ showMenu, setShowMenu ] = useState<boolean>(false)
	const [ showProject, setShowProject ] = useState<boolean>(false)
	const [ showServer, setShowServer ] = useState<boolean>(false)
	const [ showService, setShowService ] = useState<boolean>(false)
	const [ scrolled, setScrolled ] = useState<boolean>(false)
	let closeProjectTimeout: any = null
	let closeHostingTimeout: any = null
	let closeServiceTimeout: any = null

	const openProject = (): void => {
		clearInterval(closeProjectTimeout)

		if (!showProject) {
			setShowProject(true)
			setShowServer(false)
			setShowService(false)
		}
	}
	const closeProject = (): void => {
		closeProjectTimeout = setTimeout((): void => {
			setShowProject(false)
		}, 500)
	}

	const openServer = (): void => {
		clearInterval(closeHostingTimeout)

		if (!showServer) {
			setShowServer(true)
			setShowProject(false)
			setShowService(false)
		}
	}
	const closeServer = (): void => {
		closeHostingTimeout = setTimeout((): void => {
			setShowServer(false)
		}, 500)
	}

	const openService = (): void => {
		clearInterval(closeServiceTimeout)

		if (!showService) {
			setShowService(true)
			setShowServer(false)
			setShowProject(false)
		}
	}
	const closeService = (): void => {
		closeServiceTimeout = setTimeout((): void => {
			setShowService(false)
		}, 500)
	}

	useEffect((): void => {
		const handleScroll = (): void => {
			if (window.scrollY > 0) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={ `sticky top-0 z-50 ${ scrolled ? 'bg-white border-b border-gray-200 shadow bg-opacity-90' : '' }` }>
			<nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<Link className="flex gap-5 -m-1.5 p-1.5" href="/">
						<span className="sr-only">
							Install Express
						</span>
						<Image className="h-8 w-auto sm:h-10" src="/img/Install-Express-Logo-Light.svg"
						       alt="Install-Express Logo" height={ 100 } width={ 100 }/>
						<div className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
							Install Express
						</div>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					        type="button" id="menuButton">
						<span className="sr-only">
							Open main menu
						</span>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
						     stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round"
							      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
							</path>
						</svg>
					</button>
				</div>
				<div className={ showMenu ? 'lg:flex lg:gap-x-12' : 'hidden lg:flex lg:gap-x-12' }>
					<Link href="/" className="text-indigo-500 font-semibold leading-6">
						Home
					</Link>
					<div className="relative">
						<button className="flex items-center gap-x-1 font-semibold leading-6 text-gray-900"
						        type="button" aria-expanded="false" onMouseEnter={ openProject }
						        onMouseLeave={ closeProject }>
							Project
							<svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
							     aria-hidden="true">
								<path fillRule="evenodd"
								      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								      clipRule="evenodd">
								</path>
							</svg>
						</button>
						<div onMouseEnter={ openProject } onMouseLeave={ closeProject }
						     className={ showProject ? 'absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' }>
							<div className="grid grid-cols-2 px-4 py-0">
								<Link href="/product/CookieCons"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">CookieCons</span>
										<p className="mt-1 text-gray-600">
											WordPress plugin for GDPR and ePrivacy Cookie Compliance
										</p>
									</div>
								</Link>
								<Link href="/product/ProjectPress"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">ProjectPress</span>
										<p className="mt-1 text-gray-600">
											WordPress plugin for showing projects as a portfolio
										</p>
									</div>
								</Link>
								<Link href="/product/S-PHP-Engine"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">S PHP Engine</span>
										<p className="mt-1 text-gray-600">
											Lightweight MVC-based PHP framework for building powerful web applications
										</p>
									</div>
								</Link>
								<Link href="/product/S-Template-Engine"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">S Template Engine</span>
										<p className="mt-1 text-gray-600">
											Lightweight template engine for PHP
										</p>
									</div>
								</Link>
								<Link href="/product/S-Database-Explorer"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">S Database Explorer</span>
										<p className="mt-1 text-gray-600">
											Simple and easy to use Database Explorer for MySQL with PDO
										</p>
									</div>
								</Link>
								<Link href="/product/S-Number-Manager"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">S Number Manager</span>
										<p className="mt-1 text-gray-600">Simple library for converting numbers in
											different
											languages</p>
									</div>
								</Link>
								<Link href="/product/PyWeb"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">PyWeb</span>
										<p className="mt-1 text-gray-600">
											Python-based lightweight web browser for Windows
										</p>
									</div>
								</Link>
								<Link href="/product/ViewMD"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">ViewMD</span>
										<p className="mt-1 text-gray-600">
											Markdown viewer for Windows
										</p>
									</div>
								</Link>
							</div>
							<Link href="/project"
							      className="block rounded-lg py-2 pl-6 pr-3 text-sm text-center font-semibold leading-7 text-gray-900 hover:bg-gray-50">
								View all projects →
							</Link>
						</div>
					</div>
					<Link href="/domain" className="font-semibold leading-6 text-gray-900">
						Domain
					</Link>
					<div className="relative">
						<button className="flex items-center gap-x-1 font-semibold leading-6 text-gray-900"
						        type="button" aria-expanded="false" onMouseEnter={ openServer }
						        onMouseLeave={ closeServer }>
							Server
							<svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
							     aria-hidden="true">
								<path fillRule="evenodd"
								      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								      clipRule="evenodd">
								</path>
							</svg>
						</button>
						<div onMouseEnter={ openServer } onMouseLeave={ closeServer }
						     className={ showServer ? 'absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' }>
							<div className="grid grid-cols-2 px-4 py-0">
								<Link href="/shared-hosting"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Shared Hosting
										</span>
										<p className="mt-1 text-gray-600">
											Shared hosting for small website
										</p>
									</div>
								</Link>
								<Link href="/reseller-hosting"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Reseller Hosting
										</span>
										<p className="mt-1 text-gray-600">
											White label reseller hosting for small business
										</p>
									</div>
								</Link>
								<Link href="/master-reseller-hosting"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Master Reseller Hosting
										</span>
										<p className="mt-1 text-gray-600">
											White label master reseller hosting for large business
										</p>
									</div>
								</Link>
								<Link href="/managed-vps"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Managed VPS
										</span>
										<p className="mt-1 text-gray-600">
											Managed virtual private server for large website
										</p>
									</div>
								</Link>
								<Link href="/unmanaged-vps"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Unmanaged VPS
										</span>
										<p className="mt-1 text-gray-600">
											Unmanaged virtual private server for large website
										</p>
									</div>
								</Link>
								<Link href="/dedicated-server"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Dedicated Server
										</span>
										<p className="mt-1 text-gray-600">
											Dedicated server for large website or application
										</p>
									</div>
								</Link>
							</div>
							<Link href="/server"
							      className="block rounded-lg py-2 pl-6 pr-3 text-sm text-center font-semibold leading-7 text-gray-900 hover:bg-gray-50">
								View all server plan →
							</Link>
						</div>
					</div>
					<div className="relative">
						<button className="flex items-center gap-x-1 font-semibold leading-6 text-gray-900"
						        type="button" aria-expanded="false" onMouseEnter={ openService }
						        onMouseLeave={ closeService }>
							Service
							<svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
							     aria-hidden="true">
								<path fillRule="evenodd"
								      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								      clipRule="evenodd">
								</path>
							</svg>
						</button>
						<div onMouseEnter={ openService } onMouseLeave={ closeService }
						     className={ showService ? 'absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' }>
							<div className="grid grid-cols-2 px-4 py-0">
								<Link href="/ai-development"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											AI App Development
										</span>
										<p className="mt-1 text-gray-600">
											Artificial Intelligence (AI) app development for web and native device
										</p>
									</div>
								</Link>
								<Link href="/web-development"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Wep App Development
										</span>
										<p className="mt-1 text-gray-600">
											Custom frontend and backend web app development
										</p>
									</div>
								</Link>
								<Link href="/readymade-web-development"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Ready-made Web Development
										</span>
										<p className="mt-1 text-gray-600">
											Pre-developed cheap frontend and backend web app
										</p>
									</div>
								</Link>
								<Link href="/android-development"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Android App Development
										</span>
										<p className="mt-1 text-gray-600">
											Custom Android app development
										</p>
									</div>
								</Link>
								<Link href="/ios-development"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											iOS App Development
										</span>
										<p className="mt-1 text-gray-600">
											Custom iOS app development
										</p>
									</div>
								</Link>
								<Link href="/windows-development"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Windows App Development
										</span>
										<p className="mt-1 text-gray-600">
											Custom Windows app development
										</p>
									</div>
								</Link>
								<Link href="/ui-ux-design"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											UI/UX Design
										</span>
										<p className="mt-1 text-gray-600">
											Custom UI/UX design for web and native device
										</p>
									</div>
								</Link>
								<Link href="/seo"
								      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
									<div
										className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
										       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
									</div>
									<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											Search Engine Optimization (SEO)
										</span>
										<p className="mt-1 text-gray-600">
											Search engine optimization for your website
										</p>
									</div>
								</Link>
							</div>
							<Link href="/service"
							      className="block rounded-lg py-2 pl-6 pr-3 text-sm text-center font-semibold leading-7 text-gray-900 hover:bg-gray-50">
								View all service plan →
							</Link>
						</div>
					</div>
					<Link href="/product/CookieCons/about"
					      className="font-semibold leading-6 text-gray-900">
						About
					</Link>
					<a href="https://github.com/STechBD/Install-Express" target="_blank"
					   className="font-semibold leading-6 text-gray-900">
						GitHub
					</a>
					<Link href="/blog"
					      className="font-semibold leading-6 text-gray-900">
						Blog
					</Link>
					<a href="https://cpanel.stechbd.net/login" target="_blank"
					   className="font-semibold leading-6 text-gray-900">
						Login
					</a>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a className="flex gap-5 -m-1.5 p-1.5" href="" target="_blank">
						<span className="sr-only">
							S Technologies
						</span>
						<div className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
							S Technologies
						</div>
						<Image className="h-8 w-auto sm:h-10" src="/img/S-Technologies-Icon.svg"
						       alt="S Technologies Logo" height={ 100 } width={ 100 }/>
					</a>
				</div>
			</nav>
			{/* Mobile menu, show/hide based on menu open state. */ }
			<div className="hidden" id="menu" role="dialog" aria-modal="true">
				{/* Background backdrop, show/hide based on slide-over state. */ }
				<div className="fixed inset-0 z-10">
				</div>
				<div
					className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a className="flex items-center gap-5 -m-1.5 p-1.5" href=""
						   target="_blank">
							<span className="sr-only">
								S Technologies
							</span>
							<Image className="h-8 w-auto" src="/img/S-Technologies-Icon.svg" alt="S Technologies Logo"
							       height={ 100 } width={ 100 }/>
							<span className="text-lg font-semibold leading-6 text-gray-900">
								S Technologies
							</span>
						</a>
						<button className="-m-2.5 rounded-md p-2.5 text-gray-700" type="button">
							<span className="sr-only">Close menu</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
							     stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12">
								</path>
							</svg>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="pt-6 pb-3">
								<a href="/" target="_blank"
								   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-sky-500 hover:bg-gray-50">
									Home
								</a>
							</div>
							<div className="space-y-2 py-6">
								<div className="-mx-3">
									<button type="button" id="mobileProjectButton" aria-controls="disclosure-1"
									        aria-expanded="false"
									        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base text-sky-500 font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										Project
										{/* Expand/collapse icon, toggle classes based on menu open state. */ }
										<svg className="h-5 w-5 flex-none">
											<path fillRule="evenodd" clipRule="evenodd"
											      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z">
											</path>
										</svg>
										{/* 'Project' submenu, show/hide based on menu state. */ }
									</button>
									<div className="mt-2 space-y-2" id="mobileProject">
										<a href="/product/CookieCons" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>CookieCons</a>
										<a href="/product/ProjectPress" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											ProjectPress
										</a>
										<a href="/product/S-PHP-Engine" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											S PHP Engine
										</a>
										<a href="/product/S-Template-Engine" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											S Template Engine
										</a>
										<a href="/product/S-Database-Explorer" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											S Database Explorer
										</a>
										<a href="/product/S-Number-Manager" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											S Number Manager
										</a>
										<a href="/product/PyWeb" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											PyWeb
										</a>
										<a href="/product/ViwMD" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											ViewMD
										</a>
										<a href="/project" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											View all projects →
										</a>
									</div>
								</div>
							</div>
							<div className="py-3">
								<a href="/product/CookieCons" target="_blank"
								   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									About
								</a>
							</div>
							<div className="py-3">
								<a href="https://github.com/STechBD/Install-Express" target="_blank"
								   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									GitHub
								</a>
							</div>
							<div className="py-3">
								<a href="/blog" target="_blank"
								   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Blog
								</a>
							</div>
							<div className="py-3">
								<a href="https://cpanel.stechbd.net/login" target="_blank"
								   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Login
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
