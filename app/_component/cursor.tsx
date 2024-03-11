'use client'

import { JSX, useEffect, useState } from 'react'


/**
 * The Cursor component to change the cursor of the app.
 *
 * @returns { JSX.Element } The Cursor component.
 * @since 3.0.0
 */
export default function Cursor(): JSX.Element {
	const [ cursorPosition, setCursorPosition ] = useState({ x: 0, y: 0 })
	const [ isActive, setIsActive ] = useState(false)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setCursorPosition({ x: e.clientX, y: e.clientY })
		}

		const handleMouseEnter = () => {
			setIsActive(true)
		}

		const handleMouseLeave = () => {
			setIsActive(false)
		}

		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseenter', handleMouseEnter)
		document.addEventListener('mouseleave', handleMouseLeave)

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseenter', handleMouseEnter)
			document.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [])

	return (
		<div className="cursor" style={ { left: cursorPosition.x, top: cursorPosition.y } }>
			<div className={ `cursor-dot' + ${ isActive ? ' active' : '' }` }/>
		</div>
	)
}
