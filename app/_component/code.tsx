/**
 * The Code component.
 *
 * @param { string } text The code text.
 * @returns { JSX.Element } The Code component.
 * @since 3.0.0
 */
export default function Code({ code, language = 'bash' }: { code: string, language?: string }): JSX.Element {
	return (
		<pre
			className="flex-grow text-sm font-mono text-gray-800 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg overflow-x-auto"
		>
			<code
				className="language-bash text-sm font-mono text-gray-200 px-4 py-2 whitespace-pre line-numbers bg-gray-900 rounded-lg mb-4"
			>
				{ code }
			</code>
		</pre>
	)
}
