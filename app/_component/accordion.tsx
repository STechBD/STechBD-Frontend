'use client'

import { JSX, useState } from 'react'
import { Accordion, SubAccordion } from '@/app/_data/type'


/**
 * The Accordion component for the Frequently Asked Questions (FAQ) page.
 *
 * @returns { JSX.Element } The Accordion component.
 * @since 3.0.0
 */
export default function Accordion({ data }: { data: Accordion[] }): JSX.Element {
	const initialState: { [key: number]: boolean } = {}
	data.map((item: Accordion) => {
		initialState[item.id] = false
		item.sub && item.sub.map((subItem: SubAccordion) => {
			initialState[subItem.id] = false
		})
	})
	const [ show, setShow ] = useState<any>(initialState)

	const handleShow = (index: number) => {
		setShow({
			...show,
			[index]: !show[index],
		})
	}

	return (
		<>
			{ data.map((item: Accordion, index: number) => (
				<div key={ item.id }>
					<h2>
						<button
							type="button"
							className={ (index === 0 ? 'rounded-t-xl ' : (!show[item.id] && index === data.length - 1 ? 'rounded-b-xl ' : '')) + 'flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3' }
							onClick={ () => handleShow(item.id) }
						>
								<span>
									{ item.ques }
								</span>
							<svg
								className="w-3 h-3 rotate-180 shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 5 5 1 1 5"
								/>
							</svg>
						</button>
					</h2>
					<div className={ show[item.id] ? 'block' : 'hidden' }>
						<div className="p-5 border border-gray-200 dark:border-gray-700">
							<p className="text-gray-800 dark:text-gray-200">
								{ item.ans }
							</p>
							{
								item.sub && item.sub.map((subItem: SubAccordion, index: number) => (
									<div key={ index } className={ index === 0 ? 'mt-8' : '' }>
										<h3>
											<button
												type="button"
												className={ (index === 0 ? 'rounded-t-xl ' : (!show[subItem.id] && (index === item.sub.length - 1) ? 'rounded-b-xl ' : '')) + 'flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3' }
												onClick={ () => handleShow(subItem.id) }
											>
													<span>
														{ subItem.ques }
													</span>
												<svg
													data-accordion-icon=""
													className="w-3 h-3 rotate-180 shrink-0"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 10 6"
												>
													<path
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M9 5 5 1 1 5"
													/>
												</svg>
											</button>
										</h3>
										<div className={ show[subItem.id] ? 'block' : 'hidden' }>
											<div
												className={ (index === item.sub.length - 1 ? 'rounded-b-xl ' : '') + 'p-5 border border-gray-200 dark:border-gray-700' }>
												<p className="text-gray-800 dark:text-gray-200">
													{ subItem.ans }
												</p>
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			)) }
		</>
	)
}
