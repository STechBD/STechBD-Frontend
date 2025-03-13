import { JSX } from 'react'


/**
 * Interface definition for the metadata of the menu.
 *
 * @interface Menu
 *
 * @since 3.0.0
 */
export interface Menu {
	title: string
	path?: string
	mobileState?: boolean
	mobileToggle?: () => void
	submenu: {
		type: number
		state: boolean
		openCallback: () => void
		closeCallback: () => void
		items: {
			title: string
			path: string
			description?: string
			icon?: string
		}[]
		text?: string
		path?: string
	} | false
}


/**
 * Interface definition for the metadata of API data.
 *
 * @interface User
 * @interface Post
 * @interface Category
 *
 * @since 3.0.0
 */
export interface User {
	id?: number
	username?: string
	firstname?: string
	lastname?: string
	image?: string
	email?: string
	phone?: string
	role?: number
	status?: number
	company?: string
	position?: string
	about?: string
	website?: string
	address?: string
	city?: string
	state?: string
	zip?: string
	country?: string
	birthday?: string
}

export interface Post {
	id?: number
	title?: string
	slug?: string
	author?: number[]
	published?: string
	modified?: string
	image?: string
	category?: number[]
	tag?: number[]
	view?: number
	content?: string
	excerpt?: string
}

export interface Category {
	id?: number
	slug?: string
	name?: string
}


/**
 * Interface definition for the metadata of server.
 *
 * @interface Data
 * @interface Pricing
 * @interface Feature
 * @interface Comparison
 *
 * @since 3.0.0
 */
export interface Data {
	title: string
	price: {
		bdt: number
		usd: number
	}
	period: number
	description: string
	features: {
		[key: string]: string | number | boolean
	}
	button: {
		text: string
		link: string
	}
}


export interface Pricing {
	title: string
	featured?: boolean
	price?: {
		bdt: number
		usd: number
	}
	renew?: {
		bdt: number
		usd: number
	}
	discount?: {
		bdt: number
		usd: number
	}
	period?: number
	description: string
	features: JSX.Element[]
	button: {
		text: string
		link: string
	}
}


export interface Feature {
	title: string
	features: {
		[key: string]: string | number | boolean
	}
}

export interface Comparison {
	title: string
	price?: {
		bdt: number
		usd: number
	}
	renew?: {
		bdt: number
		usd: number
	}
	discount?: {
		bdt: number
		usd: number
	}
	period?: number
	description: string
	features: {
		[key: string]: string | number | boolean
	}
	button: {
		text: string
		link: string
	}
}


/**
 * Interface definition for the section of the Product page.
 *
 * @interface Hero
 * @interface Section
 * @interface Content
 *
 * @since 3.0.0
 */
export interface Hero {
	title: string
	description: JSX.Element
	notice?: JSX.Element
	code?: {
		text: string
		language: string
	}
	button?: {
		text: string
		link: string
	}[]
}

export interface Section {
	id: string
	title: string
	content?: Content[]
}

export interface Content {
	title: string
	description: string
	button?: {
		text: string
		link: string
	}
	code?: {
		text: string
		language?: string
	}
	image?: {
		src: string
		alt: string
		height: number
		width: number
	}
	url?: {
		text: string
		link: string
	}
}


/**
 * Interface definition for the Accordion component.
 *
 * @interface Accordion
 * @interface SubAccordion
 *
 * @since 3.0.0
 */
export interface Accordion {
	id: number
	ques: string
	ans: JSX.Element
	sub?: SubAccordion[]
}

export interface SubAccordion {
	id: number
	ques: string
	ans: JSX.Element
}


/**
 * Interface definition for the Service Custom Field.
 *
 * @interface ServiceCustomField
 *
 * @since 3.0.0
 */
export interface ServiceCustomField {
	name: string
	type: 'text' | 'textarea' | 'select' | 'list' | 'radio' | 'checkbox' | 'number' | 'date' | 'time' | 'datetime' | 'file' | 'password' | 'email' | 'url' | 'tel' | 'color' | 'hidden' | 'slider' | 'range'
	description: string
	option?: string[] | {
		id: string
		title: string
	}[] | {
		[key: string]: string[]
	}
	optionType?: number
	optionBase?: string | string[]
	optionCondition?: { [key: string]: string }
	multiple?: boolean
	min?: {
		[key: string]: {
			bdt: number
			usd: number
		}
	}
	max?: {
		[key: string]: {
			bdt: number
			usd: number
		}
	}
	step?: {
		[key: string]: {
			bdt: number
			usd: number
		}
	}
}


/**
 * Interface definition for the Team Member Profile.
 *
 * @interface Team
 */
export interface Team {
	id: number
	slug: string
	name: {
		en: string
		bn: string
	}
	role: string
	since: string
	tagline?: string
	image: string
	cover?: string
	gender: string
	birthday?: string
	buttons?: {
		text: string
		link: string
		color: string
	}[]
	description?: {
		intro: string
		about?: JSX.Element
		established?: string
	}
	contact?: {
		address?: string
		home?: string
		email: string
		phone?: string
	}
	website?: {
		name: string
		link: string
	}[]
	social?: {
		name: string
		link: string
	}[]
	work?: {
		company: string
		role?: string
		start: string
		end: string
		description?: string
	}[]
	education?: {
		institute: string
		degree?: string
		major?: string
		start?: string
		end?: string
	}[]
	gallery?: {
		link: string
		alt: string
	}[]
	faq?: {
		id: number
		ques: string
		ans: JSX.Element
	}[]
}
