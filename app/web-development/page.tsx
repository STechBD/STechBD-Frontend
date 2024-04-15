import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'
import Quotation from '@/app/_component/quotation';
import { ServiceCustomField } from '@/app/_data/type';


/**
 * The metadata for the Web App Development page.
 *
 * @type { Metadata }
 * @since 3.0.0
 */
const title: string = 'Web App Development'
const description: string = 'S Technologies is a web development company in Bangladesh. We provide web application development services like custom frontend web app development, backend web app development, and more.'
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
 * The Page component for the Web App Development page.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const customField: ServiceCustomField[] = [
		{
			name: 'Phone',
			type: 'tel',
			description: 'Enter your phone number',
		},
		{
			name: 'Category',
			type: 'select',
			description: 'Select the category of the web app',
			option: [
				'General',
				'Personal, Resume, Portfolio, Showcase or Profile',
				'Blog or Forum',
				'Newspaper, or Magazine',
				'E-commerce',
				'Software as a Service (SaaS)',
				'Social Networking',
				'E-earning or Ed-tech',
				'Other',
			],
			multiple: true,
		},
		{
			name: 'Type',
			type: 'select',
			description: 'Select the app type',
			option: [
				'Frontend',
				'Backend',
				'Fullstack (Separated)',
				'Fullstack (Integrated)',
			],
			multiple: false,
		},
		{
			name: 'Stack',
			type: 'select',
			description: 'Select the technology stack',
			option: {
				frontend: [
					'React.js (Next.js)',
					'Vue.js (Nuxt.js)',
					'Angular (Angular Universal)',
					'Svelte (Sapper)',
					'JavaScript (Vanilla)',
				],
				backend: [
					'TypeScript (Express.js)',
					'Python (Django)',
					'Python (Flask)',
					'PHP (SPE)',
					'PHP (Laravel)',
					'PHP (WordPress)',
					'Ruby (Ruby on Rails)',
					'Java (Spring Boot)',
					'Go (Gin)',
				],
				fullstackSeparated: [
					'React.js (Next.js) + TypeScript (Express.js)',
					'Vue.js (Nuxt.js) + TypeScript (Express.js)',
					'Angular (Angular Universal) + TypeScript (Express.js)',
					'Svelte (Sapper) + TypeScript (Express.js)',
					'JavaScript (Vanilla) + TypeScript (Express.js)',
					'React.js (Next.js) + Python (Django)',
					'Vue.js (Nuxt.js) + Python (Django)',
					'Angular (Angular Universal) + Python (Django)',
					'Svelte (Sapper) + Python (Django)',
					'JavaScript (Vanilla) + Python (Django)',
					'React.js (Next.js) + Python (Flask)',
					'Vue.js (Nuxt.js) + Python (Flask)',
					'Angular (Angular Universal) + Python (Flask)',
					'Svelte (Sapper) + Python (Flask)',
					'JavaScript (Vanilla) + Python (Flask)',
					'React.js (Next.js) + PHP (SPE)',
					'Vue.js (Nuxt.js) + PHP (SPE)',
					'Angular (Angular Universal) + PHP (SPE)',
					'Svelte (Sapper) + PHP (SPE)',
					'JavaScript (Vanilla) + PHP (SPE)',
					'React.js (Next.js) + PHP (Laravel)',
					'Vue.js (Nuxt.js) + PHP (Laravel)',
					'Angular (Angular Universal) + PHP (Laravel)',
					'Svelte (Sapper) + PHP (Laravel)',
					'JavaScript (Vanilla) + PHP (Laravel)',
					'React.js (Next.js) + PHP (WordPress)',
					'Vue.js (Nuxt.js) + PHP (WordPress)',
					'Angular (Angular Universal) + PHP (WordPress)',
					'Svelte (Sapper) + PHP (WordPress)',
					'JavaScript (Vanilla) + PHP (WordPress)',
					'React.js (Next.js) + Ruby (Ruby on Rails)',
					'Vue.js (Nuxt.js) + Ruby (Ruby on Rails)',
					'Angular (Angular Universal) + Ruby (Ruby on Rails)',
					'Svelte (Sapper) + Ruby (Ruby on Rails)',
					'JavaScript (Vanilla) + Ruby (Ruby on Rails)',
					'React.js (Next.js) + Java (Spring Boot)',
					'Vue.js (Nuxt.js) + Java (Spring Boot)',
					'Angular (Angular Universal) + Java (Spring Boot)',
					'Svelte (Sapper) + Java (Spring Boot)',
					'JavaScript (Vanilla) + Java (Spring Boot)',
					'React.js (Next.js) + Go (Gin)',
					'Vue.js (Nuxt.js) + Go (Gin)',
					'Angular (Angular Universal) + Go (Gin)',
					'Svelte (Sapper) + Go (Gin)',
					'JavaScript (Vanilla) + Go (Gin)',
				],
				fullstackIntegrated: [
					'TypeScript (Vanilla) + TypeScript (Express.js)',
					'JavaScript (Vanilla) + Python (Django)',
					'JavaScript (Vanilla) + Python (Flask)',
					'JavaScript (Vanilla) + PHP (SPE)',
					'JavaScript (Vanilla) + PHP (Laravel)',
					'JavaScript (Vanilla) + PHP (WordPress)',
					'JavaScript (Vanilla) + Ruby (Ruby on Rails)',
					'JavaScript (Vanilla) + Java (Spring Boot)',
					'JavaScript (Vanilla) + Go (Gin)',
				],
			},
			optionCondition: {
				frontend: 'Type === "Frontend"',
				backend: 'Type === "Backend"',
				fullstackSeparated: 'Type === "Fullstack (Separated)"',
				fullstackIntegrated: 'Type === "Fullstack (Integrated)"',
			},
			multiple: false,
		},
		{
			name: 'Features',
			type: 'list',
			description: 'Select the features',
			option: [
				'WordPress Theme Development',
				'WordPress Plugin Development',
				'Progressive Web App (PWA)',
				'Search Engine Optimization (SEO)',
				'Accessibility',
				'Internationalization',
				'Offline Support',
				'Push Notifications',
				'Authentication',
				'Authorization',
				'User Management',
				'User Profile',
				'Community Management',
				'Admin Panel',
				'Content Management System (CMS)',
				'File Management System',
				'Payment Gateway Integration',
				'Social Media Integration',
				'Analytics',
				'Feedback System',
				'Rating System',
				'Review System',
				'Comment System',
				'Forum System',
				'Chat System',
				'Messaging System',
				'Other',
			],
		},
		{
			name: 'Budget',
			type: 'slider',
			description: 'Select the budget range',
			min: {
				frontend: {
					bdt: 10000,
					usd: 100,
				},
				backend: {
					bdt: 10000,
					usd: 100,
				},
				fullstackSeparated: {
					bdt: 20000,
					usd: 200,
				},
				fullstackIntegrated: {
					bdt: 15000,
					usd: 150,
				},
			},
			max: {
				frontend: {
					bdt: 10000000,
					usd: 100000,
				},
				backend: {
					bdt: 10000000,
					usd: 100000,
				},
				fullstackSeparated: {
					bdt: 10000000,
					usd: 100000,
				},
				fullstackIntegrated: {
					bdt: 10000000,
					usd: 100000,
				},
			},
			step: {
				frontend: {
					bdt: 1000,
					usd: 10,
				},
				backend: {
					bdt: 1000,
					usd: 10,
				},
				fullstackSeparated: {
					bdt: 1000,
					usd: 10,
				},
				fullstackIntegrated: {
					bdt: 1000,
					usd: 10,
				},
			},
		},
		{
			name: 'Deadline',
			type: 'select',
			description: 'Select the deadline',
			option: [
				'1-2 Weeks',
				'1-3 Months',
				'3-6 Months',
				'6-12 Months',
				'1-2 Years',
			],
		},
		{
			name: 'Support',
			type: 'select',
			description: 'Describe the project',
			option: [
				'1 Week',
				'2 Weeks',
				'1 Month',
				'2 Months',
				'3 Months',
				'6 Months',
				'1 Year',
				'2 Years',
				'3 Years',
				'5 Years',
				'10 Years',
			],
		},
		{
			name: 'Reference Website',
			type: 'textarea',
			description: 'Enter the reference website(s)',
		},
	]
	const jsonld = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		url: 'https://www.stechbd.net',
		name: 'S Technologies',
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+8801935446721',
			contactType: 'Customer service',
		},
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'S Technologies Headquarters',
			postalCode: '1000',
			addressLocality: 'Dhaka',
			addressCountry: 'BD',
		},
		sameAs: [
			'https://www.facebook.com/STechBD.Net',
			'https://www.linkedin.com/company/STechBD',
			'https://www.instagram.com/STechBD',
			'https://www.twitter.com/STechBD_Net',
		],
	}

	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<DefaultEffect/>
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<div>
							<h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
								Contact Information
							</h2>
							<div className="mt-3 text-lg text-gray-900 dark:text-gray-100">
								<p>
									<strong>
										S Technologies Headquarters
									</strong>
								</p>
								<p className="mt-1">
									Dhaka City, Dhaka
								</p>
								<p className="mt-1">
									Bangladesh
								</p>
								<p className="mt-1">
									Phone: <a href="tel:+8801935446721">+(880) 1935-446721</a>
								</p>
								<p className="mt-1">
									Email: <a href="mailto:contact@stechbd.net">contact@stechbd.net</a>
								</p>
							</div>
						</div>
						<div className="mt-12 lg:mt-0 lg:col-span-2">
							<h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
								Get Project Quotation
							</h2>
							<p className="mt-3 text-lg text-gray-900 dark:text-gray-100">
								Fill out the form below and we will get back to you as soon as possible.
							</p>
							<div className="mt-12 p-8 bg-gray-100 rounded-lg dark:bg-gray-900">
								<Quotation custom={ customField }/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={ { __html: JSON.stringify(jsonld) } }
			/>
		</>
	)
}
