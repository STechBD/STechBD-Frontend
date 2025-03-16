import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/component/background'
import Hero from './hero'
import { data } from './data'
import Accordion from '@/component/accordion'


/**
 * The metadata for the Frequently Asked Questions page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Frequency Asked Questions (FAQ)'
const description: string = 'Our frequently asked questions page provides answers to common questions.'
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
 * The Frequently Asked Questions page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8 text">
				<DefaultEffect/>
				<h2 className="lg:px-16 md:px-20 mt-10 text-6xl font-bold tracking-tight text-primary lg:text-6xl">
					Frequently Asked Questions (FAQ)
				</h2>
				<p className="lg:px-16 md:px-20 py-10 text-xl text-gray-800 dark:text-gray-200">
					Our frequently asked questions page provides answers to common questions.
				</p>
				<div className="bg-white lg:px-16 md:px-20 py-10 rounded-xl dark:bg-gray-900">
					<Accordion data={ data }/>
				</div>
			</div>
		</>
	)
}
