import { JSX } from 'react'
import Hero from '@/app/hero'
import AnimatedLogo from '@/app/_component/animatedLogo'
import { Bounce } from '@/app/_component/animation'
import PricingTable from '@/app/pricing-table'
import Testimonial from '@/app/testimonial'
import Update from '@/app/update'


/**
 * Homepage.
 *
 * @returns { JSX.Element } The homepage.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<div className="absolute inset-x-0 -top-24 -z-10 transform-gpu overflow-hidden blur-3xl"
				     aria-hidden="true">
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }></div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }></div>
				</div>
				<div className="md:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Web Hosting and Server
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						We have been providing web hosting and server since 2015 with customer satisfaction.
					</p>
					<PricingTable/>
				</div>
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
						<div className="flex items-center justify-center mt-3">
							<Bounce hover={ true }>
								<AnimatedLogo design="h-96 w-96"/>
							</Bounce>
						</div>
						<div className="mt-12 sm:mt-16 md:mt-0">
							<h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
								We provide technological solutions for businesses
							</h2>
							<div className="mt-3">
								<p className="text-lg text-gray-500">
									We are a team of software engineers, AI experts, and designers who are passionate
									about building technology solutions for you.
								</p>
							</div>
							<div className="mt-9">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We develop and design website and software.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We design UI and UX for website and software.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We build artificial intelligence solution for businesses.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We provide domain, web hosting, and server for website.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We provide SEO solution and digital marketing service for business.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Client Testimonials
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						What our clients say about us.
					</p>
					<Testimonial/>
				</div>
				<div className="md:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Latest News and Update
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Find out the latest news and updates from us.
					</p>
					<Update/>
				</div>
			</div>
		</>
	)
}
