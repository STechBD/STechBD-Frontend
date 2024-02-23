'use client'

import { JSX, useState } from 'react'
import Link from 'next/link'


/**
 * The Pricing table component.
 * This can be used anywhere in the application by passing the data only.
 *
 * @returns { JSX.Element } The pricing table.
 * @since 3.0.0
 */
export default function PricingTable({ data, defaultCurrency = 'bdt' }: any): JSX.Element {
	const [ currency, setCurrency ] = useState<string>(defaultCurrency)

	return (
		<div className="my-20">
			<div className="flex justify-center items-center mb-10">
				<button
					className={ `px-5 py-3 text-2xl rounded-l-md focus:outline-none ${ currency === 'bdt' ? 'bg-primary text-white' : 'bg-gray-200 text-primary' }` }
					onClick={ (): void => {
						setCurrency('bdt')
					} }
				>
					BDT (৳)
				</button>
				<button
					className={ `px-5 py-3 text-2xl rounded-r-md focus:outline-none ${ currency === 'usd' ? 'bg-primary text-white' : 'bg-gray-200 text-primary' }` }
					onClick={ (): void => {
						setCurrency('usd')
					} }
				>
					USD ($)
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{
					data.map((item: any, index: number): JSX.Element => {
						return (
							<div
								key={ index }
								className="my-4 p-8 bg-white rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:border-gray-600 dark:hover:shadow-lg dark:shadow-sm"
							>
								<div className="text-center">
									<h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
										{ item.title }
									</h2>
									<p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
										{ item.description }
									</p>
								</div>
								<div className="mt-8">
									<div className="flex items-center justify-center">
										<span className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
											{ currency === 'bdt' ? '৳' : '$' }
										</span>
										<span className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
											{ currency === 'bdt' ? item.price.bdt : item.price.usd }
										</span>
										<span className="text-2xl font-medium text-gray-600 dark:text-gray-400">
											&nbsp;/ { item.period === 0 ? 'year' : 'month' }
										</span>
									</div>
									<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
										Billed { item.period === 0 ? 'annually' : 'monthly' }
									</p>
								</div>
								<div className="mt-8">
									<ul className="space-y-2">
										{
											item.features.map((feature: any, index: number): JSX.Element => {
												return (
													<li key={ index } className="flex items-center">
														<svg className="w-4 h-4 text-green-500" fill="currentColor"
														     viewBox="0 0 20 20"
														     xmlns="http://www.w3.org/2000/svg">
															<path fillRule="evenodd" clipRule="evenodd"
															      d="M10 18a8 8 0 100-16 8 8 0 000 16zm5-10a1 1 0 00-1.707-.707L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 00.293-.707z"/>
														</svg>
														<span className="ml-2 text-gray-700 dark:text-gray-300">
															{ feature }
														</span>
													</li>
												)
											})
										}
									</ul>
								</div>
								<div className="mt-8">
									<Link href={ item.link } target={ item.link.startsWith('http') ? '_blank' : '' }
									      className="block w-full px-4 py-3 text-center font-medium text-white bg-primary rounded-md hover:bg-secondary"
									>
										{ item.button }
									</Link>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
