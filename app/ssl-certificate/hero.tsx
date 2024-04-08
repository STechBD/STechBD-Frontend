import { JSX } from 'react'
import { BasicHeroEffect } from '@/app/_component/background'


/**
 * The Hero component for the Unmanaged VPS page.
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
							Unmanaged VPS Hosting
						</h1>
						<p className="mt-4 text-xl text-white">
							We have been providing Unmanaged VPS Hosting since 2015 with customer satisfaction. Our
							Unmanaged VPS Hosting is perfect for those who want to host their website on a server that
							is fully managed by us. We take care of everything from server setup to security updates, so
							you can focus on your business.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
