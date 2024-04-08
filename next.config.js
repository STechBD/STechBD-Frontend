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
				source: '/static-web-design',
				destination: '/web-development',
				permanent: true,
			},
			{
				source: '/dynamic-web-design',
				destination: '/web-development',
				permanent: true,
			},
			{
				source: '/readymade-web-application',
				destination: '/readymade-website',
				permanent: true,
			},
			{
				source: '/project',
				destination: '/product',
				permanent: true,
			},
		];
	},
}


module.exports = nextConfig
