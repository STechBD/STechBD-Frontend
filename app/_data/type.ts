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
	role?: string
	company?: string
	position?: string
	about?: string
}

export interface Post {
	id?: number
	title?: string
	slug?: string
	author?: string
	published?: string
	image?: string
	category?: string
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
	price: {
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
	period: number
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
	price: {
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
