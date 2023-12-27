import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'
import '@/app/_css/globals.css'
import '@/app/_css/basic.scss'
import Header from '@/app/header'


const inter: NextFont = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
	title: 'Install Express - S Technologies',
	description: 'Start your Express.js backend project in seconds using a simple CLI \'install-express\'',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body className={ inter.className }>
		<Header/>
		<main className="min-h-screen mt-[80px] lg:mt-[88px]">
			{ children }
		</main>
		</body>
		</html>
	)
}
