import { JSX } from 'react'
import Hero from '@/app/hero'
import AnimatedLogo from '@/app/_component/animatedLogo'
import { Bounce } from '@/app/_component/animation'
import PricingTable from '@/app/_component/pricingTable'
import Testimonial from '@/app/testimonial'
import Update from '@/app/update'


/**
 * Homepage.
 *
 * @returns { JSX.Element } The homepage.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const pricingData = [
		{
			title: 'Shared Hosting',
			featured: true,
			price: {
				bdt: 1200,
				usd: 12,
			},
			period: 0,
			description: 'Ideal for low volume websites',
			features: [
				<><strong>3GB NVMe SSD</strong> Storage</>,
				<><strong>60GB</strong> Bandwidth</>,
				<><strong>1</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>cPanel</strong> Control Panel</>,
			],
			button: 'More Plans',
			link: '/shared-hosting',
		},
		{
			title: 'Reseller Hosting',
			price: {
				bdt: 7000,
				usd: 70,
			},
			period: 0,
			description: 'Ideal for starting hosting service business',
			features: [
				<><strong>10GB NVMe SSD</strong> Storage</>,
				<><strong>100GB</strong> Bandwidth</>,
				<><strong>5 cPanel</strong> Account</>,
				<><strong>Unlimited</strong> Subdomain, Addon Domain, and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Unlimited Free</strong> SSL Certificate</>,
				<><strong>cPanel and WHM</strong> Control Panel</>,
			],
			button: 'More Plans',
			link: '/reseller-hosting',
		},
		{
			title: 'Unmanaged VPS',
			price: {
				bdt: 1200,
				usd: 12,
			},
			period: 1,
			description: 'Ideal for high traffic business websites',
			features: [
				<><strong>25GB NVMe SSD</strong> Storage</>,
				<><strong>1TB</strong> Bandwidth</>,
				<><strong>2GB</strong> RAM</>,
				<><strong>2</strong> vCPU</>,
				<><strong>1</strong> IPv4 Address</>,
				<><strong>100MBPS</strong> Port</>,
				<><strong>Full Root Access</strong> Control Panel</>,
				<><strong>USA</strong> Server</>,
			],
			button: 'More Plans',
			link: '/unmanaged-vps',
		},
		{
			title: 'Dedicated Server',
			price: {
				bdt: 12000,
				usd: 120,
			},
			period: 1,
			description: 'Ideal for high traffic business websites',
			features: [
				<><strong>480GB NVMe SSD</strong> Storage</>,
				<><strong>10Gbit Unmetered</strong> Bandwidth</>,
				<><strong>Dual Xeon E5-2660 (16c / 32t) 2.2GHz / 3GHz Turbo</strong> Processor</>,
				<><strong>32GB DDR3</strong> RAM</>,
				<><strong>5</strong> IPv4 Address</>,
				<><strong>Unlimited</strong> IPv6 Address</>,
				<><strong>Full</strong> Root Access</>,
				<><strong>USA</strong> Server</>,
			],
			button: 'More Plans',
			link: '/dedicated-server',
		},
	]

	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<div className="absolute inset-x-0 -top-24 -z-10 transform-gpu overflow-hidden blur-3xl"
				     aria-hidden="true">
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }></div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
						style={ { clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' } }></div>
				</div>
				<div className="px-16 md:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Web Hosting and Server
					</h2>
					<p className="mt-4 text-xl text-gray-800 dark:text-gray-200">
						We have been providing web hosting and server since 2015 with customer satisfaction.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
						<div className="flex items-center justify-center mt-3">
							<Bounce hover={ true }>
								<AnimatedLogo design="h-96 w-96"/>
							</Bounce>
						</div>
						<div className="mt-12 sm:mt-16 md:mt-0">
							<h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
								We provide technological solutions for businesses
							</h2>
							<div className="mt-3">
								<p className="text-lg text-gray-800 dark:text-gray-200">
									We are a team of software engineers, AI experts, and designers who are passionate
									about building technology solutions for you.
								</p>
							</div>
							<div className="mt-9">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-800 dark:text-gray-200">
										<p>
											We develop and design website and software.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-800 dark:text-gray-200">
										<p>
											We design UI and UX for website and software.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-800 dark:text-gray-200">
										<p>
											We build artificial intelligence solution for businesses.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-800 dark:text-gray-200">
										<p>
											We provide domain, web hosting, and server for website.
										</p>
									</div>
								</div>
								<div className="mt-6 flex">
									<div className="flex-shrink-0">
										<svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
										     fill="none" viewBox="0 0 24 24" stroke="currentColor"
										     aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											      d="M5 13l4 4L19 7"/>
										</svg>
									</div>
									<div className="ml-3 text-base text-gray-800 dark:text-gray-200">
										<p>
											We provide SEO solution and digital marketing service for business.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Client Testimonials
					</h2>
					<p className="mt-4 text-xl text-gray-800 dark:text-gray-200">
						What our clients say about us.
					</p>
					<Testimonial/>
				</div>
				<div className="md:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Latest News and Update
					</h2>
					<p className="mt-4 text-xl text-gray-800 dark:text-gray-200">
						Find out the latest news and updates from us.
					</p>
					<Update/>
				</div>
			</div>
		</>
	)
}
