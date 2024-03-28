'use client'

import { JSX } from 'react'
import Link from 'next/link'
import { Typewriter } from '@/app/_component/typewriter'
import { AdvancedHeroEffect } from '@/app/_component/background'
import { Bounce } from '@/app/_component/animation'
import DomainChecker from '@/app/_component/domainChecker'


/**
 * The Error component.
 *
 * @returns { JSX.Element } The Error component.
 * @since 3.0.0
 */
export default function Error({ title, description }: { title: string, description: string }): JSX.Element {
	const services = [
		{
			title: 'Domain Name Registration',
			description: 'We provide domain registration service.',
			button: 'Domain',
			link: '/domain',
		},
		{
			title: 'Server and Hosting',
			description: 'We provide server and hosting service.',
			button: 'Server',
			link: '/server',
		},
		{
			title: 'Software Development',
			description: 'We provide software development service.',
			button: 'Software',
			link: '/software',
		},
		{
			title: 'Artificial Intelligence',
			description: 'We provide AI development solution.',
			button: 'Artificial Intelligence',
			link: '/ai-development',
		},
	]

	return (
		<div className="relative min-h-screen overflow-hidden -mt-24 py-16 md:py-24">
			<AdvancedHeroEffect/>
			<div className="relative h-full min-h-screen">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="pt-32 pb-12 md:pt-40 md:pb-20">
						<div className="max-w-4xl flex flex-col items-center mx-auto text-center">
							<h1
								className="text-5xl md:text-6xl font-extrabold text-white tracking-tight sm:text-7xl"
							>
								<span
									className="block md:inline sm:block bg-primary text-white h-12"
								>
									{ title.slice(0, 1) }<Typewriter content={ title.slice(1) } speed={ 100 }/>
								</span>
								<span className="block text-gray-800 xl:inline"> Error!</span>
							</h1>
							<p className="mt-3 text-base text-gray-800 dark:text-gray-200 sm:mt-5 sm:text-xl lg:text-2xl">
								{ description }
							</p>
							<DomainChecker/>
							<div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
								<div
									className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"
								>
									<Link href="/server"
									      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary sm:px-8"
									>
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
					<div className="relative hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
						{
							services.map((service, index) => (
								<div
									key={ index }
									className="bg-white shadow-md rounded-lg px-10 py-6 bg-opacity-30 hover:bg-opacity-100 dark:hover:bg-opacity-0"
								>
									<Bounce>
										<h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
											{ service.title }
										</h2>
										<p className="mt-4 text-center text-gray-800 dark:text-gray-200">
											{ service.description }
										</p>
										<div className="mt-6">
											<Link href={ service.link }
											      className="block button w-full bg-primary text-white text-center font-bold py-2 px-4 rounded hover:bg-secondary focus:outline-none focus:bg-secondary"
											>
												{ service.button }
											</Link>
										</div>
									</Bounce>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}
