import { JSX } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Hero from './hero'
import { DefaultEffect } from '@/app/_component/background'


/**
 * Metadata for the Service page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Service'
const description: string = 'We provide different types of services like website development, app development, product design, etc.'
export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
	twitter: {
		title,
		description,
	},
}


/**
 * The Service page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const services = {
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
	}
	const data = [
		{
			title: 'AI App Development 🎉',
			description: 'Artificial Intelligence (AI) app development for web and native device. AI app can help you to automate your business, increase productivity, and reduce cost.',
			link: '/ai-development',
		},
		{
			title: 'Web App Development',
			description: 'Frontend and backend app development for website and web application. We use the latest technology to build a fast, secure, and reliable web app.',
			link: '/web-development',
		},
		{
			title: 'Readymade Website',
			description: 'Pre-developed frontend and backend app for website. Readymade website can help you to launch your website quickly and easily.',
			link: '/readymade-website',
		},
		{
			title: 'Android App Development',
			description: 'Android app development for mobile, tablet, and TV. Android app can help you to reach more customer and increase your revenue.',
			link: '/android-development',
		},
		{
			title: 'iOS App Development',
			description: 'iOS app development for iPhone, iPad, and Apple Watch. iOS app can help you to reach more customer and increase your revenue.',
			link: '/ios-development',
		},
		{
			title: 'Windows App Development',
			description: 'Windows app development for PC. Windows app can help you to reach more customer and increase your revenue.',
			link: '/windows-development',
		},
		{
			title: 'Game Development',
			description: 'Game development for PC, mobile, and console. Game development can help you to reach more customer and increase your revenue.',
			link: '/game-development',
		},
		{
			title: 'UI/UX Design',
			description: 'UI/UX design for web and native app. UI/UX design can help you to improve user experience and increase user engagement.',
			link: '/ui-ux-design',
		},
		{
			title: 'Search Engine Optimization',
			description: 'Search Engine Optimization for website. SEO can help you to rank your website on search engine and increase your website traffic.',
			link: '/seo',
		},
		{
			title: 'Graphic Design',
			description: 'Logo, banner, poster, and other graphical design for personal and business use. Graphic design can help you to create a unique brand identity and increase your brand awareness.',
			link: '/graphic-design',
		},
	]

	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<DefaultEffect/>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Our Services
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						We provide different types of web server. Our server hosting service is the fastest, reliable,
						and secure.
					</p>
					<div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
						{ data.map((item, index) => (
							<Link
								key={ index }
								href={ item.link }
								className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl"
							>
								<h3 className="text-xl font-bold text-primary">
									{ item.title }
								</h3>
								<p className="mt-2 text-gray-500">
									{ item.description }
								</p>
							</Link>
						)) }
					</div>
				</div>
			</div>
		</>
	)
}
