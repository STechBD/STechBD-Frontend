/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: '*.stechbd.net',
			},
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
	async redirects() {
		return [
			{
				source: '/shared-hosting-windows',
				destination: '/shared-hosting',
				permanent: true,
			},
			{
				source: '/master-reseller-hosting',
				destination: '/reseller-hosting',
				permanent: true,
			},
			{
				source: '/static-web-design',
				destination: '/web-development',
				permanent: true,
			},
			{
				source: '/dynamic-web-development',
				destination: '/web-development',
				permanent: true,
			},
			{
				source: '/readymade-web-application/',
				destination: '/readymade-website',
				permanent: true,
			},
			{
				source: '/project',
				destination: '/product',
				permanent: true,
			},
			{
				source: '/project/:slug',
				destination: '/product/:slug',
				permanent: true,
			},
			{
				source: '/wp-content/uploads/:slug',
				destination: 'https://cdn.stechbd.net/file/:slug',
				permanent: true,
			},
			{
				source: '/wp-content/uploads/2016/06/PicsArt_06-18-10.51.50.jpg',
				destination: 'https://cdn.stechbd.net/file/2014/06/S-Technologies-Limited-Logo.jpg',
				permanent: true,
			},
			{
				source: '/wp-content/uploads/2016/07/PicsArt_06-19-12.57.10.jpg',
				destination: 'https://cdn.stechbd.net/file/2015/07/S-Technologies-Limited-Logo.jpg',
				permanent: true,
			},
			// Add more redirect rules as needed using regex patterns
		]
	},
}


module.exports = nextConfig
