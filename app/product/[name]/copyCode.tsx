'use client'

import { useState } from 'react'
import Code from '@/app/_component/code'
import Image from 'next/image'


/**
 * The CopyCode component for the product page.
 *
 * @returns { JSX.Element } The CopyCode component.
 * @since 3.0.0
 */
export default function CopyCode({ text, language }: { text: string, language: string }): JSX.Element {
	const [ copy, setCopy ] = useState(false)

	const copyCode = (): void => {
		const code: string = 'npx install-express@latest'
		if (code) {
			navigator.clipboard.writeText(code).then((): void => {
				setCopy(true)
				setTimeout(() => setCopy(false), 3000)
			})
		}
	}

	return copy ? (
		<div className="flex items-center justify-center gap-5 bg-gray-100 border border-gray-300 rounded-lg p-4 mt-6">
			<Code code={ text } language={ language }/>
			<button
				onClick={ copyCode }
				className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-gray-300 hover:bg-gray-200"
			>
				<span className="flex items-center gap-2">
					Copied!&nbsp;

						<Image
							src="/icon/copied.svg" height={ 100 } width={ 100 } alt="Copied"
							className="h-[16px] w-[16px]"
						/>
				</span>
			</button>
		</div>
	) : (
		<div className="flex items-center justify-center gap-5 bg-gray-100 border border-gray-300 rounded-lg p-4 mt-6">
			<Code code={ text } language={ language }/>
			<button
				onClick={ copyCode }
				className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-gray-300 hover:bg-gray-200"
			>
				<span className="flex items-center gap-2">
					Copy&nbsp;

					<Image
						src="/icon/copy.svg" height={ 100 } width={ 100 } alt="Copy"
						className="h-[16px] w-[16px]"
					/>
				</span>
			</button>
		</div>
	)
}
