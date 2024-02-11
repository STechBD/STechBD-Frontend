import { JSX } from 'react'
import { Metadata } from 'next'
import Hero from '@/app/contact/hero'


export const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Get in touch with us by filling out the form below and we will get back to you as soon as possible.',
}

/**
 * The Contact page component.
 *
 * @returns { JSX.Element } The Contact page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
		</>
	)
}
