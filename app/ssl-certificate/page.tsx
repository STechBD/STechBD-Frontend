import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/app/_component/background'
import { comparisonData, featureData, pricingData } from './data'
import Hero from './hero'
import PricingTable from '@/app/_component/pricingTable'
import ComparisonTable from '@/app/_component/comparisonTable'


/**
 * Metadata for the SSL Certificate page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'SSL Certificate'
const description: string = 'Affordable SSL certificate plans for your website. Get started with our SSL certificate plans today.'
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
 * The SSL Certificate page component.
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
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Pick a Plan
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Choose the best SSL certificate plan for your website.
						We have a variety of SSL certificate plans to meet your website needs.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Compare Plans
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Compare the best SSL certificate plan for your website.
						We have a variety of SSL certificate plans to meet your website needs.
					</p>
					<ComparisonTable feature={ featureData } data={ comparisonData }/>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is SSL Certificate?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						SSL Certificate is a digital certificate that authenticates the identity of a website and
						encrypts information sent to the server using SSL technology. SSL Certificate is essential for
						securing your website and protecting your customers&apos; data. SSL Certificate helps to build
						trust with your customers and improve your website&apos;s search engine ranking.
					</p>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						SSL Certificate also helps to protect your website from cyber attacks and data breaches. SSL
						Certificate is a must-have for any website that collects sensitive information such as credit
						card details, personal information, and login credentials.
					</p>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of SSL Certificate
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						SSL certificate has many benefits. Here are some of the key features of SSL certificate:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>Secure Data Transmission</li>
						<li>Authentication</li>
						<li>Trust</li>
						<li>SEO Ranking</li>
						<li>Protection</li>
						<li>Encryption</li>
						<li>Validation</li>
						<li>Compliance</li>
						<li>Customer Confidence</li>
						<li>Improved Conversion Rate</li>
						<li>Scalability</li>
						<li>Reliability</li>
						<li>Security</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Why S Technologies SSL Certificate?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						We offer the best SSL certificate plans for your website. Our SSL certificate plans are perfect
						for small businesses, e-commerce websites, and personal websites. We provide the following
						features with our SSL certificate plans:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>High Performance</li>
						<li>Low cost</li>
						<li>Easy to use</li>
						<li>Customization</li>
						<li>Secure Data Transmission</li>
						<li>Authentication</li>
						<li>Trust</li>
						<li>SEO Ranking</li>
						<li>Protection</li>
						<li>Encryption</li>
						<li>Validation</li>
						<li>Compliance</li>
						<li>Customer Confidence</li>
						<li>Improved Conversion Rate</li>
						<li>Scalability</li>
						<li>Reliability</li>
						<li>Security</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 SSL Certificate Provider in Bangladesh
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 SSL certificate providers in Bangladesh:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>S Technologies</li>
						<li>STechBD.Net</li>
						<li>SHostBD.Com</li>
						<li>S Hosting Bangladesh</li>
						<li>SSL Bangladesh</li>
						<li>SSL Web BD</li>
						<li>BDWebs</li>
						<li>ExonHost</li>
						<li>Code For Host</li>
						<li>Host Might</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 SSL Certificate Provider in the World
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 SSL certificate providers in the world:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>S Technologies</li>
						<li>STechBD.Net</li>
						<li>SHostBD.Com</li>
						<li>S Hosting Bangladesh</li>
						<li>The SSL</li>
						<li>Namecheap</li>
						<li>Bluehost</li>
						<li>HostGator</li>
						<li>SiteGround</li>
						<li>GoDaddy</li>
					</ol>
				</div>
			</div>
		</>
	)
}
