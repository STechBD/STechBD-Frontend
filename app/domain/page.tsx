'use client'

import { JSX, useState } from 'react'
import data from '@/app/_data/domain'
import Hero from '@/app/domain/hero'


/**
 * Metadata for the Domain Registration page.
 *
 * @since 3.0.0
 */
const title: string = 'Domain Registration'
const description: string = 'We will help you to choose a domain name for your website.'


/**
 * Domain Registration page
 *
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
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

	const requestSort = (key: string): void => {
		let direction: string = 'asc'

		if (sortDomain.key === key && sortDomain.direction === 'asc') {
			direction = 'desc'
		}

		setSortDomain({ key, direction })
	}

	const sortedDomain = sortData(data)

	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 lg:px-8">
				<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Pricing Table</h2>
					<p className="mt-4 text-xl text-gray-500">
						Domain price varies from domain to domain. We will help you to choose a domain name for your
						website. Here is the list of domain price.
					</p>
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
												Per Year
											</p>
											<div className="mt-6">
												<a href="https://cpanel.stechbd.net/cart.php?a=add&domain=register"
												   target="_blank" className={ buttonClass }>
													Buy Now
												</a>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
				<div className="px-20 py-10"></div>
			</div>
		</>
	)
}
