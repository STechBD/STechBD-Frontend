import { JSX } from 'react'
import { BasicHeroEffect } from '@/component/background'


/**
 * The Hero component for the School Management System page.
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
							School Management System
						</h1>
						<p className="mt-4 text-xl text-white">
							School Management System is a complete solution for managing school, college, university,
							and any other educational institution. It is a modern and fully responsive system that will
							help you to manage your institution easily.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
