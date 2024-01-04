'use client'

import { JSX } from 'react'
import { usePathname } from 'next/navigation'
import { validatePath } from '@/app/_function/utility'
import Header from '@/app/_component/header'
import ProductHeader from '@/app/_component/productHeader'


/**
 * Default template for the whole website.
 *
 * @returns { JSX.Element } Template for the whole website.
 * @since 3.0.0
 */
export default function HeaderLoader(): JSX.Element {
	const path: string = usePathname()

	return (path.startsWith('/product') && path !== '/product' && validatePath(path)) ? <ProductHeader/> : <Header/>
}
