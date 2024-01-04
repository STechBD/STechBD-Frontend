import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'
import '@/app/_css/globals.css'
import '@/app/_css/basic.scss'
import ProductHeader from '@/app/_component/productHeader'


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
	title: {
		default: 'S Technologies',
		template: '%s | S Technologies',
	},
	description: 'S Technologies (STechBD.Net) is a leading technology company in Bangladesh. It was founded in 2013. It provides services like domain registration, web hosting, web servers, software development, software as a service (SasS), design solutions, etc. S Technologies has been working in research of new technologies and developing new products for the people.',
	generator: 'S Technologies',
	applicationName: 'Ashraful UI',
	authors: [
		{
			name: 'Md. Ashraful Alam Shemul',
			url: 'https://github.com/AAShemul',
		},
		{
			name: 'S Technologies',
			url: 'https://www.stechbd.net',
		}
	],
	creator: 'Md. Ashraful Alam Shemul',
	publisher: 'S Technologies',
	robots: 'index, follow',
	category: 'Technology',
	metadataBase: new URL(process.env.SITE ?? ''),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/',
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: process.env.SITE,
		siteName: 'S Technologies',
		title: 'Welcome to S Technologies',
		description: 'S Technologies (STechBD.Net) is a leading technology company in Bangladesh. It was founded in 2013. It provides services like domain registration, web hosting, web servers, software development, software as a service (SasS), design solutions, etc. S Technologies has been working in research of new technologies and developing new products for the people.',
	},
	icons: {
		icon: [
			{
				url: '/icon/favicon-16x16.png',
				sizes: '16x16',
			},
			{
				url: '/icon/favicon-32x32.png',
				sizes: '32x32',
			},
			{
				url: '/icon/favicon-96x96.png',
				sizes: '96x96',
			},
		],
		apple: [
			{
				url: '/icon/apple-icon.png',
				sizes: '192x192',
			},
			{
				url: '/icon/apple-icon-57x57.png',
				sizes: '57x57',
			},
			{
				url: '/icon/apple-icon-60x60.png',
				sizes: '60x60',
			},
			{
				url: '/icon/apple-icon-72x72.png',
				sizes: '72x72',
			},
			{
				url: '/icon/apple-icon-76x76.png',
				sizes: '76x76',
			},
			{
				url: '/icon/apple-icon-114x114.png',
				sizes: '114x114',
			},
			{
				url: '/icon/apple-icon-120x120.png',
				sizes: '120x120',
			},
			{
				url: '/icon/apple-icon-144x144.png',
				sizes: '144x144',
			},
			{
				url: '/icon/apple-icon-152x152.png',
				sizes: '152x152',
			},
			{
				url: '/icon/apple-icon-180x180.png',
				sizes: '180x180',
			},
		],
		other: [
			{
				rel: 'apple-icon-precomposed',
				url: '/icon/apple-icon-precomposed.png',
				sizes: '192x192',
			},
			{
				rel: 'android-icon',
				url: '/icon/android-icon-36x36.png',
				sizes: '36x36',
			},
			{
				rel: 'android-icon',
				url: '/icon/android-icon-48x48.png',
				sizes: '48x48',
			},
			{
				rel: 'android-icon',
				url: '/icon/android-icon-72x72.png',
				sizes: '72x72',
			},
			{
				rel: 'android-icon',
				url: '/icon/android-icon-96x96.png',
				sizes: '96x96',
			},
			{
				rel: 'android-icon',
				url: '/icon/android-icon-144x144.png',
				sizes: '144x144',
			},
			{
				rel: 'android-icon',
				url: '/icon/android-icon-192x192.png',
				sizes: '192x192',
			},
			{
				rel: 'ms-icon',
				url: '/icon/ms-icon-70x70.png',
				sizes: '70x70',
			},
			{
				rel: 'ms-icon',
				url: '/icon/ms-icon-144x144.png',
				sizes: '144x144',
			},
			{
				rel: 'ms-icon',
				url: '/icon/ms-icon-150x150.png',
				sizes: '150x150',
			},
			{
				rel: 'ms-icon',
				url: '/icon/ms-icon-310x310.png',
				sizes: '310x310',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@STechBD_Net',
		creator: '@STechBD_Net',
		title: 'Welcome to S Technologies',
		description: 'S Technologies (STechBD.Net) is a leading technology company in Bangladesh. It was founded in 2013. It provides services like domain registration, web hosting, web servers, software development, software as a service (SasS), design solutions, etc. S Technologies has been working in research of new technologies and developing new products for the people.',
	},
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
		<ProductHeader/>
		<main className="min-h-screen">
			{ children }
		</main>
		</body>
		</html>
	)
}
