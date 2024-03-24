import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'
import Link from 'next/link';


/**
 * The metadata for the Disclaimer page.
 *
 * @constant title { string }
 * @constant description { string }
 * @constant metadata { Metadata }
 *
 * @since 3.0.0
 */
const title = 'Disclaimer'
const description = 'Disclosure of information and disclaimer of warranties and liabilities.'
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
 * The Disclaimer page component.
 *
 * @returns { JSX.Element } The Disclaimer page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<DefaultEffect/>
				<h2 className="lg:px-16 md:px-20 py-10text-4xl font-bold tracking-tight text-primary sm:text-6xl">
					Disclaimer
				</h2>
				<p className="lg:px-16 md:px-20 py-10 text-xl text-gray-800 dark:text-gray-200">
					Disclaimer includes the disclosure of information and disclaimer of warranties and liabilities.
				</p>
				<div className="lg:px-16 md:px-20 py-10">
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						If you require any more information or have any questions about our site’s disclaimer, please
						feel free to contact us by email at <Link
						href="mailto:support@stechbd.net"><strong>support@stechbd.net</strong></Link>.
					</p>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Disclaimers for S Technologies
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						All the information on this website – https://www.stechbd.net as well as its subdomains – is
						published in good faith and for general information purpose only. <span
						className="text-white bg-primary"><strong>S Technologies</strong></span> does not make any
						warranties about the completeness, reliability and accuracy of this information. Any action you
						take upon the information you find on this website (<span
						className="text-white bg-primary"><strong>S Technologies</strong></span>), is strictly at your
						own risk. <span className="text-white bg-primary"><strong>S Technologies</strong></span> will
						not be liable for any losses and/or damages in connection with the use of our website.
					</p>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						From our website, you can visit other websites by following hyperlinks to such external sites.
						While we strive to provide only quality links to useful and ethical websites, we have no control
						over the content and nature of these sites. These links to other websites do not imply a
						recommendation for all the content found on these sites. Site owners and content may change
						without notice and may occur before we have the opportunity to remove a link which may have gone
						‘bad’.
					</p>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						Please be also aware that when you leave our website, other sites may have different privacy
						policies and terms which are beyond our control. Please be sure to check the <Link
						href="/privacy"><strong>Privacy Policy</strong></Link> of these sites as well as their <Link
						href="/terms"><strong>Terms of Service</strong></Link> before engaging in any business or
						uploading any information.
					</p>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Consent
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						By using our website, you hereby consent to our disclaimer and agree to our <Link href="/terms">
						<strong>Terms of Service</strong></Link> and <Link href="/privacy"><strong>Privacy
						Policy</strong></Link>.
					</p>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Update
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						Should we update, amend or make any changes to this document, those changes will be prominently
						posted here.
					</p>
				</div>
			</div>
		</>
	)
}
