'use client'

import { JSX, useState } from 'react'
import Link from 'next/link'
import { Typewriter } from '@/app/_component/typewriter'


/**
 * 404 Error page component.
 *
 * @returns { JSX.Element } 404 Error page component.
 * @since 3.0.0
 */
export default function E404(): JSX.Element {
	const [ showDomainDropdown, setShowDomainDropdown ] = useState<boolean>(false)
	const [ extension, setExtension ] = useState<string>('.com')
	const listHeroText: string[] = [
		'Software',
		'Server',
		'Domain',
		'AI',
		'UI/UX',
		'Solution',
	]
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
		<div className="relative min-h-screen overflow-hidden -mt-24 py-16 md:py-24">
			{ /** Background color effect **/ }
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
			{ /** Background gradient effect **/ }
			<div
				className="absolute inset-0 h-full min-h-screen w-full -z-10 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30">
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
			{ /** Content **/ }
			<div className="relative h-full min-h-screen">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="pt-32 pb-12 md:pt-40 md:pb-20">
						<div className="max-w-4xl flex flex-col items-center mx-auto text-center">
							<h1
								className="text-5xl md:text-6xl font-extrabold text-white tracking-tight sm:text-7xl">
								<span
									className="block md:inline sm:block bg-indigo-600 text-white h-12">
									4<Typewriter content="04" speed={ 100 }/>
								</span>
								<span className="block text-gray-800 xl:inline"> Error!</span>
							</h1>
							<p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-2xl">
								<strong>
									Sorry! The page you requested was not found. Please check the URL and try again.
								</strong>
							</p>
							<div className="mt-10 w-full max-w-xl">
								<span>
									<label htmlFor="domain" className="sr-only">
										Domain Name
									</label>
									<div className="relative">
										<div
											className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
												<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"
												     aria-hidden="true"
												     xmlns="http://www.w3.org/2000/svg">
													<path
														d="M12,16a2.5,2.5,0,0,1-1.768-.731L4.939,9.975,7.061,7.854,12,12.793l4.939-4.939,2.122,2.121-5.293,5.293A2.5,2.5,0,0,1,12,16Z"/>
												</svg>
											</div>
											{ showDomainDropdown && (
												<div
													className="absolute top-full left-0 w-full max-h-48 overflow-y-auto bg-white border border-black border-opacity-10 rounded py-2">
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
								<input type="submit" value="Search"
								       className="mt-3 w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"/>
							</div>
							<div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
								<div
									className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
									<Link href="/server"
									      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 sm:px-8">
										Get Server
									</Link>
									<Link href="/web-development"
									      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 sm:px-8">
										Website Development
									</Link>
								</div>
							</div>
						</div>
					</div>
					{ /** Grid of Services **/ }
					<div className="relative hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
						<div
							className="bg-white shadow-md rounded-lg px-10 py-6 bg-opacity-30 hover:bg-opacity-100">
							<h2 className="text-2xl font-bold text-center text-gray-900">
								Domain Name Registration
							</h2>
							<p className="mt-4 text-center text-gray-800">
								We provide domain registration service.
							</p>
							<div className="mt-6">
								<Link href="/domain"
								      className="block button w-full bg-purple-600 text-white text-center font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:bg-indigo-700">
									Domain
								</Link>
							</div>
						</div>
						<div
							className="bg-white shadow-md rounded-lg px-10 py-6 bg-opacity-30 hover:bg-opacity-100">
							<h2 className="text-2xl font-bold text-center text-gray-900">
								Server and Hosting
							</h2>
							<p className="mt-4 text-center text-gray-800">
								We provide server and hosting service.
							</p>
							<div className="mt-6">
								<Link href="/hosting"
								      className="block button w-full bg-purple-600 text-white text-center font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:bg-indigo-700">
									Server
								</Link>
							</div>
						</div>
						<div
							className="bg-white shadow-md rounded-lg px-10 py-6 bg-opacity-30 hover:bg-opacity-100">
							<h2 className="text-2xl font-bold text-center text-gray-900">
								Software Development
							</h2>
							<p className="mt-4 text-center text-gray-800">
								We provide software development service.
							</p>
							<div className="mt-6">
								<Link href="/software"
								      className="block button w-full bg-purple-600 text-white text-center font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:bg-indigo-700">
									Software
								</Link>
							</div>
						</div>
						<div
							className="bg-white shadow-md rounded-lg px-10 py-6 bg-opacity-30 hover:bg-opacity-100">
							<h2 className="text-2xl font-bold text-center text-gray-900">
								Artificial Intelligence
							</h2>
							<p className="mt-4 text-center text-gray-800">
								We provide AI development solution.
							</p>
							<div className="mt-6">
								<Link href="/ai-development"
								      className="block button w-full bg-purple-600 text-white text-center font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:bg-indigo-700">
									Artificial Intelligence
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
