import { JSX } from 'react'
import { Metadata } from 'next'
import Hero from './hero'


/**
 * Metadata for the Open Source page.
 *
 * @constant title { string }
 * @constant description { string }
 * @constant metadata { Metadata }
 *
 * @since 3.0.0
 */
const title: string = 'Open Source'
const description: string = 'We love open source. We use open source. We contribute to open source.'
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
 * Open Source page component.
 * This page will have a hero for the open source project.
 * Also, it will have a list of open source projects.
 *
 * @returns { JSX.Element } Open Source page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
		</>
	)
}
