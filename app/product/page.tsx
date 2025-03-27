import { AwaitedReactNode, JSX, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react'
import { DefaultEffect } from '@/component/background'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { productList } from '@/data/product'
import AnimatedLogo from '@/component/animatedLogo'
import Hero from './hero'


/**
 * The metadata for the Product List page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Product List'
const description: string = 'We provide a wide range of products and services to meet your technology needs. Explore our product list to find the right solution for your business.'
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
 * The Product List page component.
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
				<h2 className="lg:px-16 md:px-20 mt-10 text-6xl font-bold tracking-tight text-primary lg:text-6xl">
					Product List of S Technologies
				</h2>
				<p className="lg:px-16 md:px-20 py-10 text-xl text-gray-800 dark:text-gray-200">
					Explore our wide range of products and services to find the right solution for your technology
					needs. We offer high-quality products and services to help you achieve your business goals.
				</p>
				<div className="lg:px-16 md:px-20 py-10">
					<div className="grid gap-8 lg:grid-cols-3 2xl:grid-cols-4">
						{ productList.map((product, index) => (
							<div
								key={ index }
								className="flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden bg-white dark:bg-gray-800"
							>
								<Link
									href={ `/product/${ product.id }` }
									className="flex-1 p-6 flex flex-col justify-between"
								>
									<div className="flex-shrink-0">
										<div
											className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
										>
											{ product.logo ? (
												<Image
													className="mr-4 w-16 h-16 rounded-full"
													src={ product.logo }
													alt={ product.title }
													height={ 100 }
													width={ 100 }
												/>
											) : (
												<AnimatedLogo className="mr-4 w-16 h-16 rounded-full"/>
											) }
											<div>
												<p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
													{ product.title }
												</p>
												<p className="mt-2 text-gray-800 dark:text-gray-200">
													{ product.platform.map((item: string, index: number) => (
														<span key={ index } className="mr-2">
															{ index !== 0 && (<span className="mr-1">•</span>) }
															{ item }
														</span>
													)) }
												</p>
											</div>
										</div>
									</div>
									<div className="flex-1">
										<p className="mt-2">
											{ [ ...Array(product.rating) ].map((_, index) => (
												<svg key={ index }
												     className="h-5 w-5 inline text-primary dark:text-blue-500"
												     fill="currentColor"
												     viewBox="0 0 20 20"
												     xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z"
													/>
												</svg>
											)) }
											{ [ ...Array(5 - product.rating) ].map((_, index) => (
												<svg
													key={ index }
													className="h-5 w-5 inline text-gray-300 dark:text-gray-600"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z"
													/>
												</svg>
											)) }
										</p>
										<div className="mt-2 text-lg text-gray-500 dark:text-gray-400">
											{ product.description }
										</div>
									</div>
								</Link>
							</div>
						)) }
					</div>
				</div>
			</div>
		</>
	)
}
