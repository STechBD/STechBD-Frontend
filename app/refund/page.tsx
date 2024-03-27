import { JSX } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'


/**
 * The metadata for the Refund Policy page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Refund Policy'
const description: string = 'We are committed to providing the best service to our clients. Please read these refund policy carefully before using our service.'
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
 * The Refund Policy page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8 text">
				<DefaultEffect/>
				<h2 className="lg:px-16 md:px-20 py-10text-4xl font-bold tracking-tight text-primary sm:text-6xl">
					Refund Policy of S Technologies
				</h2>
				<p className="lg:px-16 md:px-20 py-10 text-xl text-gray-800 dark:text-gray-200">
					Refund Policy includes our product and service payment refund policy.
				</p>
				<div className="lg:px-16 md:px-20 py-10">
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						At <span className="text-white bg-primary"><strong>S Technologies (STechBD.Net)</strong></span>,
						we strive to provide high-quality products and services to our valued customers. Our refund
						policy is designed to ensure fairness and transparency in all transactions. Please read the
						following refund policy carefully before making a purchase:
					</p>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Refund Eligibility
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						We offer refunds only in cases where:
					</p>
					<ul className="mb-4 ml-8 text-xl text-gray-800 list-disc list-inside dark:text-gray-200">
						<li>
							The product or service provided is faulty, defective, or not functioning as described.
						</li>
						<li>
							Our service does not work according to the commitments made at the time of purchase.
						</li>
					</ul>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						Refunds will not be provided for change of mind, wrong product selection, or any other reason
						not related to the quality or performance of the product or service.
					</p>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Refund Procedure
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						Here is the procedure to request a refund:
					</p>
					<ul className="mb-4 ml-8 text-xl text-gray-800 list-disc list-inside dark:text-gray-200">
						<li>
							To request a refund, customers must contact our customer support team within 7 days of the
							purchase date.
						</li>
						<li>
							Customers must provide detailed information about the issue or reason for requesting a
							refund, along with any supporting evidence or documentation.
						</li>
						<li>
							Our customer support team will review the refund request and investigate the reported issue
							thoroughly.
						</li>
						<li>
							If the product or service is found to be faulty or not functioning as described, we will
							initiate the refund process.
						</li>
						<li>
							Refunds will be issued to the original payment method used for the purchase within 15-30
							business days after approval.
						</li>
					</ul>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Exclusions
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						Please note that the following scenarios are not eligible for refunds:
					</p>
					<ul className="mb-4 ml-8 text-xl text-gray-800 list-disc list-inside dark:text-gray-200">
						<li>
							Refunds will not be provided for any additional services, add-ons, or customizations
							purchased along with the product or service.
						</li>
						<li>
							We reserve the right to deny refund requests if the reported issue is found to be due to
							customer misuse, negligence, or failure to follow provided instructions.
						</li>
					</ul>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Contact Information
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						For refund requests or inquiries, customers can contact our customer support team via email
						at <Link href="mailto:billing@stechbd.net"><strong>billing@stechbd.net</strong></Link> or
						through <Link href="/contact"><strong>contact form</strong></Link>.
					</p>

					<h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Amendment
					</h3>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						<span className="text-white bg-primary"><strong>S Technologies</strong></span> reserves the
						right to amend or update this refund policy at any time without prior notice. Any changes to the
						refund policy will be effective immediately upon posting on our website.
					</p>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						By purchasing our products or services, customers agree to abide by the terms and conditions
						outlined in this refund policy. If you have any questions or concerns regarding our refund
						policy, please contact our customer support team for assistance.
					</p>
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						Thank you for choosing <span className="text-white bg-primary"><strong>S Technologies
						(STechBD.Net)</strong></span> for your technology needs. We appreciate your business and strive
						to provide the best possible experience for our customers.
					</p>
				</div>
			</div>
		</>
	)
}
