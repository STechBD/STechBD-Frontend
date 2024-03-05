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
