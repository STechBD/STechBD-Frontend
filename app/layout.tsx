import '@/style/globals.scss'
import React, { JSX } from 'react'
import meta from '@/data/metadata'
import type { Metadata } from 'next'
import Cursor from '@/component/cursor'
import Header from '@/component/header'
import Footer from '@/component/footer'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/context/reduxProvider'
import { NextFont } from 'next/dist/compiled/@next/font'


/**
 * The font family for the whole app.
 *
 * @see https://fonts.google.com/specimen/Inter
 * @since 3.0.0
 */
const inter: NextFont = Inter({ subsets: [ 'latin' ] })


/**
 * Configures and returns the SEO metadata.
 *
 * @constant { Metadata } metadata The structured metadata for SEO purposes
 * @since 3.0.0
 */
export const metadata: Metadata = meta


/**
 * The Root Layout for the whole website.
 *
 * @returns { JSX.Element } Root layout for the whole website.
 * @since 3.0.0
 */
export default function RootLayout({ children, }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en">
		<body className={ inter.className + ' dark:bg-gray-900' }>
		<ReduxProvider>
			<Cursor/>
			<Header/>
			<main className="min-h-screen">
				{ children }
			</main>
			<Footer/>
		</ReduxProvider>
		</body>
		</html>
	)
}
