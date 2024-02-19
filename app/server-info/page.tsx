import { JSX, createContext } from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import Hero from '@/app/server-info/hero'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const servers = [
	{
		id: 1,
		name: 'Server 1',
		location: 'Buffalo, New York',
		latitude: 42.8864,
		longitude: -78.8784,
		ip: '105.25.44.401',
	},
	{
		id: 2,
		name: 'Server 2',
		location: 'Los Angeles, California',
		latitude: 34.0522,
		longitude: -118.2437,
		ip: '105.25.44.402',
	},
	{
		id: 3,
		name: 'Server 3',
		location: 'Dallas, Texas',
		latitude: 32.7767,
		longitude: -96.7970,
		ip: '105.25.44.403',
	},
	{
		id: 4,
		name: 'Server 4',
		location: 'Miami, Florida',
		latitude: 25.7617,
		longitude: -80.1918,
		ip: '105.25.44.404',
	},
	{
		id: 5,
		name: 'Server 5',
		location: 'Chicago, Illinois',
		latitude: 41.8781,
		longitude: -87.6298,
		ip: '105.25.44.405',
	},
	{
		id: 6,
		name: 'Server 6',
		location: 'New York City, New York',
		latitude: 40.7128,
		longitude: -74.0060,
		ip: '105.25.44.406',
	},
	{
		id: 7,
		name: 'Server 7',
		location: 'San Francisco, California',
		latitude: 37.7749,
		longitude: -122.4194,
		ip: '105.25.44.407',
	},
	{
		id: 8,
		name: 'Server 8',
		location: 'Seattle, Washington',
		latitude: 47.6062,
		longitude: -122.3321,
		ip: '105.25.44.408',
	},
	{
		id: 9,
		name: 'Server 9',
		location: 'Las Vegas, Nevada',
		latitude: 36.1699,
		longitude: -115.1398,
		ip: '105.25.44.409',
	},
	{
		id: 10,
		name: 'Server 10',
		location: 'Phoenix, Arizona',
		latitude: 33.1915,
		longitude: -111.8870,
		ip: '105.25.44.410',
	},
]
function ServerMap(): JSX.Element {
	return (
		<MapContainer center={[0, 0]} zoom={ 2 } style={ { height: '500px', width: '100%' } }>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
			{ servers.map(server => (
				<Marker key={ server.id } position={ [ server.latitude, server.longitude ] }>
					<Popup>
						<div>
							<h2>{ server.name }</h2>
							<p>Location: { server.location }</p>
							<p>IP Address: { server.ip }</p>
							{/* Add more server information as needed */ }
						</div>
					</Popup>
				</Marker>
			)) }
		</MapContainer>
	)
}


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
	// const url: string = 'https://www.stechbd.net/post.php'
	const identifier: string = process.env.WHMCS_API_IDENTIFIER || 'stechbd'
	const secret: string = process.env.WHMCS_API_SECRET || 'stechbd'

	const formData: FormData = new FormData()

	formData.append('identifier', identifier)
	formData.append('secret', secret)
	formData.append('action', 'GetServers')
	formData.append('serviceId', '1')
	formData.append('fetchStatus', 'false')
	formData.append('responsetype', 'json')

	return await fetch(url, {
		method: 'POST',
		body: formData,
	})
}


/**
 * The Server Information page component.
 *
 * @returns { JSX.Element } The Server Information page component.
 * @since 3.0.0
 */
export default async function Page(): Promise<JSX.Element> {
	const data = await info()

	if (data.ok) {
		const json = await data.json()

		console.log('JSON Data:')
		console.log(json)
		console.log('Status:')
		console.log(json.servers[0].status)

		const active: boolean = json.servers[0].active
	} else {
		console.error('Failed to fetch server information.')
		console.error('Error:', data.statusText)

		const active: boolean = false
	}

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
							<div className="mt-12">
								<ServerMap/>
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
