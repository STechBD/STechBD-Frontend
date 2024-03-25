export const themes: string[] = [
	'red',
	'green',
	'teal',
	'blue',
	'indigo',
	'purple',
	'rose',
]


/**
 * Safe color list for Tailwind CSS.
 *
 * @type { string[] } Safe color list for Tailwind CSS.
 * @since 3.0.0
 */
const colorSafeList: string[] = []

themes.map((theme) => {
	const shades: number[] = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 ]

	shades.map((shade) => {
		colorSafeList.push(`bg-${ theme }-${ shade }`)
	})
})
colorSafeList.push('grid-cols-8')
colorSafeList.push('grid-cols-10')

export const safeColorList: string[] = colorSafeList
