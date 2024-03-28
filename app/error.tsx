'use client'

import { JSX } from 'react'
import { Metadata } from 'next'
import Error from '@/app/_component/error'


/**
 * The metadata for the General Error page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Error'
const description: string = 'Something went wrong. Please check the URL and try refreshing the page.'
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
 * The General Error page component.
 *
 * @returns { JSX.Element } The General Error component.
 * @since 3.0.0
 */
export default function EGeneral(): JSX.Element {
	return (
		<Error
			title="Unknown"
			description="Something went wrong. Please check the URL and try refreshing the page."
		/>
	)
}
