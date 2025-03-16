import type { MetadataRoute } from 'next'
import { postList } from '@/function/api'
import { productList as products } from '@/data/product'
import type { Post, Product, SitemapPage } from '@/data/type'


/**
 * Sitemap function for SEO.
 *
 * @returns { MetadataRoute.Sitemap } The Sitemap Metadata Route.
 * @since 3.1.0
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts: Post[] = await postList(100)
	const pages: SitemapPage[] = [
		// Important Pages (0.9 mixed)
		{
			title: 'Homepage',
			link: '/',
			priority: 1,
			frequency: 'weekly'
		},
		{
			title: 'About S Technologies',
			link: '/about',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Blog',
			link: '/blog',
			priority: 0.9,
			frequency: 'monthly'
		},
		{
			title: 'Research and Development Wing',
			link: '/rnd',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Careers',
			link: '/careers',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Contact Us',
			link: '/contact',
			priority: 0.9,
			frequency: 'weekly'
		},

		// Less Important Pages (0.7 mixed)
		{
			title: 'Privacy Policy',
			link: '/privacy',
			priority: 0.7,
			frequency: 'yearly'
		},
		{
			title: 'Terms of Service',
			link: '/terms',
			priority: 0.7,
			frequency: 'yearly'
		},
		{
			title: 'Disclaimer',
			link: '/disclaimer',
			priority: 0.7,
			frequency: 'yearly'
		},
		{
			title: 'Refund Policy',
			link: '/refund',
			priority: 0.7,
			frequency: 'yearly'
		},
		{
			title: 'Sitemap',
			link: '/index',
			priority: 0.7,
			frequency: 'weekly'
		},

		// Services and Products (0.9 weekly)
		{
			title: 'Server',
			link: '/server',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Server Information',
			link: '/server-info',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Shared Hosting',
			link: '/shared-hosting',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Reseller Hosting',
			link: '/reseller-hosting',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Unmanaged Virtual Private Server (VPS)',
			link: '/unmanaged-vps',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Managed Virtual Private Server (VPS)',
			link: '/managed-vps',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Dedicated Hosting',
			link: '/dedicated-hosting',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Domain Name Registration',
			link: '/domain',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'AI App Development',
			link: '/ai-development',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Web App Development',
			link: '/web-development',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Readymade Website Development',
			link: '/readymade-website',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Android App Development',
			link: '/android-development',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'iOS App Development',
			link: '/ios-development',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Windows App Development',
			link: '/windows-development',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'UI/UX Development',
			link: '/ui-ux-development',
			priority: 0.9,
			frequency: 'weekly'
		},
		{
			title: 'Search Engine Optimization',
			link: '/seo',
			priority: 0.9,
			frequency: 'weekly'
		},

		// Team / Users / Authors (0.8 monthly)
		{
			title: 'Md. Ashraful Alam Shemul | মু. আশরাফুল আলম শিমুল',
			link: '/team/AAShemul',
			priority: 0.8,
			frequency: 'monthly'
		},
		{
			title: 'Maria Sharker | মারিয়া সরকার',
			link: '/team/Maria',
			priority: 0.8,
			frequency: 'monthly'
		},
		{
			title: 'Ahmad AL Munir | আহমাদ আল মুনির',
			link: '/team/Munir',
			priority: 0.8,
			frequency: 'monthly'
		},
		{
			title: 'Ashikur Rahman | আশিকুর রহমান',
			link: '/team/Ashik',
			priority: 0.8,
			frequency: 'monthly'
		},
		{
			title: 'Md Shamim Ahmed | মোঃ শামীম আহমেদ',
			link: '/team/Shamim',
			priority: 0.8,
			frequency: 'monthly'
		},
		{
			title: 'Md Shazib Hossain | মো সজিব হোসেন',
			link: '/team/Shazib',
			priority: 0.8,
			frequency: 'monthly'
		},
		{
			title: 'Angelica Mirza Aishwarja | এনজেলিকা মির্জা ঐশ্বর্য',
			link: '/team/Angelica',
			priority: 0.8,
			frequency: 'monthly'
		},
	]

	// @ts-ignore
	return [
		...pages.map((page: SitemapPage) => ({
			url: `${ process.env.SITE }${ page.link }`,
			lastModified: new Date(),
			changeFrequency: page.frequency,
			priority: page.priority,
		})),
		...products.map((product: Product) => ({
			url: `${ process.env.SITE }/product/${ product.id }`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		})),
		...posts.map((post: Post) => ({
			url: `${ process.env.SITE }/${ post.slug }`,
			lastModified: new Date(post.modified ?? new Date()),
			changeFrequency: 'monthly',
			priority: 0.9,
		})),
	]
}
