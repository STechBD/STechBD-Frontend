import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'


/**
 * The metadata for the Terms of Service page.
 *
 * @constant title { string }
 * @constant description { string }
 * @constant metadata { Metadata }
 *
 * @since 3.0.0
 */
const title = 'Terms of Service'
const description = 'We are committed to providing the best service to our clients. Please read these terms of service carefully before using our service.'
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
 * @returns { JSX.Element } The Terms of Service page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<DefaultEffect/>
				<h2 className="lg:px-16 md:px-20 py-10text-4xl font-bold tracking-tight text-primary sm:text-6xl">
					Terms of Service
				</h2>
				<p className="lg:px-16 md:px-20 py-10 text-xl text-gray-800 dark:text-gray-200">
					Terms of Service include our terms and conditions, acceptable use policy, and other policy.
				</p>
				<div className="lg:px-16 md:px-20 py-10">
					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Violation of this Agreement
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						In the case that the customer has violated this agreement, the account belonging to the customer
						will be immediately terminated upon the discretion of bdwebs.org and the refund policy/money
						back guarantee will automatically be void for the offending customer. In the case that sections
						of this agreement are disputable, bdwebs.org reserves the right to decide what is and what is
						not a violation of this agreement.
					</p>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Delivery of Services
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						Shared Hosting, Reseller Hosting, and Virtual Private Server accounts are instantly activated
						upon payment. After successful payment you will receive an automated receipt from our billing
						system. You are responsible for keeping this in a safe place for future reference. Information
						regarding your service will be sent to the email specified in your account registration. The
						following are not allowed:
					</p>
					<ul className="mb-4 ml-10 text-xl text-gray-800 list-disc dark:text-gray-200">
						<li>
							Anti Islamic or Islamophobic Content
						</li>
						<li>
							Content or Website against Palestinian Cause and support Zionism or Israel
						</li>
						<li>
							Pornography and Adult Content
						</li>
						<li>
							Copyrighted Material that does not belong to you
						</li>
						<li>
							Port Scanners
						</li>
						<li>
							Gambling Sites
						</li>
						<li>
							Lottery Sites
						</li>
						<li>
							File Hosting Sites
						</li>
						<li>
							Hacking community websites or any website promoting the act of hacking or phishing
						</li>
						<li>
							Banner-Ad Services
						</li>
						<li>
							Pirated Software
						</li>
						<li>
							Programs with the ability to launch DDoS attacks such as variations of LOIC or HOIC
						</li>
						<li>
							Warez or Warez Linking
						</li>
						<li>
							Botnet Controller
						</li>
						<li>
							Scamming or Fake Websites
						</li>
						<li>
							Any website promoting illegal activities
						</li>
						<li>
							Any website promoting or containing malicious software
						</li>
					</ul>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						We reserve the right to IMMEDIATELY TERMINATE ANY website that is hosting any of the above
						content WITHOUT notification and WITHOUT any backups provided.
						The following are examples of unacceptable usage:
					</p>
					<ul className="mb-4 ml-10 text-xl text-gray-800 list-disc dark:text-gray-200">
						<li>
							Attempting to interfere or deny service to any user or host on the Internet. Using the
							service for mail bombing or spamming
						</li>
						<li>
							Using the service to operate a program that you are not authorized to use
						</li>
						<li>
							Using the service for video encoding
						</li>
						<li>
							Attempting to cancel, supersede, or otherwise interfere with any email other than your own
						</li>
						<li>
							Using the service to engage in syn flood attacks
						</li>
						<li>
							Furnishing false data on your sign-up form, contract, or online application, including
							providing fraudulent credit card or other payment information
						</li>
					</ul>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Resource Usage
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						Users may not:
					</p>
					<ul className="mb-4 ml-10 text-xl text-gray-800 list-disc dark:text-gray-200">
						<li>
							Use 10% or more of CPU resources for longer then 60 seconds (Applies to Virtual Servers
							ONLY)
						</li>
						<li>
							Use more than 1GB of Memory/RAM per cPanel Account (Applies to Shared Hosting and Reseller
							Hosting Services ONLY)
						</li>
						<li>
							Use more than 25% of 1 CPU Core PER cPanel Account (Applies to Shared Hosting and Reseller
							Hosting services ONLY)
						</li>
						<li>
							Run stand-alone, unattended server-side processes at any point in time on the server. This
							includes any and all daemons, such as IRCD. (Applies to Shared & Reseller Hosting Services)
						</li>
						<li>
							Run any bit torrent application, tracker, or client.
						</li>
						<li>
							Participate in any file-sharing/peer-to-peer activities
						</li>
						<li>
							Run cron entries with intervals of less than 15 minutes
						</li>

					</ul>
				</div>
			</div>
		</>
	)
}
