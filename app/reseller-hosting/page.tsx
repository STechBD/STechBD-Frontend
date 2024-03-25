import { JSX } from 'react'
import { Metadata } from 'next'
import { comparisonData, featureData, pricingData } from './data'
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
						Choose the best reseller hosting plan for your website.
						We have a variety of reseller hosting plans to meet your website needs.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Compare Plans
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Compare the best reseller hosting plan for your website.
						We have a variety of reseller hosting plans to meet your website needs.
					</p>
					<ComparisonTable feature={ featureData } data={ comparisonData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is Reseller Hosting?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Reseller hosting is a type of web hosting where the account owner has the ability to use his or
						her allotted hard drive space and bandwidth to host websites on behalf of third parties. The
						reseller purchases the host&apos;s services wholesale and then sells them to customers, possibly
						for a profit. A certain portion of hard drive space and bandwidth is allocated to the reseller
						account. The reseller may rent a dedicated server from a hosting company or resell shared
						hosting services.
					</p>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Reseller hosting is ideal for small businesses and individuals who want to start their own web
						hosting business. Reseller hosting is also a good option for web designers and developers who
						want to add web hosting to their services. And reseller hosting is also a good option for those
						with multiple websites who want to consolidate their hosting.
					</p>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of Reseller Hosting
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Reseller hosting has many benefits. Here are some of the key features of reseller hosting:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text--gray-100">
						<li>Good for starting a business</li>
						<li>Low cost</li>
						<li>Easy to use</li>
						<li>Customization</li>
						<li>Scalability</li>
						<li>Reliability</li>
						<li>Security</li>
						<li>Support</li>
					</ol>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Why S Technologies Reseller Hosting?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						We have been providing reseller hosting since 2015 with customer satisfaction. Our reseller
						hosting is ideal for small businesses and individuals who want to start their own web hosting
						business with a reliable and affordable web hosting provider. Get started with our reseller
						hosting plans today. Here are some of the key features of our reseller hosting:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text--gray-100">
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
						<li>Free Domain Reseller Account</li>
						<li>cPanel Control Panel</li>
						<li>WHM Hosting Control Panel</li>
					</ol>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 Shared Hosting Provider in Bangladesh
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 shared hosting providers in Bangladesh:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text--gray-100">
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
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 Shared Hosting Provider in the World
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 shared hosting providers in the world:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text--gray-100">
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
