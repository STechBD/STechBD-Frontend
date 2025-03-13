import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Content, Section } from '@/data/type'
import { DefaultEffect } from '@/component/background'
import Code from '@/component/code'
import Hero from './hero'
import { getProduct, isProduct, products } from '@/data/product'
import { notFound } from 'next/navigation'


/**
 * Generate metadata for the Single Product page.
 *
 * @param params The product-slug.
 * @returns { Promise<object> } The metadata.
 * @since 3.0.0
 */
export async function generateMetadata({ params, }: { params: Promise<{ name: string }> }): Promise<object> {
	const product: string = (await params).name

	if (isProduct(product)) {
		const info = getProduct(product)
		const title = info.title
		const description = info.description
		const image = info.image ?? '/image/Banner.webp'

		return {
			title,
			description,
			openGraph: {
				title,
				description,
				type: 'article',
				image: {
					url: image,
					alt: title,
				},
			},
			twitter: {
				title,
				description,
				image: {
					url: image,
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
export default async function Page({ params }: { params: Promise<{ name: string }> }): Promise<JSX.Element> {
	const product: string = (await params).name
	const id: string = product.replaceAll('-', '_')

	if (!isProduct(product)) {
		notFound()
	} else {
		const sections: Section[] = products[id].section
		const jsonLd = {
			'@context': 'https://schema.org',
			'@type': 'Product',
			name: products[id].info.title,
			description: products[id].info.description,
			brand: {
				'@type': 'Brand',
				name: 'S Technologies',
			},
			image: products[id].info.image ?? '/image/Banner.webp',
			offers: {
				'@type': 'Offer',
				price: 0,
				priceCurrency: 'USD',
				priceValidUntil: Date.now() + 86400000,
				itemCondition: 'https://schema.org/NewCondition',
				availability: 'https://schema.org/InStock',
			},
			ratingValue: 5,
			reviewCount: products[id].info.title.length,
		}

		return (
			<>
				<div className="relative isolate px-6 py-24 lg:px-8">
					<DefaultEffect/>
					<Hero product={ product }/>
					{ sections.map((section: Section) => {
						return (
							<div key={ section.id } className="lg:px-20 py-10">
								<h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
									{ section.title }
								</h2>
								<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
									{ section.content && section.content.map((content: Content, index) => (
										<div
											key={ index }
											className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
										>
											<div className="p-6">
												<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
													{ content.title }
												</h3>
												<p className="mt-4 text-base text-gray-800 dark:text-gray-200">
													{ content.description }
												</p>
											</div>
											<div className="pt-6 pb-8 px-6">
												{ content.url && (
													<Link
														className="text-base font-medium text-primary hover:text-secondary"
														href={ content.url.link }
														target={ content.url.link.startsWith('http') ? '_blank' : '' }
													>
														{ content.url.text }
													</Link>
												) }
												{ content.code && (
													<Code
														code={ content.code.text }
														language={ content.code.language ?? 'bash' }
													/>
												) }
												{ content.image && (
													<Image
														src={ content.image.src }
														alt={ content.image.alt }
														height={ content.image.height }
														width={ content.image.width }
													/>
												) }
												{ content.button && (
													<Link
														className="text-base font-medium text-primary hover:text-secondary"
														href={ content.button.link }
													>
														{ content.button.text }
													</Link>
												) }
											</div>
										</div>
									)) }
								</div>
							</div>
						)
					}) }
				</div>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={ { __html: JSON.stringify(jsonLd) } }
				/>
			</>
		)
	}
}
