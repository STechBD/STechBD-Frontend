import { JSX } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { DefaultEffect } from '@/component/background'
import Hero from './hero'
import { Main, Paragraph, Section } from '@/component/template'


/**
 * The metadata for the Disclaimer page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Disclaimer'
const description: string = 'Disclosure of information and disclaimer of warranties and liabilities.'
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
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<Main full={ false }
			      title="Disclaimer"
			      description="Disclaimer includes the disclosure of information and disclaimer of warranties and liabilities."
			>
				<Section>
					<Paragraph>
						If you require any more information or have any questions about our site’s disclaimer, please
						feel free to contact us by email at <Link href="mailto:support@stechbd.net"><strong>
						support@stechbd.net</strong></Link>.
					</Paragraph>
				</Section>
				<Section title="Disclaimers for S Technologies">
					<Paragraph>
						All the information on this website – <span className="text-white bg-primary"><strong>
						https://www.stechbd.net</strong></span> as well as its subdomains – is published in good faith
						and for general information purpose only. <span className="text-white bg-primary"><strong>S
						Technologies</strong></span> does not make any warranties about the completeness, reliability
						and accuracy of this information. Any action you take upon the information you find on this
						website (<span className="text-white bg-primary"><strong>S Technologies</strong></span>), is
						strictly at your own risk. <span className="text-white bg-primary"><strong>S
						Technologies</strong></span> will not be liable for any losses and/or damages in connection with
						the use of our website.
					</Paragraph>
					<Paragraph>
						From our website, you can visit other websites by following hyperlinks to such external sites.
						While we strive to provide only quality links to useful and ethical websites, we have no control
						over the content and nature of these sites. These links to other websites do not imply a
						recommendation for all the content found on these sites. Site owners and content may change
						without notice and may occur before we have the opportunity to remove a link which may have gone
						‘bad’.
					</Paragraph>
					<Paragraph>
						Please be also aware that when you leave our website, other sites may have different privacy
						policies and terms which are beyond our control. Please be sure to check the <Link
						href="/privacy"><strong>Privacy Policy</strong></Link> of these sites as well as their <Link
						href="/terms"><strong>Terms of Service</strong></Link> before engaging in any business or
						uploading any information.
					</Paragraph>
				</Section>
				<Section title="Consent">
					<Paragraph>
						By using our website, you hereby consent to our disclaimer and agree to our <Link href="/terms">
						<strong>Terms of Service</strong></Link> and <Link href="/privacy"><strong>Privacy
						Policy</strong></Link>.
					</Paragraph>
				</Section>
			</Main>
		</>
	)
}
