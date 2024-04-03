import type { Comparison, Feature, Pricing } from '@/app/_data/type'


/**
 * Data for the Pricing and Comparison components.
 *
 * @constant { Pricing[] } pricingData The pricing data.
 * @constant { Feature[] } featureData The feature data.
 * @constant { Comparison[] } comparisonData The comparison data.
 *
 * @since 3.0.0
 */
export const pricingData: Pricing[] = [
	{
		title: '480GB-32GB',
		featured: false,
		price: {
			bdt: 12000,
			usd: 120,
		},
		period: 1,
		description: 'Ideal for corporate website',
		features: [
			<><strong>480GB NVMe SSD</strong> Storage</>,
			<><strong>1Gbit</strong> Unmetered Bandwidth</>,
			<><strong>32GB DDR3</strong> Dedicated RAM</>,
			<><strong>Dual Xeon E5-2660 (16c /32t)</strong> Processor</>,
			<><strong>2.2GHz / 3GHz Turbo</strong> Processor Speed</>,
			<><strong>5 IPv4</strong> Dedicated IP</>,
			<><strong>USA, BD (BDIX), or SG</strong> Server</>,
		],
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/dedicated-server/480gb-32gb',
		},
	},
	{
		title: '960GB-64GB',
		featured: false,
		price: {
			bdt: 13500,
			usd: 135,
		},
		period: 1,
		description: 'Ideal for corporate website',
		features: [
			<><strong>2x480GB (960GB) NVMe SSD</strong> Storage</>,
			<><strong>1Gbit</strong> Unmetered Bandwidth</>,
			<><strong>64GB DDR3</strong> Dedicated RAM</>,
			<><strong>Dual Xeon E5-2660 (16c /32t)</strong> Processor</>,
			<><strong>2.2GHz / 3GHz Turbo</strong> Processor Speed</>,
			<><strong>5 IPv4</strong> Dedicated IP</>,
			<><strong>USA, BD (BDIX), or SG</strong> Server</>,
		],
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/dedicated-server/960gb-64gb',
		},
	},
	{
		title: '960GB-96GB',
		featured: false,
		price: {
			bdt: 16000,
			usd: 160,
		},
		period: 1,
		description: 'Ideal for corporate website',
		features: [
			<><strong>2x480GB (960GB) NVMe SSD</strong> Storage</>,
			<><strong>1Gbit</strong> Unmetered Bandwidth</>,
			<><strong>96GB DDR3</strong> Dedicated RAM</>,
			<><strong>Dual Xeon E5-2670 96GB (16c /32)</strong> Processor</>,
			<><strong>2.60GHz / 3.3GHz Turbo</strong> Processor Speed</>,
			<><strong>5 IPv4</strong> Dedicated IP</>,
			<><strong>USA, BD (BDIX), or SG</strong> Server</>,
		],
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/dedicated-server/960gb-96gb',
		},
	},
]
export const featureData: Feature[] = [
	{
		title: 'General',
		features: {
			storage: 'Storage',
			bandwidth: 'Bandwidth',
			ip: 'Dedicated IP',
			domain: 'Addon Domain',
			subdomain: 'Subdomain',
			parked: 'Parked Domain',
			email: 'Email Account',
			ftp: 'FTP Account',
			database: 'Database',
			ssl: 'SSL Certificate',
			uptime: 'Uptime',
		}
	},
	{
		title: 'Performance',
		features: {
			ram: 'RAM',
			cpu: 'CPU/Processor',
		}
	},
	{
		title: 'System',
		features: {
			os: 'Operating System',
			architecture: 'Architecture',
		},
	},
]
export const comparisonData: Comparison[] = [
	{
		title: '480GB-32GB',
		price: {
			bdt: 12000,
			usd: 120,
		},
		period: 1,
		description: 'Ideal for corporate website',
		features: {
			storage: '480GB NVMe SSD',
			bandwidth: '1Gbit Unmetered',
			ip: '1',
			domain: 'Unlimited',
			subdomain: 'Unlimited',
			parked: 'Unlimited',
			email: 'Unlimited',
			ftp: 'Unlimited',
			database: 'Unlimited',
			uptime: '99.9%',
			ram: '32GB',
			cpu: 'Dual Xeon E5-2660 (16c /32t)',
			os: 'Linux/Windows',
			architecture: 'x86_64',
		},
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/dedicated-server/480gb-32gb',
		},
	},
	{
		title: '960GB-64GB',
		price: {
			bdt: 13500,
			usd: 135,
		},
		period: 1,
		description: 'Ideal for corporate website',
		features: {
			storage: '2x480GB (960GB) NVMe SSD',
			bandwidth: '1Gbit Unmetered',
			ip: '1',
			domain: 'Unlimited',
			subdomain: 'Unlimited',
			parked: 'Unlimited',
			email: 'Unlimited',
			ftp: 'Unlimited',
			database: 'Unlimited',
			uptime: '99.9%',
			ram: '64GB',
			cpu: 'Dual Xeon E5-2660 (16c /32t)',
			os: 'Linux/Windows',
			architecture: 'x86_64',
		},
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/dedicated-server/960gb-64gb',
		},
	},
	{
		title: '960GB-96GB',
		price: {
			bdt: 16000,
			usd: 160,
		},
		period: 1,
		description: 'Ideal for corporate website',
		features: {
			storage: '2x480GB (960GB) NVMe SSD',
			bandwidth: '1Gbit Unmetered',
			ip: '1',
			domain: 'Unlimited',
			subdomain: 'Unlimited',
			parked: 'Unlimited',
			email: 'Unlimited',
			ftp: 'Unlimited',
			database: 'Unlimited',
			uptime: '99.9%',
			ram: '96GB',
			cpu: 'Dual Xeon E5-2670 96GB (16c /32)',
			os: 'Linux/Windows',
			architecture: 'x86_64',
		},
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/dedicated-server/960gb-96gb',
		},
	},
]
