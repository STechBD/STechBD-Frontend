import { JSX } from 'react'
import { BasicHeroEffect } from '@/app/_component/background'


/**
 * The Hero component for the Stand with Kashmir page.
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
							Stand with Kashmir
						</h1>
						<p className="mt-4 text-xl text-white">
							S Technologies Supports Kashmir and Stands Against Islamophobia.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
