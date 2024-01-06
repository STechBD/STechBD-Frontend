/** @type {import('next').NextConfig} */


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
}


module.exports = nextConfig
