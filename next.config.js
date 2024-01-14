/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'tailwindui.com',
			},
			{
				hostname: 'images.dmca.com',
			},
			{
				hostname: 'flowbite.s3.amazonaws.com',
			},
			{
				hostname: 'flowbite.com',
			},
			{
				hostname: 'github.com',
			},
		],
	},
	publicRuntimeConfig: {
		APP_DIR: process.env.APP_DIR || path.join('app'),
		BLOG_DIR: process.env.BLOG_DIR || path.join('app', '_blog'),
	},
}


module.exports = nextConfig
