import { JSX, FC } from 'react'


/**
 * Hero Component for Domain Registration Page
 *
 * @since 1.0.0
 */
export default function Hero(): JSX.Element {
	return (
			<div className="h-screen w-screen">
				<div className="absolute inset-0 h-screen w-screen bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
				<div className="h-full w-full flex flex-col justify-center items-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Domain Registration</h1>
					<p className="mt-4 text-xl text-gray-500">
						We will help you to choose a domain name for your website.
					</p>
					<div className="mt-10 w-full max-w-md">
						<span>
						<label htmlFor="domain" className="sr-only">Domain Name</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<span className="text-gray-500 sm:text-sm">@</span>
							</div>
							<input type="text" name="domain" id="domain" className="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							       placeholder="Domain Name"/>
							<div className="absolute inset-y-0 right-0 flex items-center">
								<label htmlFor="extension" className="sr-only">Domain Extension</label>
								<select id="extension" name="extension"
								        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
									<option>.com</option>
									<option>.net</option>
									<option>.org</option>
								</select>
							</div>
						</div>
						</span>
						<button type="submit"
						        className="mt-3 w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
					</div>
					{/* Grid to list domain names with price */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
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
