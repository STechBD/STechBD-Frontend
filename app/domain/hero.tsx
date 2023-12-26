'use client'

import { JSX, useState } from 'react'
import Typewriter from '@/app/_component/typewriter'


/**
 * Hero Component for Domain Registration Page
 *
 * @since 1.0.0
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

	const toggleDomainDropdown = (): void => {
		setShowDomainDropdown(!showDomainDropdown)
	}

	return (
		<div className="h-screen w-full">
			<div
				className="absolute inset-0 h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30">
			</div>
			<div className="w-full flex flex-col justify-center items-center px-10 mt-40 lg:mt-52">
				<h1 className="text-4xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl">
					Domain Registration
				</h1>
				<p className="mt-4 text-center text-2xl text-gray-500">
					C<Typewriter content="hoose your domain name for your personal or business website." speed={ 10 }/>
				</p>
				<div className="mt-10 w-full max-w-xl">
					<span>
						<label htmlFor="domain" className="sr-only">
							Domain Name
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<span className="text-gray-500 pr-5 sm:text-sm">
									@
								</span>
							</div>
							<input type="text" name="domain" placeholder="Domain Name"
							       className="block w-full pl-9 pr-12 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
							<div className="absolute inset-y-0 right-0 flex items-center">
								<label htmlFor="extension" className="sr-only">
									Domain Extension
								</label>
								<div onClick={ toggleDomainDropdown }
								     className="flex items-center justify-center gap-2 cursor-pointer focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-16 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
									{ extension }
									<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									     xmlns="http://www.w3.org/2000/svg">
										<path d="M12,16a2.5,2.5,0,0,1-1.768-.731L4.939,9.975,7.061,7.854,12,12.793l4.939-4.939,2.122,2.121-5.293,5.293A2.5,2.5,0,0,1,12,16Z"/>
									</svg>
								</div>
								{ showDomainDropdown && (
									<div
										className="absolute top-full left-0 w-full max-h-48 overflow-y-auto bg-white border border-black border-opacity-10 rounded mt-2 py-2">
										<ul className="list-none">
											{ domain.map((type: any, index: number) => (
												<>
													<li className="px-3 py-1 text-sm cursor-default font-bold"
													    key={ index }>
														{ type.name }
													</li>
													{ type.extension.map((ext: string, extIndex: number) => (
														<li
															key={ `${ index }-${ extIndex }` }
															className="px-3 py-1 ml-2 text-sm cursor-pointer hover:text-white hover:bg-gray-600"
															onClick={ (): void => {
																setExtension(ext)
																setShowDomainDropdown(false)
															} }>
															{ ext }
														</li>
													)) }
												</>
											)) }
										</ul>
									</div>
								) }
							</div>
						</div>
					</span>
					<input type="submit"
					       className="mt-3 w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					       value="Search"/>
				</div>
				{/* Grid to list domain names with price */ }
				<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
					<div className="bg-white shadow overflow-hidden sm:rounded-lg">
						<div className="px-4 py-5 sm:px-6">
							<h3 className="text-lg leading-6 font-medium text-gray-900">.com</h3>
							<p className="mt-1 max-w-2xl text-sm text-gray-500">For personal websites</p>
						</div>
						<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
							<dl className="sm:divide-y sm:divide-gray-200">
								<div className="py-3 flex justify-between text-sm font-medium">
									<dt className="text-gray-500">Price</dt>
									<dd className="text-gray-900">$10</dd>
								</div>
								<div className="py-3 flex justify-between text-sm font-medium">
									<dt className="text-gray-500">Transfer</dt>
									<dd className="text-gray-900">$10</dd>
								</div>
							</dl>
						</div>
					</div>
					<div className="bg-white shadow overflow-hidden sm:rounded-lg">
						<div className="px-4 py-5 sm:px-6">
							<h3 className="text-lg leading-6 font-medium text-gray-900">.com</h3>
						</div>
						<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
							<dl className="sm:divide-y sm:divide-gray-200">
								<div className="py-3 flex justify-between text-sm font-medium">
									<dt className="text-gray-500">Price</dt>
									<dd className="text-gray-900">$10</dd>
								</div>
								<div className="py-3 flex justify-between text-sm font-medium">
									<dt className="text-gray-500">Transfer</dt>
									<dd className="text-gray-900">$10</dd>
								</div>
							</dl>
						</div>
					</div>
					<div className="bg-white shadow overflow-hidden sm:rounded-lg">
						<div className="px-4 py-5 sm:px-6">
							<h3 className="text-lg leading-6 font-medium text-gray-900">.net</h3>
						</div>
						<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
							<dl className="sm:divide-y sm:divide-gray-200">
								<div className="py-3 flex justify-between text-sm font-medium">
									<dt className="text-gray-500">Price</dt>
									<dd className="text-gray-900">$10</dd>
								</div>
								<div className="py-3 flex justify-between text-sm font-medium">
									<dt className="text-gray-500">Transfer</dt>
									<dd className="text-gray-900">$10</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
