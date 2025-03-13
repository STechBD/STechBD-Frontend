'use client'

import { Metadata } from 'next'
import AnimatedLogo from '@/component/animatedLogo'
import { Bounce } from '@/component/animation'


export const metadata: Metadata = {
	title: 'About',
	description: 'S Technologies (STechBD.Net) is a software company that provides software development, domain registration, server and hosting, and AI development solution.',
}


/**
 * The Hero component for the About page.
 *
 * @returns { JSX.Element } The Hero component.
 * @since 3.0.0
 */
export default function Hero(): JSX.Element {
	return (
		<div className="relative min-h-screen overflow-hidden -mt-24 py-16 md:py-24">
			<div className="relative h-full">
				<div className="lg:grid lg:grid-cols-5">
					<div className="p-8 col-span-2 flex justify-center items-center">
						<Bounce hover={ true }>
							<AnimatedLogo design="h-72 w-72 lg:h-96 lg:w-96"/>
						</Bounce>
					</div>
					<div className="col-span-3 mt-12 sm:mt-16 md:mt-0">
						<h1 className="text-[5rem] lg:text-[10rem] font-extrabold text-primary text-center">
							Color the world with <span className="bg-primary text-white">S Technologies</span>
						</h1>
					</div>
				</div>
				<div
					className="mt-8 flex justify-center cursor-pointer"
					onClick={ (): void => {
						window.scrollBy(0, window.innerHeight)
					}
					}
				>
					<svg className="w-16 h-16 animate-bounce text-primary bg-white rounded-full" fill="none"
					     viewBox="0 0 24 24" stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
						      d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
					</svg>
				</div>
			</div>
		</div>
	)
}
