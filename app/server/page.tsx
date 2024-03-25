import { JSX } from 'react'
import { Metadata } from 'next'
import Hero from './hero'


/**
 * Metadata for the Server page.
 *
 * @constant title { string }
 * @constant description { string }
 * @constant metadata { Metadata }
 *
 * @since 3.0.0
 */
const title: string = 'Server'
const description: string = 'We provide different types of web server. Our server hosting service is the fastest, reliable, and secure.'
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
 * The Server page component.
 *
 * @returns { JSX.Element } The Server page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
		</>
	)
}
