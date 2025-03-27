'use client'

import data from '@/data/domain'
import config from '@/stech.config'
import { JSX, useState } from 'react'
import CurrencyButton from '@/component/currency'
import { setCurrency } from '@/context/reduxStore'
import { useDispatch, useSelector } from 'react-redux'
import type { Currency, DomainPrice, State } from '@/data/type'


/**
 * Component to renders a list of domain prices.
 *
 * This component is responsible for displaying a list of domain prices.
 * It utilizes the `useState` hook to manage the sorting of the domain prices.
 *
 * @returns { JSX.Element } The list of domain prices.
 * @since 3.0.0
 */
export default function List(): JSX.Element {
	const currency: string = useSelector((state: State): string => state.currency)
	const symbol: string = config.currencies.find((item: Currency): boolean => item.name === currency)?.symbol || config.currencies[0].symbol
	const dispatch = useDispatch()
	const [ sortDomain, setSortDomain ] = useState({ key: 'none', direction: 'asc' })
	const sortData = (data: any): any => {
		if (sortDomain.key !== 'none') {
			return data.sort((a: any, b: any): number => {
				if (a[sortDomain.key] < b[sortDomain.key]) {
					return sortDomain.direction === 'asc' ? -1 : 1
				}

				if (a[sortDomain.key] > b[sortDomain.key]) {
					return sortDomain.direction === 'asc' ? 1 : -1
				}

				return 0
			})
		}

		return data
	}

	const requestSort = (key: string, direction: string): void => {
		if (sortDomain.key === key && sortDomain.direction === 'asc') {
			direction = 'desc'
		}

		setSortDomain({ key, direction })
	}

	const sortedDomain = sortData(data)

	const changeCurrency = (currency: string): void => {
		dispatch(setCurrency(currency))
	}

	return (<>
		<div className="mt-10 flex">
			<button
				className={ (sortDomain.key === 'none' ? 'text-white bg-primary' : 'text-primary bg-gray-200') + ' text-center py-2 px-4 rounded focus:outline-none' }
				onClick={ (): void => requestSort('none', sortDomain.direction) }
				disabled={ sortDomain.key === 'none' }
			>
				Sort by Default
			</button>
			<button
				className={ (sortDomain.key === 'extension' ? 'text-white bg-primary' : 'text-primary bg-gray-200') + ' ml-4 text-center py-2 px-4 rounded focus:outline-none' }
				onClick={ (): void => requestSort('extension', sortDomain.direction) }
				disabled={ sortDomain.key === 'extension' }
			>
				Sort by Name
			</button>
			<button
				className={ (sortDomain.key === 'registration.bdt' ? 'text-white bg-primary' : 'text-primary bg-gray-200') + ' ml-4 text-center py-2 px-4 rounded focus:outline-none' }
				onClick={ (): void => requestSort('registration.bdt', sortDomain.direction) }
				disabled={ sortDomain.key === 'registration.bdt' }
			>
				Sort by Price
			</button>
		</div>
		<div className="mt-10">
			<div className="flex justify-center items-center mb-10">
				<CurrencyButton currency={ currency } callback={ changeCurrency }/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-10">
				{ sortedDomain.map((domain: DomainPrice, index: number): JSX.Element => {
					return (
						<div
							key={ domain.extension }
							className="bg-white text-center shadow-md rounded-lg px-10 py-6 dark:bg-gray-800"
						>
							<h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
								{ domain.extension }
							</h2>
							<p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
								{ domain.title }
							</p>
							<p className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
								{ domain.promo && (
									<span className="block text-2xl text-primary">
											<del>
												<span>
													{ symbol }
												</span>
												<span>
													{ domain.registration[currency] }
												</span>
											</del>
										</span>
								) }
								<span>
										{ symbol }
									</span>
								<span>
										{ domain.promo ? domain.promo[currency] : domain.registration[currency] }
									</span>
							</p>
							<p className="mt-4 text-center text-gray-600 dark:text-gray-400">
								{ domain.period > 1 ? `Per ${ domain.period } Years` : 'Per Year' }
							</p>
							<div className="mt-6">
								<a target="_blank"
								   href={ `${ config.info.cp }/cart.php?a=add&domain=register` }
								   className="block w-full text-white text-center font-bold py-2 px-4 rounded focus:outline-none bg-primary hover:bg-secondary focus:bg-secondary"
								>
									Buy Now
								</a>
							</div>
						</div>
					)
				}) }
			</div>
		</div>
	</>)
}
