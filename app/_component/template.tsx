import React, { JSX } from 'react'
import Hero from '@/app/privacy-2/hero';
import { DefaultEffect } from '@/app/_component/background';


/**
 * Function to show a section.
 *
 * @param hero
 * @param title { string | undefined } The title of the section.
 * @param subtitle
 * @param full { boolean } Whether the section is full-width or not.
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 * @returns { JSX.Element } The Section component.
 *
 * @since 3.0.0
 */
export function Page({ hero, title, subtitle, full = true, style, children, }: {
	hero?: JSX.Element
	title?: string
	subtitle?: string
	full?: boolean
	style?: string
	children: React.ReactNode
}): JSX.Element {
	const text: string = full ? 'lg:px-20 py-10' + (style ? (' ' + style) : '') : 'max-w-7xl mx-auto lg:px-20 py-10' + (style ? (' ' + style) : '')

	return (
		<div className={ text }>
			{ title && (
				<Title title={ title }/>
			) }
			{ children }

			{ hero }
			<div className="max-w-7xl mx-auto relative isolate px-6 py-24 lg:px-8 text">
				<DefaultEffect/>
				{ title && (
					<Title title={ title }/>
				) }
				{ subtitle && (
					<Paragraph>
						{ subtitle }
					</Paragraph>
				) }
				<div className="lg:px-16 md:px-20 py-10">
					<p className="mb-4 text-xl text-gray-800 dark:text-gray-200">
						This privacy policy sets out how <span
						className="text-white bg-primary"><strong>S Technologies</strong></span> uses and protects any
						information that you give <span
						className="text-white bg-primary"><strong>S Technologies</strong></span> when you use this
						website.<span className="text-white bg-primary"><strong>S Technologies</strong></span> is
						committed to ensuring that your privacy is protected. Should we ask you to provide certain
						information by which you can be identified when using this website, then you can be assured that
						it will only be used in accordance with this privacy statement.<span
						className="text-white bg-primary"><strong>S Technologies</strong></span> may change this policy
						from time to time by updating this page. You should check this page from time to time to ensure
						that you are happy with any changes. This policy is effective from August 14, 2013.
					</p>
				</div>
			</div>
		</div>
	)
}


/**
 * Function to show a section.
 *
 * @param title { string | undefined } The title of the section.
 * @param full { boolean } Whether the section is full-width or not.
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 * @returns { JSX.Element } The Section component.
 *
 * @since 3.0.0
 */
export function Section({ title, full = true, style, children, }: {
	title?: string | undefined
	full?: boolean
	style?: string
	children: React.ReactNode
}): JSX.Element {
	const text: string = full ? 'lg:px-20 py-10' + (style ? (' ' + style) : '') : 'max-w-7xl mx-auto lg:px-20 py-10' + (style ? (' ' + style) : '')

	return (
		<div className={ text }>
			{ title && (
				<Title title={ title }/>
			) }
			{ children }
		</div>
	)
}


/**
 * Function to show a section title.
 *
 * @param title { string | undefined } The title of the section.
 * @param style { string } Custom class name for styling.
 * @returns { JSX.Element } The Title component.
 *
 * @since 3.0.0
 */
export function Title({ title, style }: { title: string, style?: string }): JSX.Element {
	return (
		<h2 className={ 'lg:px-16 md:px-20 mt-10 text-6xl font-bold tracking-tight text-primary lg:text-6xl' + (style ? (' ' + style) : '') }>
			{ title }
		</h2>
	)
}


/**
 * Function to show a paragraph in a section.
 *
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 * @returns { JSX.Element } The Paragraph component.
 * @since 3.0.0
 */
export function Paragraph({ style, children, }: { style?: string, children: React.ReactNode }): JSX.Element {
	return (
		<p className={ 'lg:px-16 md:px-20 py-10 text-xl text-gray-800 dark:text-gray-200' + (style ? (' ' + style) : '') }>
			{ children }
		</p>
	)
}
