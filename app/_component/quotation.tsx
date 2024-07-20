'use client'

import { ChangeEvent, FormEvent, JSX, useState } from 'react'
import { ServiceCustomField } from '@/app/_data/type';


/**
 * The Price Quotation component.
 *
 * @returns { JSX.Element } The Price Quotation component.
 * @since 3.0.0
 */
export default function Quotation({ custom }: { custom: ServiceCustomField[] }): JSX.Element {
	const url: string = process.env.WHMCS_API_URL || 'https://cpanel.stechbd.net/includes/api.php'
	const identifier: string = process.env.WHMCS_API_IDENTIFIER || 'stechbd'
	const secret: string = process.env.WHMCS_API_SECRET || 'stechbd'
	const [ token, setToken ] = useState<string>('')
	const [ name, setName ] = useState<string>('')
	const [ email, setEmail ] = useState<string>('')
	const [ department, setDepartment ] = useState<number>()
	const [ priority, setPriority ] = useState<string>('')
	const [ message, setMessage ] = useState<string>('')
	const [ customField, setCustomField ] = useState<any>(null)
	const [ state, setState ] = useState<any>(null)

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

	const optionChange = (type: number | undefined, data: ServiceCustomField, event: ChangeEvent<HTMLSelectElement>, action: any): void => {
		setCustomField(action)

		if (type === 2) {

		}
	}

	return (
		<form onSubmit={ (event) => formHandler(event) }>
			<div className="mt-4">
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
			<input
				name="department"
				value="1"
				hidden={ true }
				className="hidden"
			/>
			<input
				name="priority"
				value="High"
				hidden={ true }
				className="hidden"
			/>
			{ custom.map((field: ServiceCustomField, index: number) => {
				const options: string[] | { id: string, title: string }[] | {
					[key: string]: string[]
				} = field.option ?? []
				const condition: { [key: string]: string } = field.optionCondition ?? {}

				if (field.type === 'select') {
					if (field.optionType === 3) {
						if (!state.find(field.name, name)) {
							const stateValue = {
								name: field.name,
								base: field.optionBase,
								current: Object.keys(condition).map((key: string, index: number) => (index === 0 && key))
							}
							setState(stateValue)
						}
					}

					return (
						<div key={ index } className="mt-4">
							<label
								htmlFor={ field.name }
								className="block text-lg font-medium text-gray-900 dark:text-gray-100"
							>
								{ field.name }
							</label>
							<div className="mt-1">
								<select
									name={ field.name }
									onChange={ (event) => optionChange(field.optionType, field, event, {
										...customField,
										[field.name]: event.target.value
									}) }
									className="block w-full h-8 border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
								>
									<option value="">
										Select
									</option>
									{ field.optionType === 1 ? (
										options.map((option: string, index: number) => (
											<option key={ index } value={ option }>
												{ option }
											</option>))
									) : field.optionType === 2 ? (
										options.map((option: { id: string, title: string }, index: number) => (
											<option key={ index } value={ option.title }>
												{ option.title }
											</option>))
									) : (
										Object.keys(options).map((option: string, index: number) => (
											<option key={ index } value={ option }>
												{ option }
											</option>
										))
									) }
								</select>
							</div>
						</div>
					)
				} else if (field.type === 'slider') {
					return (
						<div key={ index } className="mt-4">
							<label htmlFor={ field.name }
							       className="block text-lg font-medium text-gray-900 dark:text-gray-100">
								{ field.name }
							</label>
							<div className="mt-1">
								<input
									type="range"
									name={ field.name }
									onChange={ (event) => setCustomField({
										...customField,
										[field.name]: event.target.value
									}) }
									className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
								/>
							</div>
						</div>
					)
				} else if ((field.type === 'radio' || field.type === 'checkbox') && Array.isArray(options)) {
					return (
						<div key={ index } className="mt-4">
							<label className="block text-lg font-medium text-gray-900 dark:text-gray-100">
								{ field.name }
							</label>
							<div className="mt-1">
								{ options.map((option: string, index: number) => (
									<label key={ index } className="inline-flex items-center">
										<input
											type={ field.type }
											name={ field.name }
											value={ option }
											onChange={ (event) => setCustomField({
												...customField,
												[field.name]: event.target.value
											}) }
											className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300"
										/>
										<span className="ml-2 text-lg text-gray-900 dark:text-gray-100">
											{ option }
										</span>
									</label>
								)) }
							</div>
						</div>
					)
				} else if (field.type === 'date' || field.type === 'time' || field.type === 'datetime' || field.type === 'file' || field.type === 'password' || field.type === 'email' || field.type === 'url' || field.type === 'tel' || field.type === 'color' || field.type === 'hidden' || field.type === 'range') {
					return (
						<div key={ index } className="mt-4">
							<label htmlFor={ field.name }
							       className="block text-lg font-medium text-gray-900 dark:text-gray-100">
								{ field.name }
							</label>
							<div className="mt-1">
								<input
									type={ field.type }
									name={ field.name }
									onChange={ (event) => setCustomField({
										...customField,
										[field.name]: event.target.value
									}) }
									className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
								/>
							</div>
						</div>
					)
				} else if (field.type === 'list') {
					return (
						<div key={ index } className="mt-4">
							<label className="block text-lg font-medium text-gray-900 dark:text-gray-100">
								{ field.name }
							</label>
							<div className="mt-1">
								{ Object.values(options).map((option: string, index: number) => (
									<div key={ index } className="mb-2 grid grid-cols-12 gap-4">
										<div className="col-span-4">
											<label
												htmlFor={ option }
												className="block text-lg font-medium text-gray-900 dark:text-gray-100"
											>
												{ option }
											</label>
										</div>
										<div className="col-span-8">
											<input
												type="checkbox"
												name={ option }
												onChange={ (event) => setCustomField({
													...customField,
													[option]: event.target.value
												}) }
												className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
											/>
										</div>
									</div>
								)) }
							</div>
						</div>
					)
				} else {
					return (
						<div key={ index } className="mt-4">
							<label htmlFor={ field.name }
							       className="block text-lg font-medium text-gray-900 dark:text-gray-100">
								{ field.name }
							</label>
							<div className="mt-1">
								<input
									type="text"
									name={ field.name }
									onChange={ (event) => setCustomField({
										...customField,
										[field.name]: event.target.value
									}) }
									className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
								/>
							</div>
						</div>
					)
				}
			}) }
			<div className="mt-4">
				<label htmlFor="message" className="block text-lg font-medium text-gray-900 dark:text-gray-100">
					Requirements for the Project
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
