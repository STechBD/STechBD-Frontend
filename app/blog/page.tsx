import { JSX } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/app/blog/hero'
import List from '@/app/blog/list'


interface User {
	id?: number
	username?: string
	firstname?: string
	lastname?: string
	image?: string
	role?: string
	company?: string
	about?: string
}

interface Post {
	id?: number
	title?: string
	slug?: string
	author?: string
	published?: string
	image?: string
	category?: string
	view?: number
	content?: string
}

interface Category {
	id?: number
	slug?: string
	name?: string
}


/**
 * Generate the metadata for the blog list page.
 *
 * @returns { Promise<Record<string, string>> } The metadata.
 * @since 3.0.0
 */
export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read our blog to get the latest news and updates.',
}


/**
 * Blog list page component.
 *
 * @returns { JSX.Element } Blog list page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<section className="bg-white dark:bg-gray-900">
				<div className="py-8 px-8 mx-auto max-w-8xl lg:py-16 lg:px-16">
					<div className="grid gap-8 lg:grid-cols-3 2xl:grid-cols-4">
						<List/>
					</div>
				</div>
			</section>
		</>
	)
}
