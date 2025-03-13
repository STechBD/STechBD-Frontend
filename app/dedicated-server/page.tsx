import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/component/background'
import { comparisonData, featureData, pricingData } from './data'
import Hero from './hero'
import PricingTable from '@/component/pricingTable'
import ComparisonTable from '@/component/comparisonTable'


/**
 * Metadata for the Dedicated Server page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Dedicated Server'
const description: string = 'Affordable dedicated server plans for your website. Get started with our dedicated server plans today.'
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
 * The Dedicated Server page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<DefaultEffect/>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Pick a Plan
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Choose the best dedicated server plan for your website.
						We have a variety of dedicated server plans to meet your website needs.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Compare Plans
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Compare the best dedicated server plan for your website.
						We have a variety of dedicated server plans to meet your website needs.
					</p>
					<ComparisonTable feature={ featureData } data={ comparisonData }/>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is Dedicated Server?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Dedicated Server is the most economical option for hosting, as many people share the overall
						cost of server maintenance. It is perfect for personal websites, small and medium businesses
						that do not require all the resources of a server. Dedicated Server is also a popular option if
						you run a simple blog or forum. If you are starting a new website, dedicated server is the most
						cost-effective way of doing so. Dedicated Server is the most economical option for hosting, as
						many people share the overall cost of server maintenance. It is perfect for personal websites,
						small and medium businesses that do not require all the resources of a server. Dedicated Server
						is also a popular option if you run a simple blog or forum. If you are starting a new website,
						dedicated server is the most cost-effective way of doing so.
					</p>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Dedicated Server is the most economical option for hosting, as many people share the overall
						cost of server maintenance. It is perfect for personal websites, small and medium businesses
						that do not require all the resources of a server. Dedicated Server is also a popular option if
						you run a simple blog or forum. If you are starting a new website, dedicated server is the most
						cost-effective way of doing so. Dedicated Server is the most economical option for hosting, as
						many people share the overall cost of server maintenance. It is perfect for personal websites,
						small and medium businesses that do not require all the resources of a server. Dedicated Server
						is also a popular option if you run a simple blog or forum. If you are starting a new website,
						dedicated server is the most cost-effective way of doing so.
					</p>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of Dedicated Server
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Dedicated Server has many benefits. Here are some of the key features of dedicated server:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>High Performance</li>
						<li>Low cost</li>
						<li>Easy to use</li>
						<li>Customization</li>
						<li>Scalability</li>
						<li>Reliability</li>
						<li>Security</li>
						<li>Support</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Why S Technologies Dedicated Server?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						We offer the best dedicated server plans in Bangladesh. Our dedicated server plans are perfect
						for
						small businesses, personal websites, and blogs. We provide the following features with our
						managed VPS plans:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>High Performance</li>
						<li>Reliability</li>
						<li>Security</li>
						<li>Support</li>
						<li>99.9% Uptime</li>
						<li>Free SSL Certificate 🔥</li>
						<li>Free Daily Backup</li>
						<li>Latest PHP, MySQL, NodeJS, Python, Ruby, and Perl</li>
						<li>Terminal Access 💥</li>
						<li>SSH Access</li>
						<li>Git</li>
						<li>Softaculous</li>
						<li>WordPress Manager</li>
						<li>Free Website Migration</li>
						<li>cPanel Control Panel</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 Dedicated Server Provider in Bangladesh
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 dedicated server providers in Bangladesh:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>S Technologies</li>
						<li>STechBD.Net</li>
						<li>SHostBD.Com</li>
						<li>S Hosting Bangladesh</li>
						<li>BDWebs</li>
						<li>ExonHost</li>
						<li>Code For Host</li>
						<li>Host Might</li>
						<li>Web Host BD</li>
						<li>Host Clave</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 Dedicated Server Provider in the World
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 dedicated server providers in the world:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>S Technologies</li>
						<li>STechBD.Net</li>
						<li>SHostBD.Com</li>
						<li>S Hosting Bangladesh</li>
						<li>Namecheap</li>
						<li>Bluehost</li>
						<li>HostGator</li>
						<li>SiteGround</li>
						<li>GoDaddy</li>
						<li>Hostinger</li>
					</ol>
				</div>
			</div>
		</>
	)
}
