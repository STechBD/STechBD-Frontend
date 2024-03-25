import { safeColorList } from './theme'


/**
 * Safe color list for Tailwind CSS.
 *
 * @type { string[] } Safe color list for Tailwind CSS.
 * @since 3.0.0
 */
const amount: number = 20
const list: string[] = [ ...safeColorList ]
const array: number[] = [ ...Array(amount) ]

array.map((_, index: number) => {
	list.push(`grid-cols-${ index }`)
	list.push(`lg:grid-cols-${ index }`)
});


export const safeList: string[] = list
