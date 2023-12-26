'use client'

import { JSX, useState } from 'react'
import { Metadata } from 'next'
import data from '@/app/_data/domain'
import Hero from '@/app/domain/hero'
import Link from 'next/link'


/**
 * Metadata for the Domain Registration page.
 *
 * @since 1.0.0
 */
const title: string = 'Domain Registration'
const description: string = 'We will help you to choose a domain name for your website.'


/**
 * Domain Registration page
 *
 * @since 1.0.0
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
				<div className="px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Pricing Table</h2>
					<p className="mt-4 text-xl text-gray-500">
						Domain price varies from domain to domain. We will help you to choose a domain name for your
						website. Here is the list of domain price.
					</p>
					{/* Map data and show domain price */ }
					<div className="mt-10">
						<div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-24">
							<table className="text-center w-full text-sm text-gray-500 dark:text-gray-400">
								<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										<div className="flex justify-center">
											#
											<Link href="#" onClick={(event): void => {
												event.preventDefault()
												requestSort('id')
											}}>
												<svg className="w-3 h-3 ml-1.5" aria-hidden="true"
												     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
												</svg>
											</Link>
										</div>
									</th>
									<th scope="col" className="px-6 py-3">
										<div className="flex justify-center">
											Domain
											<Link href="#" onClick={(event): void => {
												event.preventDefault()
												requestSort('name')
											}}>
												<svg className="w-3 h-3 ml-1.5" aria-hidden="true"
												     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
												</svg>
											</Link>
										</div>
									</th>
									<th scope="col" className="px-6 py-3">
										<div className="flex justify-center">
											Type
											<Link href="#" onClick={(event): void => {
												event.preventDefault()
												requestSort('type')
											}}>
												<svg className="w-3 h-3 ml-1.5" aria-hidden="true"
												     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
												</svg>
											</Link>
										</div>
									</th>
									<th scope="col" className="px-6 py-3">
										<div className="flex justify-center">
											Registration
											<Link href="#" onClick={(event): void => {
												event.preventDefault()
												requestSort('registration')
											}}>
												<svg className="w-3 h-3 ml-1.5" aria-hidden="true"
												     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
												</svg>
											</Link>
										</div>
									</th>
									<th scope="col" className="px-6 py-3">
										<div className="flex justify-center">
											Renewal
											<Link href="#" onClick={(event): void => {
												event.preventDefault()
												requestSort('renewal')
											}}>
												<svg className="w-3 h-3 ml-1.5" aria-hidden="true"
												     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
												</svg>
											</Link>
										</div>
									</th>
									<th scope="col" className="px-6 py-3">
										<div className="flex justify-center">
											Transfer
											<Link href="#" onClick={(event): void => {
												event.preventDefault()
												requestSort('transfer')
											}}>
												<svg className="w-3 h-3 ml-1.5" aria-hidden="true"
												     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
												</svg>
											</Link>
										</div>
									</th>
								</tr>
								</thead>
								<tbody>
								{
									sortedDomain.map((domain: any, i: number = 0) => {
										i++
										return (
											<tr key={ i } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
												<th scope="row"
												    className="px-6 py-4">
													{ i }
												</th>
												<td scope="row"
												    className="px-6 py-4 font-medium bold text-gray-900 whitespace-nowrap dark:text-white">
													{ domain.extension }
												</td>
												<td className="px-6 py-4">
													{ domain.title }
												</td>
												<td className="px-6 py-4">
													{ domain.registration.bdt }
												</td>
												<td className="px-6 py-4">
													{ domain.renewal.bdt }
												</td>
												<td className="px-6 py-4">
													{ domain.transfer.bdt }
												</td>
											</tr>
										)
									})
								}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="px-20 py-10"></div>
			</div>
		</>
	)
}
