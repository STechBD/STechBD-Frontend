import { JSX } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DefaultEffect } from '@/app/_component/background'
import Accordion from '@/app/_component/accordion'


export default function Page(): JSX.Element {
	const data = {
		id: 1,
		name: {
			en: 'Md. Ashraful Alam Shemul',
			bn: 'মু. আশরাফুল আলম শিমুল',
		},
		role: 'CEO of S Technologies',
		since: 'August 14, 2013',
		tagline: 'Author | Teacher | Entrepreneur | Software Developer',
		image: 'https://github.com/AAShemul.png',
		cover: '/image/AAShemul-Cover.webp',
		gender: 'male',
		birthday: 'August 14',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Md. Ashraful Alam Shemul</strong></span> is a Bangladeshi
					Author, Teacher, Entrepreneur, and Software Developer. Shemul is a <span
					className="text-primary"><strong>Muslim</strong></span>. He is studying for his bachelor&apos;s in
					Marine Fisheries at <span className="text-primary"><strong>Bangabandhu Sheikh Mujibur Rahman Maritime University</strong></span>.
				</p>
				<p className="my-2">
					He is the founder of <span className="text-primary"><Link
					href="/"><strong>S Technologies</strong></Link></span>, <span className="text-primary"><a
					href="https://www.ulkaa.com" target="_blank"><strong>Ulkaa</strong></a></span>, and <span
					className="text-primary"><a href="https://shikkhaweb.com"
					                            target="_blank"><strong>Shikkha Web</strong></a></span>. He is the
					author of <span className="text-primary"><strong>Aspect Physics</strong></span>, <span
					className="text-primary"><strong>Aspect ICT</strong></span>, and <span
					className="text-primary"><strong>MaritimeKnowledge</strong></span> books.
				</p>
				<p className="my-2">
					Besides these, he is an amateur story writer. He loves thriller, suspense, mystery, horror, comedy,
					and science fiction genres. His favorite color is <span
					className="text-blue-600"><strong>Blue</strong></span>. His favorite topics of interest are Physics,
					Mathematics, Astronomy, Economics, Politics, and Theology.
				</p>
			</>,
			established: 'Founded S Technologies in 2013.',
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			home: 'Brahmanbaria, Chattogram, Bangladesh',
			email: 'ceo@stechbd.net',
			phone: '+880 193 544 6721',
		},
		website: [
			{
				name: 'S Technologies',
				link: '/',
			},
			{
				name: 'Ulkaa',
				link: 'https://www.ulkaa.com',
			},
			{
				name: 'Shikkha Web',
				link: 'https://shikkhaweb.com',
			},
		],
		social: [
			{
				name: 'Facebook',
				link: 'https://www.facebook.com/AAShemul',
			},
			{
				name: 'Twitter',
				link: 'https://twitter.com/AAShemul',
			},
			{
				name: 'LinkedIn',
				link: 'https://www.linkedin.com/in/AAShemul',
			},
			{
				name: 'GitHub',
				link: 'https://github.com/AAShemul',
			},
		],
		work: [
			{
				company: 'S Technologies',
				role: 'CEO',
				start: 'August 14, 2013',
				end: 'Present',
				description: 'Founded the company in August 2013.',
			},
			{
				company: 'S Hosting',
				role: 'CEO',
				start: 'June 8, 2015',
				end: 'June 7, 2016',
				description: 'Founded the company in June 2015.',
			},
			{
				company: 'Ulkaa',
				role: 'CEO',
				start: 'August 14, 2015',
				end: 'Present',
				description: 'Founded the company in August 2015.',
			},
			{
				company: 'Shikkha Web',
				role: 'CEO',
				start: 'August 14, 2017',
				end: 'Present',
				description: 'Founded the company in August 2015.',
			},
		],
		education: [
			{
				institute: 'Bangabandhu Sheikh Mujibur Rahman Maritime University',
				degree: 'Bachelor of Science',
				major: 'Marine Fisheries',
				start: 'January 10, 2020',
				end: 'Present',
			},
		],
		gallery: [
			{
				link: '/image/AAShemul-1.webp',
				alt: 'Image 1',
			},
			{
				link: '/image/AAShemul-2.webp',
				alt: 'Image 2',
			},
			{
				link: '/image/AAShemul-3.webp',
				alt: 'Image 3',
			},
			{
				link: '/image/AAShemul-4.webp',
				alt: 'Image 4',
			},
			{
				link: '/image/AAShemul-5.webp',
				alt: 'Image 5',
			},
			{
				link: '/image/AAShemul-6.webp',
				alt: 'Image 6',
			},
		],
		faq: [
			{
				id: 1,
				ques: 'Who is the CEO of S Technologies?',
				ans: <>
					The CEO of <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> is <strong>Md.
					Ashraful Alam Shemul</strong>. He is a technology enthusiast and entrepreneur with a passion for
					innovation
					and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 2,
				ques: 'Who is Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul is the CEO of <span className="text-white bg-primary"><strong>S Technologies</strong></span>.
					He is a technology enthusiast and entrepreneur with a passion for innovation and technology. He
					founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in 2013.
				</>,
			},
			{
				id: 3,
				ques: 'What is the background of Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul has a background in marine fisheries. He is a technology enthusiast and
					entrepreneur
					with a passion for innovation and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 4,
				ques: 'What is the vision of Md. Ashraful Alam Shemul?',
				ans: <>
					The vision of Md. Ashraful Alam Shemul is to establish the company as a leading technology company
					in Bangladesh.
					He is working to create a technology ecosystem in Bangladesh that will help the country to become a
					technology-driven
					nation.
				</>,
			},
			{
				id: 5,
				ques: 'What is the mission of Md. Ashraful Alam Shemul?',
				ans: <>
					The mission of Md. Ashraful Alam Shemul is to provide the best technology services to the people of
					Bangladesh.
					He is committed to providing the best quality services at the lowest possible cost.
				</>,
			},
			{
				id: 6,
				ques: 'What are the future plans of Md. Ashraful Alam Shemul?',
				ans: <>
					The future plans of Md. Ashraful Alam Shemul are to establish the company as a leading technology
					company in Bangladesh.
					He is working to create new job opportunities in the field of technology and to establish the
					company as a leading
					technology company in Bangladesh.
				</>,
			},
			{
				id: 7,
				ques: 'Why Md. Ashraful Alam Shemul is famous?',
				ans: <>
					Md. Ashraful Alam Shemul is famous for his work in the field of technology. He is a technology
					enthusiast and entrepreneur
					with a passion for innovation and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 8,
				ques: 'What are the achievements of Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul has achieved a lot in his career. He is a technology enthusiast and
					entrepreneur with a passion
					for innovation and technology. He founded <span className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 9,
				ques: 'Where do Md. Ashraful Alam Shemul work?',
				ans: <>
					Md. Ashraful Alam Shemul works at <span
					className="text-white bg-primary"><strong>S Technologies</strong></span>. He is the CEO
					of the company and is responsible for the overall management of the company.
				</>,
			},
		]
	}

	return (
		<>
			<DefaultEffect/>
			<div className="relative max-w-7xl mx-auto">
				<div className="relative isolate">
					<Image
						src="/image/AAShemul-Cover.webp"
						alt="Cover"
						height="300"
						width="1920"
						className="h-full w-full"
					/>
				</div>
				<div
					className="relative isolate -mt-10 lg:-mt-32 lg:ml-10 flex justify-center lg:justify-start items-center">
					<div
						className="flex flex-col items-center lg:flex-row justify-center text-center lg:items-start lg:justify-start lg:text-left"
					>
						<Image
							src="https://github.com/AAShemul.png"
							alt="DP"
							height={ 500 }
							width={ 500 }
							className="h-48 w-48 lg:h-80 lg:w-80 rounded-full border-4 border-primary"
						/>
						<div className="mt-8 lg:mt-40 lg:ml-12">
							<h1 className="text-4xl text-gray-900">
								<strong>
									{ data.name.en } ({ data.name.bn })
								</strong>
							</h1>
							<h2 className="text-2xl font-semibold text-gray-700 mt-2">
								{ data.role }
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="relative isolate px-6 py-24 lg:px-8 xl:px-16">
				<div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-8">
					{/* Profile Card */ }
					<div
						className="w-full lg:col-span-2"
					>
						<div
							className="bg-white p-3 md:mx-2 shadow-sm rounded-lg border-t-4 border-primary"
						>
							<h2 className="text-gray-900 text-4xl leading-8 my-4">
								<strong>
									{ data.name.en }
								</strong>
							</h2>
							<h3 className="text-gray-600 font-xl text-semibold leading-6 my-4">
								{ data.tagline }
							</h3>
							<h4 className="text-gray-700 font-semibold text-xl leading-6 my-4">
								{ data.role }
							</h4>
							<p className="text-gray-500 text-lg leading-6 my-2">
								{ data.description.about }
							</p>
							<ul
								className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
							>
								<li className="flex items-center py-3">
									<span>
										Working Since
									</span>
									<span className="ml-auto">
										{ data.since }
									</span>
								</li>
							</ul>
						</div>
						<div
							className="mt-12 bg-white p-3 md:mx-2 shadow-sm rounded-lg border-t-4 border-primary"
						>
							<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
									<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
								</svg>
								<span className="tracking-wide">
									Link
								</span>
							</div>
							<div className="mt-4">
								<ul className="list-inside space-y-2">
									{ data.website.map((item, index) => (
										<li key={ index }>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary inline-block mr-4" viewBox="0 0 16 16">
												<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
											</svg>
											<Link
												href={ item.link }
												target={ item.link.startsWith('http') ? '_blank' : '' }
												className="text-primary"
											>
												{ item.name }
											</Link>
										</li>
									)) }
									{ data.social.map((item, index) => (
										<li key={ index }>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary inline-block mr-4" viewBox="0 0 16 16">
												<path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
												<path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
											</svg>
											<a
												href={ item.link }
												target="_blank"
												className="text-primary"
											>
												{ item.name }
											</a>
										</li>
									)) }
								</ul>
							</div>
						</div>
					</div>
					{/* End of profile card */ }
					<div className="w-full lg:col-span-4 xl:col-span-6 md:mx-2">
						{/* Profile tab */ }
						{/* About Section */ }
						<div className="bg-white p-3 shadow-sm rounded-lg border-t-4 border-primary">
							<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
								<svg
									className="h-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24" stroke="currentColor"
								>
									<path
										strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
								<span className="tracking-wide">About</span>
							</div>
							<div className="text-gray-700">
								<div className="grid md:grid-cols-2 text-sm">
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Name
										</div>
										<div className="px-4 py-2">
											{ data.name.en }
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Birthday
										</div>
										<div className="px-4 py-2">
											{ data.birthday }
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Gender
										</div>
										<div className="px-4 py-2">
											{ data.gender }
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Contact No.
										</div>
										<div className="px-4 py-2 text-primary">
											<a href={ 'tel:' + data.contact.phone }>
												{ data.contact.phone }
											</a>
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Current Address
										</div>
										<div className="px-4 py-2">
											{ data.contact.address }
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Permanant Address
										</div>
										<div className="px-4 py-2">
											{ data.contact.home }
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Email
										</div>
										<div className="px-4 py-2">
											<a className="text-primary" href={ 'mailto:' + data.contact.email }>
												{ data.contact.email }
											</a>
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Established
										</div>
										<div className="px-4 py-2">
											{ data.description.established }
										</div>
									</div>
								</div>
							</div>
							<button
								className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
								Full Information
							</button>
						</div>
						{/* End of about section */ }
						{/* Experience and education */ }
						<div className="mt-12 bg-white p-3 shadow-sm rounded-lg border-t-4 border-primary">
							<div className="grid grid-cols-2">
								<div>
									<div
										className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
									>

										<svg
											className="h-5 text-primary" xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24" stroke="currentColor"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											/>
										</svg>
										<span className="tracking-wide">Experience</span>
									</div>
									<ul className="list-inside space-y-2">
										{ data.work.map((item, index) => (
											<li key={ index }>
												<div className="text-primary">{ item.company }</div>
												<div
													className="text-gray-500 text-xs">{ item.start } - { item.end }</div>
												<div className="text-gray-700">{ item.description }</div>
											</li>
										)) }
									</ul>
								</div>
								<div>
									<div
										className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
									>
										<svg
											className="h-5 text-primary" xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24" stroke="currentColor"
										>
											<path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"/>
											<path
												fill="#fff"
												d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
											/>
											<path
												strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
											/>
										</svg>
										<span className="tracking-wide">Education</span>
									</div>
									<ul className="list-inside space-y-2">
										{ data.education.map((item, index) => (
											<li key={ index }>
												<div className="text-primary">{ item.institute }</div>
												<div
													className="text-gray-500 text-xs">{ item.start } - { item.end }</div>
												<div
													className="text-gray-700">{ item.degree } in { item.major }</div>
											</li>
										)) }
									</ul>
								</div>
							</div>
							{/* End of Experience and education grid */ }
						</div>
						{/* End of profile tab */ }
						{/* Photo Gallery */ }
						<div className="mt-12 bg-white p-3 shadow-sm rounded-lg border-t-4 border-primary">
							<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
								<svg
									className="h-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 16 16" stroke="currentColor"
								>
									<path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
									<path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
								</svg>
								<span className="tracking-wide">
									Photo Gallery
								</span>
							</div>
							<div className="mt-4 grid lg:grid-cols-2 xl:grid-cols-4">
								{ data.gallery.map((item, index) => (
									<div key={ index }>
										<Image
											src={ item.link }
											alt={ item.alt }
											height={ 200 }
											width={ 200 }
											className="h-48 w-full m-2 object-cover rounded-lg shadow-sm"
										/>
									</div>
								)) }
							</div>
							{/* End of Experience and education grid */ }
						</div>
						{/* End of photo gallery */ }
						{/* FAQ */ }
						<div className="mt-12 bg-white p-3 shadow-sm rounded-lg border-t-4 border-primary">
							<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
								<svg
									className="h-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 16 16" stroke="currentColor"
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
									<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
								</svg>
								<span className="tracking-wide">
									Frequently Asked Questions (FAQ) about { data.name.en }
								</span>
							</div>
							<div className="mt-4">
								<Accordion data={ data.faq }/>
							</div>
						</div>
						{/* End of FAQ */ }
					</div>
				</div>
			</div>
		</>
	)
}
