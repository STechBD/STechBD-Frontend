import { JSX } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/app/blog/hero'


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
export async function generateMetadata(): Promise<Record<string, string>> {
	return {
		title: 'Blog',
	}
}


/**
 * Fetch the post data from API server.
 *
 * @returns { Promise<Post> } The post data.
 * @since 3.0.0
 */
async function postData(): Promise<Post[]> {
	const response: Response = await fetch('https://api.stechbd.net/blog')
	const data = await response.json()
	return data.data
}


/**
 * Fetch the user data from API server.
 *
 * @param username The username.
 * @returns { Promise<User> } The user data.
 * @since 3.0.0
 */
async function userData(username: string): Promise<User> {
	const response: Response = await fetch('https://api.stechbd.net/user/' + username)
	const data = await response.json()
	return data.data
}


/**
 * Fetch the category data from API server.
 *
 * @param id The category ID.
 * @returns { Promise<Category> } The category data.
 * @since 3.0.0
 */
async function categoryData(id: string): Promise<Category> {
	const response: Response = await fetch('https://api.stechbd.net/blog/category/' + id)
	const data = await response.json()
	return data.data
}


/**
 * Blog list page component.
 *
 * @returns { JSX.Element } Blog list page component.
 * @since 3.0.0
 */
export default async function Page(): Promise<JSX.Element> {
	const post: Post[] = await postData()

	return (
		<>
			<Hero/>
			<section className="bg-white dark:bg-gray-900">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="grid gap-8 lg:grid-cols-2">
						{
							post.map(async (item: Post): Promise<JSX.Element> => {
								const title: string = item.title ?? 'Default Title'
								const author: string = item.author ?? '0'
								const authorInfo: User = await userData(author)
								const authorName: string = authorInfo.firstname + ' ' + authorInfo.lastname
								const authorUsername: string = authorInfo.username ?? 'default-username'
								const authorImage: string = authorInfo.image ?? '/default.jpg'
								const slug: string = item.slug ?? 'default-slug'
								const category: string = item.category ?? '0'
								const categoryInfo: Category = await categoryData(category)
								const categoryName: string = categoryInfo.name ?? 'Default Category'
								const published: string = item.published ?? '2021-01-01'
								const content: string = 'Default Content'

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
												{ published }
											</span>
										</div>
										<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
											<Link href={ slug }>
												{ title }
											</Link>
										</h2>
										<p className="mb-5 font-light text-gray-500 dark:text-gray-400">
											{ content }
										</p>
										<div className="flex justify-between items-center">
											<div className="flex items-center space-x-4">
												<Image className="w-7 h-7 rounded-full" height={ 7 } width={ 7 }
												       src={ authorImage } alt={ authorName }/>
												<Link href={ '/author/' + authorUsername }>
												<span className="font-medium dark:text-white">
													{ authorName }
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
