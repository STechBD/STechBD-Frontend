'use client'

import { JSX, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import type { Menu } from '@/app/_data/type'
import { isPath, validatePath } from '@/app/_function/utility'
import { getProduct } from '@/app/_data/product'
import ParticleAnimation from '@/app/_component/particleAnimation'
import AnimatedLogo from '@/app/_component/animatedLogo'
import Theme from '@/app/_component/theme'


/**
 * The Header component.
 *
 * @returns { JSX.Element } The Header component.
 * @since 3.0.0
 */
export default function Header(): JSX.Element {
	const path: string = usePathname()
	const type: string = (path.startsWith('/product') && path !== '/product' && validatePath(path)) ? 'product' : 'default'
	const productSlug: string = path.split('/')[2]
	const productData: any = getProduct(productSlug) ?? false

	const data = {
		siteTitle: 'S Technologies',
		siteLogo: <AnimatedLogo/>,
		productSlug: productData.id,
		productTitle: productData.title,
		productLogo: productData.logo,
		productGithub: productData.github,
	}

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

	const menu: Menu[] = [
		{
			title: 'Home',
			path: '/',
			submenu: false,
		},
		{
			title: 'Product',
			mobileState: showMobileProduct,
			mobileToggle: toggleMobileProduct,
			submenu: {
				type: 2,
				state: showProduct,
				openCallback: openProduct,
				closeCallback: closeProduct,
				items: [
					{
						title: 'CookieCons',
						path: '/product/CookieCons',
						description: 'WordPress plugin for GDPR and ePrivacy Cookie Compliance',
					},
					{
						title: 'ProjectPress',
						path: '/product/ProjectPress',
						description: 'WordPress plugin for showing projects as a portfolio',
					},
					{
						title: 'S PHP Engine',
						path: '/product/S-PHP-Engine',
						description: 'Lightweight MVC-based PHP framework for building powerful web applications',
					},
					{
						title: 'S Template Engine',
						path: '/product/S-Template-Engine',
						description: 'Lightweight template engine for PHP',
					},
					{
						title: 'S Database Explorer',
						path: '/product/S-Database-Explorer',
						description: 'Simple and easy to use Database Explorer for MySQL with PDO',
					},
					{
						title: 'S Number Manager',
						path: '/product/S-Number-Manager',
						description: 'Simple library for converting numbers in different languages',
					},
					{
						title: 'PyWeb',
						path: '/product/PyWeb',
						description: 'Python-based lightweight web browser for Windows',
					},
					{
						title: 'ViewMD',
						path: '/product/ViewMD',
						description: 'Markdown viewer for Windows',
					},
				],
				text: 'View all product →',
				path: '/product',
			},
		},
		{
			title: 'Domain',
			path: '/domain',
			submenu: false,
		},
		{
			title: 'Server',
			mobileState: showMobileServer,
			mobileToggle: toggleMobileServer,
			submenu: {
				type: 2,
				state: showServer,
				openCallback: openServer,
				closeCallback: closeServer,
				items: [
					{
						title: 'Shared Hosting',
						path: '/shared-hosting',
						description: 'Shared hosting for small and mid-scale business',
					},
					{
						title: 'Reseller Hosting',
						path: '/reseller-hosting',
						description: 'Reseller hosting for business',
					},
					{
						title: 'Managed VPS',
						path: '/managed-vps',
						description: 'Managed VPS for large-scale business',
					},
					{
						title: 'Unmanaged VPS',
						path: '/unmanaged-vps',
						description: 'Unmanaged VPS for large-scale business',
					},
					{
						title: 'Dedicated Server',
						path: '/dedicated-server',
						description: 'Dedicated server for enterprise-scale business',
					},
				],
				text: 'View all server plan →',
				path: '/server',
			},
		},
		{
			title: 'Service',
			mobileState: showMobileService,
			mobileToggle: toggleMobileService,
			submenu: {
				type: 2,
				state: showService,
				openCallback: openService,
				closeCallback: closeService,
				items: [
					{
						title: 'AI App Development',
						path: '/ai-development',
						description: 'Artificial Intelligence (AI) app development for web and native device',
					},
					{
						title: 'Web App Development',
						path: '/web-development',
						description: 'Frontend and backend app development for website',
					},
					{
						title: 'Ready-made Website',
						path: '/readymade-website',
						description: 'Pre-developed frontend and backend app for website',
					},
					{
						title: 'Android App Development',
						path: '/android-development',
						description: 'Android app development for mobile, tablet, and TV',
					},
					{
						title: 'iOS App Development',
						path: '/ios-development',
						description: 'iOS app development for iPhone, iPad, and Apple Watch',
					},
					{
						title: 'Windows App Development',
						path: '/windows-development',
						description: 'Windows app development for PC',
					},
					{
						title: 'Game Development',
						path: '/game-development',
						description: 'Game development for PC, mobile, and console',
					},
					{
						title: 'UI/UX Design',
						path: '/ui-ux-design',
						description: 'UI/UX design for web and native app',
					},
					{
						title: 'Search Engine Optimization',
						path: '/seo',
						description: 'Search Engine Optimization for website',
					},
					{
						title: 'Graphic Design',
						path: '/graphic-design',
						description: 'Graphic Design for business',
					},
				],
				text: 'View all service →',
				path: '/service',
			},
		},
		{
			title: 'Blog',
			path: '/blog',
			submenu: false,
		},
		{
			title: 'More',
			mobileState: showMobileMore,
			mobileToggle: toggleMobileMore,
			submenu: {
				type: 1,
				state: showMore,
				openCallback: openMore,
				closeCallback: closeMore,
				items: [
					{
						title: 'About S Technologies',
						path: '/about',
					},
					{
						title: 'Contact',
						path: '/contact',
					},
					{
						title: 'Frequency Asked Question (FAQ)',
						path: '/faq',
					},
					{
						title: 'Privacy Policy',
						path: '/privacy',
					},
					{
						title: 'Terms of Service',
						path: '/terms',
					},
					{
						title: 'Disclaimer',
						path: '/disclaimer',
					},
					{
						title: 'GitHub',
						path: 'https://github.com/STechBD',
					},
				],
			},
		},
	]

	return (
		<>
			{
				process.env.NODE_ENV === 'production' && <ParticleAnimation/>
			}
			<header
				className={ (scrolled ? 'bg-white border-b border-gray-200 shadow-2xl bg-opacity-90 dark:bg-slate-900 dark:border-gray-800 ' : '') + 'sticky top-0 z-50' }
			>
				<nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
					<div className="flex lg:flex-1">
						<Link
							className="flex gap-5 -m-1.5 p-1.5"
							href={ type === 'product' ? data.productSlug : '/' }
						>
							<span className="sr-only">
								{
									type === 'product' ? data.productTitle : data.siteTitle
								}
							</span>
							{
								type === 'product' && data.productLogo ? (
									<Image
										className="h-8 w-auto sm:h-10"
										src={ data.productLogo }
										alt={ data.productTitle + ' Logo' }
										height={ 100 }
										width={ 100 }
									/>
								) : (
									data.siteLogo
								)
							}
							<div
								className="flex items-center gap-x-1 text-3xl lg:text-lg 2xl:text-3xl font-semibold leading-6 text-gray-900 dark:text-gray-100 whitespace-nowrap"
							>
								{
									type === 'product' ? data.productTitle : data.siteTitle
								}
							</div>
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button type="button" onClick={ toggleMenu }
						        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-gray-100"
						>
							<span className="sr-only">
								Open main menu
							</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
							     stroke="currentColor" aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round"
								      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
								</path>
							</svg>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-4 2xl:gap-x-10">
						{
							menu.map((item: Menu, index) => {
								if (item.submenu) {
									if (item.submenu.type === 1) {
										return (
											<div key={ index } className="relative">
												<button className={ (isPath([
													...item.submenu.items.map((item) => item.path),
												]) ? 'text-primary' : 'text-gray-900 dark:text-gray-100') + ' flex items-center gap-x-1 font-semibold leading-6' }
												        type="button" aria-expanded="false"
												        onMouseEnter={ item.submenu.openCallback }
												        onMouseLeave={ item.submenu.closeCallback }
												>
													{ item.title }

													<svg className="h-5 w-5 flex-none text-gray-900 dark:text-gray-100"
													     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
													>
														<path fillRule="evenodd"
														      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
														      clipRule="evenodd">
														</path>
													</svg>
												</button>
												<div
													onMouseEnter={ item.submenu.openCallback }
													onMouseLeave={ item.submenu.closeCallback }
													className={ item.submenu.state ? 'absolute left-24 top-full z-10 mt-3 -ml-56 w-screen max-w-sm overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-gray-900/5' }
												>
													<div className="px-4 py-0">
														{
															item.submenu.items.map((item, index) => {
																return (
																	<Link key={ index } href={ item.path }
																	      target={ item.path.startsWith('http') ? '_blank' : '' }
																	      className="block px-3 py-4 font-semibold text-gray-900 dark:text-gray-100 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
																	>
																		{ item.title }
																	</Link>
																)
															})
														}
													</div>
												</div>
											</div>
										)
									} else if (item.submenu.type === 2) {
										return (
											<div key={ index } className="relative">
												<button
													className={ (path === '/product' ? 'text-primary' : 'text-gray-900 dark:text-gray-100') + ' flex items-center gap-x-1 font-semibold leading-6' }
													type="button" aria-expanded="false"
													onMouseEnter={ item.submenu.openCallback }
													onMouseLeave={ item.submenu.closeCallback }
												>
													{ item.title }

													<svg className="h-5 w-5 flex-none text-gray-900 dark:text-gray-100"
													     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
													>
														<path fillRule="evenodd"
														      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
														      clipRule="evenodd">
														</path>
													</svg>
												</button>
												<div
													onMouseEnter={ item.submenu.openCallback }
													onMouseLeave={ item.submenu.closeCallback }
													className={ item.submenu.state ? 'absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-gray-900/5' : 'hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-gray-900/5' }
												>
													<div className="grid grid-cols-2 px-4 py-0">
														{
															item.submenu.items.map((subitem, index) => {
																return (
																	<Link
																		key={ index }
																		href={ subitem.path }
																		className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
																	>
																		<div
																			className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
																		>
																			<Image
																				className="h-6 w-6 text-gray-600 group-hover:text-primary"
																				src="/icon/app.svg" alt="App"
																				height={ 100 }
																				width={ 100 }
																			/>
																		</div>
																		<div className="flex-auto">
																			<span
																				className="block font-semibold text-gray-900 dark:text-gray-100"
																			>
																				{ subitem.title }
																			</span>
																			<p className="mt-1 text-gray-600">
																				{ subitem.description }
																			</p>
																		</div>
																	</Link>
																)
															})
														}
													</div>
													{
														item.submenu.text && item.submenu.path && (
															<Link href={ item.submenu.path }
															      className="block rounded-lg py-2 pl-6 pr-3 text-sm text-center font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50"
															>
																{ item.submenu.text }
															</Link>
														)
													}
												</div>
											</div>
										)
									}
								} else {
									if (item.path) {
										return (
											<Link
												key={ index }
												href={ item.path }
												className={ (path === item.path ? 'text-primary' : 'text-gray-900 dark:text-gray-100') + ' font-semibold leading-6' }
											>
												{ item.title }
											</Link>
										)
									}
								}
							})
						}
						{
							type === 'product' && (
								<>
									<Link
										href={ data.productSlug && data.productSlug + '/about' }
										className={ (path === data.productSlug + '/about' ? 'text-primary' : 'text-gray-900 dark:text-gray-100') + ' font-semibold leading-6 hidden 2xl:block' }
									>
										About
									</Link>
									<a
										href={ data.productGithub ?? 'https://github.com/STechBD' }
										target="_blank"
										className="font-semibold leading-6 text-gray-900 dark:text-gray-100 hidden 2xl:block"
									>
										GitHub
									</a>
									<a
										href="https://cpanel.stechbd.net/login"
										target="_blank"
										className="font-semibold leading-6 text-gray-900 dark:text-gray-100 hidden 2xl:block"
									>
										Login
									</a>
								</>
							)
						}
					</div>
					{
						type === 'product' ? (
							<div className="hidden lg:flex lg:flex-1 lg:justify-end">
								<Link className="flex gap-5 -m-1.5 p-1.5" href="/">
									<span className="sr-only">
										S Technologies
									</span>
									<div
										className="flex items-center gap-x-1 text-3xl lg:text-lg 2xl:text-3xl font-semibold leading-6 text-gray-900 dark:text-gray-100"
									>
										S Technologies
									</div>
									<AnimatedLogo/>
								</Link>
							</div>
						) : (
							<div className="hidden xl:flex xl:flex-1 xl:justify-end">
								<a
									href="https://cpanel.stechbd.net/login"
									target="_blank"
									className="flex gap-5 -m-1.5 justify-center py-2 px-3.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary cursor-pointer hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
								>
									Login
								</a>
							</div>
						)
					}
				</nav>

				{ /** Mobile Menu **/ }
				<div
					onClick={ () => toggleMenu() }
					aria-modal="true"
					role="dialog"
					className={ showMenu ? 'block absolute top-0 left-0 h-screen w-screen backdrop-blur backdrop-opacity-100 overflow-hidden' : 'hidden' }
				>
					<div
						onClick={ (event) => event.stopPropagation() }
						className="block fixed h-screen inset-y-0 right-0 z-100 w-[85%] overflow-x-hidden overflow-y-auto bg-white dark:bg-slate-900 bg-opacity-100 px-6 pt-6 pb-20"
					>
						<div className="flex items-center justify-between">
							<Link className="flex items-center gap-5 -m-1.5 p-1.5" href="/">
								<span className="sr-only">
									{ data.siteTitle }
								</span>
								<AnimatedLogo/>
								<span className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
									{ data.siteTitle }
								</span>
							</Link>
							<button
								onClick={ () => toggleMenu() }
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">
									Close menu
								</span>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
								     stroke="currentColor" aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
								</svg>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="pt-6 pb-3"></div>
								{
									menu.map((item, index) => {
										if (item.submenu) {
											return (
												<div key={ index } className="space-y-2 py-2">
													<div className="-mx-3">
														<button
															onClick={ item.mobileToggle } type="button"
															aria-controls="disclosure-1"
															aria-expanded="false"
															className={ (isPath([
																item.submenu.path ?? '',
																...item.submenu.items.map((item) => item.path),
															]) ? 'text-primary ' : 'text-gray-900 dark:text-gray-100 ') + 'flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50' }
														>
															{ item.title }

															<svg className="h-5 w-5 flex-none">
																<path fillRule="evenodd" clipRule="evenodd"
																      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z">
																</path>
															</svg>
														</button>
														<div
															className={ item.mobileState ? 'mt-2 space-y-2' : 'hidden' }
														>
															{
																item.submenu.items.map((item, index) => {
																	return (
																		<Link key={ index } href={ item.path }
																		      target={ item.path.startsWith('http') ? '_blank' : '' }
																		      className={ (path === item.path ? 'text-primary ' : 'text-gray-900 dark:text-gray-100 ') + 'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50' }
																		>
																			{ item.title }
																		</Link>
																	)
																})
															}
															{
																item.submenu.text && item.submenu.path && (
																	<Link
																		href={ item.submenu.path }
																		className="block text-gray-900 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 dark:text-gray-100 hover:bg-gray-50"
																	>
																		{ item.submenu.text }
																	</Link>
																)
															}
														</div>
													</div>
												</div>
											)
										} else {
											if (item.path) {
												return (
													<div key={ index } className="py-2">
														<Link href={ item.path }
														      className={ (path === item.path ? 'text-primary ' : 'text-gray-900 dark:text-gray-100 ') + '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50' }
														>
															{ item.title }
														</Link>
													</div>
												)
											}
										}
									})
								}
								{
									type === 'product' && (
										<>
											<div className="py-2">
												<Link href={ data.productSlug + '/about' }
												      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50"
												>
													About
												</Link>
											</div>
											<div className="py-2">
												<a
													href={ data.productGithub ?? 'https://github.com/STechBD' }
													target="_blank"
													className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50"
												>
													GitHub
												</a>
											</div>
										</>
									)
								}
								<div className="py-2">
									<a
										href="https://cpanel.stechbd.net/login"
										target="_blank"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50"
									>
										Login
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Theme/>
		</>
	)
}
