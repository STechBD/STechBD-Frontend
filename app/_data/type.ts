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
}

export interface Category {
	id?: number
	slug?: string
	name?: string
}


/**
 * Interface definition for the metadata of server.
 *
 * @interface Feature
 * @interface Data
 * @interface FeatureList
 *
 * @since 3.0.0
 */
export interface Feature {
	title: string
	features: {
		[key: string]: string | number | boolean
	}
}

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
	button: string
	link: string
}


export interface FeatureList {
	[key: string]: string
}


export interface Pricing {
	title: string
	price: {
		bdt: number
		usd: number
	}
	period: number
	description: string
	features: JSX.Element[]
	button: string
	link: string
}

