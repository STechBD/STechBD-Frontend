'use client'

import { JSX } from 'react'
import { BasicHeroEffect } from '@/component/background'
import Image from 'next/image'
import Markdown from 'react-markdown'
import remarkEmoji from 'remark-emoji'


/**
 * The Hero component for the Author Profile page.
 *
 * @returns { JSX.Element } The Hero component.
 * @since 3.0.0
 */
export default function Hero({ data }: any): JSX.Element {
	const { id, username, name, image, about } = data

	return (
		<div className="relative overflow-hidden">
			<BasicHeroEffect/>
			<div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<div className="relative inline-block">
						<Image
							src={ image }
							alt={ username }
							width={ 200 }
							height={ 200 }
							className="rounded-full border-4 border-white"
						/>
					</div>
					<h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold tracking-tight text-white">
						{ name }
					</h1>
					<div className="mt-4 text-lg md:text-xl text-gray-100">
						<Markdown
							remarkPlugins={ [
								remarkEmoji,
							] }
						>
							{ about }
						</Markdown>
					</div>
				</div>
			</div>
		</div>
	)
}
