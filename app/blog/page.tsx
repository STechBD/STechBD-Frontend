import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/app/_component/background'
import PostList from '@/app/_component/postList'
import Hero from './hero'


/**
 * Generate the metadata for the Blog List page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Blog'
const description: string = 'Read our blog to get the latest news and updates.'
export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
	twitter: {
		title,
		description,
	},
}


/**
 * The Blog List page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<DefaultEffect/>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Latest Blog
					</h2>
					<section className="mt-16">
						<div className="grid gap-8 lg:grid-cols-3 2xl:grid-cols-4">
							<PostList/>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}
