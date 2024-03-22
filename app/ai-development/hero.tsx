import { JSX } from 'react'
import { BasicHeroEffect } from '@/app/_component/background'


/**
 * Hero component for the AI App Development page.
 *
 * @returns { JSX.Element } The hero component.
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
							AI App Development
						</h1>
						<p className="mt-4 text-xl text-white">
							We build AI-powered applications that are tailored to your needs.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}