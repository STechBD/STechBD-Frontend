import { JSX } from 'react'


/**
 * The Currency component to change the currency of pricing table, comparison table, or any other component.
 * @param currency
 * @param callback
 * @returns { JSX.Element } The currency component.
 * @since 3.0.0
 */
export default function Currency({
	                                 currency, callback = () => {
	}
                                 }: any): JSX.Element {
	const currencies = [
		{
			name: 'bdt',
			symbol: '৳',
		},
		{
			name: 'usd',
			symbol: '$',
		},
	]

	return (
		<div className="flex justify-center items-center mb-10">
			{
				currencies.map((item, index: number): JSX.Element => {
					return (
						<button
							key={ index }
							className={ `px-5 py-3 text-lg lg:text-xl rounded-lg focus:outline-none ${ currency === item.name ? 'bg-primary text-white' : 'bg-gray-200 text-primary' }` }
							onClick={ (): void => {
								callback(item.name)
							} }
						>
							{ item.name.toUpperCase() } ({ item.symbol })
						</button>
					)
				})
			}
		</div>
	)
}
