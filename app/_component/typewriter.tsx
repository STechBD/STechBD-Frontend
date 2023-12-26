'use client'

import { JSX, useState, useEffect } from 'react'


export default function Typewriter({ content, speed }: any): JSX.Element {
	const [text, setText] = useState('')
	const [index, setIndex] = useState(0)
	speed = speed || 100 // Adjust typing speed (in milliseconds)

	useEffect(() => {
		const timer = setTimeout((): void => {
			if (index < content.length) {
				setText((prevText: string) => prevText + content.charAt(index))
				setIndex((prevIndex: number) => prevIndex + 1)
			}
		}, speed)

		return () => clearTimeout(timer)
	}, [index, content])

	return (
		<>
			{text}
		</>
	)
}
