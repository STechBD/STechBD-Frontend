'use client'

import config from '@/stech.config'
import MarkdownIt from 'markdown-it'
import Currency from '@/component/currency'
import { ServiceCustomField } from '@/data/type'
import 'react-markdown-editor-lite/lib/index.css'
import { setCurrency } from '@/context/reduxStore'
import { useDispatch, useSelector } from 'react-redux'
import MarkdownEditor from 'react-markdown-editor-lite'
import React, { JSX, useState, ChangeEvent, FormEvent } from 'react'


interface SliderProps {
	name: string
	min: number
	max: number
	step: number
	onChange: (value: number) => void
	labelFormatter?: (value: number) => string
}

function Slider({ name, min, max, step, onChange, labelFormatter }: any): JSX.Element {
	const [ value, setValue ] = useState<number>((min + max) / 2)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value)
		setValue(newValue)
		onChange(newValue)
	}

	const formatLabel = (val: number) => {
		return labelFormatter ? labelFormatter(val) : val
	}

	return (
		<div className="slider-container">
			<label htmlFor={ name } className="block text-lg font-bold text-gray-900 dark:text-gray-100">
				{ name }
			</label>
			<input
				type="range"
				id={ name }
				name={ name }
				min={ min }
				max={ max }
				step={ step }
				value={ value }
				onChange={ handleChange }
				className="slider"
			/>
			<div className="flex justify-between mt-2">
				<span>
					{ formatLabel(min) }
				</span>
				<span>
					{ formatLabel(max) }
				</span>
			</div>
			<div className="text-center mt-1">
				{ formatLabel(value) }
			</div>
		</div>
	)
}


/**
 * The Price Quotation component.
 *
 * @returns { JSX.Element } The Price Quotation component.
 * @since 3.0.0
 */
export default function Quotation({ custom }: { custom: ServiceCustomField[] }): JSX.Element {
	const url: string = process.env.WHMCS_API_URL || `${ config.info.cp }/includes/api.php`
	const identifier: string = process.env.WHMCS_API_IDENTIFIER || 'stechbd'
	const secret: string = process.env.WHMCS_API_SECRET || 'stechbd'
	const currency = useSelector((state: any): string => state.currency)
	const dispatch = useDispatch()
	const [ token, setToken ] = useState<string>('')
	const [ name, setName ] = useState<string>('')
	const [ email, setEmail ] = useState<string>('')
	const [ department, setDepartment ] = useState<number>()
	const [ priority, setPriority ] = useState<string>('')
	const [ message, setMessage ] = useState<string>('')
	const [ customField, setCustomField ] = useState<({
		id: number,
		name: string,
		value: string
	} | any)[]>(custom.map((data: ServiceCustomField, index) => ({ id: index, name: data.name, value: '' })))
	const [ state, setState ] = useState<({ name: string, data: (string | number)[] } | any)[]>([ {
		name: 'Budget',
		data: [ 15000, 50000, 5000 ]
	} ])


	/**
	 * Form Handler function to handle the form submission.
	 *
	 * @param { FormEvent<HTMLFormElement> } event The form event.
	 * @returns { void } Nothing.
	 * @since 3.0.0
	 */
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

	const changeCurrency = (currency: string): void => {
		dispatch(setCurrency(currency))
	}

	const changeDescription = ({ text }: { text: string }): void => {
		setMessage(text)
	}

	const customFieldEditor = (action: { id: number, name: string, value: string }): void => {
		console.log(customField)
		const serial: number = customField.findIndex(list => list.id === action.id)
		const newCustomField = customField
		newCustomField[serial] = action
		setCustomField(newCustomField)
	}

	const optionChangeProcess = (base: string, field: ServiceCustomField, event: ChangeEvent<HTMLSelectElement>, action: {
		id: number,
		name: string,
		value: string | string[]
	}): boolean => {
		const serial: number = customField.findIndex(list => list.id === action.id)
		const newCustomField = customField
		newCustomField[serial] = action
		setCustomField(newCustomField)

		// Get field's "data-value" attribute to get the value
		const value: string = event.target.selectedOptions[0].getAttribute('data-value') || ''

		const selectedField = custom.find((data: ServiceCustomField) => data.name === base)

		const data: (string | number)[] =
			field.type === 'select' && selectedField?.option && value in selectedField.option
				? (selectedField.option as Record<string, string[]>)[value]
				: field.type === 'slider' && selectedField?.min && selectedField?.max && selectedField?.step
					? [
						selectedField.min?.[value as string]?.[currency as keyof (typeof selectedField.min)[string]] ?? 0,
						selectedField.max?.[value as string]?.[currency as keyof (typeof selectedField.max)[string]] ?? 0,
						selectedField.step?.[value as string]?.[currency as keyof (typeof selectedField.step)[string]] ?? 1,
					]
					: [ 'Error' ]

		/*if (process.env.NODE_ENV === 'development') {
		console.log('selectedField:')
		console.log(selectedField)

			if (field.type === 'select') {
				console.log('Type: Select')
				console.log('Data:')
				console.log(custom.find((field: ServiceCustomField) => field.name === base).option[value])
			} else {
				console.log('Type: Slider')
				console.log('Data:')
				console.log([
					custom.find((field: ServiceCustomField) => field.name === base)[0].min[value][currency],
					custom.find((field: ServiceCustomField) => field.name === base)[0].max[value][currency],
					custom.find((field: ServiceCustomField) => field.name === base)[0].step[value][currency],
				])
			}
		}*/

		const stateValue = {
			name: base, // eg: base = 'Stack'
			data,
		}

		// check if already state with the base name exists then update the data else create new
		const index: number = state.findIndex((s) => s.name === base)
		if (index !== -1) {
			const newState: any[] = state
			newState[index] = stateValue
			setState(newState)
		} else {
			setState([ ...state, stateValue ])
		}

		return true
	}

	const optionChange = (type: number, field: ServiceCustomField, event: ChangeEvent<any>, action: {
		id: number,
		name: string,
		value: string | string[]
	}): void => {
		if (type === 2) {
			if (Array.isArray(field.optionBase)) {
				console.log('Array count: ' + field.optionBase.length)

				field.optionBase.map((base: string) => {
					optionChangeProcess(base, field, event, action)
				})
			} else {
				console.log('Not an array')
				optionChangeProcess(field.optionBase as string, field, event, action)
			}
		}
	}

	const mdParser = new MarkdownIt()

	return (
		<form onSubmit={ (event) => formHandler(event) }>
			{ process.env.NODE_ENV === 'development' && (<>
				<div>
					<h2 className="text-4xl text-primary">
						Custom Fields
					</h2>
					<ol className="text-xl">
						{ customField.map((cf, index) => (
							<li key={ index }>
								{ cf.name }: { cf.value }
							</li>
						)) }
					</ol>
				</div>
				<div>
					<h2 className="text-4xl text-primary">
						States
					</h2>
					<ol className="text-xl">
						{ state?.map(((s, i) => <li key={ i }>
							{ s.name }: { s.data.join(', ') }
						</li>)) }
					</ol>
				</div>
				<div>
					<h2 className="text-4xl text-primary">
						Description
					</h2>
					<div>
						{ message }
					</div>
				</div>
			</>) }
			<div>
				<Currency currency={ currency } callback={ changeCurrency }/>
			</div>
			<div className="mt-4">
				<label htmlFor="name" className="block text-lg font-bold text-gray-900 dark:text-gray-100">
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
				<label htmlFor="email" className="block text-lg font-bold text-gray-900 dark:text-gray-100">
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
				onChange={ (event) => setDepartment(Number(event.target.value)) }
				className="hidden"
			/>
			<input
				name="priority"
				value="High"
				hidden={ true }
				onChange={ (event) => setPriority(event.target.value) }
				className="hidden"
			/>
			{ custom.map((field: ServiceCustomField, index: number): JSX.Element => {
				const options: string[] | { id: string, title: string }[] | {
					[key: string]: string[]
				} = field.option ?? []

				if (field.type === 'select') {
					return (
						<div key={ field.name } className="mt-4">
							<label
								htmlFor={ field.name }
								className="block text-lg font-bold text-gray-900 dark:text-gray-100"
							>
								{ field.name }
							</label>
							<div className="mt-1">
								<select
									name={ field.name }
									onChange={ (event) => optionChange(field.optionType ?? 1, field, event, {
										id: index,
										name: field.name,
										value: event.target.value,
									}) }
									multiple={ field.multiple ?? false }
									className={ 'block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg ' + (field.multiple === true ? 'h-24' : 'h-8') }
								>
									<option value="">
										Select
									</option>
									{ field.optionType === 1 ? (
										(options as string[]).map((option: string, index: number) => (
											<option key={ index } value={ option }>
												{ option }
											</option>))
									) : field.optionType === 2 ? (
										(options as { id: string, title: string }[]).map((option: {
											id: string,
											title: string
										}, index: number) => (
											<option key={ index } value={ option.title } data-value={ option.id }>
												{ option.title }
											</option>))
									) : (
										state?.map((option, index: number) => option.name === field.name && (
											option.data?.map((value: string, index: number) => (
												<option key={ index } value={ value }>
													{ value }
												</option>
											))
										))
									) }
								</select>
							</div>
						</div>
					)
				} else if (field.type === 'slider') {
					const min: number = field.optionType === 3 ? (state?.map((option, index: number) => (
						option.name === field.name && option.data[0]
					)))[0] : 0
					const max: number = field.optionType === 3 ? (state?.map((option, index: number) => (
						option.name === field.name && option.data[1]
					)))[0] : 0
					const step: number = field.optionType === 3 ? (state?.map((option, index: number) => (
						option.name === field.name && option.data[2]
					)))[0] : 0

					return (
						<div key={ index } className="mt-4">
							<label htmlFor={ field.name }
							       className="block text-lg font-bold text-gray-900 dark:text-gray-100"
							>
								{ field.name }
							</label>
							<div className="mt-1">
								<input
									type="range"
									name={ field.name }
									onChange={ (event) => optionChange(field.optionType ?? 1, field, event, {
										id: index,
										name: field.name,
										value: event.target.value,
									}) }
									value={ customField[index].value }
									min={ min }
									max={ max }
									step={ step }
									className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
								/>
							</div>
							<div className="mt-1 flex justify-between">
								<span>
									{ field.optionType === 3 && (
										'Min: ' + min
									) }
								</span>
								<span>
									Current: { customField[index].value }
								</span>
								<span>
									{ field.optionType === 3 && (
										'Max: ' + max
									) }
								</span>
							</div>
						</div>
					)
				} else if ((field.type === 'radio' || field.type === 'checkbox') && Array.isArray(options)) {
					return (
						<div key={ index } className="mt-4">
							<label className="block text-lg font-bold text-gray-900 dark:text-gray-100">
								{ field.name }
							</label>
							<div className="mt-1">
								{ (options as string[]).map((option: string, index: number) => (
									<label key={ index } className="inline-flex items-center">
										<input
											type={ field.type }
											name={ field.name }
											value={ option }
											onChange={ (event) => customFieldEditor({
												id: index,
												name: field.name,
												value: event.target.value
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
							       className="block text-lg font-bold text-gray-900 dark:text-gray-100"
							>
								{ field.name }
							</label>
							<div className="mt-1">
								<input
									type={ field.type }
									name={ field.name }
									onChange={ (event) => customFieldEditor({
										id: index,
										name: field.name,
										value: event.target.value
									}) }
									className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
								/>
							</div>
						</div>
					)
				} else if (field.type === 'list') {
					return (
						<div key={ index } className="mt-4">
							<label className="block text-lg font-bold text-gray-900 dark:text-gray-100">
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
												type="text"
												name={ option }
												onChange={ (event) => customFieldEditor({
													id: index,
													name: option,
													value: event.target.value
												}) }
												className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
											/>
										</div>
									</div>
								)) }
							</div>
						</div>
					)
				} else if (field.type === 'textarea') {
					return (
						<div key={ index } className="mt-4">
							<label htmlFor={ field.name }
							       className="block text-lg font-bold text-gray-900 dark:text-gray-100"
							>
								{ field.name }
							</label>
							<div className="mt-1">
								<textarea
									name={ field.name }
									rows={ 4 }
									onChange={ (event) => setCustomField({
										...customField,
										[field.name]: event.target.value
									}) }
									className="block w-full border-b border-gray-100 rounded-md shadow-sm hover:border-secondary focus:ring-secondary focus:border-secondary sm:text-lg"
								/>
							</div>
						</div>
					)
				} else {
					return (
						<div key={ index } className="mt-4">
							<label htmlFor={ field.name }
							       className="block text-lg font-bold text-gray-900 dark:text-gray-100"
							>
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
				<label htmlFor="message" className="block text-lg font-bold text-gray-900 dark:text-gray-100">
					Requirements for the Project
				</label>
				<div className="mt-1">
					<MarkdownEditor
						value={ message }
						style={ { height: '500px' } }
						renderHTML={ (text: string) => mdParser.render(text) }
						onChange={ changeDescription }
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
