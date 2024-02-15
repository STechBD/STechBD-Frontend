import { JSX } from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import Hero from '@/app/server-info/hero'


/**
 * The metadata for the Server Information page.
 *
 * @type { Metadata }
 * @since 3.0.0
 */
export const metadata: Metadata = {
	title: 'Server Information',
	description: 'Here you can find information about our servers and their status.',
}


async function info(): Promise<any> {
	const url: string = process.env.WHMCS_API_URL || 'https://cpanel.stechbd.net/includes/api.php'
	const identifier: string = process.env.WHMCS_API_IDENTIFIER || 'stechbd'
	const secret: string = process.env.WHMCS_API_SECRET || 'stechbd'

	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: new URLSearchParams({
			'identifier': identifier,
			'secret': secret,
			'action': 'GetServers',
		}).toString(),
	})
}


/**
 * The Server Information page component.
 *
 * @returns { JSX.Element } The Server Information page component.
 * @since 3.0.0
 */
export default async function Page(): Promise<JSX.Element> {
	const url: string = process.env.WHMCS_API_URL || 'https://cpanel.stechbd.net/includes/api.php'
	const identifier: string = process.env.WHMCS_API_IDENTIFIER || 'stechbd'
	const secret: string = process.env.WHMCS_API_SECRET || 'stechbd'
	const exampleOutput: string = `{
	    "result": "success",
	    "servers": [
	        {
	            "id": 1,
	            "name": "Sample cPanel Box",
	            "hostname": "hostname.example.com",
	            "ipaddress": "10.100.4.30",
	            "active": true,
	            "activeServices": 0,
	            "maxAllowedServices": 200,
	            "percentUsed": 0,
	            "module": "cpanel",
	            "status": {
	                "http": false,
	                "load": "",
	                "uptime": ""
	            }
	        }
	    ],
	    "fetchStatus": ""
	}`
	// This exampleOutput is just for reference to understand the response pattern. It cannot be used in the actual code.

	const data = await info()

	if (!data.ok) {
		const text = await data.text()

		console.log('Error:', text)

		if (typeof text === 'string') {
			const match = text.match(/result=([^]+)message=([^]+)/)

			if (match) {
				const result = match[1]
				const message = match[2]
				console.log('Result:', result)
				console.log('Message:', message)
			} else {
				console.error('Unable to extract result and message from response:', text)
			}
		} else {
			console.error('Unexpected response format:', text)
		}

		return (
			<>
				Error fetching data. Error: { data.statusText }
			</>
		)
	}

	console.log('Data:', data.json())

	return (
		<>
			<Hero/>
			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<div>
							<h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
								Server Information
							</h2>
							<div className="mt-3">
								<p className="text-lg text-gray-900">
									<strong>
										United States of America (USA)
									</strong>
								</p>
								<p className="mt-1 text-lg text-gray-900">
									Buffalo, New York
								</p>
								<p className="mt-1 text-lg text-gray-900">
									United States of America
								</p>
							</div>
						</div>
						<div className="mt-12 lg:mt-0 lg:col-span-2">
							<div className="p-8 rounded-lg shadow-lg">
								<div className="mt-3">
									<p className="text-lg text-gray-900">
										Here you can find information about our servers and their status.
									</p>
									<p className="mt-1 text-lg text-gray-900">
										Status will be displayed here.
									</p>
									<pre className="mt-1 text-lg text-gray-900 bg-gray-100 p-4 rounded-lg">
										Data: { data.toString() }
									</pre>
								</div>
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
					  "alternateName": "এস টেকনোলজি",
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
						  "name": "Home",
						  "item": "https://www.stechbd.net"
						},
						{
						  "@type": "ListItem",
						  "position": 2,
						  "name": "Server",
						  "item": "https://www.stechbd.net/server"
						},
						{
						  "@type": "ListItem",
						  "position": 3,
						  "name": "Server Information",
						  "item": "https://www.stechbd.net/server-information"
						}
					  ]
					}
				` }
			</Script>
		</>
	)
}
