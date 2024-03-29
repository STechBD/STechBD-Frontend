import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Section, Content } from '@/app/_data/type'
import { DefaultEffect } from '@/app/_component/background'
import Code from '@/app/_component/code'
import Hero from './hero'
import { products } from '@/app/_data/product';


/**
 * Metadata for the Install-Express page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Install-Express'
const description: string = 'Install Express is a CLI tool that helps you to create a Express.js backend project in seconds. It is a simple, fast, and lightweight tool that you can use to create a Express.js backend project with TypeScript, Pug, and Sass. It also includes a basic folder structure and some basic files to get started.'
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
 * The Install-Express page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page({ params }: { params: { name: string } }): JSX.Element {
	const product: string = params.name
	const id: string = product.replaceAll('-', '')
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
