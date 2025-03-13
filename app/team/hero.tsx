import { JSX } from 'react'
import { BasicHeroEffect } from '@/component/background'


/**
 * The Hero component for the Team page.
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
							S Technologies Team
						</h1>
						<p className="mt-4 text-xl text-white">
							Meet the amazing team behind S Technologies who work hard to provide you with the best
							services. We are a team of dedicated professionals who are passionate about what we do.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
