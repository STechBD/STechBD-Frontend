'use client'

import { JSX, useEffect, useState } from 'react'
import Link from 'next/link'
import ReactDOMServer from 'react-dom/server'
import cheerio from 'cheerio'


export default function Index({ content }: { content: JSX.Element }): JSX.Element {
	const headings = (jsxElement: JSX.Element): any[] => {
		const htmlString = ReactDOMServer.renderToStaticMarkup(jsxElement)
		const $ = cheerio.load(htmlString)
		const headings: any[] = []

		$('h1, h2, h3').each((index, element) => {
			headings.push({
				type: $(element).prop('tagName').toLowerCase(),
				text: $(element).text()
			})
		})

		return headings
	}

	return (
		<ul>
			{
				headings.map((heading, index) => (
					<li key={ index }>
						<Link href={ `#${ heading.id }` }>
							{ heading.text }
						</Link>
					</li>
				))
			}
		</ul>
	)
}
