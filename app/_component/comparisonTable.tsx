'use client'

import { JSX, useState } from 'react'


/**
 * Interface definition.
 *
 * @interface Feature
 * @interface Data
 * @interface FeatureList
 *
 * @since 3.0.0
 */
interface Feature {
	title: string
	features: {
		[key: string]: string | number | boolean
	}
}

interface Data {
	title: string
	price: {
		bdt: number
		usd: number
	}
	period: number
	description: string
	features: {
		[key: string]: string | number | boolean
	}
	button: string
	link: string
}


interface FeatureList {
	[key: string]: string
}


interface Pricing {
	title: string
	price: {
		bdt: number
		usd: number
	}
	period: number
	description: string
	features: JSX.Element[]
	button: string
	link: string
}


/**
 * The Comparison Table component.
 *
 * @returns { JSX.Element } The comparison table.
 * @since 3.0.0
 */
export default function ComparisonTable({ feature, data, defaultCurrency = ' bdt' }: any): JSX.Element {
	const [ currency, setCurrency ] = useState<string>(defaultCurrency)

	return (
		<>
			{ /** Comparison Table **/ }
			<div className="relative dark:bg-gray-900">
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
					{ /** Switch **/ }
					<div className="flex justify-center items-center">
						<label className="min-w-[3.5rem] text-sm text-gray-500 me-3 dark:text-gray-400">Monthly</label>

						<input type="checkbox"
						       className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-white"
						       checked/>

						<label className="relative min-w-[3.5rem] text-sm text-gray-500 ms-3 dark:text-gray-400">
							Annual
							<span className="absolute -top-10 start-auto -end-28">
        <span className="flex items-center">
          <svg className="w-14 h-8 -me-6" width="45" height="25" viewBox="0 0 45 25" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
	            d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
	            fill="currentColor" className="fill-gray-300 dark:fill-gray-700"/>
          </svg>
          <span
	          className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">Save up to 10%</span>
        </span>
      </span>
						</label>
					</div>
					{ /** End Switch **/ }
					<div
						className="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:w-full after:h-48 after:bg-gradient-to-t after:from-white after:via-white/70 dark:after:from-slate-900 dark:after:via-slate-900/95">
						{ /** Header **/ }
						<div className="hidden lg:block sticky top-20 start-0 py-2 bg-white dark:bg-slate-900">
							{ /** Grid **/ }
							<div className="grid grid-cols-10 gap-6">
								<div className="col-span-2">
									{ /** Header **/ }
									<div className="h-full">

									</div>
									{ /** End Header **/ }
								</div>
								{ /** End Col **/ }

								<div className="col-span-1">
									{ /** Header **/ }
									<div
										className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
										<div>
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Free
                </span>
											<p className="text-xs text-gray-500">
												Free forever
											</p>
										</div>
										<div className="mt-2">
											<a className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
											   href="#">
												Get started
											</a>
										</div>
									</div>
									{ /** End Header **/ }
								</div>
								{ /** End Col **/ }

								<div className="col-span-1">
									{ /** Header **/ }
									<div
										className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
										<div>
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Startup
                </span>
											<p className="text-xs text-gray-500">
												$39 per month billed annually
											</p>
										</div>
										<div className="mt-2">
											<a className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
											   href="#">
												Get started
											</a>
										</div>
									</div>
									{ /** End Header **/ }
								</div>
								{ /** End Col **/ }

								<div className="col-span-1">
									{ /** Header **/ }
									<div
										className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
										<div>
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Team
                </span>
											<p className="text-xs text-gray-500">
												$89 per month billed annually
											</p>
										</div>
										<div className="mt-2">
											<a className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
											   href="#">
												Get started
											</a>
										</div>
									</div>
									{ /** End Header **/ }
								</div>
								{ /** End Col **/ }

								<div className="col-span-1">
									{ /** Header **/ }
									<div
										className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
										<div>
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
											<p className="text-xs text-gray-500">
												$149 per month billed annually
											</p>
										</div>
										<div className="mt-2">
											<a className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
											   href="#">
												Get started
											</a>
										</div>
									</div>
									{ /** End Header **/ }
								</div>
								{ /** End Col **/ }
							</div>
							{ /** End Grid **/ }
						</div>
						{ /** End Header **/ }

						{ /** Section **/ }
						{
							feature.map((feature: Feature, index: number): JSX.Element => {
								return (
									<div key={ index } className="space-y-4 lg:space-y-0">
										{ /** List **/ }
										<ul className="grid lg:grid-cols-10 lg:gap-6">
											{ /** Item **/ }
											<li className="lg:col-span-2 lg:py-3">
									            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
									              { feature.title }
									            </span>
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
											</li>
											{ /** End Item **/ }
										</ul>
										{
											feature.features && Object.entries(feature.features).map(([key, value]): JSX.Element => {
												return (
													<>
													<ul key={ key } className="grid lg:grid-cols-10 lg:gap-6">
														{ /** Item **/ }
														<li className="lg:col-span-2 pb-1.5 lg:py-3">
												            <span className="text-sm text-gray-800 dark:text-gray-200">
													            { value }
												            </span>
														</li>
														{ /** End Item **/ }
															{
																data.map((item: Data, index: number): JSX.Element => {
																	return (
																		<li key={ index }
																		    className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
																			<div className="grid grid-cols-6 lg:block">
																				<span
																					className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
																					{ item.title }
																				</span>
																				<span
																					className="text-sm text-gray-800 dark:text-gray-200">
																					{ item.features[key] }
																				</span>
																			</div>
																		</li>
																	)
																})
															}
														</ul>
													</>
												)
											}
										) }
									</div>
								)
							})
						}
						{ /** End Section **/ }

						{ /** Section **/ }
						<div className="space-y-4 lg:space-y-0">
							{ /** List **/ }
							<ul className="grid lg:grid-cols-6 lg:gap-6">
								{ /** Item **/ }
								<li className="lg:col-span-2 lg:py-3">
						            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
						              General
						            </span>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
								</li>
								{ /** End Item **/ }
							</ul>
							{ /** End List **/ }

							{ /** List **/ }
							<ul className="grid lg:grid-cols-6 lg:gap-6">
								{ /** Item **/ }
								<li className="lg:col-span-2 pb-1.5 lg:py-3">
						            <span className="text-sm text-gray-800 dark:text-gray-200">
						              Number of seats
						            </span>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
						              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
						                Free
						              </span>
										<span className="text-sm text-gray-800 dark:text-gray-200">
                1
                                        </span>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
						              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
						                Startup
						              </span>
										<span className="text-sm text-gray-800 dark:text-gray-200">
							                Up to 3
							              </span>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
										<span className="text-sm text-gray-800 dark:text-gray-200">
                Up to 10
              </span>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
										<span className="text-sm text-gray-800 dark:text-gray-200">
                Unlimited
              </span>
									</div>
								</li>
								{ /** End Item **/ }
							</ul>
							{ /** End List **/ }

							{ /** List **/ }
							<ul className="grid lg:grid-cols-6 lg:gap-6">
								{ /** Item **/ }
								<li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Storage
            </span>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
										<span className="text-sm text-gray-800 dark:text-gray-200">
                15 GB
              </span>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
										<span className="text-sm text-gray-800 dark:text-gray-200">
                1 TB
              </span>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
										<span className="text-sm text-gray-800 dark:text-gray-200">
                15 TB
              </span>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
										<span className="text-sm text-gray-800 dark:text-gray-200">
                Unlimited
              </span>
									</div>
								</li>
								{ /** End Item **/ }
							</ul>
							{ /** End List **/ }

							{ /** List **/ }
							<ul className="grid lg:grid-cols-6 lg:gap-6">
								{ /** Item **/ }
								<li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Email sharing
            </span>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }
							</ul>
							{ /** End List **/ }

							{ /** List **/ }
							<ul className="grid lg:grid-cols-6 lg:gap-6">
								{ /** Item **/ }
								<li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Any time, anywhere access
            </span>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<path d="M5 12h14"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }
							</ul>
							{ /** End List **/ }
						</div>
						{ /** End Section **/ }

						{ /** Section **/ }
						<div className="mt-6 space-y-4 lg:space-y-0">
							{ /** List **/ }
							<ul className="grid lg:grid-cols-6 lg:gap-6">
								{ /** Item **/ }
								<li className="lg:col-span-2 lg:py-3">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Financial data
            </span>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
								</li>
								{ /** End Item **/ }
							</ul>
							{ /** End List **/ }

							{ /** List **/ }
							<ul className="grid lg:grid-cols-6 lg:gap-6">
								{ /** Item **/ }
								<li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Open/High/Low/Close
            </span>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<path d="M5 12h14"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<path d="M5 12h14"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }
							</ul>
							{ /** End List **/ }

							{ /** List **/ }
							<ul className="grid lg:grid-cols-6 lg:gap-6">
								{ /** Item **/ }
								<li className="lg:col-span-2 pb-1.5 lg:py-3">
            <span className="text-sm text-gray-800 dark:text-gray-200">
              Price-volume difference indicator
            </span>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<path d="M5 12h14"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }

								{ /** Item **/ }
								<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
									<div className="grid grid-cols-6 lg:block">
              <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
										<svg
											className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
											xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
											strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</div>
								</li>
								{ /** End Item **/ }
							</ul>
							{ /** End List **/ }
						</div>
						{ /** End Section **/ }

						{ /** Load More Content **/ }
						<div id="view-all-features-button"
						     className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
						     aria-labelledby="view-all-features">
							{ /** Section **/ }
							<div className="mt-6 relative z-20 space-y-4 lg:space-y-0">
								{ /** List **/ }
								<ul className="grid lg:grid-cols-6 lg:gap-6">
									{ /** Item **/ }
									<li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Additional features
              </span>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
									</li>
									{ /** End Item **/ }
								</ul>
								{ /** End List **/ }

								{ /** List **/ }
								<ul className="grid lg:grid-cols-6 lg:gap-6">
									{ /** Item **/ }
									<li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm text-gray-800 dark:text-gray-200">
                Dedicated account manager
              </span>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
											<svg className="w-5 h-5 lg:mx-auto text-blue-600"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
											<svg className="w-5 h-5 lg:mx-auto text-blue-600"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }
								</ul>
								{ /** End List **/ }

								{ /** List **/ }
								<ul className="grid lg:grid-cols-6 lg:gap-6">
									{ /** Item **/ }
									<li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm text-gray-800 dark:text-gray-200">
                24/7 support
              </span>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
											<svg className="w-5 h-5 lg:mx-auto text-blue-600"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
											<svg className="w-5 h-5 lg:mx-auto text-blue-600"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
											<svg className="w-5 h-5 lg:mx-auto text-blue-600"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }
								</ul>
								{ /** End List **/ }

								{ /** List **/ }
								<ul className="grid lg:grid-cols-6 lg:gap-6">
									{ /** Item **/ }
									<li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm text-gray-800 dark:text-gray-200">
                Rewards
              </span>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
											<svg className="w-5 h-5 lg:mx-auto text-blue-600"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }
								</ul>
								{ /** End List **/ }

								{ /** List **/ }
								<ul className="grid lg:grid-cols-6 lg:gap-6">
									{ /** Item **/ }
									<li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm text-gray-800 dark:text-gray-200">
                Business API
              </span>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
											<svg className="w-4 h-4 lg:mx-auto text-gray-500"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path fillRule="evenodd"
												      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }

									{ /** Item **/ }
									<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
										<div className="grid grid-cols-6 lg:block">
                <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
											<svg className="w-5 h-5 lg:mx-auto text-blue-600"
											     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											     fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
											</svg>
										</div>
									</li>
									{ /** End Item **/ }
								</ul>
								{ /** End List **/ }
							</div>
							{ /** End Section **/ }
						</div>
						{ /** End Load More Content **/ }
					</div>

					{ /** View More Button **/ }
					<div className="mt-8 text-center">
						<button type="button" id="view-all-features"
						        className="hs-collapse-toggle hs-collapse-open:rounded-full hs-collapse-open:px-3 group py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						        data-hs-collapse="#view-all-features-button">
							<span className="hs-collapse-open:hidden">View all features</span>
							<svg
								className="hidden hs-collapse-open:block group-hover:rotate-180 transition duration-300 flex-shrink-0 w-4 h-4"
								xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M18 6 6 18"/>
								<path d="m6 6 12 12"/>
							</svg>
						</button>
					</div>
					{ /** End View More Button **/ }
				</div>
			</div>
			{ /** End Comparison Table **/ }
		</>
	)
}
