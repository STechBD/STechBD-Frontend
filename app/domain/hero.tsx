'use client'

import { JSX, useState } from 'react'
import { AdvancedHeroEffect } from '@/component/background'
import { Bounce } from '@/component/animation'
import { Typewriter } from '@/component/typewriter'
import Domain from '@/data/domain'
import DomainChecker from '@/component/domainChecker'


/**
 * The Hero Component for Domain Registration Page.
 *
 * @returns { JSX.Element } The Hero Component
 * @since 3.0.0
 */
export default function Hero(): JSX.Element {
	const [ showDomainDropdown, setShowDomainDropdown ] = useState<boolean>(false)
	const [ extension, setExtension ] = useState<string>('.com')
	const domain = [
		{
			name: 'Popular',
			extension: [
				'.com',
				'.net',
				'.org',
				'.info',
				'.biz',
				'.me',
				'.xyz'
			]
		},
		{
			name: 'Bangladeshi',
			extension: [
				'.com.bd',
				'.net.bd',
				'.org.bd',
				'.edu.bd',
				'.ac.bd'
			]
		}
	]
	const domainPrice: string[] = [
		'.com',
		'.net',
		'.org',
		'.xyz',
		'.com.bd',
		'.edu.bd',
	]

	const toggleDomainDropdown = (): void => {
		setShowDomainDropdown(!showDomainDropdown)
	}

	return (
		<div className="relative min-h-screen overflow-hidden -mt-24 py-24">
			<AdvancedHeroEffect/>
			<div className="relative screen-height w-full flex flex-col items-center justify-center px-10">
				<h1
					className="text-5xl md:text-6xl font-extrabold text-white tracking-tight sm:text-7xl"
				>
					<span
						className="block md:inline sm:block bg-primary text-white h-12"
					>
						D<Typewriter content="omain"/>
					</span> <span className="text-primary">
						Name
					</span> <span className="block text-gray-800 dark:text-gray-200 xl:inline">
						Registration
					</span>
				</h1>
				<p className="mt-3 text-base text-gray-800 dark:text-gray-200 sm:mt-5 sm:text-xl lg:text-2xl">
					Choose your desired domain name for your personal or business website.
				</p>
				<DomainChecker/>
				<div className="relative hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 z-10">
					{
						domainPrice.map((item: string, index: number) => (
							<div className="bg-white shadow-md rounded-lg px-10 py-6 bg-opacity-30 hover:bg-opacity-100"
							     key={ index }
							>
								<Bounce>
									<h2 className="text-2xl font-bold text-center text-gray-900">
										{ item }
									</h2>
									<p className="mt-4 text-center text-3xl font-bold text-gray-900">
										৳ {
										Domain.find((domain: {
											extension: string
										}): boolean => domain.extension === item).registration.bdt
									}
									</p>
									<p className="mt-4 text-center text-gray-500">
										{
											(Domain.find((domain: {
												extension: string
											}): boolean => domain.extension === item).title === 'Bangladeshi') ? 'Per 2 Year' : 'Per Year'
										}
									</p>
									<div className="mt-6">
										<div onClick={ (): void => {
											setExtension(item)
										} }
										     className={ (index % 2 === 0 ? 'bg-primary hover:bg-secondary focus:outline-none focus:bg-secondary ' : 'bg-primary hover:bg-secondary focus:outline-none focus:bg-secondary ') + 'block button w-full text-white text-center font-bold py-2 px-4 rounded' }
										>
											Select
										</div>
									</div>
								</Bounce>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}
