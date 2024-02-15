'use client'

import { FormEvent, JSX, useState } from 'react'


export default function Form(): JSX.Element {
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
						className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
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
						className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
					/>
				</div>
			</div>
			<div className="w-full flex gap-5">
				<div className="w-1/2">
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
							className="block w-full h-8 border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
						>
							<option value="Sales">
								Sales Department
							</option>
							<option value="Support">
								Support Department
							</option>
							<option value="Billing">
								Billing Department
							</option>
							<option value="Abuse">
								Abuse Department
							</option>
						</select>
					</div>
				</div>
				<div className="w-1/2">
					<div className="mt-1">
						<label htmlFor="priority"
						       className="block text-lg font-medium text-gray-900">
							Priority
						</label>
						<div className="mt-1">
							<select
								name="priority"
								onChange={ (event) => setPriority(event.target.value) }
								className="block w-full h-8 border-b border-gray-100 rounded-md shadow-sm hover:border-secondary hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
							>
								<option value="Low">
									Low
								</option>
								<option value="Medium">
									Medium
								</option>
								<option value="High">
									High
								</option>
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
						className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
					/>
				</div>
			</div>
			<div>
				<button
					type="submit"
					className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm hover:border-secondary text-lg font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
				>
					Submit
				</button>
			</div>
		</form>
	)
}
