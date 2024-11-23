import { JSX } from 'react'
import { Metadata } from 'next'
import Hero from './hero'
import { Main, Paragraph, Section, UList } from '@/app/_component/template'


/**
 * The metadata for the Terms of Service page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Terms of Service'
const description: string = 'We are committed to providing the best service to our clients. Please read these terms of service carefully before using our service.'
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
 * The Terms of Service page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<Main full={ false }
			      title="Terms of Service"
			      description="Terms of Service include our terms and conditions, acceptable use policy, and other policy."
			>
				<Section title="Violation of this Agreement">
					<Paragraph>
						In the case that the customer has violated this agreement, the account belonging to the customer
						will be immediately terminated upon the discretion of bdwebs.org and the refund policy/money
						back guarantee will automatically be void for the offending customer. In the case that sections
						of this agreement are disputable, <span className="text-white bg-primary"><strong>
						S Technologies</strong></span> reserves the right to decide what is and what is not a violation
						of this agreement.
					</Paragraph>
				</Section>
				<Section title="Delivery of Services">
					<Paragraph>
						Shared Hosting, Reseller Hosting, and Virtual Private Server accounts are instantly activated
						upon payment. After successful payment you will receive an automated receipt from our billing
						system. You are responsible for keeping this in a safe place for future reference. Information
						regarding your service will be sent to the email specified in your account registration. The
						following are not allowed:
					</Paragraph>
					<UList list={ [
						'Anti Islamic or Islamophobic Content',
						'Content or Website against Palestinian Cause and support Zionism or Israel',
						'Pornography and Adult Content',
						'Copyrighted Material that does not belong to you',
						'Port Scanners',
						'Gambling Sites',
						'Lottery Sites',
						'File Hosting Sites using any shared hosting or VPS package',
						'Hacking community websites or any website promoting the act of hacking or phishing',
						'Banner-Ad Services',
						'Pirated Software',
						'Programs with the ability to launch DDoS attacks such as variations of LOIC or HOIC',
						'Warez or Warez Linking',
						'Botnet Controller',
						'Scamming or Fake Websites',
						'Any website promoting illegal activities',
						'Any website promoting or containing malicious software',
					] }/>
					<Paragraph>
						We reserve the right to IMMEDIATELY TERMINATE ANY website that is hosting any of the above
						content WITHOUT notification and WITHOUT any backups provided.
						The following are examples of unacceptable usage:
					</Paragraph>
					<UList list={ [
						'Attempting to interfere or deny service to any user or host on the Internet. Using the service for mail bombing or spamming',
						'Using the service to operate a program that you are not authorized to use',
						'Using the service for video encoding',
						'Attempting to cancel, supersede, or otherwise interfere with any email other than your own',
						'Using the service to engage in syn flood attacks',
						'Furnishing false data on your sign-up form, contract, or online application, including providing fraudulent credit card or other payment information',
					] }/>
				</Section>
				<Section title="Resource Usage">
					<Paragraph>
						Users may not:
					</Paragraph>
					<UList list={ [
						'Use 10% or more of CPU resources for longer then 60 seconds (Applies to Virtual Servers ONLY)',
						'Use more than 1GB of Memory/RAM per cPanel Account (Applies to Shared Hosting and Reseller Hosting Services ONLY)',
						'Use more than 25% of 1 CPU Core PER cPanel Account (Applies to Shared Hosting and Reseller Hosting services ONLY)',
						'Run stand-alone, unattended server-side processes at any point in time on the server. This includes any and all daemons, such as IRCD. (Applies to Shared & Reseller Hosting Services)',
						'Run any bit torrent application, tracker, or client.',
						'Participate in any file-sharing/peer-to-peer activities',
						'Run cron entries with intervals of less than 15 minutes',
					] }/>
				</Section>
			</Main>
		</>
	)
}
