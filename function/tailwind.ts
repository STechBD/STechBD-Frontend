import config from '../stech.config'


const themes: string[] = config.themes


/**
 * Safe color list for Tailwind CSS.
 *
 * @type { string[] } Safe color list for TailwindCSS.
 * @since 3.0.0
 */
const safeColorList: string[] = []

themes.map((theme) => {
	const shades: number[] = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 ]

	shades.map((shade) => {
		safeColorList.push(`bg-${ theme }-${ shade }`)
	})
})
safeColorList.push('grid-cols-8')
safeColorList.push('grid-cols-10')


/**
 * Safe color list for Tailwind CSS.
 *
 * @type { string[] } Safe color list for TailwindCSS.
 * @since 3.0.0
 */
const amount: number = 20
const list: string[] = [ ...safeColorList ]
const array: number[] = [ ...Array(amount) ]

array.map((_, index: number) => {
	list.push(`grid-cols-${ index }`)
	list.push(`lg:grid-cols-${ index }`)
})


export const safeList: string[] = list
