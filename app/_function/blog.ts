import getConfig from 'next/config'
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

export function author(): object {
	return {}
}

export function category(): object {
	return {}
}

export function tag(): object {
	return {}
}

export function post(slug: string): object | null {
	const { publicRuntimeConfig } = getConfig()
	const blogRootDir: string = publicRuntimeConfig.BLOG_DIR

	// check if post.md exists in the slug directory
	const postPath: string = path.join(blogRootDir, slug, 'post.md')
	const postExists: boolean = fs.pathExistsSync(postPath)

	if (postExists) {
		return postInfo(postPath)
	}

	return null
}

export function postList(): object {
	const { publicRuntimeConfig } = getConfig()
	const post: Post[] = []
	const postUnordered: Post[] = []
	const blogRootDir: string = publicRuntimeConfig.BLOG_DIR

	// get the list of directories in the _blog directory
	const blogList: string[] = fs.readdirSync(blogRootDir)

	// loop through each directory
	blogList.map((item: string): void => {
		// check if post.md exists in the slug directory
		const postPath: string = path.join(blogRootDir, item, 'post.md')
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

