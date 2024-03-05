'use client'

import { JSX } from 'react'
import Link from 'next/link'
import ReactDOMServer from 'react-dom/server'
import cheerio from 'cheerio'


export default function Index({ content }: { content: JSX.Element }): JSX.Element {
	const headings = (content: JSX.Element): any[] => {
		const htmlString = ReactDOMServer.renderToStaticMarkup(content)
		const $ = cheerio.load(htmlString)
		const headings: any[] = []

		$('h1, h2, h3').each((index, element): void => {
			const url: string = $(element).text().toLowerCase().replace(/ /g, '-').replace(/[^a-zA-Z0-9-]/g, '')
			headings.push({
				type: $(element).prop('tagName').toLowerCase(),
				url: url,
				text: $(element).text(),
			})
		})

		return headings
	}

	console.log('Headings:', headings(content))

	return (
		<ul>
			{
				headings(content).map((heading, index: number) => {
					const className: string = heading.type === 'h2' ? 'ml-4' : heading.type === 'h3' ? 'ml-8' : ''

					return (
						<li key={ index } className={ className }>
							<Link href={ '#' + heading.url } className="text-gray-800 dark:text-gray-200">
								{ heading.text }
							</Link>
						</li>
					)
				})
			}
		</ul>
	)
}
