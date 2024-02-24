import { JSX } from 'react'


/**
 * Hero component for the Server page.
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
							<span className="block">
								Server
							</span>
						</h1>
						<p className="mt-4 text-xl text-white">
							We have been providing server since 2015 with customer satisfaction.
							Server is ideal for small business and personal website.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
