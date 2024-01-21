/**
 * Hero component for the open source page.
 * This will have a word cloud of the open source projects.
 *
 * @returns { JSX.Element } Hero component for the open source page.
 * @since 3.0.0
 */
export default function Hero(): JSX.Element {
	return (
		<div className="bg-white dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h1 className="h1">Open Source</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400">We love open source. We use open source. We contribute to open source.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
