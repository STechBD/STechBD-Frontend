'use client'

import { JSX, useState } from 'react'
import { Metadata } from 'next'
import data from '@/app/_data/domain'
import Hero from '@/app/domain/hero'
import { DefaultEffect } from '@/app/_component/background';


/**
 * Metadata for the Domain Registration page.
 *
 * @since 3.0.0
 */
const title: string = 'Domain Name Registration'
const description: string = 'We will help you to choose a domain name for your website. S Technologies provides domain registration service in cheap rate. Here is the list of domain price.'
/*export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
	twitter: {
		title,
		description,
	},
}*/


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

	const requestSort = (key: string, direction: string): void => {
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
				<DefaultEffect/>
				<div className="md:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Pricing Table
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Domain price varies from domain to domain. We will help you to choose a domain name for your
						website. Here is the list of domain price.
					</p>
					{/**
						// domain sorting option selecting button
						// 2 button will be there. one is "sort by price" another is "sort by name"
						// another icon will be there to show the sorting direction
					**/}
					<div className="mt-10 flex">
						<button
							className="text-white bg-primary text-center font-bold py-2 px-4 rounded focus:outline-none"
							onClick={ (): void => requestSort('none', sortDomain.direction) }
						>
							Sort by Default
						</button>
						<button
							className="ml-4 text-white bg-primary text-center font-bold py-2 px-4 rounded focus:outline-none"
							onClick={ (): void => requestSort('extension', sortDomain.direction) }
						>
							Sort by Name
						</button>
						<button
							className="ml-4 text-white bg-primary text-center font-bold py-2 px-4 rounded focus:outline-none"
							onClick={ (): void => requestSort('registration.bdt', sortDomain.direction) }
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
				</div>
				<div className="px-20 py-10"></div>
			</div>
		</>
	)
}
