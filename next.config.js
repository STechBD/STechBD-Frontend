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
}


module.exports = nextConfig
