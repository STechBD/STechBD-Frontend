import { usePathname } from 'next/navigation'


/**
 * Check if the current path is one of the given paths.
 *
 * @param path string[]
 * @returns boolean
 * @since 3.0.0
 */
export function isPath(path: string[]): boolean {
	return path.some((p) => usePathname() === p)
}


/**
 * Validate path existence.
 *
 * @param path string
 * @returns boolean
 * @since 3.0.0
 */
export function validatePath(path: string): boolean {
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
		'/product',
		'/product/Install-Express',
		'/product/CookieCons',
		'/product/ProjectPress',
		'/product/S-PHP-Engine',
		'/product/S-Template-Engine',
		'/product/S-Database-Explorer',
		'/product/S-Number-Manager',
		'/product/PyWeb',
		'/product/ViewMD',
		'/about',
		'/ai',
		'/contact',
		'/support',
		'/privacy',
		'/term',
		'/disclaimer',
		'/refund',
		'/blog',
		'/blog/[slug]',
	]

	return validPath.some((p: string): boolean => p === path)
}
