import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'
import List from '@/app/domain/list'


/**
 * Metadata for the Domain Registration page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Domain Name Registration'
const description: string = 'We will help you to choose a domain name for your website. S Technologies provides domain registration service in cheap rate. Here is the list of domain price.'
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
 * Domain Registration page
 *
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
						Pricing Table
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Domain price varies from domain to domain. We will help you to choose a domain name for your
						website. Here is the list of domain price.
					</p>
					<List/>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is Domain Name?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						A domain name is the address of your website that people type in the browser URL bar to visit
						your website. In simple terms, if your website was a house, then your domain name will be its
						address. For example, S Technologies domain name is stechbd.com. To create a website, you need
						both domain name and web hosting. However, it is important to remember that they are two
						separate services, and you can buy them from different providers.
					</p>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Domain names are used to identify one or more IP addresses. For example, the domain
						name <i>stechbd.net</i> represents about a dozen IP addresses. Domain names are used in URLs to
						identify particular Web pages. For example, in the URL <i>http://www.stechbd.net/index.html</i>,
						the domain name is <i>stechbd.net</i>.
					</p>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of Domain Name
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Domain name has many benefits. Here are some of the key features of domain name:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>Brand Identity</li>
						<li>Professionalism</li>
						<li>SEO Benefits</li>
						<li>Credibility</li>
						<li>Portability</li>
						<li>Ownership</li>
						<li>Flexibility</li>
						<li>Memorability</li>
						<li>Security</li>
						<li>Accessibility</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Why S Technologies Domain Name?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						We offer the best domain name service in Bangladesh. Our domain name services are perfect for
						small businesses, personal websites, and blogs. We provide the following features with our
						domain name services:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>Low Cost</li>
						<li>Easy to Use</li>
						<li>Reliability</li>
						<li>Security</li>
						<li>Support</li>
						<li>Whois</li>
						<li>Domain Lock</li>
						<li>Domain Forwarding</li>
						<li>Domain Masking</li>
						<li>Domain Transfer</li>
						<li>Domain Renewal</li>
						<li>Domain Privacy Protection</li>
						<li>Domain Parking</li>
						<li>Email Forwarding</li>
						<li>Domain Reselling</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 Domain Name Provider in Bangladesh
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 domain name providers in Bangladesh:
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
						Top 10 Domain Name Provider in the World
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 domain name providers in the world:
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
