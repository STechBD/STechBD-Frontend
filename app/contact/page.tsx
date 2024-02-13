import { JSX } from 'react'
import { Metadata } from 'next'
import Hero from '@/app/contact/hero'
import ContactForm from '@/app/contact/form'


/**
 * The metadata for the Contact page.
 *
 * @type { Metadata }
 * @since 3.0.0
 */
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
			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<div>
							<h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
								Contact Information
							</h2>
							<div className="mt-3">
								<p className="text-lg text-gray-900">
									S Technologies Headquarters
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Dhaka - 1000
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
		</>
	)
}
