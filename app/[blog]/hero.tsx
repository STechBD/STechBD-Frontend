'use client'

import { JSX } from 'react'
import { AdvancedHeroEffect } from '@/app/_component/background'


/**
 * The Hero component for the Blog Post page.
 *
 * @returns { JSX.Element } The hero component.
 * @since 3.0.0
 */
export default function Hero(): JSX.Element {
	return (
		<div className="fixed top-0 bottom-0 left-0 right-0 min-h-screen overflow-hidden py-16 md:py-24">
			<AdvancedHeroEffect/>
		</div>
	)
}
