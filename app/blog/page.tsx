import { JSX, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'


interface Post {
	id?: number
	title?: string
	slug?: string
	author?: string
	published?: string
	image?: string
	category?: string
	view?: number
}


export async function generateMetadata() {
	return {
		title: 'Blog',
	}
}


/**
 * Fetch data from API server.
 *
 * @return { Promise<{ props: { post: any } }> }
 * @since 1.0.0
 * @param slug
 */
async function fetcher(): Promise<Post[]> {
	const res = await fetch('https://api.stechbd.net/blog.json')
	const data = await res.json()
	return data.data
}


/**
 * Blog list page component.
 *
 * @returns { JSX.Element } Blog list page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const post = fetcher()

	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
						<h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Our Blog
						</h2>
						<p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
							We use an agile approach to test assumptions and connect with the needs of your audience
							early and often.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						{
							post.then((item: any): JSX.Element => {
								const title: string = item.title
								const author: string = item.author instanceof Array ? item.author[0].name : item.author
								const authorImage: string = item.author instanceof Array ? item.author[0].image : item.author
								const slug: string = item.slug
								const category: string = item.category instanceof Array ? item.category[0] : item.category
								const date: string = item.date instanceof Date ? item.date.toISOString() : item.date
								const content: JSX.Element = Markdown(item.content)

								return (
									<article key={ item.id }
									         className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
										<div className="flex justify-between items-center mb-5 text-gray-500">
											<span
												className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
												<svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
												     xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd"
													      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"></path>
													<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
												</svg>
												{ category }
											</span>
											<span className="text-sm">
												{ date }
											</span>
										</div>
										<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
											<Link href={ item.slug }>
												{ title }
											</Link>
										</h2>
										<p className="mb-5 font-light text-gray-500 dark:text-gray-400">
											{ content }
										</p>
										<div className="flex justify-between items-center">
											<div className="flex items-center space-x-4">
												<Image className="w-7 h-7 rounded-full" height={ 7 } width={ 7 }
												       src={ authorImage } alt={ author }/>
												<Link href={ '/author/' + author }>
												<span className="font-medium dark:text-white">
													{ author }
												</span>
												</Link>
											</div>
											<Link href={ '/' + slug }
											      className="inline-flex items-center font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
												Read more
												<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
												     xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd"
													      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
												</svg>
											</Link>
										</div>
									</article>
								)
							})
						}
					</div>
				</div>
			</section>
		</>
	)
}
