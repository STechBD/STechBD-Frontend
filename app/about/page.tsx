import Hero from '@/app/about/hero'
import { HeroEffect } from '@/app/_component/background'


/**
 * The About page component.
 *
 * @returns { JSX.Element } The About page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<div className="relative min-h-screen overflow-hidden isolate px-6 py-24 lg:px-8">
				<HeroEffect/>
				<div className="relative h-full min-h-screen">
					<Hero/>
					<div className="mt-16">
						<p className="text-6xl max-w-7xl mx-auto text-center text-white">
							S Technologies (STechBD.Net) is a software company that provides software development,
							domain
							registration, server and hosting, and AI development solution.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
