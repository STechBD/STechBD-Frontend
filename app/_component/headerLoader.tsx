'use client'

import { JSX } from 'react'
import { usePathname } from 'next/navigation'
import { validatePath } from '@/app/_function/utility'
import Header from '@/app/_component/header'
import AnimatedLogo from '@/app/_component/animatedLogo'


/**
 * Default template for the whole website.
 *
 * @returns { JSX.Element } Template for the whole website.
 * @since 3.0.0
 */
export default function HeaderLoader(): JSX.Element {
	const path: string = usePathname()

	const data = {
		siteTitle: 'S Technologies',
		siteLogo: <AnimatedLogo/>,
		productTitle: 'Install Express',
		productLogo: 'Install-Express-Logo-Light.svg',
	}

	return (path.startsWith('/product') && path !== '/product' && validatePath(path)) ? (
		<Header type="product" data={ data }/>
	) : (
		<Header/>
	)
}
