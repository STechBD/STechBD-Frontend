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
				source: '/wp-content/uploads/2023/04/1-Taka-Domain-Eid-ul-Fitr-Offer-2023.jpg',
				destination: 'https://cdn.stechbd.net/file/1-Taka-Domain-Eid-ul-Fitr-Offer-2023.jpg',
				permanent: true,
			},
			// Add more redirect rules as needed using regex patterns
		]
	},
}


module.exports = nextConfig
