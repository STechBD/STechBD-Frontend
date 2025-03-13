import { JSX } from 'react'
import { Metadata } from 'next'
import Error from '@/component/error'


/**
 * The metadata for the 404 Error page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = '404 Error'
const description: string = 'The page you requested was not found. Please check the URL and try again.'
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
 * The 404 Error page component.
 *
 * @returns { JSX.Element } The 404 Error component.
 * @since 3.0.0
 */
export default function E404(): JSX.Element {
	return (
		<Error
			title="404"
			description="The page you requested was not found. Please check the URL and try again."
		/>
	)
}
