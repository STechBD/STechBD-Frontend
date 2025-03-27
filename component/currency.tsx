import { JSX } from 'react'
import config from '@/stech.config'
import type { Currency } from '@/data/type'


/**
 * The Currency component to change the currency of pricing table, comparison table, or any other component.
 *
 * @param currency The current currency
 * @param callback The callback function to be run after changing the currency
 *
 * @returns { JSX.Element } The currency component
 * @since 3.0.0
 */
export default function Currency({ currency, callback }: {
	currency: string
	callback?: (currency: string) => void
}): JSX.Element {
	const currencies: Currency[] = config.currencies

	return (
		<div className="flex justify-center items-center mb-10">
			{ currencies.map((item: Currency): JSX.Element => {
				return (
					<button
						key={ item.name }
						className={ `px-5 py-3 text-lg lg:text-xl first:rounded-l-lg last:rounded-r-lg focus:outline-none ${ currency === item.name ? 'bg-primary text-white' : 'bg-gray-200 text-primary' }` }
						onClick={ (): void => {
							callback && callback(item.name)
						} }
					>
						{ item.name.toUpperCase() } ({ item.symbol })
					</button>
				)
			}) }
		</div>
	)
}
