import { JSX } from 'react'
import Link from 'next/link'
import { BasicHeroEffect } from '@/app/_component/background'


/**
 * The Hero component for the Privacy Policy page.
 *
 * @returns { JSX.Element } The Hero component.
 * @since 3.0.0
 */
export default function Hero(): JSX.Element {
	return (
		<>
			<div className="relative overflow-hidden">
				<BasicHeroEffect/>
				<div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
							Privacy Policy
						</h1>
						<p className="mt-4 text-xl text-white">
							We take your privacy seriously. Here&apos;s how we handle your data.
						</p>
					</div>
					<nav className="flex" aria-label="Breadcrumb">
						<ol className="flex items-center space-x-4">
							<li>
								<div>
									<Link href="/" className="font-medium text-white hover:text-gray-300">
										Home
									</Link>
								</div>
							</li>
							<li className="font-medium text-white hover:text-gray-300">
								&gt;
							</li>
							<li>
								<div>
									<a
										href="/privacy"
										className="font-medium text-white hover:text-gray-300"
										aria-current="page"
									>
										Privacy Policy
									</a>
								</div>
							</li>
						</ol>
					</nav>
				</div>
			</div>
		</>
	)
}
