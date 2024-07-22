import { JSX } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'
import { Main, Paragraph, Section, UList } from '@/app/_component/template'


/**
 * The metadata for the Privacy Policy page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Privacy Policy'
const description: string = 'Our privacy policy outlines the information we collect and how we use it.'
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
 * The Privacy Policy page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<Main full={ false }
			      title="Privacy Policy"
			      description="Our privacy policy outlines the information we collect and how we use it."
			>
				<Section>
					<Paragraph>
						This privacy policy sets out how <span
						className="text-white bg-primary"><strong>S Technologies</strong></span> uses and protects any
						information that you give <span
						className="text-white bg-primary"><strong>S Technologies</strong></span> when you use this
						website.<span className="text-white bg-primary"><strong>S Technologies</strong></span> is
						committed to ensuring that your privacy is protected. Should we ask you to provide certain
						information by which you can be identified when using this website, then you can be assured that
						it will only be used in accordance with this privacy statement.<span
						className="text-white bg-primary"><strong>S Technologies</strong></span> may change this policy
						from time to time by updating this page. You should check this page from time to time to ensure
						that you are happy with any changes. This policy is effective from August 14, 2013.
					</Paragraph>
				</Section>
				<Section title="Information We Collect">
					<Paragraph>
						We may collect the following information:
					</Paragraph>
					<UList list={ [
						'Name',
						'Contact Information including email address',
						'Demographic Information such as postcode, preferences and interests'
					] }/>
				</Section>
				<Section title="What We Do With The Information We Gather">
					<Paragraph>
						We require this information to understand your needs and provide you with a better service, and
						in particular for the following reasons:
					</Paragraph>
					<UList list={ [
						'Internal record keeping.',
						'We may use the information to improve our products and services.',
						'We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.',
						'From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone or mail. We may use the information to customize the website according to your interests.',
					] }/>
				</Section>
				<Section title="Security">
					<Paragraph>
						We are committed to ensuring that your information is secure. In order to prevent unauthorised
						access or disclosure, we have put in place suitable physical, electronic and managerial
						procedures to safeguard and secure the information we collect online.
					</Paragraph>
				</Section>
				<Section title="How We Use Cookies">
					<Paragraph>
						A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once
						you agree, the file is added and the cookie helps analyse web traffic or lets you know when you
						visit a particular site. Cookies allow web applications to respond to you as an individual.
					</Paragraph>
					<Paragraph>
						The web application can tailor its operations to your needs, likes and dislikes by gathering and
						remembering information about your preferences. We use traffic log cookies to identify which
						pages are being used. This helps us analyse data about web page traffic and improve our website
						in order to tailor it to customer needs. We only use this information for statistical analysis
						purposes and then the data is removed from the system. Overall, cookies help us provide you with
						a better website, by enabling us to monitor which pages you find useful and which you do not. A
						cookie in no way gives us access to your computer or any information about you, other than the
						data you choose to share with us. You can choose to accept or decline cookies. Most web browsers
						automatically accept cookies, but you can usually modify your browser setting to decline cookies
						if you prefer. This may prevent you from taking full advantage of the website.
					</Paragraph>
				</Section>
				<Section title="Links To Other Websites">
					<Paragraph>
						Our website may contain links to other websites of interest. However, once you have used these
						links to leave our site, you should note that we do not have any control over that other
						website. Therefore, we cannot be responsible for the protection and privacy of any information
						which you provide whilst visiting such sites and such sites are not governed by this privacy
						statement. You should exercise caution and look at the privacy statement applicable to the
						website in question.
					</Paragraph>
				</Section>
				<Section title="Fraudulent Orders">
					<Paragraph>
						<span className="text-white bg-primary"><strong>S Technologies</strong></span> use appropriate
						fraud screening methods to ensure that all payments accepted by <span
						className="text-white bg-primary"><strong>S Technologies</strong></span> are legal and in no way
						associated with fraud. If at any time a order / payment is flagged for fraud an immediate refund
						will be issued and proof of account ownership will be requested whether it be proof of identity
						or any other means. If you are found to be ordering services on a fraudulent basis then <span
						className="text-white bg-primary"><strong>STechnologies</strong></span> reserve the right to
						hand any information onto the appropriate legal authorities for further investigation.
					</Paragraph>
				</Section>
				<Section title="Controlling Your Personal Information">
					<Paragraph>
						You may choose to restrict the collection or use of your personal information in the
						following ways:
					</Paragraph>
					<UList list={ [
						'Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.',
						<>
							If you have previously agreed to us using your personal information for direct marketing
							purposes, you may change your mind at any time by writing to or emailing us at <Link
							href="mailto:billing@stechbd.net"><strong>billing@stechbd.net</strong></Link>.
						</>,
					] }/>
					<Paragraph>
						We will not sell, distribute or lease your personal information to third parties unless we have
						your permission or are required by law to do so. We may use your personal information to send
						you promotional information about third parties which we think you may find interesting if you
						tell us that you wish this to happen. You may request details of personal information which we
						hold about you under the Data Protection Act 1998. A small fee will be payable. If you would
						like a copy of the information held on you please write to <Link
						href="mailto:billing@stechbd.net"><strong>billing@stechbd.net</strong></Link>.
					</Paragraph>
					<Paragraph>
						If you believe that any information we are holding on you is incorrect or incomplete, please
						email us as soon as possible, at the above address. We will promptly correct any information
						found to be incorrect.
					</Paragraph>
				</Section>
			</Main>
		</>
	)
}
