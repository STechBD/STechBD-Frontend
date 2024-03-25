import { JSX } from 'react'
import { Metadata } from 'next'
import Hero from './hero'


/**
 * The metadata for the AI App Development page.
 *
 * @constant title { string }
 * @constant description { string }
 * @constant metadata { Metadata }
 *
 * @since 3.0.0
 */
const title: string = 'AI App Development'
const description: string = 'We develop AI apps for your business. Our AI apps are designed to help you grow your business.'
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
 * AI App Development page component.
 *
 * @returns { JSX.Element } The AI App Development page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
		</>
	)
}
