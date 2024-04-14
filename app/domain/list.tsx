'use client'
import { JSX, useState } from 'react'
import data from '@/app/_data/domain'


/**
 * The list of domain prices.
 *
 * @returns { JSX.Element } The list of domain prices.
 * @since 3.0.0
 */
export default function List(): JSX.Element {
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

	return (
		<>
			<div className="mt-10 flex">
				<button
					className={ (sortDomain.key === 'none' ? 'text-white bg-primary' : 'text-primary bg-gray-200') + ' text-center font-bold py-2 px-4 rounded focus:outline-none' }
					onClick={ (): void => requestSort('none', sortDomain.direction) }
					disabled={ sortDomain.key === 'none' }
				>
					Sort by Default
				</button>
				<button
					className={ (sortDomain.key === 'extension' ? 'text-white bg-primary' : 'text-primary bg-gray-200') + ' ml-4 text-center font-bold py-2 px-4 rounded focus:outline-none' }
					onClick={ (): void => requestSort('extension', sortDomain.direction) }
					disabled={ sortDomain.key === 'extension' }
				>
					Sort by Name
				</button>
				<button
					className={ (sortDomain.key === 'registration.bdt' ? 'text-white bg-primary' : 'text-primary bg-gray-200') + ' ml-4 text-center font-bold py-2 px-4 rounded focus:outline-none' }
					onClick={ (): void => requestSort('registration.bdt', sortDomain.direction) }
					disabled={ sortDomain.key === 'registration.bdt' }
				>
					Sort by Price
				</button>
			</div>
			<div className="mt-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-10">
					{
						sortedDomain.map((domain: any, i: number = 0) => {
							i++

							let textClass: string = 'text-2xl font-bold text-center'
							textClass += (i % 2 == 0) ? ' text-primary' : ' text-primary'
							let buttonClass: string = 'block w-full text-white text-center font-bold py-2 px-4 rounded focus:outline-none'
							buttonClass += (i % 2 == 0) ? ' bg-primary hover:bg-secondary focus:bg-secondary' : ' bg-primary hover:bg-secondary focus:bg-secondary'
							return (
								<div key={ i } className="bg-white shadow-md rounded-lg px-10 py-6">
									<h2 className={ textClass }>
										{ domain.extension }
									</h2>
									<p className="mt-4 text-center text-3xl font-bold text-gray-900">
										{ domain.registration.bdt }
									</p>
									<p className="mt-4 text-center text-gray-500">
										{
											domain.title === 'Bangladeshi' ? 'Per 2 Year' : 'Per Year'
										}
									</p>
									<div className="mt-6">
										<a href="https://cpanel.stechbd.net/cart.php?a=add&domain=register"
										   target="_blank" className={ buttonClass }
										>
											Buy Now
										</a>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}
