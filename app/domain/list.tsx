'use client'

import { JSX, useState } from 'react'
import data from '@/app/_data/domain'
import { useDispatch, useSelector } from 'react-redux'
import Currency from '@/app/_component/currency'
import { setCurrency } from '@/app/_context/reduxStore'


/**
 * The list of domain prices.
 *
 * @returns { JSX.Element } The list of domain prices.
 * @since 3.0.0
 */
export default function List({ defaultCurrency = 'bdt' }: any): JSX.Element {
	const currency = useSelector((state: any): string => state.currency)
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

	return (
		<>
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
					<Currency currency={ currency } callback={ changeCurrency } defaultCurrency={ defaultCurrency }/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-10">
					{ sortedDomain.map((domain: any, i: number = 0): JSX.Element => {
						i++

						return (
							<div key={ i }
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
													{ currency === 'bdt' ? '৳' : '$' }
												</span>
												<span>
													{ currency === 'bdt' ? domain.registration.bdt : domain.registration.usd }
												</span>
											</del>
										</span>
									) }
									<span>
										{ currency === 'bdt' ? '৳' : '$' }
									</span>
									<span>
										{ currency === 'bdt' ? (
											domain.promo ? domain.promo.bdt : domain.registration.bdt
										) : (
											domain.promo ? domain.promo.usd : domain.registration.usd
										) }
									</span>
								</p>
								<p className="mt-4 text-center text-gray-600 dark:text-gray-400">
									{ domain.title === 'Bangladeshi' ? 'Per 2 Year' : 'Per Year' }
								</p>
								<div className="mt-6">
									<a target="_blank"
									   href="https://cpanel.stechbd.net/cart.php?a=add&domain=register"
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
		</>
	)
}
