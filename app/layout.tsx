import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'
import '@/app/_css/globals.css'
import '@/app/_css/basic.scss'
import Header from '@/app/header'


/**
 * Font family for the whole app.
 *
 * @see https://fonts.google.com/specimen/Inter
 *
 * @since 3.0.0
 */
const inter: NextFont = Inter({ subsets: [ 'latin' ] })


/**
 * Metadata setup for SEO.
 *
 * @since 3.0.0
 */
export const metadata: Metadata = {
	title: 'S Technologies',
	description: 'S Technologies (STechBD.Net) is a leading technology company in Bangladesh. It was founded in 2013. It provides services like domain registration, web hosting, web servers, software development, software as a service (SasS), design solutions, etc. S Technologies has been working in research of new technologies and developing new products for the people.',
}


/**
 * Root layout.
 *
 * @since 3.0.0
 */
export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body className={ inter.className }>
		<Header/>
		<main className="min-h-screen">
			{ children }
		</main>
		</body>
		</html>
	)
}
