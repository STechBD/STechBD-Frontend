import fs from 'fs-extra'
import yaml from 'js-yaml'

export const runtime = 'edge'


/**
 * Get post.md meta data.
 *
 * @param postPath
 */
export function postInfo(postPath) {
	// get post.md content
	const postFull = fs.readFileSync(postPath, 'utf8')

	// get post.md meta data
	const postMeta = postFull.split('---')[1]
	const postContent = postFull.split('---')[2]
	const postMetaObject = yaml.load(postMeta)
	const postObject = {
		...postMetaObject,
		content: postContent,
	}

	return postObject
}


/**
 * Get the blog post author.
 *
 * @return { object }
 * @since 1.0.0
 */
export function author() {
	return {}
}


/**
 * Get the blog post category.
 *
 * @return { object }
 * @since 1.0.0
 */
export function category() {
	return {}
}


/**
 * Get the blog post tag.
 *
 * @return { object }
 * @since 1.0.0
 */
export function tag() {
	return {}
}


/**
 * Get the blog post.
 *
 * @param slug
 * @return { object }
 * @since 1.0.0
 */
export function post(slug) {
	// up one directory from the current directory
	const dirSep = process.platform === 'win32' ? '\\' : '/'
	const blogDir = fs.realpathSync('.') + dirSep + 'app' + dirSep + '_blog' + dirSep

	// check if post.md exists in the slug directory
	const postPath = blogDir + dirSep + 'post.md'
	const postExists = fs.pathExistsSync(postPath)

	if (postExists) {
		return postInfo(postPath)
	}

	return null
}


/**
 * Get the list of blog posts.
 *
 * @return { Post[] }
 * @since 1.0.0
 */
export function postList() {
	let post[] = []
	let postUnordered[] = []

	// up one directory from the current directory
	const dirSep = process.platform === 'win32' ? '\\' : '/'
	const blogDir = fs.realpathSync('.') + dirSep + 'app' + dirSep + '_blog' + dirSep

	// get the list of directories in the _blog directory
	let blogList[] = fs.readdirSync(blogDir)

	// loop through each directory
	blogList.map((item): void => {
		// check if post.md exists in the slug directory
		const postPath = blogDir + dirSep + 'post.md'
		const postExists = fs.pathExistsSync(postPath)

		if (postExists) {
			postUnordered.push(postInfo(postPath))
		}
	})

	postUnordered.sort((a, b): number => {
		const aDate = a.date + ' ' + a.time
		const bDate = b.date + ' ' + b.time

		return aDate > bDate ? -1 : 1
	}).map((item, index: number): void => {
		item.id = index

		post.push(item)
	})

	return post
}


/**
 * Delivers a blog post object.
 *
 * @returns json Blog post object.
 * @since 3.0.0
 */
export async function GET(response, context: { params }) {
	const slug = context.params.slug
	response.headers.set('Content-Type', 'application/json')

	if (slug) {
		const postObject = post(slug)

		if (postObject) {
			return {
				body: postObject
			}
		}
	}

	return {
		status: 404
	}
}
