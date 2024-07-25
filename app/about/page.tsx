import React, { JSX } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from './hero'
import { AdvancedHeroEffect } from '@/app/_component/background'
import { Bounce } from '@/app/_component/animation'


/**
 * Metadata setup for the About page.
 *
 * @const title { string }
 * @const metadata { Metadata }
 *
 * @since 3.0.0
 */
const title: string = 'About'
export const metadata: Metadata = {
	title,
	openGraph: {
		title,
	},
	twitter: {
		title,
	},
}


/**
 * The About page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const companies = [
		{
			title: 'S Hosting (Closed)',
			started: 'June 8, 2015',
			closed: 'June 7, 2016',
			description: <>
				<strong>S Hosting</strong> is a domain, hosting, and server provider company. It was a child company
				of <strong>S Technologies</strong>.
			</>,
			button: {
				title: 'Visit S Hosting',
				link: 'https://www.shostbd.com',
			},
		},
		{
			title: 'Ulkaa',
			started: 'August 14, 2015',
			closed: null,
			description: <>
				<strong>Ulkaa</strong> is a social media platform. It is a child company of <strong>S
				Technologies</strong>.
			</>,
			button: {
				title: 'Visit Ulkaa',
				link: 'https://www.ulkaa.com',
			},
		},
		{
			title: 'S Web Research Center',
			started: 'June 16, 2016',
			closed: null,
			description: <>
				<strong>S Web Research Center</strong> is a research center for researching and developing web related
				technologies. It is a independent research center of <strong>S Technologies</strong>.
			</>,
			button: {
				title: 'Visit S Web Research Center',
				link: 'https://swrc.stechbd.net',
			},
		},
		{
			title: 'Shikkha Web',
			started: 'August 14, 2017',
			closed: null,
			description: <>
				<strong>Shikkha Web</strong> is an educational platform. It is a child company of <strong>S
				Technologies</strong>.
			</>,
			button: {
				title: 'Visit Shikkha Web',
				link: 'https://shikkhaweb.com',
			},
		},
		{
			title: 'S AI Research Center',
			started: 'August 14, 2019',
			closed: null,
			description: <>
				<strong>S AI Research Center</strong> is a research center for researching and developing artificial
				intelligence (AI) related technologies. It is a independent research center of <strong>S
				Technologies</strong>.
			</>,
			button: {
				title: 'Visit S AI Research Center',
				link: 'https://sairc.stechbd.net',
			},
		},
	]
	const events = [
		{
			title: 'Launched as a software company',
			date: 'August 14, 2013',
			description: 'S Technologies was launched as a software company in Bangladesh.',
			button: {
				title: 'Read more',
				link: '/welcome-to-stechbd',
			},
		},
		{
			title: 'Launched S Hosting',
			date: 'June 8, 2015',
			description: 'S Technologies launched S Hosting, a domain, hosting, and server provider company.',
			button: {
				title: 'Read more',
				link: '/launched-shostbd',
			},
		},
		{
			title: 'Launched Ulkaa',
			date: 'August 14, 2015',
			description: 'S Technologies launched Ulkaa as a community company. Ulkaa is a social media website to connect people. It also provide other services like search engine, online shopping, online tool, etc.',
			button: {
				title: 'Read more',
				link: '/launched-ulkaa',
			},
		},
		{
			title: 'Spread services in the overseas countries',
			date: 'October 25, 2015',
			description: 'S Technologies worked with international client for the first time to make services available internationally.',
		},
		{
			title: 'Closed S Hosting',
			date: 'June 1, 2016',
			description: 'S Hosting was closed and merged all the services with S Technologies. Now S Technologies will also provide domain, hosting, server, etc.',
			button: {
				title: 'Read more',
				link: '/closed-shostbd',
			},
		},
		{
			title: 'Launched S Web Research Center',
			date: 'June 16, 2016',
			description: 'S Technologies launched S Web Research Center as a research center for researching and developing web related technologies.',
			button: {
				title: 'Read more',
				link: '/launched-swebrc',
			},
		},
		{
			title: 'Launched Shikkha Web',
			date: 'August 14, 2017',
			description: 'S Technologies launched Shikkha Web as an ed-tech company. Ulkaa is a social media website to connect people. It also provide other services like search engine, online shopping, online tool, etc.',
			button: {
				title: 'Read more',
				link: '/launched-ulkaa',
			},
		},
		{
			title: '10 Years of S Technologies',
			date: 'August 14, 2023',
			description: 'S Technologies is now 10 years old. We are celebrating 10th anniversary of S Technologies. It is a great achievement for us.',
			button: {
				title: 'Read more',
				link: '/10-years-of-stechbd',
			},
		},
		{
			title: 'Launched S AI Research Center',
			date: 'August 14, 2019',
			description: 'S Technologies launched S AI Research Center as a research center for researching and developing artificial intelligence (AI) related technologies.',
			button: {
				title: 'Read more',
				link: '/launched-sairc',
			},
		},
	]

	const tcTexts: string[] = [
		'Web Development',
		'AI App Development',
		'Android App Development',
		'IOS App Development',
		'Windows App Development',
		'UI/UX Design',
		'SEO',
		'Business Solution',
		'Software Development',
		'Domain Registration',
		'Server',
		'Hosting',
		'SaaS',
	]

	const services: (JSX.Element | string)[] = [
		<><Link href="/domain">Domain Name Registration</Link></>,
		'Domain Name Reselling',
		<><Link href="/shared-hosting">Shared Hosting</Link></>,
		<><Link href="/reseller-hosting">Reseller Hosting</Link></>,
		<><Link href="/unmanaged-vps">Unmanaged Virtual Private Server (VPS)</Link></>,
		<><Link href="/managed-vps">Managed Virtual Private Server (VPS)</Link></>,
		<><Link href="/dedicated-server">Dedicated Server</Link></>,
		<><Link href="/web-development">Web App Development</Link></>,
		<><Link href="/ai-development">AI App Development</Link></>,
		'Machine Learning and Deep Learning AI Model Development',
		'Windows App Development',
		'Linux App Development',
		'MacOS App Development',
		'Android App Development',
		'iOS App Development',
		'Software as a Service (SaaS)',
		<><Link href="/school-management">School Management App</Link></>,
		<><Link href="/ui-ux-design">UI/UX Design</Link></>,
		'Graphic Design',
		<><Link href="/seo">Search Engine Optimization (SEO)</Link></>,
		'Digital Marketing Solutions',
		'Business Solutions',
		'Research Solutions',
	]

	return (
		<>
			<div className="relative min-h-screen overflow-hidden isolate -mt-24 px-6 pt-48 pb-24 lg:px-8">
				<AdvancedHeroEffect/>
				<div className="relative h-full min-h-screen">
					<Hero/>
					<hr className="mt-16 border-t-2 border-primary"/>
					<hr className="mt-4 border-t-2 border-primary"/>
					<hr className="mt-4 border-t-2 border-primary"/>
					<div className="mt-16">
						<p className="text-4xl lg:text-6xl max-w-7xl mx-auto text-center text-primary">
							<span className="text-white bg-primary">
								<strong>S Technologies</strong> (<strong>STechBD.Net</strong>)
							</span> is a research-based technology company in Bangladesh that provides software
							development, domain registration, server and hosting, AI development, UI/UX design, and
							other business solutions.
						</p>
					</div>
					<hr className="mt-16 border-t-2 border-primary"/>
					<div className="max-w-7xl mx-auto md:px-20 py-10">
						<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
							What is S Technologies?
						</h2>
						<section className="mt-4">
							<p className="text-2xl text-gray-900 dark:text-gray-100">
								<span className="text-white bg-primary"><strong>S Technologies</strong> (<strong>
								STechBD.Net</strong>)</span> is a research-based technology company in Bangladesh. It
								was founded in 2013. It provides services like domain registration, web hosting, web
								servers, software development, AI model development, software as a service (SaaS), UI/UX
								design, SEO, business solutions, etc. <span className="text-white bg-primary"><strong>S
								Technologies</strong></span> has been working on the research of new technologies,
								especially artificial intelligence, and developing new products.
							</p>
						</section>
					</div>
					<hr className="mt-16 border-t-2 border-primary"/>
					<div className="max-w-7xl mx-auto md:px-20 py-10">
						<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
							What services does S Technologies offer?
						</h2>
						<section className="mt-4">
							<p className="text-2xl text-gray-900 dark:text-gray-100">
								<span className="text-white bg-primary"><strong>S Technologies</strong></span> offer a
								lot of tech-related services. They are:
							</p>
							<ul className="mt-4 ml-8 text-2xl text-gray-800 list-disc list-inside text dark:text-gray-200">
								{ services && (services.map((service: JSX.Element | string, index: number) => (
									<li key={ index }>{ service }</li>
								))) }
							</ul>
						</section>
					</div>
					<hr className="mt-16 border-t-2 border-primary"/>
					<div className="md:px-20 py-10">
						<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
							Child Companies and Centers
						</h2>
						<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
							<span className="text-white bg-primary"><strong>S Technologies</strong></span> has several
							child companies and centers. Here are some of
							them.
						</p>
						<div className="mx-auto max-w-6xl lg:grid lg:grid-cols-3 lg:gap-4 mt-10 justify-items-center">
							{
								companies.map((company, index) => (
									<div
										key={ index }
										className="bg-white shadow-md rounded-lg mb-4 lg:mb-0 px-10 py-6 bg-opacity-30 hover:bg-opacity-100 dark:hover:bg-opacity-0"
									>
										<Bounce>
											<h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
												{ company.title }
											</h2>
											<div className="flex flex-col justify-between h-full">
												<p id="description"
												   className="flex-shrink-0 mt-4 text-center text-gray-800 dark:text-gray-200">
													{ company.description }
												</p>
												<div id="bottom" className="mt-6">
													<a href={ company.button.link } target="_blank"
													   className="block button w-full bg-primary text-white text-center font-bold py-2 px-4 rounded hover:bg-secondary focus:outline-none focus:bg-secondary"
													>
														{ company.button.title }
													</a>
												</div>
											</div>
										</Bounce>
									</div>
								))
							}
						</div>
					</div>
					<hr className="mt-16 border-t-2 border-primary"/>
					<div className="md:px-20 py-10">
						<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
							Evolution of S Technologies
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
							<section className="order-last lg:order-first mt-16 col-span-2">
								<ol className="relative border-s border-primary">
									{
										events.map((event, index) => (
											<li key={ index } className="mb-10 ms-4">
												<div
													className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-primary"></div>
												<time className="mb-1 text-lg font-normal leading-none text-primary">
													{ event.date }
												</time>
												<h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
													{ event.title }
												</h3>
												<p className="text-lg font-normal text-gray-800 dark:text-gray-200">
													{ event.description }
												</p>
												{
													event.button && (
														<Link
															href={ event.button.link }
															className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
														>
															{ event.button.title }

															<svg
																className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg" fill="none"
																viewBox="0 0 14 10"
															>
																<path
																	stroke="currentColor" strokeLinecap="round"
																	strokeLinejoin="round" strokeWidth="2"
																	d="M1 5h12m0 0L9 1m4 4L9 9"
																/>
															</svg>
														</Link>
													)
												}
											</li>
										))
									}
								</ol>
							</section>
							<section className="order-first lg:order-last mt-16 lg:ml-12 lg:my-auto">
								<div className="p-4 bg-white bg-opacity-40">
									<Image
										src="/image/Rising.webp"
										alt="Rising"
										width={ 1000 }
										height={ 1000 }
									/>
								</div>
							</section>
						</div>
					</div>
					<hr className="mt-16 border-t-2 border-primary"/>
					<div className="md:px-20 mt-16 text-center">
						<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
							Contact Us
						</h2>
						<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
							You can contact us for any query, suggestion, or feedback. We are always ready to help you.
						</p>
						<div className="mt-10">
							<Link href="/contact">
								<button
									className="button bg-primary text-white text-center font-bold py-2 px-4 rounded hover:bg-secondary focus:outline-none focus:bg-secondary"
								>
									Contact Us
								</button>
							</Link>
						</div>
					</div>
					<hr className="mt-16 border-t-2 border-primary"/>
					<hr className="mt-4 border-t-2 border-primary"/>
					<hr className="mt-4 border-t-2 border-primary"/>
				</div>
			</div>
		</>
	)
}
