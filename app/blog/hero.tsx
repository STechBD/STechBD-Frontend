import { JSX } from 'react'


/**
 * The Hero component for the Blog page.
 *
 * @returns { JSX.Element } The Hero component.
 * @since 3.0.0
 */
export default function Hero(): JSX.Element {
	return (
		<>
			<div className="relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"/>
				</div>
				<div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
							S Technologies Blog
						</h1>
						<p className="mt-4 text-xl text-white">
							Here you can find the latest news and updates about our products and services.
							Also, you can find technical articles and tutorials about technology.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
