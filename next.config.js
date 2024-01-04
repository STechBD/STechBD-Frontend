/** @type {import('next').NextConfig} */


const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'tailwindui.com',
			},
			{
				hostname: 'images.dmca.com',
			}
		],
	},
}


module.exports = nextConfig
