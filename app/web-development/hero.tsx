import { JSX } from 'react'
import { BasicHeroEffect } from '@/component/background'


/**
 * The Hero component for the Web App Development page.
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
							Web App Development
						</h1>
						<p className="mt-4 text-xl text-white">
							Build your web app with the best web development services by the expert team
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
