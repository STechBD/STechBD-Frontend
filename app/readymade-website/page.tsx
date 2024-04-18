import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/app/_component/background'
import { comparisonData, featureData, pricingData } from './data'
import Hero from './hero'
import PricingTable from '@/app/_component/pricingTable'
import ComparisonTable from '@/app/_component/comparisonTable'


/**
 * Metadata for the Readymade Website page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Readymade Website Development'
const description: string = 'We offer a wide range of readymade website development services to help you get started with your online presence at an affordable price.'
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
 * The Shared Hosting page component.
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
						Choose the best readymade website development plan for your online presence.
						We offer a wide range of readymade website development services at an affordable price.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Compare Plans
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Compare the best readymade website development plans for your online presence.
						We have a variety of shared hosting plans to meet your website needs.
					</p>
					<ComparisonTable feature={ featureData } data={ comparisonData }/>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is Readymade Website Development?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Readymade website development is a service that provides pre-built websites that are ready to
						use.
						These websites are designed and developed by professionals and are fully customizable to meet
						your needs.
						Readymade websites are perfect for small businesses, startups, and individuals who want to
						quickly establish an online presence.
						They are easy to use, affordable, and can be customized to suit your brand.
					</p>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						At S Technologies, we offer a wide range of readymade website development services to help you
						get started with your online presence at an affordable price.
						Our readymade websites are designed and developed by professionals and are fully customizable
						to meet your needs.
						We offer a variety of readymade website development plans to suit your budget and website
						requirements.
					</p>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of Readymade Website Development
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Readymade website development offers a number of features that make it an attractive option for
						small businesses, startups, and individuals. Here are some of the key features of readymade
						website development:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>High Quality Design</li>
						<li>Responsive Design</li>
						<li>SEO Friendly</li>
						<li>Easy to Use</li>
						<li>Customizable</li>
						<li>Affordable</li>
						<li>Fast Loading</li>
						<li>Secure</li>
						<li>Scalable</li>
						<li>Support and Maintenance</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Why S Technologies for Readymade Website Development?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						At S Technologies, we offer a wide range of readymade website development services to help you
						get started with your online presence at an affordable price.
						We have a team of experienced professionals who are dedicated to providing high-quality
						readymade websites that are fully customizable to meet your needs.
						We offer a variety of readymade website development plans to suit your budget and website
						requirements.
						Our readymade websites are designed and developed with the latest technologies and are
						optimized for performance, security, and SEO.
						We provide 24/7 support and maintenance to ensure that your website is always up and running.
						Here are some of the key reasons to choose S Technologies for readymade website development:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>High Quality Design</li>
						<li>Responsive Design</li>
						<li>SEO Friendly</li>
						<li>Easy to Use</li>
						<li>Customizable</li>
						<li>Affordable</li>
						<li>Fast Loading</li>
						<li>High Performance</li>
						<li>Reliability</li>
						<li>Secure</li>
						<li>Support and Maintenance</li>
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
						Top 10 Readymade Website Development Companies in Bangladesh
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 readymade website development companies in Bangladesh:
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
						Top 10 Readymade Website Development Companies in the World
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 readymade website development companies in the world:
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
