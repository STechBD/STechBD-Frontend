'use client'

import { JSX, useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


/**
 * The Testimonial component.
 *
 * @returns { JSX.Element } The Testimonial component.
 * @since 3.0.0
 */
export default function Testimonial(): JSX.Element {
	const reviews = [
		{
			name: 'John Doe',
			image: 'https://github.com/AAShemul.png',
			organization: 'ABC Inc.',
			rating: 5,
			review: 'S Technologies has been providing us with web hosting and server since 2015. We are very satisfied with their service.',
		},
		{
			name: 'Jane Doe',
			image: 'https://github.com/AAShemul.png',
			organization: 'XYZ Inc.',
			rating: 3,
			review: 'We have been using S Technologies web hosting and server for our business since 2017. We are very happy with their service.',
		},
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	}

	return (
		<div className="my-20">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
				<div className="">
					<div className="">
						<Slider {...settings}>
								{reviews.map((review, index) => (
									<div key={index} className="flex flex-col mx-4 min-w-[384px] rounded-lg shadow-lg overflow-hidden">
										<div className="flex-shrink-0">
											<Image className="h-48 w-full object-cover"
											       src={review.image}
											       alt={review.name}
											       width={384}
											       height={384}
											/>
										</div>
										<div className="flex-1 bg-white p-6 flex flex-col justify-between">
											<div className="flex-1">
												<p className="text-sm font-medium text-primary">
													{review.organization}
												</p>
												<p className="mt-2 text-xl font-bold text-gray-900">
													{review.name}
												</p>
												<p className="mt-2">
													{[...Array(review.rating)].map((_, index) => (
														<svg key={index} className="h-5 w-5 inline text-primary" fill="currentColor"
														     viewBox="0 0 20 20"
														     xmlns="http://www.w3.org/2000/svg">
															<path
																d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z" />
														</svg>
													))}
													{[...Array(5 - review.rating)].map((_, index) => (
														<svg key={index} className="h-5 w-5 inline text-gray-300" fill="currentColor"
														     viewBox="0 0 20 20"
														     xmlns="http://www.w3.org/2000/svg">
															<path
																d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z" />
														</svg>
													))}
												</p>
												<p className="mt-2 text-lg text-gray-500">
													{review.review}
												</p>
											</div>
										</div>
									</div>
								))}
							<div>
								<h3>2</h3>
							</div>
							<div>
								<h3>3</h3>
							</div>
							<div>
								<h3>4</h3>
							</div>
							<div>
								<h3>5</h3>
							</div>
							<div>
								<h3>6</h3>
							</div>
							<div>
								<h3>7</h3>
							</div>
							<div>
								<h3>8</h3>
							</div>
							<div>
								<h3>9</h3>
							</div>
						</Slider>
					</div>
					{/*<div className="mt-12 lg:mt-0 lg:col-span-2">
						<Slider {...settings}>
							{reviews.map((review, index) => (
								<div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
									<div className="flex-shrink-0">
										<Image className="h-48 w-full object-cover"
										       src={review.image}
										       alt={review.name}
										       width={384}
										       height={384}
										/>
									</div>
									<div className="flex-1 bg-white p-6 flex flex-col justify-between">
										<div className="flex-1">
											<p className="text-sm font-medium text-primary">
												{review.organization}
											</p>
											<p className="mt-2 text-xl font-bold text-gray-900">
												{review.name}
											</p>
											<p className="mt-2">
												{[...Array(review.rating)].map((_, index) => (
													<svg key={index} className="h-5 w-5 inline text-primary" fill="currentColor"
													     viewBox="0 0 20 20"
													     xmlns="http://www.w3.org/2000/svg">
														<path
															d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z" />
													</svg>
												))}
												{[...Array(5 - review.rating)].map((_, index) => (
													<svg key={index} className="h-5 w-5 inline text-gray-300" fill="currentColor"
													     viewBox="0 0 20 20"
													     xmlns="http://www.w3.org/2000/svg">
														<path
															d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z" />
													</svg>
												))}
											</p>
											<p className="mt-2 text-lg text-gray-500">
												{review.review}
											</p>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>*/}
				</div>
			</div>
		</div>
	)
}
