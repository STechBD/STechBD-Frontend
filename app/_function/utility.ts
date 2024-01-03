import { usePathname } from 'next/navigation'


/**
 * Check if the current path is one of the given paths.
 *
 * @param path string[]
 * @returns boolean
 *
 * @since 3.0.0
 */
export function isPath(path: string[]): boolean {
	return path.some((p) => usePathname() === p)
}
