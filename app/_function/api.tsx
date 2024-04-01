import type { Category, Post, User } from '@/app/_data/type'


/**
 * Get the API URL from the environment.
 *
 * @since 3.0.0
 */
const api: string = process.env.API ?? ''


/**
 * Fetch the post-list from the API server.
 *
 * @returns { Promise<Post> } The post-data.
 * @since 3.0.0
 */
export async function postList(limit?: number | null, author?: number | null, category?: string | null, topic?: string | null): Promise<Post[]> {
	const response: Response = await fetch(api + '/blog?order=latest' + (limit ? `&limit=${ limit }` : '' + (author ? `&author=${ author }` : '') + (category ? `&category=${ category }` : '') + (topic ? `&topic=${ topic }` : '')), {
		next: {
			revalidate: 300,
		},
	})
	const data = await response.json()
	return data.data
}


/**
 * Fetch the post-data from the API server.
 *
 * @param slug The post-slug.
 * @returns { Promise<Post> } The post-data.
 * @since 3.0.0
 */
export async function postData(slug: string): Promise<Post> {
	const response: Response = await fetch(api + '/blog/post/' + slug, {
		cache: 'force-cache',
	})

	return (await response.json()).data
}


/**
 * Fetch the user data from the API server.
 *
 * @param username The username.
 * @returns { Promise<User> } The user data.
 * @since 3.0.0
 */
export async function userData(username: string): Promise<User> {
	const response: Response = await fetch(api + '/user/' + username, {
		cache: 'force-cache',
	})
	const data = await response.json()
	return data.data
}


/**
 * Fetch the category data from the API server.
 *
 * @param id The category ID.
 * @returns { Promise<Category> } The category data.
 * @since 3.0.0
 */
export async function categoryData(id: string): Promise<Category> {
	const response: Response = await fetch(api + '/blog/category/' + id, {
		cache: 'force-cache',
	})
	const data = await response.json()
	return data.data
}
