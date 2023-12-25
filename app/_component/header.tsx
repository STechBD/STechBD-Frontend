import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'


/**
 * Header component.
 *
 * @since 1.0.0
 */
export default function Header(): JSX.Element {
	return (
		<header className="bg-white sticky top-0 z-50 border-b border-gray-200">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<Link className="flex gap-5 -m-1.5 p-1.5" href="/">
						<span className="sr-only">Install Express</span>
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
						<span className="sr-only">Open main menu</span>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
						     stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round"
							      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
							</path>
						</svg>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<a
						className="text-indigo-500 text sm font-semibold leading-6"
						href="https://www.stechbd.net">Home</a>
					<div className="relative">
						<button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
						        type="button" aria-expanded="false">
							Project
							<svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
							     aria-hidden="true">
								<path fillRule="evenodd"
								      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								      clipRule="evenodd">
								</path>
							</svg>
						</button>
						<div
							className="hidden absolute -left-8 top-full z-10 mt-3 -ml-56 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
							<div className="grid grid-cols-2 px-4 py-0">
								<a
									className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
									href="https://www.stechbd.net/project/CookieCons" target="_blank">
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
								</a>
								<a href="https://www.stechbd.net/project/ProjectPress" target="_blank"
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
								</a>
								<a href="https://www.stechbd.net/project/S-PHP-Engine" target="_blank"
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
								</a>
								<a href="https://www.stechbd.net/project/S-Template-Engine" target="_blank"
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
								</a>
								<a href="https://www.stechbd.net/project/S-Database-Explorer" target="_blank"
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
								</a>
								<a href="https://www.stechbd.net/project/S-Number-Manager" target="_blank"
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
								</a>
								<a href="https://www.stechbd.net/project/PyWeb" target="_blank"
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
								</a>
								<a href="https://www.stechbd.net/project/ViewMD" target="_blank"
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
								</a>
							</div>
							<a className="block rounded-lg py-2 pl-6 pr-3 text-sm text-center font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							   href="https://www.stechbd.net/project" target="_blank">View all projects →</a>
						</div>
					</div>
					<a href="https://www.stechbd.net/project/CookieCons" target="_blank"
					   className="text sm font-semibold leading-6 text-gray-900">
						About
					</a>
					<a href="https://github.com/STechBD/Install-Express" target="_blank"
					   className="text sm font-semibold leading-6 text-gray-900">
						GitHub
					</a>
					<a href="https://www.stechbd.net/blog" target="_blank"
					   className="text sm font-semibold leading-6 text-gray-900">
						Blog
					</a>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a className="flex gap-5 -m-1.5 p-1.5" href="https://www.stechbd.net" target="_blank">
						<span className="sr-only">S Technologies</span>
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
						<a className="flex items-center gap-5 -m-1.5 p-1.5" href="https://www.stechbd.net"
						   target="_blank">
							<span className="sr-only">S Technologies</span>
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
										<a href="https://www.stechbd.net/project/CookieCons" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>CookieCons</a>
										<a href="https://www.stechbd.net/project/ProjectPress" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											ProjectPress
										</a>
										<a href="https://www.stechbd.net/project/S-PHP-Engine" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											S PHP Engine
										</a>
										<a href="https://www.stechbd.net/project/S-Template-Engine" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											S Template Engine
										</a>
										<a href="https://www.stechbd.net/project/S-Database-Explorer" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											S Database Explorer
										</a>
										<a href="https://www.stechbd.net/project/S-Number-Manager" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											S Number Manager
										</a>
										<a href="https://www.stechbd.net/project/PyWeb" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											PyWeb
										</a>
										<a href="https://www.stechbd.net/project/ViwMD" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											ViewMD
										</a>
										<a href="https://www.stechbd.net/project" target="_blank"
										   className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											View all projects →
										</a>
									</div>
								</div>
							</div>
							<div className="py-3">
								<a href="https://www.stechbd.net/project/CookieCons" target="_blank"
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
								<a href="https://www.stechbd.net/blog" target="_blank"
								   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Blog
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
