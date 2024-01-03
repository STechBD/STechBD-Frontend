import { JSX } from 'react'
import Hero from '@/app/hero'


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
						Web Hosting Packages
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						We are providing web hosting since 2015 with customer satisfaction.
					</p>
					<div className="mt-10">
						{/* Pricing Table */}
						<div className="bg-white rounded-lg shadow overflow-hidden divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px">
							<div
								className="relative group bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
								<div>
									<span className="rounded-lg inline-flex p-3 bg-white text-[#ff80b5] ring-4 ring-white">
										{/* Heroicon name: globe-alt */ }
										<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
										     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
										</svg>
									</span>
								</div>
								<h3 className="mt-8 text-lg font-medium text-white">
									Free
								</h3>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">1</span> Website
								</p>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">1</span> GB SSD Storage
								</p>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">10</span> GB Bandwidth
								</p>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">1</span> Email Account
								</p>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">1</span> Subdomain
								</p>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">1</span> Database
								</p>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">1</span> FTP Account
								</p>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">1</span> Cronjob
								</p>
								<p className="mt-2 text-sm text-white">
									<span className="font-bold">1</span> SSL Certificate
								</p>
							</div>
							<div className="relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
								<div>
									<span className="rounded-lg inline-flex p-3 bg-[#ff80b5] text-white">
										{/* Heroicon name: scale */ }
										<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
										     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m6 2l-6 2"/>
										</svg>
									</span>
								</div>
								<h3 className="mt-8 text-lg font-medium text-gray-900">
									Standard
								</h3>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">1</span> Website
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">10</span> GB SSD Storage
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">100</span> GB Bandwidth
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">10</span> Email Account
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">10</span> Subdomain
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">10</span> Database
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">10</span> FTP Account
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">10</span> Cronjob
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">10</span> SSL Certificate
								</p>
							</div>
							<div className="relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
								<div>
									<span className="rounded-lg inline-flex p-3 bg-[#ff80b5] text-white">
										{/* Heroicon name: lightning-bolt */ }
										<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
										     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M13 10V3L4 14h7v7l9-11h-7z"/>
										</svg>
									</span>
								</div>
								<h3 className="mt-8 text-lg font-medium text-gray-900">
									Premium
								</h3>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">10</span> Website
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">100</span> GB SSD Storage
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">1000</span> GB Bandwidth
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">100</span> Email Account
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">100</span> Subdomain
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">100</span> Database
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">100</span> FTP Account
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">100</span> Cronjob
								</p>
								<p className="mt-2 text-sm text-gray-500">
									<span className="font-bold">100</span> SSL Certificate
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="px-20 py-10"></div>
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
								We build AI solutions for businesses
							</h2>
							<div className="mt-3">
								<p className="text-lg text-gray-500">
									We are a team of AI experts, software engineers, and business
									professionals who are passionate about building AI solutions for
									businesses.
								</p>
							</div>
							<div className="mt-9">
								<div className="flex">
									<div className="flex-shrink-0">
										{/* Heroicon name: check */ }
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We are a team of AI experts, software engineers, and business
											professionals who are passionate about building AI solutions for
											businesses.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										{/* Heroicon name: check */ }
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We are a team of AI experts, software engineers, and business
											professionals who are passionate about building AI solutions for
											businesses.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										{/* Heroicon name: check */ }
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We are a team of AI experts, software engineers, and business
											professionals who are passionate about building AI solutions for
											businesses.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-12 sm:mt-16 md:mt-0">
							<h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
								We build AI solutions for businesses
							</h2>
							<div className="mt-3">
								<p className="text-lg text-gray-500">
									We are a team of AI experts, software engineers, and business
									professionals who are passionate about building AI solutions for
									businesses.
								</p>
							</div>
							<div className="mt-9">
								<div className="flex">
									<div className="flex-shrink-0">
										{/* Heroicon name: check */ }
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We are a team of AI experts, software engineers, and business
											professionals who are passionate about building AI solutions for
											businesses.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										{/* Heroicon name: check */ }
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We are a team of AI experts, software engineers, and business
											professionals
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										{/* Heroicon name: check */ }
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-500">
										<p>
											We are a team of AI experts, software engineers, and business
											professionals who are passionate about building AI solutions for
											businesses.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-20 py-10"></div>
			</div>
		</>
	)
}
