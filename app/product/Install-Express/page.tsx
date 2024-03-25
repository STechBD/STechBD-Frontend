'use client'

import { JSX, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


/**
 * Index Page
 *
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const [ copy, setCopy ] = useState(false)

	const copyCode = (): void => {
		const code: string = 'npx install-express@latest'
		if (code) {
			navigator.clipboard.writeText(code).then((): void => {
				setCopy(true)
				setTimeout(() => setCopy(false), 3000)
			})
		}
	}

	return (
		<main>
			<div className="relative isolate px-6 lg:px-8">
				<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				     aria-hidden="true">
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }>
					</div>
				</div>
				<div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-32">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div
							className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Current Version:
							<a className="font-semibold text-primary"
							   href="https://github.com/STechBD/Install-Express/releases">
								<span className="absolute inset-0" aria-hidden="true"></span>
								&nbsp;v1.0.0 🎉
							</a>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Start your Express.js backend project in seconds!
						</h1>
						<div
							className="flex items-center justify-center gap-5 bg-gray-100 border border-gray-300 rounded-lg p-4 mt-6">
						<pre
							className="flex-grow text-sm font-mono text-gray-800 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg">
							<code
								className="language-bash text-sm font-mono text-gray-200 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg mb-4">
								npx install-express@latest
							</code>
						</pre>
							<button onClick={ copyCode }
							        className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-gray-300 hover:bg-gray-200">
								{
									!copy && (
										<span className="flex items-center gap-2">
											Copy&nbsp;
											<Image src="/icon/copy.svg" height={ 100 } width={ 100 } alt="Copy"
											       className="h-[16px] w-[16px]"/>
										</span>
									)
								}
								{
									copy && (
										<span className="flex items-center gap-2">
											Copied!&nbsp;
											<Image src="/icon/copied.svg" height={ 100 } width={ 100 } alt="Copied"
											       className="h-[16px] w-[16px]"/>
										</span>
									)
								}
							</button>
						</div>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							<strong>Install-Express</strong> &nbsp;is a CLI tool that helps you to create a Express.js
							backend project in seconds. It is a simple, fast, and lightweight tool that you can use to
							create a Express.js backend project with TypeScript, Pug, and Sass. It also includes a basic
							folder structure and some basic files to get started.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a href="https://docs.stechbd.net/Install-Express" target="_blank"
							   className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
								Get started
							</a>
							<Link href="/about"
							      className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15">
								Learn more
							</Link>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }></div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }></div>
				</div>
				<div className="px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Features</h2>
					<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									TypeScript
								</h3>
								<p className="mt-4 text-base text-gray-500">
									TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It
									is pure object-oriented with classes, interfaces, and statically typed like C# or
									Java.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6">
								<a href="https://www.typescriptlang.org/" target="_blank"
								   className="text-base font-medium text-primary hover:text-secondary">
									Learn more
								</a>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									Pug
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Pug is a high-performance template engine heavily influenced by Haml and implemented
									with JavaScript for Node.js and browsers.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6">
								<a href="https://pugjs.org/api/getting-started.html" target="_blank"
								   className="text-base font-medium text-primary hover:text-secondary">
									Learn more
								</a>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									Sass
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Sass is the most mature, stable, and powerful professional grade CSS extension
									language in the world.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary"
								href="https://sass-lang.com/guide">Learn more</a></div>
						</div>
					</div>
				</div>
				<div className="px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Installation</h2>
					<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									Create a new project
								</h3>
								<p className="mt-4 text-base text-gray-500">To create a new project, run the following
									command:</p>
							</div>
							<div className="pt-6 pb-8 px-6">
							<pre
								className="flex-grow text-sm font-mono text-gray-800 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg"><code
								className="language-bash text-sm font-mono text-gray-200 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg mb-4">npx install-express@latest</code></pre>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">Create a new project with a specific
									version</h3>
								<p className="mt-4 text-base text-gray-500">To create a new project with a specific
									version,
									run the following command:</p>
							</div>
							<div className="pt-6 pb-8 px-6">
							<pre
								className="flex-grow text-sm font-mono text-gray-800 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg"><code
								className="language-bash text-sm font-mono text-gray-200 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg mb-4">npx install-express@1.0.0</code></pre>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">Create a new project with a specific
									name</h3>
								<p className="mt-4 text-base text-gray-500">To create a new project with a specific
									name,
									run the following command:</p>
							</div>
							<div className="pt-6 pb-8 px-6">
							<pre
								className="flex-grow text-sm font-mono text-gray-800 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg"><code
								className="language-bash text-sm font-mono text-gray-200 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg mb-4">npx install-express@latest my-project</code></pre>
							</div>
						</div>
					</div>
				</div>
				<div className="px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Support</h2>
					<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									GitHub
								</h3>
								<p className="mt-4 text-base text-gray-500">If you have any problems or suggestions,
									please
									open an issue on GitHub.</p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary" href="#">Learn
								more</a></div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									Twitter
								</h3>
								<p className="mt-4 text-base text-gray-500">If you have any problems or suggestions,
									please
									DM me on Twitter.</p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary" href="#">Learn
								more</a></div>
						</div>
					</div>
				</div>
				<div className="px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contributors</h2>
					<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									Md. Ashraful Alam Shemul
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Software Developer
								</p>
								<p className="mt-4 text-base text-gray-500"><a
									className="text-base font-medium text-primary hover:text-secondary"
									href="https://www.stechbd.net" target="_blank">S Technologies</a></p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary"
								href="https://github.cm/AAShemul">Learn more</a></div>
						</div>
					</div>
				</div>
				<div className="px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Project List</h2>
					<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									CookieCons
								</h3>
								<p className="mt-4 text-base text-gray-500">
									WordPress plugin for GDPR and ePrivacy Cookie Compliance.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6">
								<a href="https://www.stechbd.net/project/CookieCons" target="_blank"
								   className="text-base font-medium text-primary hover:text-secondary">
									Learn more
								</a>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									ProjectPress
								</h3>
								<p className="mt-4 text-base text-gray-500">
									WordPress plugin for showing projects as a portfolio.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6">
								<a href="https://www.stechbd.net/project/ProjectPress" target="_blank"
								   className="text-base font-medium text-primary hover:text-secondary">
									Learn more
								</a>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									S PHP Engine
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Lightweight MVC-based PHP framework for building powerful web applications.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6">
								<a href="https://www.stechbd.net/project/S-PHP-Engine" target="_blank"
								   className="text-base font-medium text-primary hover:text-secondary">
									Learn more
								</a>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									S Template Engine
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Lightweight template engine for PHP.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary"
								href="https://www.stechbd.net/project/S-Template-Engine">Learn more</a></div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									S Database Explorer
								</h3>
								<p className="mt-4 text-base text-gray-500">Simple and easy to use Database Explorer for
									MySQL with PDO.</p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary"
								href="https://www.stechbd.net/project/S-Database-Explorer">Learn more</a></div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									S Number Manager
								</h3>
								<p className="mt-4 text-base text-gray-500">Simple library for converting numbers in
									different languages.</p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary"
								href="https://www.stechbd.net/project/S-Number-Manager">Learn more</a></div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									PyWeb
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Python-based lightweight web browser for Windows.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6">
								<a href="https://www.stechbd.net/project/PyWeb" target="_blank"
								   className="text-base font-medium text-primary hover:text-secondary">
									Learn more
								</a>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									ViewMD
								</h3>
								<p className="mt-4 text-base text-gray-500">
									Markdown viewer for Windows.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary"
								href="https://www.stechbd.net/project/ViwMD">Learn more</a></div>
						</div>
					</div>
				</div>
				<div className="px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">FAQ</h2>
					<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									What is Install-Express?
								</h3>
								<p className="mt-4 text-base text-gray-500">
									<strong>Install Express</strong> is a CLI tool that helps you to create a Express.js
									backend project in seconds. It is a simple, fast, and lightweight tool that you can
									use to create a Express.js backend project with TypeScript, Pug, and Sass. It also
									includes a basic folder structure and some basic files to get started.
								</p>
							</div>
							<div className="pt-6 pb-8 px-6"><a
								className="text-base font-medium text-primary hover:text-secondary"
								href="https://docs.stechbd.net/Install-Express">Learn more</a></div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									How to install Install-Express?
								</h3>
								<p className="mt-4 text-base text-gray-500">
									To install Install-Express, run the following command:
								</p>
							</div>
							<div className="pt-6 pb-8 px-6">
							<pre
								className="flex-grow text-sm font-mono text-gray-800 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg"><code
								className="language-bash text-sm font-mono text-gray-200 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg mb-4">npm install -g install-express</code></pre>
							</div>
						</div>
						<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900">
									How to create a new project?
								</h3>
								<p className="mt-4 text-base text-gray-500">To create a new project, run the following
									command:</p>
							</div>
							<div className="pt-6 pb-8 px-6">
							<pre
								className="flex-grow text-sm font-mono text-gray-800 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg"><code
								className="language-bash text-sm font-mono text-gray-200 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg mb-4">npx install-express@latest</code></pre>
							</div>
						</div>
					</div>
				</div>
				<div className="px-20 py-10"></div>
			</div>
		</main>
	)
}
