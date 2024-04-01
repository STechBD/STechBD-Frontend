'use client'

import { JSX, useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from '@/app/_context/reduxStore'
import { Data, Feature } from '@/app/_data/type'
import Currency from '@/app/_component/currency'


/**
 * The Comparison Table component.
 *
 * @returns { JSX.Element } The Comparison Table.
 * @since 3.0.0
 */
export default function ComparisonTable({ feature, data, defaultCurrency = 'bdt' }: any): JSX.Element {
	const currency = useSelector((state: any): string => state.currency)
	const dispatch = useDispatch()
	const column: number = data.length + 2

	const changeCurrency = (currency: string): void => {
		dispatch(setCurrency(currency))
	}

	return (
		<>
			{ /** Comparison Table **/ }
			<div className="relative dark:bg-gray-900">
				<div className="py-10 md:py-14 lg:py-20 mx-auto">

					{ /** Switch **/ }
					<div className="flex justify-center items-center mb-10">
						<Currency currency={ currency } callback={ changeCurrency }/>
					</div>
					{ /** End Switch **/ }
					<div
						className="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:w-full after:h-48 after:bg-gradient-to-t after:from-white after:via-white/70 dark:after:from-slate-900 dark:after:via-slate-900/95">

						{ /** Header **/ }
						<div className="hidden lg:block sticky top-[5.5rem] start-0 py-2 bg-white dark:bg-slate-900">
							{ /** Grid **/ }
							<div className={ 'grid gap-6 grid-cols-' + column }>
								<div className="col-span-2">
									{ /** Header **/ }
									<div className="h-full">

									</div>
									{ /** End Header **/ }
								</div>
								{ /** End Col **/ }

								{
									data.map((item: Data, index: number): JSX.Element => {
										return (
											<div key={ index }>
												{ /** Header **/ }
												<div
													className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700"
												>
													<div className="text-center">
										                <span
											                className="font-semibold text-lg text-gray-800 dark:text-gray-200"
										                >
											                { item.title }
										                </span>
														<p className="text-xs text-gray-500">
															{ currency === 'bdt' ? `৳${ item.price.bdt }` : `$${ item.price.usd }` } { item.period === 0 ? 'per year' : 'per month' }
														</p>
													</div>
													<div className="mt-2">
														<Link href={ item.button.link }
														      target={ item.button.link.startsWith('http') ? '_blank' : '_self' }
														      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-primary text-white shadow-sm hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
														>
															{ item.button.text }
														</Link>
													</div>
												</div>
												{ /** End Header **/ }
											</div>
										)
									})
								}
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
										<ul className={ 'grid lg:gap-6 lg:grid-cols-' + column }>
											{ /** Item **/ }
											<li className="lg:col-span-2 lg:py-3">
									            <span
										            className="text-lg font-semibold text-gray-800 dark:text-gray-200">
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
											feature.features && Object.entries(feature.features).map(([ key, value ], index: number): JSX.Element => {
												return (
													<ul
														key={ index }
														className={ 'grid lg:gap-6 lg:grid-cols-' + column }
													>
														{ /** Item **/ }
														<li className="lg:col-span-2 pb-1.5 lg:py-3">
												            <span
													            className="text-sm text-gray-800 dark:text-gray-200"
												            >
													            { value }
												            </span>
														</li>
														{ /** End Item **/ }
														{
															data.map((item: Data, index: number): JSX.Element => {
																return (
																	<li
																		key={ index }
																		className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]"
																	>
																		<div className="grid grid-cols-6 lg:block">
																			<span
																				className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200"
																			>
																				{ item.title }
																			</span>
																			<span
																				className="text-sm text-gray-800 dark:text-gray-200"
																			>
																			    {
																				    item.features[key] === true ? (
																					    <svg
																						    className="flex-shrink-0 lg:mx-auto h-5 w-5 text-green-600 dark:text-green-500"
																						    xmlns="http://www.w3.org/2000/svg"
																						    width="24" height="24"
																						    viewBox="0 0 24 24"
																						    fill="none"
																						    stroke="currentColor"
																						    strokeWidth="2"
																						    strokeLinecap="round"
																						    strokeLinejoin="round"
																					    >
																						    <polyline
																							    points="20 6 9 17 4 12"
																						    />
																					    </svg>
																				    ) : item.features[key] === false ? (
																					    <svg
																						    className="flex-shrink-0 lg:mx-auto h-5 w-5 text-red-600 dark:text-red-500"
																						    xmlns="http://www.w3.org/2000/svg"
																						    width="24" height="24"
																						    viewBox="0 0 24 24"
																						    fill="none"
																						    stroke="currentColor"
																						    strokeWidth="2"
																						    strokeLinecap="round"
																						    strokeLinejoin="round"
																					    >
																						    <line
																							    x1="18" y1="6"
																							    x2="6" y2="18"
																						    />
																						    <line
																							    x1="6" y1="6"
																							    x2="18" y2="18"
																						    />
																					    </svg>
																				    ) : (
																					    item.features[key]
																				    )
																			    }
																			</span>
																		</div>
																	</li>
																)
															})
														}
													</ul>
												)
											})
										}
									</div>
								)
							})
						}
						{ /** End Section **/ }

						{
							process.env.NODE_ENV === 'development' && (
								<>
									{ /** Section **/ }
									<div className="mt-6 space-y-4 lg:space-y-0">
										{ /** List **/ }
										<ul className="grid lg:grid-cols-6 lg:gap-6">
											{ /** Item **/ }
											<li className="lg:col-span-2 lg:py-3">
									            <span
										            className="text-lg font-semibold text-gray-800 dark:text-gray-200"
									            >
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
													<span
														className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
														Free
													</span>
													<svg
														className="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
														xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round" strokeLinejoin="round">
														<path d="M5 12h14"/>
													</svg>
												</div>
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
												<div className="grid grid-cols-6 lg:block">
													<span
														className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
														Startup
													</span>
													<svg
														className="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
														xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round" strokeLinejoin="round">
														<path d="M5 12h14"/>
													</svg>
												</div>
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
												<div className="grid grid-cols-6 lg:block">
													<span
														className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
														Team
													</span>
													<svg
														className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
														xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round" strokeLinejoin="round">
														<polyline points="20 6 9 17 4 12"/>
													</svg>
												</div>
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
												<div className="grid grid-cols-6 lg:block">
													<span
														className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
														Enterprise
													</span>
													<svg
														className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
														xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														strokeWidth="2"
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
													<span
														className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
														Free
													</span>
													<svg
														className="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
														xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round" strokeLinejoin="round">
														<path d="M5 12h14"/>
													</svg>
												</div>
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
												<div className="grid grid-cols-6 lg:block">
													<span
														className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
														Startup
													</span>
													<svg
														className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
														xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round" strokeLinejoin="round">
														<polyline points="20 6 9 17 4 12"/>
													</svg>
												</div>
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
												<div className="grid grid-cols-6 lg:block">
													<span
														className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
														Team
													</span>
													<svg
														className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
														xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round" strokeLinejoin="round">
														<polyline points="20 6 9 17 4 12"/>
													</svg>
												</div>
											</li>
											{ /** End Item **/ }

											{ /** Item **/ }
											<li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
												<div className="grid grid-cols-6 lg:block">
													<span
														className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
														Enterprise
													</span>
													<svg
														className="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
														xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														strokeWidth="2"
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
								</>
							)
						}

						{
							process.env.NODE_ENV === 'development' && (
								<>
									{ /** Load More Content **/ }
									<div
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
							                <span
								                className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
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
								</>
							)
						}

					</div>

					{
						process.env.NODE_ENV === 'development' && (
							<>
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
							</>
						)
					}

				</div>
			</div>
			{ /** End Comparison Table **/ }
		</>
	)
}
