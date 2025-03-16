import type { MetadataRoute } from 'next'


/**
 * Robots function for SEO.
 *
 * @returns { MetadataRoute.Robots } The Robots Metadata Route.
 * @since 3.1.0
 */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '',
		},
		sitemap: `${ process.env.SITE }/sitemap.xml`,
	}
}
