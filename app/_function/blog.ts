import path from 'path'
import fs from 'fs-extra'
import yaml from 'js-yaml'


interface Post {
	id?: number
	title?: string
	slug?: string
	date?: string
	time?: string
	author?: Array<{
		user?: string
		name?: string
		title?: string
		url?: string
		image?: string
	}>
	image?: string
	description?: string
	category?: Array<string>
	tag?: Array<string>
	content?: string
}


/**
 * Get post.md meta data.
 *
 * @param postPath
 */
export function postInfo(postPath: string): object {
	// get post.md content
	const postFull: string = fs.readFileSync(postPath, 'utf8')

	// get post.md meta data
	const postMeta: string = postFull.split('---')[1]
	const postContent: string = postFull.split('---')[2]
	const postMetaObject: Post = yaml.load(postMeta) as Post
	const postObject: Post = {
		...postMetaObject,
		content: postContent,
	}

	return postObject
}


/**
 * Get the blog post author.
 *
 * @return { object }
 * @since 3.0.0
 */
export function author(): object {
	return {}
}


/**
 * Get the blog post category.
 *
 * @return { object }
 * @since 3.0.0
 */
export function category(): object {
	return {}
}


/**
 * Get the blog post tag.
 *
 * @return { object }
 * @since 3.0.0
 */
export function tag(): object {
	return {}
}


/**
 * Check if blog post exists.
 * 
 * @param slug
 * @return { boolean }
 * @since 3.0.0
 */
export function isPost(slug: string): boolean {
	// up one directory from the current directory
	const dirSep: string = process.platform === 'win32' ? '\\' : '/'
	const blogDir: string = fs.realpathSync('.') + dirSep + 'app' + dirSep + '_blog' + dirSep

	// check if post.md exists in the slug directory
	const postPath: string = path.join(blogDir, slug, 'post.md')
	const postExists: boolean = fs.pathExistsSync(postPath)

	return postExists
}

/**
 * Get the blog post.
 *
 * @param slug
 * @return { object | null }
 * @since 3.0.0
 */
export function post(slug: string): object | null {
	// up one directory from the current directory
	const dirSep: string = process.platform === 'win32' ? '\\' : '/'
	const blogDir: string = fs.realpathSync('.') + dirSep + 'app' + dirSep + '_blog' + dirSep

	// check if post.md exists in the slug directory
	const postPath: string = path.join(blogDir, slug, 'post.md')
	const postExists: boolean = fs.pathExistsSync(postPath)

	if (postExists) {
		return postInfo(postPath)
	}

	return null
}


/**
 * Get the list of blog posts.
 *
 * @return { Post[] }
 * @since 3.0.0
 */
export function postList(): Post[] {
	const post: Post[] = []
	const postUnordered: Post[] = []

	// up one directory from the current directory
	const dirSep: string = process.platform === 'win32' ? '\\' : '/'
	const blogDir: string = fs.realpathSync('.') + dirSep + 'app' + dirSep + '_blog' + dirSep

	// get the list of directories in the _blog directory
	const blogList: string[] = fs.readdirSync(blogDir)

	// loop through each directory
	blogList.map((item: string): void => {
		// check if post.md exists in the slug directory
		const postPath: string = path.join(blogDir, item, 'post.md')
		const postExists: boolean = fs.pathExistsSync(postPath)

		if (postExists) {
			postUnordered.push(postInfo(postPath))
		}
	})

	postUnordered.sort((a: Post, b: Post): number => {
		const aDate: string = a.date + ' ' + a.time
		const bDate: string = b.date + ' ' + b.time

		return aDate > bDate ? -1 : 1
	}).map((item: Post, index: number): void => {
		item.id = index

		post.push(item)
	})

	return post
}
