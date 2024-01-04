'use client'

import { JSX, useEffect, useState } from 'react'


/**
 * Typewriter component.
 *
 * @param content
 * @param speed
 *
 * @returns JSX.Element
 *
 * @since 3.0.0
 */
export function Typewriter({ content, speed = 100 }: any): JSX.Element {
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


/**
 * Random Typewriter component.
 * Randomly change the content of the typewriter.
 * If loop is true, it will change the content randomly after every change millisecond.
 * If loop is false, it will change the content randomly after every change millisecond only once.
 *
 * @param content
 * @param speed
 * @param change
 *
 * @param random
 * @param loop
 * @returns JSX.Element
 *
 * @since 3.0.0
 */
export function RandomTypewriter({ content = [], speed = 100, change = 3000, random = true, loop = true }: any): JSX.Element {
	const [ index, setIndex ] = useState<number>(random ? Math.floor(Math.random() * content.length) : 0)

	useEffect(() => {
		if (loop) {
			const timer = setInterval((): void => {
				if (random) {
					setIndex(Math.floor(Math.random() * content.length))
				} else {
					setIndex((prevIndex: number) => prevIndex + 1)
				}
			}, change)

			return () => clearInterval(timer)
		} else {
			const timer = setTimeout((): void => {
				if (random) {
					setIndex(Math.floor(Math.random() * content.length))
				} else {
					setIndex((prevIndex: number) => prevIndex + 1)
				}
			}, change)

			return () => clearTimeout(timer)
		}
	}, [])

	return (
		<Typewriter content={ content[index] } speed={ speed } key={ index } />
	)
}
