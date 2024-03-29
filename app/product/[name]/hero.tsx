'use client'

import { JSX, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Hero } from '@/app/_data/type'
import { isProduct, products } from '@/app/_data/product'
import Code from '@/app/_component/code'


/**
 * The Hero component for the Install-Express page.
 *
 * @returns { JSX.Element } The Hero component.
 * @since 3.0.0
 */
export default function Hero({ product }: { product: string }): JSX.Element {
	const id: string = product.replaceAll('-', '_')
	const [ copied, setCopied ] = useState(false)

	const copyCode = (): void => {
		const code: string = 'npx install-express@latest'
		if (code) {
			navigator.clipboard.writeText(code).then((): void => {
				setCopied(true)
				setTimeout(() => setCopied(false), 3000)
			})
		}
	}

	const heroData: Hero = products[id].hero

	return (
		<div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-32 text-center">
			{
				heroData.notice && (
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div
							className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							{ heroData.notice }
						</div>
					</div>
				)
			}
			{
				heroData.title && (
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						{ heroData.title }
					</h1>
				)
			}
			{
				heroData.code && (
					<div
						className="flex items-center justify-center gap-5 bg-gray-100 border border-gray-300 rounded-lg p-4 mt-6">
						<Code code={ heroData.code.text } language={ heroData.code.language }/>
						<button
							onClick={ copyCode }
							className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-gray-300 hover:bg-gray-200"
						>
							<span className="flex items-center gap-2">
							{
								copied ? (
									<>
										Copied!&nbsp;

										<Image
											src="/icon/copied.svg" height={ 100 } width={ 100 } alt="Copied"
											className="h-[16px] w-[16px]"
										/>
									</>
								) : (
									<>
										Copy&nbsp;

										<Image
											src="/icon/copy.svg" height={ 100 } width={ 100 } alt="Copy"
											className="h-[16px] w-[16px]"
										/>
									</>
								)
							}


							</span>
						</button>
					</div>
				)
			}
			{
				heroData.description && (
					<p className="mt-6 text-lg leading-8 text-gray-600">
						{ heroData.description }
					</p>
				)
			}
			{
				heroData.button && (
					<div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
						<div
							className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"
						>
							<Link
								href={ heroData.button[0].link }
								target={ heroData.button[0].link.startsWith('http') ? '_blank' : '' }
								className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary sm:px-8"
							>
								{ heroData.button[0].text }
							</Link>
							<Link
								href="/product/Install-Express/about"
								target={ heroData.button[1].link.startsWith('http') ? '_blank' : '' }
								className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 sm:px-8"
							>
								{ heroData.button[1].text }
							</Link>
						</div>
					</div>
				)
			}
		</div>
	)
}
