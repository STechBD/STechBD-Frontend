'use client'

import { JSX, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { isPath } from '@/app/_function/utility'
import ParticleAnimation from '@/app/_component/particleAnimation'
import AnimatedLogo from '@/app/_component/animatedLogo'


/**
 * Header component.
 *
 * @since 3.0.0
 */
export default function ProductHeader(): JSX.Element {
	const path: string | undefined = usePathname()
	const [ showMenu, setShowMenu ] = useState<boolean>(false)
	const [ showProduct, setShowProduct ] = useState<boolean>(false)
	const [ showServer, setShowServer ] = useState<boolean>(false)
	const [ showService, setShowService ] = useState<boolean>(false)
	const [ showMore, setShowMore ] = useState<boolean>(false)
	const [ scrolled, setScrolled ] = useState<boolean>(false)
	const [ showMobileProduct, setShowMobileProduct ] = useState<boolean>(false)
	const [ showMobileServer, setShowMobileServer ] = useState<boolean>(false)
	const [ showMobileService, setShowMobileService ] = useState<boolean>(false)
	const [ showMobileMore, setShowMobileMore ] = useState<boolean>(false)
	let closeProductTimeout: any = null
	let closeHostingTimeout: any = null
	let closeServiceTimeout: any = null
	let closeMoreTimeout: any = null

	const openProduct = (): void => {
		clearInterval(closeProductTimeout)

		if (!showProduct) {
			setShowProduct(true)
			setShowServer(false)
			setShowService(false)
			setShowMore(false)
		}
	}
	const closeProduct = (): void => {
		closeProductTimeout = setTimeout((): void => {
			setShowProduct(false)
		}, 500)
	}

	const openServer = (): void => {
		clearInterval(closeHostingTimeout)

		if (!showServer) {
			setShowServer(true)
			setShowProduct(false)
			setShowService(false)
			setShowMore(false)
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
			setShowProduct(false)
			setShowMore(false)
		}
	}
	const closeService = (): void => {
		closeServiceTimeout = setTimeout((): void => {
			setShowService(false)
		}, 500)
	}

	const openMore = (): void => {
		clearInterval(closeMoreTimeout)

		if (!showMore) {
			setShowMore(true)
			setShowService(false)
			setShowServer(false)
			setShowProduct(false)
		}
	}

	const closeMore = (): void => {
		closeMoreTimeout = setTimeout((): void => {
			setShowMore(false)
		}, 500)
	}

	const toggleMenu = (): void => {
		setShowMenu(!showMenu)
	}

	const toggleMobileProduct = (): void => {
		setShowMobileProduct(!showMobileProduct)
		setShowMobileServer(false)
		setShowMobileService(false)
		setShowMobileMore(false)
	}

	const toggleMobileServer = (): void => {
		setShowMobileServer(!showMobileServer)
		setShowMobileProduct(false)
		setShowMobileService(false)
		setShowMobileMore(false)
	}

	const toggleMobileService = (): void => {
		setShowMobileService(!showMobileService)
		setShowMobileProduct(false)
		setShowMobileServer(false)
		setShowMobileMore(false)
	}

	const toggleMobileMore = (): void => {
		setShowMobileMore(!showMobileMore)
		setShowMobileProduct(false)
		setShowMobileServer(false)
		setShowMobileService(false)
	}

	useEffect((): void => {
		setShowMenu(false)
	}, [ path ])

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
		<>
			{
				process.env.NODE_ENV === 'production' && <ParticleAnimation/>
			}
			<header
				className={ (scrolled ? 'bg-white border-b border-gray-200 shadow-2xl bg-opacity-90 ' : '') + 'sticky top-0 z-50' }>
				<nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
					<div className="flex lg:flex-1">
						<Link className="flex gap-5 -m-1.5 p-1.5" href="/">
						<span className="sr-only">
							Install Express
						</span>
							<Image className="h-8 w-auto sm:h-10" src="/img/Install-Express-Logo-Light.svg"
							       alt="Install-Express Logo" height={ 100 } width={ 100 }/>
							<div
								className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 whitespace-nowrap">
								Install Express
							</div>
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button type="button" onClick={ toggleMenu }
						        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
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
					<div className="hidden lg:flex lg:gap-x-12">
						<Link href="/"
						      className={ (path === '/' ? 'text-indigo-600' : 'text-gray-900') + ' font-semibold leading-6' }>
							Home
						</Link>
						<div className="relative">
							<button
								className={ (path === '/product' ? 'text-indigo-600' : 'text-gray-900') + ' flex items-center gap-x-1 font-semibold leading-6' }
								type="button" aria-expanded="false" onMouseEnter={ openProduct }
								onMouseLeave={ closeProduct }>
								Product
								<svg className="h-5 w-5 flex-none text-gray-900" viewBox="0 0 20 20" fill="currentColor"
								     aria-hidden="true">
									<path fillRule="evenodd"
									      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									      clipRule="evenodd">
									</path>
								</svg>
							</button>
							<div onMouseEnter={ openProduct } onMouseLeave={ closeProduct }
							     className={ showProduct ? 'absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' }>
								<div className="grid grid-cols-2 px-4 py-0">
									<Link href="/product/CookieCons"
									      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
										<div
											className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
											<Image className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
											       src="/icon/app.svg" alt="App" height={ 100 } width={ 100 }/>
										</div>
										<div className="flex-auto">
										<span className="block font-semibold text-gray-900">
											CookieCons
										</span>
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
										<span className="block font-semibold text-gray-900">
											ProjectPress
										</span>
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
										<span className="block font-semibold text-gray-900">
											S PHP Engine
										</span>
											<p className="mt-1 text-gray-600">
												Lightweight MVC-based PHP framework for building powerful web
												applications
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
										<span className="block font-semibold text-gray-900">
											S Template Engine
										</span>
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
										<span className="block font-semibold text-gray-900">
											S Database Explorer
										</span>
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
										<span className="block font-semibold text-gray-900">
											S Number Manager
										</span>
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
										<span className="block font-semibold text-gray-900">
											PyWeb
										</span>
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
										<span className="block font-semibold text-gray-900">
											ViewMD
										</span>
											<p className="mt-1 text-gray-600">
												Markdown viewer for Windows
											</p>
										</div>
									</Link>
								</div>
								<Link href="/product"
								      className="block rounded-lg py-2 pl-6 pr-3 text-sm text-center font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									View all product →
								</Link>
							</div>
						</div>
						<Link href="/domain"
						      className={ (path === '/domain' ? 'text-indigo-600' : 'text-gray-900') + ' font-semibold leading-6' }>
							Domain
						</Link>
						<div className="relative">
							<button
								className={ (path === '/server' ? 'text-indigo-600' : 'text-gray-900') + ' flex items-center gap-x-1 font-semibold leading-6' }
								type="button" aria-expanded="false" onMouseEnter={ openServer }
								onMouseLeave={ closeServer }>
								Server
								<svg className="h-5 w-5 flex-none text-gray-900" viewBox="0 0 20 20" fill="currentColor"
								     aria-hidden="true">
									<path fillRule="evenodd"
									      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									      clipRule="evenodd">
									</path>
								</svg>
							</button>
							<div onMouseEnter={ openServer } onMouseLeave={ closeServer }
							     className={ showServer ? 'absolute -left-8 lg:-left-32 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' }>
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
							<button onMouseEnter={ openService } onMouseLeave={ closeService }
							        className={ (path === '/service' ? 'text-indigo-600' : 'text-gray-900') + ' flex items-center gap-x-1 font-semibold leading-6' }
							        type="button" aria-expanded="false">
								Service
								<svg className="h-5 w-5 flex-none text-gray-900" viewBox="0 0 20 20" fill="currentColor"
								     aria-hidden="true">
									<path fillRule="evenodd"
									      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									      clipRule="evenodd">
									</path>
								</svg>
							</button>
							<div onMouseEnter={ openService } onMouseLeave={ closeService }
							     className={ showService ? 'absolute -left-8 lg:-left-56 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' }>
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
									<Link href="/readymade-website"
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
						      className={ (path === '/CookieCons/about' ? 'text-indigo-600' : 'text-gray-900') + ' font-semibold leading-6' }>
							About
						</Link>
						<a href="https://github.com/STechBD/Install-Express" target="_blank"
						   className="font-semibold leading-6 text-gray-900">
							GitHub
						</a>
						<Link href="/blog"
						      className={ (path.startsWith('/blog') ? 'text-indigo-600' : 'text-gray-900') + ' font-semibold leading-6' }>
							Blog
						</Link>
						<div className="relative">
							<button className={ (isPath([
								'/about',
								'/contact',
								'/support',
								'/faq',
								'/privacy',
								'/term',
								'/disclaimer',
							]) ? 'text-indigo-600' : 'text-gray-900') + ' flex items-center gap-x-1 font-semibold leading-6' }
							        type="button" aria-expanded="false" onMouseEnter={ openMore }
							        onMouseLeave={ closeMore }>
								More
								<svg className="h-5 w-5 flex-none text-gray-900" viewBox="0 0 20 20" fill="currentColor"
								     aria-hidden="true">
									<path fillRule="evenodd"
									      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									      clipRule="evenodd">
									</path>
								</svg>
							</button>
							<div onMouseEnter={ openMore } onMouseLeave={ closeMore }
							     className={ showMore ? 'absolute left-24 top-full z-10 mt-3 -ml-56 w-screen max-w-sm overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5' }>
								<div className="px-4 py-0">
									<Link href="/about"
									      className="block px-3 py-4 font-semibold text-gray-900 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
										About S Technologies
									</Link>
									<Link href="/contact"
									      className="block px-3 py-4 font-semibold text-gray-900 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
										Contact
									</Link>
									<Link href="/support"
									      className="block px-3 py-4 font-semibold text-gray-900 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
										Support
									</Link>
									<Link href="/faq"
									      className="block px-3 py-4 font-semibold text-gray-900 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
										Frequently Asked Questions (FAQ)
									</Link>
									<Link href="/privacy"
									      className="block px-3 py-4 font-semibold text-gray-900 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
										Privacy Policy
									</Link>
									<Link href="/term"
									      className="block px-3 py-4 font-semibold text-gray-900 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
										Terms of Service
									</Link>
									<Link href="/disclaimer"
									      className="block px-3 py-4 font-semibold text-gray-900 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
										Disclaimer
									</Link>
								</div>
							</div>
						</div>
						<a href="https://cpanel.stechbd.net/login" target="_blank"
						   className="font-semibold leading-6 text-gray-900">
							Login
						</a>
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link className="flex gap-5 -m-1.5 p-1.5" href="/">
						<span className="sr-only">
							S Technologies
						</span>
							<div className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
								S Technologies
							</div>
							<AnimatedLogo/>
						</Link>
					</div>
				</nav>
				{ /** Mobile Menu **/ }
				<div onClick={ () => toggleMenu() } aria-modal="true" role="dialog"
				     className={ showMenu ? 'block absolute top-0 left-0 h-screen w-screen backdrop-blur backdrop-opacity-100 overflow-hidden' : 'hidden' }>
					{ /* Background water-drop effect for the menu */ }
					<div onClick={ (event) => event.stopPropagation() }
					     className="block fixed h-screen inset-y-0 right-0 z-100 w-[85%] overflow-x-hidden overflow-y-auto bg-white bg-opacity-100 px-6 pt-6 pb-20">
						<div className="flex items-center justify-between">
							<Link className="flex items-center gap-5 -m-1.5 p-1.5" href="/">
							<span className="sr-only">
								S Technologies
							</span>
								<AnimatedLogo/>
								<span className="text-lg font-semibold leading-6 text-gray-900">
								S Technologies
							</span>
							</Link>
							<button onClick={ () => toggleMenu() } type="button"
							        className="-m-2.5 rounded-md p-2.5 text-gray-700">
							<span className="sr-only">
								Close menu
							</span>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
								     stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
								</svg>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="pt-6 pb-3">
									<Link href="/"
									      className={ (path === '/' ? 'text-indigo-600 ' : 'text-gray-900 ') + '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50' }>
										Home
									</Link>
								</div>
								<div className="space-y-2 py-6">
									<div className="-mx-3">
										<button onClick={ toggleMobileProduct } type="button"
										        aria-controls="disclosure-1"
										        aria-expanded="false"
										        className={ (path.startsWith('/product') ? 'text-indigo-600 ' : 'text-gray-900 ') + 'flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50' }>
											Product
											<svg className="h-5 w-5 flex-none">
												<path fillRule="evenodd" clipRule="evenodd"
												      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z">
												</path>
											</svg>
										</button>
										<div className={ showMobileProduct ? 'mt-2 space-y-2' : 'hidden' }>
											<Link href="/product/CookieCons"
											      className={ (path === '/product/CookieCons' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												CookieCons
											</Link>
											<Link href="/product/ProjectPress"
											      className={ (path === '/product/ProjectPress' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												ProjectPress
											</Link>
											<Link href="/product/S-PHP-Engine"
											      className={ (path === '/product/S-PHP-Engine' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												S PHP Engine
											</Link>
											<Link href="/product/S-Template-Engine"
											      className={ (path === '/product/S-Template-Engine' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												S Template Engine
											</Link>
											<Link href="/product/S-Database-Explorer"
											      className={ (path === '/product/S-Database-Explorer' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												S Database Explorer
											</Link>
											<Link href="/product/S-Number-Manager"
											      className={ (path === '/product/S-Number-Manager' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												S Number Manager
											</Link>
											<Link href="/product/PyWeb"
											      className={ (path === '/product/PyWeb' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												PyWeb
											</Link>
											<Link href="/product/ViewMD"
											      className={ (path === '/product/ViewMD' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												ViewMD
											</Link>
											<Link href="/product"
											      className={ (path === '/product' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												View all product →
											</Link>
										</div>
									</div>
								</div>
								<div className="py-3">
									<Link href="/domain"
									      className={ (path === '/domain' ? 'text-indigo-600 ' : 'text-gray-900 ') + '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
										Domain
									</Link>
								</div>
								<div className="space-y-2 py-6">
									<div className="-mx-3">
										<button onClick={ toggleMobileServer } type="button"
										        aria-controls="disclosure-1"
										        aria-expanded="false"
										        className={ (path.startsWith('/server') ? 'text-indigo-600 ' : 'text-gray-900 ') + 'flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50' }>
											Server
											<svg className="h-5 w-5 flex-none">
												<path fillRule="evenodd" clipRule="evenodd"
												      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z">
												</path>
											</svg>
										</button>
										<div className={ showMobileServer ? 'mt-2 space-y-2' : 'hidden' }>
											<Link href="/shared-hosting"
											      className={ (path === '/shared-hosting' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Shared Hosting
											</Link>
											<Link href="/reseller-hosting"
											      className={ (path === '/reseller-hosting' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Reseller Hosting
											</Link>
											<Link href="/master-reseller-hosting"
											      className={ (path === '/master-reseller-hosting' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Master Reseller Hosting
											</Link>
											<Link href="/managed-vps"
											      className={ (path === '/managed-vps' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Managed VPS
											</Link>
											<Link href="/unmanaged-vps"
											      className={ (path === '/unmanaged-vps' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Unmanaged VPS
											</Link>
											<Link href="/dedicated-server"
											      className={ (path === '/dedicated-server' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Dedicated Server
											</Link>
											<Link href="/server"
											      className={ (path === '/server' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												View all server plan →
											</Link>
										</div>
									</div>
								</div>
								<div className="space-y-2 py-6">
									<div className="-mx-3">
										<button onClick={ toggleMobileService } type="button"
										        aria-controls="disclosure-1"
										        aria-expanded="false"
										        className={ (path.startsWith('/service') ? 'text-indigo-600 ' : 'text-gray-900 ') + 'flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50' }>
											Service
											<svg className="h-5 w-5 flex-none">
												<path fillRule="evenodd" clipRule="evenodd"
												      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z">
												</path>
											</svg>
										</button>
										<div className={ showMobileService ? 'mt-2 space-y-2' : 'hidden' }>
											<Link href="/ai-development"
											      className={ (path === '/ai-development' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												AI App Development
											</Link>
											<Link href="/web-development"
											      className={ (path === '/web-development' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Wep App Development
											</Link>
											<Link href="/readymade-website"
											      className={ (path === '/readymade-website' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Ready-made Web Development
											</Link>
											<Link href="/android-development"
											      className={ (path === '/android-development' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												Android App Development
											</Link>
											<Link href="/ios-development"
											      className={ (path === '/ios-development' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												iOS App Development
											</Link>
											<Link href="/windows-development"
											      className={ (path === '/windows-development' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												Windows App Development
											</Link>
											<Link href="/ui-ux-design"
											      className={ (path === '/ui-ux-design' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												UI/UX Design
											</Link>
											<Link href="/seo"
											      className={ (path === '/seo' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												Search Engine Optimization (SEO)
											</Link>
											<Link href="/service"
											      className={ (path === '/service' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												View all service plan →
											</Link>
										</div>
									</div>
								</div>
								<div className="py-3">
									<Link href="/product/CookieCons/about"
									      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										About
									</Link>
								</div>
								<div className="py-3">
									<a href="https://github.com/STechBD/Install-Express" target="_blank"
									   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										GitHub
									</a>
								</div>
								<div className="py-3">
									<Link href="/blog"
									      className={ (path.startsWith('/blog') ? 'text-indigo-600 ' : 'text-gray-900 ') + '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
										Blog
									</Link>
								</div>
								<div className="space-y-2 py-6">
									<div className="-mx-3">
										<button onClick={ toggleMobileMore } type="button" aria-controls="disclosure-1"
										        aria-expanded="false"
										        className={ (isPath([
											        '/about',
											        '/contact',
											        '/support',
											        '/faq',
											        '/privacy',
											        '/term',
											        '/disclaimer',
										        ]) ? 'text-indigo-600 ' : 'text-gray-900 ') + 'flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50' }>
											More
											<svg className="h-5 w-5 flex-none">
												<path fillRule="evenodd" clipRule="evenodd"
												      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z">
												</path>
											</svg>
										</button>
										<div className={ showMobileMore ? 'mt-2 space-y-2' : 'hidden' }>
											<Link href="/about"
											      className={ (path === '/about' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												About S Technologies
											</Link>
											<Link href="/contact"
											      className={ (path === '/contact' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Contact
											</Link>
											<Link href="/support"
											      className={ (path === '/support' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Support
											</Link>
											<Link href="/faq"
											      className={ (path === '/faq' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Frequently Asked Questions (FAQ)
											</Link>
											<Link href="/privacy"
											      className={ (path === '/privacy' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }>
												Privacy Policy
											</Link>
											<Link href="/term"
											      className={ (path === '/term' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												Terms of Service
											</Link>
											<Link href="/disclaimer"
											      className={ (path === '/disclaimer' ? 'text-indigo-600 ' : 'text-gray-900 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50' }>
												Disclaimer
											</Link>
										</div>
									</div>
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
		</>
	)
}
