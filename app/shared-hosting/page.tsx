import { JSX } from 'react'
import { Metadata } from 'next'
import Hero from '@/app/shared-hosting/hero'
import PricingTable from '@/app/_component/pricingTable'
import ComparisonTable from '@/app/_component/comparisonTable'


/**
 * Metadata for the Shared Hosting page.
 *
 * @returns { Metadata } The metadata for the Shared Hosting page.
 * @since 3.0.0
 */
export const metadata: Metadata = {
	title: 'Shared Hosting',
	description: 'Affordable shared hosting plans for your website. Get started with our shared hosting plans today.',
}


/**
 * The Shared Hosting page component.
 *
 * @returns { JSX.Element } The Shared Hosting page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	const pricingData = [
		{
			title: '3GB',
			featured: true,
			price: {
				bdt: 3200,
				usd: 32,
			},
			period: 0,
			description: 'Ideal for low traffic website',
			features: [
				<><strong>3GB NVMe SSD</strong> Storage</>,
				<><strong>60GB</strong> Bandwidth</>,
				<><strong>1</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>99.9%</strong> Uptime</>,
			],
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/3gb',
		},
		{
			title: '5GB',
			price: {
				bdt: 4000,
				usd: 40,
			},
			period: 0,
			description: 'Ideal for low traffic website',
			features: [
				<><strong>5GB NVMe SSD</strong> Storage</>,
				<><strong>100GB</strong> Bandwidth</>,
				<><strong>1</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>99.9%</strong> Uptime</>,
			],
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/5gb',
		},
		{
			title: '10GB',
			price: {
				bdt: 6500,
				usd: 65,
			},
			period: 0,
			description: 'Ideal for low traffic business website',
			features: [
				<><strong>10GB NVMe SSD</strong> Storage</>,
				<><strong>200GB</strong> Bandwidth</>,
				<><strong>2</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>99.9%</strong> Uptime</>,
			],
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/10gb',
		},
		{
			title: '15GB',
			price: {
				bdt: 9500,
				usd: 95,
			},
			period: 0,
			description: 'Ideal for medium traffic business website',
			features: [
				<><strong>15GB NVMe SSD</strong> Storage</>,
				<><strong>300GB</strong> Bandwidth</>,
				<><strong>5</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>99.9%</strong> Uptime</>,
			],
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/15gb',
		},
		{
			title: '20GB',
			price: {
				bdt: 12000,
				usd: 120,
			},
			period: 0,
			description: 'Ideal for medium traffic business website',
			features: [
				<><strong>20GB NVMe SSD</strong> Storage</>,
				<><strong>400GB</strong> Bandwidth</>,
				<><strong>Unlimited</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>99.9%</strong> Uptime</>,
			],
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/20gb',
		},
		{
			title: '25GB',
			price: {
				bdt: 14500,
				usd: 145,
			},
			period: 1,
			description: 'Ideal for medium traffic business website',
			features: [
				<><strong>25GB NVMe SSD</strong> Storage</>,
				<><strong>500GB</strong> Bandwidth</>,
				<><strong>Unlimited</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>99.9%</strong> Uptime</>,
			],
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/25gb',
		},
		{
			title: 'Unlimited-A',
			price: {
				bdt: 10000,
				usd: 100,
			},
			period: 0,
			description: 'Ideal for medium traffic business website',
			features: [
				<><strong>Unlimited NVMe SSD</strong> Storage</>,
				<><strong>200GB</strong> Bandwidth</>,
				<><strong>1</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>99.9%</strong> Uptime</>,
			],
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/ua',
		},
		{
			title: 'Unlimited-B',
			price: {
				bdt: 20000,
				usd: 200,
			},
			period: 0,
			description: 'Ideal for medium traffic business website',
			features: [
				<><strong>Unlimited NVMe SSD</strong> Storage</>,
				<><strong>Unlimited</strong> Bandwidth</>,
				<><strong>2</strong> Domain</>,
				<><strong>Unlimited</strong> Subdomain and Parked Domain</>,
				<><strong>Unlimited</strong> Email Account, FTP, and Database</>,
				<><strong>Free</strong> SSL Certificate</>,
				<><strong>99.9%</strong> Uptime</>,
			],
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/ub',
		},
	]
	const featureData = [
		{
			title: 'General',
			features: {
				storage: 'Storage',
				bandwidth: 'Bandwidth',
				domain: 'Addon Domain',
				subdomain: 'Subdomain',
				parked: 'Parked Domain',
				email: 'Email Account',
				ftp: 'FTP Account',
				database: 'Database',
				ssl: 'SSL Certificate',
				uptime: 'Uptime',
				panel: 'Control Panel',
			}
		},
		{
			title: 'Performance',
			features: {
				ram: 'RAM',
				entryProcess: 'Entry Process',
				process: 'Number of Processes',
				io: 'IO',
				iops: 'IOPS',
			}
		},
		{
			title: 'System',
			features: {
				os: 'Operating System',
				distro: 'Distribution',
				architecture: 'Architecture',
			},
		},
		{
			title: 'Programming Language and Manager',
			features: {
				php: 'PHP',
				pear: 'PEAR',
				nodejs: 'Node.js',
				npm: 'NPM',
				python: 'Python',
				pip: 'PIP',
				ruby: 'Ruby',
				gem: 'GEM',
				perl: 'Perl',
				cpan: 'CPAN',
				mysql: 'MySQL',
				mariadb: 'MariaDB',
				phpmyadmin: 'phpMyAdmin',
			},
		},
		{
			title: 'Development Tool',
			features: {
				terminal: 'Terminal',
				ssh: 'SSH',
				git: 'Git',
			},
		},
		{
			title: 'Other Tool',
			features: {
				metrics: 'Metrics',
				security: 'Security',
				virusScanner: 'Virus Scanner',
				softaculous: 'Softaculous',
				wordpress: 'WordPress',
				backup: 'Backup',
			},
		},
	]
	const comparisonData = [
		{
			title: '3GB',
			price: {
				bdt: 3200,
				usd: 32,
			},
			period: 0,
			description: 'Ideal for low traffic website',
			features: {
				storage: '3GB',
				bandwidth: '60GB',
				domain: '1',
				subdomain: 'Unlimited',
				parked: 'Unlimited',
				email: 'Unlimited',
				ftp: 'Unlimited',
				database: 'Unlimited',
				ssl: true,
				uptime: '99.9%',
				panel: 'cPanel',
				ram: '1GB',
				entryProcess: '30',
				process: '120',
				io: '20MBPS',
				iops: '8192',
				os: 'Linux',
				distro: 'CloudLinux 8.8+',
				architecture: 'x86_64',
				php: '8.3+',
				pear: true,
				nodejs: '20.3+',
				npm: true,
				python: '3.11+',
				pip: true,
				ruby: '3.11+',
				gem: true,
				perl: '5.26+',
				cpan: true,
				mysql: '8.3+',
				mariadb: '10.3+',
				phpmyadmin: true,
				terminal: false,
				ssh: true,
				git: true,
				metrics: true,
				security: true,
				virusScanner: true,
				softaculous: true,
				wordpress: true,
				backup: 'Daily',
			},
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/3gb',
		},
		{
			title: '5GB',
			price: {
				bdt: 4000,
				usd: 40,
			},
			period: 0,
			description: 'Ideal for low traffic website',
			features: {
				storage: '5GB',
				bandwidth: '100GB',
				domain: '1',
				subdomain: 'Unlimited',
				email: 'Unlimited',
				ftp: 'Unlimited',
				database: 'Unlimited',
				ssl: true,
				uptime: '99.9%',
				panel: 'cPanel',
				ram: '1GB',
				entryProcess: '30',
				process: '120',
				io: '20MBPS',
				iops: '8192',
				os: 'Linux',
				distro: 'CloudLinux 8.8+',
				architecture: 'x86_64',
				php: '8.3+',
				pear: true,
				nodejs: '20.3+',
				npm: true,
				python: '3.11+',
				pip: true,
				ruby: '3.11+',
				gem: true,
				perl: '5.26+',
				cpan: true,
				mysql: '8.3+',
				mariadb: '10.3+',
				phpmyadmin: true,
				terminal: false,
				ssh: true,
				git: true,
				metrics: true,
				security: true,
				virusScanner: true,
				softaculous: true,
				wordpress: true,
				backup: 'Daily',
			},
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/5gb',
		},
		{
			title: '10GB',
			price: {
				bdt: 5500,
				usd: 55,
			},
			period: 0,
			description: 'Ideal for low traffic business website',
			features: {
				storage: '10GB',
				bandwidth: '200GB',
				domain: '2',
				subdomain: 'Unlimited',
				email: 'Unlimited',
				ftp: 'Unlimited',
				database: 'Unlimited',
				ssl: true,
				uptime: '99.9%',
				panel: 'cPanel',
				ram: '1GB',
				entryProcess: '30',
				process: '120',
				io: '20MBPS',
				iops: '8192',
				os: 'Linux',
				distro: 'CloudLinux 8.8+',
				architecture: 'x86_64',
				php: '8.3+',
				pear: true,
				nodejs: '20.3+',
				npm: true,
				python: '3.11+',
				pip: true,
				ruby: '3.11+',
				gem: true,
				perl: '5.26+',
				cpan: true,
				mysql: '8.3+',
				mariadb: '10.3+',
				phpmyadmin: true,
				terminal: true,
				ssh: true,
				git: true,
				metrics: true,
				security: true,
				virusScanner: true,
				softaculous: true,
				wordpress: true,
				backup: 'Daily',
			},
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/10gb',
		},
		{
			title: '15GB',
			price: {
				bdt: 9500,
				usd: 95,
			},
			period: 0,
			description: 'Ideal for medium traffic business website',
			features: {
				storage: '15GB',
				bandwidth: '300GB',
				domain: '5',
				subdomain: 'Unlimited',
				email: 'Unlimited',
				ftp: 'Unlimited',
				database: 'Unlimited',
				ssl: true,
				uptime: '99.9%',
				panel: 'cPanel',
				ram: '1GB',
				entryProcess: '30',
				process: '120',
				io: '20MBPS',
				iops: '8192',
				os: 'Linux',
				distro: 'CloudLinux 8.8+',
				architecture: 'x86_64',
				php: '8.3+',
				pear: true,
				nodejs: '20.3+',
				npm: true,
				python: '3.11+',
				pip: true,
				ruby: '3.11+',
				gem: true,
				perl: '5.26+',
				cpan: true,
				mysql: '8.3+',
				mariadb: '10.3+',
				phpmyadmin: true,
				terminal: true,
				ssh: true,
				git: true,
				metrics: true,
				security: true,
				virusScanner: true,
				softaculous: true,
				wordpress: true,
				backup: 'Daily',
			},
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/15gb',
		},
		{
			title: '20GB',
			price: {
				bdt: 12000,
				usd: 120,
			},
			period: 0,
			description: 'Ideal for low traffic business website',
			features: {
				storage: '20GB',
				bandwidth: '400GB',
				domain: 'Unlimited',
				subdomain: 'Unlimited',
				email: 'Unlimited',
				ftp: 'Unlimited',
				database: 'Unlimited',
				ssl: true,
				uptime: '99.9%',
				panel: 'cPanel',
				ram: '1GB',
				entryProcess: '30',
				process: '120',
				io: '20MBPS',
				iops: '8192',
				os: 'Linux',
				distro: 'CloudLinux 8.8+',
				architecture: 'x86_64',
				php: '8.3+',
				pear: true,
				nodejs: '20.3+',
				npm: true,
				python: '3.11+',
				pip: true,
				ruby: '3.11+',
				gem: true,
				perl: '5.26+',
				cpan: true,
				mysql: '8.3+',
				mariadb: '10.3+',
				phpmyadmin: true,
				terminal: true,
				ssh: true,
				git: true,
				metrics: true,
				security: true,
				virusScanner: true,
				softaculous: true,
				wordpress: true,
				backup: 'Daily',
			},
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/20gb',
		},
		{
			title: '25GB',
			price: {
				bdt: 14500,
				usd: 145,
			},
			period: 0,
			description: 'Ideal for medium traffic business website',
			features: {
				storage: '25GB',
				bandwidth: '500GB',
				domain: 'Unlimited',
				subdomain: 'Unlimited',
				email: 'Unlimited',
				ftp: 'Unlimited',
				database: 'Unlimited',
				ssl: true,
				uptime: '99.9%',
				panel: 'cPanel',
				ram: '1GB',
				entryProcess: '30',
				process: '120',
				io: '20MBPS',
				iops: '8192',
				os: 'Linux',
				distro: 'CloudLinux 8.8+',
				architecture: 'x86_64',
				php: '8.3+',
				pear: true,
				nodejs: '20.3+',
				npm: true,
				python: '3.11+',
				pip: true,
				ruby: '3.11+',
				gem: true,
				perl: '5.26+',
				cpan: true,
				mysql: '8.3+',
				mariadb: '10.3+',
				phpmyadmin: true,
				terminal: true,
				ssh: true,
				git: true,
				metrics: true,
				security: true,
				virusScanner: true,
				softaculous: true,
				wordpress: true,
				backup: 'Daily',
			},
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/25gb',
		},
		{
			title: 'Unlimited-A',
			price: {
				bdt: 10000,
				usd: 100,
			},
			period: 0,
			description: 'Ideal for low traffic business website',
			features: {
				storage: 'Unlimited',
				bandwidth: '200GB',
				domain: '1',
				subdomain: 'Unlimited',
				email: 'Unlimited',
				ftp: 'Unlimited',
				database: 'Unlimited',
				ssl: true,
				uptime: '99.9%',
				panel: 'cPanel',
				ram: '1GB',
				entryProcess: '30',
				process: '120',
				io: '20MBPS',
				iops: '8192',
				os: 'Linux',
				distro: 'CloudLinux 8.8+',
				architecture: 'x86_64',
				php: '8.3+',
				pear: true,
				nodejs: '20.3+',
				npm: true,
				python: '3.11+',
				pip: true,
				ruby: '3.11+',
				gem: true,
				perl: '5.26+',
				cpan: true,
				mysql: '8.3+',
				mariadb: '10.3+',
				phpmyadmin: true,
				terminal: true,
				ssh: true,
				git: true,
				metrics: true,
				security: true,
				virusScanner: true,
				softaculous: true,
				wordpress: true,
				backup: 'Daily',
			},
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/ua',
		},
		{
			title: 'Unlimited-B',
			price: {
				bdt: 20000,
				usd: 200,
			},
			period: 0,
			description: 'Ideal for medium traffic business website',
			features: {
				storage: 'Unlimited',
				bandwidth: 'Unlimited',
				domain: '2',
				subdomain: 'Unlimited',
				email: 'Unlimited',
				ftp: 'Unlimited',
				database: 'Unlimited',
				ssl: true,
				uptime: '99.9%',
				panel: 'cPanel',
				ram: '1GB',
				entryProcess: '30',
				process: '120',
				io: '20MBPS',
				iops: '8192',
				os: 'Linux',
				distro: 'CloudLinux 8.8+',
				architecture: 'x86_64',
				php: '8.3+',
				pear: true,
				nodejs: '20.3+',
				npm: true,
				python: '3.11+',
				pip: true,
				ruby: '3.11+',
				gem: true,
				perl: '5.26+',
				cpan: true,
				mysql: '8.3+',
				mariadb: '10.3+',
				phpmyadmin: true,
				terminal: true,
				ssh: true,
				git: true,
				metrics: true,
				security: true,
				virusScanner: true,
				softaculous: true,
				wordpress: true,
				backup: 'Daily',
			},
			button: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/shared-hosting/ub',
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
				<div className="px-16 lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Pick a Plan
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Choose the best shared hosting plan for your website.&nbsp;
						We have a variety of shared hosting plans to meet your website needs.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="px-16 lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Compare Plans
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Compare the best shared hosting plan for your website.&nbsp;
						We have a variety of shared hosting plans to meet your website needs.
					</p>
					<ComparisonTable feature={ featureData } data={ comparisonData }/>
				</div>
				<div className="px-16 lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is Shared Hosting?
					</h2>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						Shared hosting is a type of web hosting where a single physical server hosts multiple websites.
						Many users utilize the resources on a single server, which keeps the costs low. Users each get a
						section of a server in which they can host their website files.
						Shared servers can host hundreds of users.
						Each customer using the shared hosting platform’s server has access to features like databases,
						monthly traffic, disk space, email accounts, FTP accounts, and other add-ons offered by the
						host. System resources are shared on-demand by customers on the server, and each gets a
						percentage of everything from RAM and CPU, and other elements such as the single MySQL server,
						Apache server, and mail server.
					</p>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						Shared hosting is the most economical option for hosting, as many people share the overall cost
						of server maintenance.
						It is perfect for personal websites, small and medium businesses that do not require all the
						resources of a server.
						Shared hosting is also a popular option if you run a simple blog or forum.
						If you are starting a new website, shared hosting is the most cost-effective way of doing so.
					</p>
				</div>
				<div className="px-16 lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of Shared Hosting
					</h2>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						<ol className="list-decimal list-inside">
							<li>Low cost</li>
							<li>Easy to use</li>
							<li>Customization</li>
							<li>Scalability</li>
							<li>Reliability</li>
							<li>Security</li>
							<li>Support</li>
						</ol>
					</p>
				</div>
				<div className="px-16 lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Why S Technologies Shared Hosting?
					</h2>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						<ol className="list-decimal list-inside">
							<li>High Performance</li>
							<li>Reliability</li>
							<li>Security</li>
							<li>Support</li>
							<li>99.9% Uptime</li>
							<li>Free SSL Certificate 🔥</li>
							<li>Free Daily Backup</li>
							<li>Latest PHP, MySQL, NodeJS, Python, Ruby, and Perl</li>
							<li>Terminal Access 💥</li>
							<li>SSH Access</li>
							<li>Git</li>
							<li>Softaculous</li>
							<li>WordPress Manager</li>
						</ol>
					</p>
				</div>
				<div className="px-16 lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 Shared Hosting Provider in Bangladesh
					</h2>
					<p className="mt-4 text-gray-800 dark:text-gray-200">
						<ol className="list-decimal list-inside">
							<li>S Technologies</li>
							<li>STechBD.Net</li>
							<li>SHostBD.Com</li>
							<li>BDWebs</li>
							<li>ExonHost</li>
							<li>Code For Host</li>
							<li>Host Might</li>
							<li>Web Host BD</li>
							<li>Host Clave</li>
							<li>Web Host BD</li>
						</ol>
					</p>
				</div>
			</div>
		</>
	)
}
