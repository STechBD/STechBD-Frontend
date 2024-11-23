import { JSX } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Hero from './hero'
import { DefaultEffect } from '@/app/_component/background'


/**
 * Metadata for the Server page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Server'
const description: string = 'We provide different types of web server. Our server hosting service is the fastest, reliable, and secure.'
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
 * The Server page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const data = [
		{
			title: 'Shared Hosting',
			description: 'Affordable shared hosting plans for your website. Get started with our shared hosting plans today.',
			link: '/shared-hosting',
		},
		{
			title: 'Reseller Hosting',
			description: 'Affordable reseller hosting plans for your website. Get started with our reseller hosting plans today.',
			link: '/reseller-hosting',
		},
		{
			title: 'Unmanaged VPS',
			description: 'Affordable unmanaged VPS plans for your website. Get started with our unmanaged VPS plans today.',
			link: '/unmanaged-vps',
		},
		{
			title: 'Managed VPS',
			description: 'Affordable managed VPS plans for your website. Get started with our managed VPS plans today.',
			link: '/managed-vps',
		},
		{
			title: 'Dedicated Server',
			description: 'We have been providing Dedicated Server since 2015 with customer satisfaction. Our Dedicated Server is perfect for those who want to host their website on a server that is fully managed by us. We take care of everything from server setup to security updates, so you can focus on your business.',
			link: '/dedicated-server',
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
