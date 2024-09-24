'use client'

import { JSX } from 'react'
import Link from 'next/link'
import type { Pricing } from '@/app/_data/type'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from '@/app/_context/reduxStore'
import Currency from '@/app/_component/currency'


/**
 * The Pricing table component.
 * This can be used anywhere in the application by passing the data only.
 *
 * @returns { JSX.Element } The pricing table.
 * @since 3.0.0
 */
export default function PricingTable({ data, defaultCurrency = 'bdt' }: any): JSX.Element {
	const currency = useSelector((state: any): string => state.currency)
	const dispatch = useDispatch()
	const columnLg: string = data.length % 3 === 0 ? 'lg:grid-cols-3 lg:gap-16' : 'lg:grid-cols-4'
	const columnMd: string = data.length % 2 === 0 ? 'md:grid-cols-2 lg:gap-8' : 'md:grid-cols-3'

	const changeCurrency = (currency: string): void => {
		dispatch(setCurrency(currency))
	}

	return (
		<div className="my-20">
			<div className="flex justify-center items-center mb-10">
				<Currency currency={ currency } callback={ changeCurrency } defaultCurrency={ defaultCurrency }/>
			</div>
			<div className={ `grid grid-cols-1 gap-4 ${ columnMd } ${ columnLg }` }>
				{
					data.map((item: Pricing, index: number): JSX.Element => {
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
									{ item.price ? (
										<>
											<div className="flex items-center justify-center">
												<span
													className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
													{ currency === 'bdt' ? '৳' : '$' }
												</span>
												<span
													className="text-5xl font-semibold text-gray-900 dark:text-gray-100"
												>
													{ currency === 'bdt' ? item.price.bdt : item.price.usd }
												</span>
												<span className="text-2xl font-medium text-gray-600 dark:text-gray-400">
													&nbsp;/ { item.period === 0 ? 'year' : 'month' }
												</span>
											</div>
											<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
												Billed { item.period === 0 ? 'annually' : 'monthly' }
											</p>
										</>
									) : (
										<>
											<div className="flex items-center justify-center">
												<span
													className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
													Contact for pricing
												</span>
											</div>
											<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
												Contact us for price and information
											</p>
										</>
									) }
									{
										item.renew && (
											<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
												Renew at <strong>{ currency === 'bdt' ? '৳' : '$' }
												{ currency === 'bdt' ? item.renew.bdt : item.renew.usd }
												{ item.period === 0 ? ' / year' : ' / month' }</strong> for the
												2nd { item.period === 0 ? 'year' : 'month' }
											</p>
										)
									}
								</div>
								<div className="mt-8">
									<ul className="space-y-2">
										{
											item.features.map((feature: any, index: number): JSX.Element => {
												return (
													<li key={ index } className="flex items-center">
														<svg
															className="w-4 h-4 text-green-500 flex-shrink-0"
															fill="currentColor"
															viewBox="0 0 20 20"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd" clipRule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm5-10a1 1 0 00-1.707-.707L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 00.293-.707z"
															/>
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
									<Link
										href={ item.button.link }
										target={ item.button.link.startsWith('http') ? '_blank' : '' }
										className="block w-full px-4 py-3 text-center font-medium text-white bg-primary rounded-md hover:bg-secondary"
									>
										{ item.button.text }
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
