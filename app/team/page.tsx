import { JSX } from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import { DefaultEffect } from '@/app/_component/background'
import Hero from './hero'
import Image from 'next/image'
import Link from 'next/link'
import { team } from '@/app/_data/team'
import { Team } from '@/app/_data/type'


/**
 * The metadata for the Team page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Team'
const description: string = 'Meet the amazing team behind S Technologies who work hard to provide you with the best services. We are a team of dedicated professionals who are passionate about what we do.'
export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
	twitter: {
		title,
		description,
	},
}


/**
 * The Team page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default async function Page(): Promise<JSX.Element> {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8 max-w-7xl mx-auto lg:py-20">
				<DefaultEffect/>
				<div className="lg:grid lg:grid-cols-3 lg:gap-8">
					<div>
						<h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
							Team Members
						</h2>
						<div className="mt-3">
							{ team.map((person: Team, index: number): JSX.Element => (
								<div key={ index } className="mt-1 text-lg text-gray-900 dark:text-gray-100">
									{ index + 1 }. { person.name.en }
								</div>
							)) }
						</div>
					</div>
					<div className="mt-12 lg:mt-0 lg:col-span-2">
						<h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
							Team Members of S Technologies
						</h2>
						<p className="mt-3 text-lg text-gray-900 dark:text-gray-100">
							Meet the amazing team behind S Technologies who work hard to provide you with the best
							services. We are a team of dedicated professionals who are passionate about what we do.
						</p>
						<div className="mt-12">
							<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
								{ team.map((person: Team, index: number): JSX.Element => (
									<Link
										key={ index }
										className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
										href={ '/team/' + person.slug }>
										<div className="flex items-center">
											<Image
												src={ person.image }
												alt={ 'Profile Picture of ' + person.name.en + ' | ' + person.name.bn }
												className="w-16 h-16 rounded-full object-cover object-center flex-shrink mr-4"
												width={ 64 }
												height={ 64 }
											/>
											<div>
												<h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
													{ person.name.en }
												</h3>
												<p className="text-gray-500 dark:text-gray-400">
													{ person.role }
												</p>
											</div>
										</div>
										{ person.description?.intro && (
											<div className="mt-4 text-gray-900 dark:text-gray-100">
												{ person.description.intro ?? '' }
											</div>
										) }
									</Link>
								)) }
							</div>
						</div>
					</div>
				</div>
			</div>
			<Script id="schema" type="application/ld+json">
				{ `
					{
					  "@context": "https://schema.org",
					  "@type": "Organization",
					  "url": "https://www.stechbd.net",
					  "name": "S Technologies",
					  "alternateName": "এস টেকনোলজিস",
					  "alternateName": "STechBD",
					  "alternateName": "STechBD.Net",
					  "logo": "https://www.stechbd.net/image/S-Technologies-Icon-Light.svg",
					  "description": "S Technologies (STechBD.Net) is a leading technology company in Bangladesh. It was founded in 2013. It provides services like domain registration, web hosting, web servers, software development, software as a service (SasS), design solutions, etc. S Technologies has been working in research of new technologies and developing new products for the people.",
					  "contactPoint": {
						"@type": "ContactPoint",
						"telephone": "+8801935446721",
						"contactType": "Customer service"
					  },
					  "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Dhaka",
                        "addressCountry": "Bangladesh"				
					},
					  "sameAs": [
						"https://www.facebook.com/STechBD.Net",
						"https://www.linkedin.com/company/STechBD",
						"https://www.instagram.com/STechBD",
						"https://www.twitter.com/STechBD_Net"
					  ]
					},
					{
					  "@context": "https://schema.org",
					  "@type": "WebSite",
					  "url": "https://www.stechbd.net",
					  "potentialAction": {
						"@type": "SearchAction",
						"target": "https://www.stechbd.net/search?q={search_term_string}",
						"query-input": "required name=search_term_string"
					  }
					},
					{
					  "@context": "https://schema.org",
					  "@type": "WebPage",
					  "url": "https://www.stechbd.net",
					  "name": "S Technologies",
					  "isPartOf": {
						"@type": "WebSite",
						"url": "https://www.stechbd.net"
					  },
					  "inLanguage": "en-US",
					  "about": "S Technologies (STechBD.Net) is a leading technology company in Bangladesh. It was founded in 2013. It provides services like domain registration, web hosting, web servers, software development, software as a service (SasS), design solutions, etc. S Technologies has been working in research of new technologies and developing new products for the people.",
					  "datePublished": "2013-01-01",
					  "dateModified": "2021-09-01"
					},
					{
					  "@context": "https://schema.org",
					  "@type": "BreadcrumbList",
					  "itemListElement": [
						{
						  "@type": "ListItem",
						  "position": 1,
						  "name": "S Technologies",
						  "item": "https://www.stechbd.net"
						},
						{
						  "@type": "ListItem",
						  "position": 2,
						  "name": "Team",
						  "item": "https://www.stechbd.net/team"
						}
					  ]
					}
				` }
			</Script>
		</>
	)
}
