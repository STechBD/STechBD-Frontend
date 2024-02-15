import { JSX } from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import Hero from '@/app/contact/hero'
import ContactForm from '@/app/contact/form'


/**
 * The metadata for the Contact page.
 *
 * @type { Metadata }
 * @since 3.0.0
 */
export const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Get in touch with us by filling out the form below and we will get back to you as soon as possible.',
}


/**
 * The Contact page component.
 *
 * @returns { JSX.Element } The Contact page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<div>
							<h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
								Contact Information
							</h2>
							<div className="mt-3">
								<p className="text-lg text-gray-900">
									<strong>
										S Technologies Headquarters
									</strong>
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Dhaka
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Bangladesh
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Phone: <a href="tel:+8801935446721">+(880) 1935-446721</a>
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Email: <a href="mailto:contact@stechbd.net">contact@stechbd.net</a>
								</p>
							</div>
						</div>
						<div className="mt-12 lg:mt-0 lg:col-span-2">
							<ContactForm/>
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
						  "name": "Home",
						  "item": "https://www.stechbd.net"
						},
						{
						  "@type": "ListItem",
						  "position": 2,
						  "name": "Contact",
						  "item": "https://www.stechbd.net/contact"
						}
					  ]
					}
				` }
			</Script>
		</>
	)
}
