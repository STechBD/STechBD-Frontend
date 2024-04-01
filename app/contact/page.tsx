import { JSX } from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'
import ContactForm from '@/app/contact/form'


/**
 * The metadata for the Contact page.
 *
 * @type { Metadata }
 * @since 3.0.0
 */
const title: string = 'Contact Us'
const description: string = 'Get in touch with us by filling out the form below and we will get back to you as soon as possible.'
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
 * The Contact page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
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
							<div className="mt-3">
								<p className="text-lg text-gray-900">
									<strong>
										S Technologies Headquarters
									</strong>
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Dhaka
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Bangladesh
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Phone: <a href="tel:+8801935446721">+(880) 1935-446721</a>
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Email: <a href="mailto:contact@stechbd.net">contact@stechbd.net</a>
								</p>
							</div>
						</div>
						<div className="mt-12 lg:mt-0 lg:col-span-2">
							<ContactForm/>
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
