import { JSX } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Category, Post, User } from '@/app/_data/type'
import { categoryData, postList, userData } from '@/app/_function/api'


/**
 * Blog list page component.
 *
 * @returns { JSX.Element } Blog list page component.
 * @since 3.0.0
 */
export default async function PostList({ limit, author }: { limit?: number, author?: number }): Promise<JSX.Element> {
	const post: Post[] = await postList(limit ?? null, author ?? null)

	return (
		<>
			{
				post.map(async (item: Post): Promise<JSX.Element> => {
					const title: string = item.title ?? 'Default Title'
					const image: string = (item.image === '' || item.image === undefined) ? '/image/Banner.webp' : item.image
					const author: number = item.author ? item.author[0] : 0
					const authorInfo: User = await userData(author)
					const authorName: string = authorInfo.firstname + ' ' + authorInfo.lastname
					const authorUsername: string = authorInfo.username ?? 'default-username'
					const authorImage: string = authorInfo.image ?? '/default.jpg'
					const slug: string = item.slug ?? 'default-slug'
					const category: number = item.category ? item.category[0] : 0
					const categoryInfo: Category = await categoryData(category)
					const categoryName: string = categoryInfo.name ?? 'Default Category'
					const published: string = item.published ? new Date(item.published).toLocaleDateString('en-us', {
						month: 'short',
						day: 'numeric',
						year: 'numeric',
					}) : 'Unknown'

					return (
						<article
							key={ item.id }
							className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
						>
							<div className="flex-shrink-0 w-full aspect-[1200/628] overflow-hidden relative">
								<div className="absolute inset-0 flex items-center justify-center">
									<Image
										className="object-cover rounded-t-2xl"
										src={ image }
										alt={ title }
										width={ 1200 }
										height={ 628 }
										loading="lazy"
									/>
								</div>
							</div>
							<div className="p-6">
								<div className="flex justify-between items-center mb-5 text-gray-500">
									<span
										className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
									>
										<svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
										     xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd"
											      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"></path>
											<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
										</svg>
										{ categoryName }
									</span>
									<span className="text-sm">
										{ published }
									</span>
								</div>
								<h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:text-secondary dark:text-gray-100 dark:hover:text-primary">
									<Link href={ '/' + slug }>
										{ title?.split(/\s+/).slice(0, 14).join(' ') }
										{ title?.split(/\s+/).length > 14 ? '...' : ''}
									</Link>
								</h2>
								<div className="flex justify-between items-center">
									<div className="flex items-center space-x-4">
										<Image className="w-7 h-7 rounded-full" height={ 7 } width={ 7 }
										       src={ authorImage } alt={ authorName }/>
										<Link href={ '/author/' + authorUsername }>
											<span
												className="font-small text-gray-800 hover:text-secondary dark:text-gray-200 dark:hover:text-primary">
												{ authorName }
											</span>
										</Link>
									</div>
								</div>
							</div>
						</article>
					)
				})
			}
		</>
	)
}
