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
			<div className="relative isolate px-6 lg:px-8">
				<DefaultEffect/>
				<div className="md:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Pricing Table
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Domain price varies from domain to domain. We will help you to choose a domain name for your
						website. Here is the list of domain price.
					</p>
					<List/>
				</div>
				<div className="px-20 py-10"></div>
			</div>
		</>
	)
}
