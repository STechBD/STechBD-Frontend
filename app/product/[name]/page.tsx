import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Content, Section } from '@/app/_data/type'
import { DefaultEffect } from '@/app/_component/background'
import Code from '@/app/_component/code'
import Hero from './hero'
import { getProduct, isProduct, products } from '@/app/_data/product'
import { notFound } from 'next/navigation'


/**
 * Generate metadata for the Single Product page.
 *
 * @param { string } name The product-slug.
 * @returns { Promise<{ title: string }> } The metadata.
 * @since 3.0.0
 */
export async function generateMetadata({ params }: { params: { name: string } }): Promise<any> {
	const product: string = params.name

	if (isProduct(product)) {
		const info = getProduct(product)
		const title = info.title
		const description = info.description
		const image = info.image

		return {
			title,
			description,
			openGraph: {
				title,
				description,
				type: 'article',
				image: {
					url: image ?? '/image/Banner.webp',
					alt: title,
				},
			},
			twitter: {
				title,
				description,
				image: {
					url: image ?? '/image/Banner.webp',
					alt: title,
				},
			},
		}
	}

	return {}
}


/**
 * The Single Product page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page({ params }: { params: { name: string } }): JSX.Element {
	const product: string = params.name
	const id: string = product.replaceAll('-', '_')

	if (!isProduct(product)) {
		notFound()
	} else {

		const sections: Section[] = products[id].section

		return (
			<>
				<div className="relative isolate px-6 lg:px-8">
					<DefaultEffect/>
					<Hero product={ product }/>
					{
						sections.map((section: Section) => {
							return (
								<div key={ section.id } className="lg:px-20 py-10">
									<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
										{ section.title }
									</h2>
									<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
										{
											section.content && section.content.map((content: Content, index) => (
												<div key={ index }
												     className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
													<div className="p-6">
														<h3 className="text-lg font-medium text-gray-900">
															{ content.title }
														</h3>
														<p className="mt-4 text-base text-gray-500">
															{ content.description }
														</p>
													</div>
													<div className="pt-6 pb-8 px-6">
														{
															content.url && (
																<Link
																	className="text-base font-medium text-primary hover:text-secondary"
																	href={ content.url.link }
																	target={ content.url.link.startsWith('http') ? '_blank' : '' }
																>
																	{ content.url.text }
																</Link>
															)
														}
														{
															content.code && (
																<Code
																	code={ content.code.text }
																	language={ content.code.language ?? 'bash' }
																/>
															)
														}
														{
															content.image && (
																<Image
																	src={ content.image.src }
																	alt={ content.image.alt }
																	height={ content.image.height }
																	width={ content.image.width }
																/>
															)
														}
														{
															content.button && (
																<Link
																	className="text-base font-medium text-primary hover:text-secondary"
																	href={ content.button.link }
																>
																	{ content.button.text }
																</Link>
															)
														}
													</div>
												</div>
											))
										}
									</div>
								</div>
							)
						})
					}
				</div>
			</>
		)
	}
}
