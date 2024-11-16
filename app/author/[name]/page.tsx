import { JSX } from 'react'
import { notFound } from 'next/navigation'
import type { User } from '@/app/_data/type'
import { userData } from '@/app/_function/api'
import Hero from './hero'
import { DefaultEffect } from '@/app/_component/background'
import PostList from '@/app/_component/postList'


/**
 * Metadata for the Author page.
 *
 * @param params The Name-slug.
 * @returns { Promise<object> } The metadata.
 * @since 3.0.0
 */
export async function generateMetadata({ params, }: { params: Promise<{ name: string }> }): Promise<object> {
	const username: string = (await params).name
	const user: User = await userData(username)

	if (user) {
		const title: string = user.firstname + ' ' + user.lastname
		const image: string = user.image ?? 'https://github.com/STechBD.png'
		const description: string = user.about?.slice(0, 160) ?? 'Default Content'

		return {
			title,
			description,
			openGraph: {
				title,
				description,
				type: 'profile',
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


function cleanHtmlTags(html: string): string {
	return html.replace(/<[^>]*>/g, '')
}


/**
 * The Author Page component.
 *
 * @param params The parameters of the page.
 * @returns { JSX.Element } The Author Page component.
 * @since 3.0.0
 */
export default async function Page({ params }: { params: Promise<{ name: string }> }): Promise<JSX.Element> {
	const username: string = (await params).name
	const user: User = await userData(username)

	if (!user) {
		notFound()
	}

	const id: number = user.id ?? 0
	const name: string = user.firstname + ' ' + user.lastname
	const image: string = user.image ?? 'https://github.com/STechBD.png'
	const company: string = user.company ?? 'Default Company'
	const position: string | null = user.position ?? null
	const about: string = user.about ?? 'Default About'
	const website: string = user.website ?? 'Default Website'
	const address: string = user.address ?? 'Default Address'
	const city: string = user.city ?? 'Default City'
	const state: string = user.state ?? 'Default State'
	const zip: string = user.zip ?? 'Default Zip'
	const country: string = user.country ?? 'Default Country'
	const birthday: string = user.birthday ?? 'Default Birthday'

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name,
		image,
		jobTitle: position,
		worksFor: company,
		url: website,
		address: {
			'@type': 'PostalAddress',
			streetAddress: address,
			addressLocality: city,
			addressRegion: state,
			postalCode: zip,
			addressCountry: country,
		},
		birthDate: birthday,
	}

	return (
		<>
			<Hero data={ { id, username, name, image, about } }/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<DefaultEffect/>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Latest Blog
					</h2>
					<p className="mt-4 text-xl text-gray-800 dark:text-gray-200">
						Read the latest blog posts from <strong>{ name }</strong>.
					</p>
					<section className="mt-16">
						<div className="grid gap-8 lg:grid-cols-3 2xl:grid-cols-4">
							<PostList author={ id }/>
						</div>
					</section>
				</div>
			</div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={ { __html: JSON.stringify(jsonLd) } }
			/>
		</>
	)
}
