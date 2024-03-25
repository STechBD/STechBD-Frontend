import { JSX } from 'react'
import { Metadata } from 'next'
import { pricingData, featureData, comparisonData } from './data'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'
import PricingTable from '@/app/_component/pricingTable'
import ComparisonTable from '@/app/_component/comparisonTable'


/**
 * Metadata for the Reseller Hosting page.
 *
 * @constant title { string }
 * @constant description { string }
 * @constant metadata { Metadata }
 *
 * @since 3.0.0
 */
const title: string = 'Reseller Hosting'
const description: string = 'We have been providing shared hosting since 2015 with customer satisfaction. Reseller hosting is ideal for small businesses and individuals who want to start their own web hosting business with a reliable and affordable web hosting provider. Get started with our reseller hosting plans today.'
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
 * The Reseller Hosting page component.
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
						Choose the best shared hosting plan for your website.
						We have a variety of shared hosting plans to meet your website needs.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Compare Plans
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Compare the best shared hosting plan for your website.&nbsp;
						We have a variety of shared hosting plans to meet your website needs.
					</p>
					<ComparisonTable feature={ featureData } data={ comparisonData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is Shared Hosting?
					</h2>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						Shared hosting is a type of web hosting where a single physical server hosts multiple websites.
						Many users utilize the resources on a single server, which keeps the costs low. Users each get a
						section of a server in which they can host their website files.
						Shared servers can host hundreds of users.
						Each customer using the shared hosting platform’s server has access to features like databases,
						monthly traffic, disk space, email accounts, FTP accounts, and other add-ons offered by the
						host. System resources are shared on-demand by customers on the server, and each gets a
						percentage of everything from RAM and CPU, and other elements such as the single MySQL server,
						Apache server, and mail server.
					</p>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						Shared hosting is the most economical option for hosting, as many people share the overall cost
						of server maintenance.
						It is perfect for personal websites, small and medium businesses that do not require all the
						resources of a server.
						Shared hosting is also a popular option if you run a simple blog or forum.
						If you are starting a new website, shared hosting is the most cost-effective way of doing so.
					</p>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of Shared Hosting
					</h2>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						<ol className="list-decimal list-inside">
							<li>Low cost</li>
							<li>Easy to use</li>
							<li>Customization</li>
							<li>Scalability</li>
							<li>Reliability</li>
							<li>Security</li>
							<li>Support</li>
						</ol>
					</p>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Why S Technologies Shared Hosting?
					</h2>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						<ol className="list-decimal list-inside">
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
						</ol>
					</p>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 Shared Hosting Provider in Bangladesh
					</h2>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						<ol className="list-decimal list-inside">
							<li>S Technologies</li>
							<li>STechBD.Net</li>
							<li>SHostBD.Com</li>
							<li>BDWebs</li>
							<li>ExonHost</li>
							<li>Code For Host</li>
							<li>Host Might</li>
							<li>Web Host BD</li>
							<li>Host Clave</li>
							<li>Web Host BD</li>
						</ol>
					</p>
				</div>
			</div>
		</>
	)
}
