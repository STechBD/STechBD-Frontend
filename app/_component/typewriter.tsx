'use client'

import { JSX, useEffect, useState } from 'react'


/**
 * Typewriter component.
 *
 * @param content
 * @param speed
 * @constructor
 */
export default function Typewriter({ content, speed = 100 }: any): JSX.Element {
	const [ text, setText ] = useState<string>('')
	const [ index, setIndex ] = useState<number>(0)

	useEffect(() => {
		const timer = setTimeout((): void => {
			if (index < content.length) {
				setText((prevText: string) => prevText + content.charAt(index))
				setIndex((prevIndex: number) => prevIndex + 1)
			}
		}, speed)

		return () => clearTimeout(timer)
	}, [ index, content ])

	return (
		<>
			{ text }
		</>
	)
}
