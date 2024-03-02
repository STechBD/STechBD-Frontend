import { JSX } from 'react'
import Link from 'next/link'

export default function Index({ content }: {
	content: JSX.Element
}): JSX.Element {
	const html = { content }
	const extractHeadings = (markdownContent: any) => {
		const headings: { id: any; text: any; level: any; }[] = []
		const renderer = (text: any, level: any) => {
			const id = text.toLowerCase().replace(/ /g, '-')
			headings.push({ id, text, level })
			return `<h${ level } id="${ id }">${ text }</h${ level }>`
		}

		renderer(markdownContent, 3)
		return headings
	}

	const headings = extractHeadings(content)

	return (
		<ul>
			{ headings.map((heading: any) => (
				<li key={ heading.id }>
					<Link href={ `#${ heading.id }` }>
						{ heading.text }
					</Link>
				</li>
			)) }
		</ul>
	)
}
