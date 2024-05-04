import { JSX } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'


/**
 * The metadata for the Sitemap page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Sitemap'
const description: string = 'All the pages of the website.'
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
 * The Stand with Palestine page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const pages = [
		{
			title: 'Homepage',
			link: '/',
		},
		{
			title: 'About S Technologies',
			link: '/about',
		},
		{
			title: 'Blog',
			link: '/blog',
		},
		{
			title: 'Research and Development Wing',
			link: '/rnd',
		},
		{
			title: 'Careers',
			link: '/careers',
		},
		{
			title: 'Contact Us',
			link: '/contact',
		},
		{
			title: 'Privacy Policy',
			link: '/privacy',
		},
		{
			title: 'Terms of Service',
			link: '/terms',
		},
		{
			title: 'Disclaimer',
			link: '/disclaimer',
		},
		{
			title: 'Refund Policy',
			link: '/refund',
		},
		{
			title: 'Sitemap',
			link: '/sitemap',
		},
		{
			title: 'Server',
			link: '/server',
		},
		{
			title: 'Server Information',
			link: '/server-info',
		},
		{
			title: 'Shared Hosting',
			link: '/shared-hosting',
		},
		{
			title: 'Reseller Hosting',
			link: '/reseller-hosting',
		},
		{
			title: 'Unmanaged Virtual Private Server (VPS)',
			link: '/unmanaged-vps',
		},
		{
			title: 'Managed Virtual Private Server (VPS)',
			link: '/managed-vps',
		},
		{
			title: 'Dedicated Hosting',
			link: '/dedicated-hosting',
		},
		{
			title: 'Domain Name Registration',
			link: '/domain',
		},
		{
			title: 'Service',
			link: '/service',
		},
		{
			title: 'AI App Development',
			link: '/ai-development',
		},
		{
			title: 'Web App Development',
			link: '/web-development',
		},
		{
			title: 'Readymade Website Development',
			link: '/readymade-website',
		},
		{
			title: 'School Management System',
			link: '/readymade-website',
		},
		{
			title: 'Android App Development',
			link: '/android-development',
		},
		{
			title: 'iOS App Development',
			link: '/ios-development',
		},
		{
			title: 'Windows App Development',
			link: '/windows-development',
		},
		{
			title: 'UI/UX Development',
			link: '/ui-ux-development',
		},
		{
			title: 'Search Engine Optimization',
			link: '/seo',
		},
	]

	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8 text">
				<DefaultEffect/>
				<h2 className="lg:px-16 md:px-20 pt-10 text-6xl tracking-tight text-primary sm:text-4xl">
					<strong>
						Sitemap of S Technologies
					</strong>
				</h2>
				<div className="lg:px-16 md:px-20 py-10">
					<ol className="mb-4 ml-8 text-xl text-gray-800 list-decimal list-inside dark:text-gray-200">
						{ pages.map((page, index) => (
							<li key={ index }>
								<Link
									href={ page.link }
									className="text-primary hover:underline"
								>
									{ page.title }
								</Link>
							</li>
						)) }
					</ol>
				</div>
			</div>
		</>
	)
}
