import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/component/background'
import { comparisonData, featureData, pricingData } from './data'
import Hero from './hero'
import PricingTable from '@/component/pricingTable'
import ComparisonTable from '@/component/comparisonTable'


/**
 * Metadata for the Managed VPS page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Managed VPS'
const description: string = 'Affordable managed VPS plans for your website. Get started with our managed VPS plans today.'
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
 * The Managed VPS page component.
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
						Choose the best managed VPS plan for your website.
						We have a variety of managed VPS plans to meet your website needs.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Compare Plans
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Compare the best managed VPS plan for your website.
						We have a variety of managed VPS plans to meet your website needs.
					</p>
					<ComparisonTable feature={ featureData } data={ comparisonData }/>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is Managed VPS?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Managed VPS is a type of web hosting where the hosting provider manages the server for you. You
						do not have to worry about server maintenance, security, or updates. S Technologies will take
						care of everything for you. You can focus on your website and your business. Managed VPS is
						perfect for those who want to host their website on a server that is fully managed by us. We
						take care of everything from server setup to security updates, so you can focus on your
						business. Managed VPS is the most economical option for hosting, as many people share the
						overall cost of server maintenance.
					</p>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Managed VPS is the most economical option for hosting, as many people share the overall cost of
						server maintenance. It is perfect for personal websites, small and medium businesses that do not
						require all the resources of a server. Managed VPS is also a popular option if you run a simple
						blog or forum. If you are starting a new website, managed VPS is the most cost-effective way of
						doing so. Managed VPS is the most economical option for hosting, as many people share the
						overall cost of server maintenance. It is perfect for personal websites, small and medium
						businesses that do not require all the resources of a server. Managed VPS is also a popular
						option if you run a simple blog or forum.
					</p>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of Managed VPS
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Managed VPS has many benefits. Here are some of the key features of managed VPS:
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
						Why S Technologies Managed VPS?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						We offer the best managed VPS plans in Bangladesh. Our managed VPS plans are perfect for
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
						Top 10 Managed VPS Provider in Bangladesh
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 managed VPS providers in Bangladesh:
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
						Top 10 Managed VPS Provider in the World
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 managed VPS providers in the world:
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
