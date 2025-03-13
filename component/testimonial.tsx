import { JSX } from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'
import remarkEmoji from 'remark-emoji'
import rehypeRaw from 'rehype-raw'


/**
 * The Testimonial component.
 *
 * @returns { JSX.Element } The Testimonial component.
 * @since 3.0.0
 */
export default function Testimonial(): JSX.Element {
	const reviews = [
		{
			name: 'Ruhul Sinbad',
			image: '/image/Ruhul-Sinbad-Client.webp',
			organization: 'Dukululu',
			profession: 'Software Developer',
			rating: 5,
			review: 'Too much <strong>reliable</strong> and <strong>great service</strong>. Obviously, I will buy all products from here next time. Thanks for the <strong>user-friendly</strong> service. <strong>Best of luck.</strong>',
		},
		{
			name: 'Saiful Islam Nasir',
			image: '/image/Saiful-Islam-Nasir-Client.webp',
			organization: 'Astabd',
			profession: 'Graphic Designer',
			rating: 5,
			review: 'I got <strong>great service</strong> here. And get <strong>proper support</strong> all the time. Server quality, speed, and uptime are <strong>great.</strong> I am <strong>satisfied</strong> with their service.',
		},
	]

	return (
		<>
			{/*{ reviews.map((review, index) => (
				<div key={ index }
				     className="flex flex-col rounded-lg shadow-sm hover:shadow-xl overflow-hidden bg-white dark:bg-gray-800">
					<div className="flex-shrink-0">
						<Image className="h-48 w-full object-cover"
						       src={ review.image }
						       alt={ review.name }
						       width={ 384 }
						       height={ 384 }
						/>
					</div>
					<div className="flex-1 p-6 flex flex-col justify-between">
						<div className="flex-1">
							<p className="text-sm font-medium text-primary dark:text-gray-200">
								{ review.organization } • { review.profession }
							</p>
							<p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
								{ review.name }
							</p>
							<p className="mt-2">
								{ [ ...Array(review.rating) ].map((_, index) => (
									<svg key={ index } className="h-5 w-5 inline text-primary dark:text-blue-500"
									     fill="currentColor"
									     viewBox="0 0 20 20"
									     xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z"/>
									</svg>
								)) }
								{ [ ...Array(5 - review.rating) ].map((_, index) => (
									<svg key={ index } className="h-5 w-5 inline text-gray-300 dark:text-gray-600"
									     fill="currentColor"
									     viewBox="0 0 20 20"
									     xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z"/>
									</svg>
								)) }
							</p>
							<div className="mt-2 text-lg text-gray-500 dark:text-gray-400">
								<Markdown rehypePlugins={ [
									rehypeRaw,
								] }
								>
									{ review.review }
								</Markdown>
							</div>
						</div>
					</div>
				</div>
			)) }*/ }
			{ reviews.map((review, index) => (
				<div key={ index }
				     className="flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden bg-white dark:bg-gray-800"
				>
					<div className="flex-1 p-6 flex flex-col justify-between">
						<div className="flex-shrink-0">
							<div
								className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
							>
								<Image className="mr-4 w-16 h-16 rounded-full"
								       src={ review.image }
								       alt={ review.name } height={ 100 }
								       width={ 100 }
								/>
								<div>
									<p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
										{ review.name }
									</p>
									<p className="text-sm font-medium text-primary dark:text-gray-200">
										{ review.organization } • { review.profession }
									</p>
								</div>
							</div>
						</div>
						<div className="flex-1">
							<p className="mt-2">
								{ [ ...Array(review.rating) ].map((_, index) => (
									<svg key={ index } className="h-5 w-5 inline text-primary dark:text-blue-500"
									     fill="currentColor"
									     viewBox="0 0 20 20"
									     xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z"/>
									</svg>
								)) }
								{ [ ...Array(5 - review.rating) ].map((_, index) => (
									<svg key={ index } className="h-5 w-5 inline text-gray-300 dark:text-gray-600"
									     fill="currentColor"
									     viewBox="0 0 20 20"
									     xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10 3.05l2.3 6.65H18l-5.65 4.1 2.3 6.65L10 14.85l-5.65 4.1 2.3-6.65L2 9.7h5.7L10 3.05z"/>
									</svg>
								)) }
							</p>
							<div className="mt-2 text-lg text-gray-500 dark:text-gray-400">
								<Markdown
									remarkPlugins={ [
										remarkEmoji,
									] }
									rehypePlugins={ [
										rehypeRaw,
									] }
								>
									{ review.review }
								</Markdown>
							</div>
						</div>
					</div>
				</div>
			)) }
		</>
	)
}
