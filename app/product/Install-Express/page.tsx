import { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Section, Content } from '@/app/_data/type'
import { DefaultEffect } from '@/app/_component/background'
import Code from '@/app/_component/code'
import Hero from './hero'


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
export default function Page(): JSX.Element {
	const sections: Section[] = [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'TypeScript',
					description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is pure object-oriented with classes, interfaces, and statically typed like C# or Java.',
					url: {
						text: 'Learn more',
						link: 'https://www.typescriptlang.org/',
					},
				},
				{
					title: 'Pug',
					description: 'Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.',
					url: {
						text: 'Learn more',
						link: 'https://pugjs.org/api/getting-started.html',
					},
				},
				{
					title: 'Sass',
					description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
					url: {
						text: 'Learn more',
						link: 'https://sass-lang.com/guide',
					},
				},
			],
		},
		{
			id: 'installation',
			title: 'Installation',
			content: [
				{
					title: 'Create a new project',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx install-express@latest',
						language: 'bash',
					},
				},
				{
					title: 'Create a new project with a specific version',
					description: 'To create a new project with a specific version, run the following command:',
					code: {
						text: 'npx install-express@1.0.0',
						language: 'bash',
					},
				},
				{
					title: 'Create a new project with a specific name',
					description: 'To create a new project with a specific name, run the following command:',
					code: {
						text: 'npx install-express@latest my-project',
						language: 'bash',
					},
				},
			],
		},
		{
			id: 'support',
			title: 'Support',
			content: [
				{
					title: 'GitHub',
					description: 'If you have any problems or suggestions, please open an issue on GitHub.',
					url: {
						text: 'Learn more',
						link: '#',
					},
				},
				{
					title: 'Twitter',
					description: 'If you have any problems or suggestions, please DM me on Twitter.',
					url: {
						text: 'Learn more',
						link: '#',
					},
				},
			],
		},
		{
			id: 'contributors',
			title: 'Contributors',
			content: [
				{
					title: 'Md. Ashraful Alam Shemul',
					description: 'Software Developer',
					url: {
						text: 'Learn more',
						link: 'https://github.cm/AAShemul',
					},
				},
			],
		},
		{
			id: 'project-list',
			title: 'Project List',
			content: [
				{
					title: 'CookieCons',
					description: 'WordPress plugin for GDPR and ePrivacy Cookie Compliance.',
					url: {
						text: 'Learn more',
						link: '/project/CookieCons',
					},
				},
				{
					title: 'ProjectPress',
					description: 'WordPress plugin for showing projects as a portfolio.',
					url: {
						text: 'Learn more',
						link: '/project/ProjectPress',
					},
				},
				{
					title: 'S PHP Engine',
					description: 'Lightweight MVC-based PHP framework for building powerful web applications.',
					url: {
						text: 'Learn more',
						link: '/project/S-PHP-Engine',
					},
				},
				{
					title: 'S Template Engine',
					description: 'Lightweight template engine for PHP.',
					url: {
						text: 'Learn more',
						link: '/project/S-Template-Engine',
					},
				},
				{
					title: 'S Database Explorer',
					description: 'Simple and easy to use Database Explorer for MySQL with PDO.',
					url: {
						text: 'Learn more',
						link: '/project/S-Database-Explorer',
					},
				},
				{
					title: 'S Number Manager',
					description: 'Simple library for converting numbers in different languages.',
					url: {
						text: 'Learn more',
						link: '/project/S-Number-Manager',
					},
				},
				{
					title: 'PyWeb',
					description: 'Python-based lightweight web browser for Windows.',
					url: {
						text: 'Learn more',
						link: '/project/PyWeb',
					},
				},
				{
					title: 'ViewMD',
					description: 'Markdown viewer for Windows.',
					url: {
						text: 'Learn more',
						link: '/project/ViwMD',
					},
				},
			],
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is Install-Express?',
					description: 'Install Express is a CLI tool that helps you to create a Express.js backend project in seconds. It is a simple, fast, and lightweight tool that you can use to create a Express.js backend project with TypeScript, Pug, and Sass. It also includes a basic folder structure and some basic files to get started.',
					url: {
						text: 'Learn more',
						link: 'https://docs.stechbd.net/Install-Express',
					},
				},
				{
					title: 'How to install Install-Express?',
					description: 'To install Install-Express, run the following command:',
					code: {
						text: 'npx install-express@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx install-express@latest',
						language: 'bash',
					},
				},
			],
		},
	]

	return (
		<>
			<div className="relative isolate px-6 lg:px-8">
				<DefaultEffect/>
				<Hero/>
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
