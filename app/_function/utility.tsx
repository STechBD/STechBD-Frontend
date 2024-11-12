import { usePathname } from 'next/navigation'
import { productList } from '@/app/_data/product'


/**
 * Check if the current path is one of the given paths.
 *
 * @param paths string[]
 * @returns boolean
 * @since 3.0.0
 */
export function isPath(paths: string[]): boolean {
	return paths.some((path) => usePathname() === path)
}


/**
 * Validate path existence.
 *
 * @param path string
 * @returns boolean
 * @since 3.0.0
 */
export function validatePath(path: string): boolean {
	const productPath: string[] = productList.map((product) => `/product/${ product.id }`)

	const validPath: string[] = [
		'/',
		'/login',
		'/register',
		'/reset',
		'/domain',
		'/server',
		'/shared-hosting',
		'/reseller-hosting',
		'/master-reseller-hosting',
		'/managed-vps',
		'/unmanaged-vps',
		'/dedicated-server',
		'/server-info',
		'/service',
		'/service/ai-development',
		'/service/web-development',
		'/service/readymade-website',
		'/service/android-development',
		'/service/ios-development',
		'/service/windows-development',
		'/service/ui-ux-design',
		'/service/seo',
		'/about',
		'/ai',
		'/contact',
		'/support',
		'/privacy',
		'/terms',
		'/disclaimer',
		'/refund',
		'/blog',
		'/product',
		...productPath,
	]

	return validPath.some((p: string): boolean => p === path)
}
