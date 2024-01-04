import { JSX } from 'react'
import Link from 'next/link';


/**
 * Product page.
 *
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			Hello
			<div>
				<Link href="/product/Install-Express">
					<strong>Install Express</strong>
				</Link>
			</div>
		</>
	)
}
