'use client'

import { FormEvent, JSX, useState } from 'react'


/**
 * The Hero component for the Contact page.
 *
 * @returns { JSX.Element } The Hero component.
 * @since 3.0.0
 */
export default function Hero(): JSX.Element {
	const [ name, setName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ department, setDepartment ] = useState('')
	const [ priority, setPriority ] = useState('')
	const [ message, setMessage ] = useState('')

	const formHandler = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		console.log({ name, email, department, priority, message })
	}

	return (
		<>
			<div className="relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"/>
				</div>
				<div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
							<span className="block">
								Contact Us
							</span>
						</h1>
						<p className="mt-4 text-xl text-white">
							Fill out the form below and we will get back to you as soon as possible.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<div>
							<h2 className="text-2xl font-extrabold tracking-tight text-purple-600 sm:text-3xl">
								Contact Information
							</h2>
							<div className="mt-3">
								<p className="text-lg text-gray-900">
									S Technologies Headquarters
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Dhaka - 1000
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Bangladesh
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Phone: <a href="tel:+8801935446721">+(880) 1935-446721</a>
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Email: <a href="mailto:contact@stechbd.net">contact@stechbd.net</a>
								</p>
							</div>
						</div>
						<div className="mt-12 lg:mt-0 lg:col-span-2">
							<form onSubmit={ (event) => formHandler(event) }
							      className="grid grid-cols-1 gap-y-6"
							>
								<div>
									<label htmlFor="name" className="block text-lg font-medium text-gray-900">
										Full name
									</label>
									<div className="mt-1">
										<input
											type="text"
											name="name"
											autoComplete="name"
											onChange={ (event) => setName(event.target.value) }
											className="block w-full border-gray-900 rounded-md shadow-sm hover:border-indigo-700 focus:ring-indigo-700 focus:border-indigo-700 sm:text-lg"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="email" className="block text-lg font-medium text-gray-900">
										Email
									</label>
									<div className="mt-1">
										<input
											name="email"
											type="email"
											autoComplete="email"
											onChange={ (event) => setEmail(event.target.value) }
											className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#ff80b5] focus:border-[#ff80b5] sm:text-lg"
										/>
									</div>
								</div>
								<div className="w-full flex gap-5">
									<div>
										<div className="flex justify-between">
											<label htmlFor="department"
											       className="block text-lg font-medium text-gray-900">
												Department
											</label>
										</div>
										<div className="mt-1">
											<select
												name="department"
												onChange={ (event) => setDepartment(event.target.value) }
												className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#ff80b5] focus:border-[#ff80b5] sm:text-lg"
											>
												<option value="Sales">Sales Department</option>
												<option value="Support">Support Department</option>
												<option value="Billing">Billing Department</option>
												<option value="Abuse">Abuse Department</option>
											</select>
										</div>
									</div>
									<div>
										<div className="mt-1">
											<label htmlFor="priority"
											       className="block text-lg font-medium text-gray-900">
												Priority
											</label>
											<div className="mt-1">
												<select
													name="priority"
													onChange={ (event) => setPriority(event.target.value) }
													className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#ff80b5] focus:border-[#ff80b5] sm:text-lg"
												>
													<option value="Low">Low</option>
													<option value="Medium">Medium</option>
													<option value="High">High</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div>
									<label htmlFor="message" className="block text-lg font-medium text-gray-900">
										Message
									</label>
									<div className="mt-1">
										<textarea
											name="message"
											rows={ 4 }
											onChange={ (event) => setMessage(event.target.value) }
											className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#ff80b5] focus:border-[#ff80b5] sm:text-lg"
										/>
									</div>
								</div>
								<div>
									<button
										type="submit"
										className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
