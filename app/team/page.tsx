import { JSX } from 'react'
import Image from 'next/image'
import { DefaultEffect } from '@/app/_component/background'


export default function Page(): JSX.Element {
	const data = {
		id: 1,
		name: 'Md. Ashraful Alam Shemul',
		role: 'CEO of S Technologies',
		image: 'https://github.com/AAShemul.png',
		cover: '/image/AAShemul-Cover.webp',
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
			about: 'Technology enthusiast and entrepreneur with a passion for innovation and technology.',
			established: 'Founded S Technologies in 2013.',
		},
		contact: {
			email: 'ceo@stechbd.net',
			phone: '+880 123 456 7890',
		},
		social: {
			facebook: 'https://www.facebook.com/AAShemul',
			twitter: 'https://twitter.com/AAShemul',
			linkedin: 'https://www.linkedin.com/in/AAShemul',
			github: 'https://github.com/AAShemul',
		},
		faq: [
			{
				id: 1,
				ques: 'Who is the CEO of S Technologies?',
				ans: <>
					The CEO of <span className="text-white bg-primary"><strong>S Technologies</strong></span> is <strong>Md.
					Ashraful Alam Shemul</strong>. He is a technology enthusiast and entrepreneur with a passion for innovation
					and technology. He founded <span className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 2,
				ques: 'Who is Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul is the CEO of <span className="text-white bg-primary"><strong>S Technologies</strong></span>.
					He is a technology enthusiast and entrepreneur with a passion for innovation and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in 2013.
				</>,
			},
			{
				id: 3,
				ques: 'What is the background of Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul has a background in marine fisheries. He is a technology enthusiast and entrepreneur
					with a passion for innovation and technology. He founded <span className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 4,
				ques: 'What is the vision of Md. Ashraful Alam Shemul?',
				ans: <>
					The vision of Md. Ashraful Alam Shemul is to establish the company as a leading technology company in Bangladesh.
					He is working to create a technology ecosystem in Bangladesh that will help the country to become a technology-driven
					nation.
				</>,
			},
			{
				id: 5,
				ques: 'What is the mission of Md. Ashraful Alam Shemul?',
				ans: <>
					The mission of Md. Ashraful Alam Shemul is to provide the best technology services to the people of Bangladesh.
					He is committed to providing the best quality services at the lowest possible cost.
				</>,
			},
			{
				id: 6,
				ques: 'What are the future plans of Md. Ashraful Alam Shemul?',
				ans: <>
					The future plans of Md. Ashraful Alam Shemul are to establish the company as a leading technology company in Bangladesh.
					He is working to create new job opportunities in the field of technology and to establish the company as a leading
					technology company in Bangladesh.
				</>,
			},
			{
				id: 7,
				ques: 'Why Md. Ashraful Alam Shemul is famous?',
				ans: <>
					Md. Ashraful Alam Shemul is famous for his work in the field of technology. He is a technology enthusiast and entrepreneur
					with a passion for innovation and technology. He founded <span className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 8,
				ques: 'What are the achievements of Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul has achieved a lot in his career. He is a technology enthusiast and entrepreneur with a passion
					for innovation and technology. He founded <span className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 9,
				ques: 'Where do Md. Ashraful Alam Shemul work?',
				ans: <>
					Md. Ashraful Alam Shemul works at <span className="text-white bg-primary"><strong>S Technologies</strong></span>. He is the CEO
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
				<div className="relative isolate -mt-10 lg:-mt-32 lg:ml-10 flex justify-center lg:justify-start items-center">
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
									Md. Ashraful Alam Shemul
								</strong>
							</h1>
							<h2 className="text-2xl font-semibold text-gray-700 mt-2">
								CEO of S Technologies
							</h2>
							{/* Buttons */ }
							<div className="mt-4">
								<button className="bg-primary text-white px-4 py-2 rounded-md mr-4">
									Contact
								</button>
								<button className="bg-primary text-white px-4 py-2 rounded-md">
									Follow
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative isolate px-6 py-24 lg:px-8 xl:px-16">
				<div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-8">
					<div className="w-full lg:col-span-2 md:mx-2">
						{/* Profile Card */ }
						<div className="bg-white p-3 border-t-4 border-primary">
							<h2 className="text-gray-900 text-xl leading-8 my-1">
								<strong>
									{ data.name }
								</strong>
							</h2>
							<h3 className="text-gray-600 font-lg text-semibold leading-6">
								{ data.role }
							</h3>
							<p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
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
										August 14, 2013
									</span>
								</li>
							</ul>
						</div>
						{/* End of profile card */ }
					</div>
					<div className="w-full lg:col-span-4 xl:colspan-6 md:mx-2">
						{/* Profile tab */ }
						{/* About Section */ }
						<div className="bg-white p-3 shadow-sm rounded-sm">
							<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
		                        <span className="text-green-500">
		                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		                                 stroke="currentColor">
		                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
		                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
		                                />
		                            </svg>
		                        </span>
								<span className="tracking-wide">About</span>
							</div>
							<div className="text-gray-700">
								<div className="grid md:grid-cols-2 text-sm">
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">First Name</div>
										<div className="px-4 py-2">Jane</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">Last Name</div>
										<div className="px-4 py-2">Doe</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">Gender</div>
										<div className="px-4 py-2">Female</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">Contact No.</div>
										<div className="px-4 py-2">+11 998001001</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">Current Address</div>
										<div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">Permanant Address</div>
										<div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">Email.</div>
										<div className="px-4 py-2">
											<a className="text-blue-800"
											   href="mailto:jane@example.com">jane@example.com</a>
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">Birthday</div>
										<div className="px-4 py-2">Feb 06, 1998</div>
									</div>
								</div>
							</div>
							<button
								className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
								Full Information
							</button>
						</div>
						{/* End of about section */ }

						<div className="my-4"></div>

						{/* Experience and education */ }
						<div className="bg-white p-3 shadow-sm rounded-sm">

							<div className="grid grid-cols-2">
								<div>
									<div
										className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                </span>
										<span className="tracking-wide">Experience</span>
									</div>
									<ul className="list-inside space-y-2">
										<li>
											<div className="text-teal-600">Owner at Her Company Inc.</div>
											<div className="text-gray-500 text-xs">March 2020 - Now</div>
										</li>
										<li>
											<div className="text-teal-600">Owner at Her Company Inc.</div>
											<div className="text-gray-500 text-xs">March 2020 - Now</div>
										</li>
										<li>
											<div className="text-teal-600">Owner at Her Company Inc.</div>
											<div className="text-gray-500 text-xs">March 2020 - Now</div>
										</li>
										<li>
											<div className="text-teal-600">Owner at Her Company Inc.</div>
											<div className="text-gray-500 text-xs">March 2020 - Now</div>
										</li>
									</ul>
								</div>
								<div>
									<div
										className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path fill="#fff"
                                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                    </svg>
                                </span>
										<span className="tracking-wide">Education</span>
									</div>
									<ul className="list-inside space-y-2">
										<li>
											<div className="text-teal-600">Masters Degree in Oxford</div>
											<div className="text-gray-500 text-xs">March 2020 - Now</div>
										</li>
										<li>
											<div className="text-teal-600">Bachelors Degreen in LPU</div>
											<div className="text-gray-500 text-xs">March 2020 - Now</div>
										</li>
									</ul>
								</div>
							</div>
							{/* End of Experience and education grid */ }
						</div>
						{/* End of profile tab */ }
					</div>
				</div>
			</div>
		</>
	)
}
