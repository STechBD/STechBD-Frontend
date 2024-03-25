'use client'

import { JSX, useState } from 'react'
import { Bounce } from '@/app/_component/animation'
import { Typewriter } from '@/app/_component/typewriter'
import Domain from '@/app/_data/domain'
import DomainChecker from '@/app/_component/domainChecker'


/**
 * Hero Component for Domain Registration Page
 *
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
			<div
				className="absolute inset-0 h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30">
			</div>
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
			{/* Background gradient effect */ }
			<div
				className="absolute inset-0 h-full min-h-screen w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30">
				<svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice"
				     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 678">
					<path d="M0 0l1463 678L0 678V0z" fill="url(#heroicon-gradient)" fillOpacity=".4"
					/>
					<defs>
						<linearGradient x1="731.5" x2="731.5" y1="0" y2="678" gradientUnits="userSpaceOnUse">
							<stop stopColor="#ff80b5"/>
							<stop offset="1" stopColor="#9089fc"/>
						</linearGradient>
					</defs>
				</svg>
			</div>
			{/* Content */ }
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
