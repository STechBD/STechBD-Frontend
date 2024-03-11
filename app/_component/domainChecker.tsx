'use client'

import { JSX, useState } from 'react'


/**
 * The Domain Checker component.
 *
 * @returns { JSX.Element } The Domain Checker component.
 * @since 3.0.0
 */
export default function DomainChecker(): JSX.Element {
	const [ showDomainDropdown, setShowDomainDropdown ] = useState<boolean>(false)
	const [ extension, setExtension ] = useState<string>('.com')
	const [ name, setName ] = useState<string>('')
	const [ domainChecking, setDomainChecking ] = useState<boolean>(false)
	const [ domainLoading, setDomainLoading ] = useState<boolean>(false)
	const [ domainError, setDomainError ] = useState<string | false>(false)
	const [ domainAvailable, setDomainAvailable ] = useState<boolean>(false)

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

	const checkDomain = async (): Promise<void> => {
		setDomainChecking(true)
		setDomainLoading(true)

		const data: Response = await fetch('/domain/check/' + name + extension, {
			method: 'GET',
		})

		const res = await data.json()

		if (res.status === 400) {
			setDomainError(res.body.error)
			setDomainChecking(false)
			setDomainLoading(false)
		} else {
			setDomainAvailable(res.body.available)
			setDomainChecking(false)
			setDomainLoading(false)
		}
	}

	return (
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
					       onChange={ (event): void => {
						       setName(event.target.value)
					       } } value={ name }
					       className="block w-full pl-9 pr-12 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
					/>
					<div className="absolute inset-y-0 right-0 flex items-center">
						<label htmlFor="extension" className="sr-only">
							Domain Extension
						</label>
						<div onClick={ toggleDomainDropdown }
						     className="flex items-center justify-center gap-2 cursor-pointer focus:ring-secondary focus:border-secondary h-full py-0 pl-16 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
						>
							{ extension }
							<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"
							     aria-hidden="true"
							     xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12,16a2.5,2.5,0,0,1-1.768-.731L4.939,9.975,7.061,7.854,12,12.793l4.939-4.939,2.122,2.121-5.293,5.293A2.5,2.5,0,0,1,12,16Z"/>
							</svg>
						</div>
						{ showDomainDropdown && (
							<div
								className="absolute top-full left-0 w-full max-h-48 overflow-y-auto bg-white border border-black border-opacity-10 rounded py-2"
							>
								<ul className="list-none">
									{ domain.map((type: any, index: number) => (
										<>
											<li key={ index } className="px-3 py-1 text-sm cursor-default font-bold">
												{ type.name }
											</li>
											{ type.extension.map((ext: string, extIndex: number) => (
												<li key={ `${ index }-${ extIndex }` }
													className="px-3 py-1 ml-2 text-sm cursor-pointer hover:text-white hover:bg-gray-600"
													onClick={ (): void => {
														setExtension(ext)
														setShowDomainDropdown(false)
													} }
												>
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
			<button type="submit" onClick={ (): void => {
				setDomainChecking(false)
				setDomainError(false)
				checkDomain()
			} }
			        className="mt-3 w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary cursor-pointer hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
				{ domainLoading ? (
					<div role="status" aria-label="loading"
					     className="animate-spin inline-block w-6 h-6 border-[5px] border-current border-t-transparent text-blue-600 rounded-full dark:text-white">
											<span className="sr-only">
												Loading ...
											</span>
					</div>
				) : (
					<>Search</>
				) }
			</button>
			<div className={ domainChecking ? 'block my-3' : 'hidden' }>
				{
					!domainLoading && domainError ? (
						<div role="alert"
						     className="flex items-center bg-red-500 text-white font-bold px-4 py-3">
							<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
								<circle cx="10.553" cy="14.447" r="1"/>
							</svg>
							<>{ domainError }</>
						</div>
					) : (
						!domainLoading && domainAvailable ? (
							<div role="alert"
							     className="flex items-center bg-green-500 text-white font-bold px-4 py-3">
								<svg className="w-4 h-4 mr-2" fill="currentColor"
								     viewBox="0 0 16 16">
									<path
										d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
								</svg>
								<>Available</>
							</div>
						) : (
							<div role="alert"
							     className="flex items-center bg-red-500 text-white font-bold px-4 py-3">
								<svg className="w-4 h-4 mr-2" fill="currentColor"
								     viewBox="0 0 16 16">
									<path
										d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
									<circle cx="10.553" cy="14.447" r="1"/>
								</svg>
								<>Not Available</>
							</div>
						)
					)
				}
			</div>
		</div>
	)
}
