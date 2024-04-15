'use client'

import { FormEvent, JSX, useState } from 'react'


export default function Form(): JSX.Element {
	const url: string = process.env.WHMCS_API_URL || 'https://cpanel.stechbd.net/includes/api.php'
	const identifier: string = process.env.WHMCS_API_IDENTIFIER || 'stechbd'
	const secret: string = process.env.WHMCS_API_SECRET || 'stechbd'
	const [ token, setToken ] = useState<string>('')
	const [ name, setName ] = useState<string>('')
	const [ email, setEmail ] = useState<string>('')
	const [ department, setDepartment ] = useState<number>()
	const [ priority, setPriority ] = useState<string>('')
	const [ message, setMessage ] = useState<string>('')

	const formHandler = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault()

		if (!name || !email || !department || !priority || !message) {
			console.log('All fields are required.')
			return
		}

		if (department < 1 || department > 4) {
			console.log('Invalid department.')
			return
		}

		if (priority !== 'Low' && priority !== 'Medium' && priority !== 'High') {
			console.log('Invalid priority.')
			return
		}

		if (message.length < 10) {
			console.log('Message is too short. Minimum 10 words is required.')
			return
		}

		if (message.length > 500) {
			console.log('Message is too long. Maximum 500 words is allowed.')
			return
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			console.log('Invalid email address.')
			return
		}

		if (!/^[\w\s.]{3,50}$/.test(name)) {
			console.log('Invalid name. Name must be between 3 and 50 characters long. Only alphabets, dots, and spaces are allowed.')
			return
		}

		console.log({ name, email, department, priority, message })
	}

	return (
		<form onSubmit={ (event) => formHandler(event) }>
			<div>
				<label htmlFor="name" className="block text-lg font-medium text-gray-900 dark:text-gray-100">
					Full Name
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
			<div className="mt-4">
				<label htmlFor="email" className="block text-lg font-medium text-gray-900 dark:text-gray-100">
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
			<div className="mt-4 w-full flex gap-5">
				<div className="w-1/2">
					<label
						htmlFor="department"
						className="block text-lg font-medium text-gray-900 dark:text-gray-100"
					>
						Department
					</label>
					<div className="mt-1">
						<select
							name="department"
							onChange={ (event) => setDepartment(parseInt(event.target.value)) }
							className="block w-full h-8 border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
						>
							<option value="1">
								Sales Department
							</option>
							<option value="2">
								Support Department
							</option>
							<option value="3">
								Billing Department
							</option>
							<option value="4">
								Abuse Department
							</option>
						</select>
					</div>
				</div>
				<div className="w-1/2">
					<div className="">
						<label
							htmlFor="priority"
							className="block text-lg font-medium text-gray-900 dark:text-gray-100"
						>
							Priority
						</label>
						<div className="mt-1">
							<select
								name="priority"
								onChange={ (event) => setPriority(event.target.value) }
								className="block w-full h-8 border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
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
			<div className="mt-4">
				<label htmlFor="message" className="block text-lg font-medium text-gray-900 dark:text-gray-100">
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
			<div className="mt-4">
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
