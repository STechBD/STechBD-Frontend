import React, { JSX } from 'react'
import { DefaultEffect } from '@/app/_component/background'


/**
 * Component to generate the main structure of a page.
 *
 * @param hero
 * @param title { string | undefined } The title of the section.
 * @param description
 * @param full { boolean } Whether the section is full-width or not.
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 *
 * @returns { JSX.Element } The Section component.
 * @since 3.0.0
 */
export function Main({ title, description, full = true, style, children, }: {
	title?: string
	description?: string
	full?: boolean
	style?: string
	children?: React.ReactNode
}): JSX.Element {
	const text: string = full ? 'mx-auto relative isolate lg:px-20 py-10' + (style ? (' ' + style) : '') : 'max-w-7xl mx-auto relative isolate px-6 py-24 lg:px-8 text' + (style ? (' ' + style) : '')

	return (
		<div className={ text }>
			<DefaultEffect/>
			{ title && (
				<H2 title={ title }/>
			) }
			{ description && (
				<Description>
					{ description }
				</Description>
			) }

			{ children }
		</div>
	)
}


/**
 * Component to show a section.
 *
 * @param subtitle { string | undefined } The title of the section.
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 *
 * @returns { JSX.Element } The Section component.
 * @since 3.0.0
 */
export function Section({ title, style, children, }: {
	title?: string | undefined
	style?: string
	children?: React.ReactNode
}): JSX.Element {

	return (<>
		<div className={ 'lg:px-16 md:px-20 py-2' + (style ? (' ' + style) : '') }>
			{ title && (
				<H3 title={ title }/>
			) }
			{ children }
		</div>
	</>)
}


/**
 * Component to show an H2.
 *
 * @param title { string | undefined } The title of the section.
 * @param style { string } Custom class name for styling.
 *
 * @returns { JSX.Element } The Title component.
 * @since 3.0.0
 */
export function H2({ title, style }: { title: string, style?: string }): JSX.Element {
	return (
		<h2 className={ 'lg:px-16 md:px-20 mt-10 text-5xl font-bold tracking-tight text-primary lg:text-6xl' + (style ? (' ' + style) : '') }>
			{ title }
		</h2>
	)
}


/**
 * Component to show an H3.
 *
 * @param title { string | undefined } The title of the section.
 * @param style { string } Custom class name for styling.
 *
 * @returns { JSX.Element } The Subtitle component.
 * @since 3.0.0
 */
export function H3({ title, style }: { title: string, style?: string }): JSX.Element {
	return (
		<h3 className={ 'mt-2 text-3xl font-bold tracking-tight text-primary lg:text-4xl' + (style ? (' ' + style) : '') }>
			{ title }
		</h3>
	)
}

/**
 * Component to show an H4.
 *
 * @param subtitle { string | undefined } The subtitle of the section.
 * @param style { string } Custom class name for styling.
 *
 * @returns { JSX.Element } The Subtitle component.
 * @since 3.0.0
 */
export function H4({ title, style }: { title: string, style?: string }): JSX.Element {
	return (
		<h3 className={ 'mt-2 text-xl font-bold tracking-tight text-primary lg:text-2xl' + (style ? (' ' + style) : '') }>
			{ title }
		</h3>
	)
}


/**
 * Component to show a subtitle.
 *
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 *
 * @returns { JSX.Element } The Subtitle component.
 * @since 3.0.0
 */
export function Description({ style, children, }: { style?: string, children?: React.ReactNode }): JSX.Element {
	return (
		<p className={ 'lg:px-16 md:px-20 pt-5 pb-10 text-xl text-gray-800 dark:text-gray-200 lg:text-2xl' + (style ? (' ' + style) : '') }>
			{ children }
		</p>
	)
}


/**
 * Component to show a paragraph in a section.
 *
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 *
 * @returns { JSX.Element } The Paragraph component.
 * @since 3.0.0
 */
export function Paragraph({ style, children, }: { style?: string, children?: React.ReactNode }): JSX.Element {
	return (
		<p className={ 'mb-4 text-lg text-gray-800 dark:text-gray-200 lg:text-xl' + (style ? (' ' + style) : '') }>
			{ children }
		</p>
	)
}

/**
 * Component to show a div in a section.
 *
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 *
 * @returns { JSX.Element } The Div component.
 * @since 3.0.0
 */
export function Div({ style, children, }: { style?: string, children?: React.ReactNode }): JSX.Element {
	return (
		<div className={ 'mb-4 text-lg text-gray-800 dark:text-gray-200 lg:text-xl' + (style ? (' ' + style) : '') }>
			{ children }
		</div>
	)
}


/**
 * Component to show a paragraph in a section.
 *
 * @param list {JSX.Element[] | string[]} Array of JSX or string for the list.
 * @param style { string } Custom class name for styling.
 * @param children { React.ReactNode } The children elements passed by React.
 *
 * @returns { JSX.Element } The UList component.
 * @since 3.0.0
 */
export function UList({ list, style, children, }: {
	list?: (JSX.Element | string)[],
	style?: string,
	children?: React.ReactNode
}): JSX.Element {
	return (
		<ul className={ 'mb-4 ml-8 text-xl text-gray-800 list-disc list-inside dark:text-gray-200' + (style ? (' ' + style) : '') }>
			{ list && (list.map((item: JSX.Element | string, index: number) => (
				<li key={ index }>{ item }</li>
			))) }
			{ children }
		</ul>
	)
}
