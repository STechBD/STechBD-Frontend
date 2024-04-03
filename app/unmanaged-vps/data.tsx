import { Comparison, Feature, Pricing } from '@/app/_data/type'


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
		title: '25GB',
		featured: false,
		price: {
			bdt: 1500,
			usd: 15,
		},
		period: 1,
		description: 'Ideal for medium traffic website',
		features: [
			<><strong>25GB NVMe SSD</strong> Storage</>,
			<><strong>1000GB (1TB)</strong> Bandwidth</>,
			<><strong>2GB</strong> Dedicated RAM</>,
			<><strong>2</strong> CPU/Processor</>,
			<><strong>1</strong> Dedicated IP</>,
			<><strong>100Mbps</strong> Port</>,
			<><strong>USA, BD (BDIX), or SG</strong> Server</>,
		],
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/unmanaged-vps/25gb',
		},
	},
	{
		title: '40GB',
		featured: true,
		price: {
			bdt: 2500,
			usd: 25,
		},
		period: 1,
		description: 'Ideal for high traffic website',
		features: [
			<><strong>40GB NVMe SSD</strong> Storage</>,
			<><strong>2000GB (2TB)</strong> Bandwidth</>,
			<><strong>4GB</strong> Dedicated RAM</>,
			<><strong>2</strong> CPU/Processor</>,
			<><strong>1</strong> Dedicated IP</>,
			<><strong>100Mbps</strong> Port</>,
			<><strong>USA, BD (BDIX), or SG</strong> Server</>,
		],
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/unmanaged-vps/40gb',
		},
	},
	{
		title: '60GB',
		featured: false,
		price: {
			bdt: 4000,
			usd: 40,
		},
		period: 1,
		description: 'Ideal for high traffic website',
		features: [
			<><strong>60GB NVMe SSD</strong> Storage</>,
			<><strong>3000GB (3TB)</strong> Bandwidth</>,
			<><strong>6GB</strong> Dedicated RAM</>,
			<><strong>4</strong> CPU/Processor</>,
			<><strong>2</strong> Dedicated IP</>,
			<><strong>100Mbps</strong> Port</>,
			<><strong>USA, BD (BDIX), or SG</strong> Server</>,
		],
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/unmanaged-vps/60gb',
		},
	},
	{
		title: '100GB',
		featured: false,
		price: {
			bdt: 5500,
			usd: 55,
		},
		period: 1,
		description: 'Ideal for high traffic website',
		features: [
			<><strong>100GB NVMe SSD</strong> Storage</>,
			<><strong>4000GB (4TB)</strong> Bandwidth</>,
			<><strong>8GB</strong> Dedicated RAM</>,
			<><strong>4</strong> CPU/Processor</>,
			<><strong>2</strong> Dedicated IP</>,
			<><strong>100Mbps</strong> Port</>,
			<><strong>USA, BD (BDIX), or SG</strong> Server</>,
		],
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/managed-vps/100gb',
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
			panel: 'Control Panel',
			whm: 'Hosting Control Panel',
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
			distro: 'Distribution',
			architecture: 'Architecture',
		},
	},
]
export const comparisonData: Comparison[] = [
	{
		title: '25GB',
		price: {
			bdt: 1500,
			usd: 15,
		},
		period: 1,
		description: 'Ideal for medium traffic website',
		features: {
			storage: '25GB',
			bandwidth: '1000GB (1TB)',
			ip: '1',
			domain: 'Unlimited',
			subdomain: 'Unlimited',
			parked: 'Unlimited',
			email: 'Unlimited',
			ftp: 'Unlimited',
			database: 'Unlimited',
			ssl: true,
			uptime: '99.9%',
			panel: false,
			whm: false,
			ram: '2GB',
			cpu: '2',
			os: 'Linux',
			distro: 'CloudLinux 8.8+',
			architecture: 'x86_64',
		},
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/unmanaged-vps/25gb',
		},
	},
	{
		title: '40GB',
		price: {
			bdt: 2500,
			usd: 25,
		},
		period: 1,
		description: 'Ideal for high traffic website',
		features: {
			storage: '40GB',
			bandwidth: '2000GB (2TB)',
			ip: '1',
			domain: 'Unlimited',
			subdomain: 'Unlimited',
			parked: 'Unlimited',
			email: 'Unlimited',
			ftp: 'Unlimited',
			database: 'Unlimited',
			ssl: true,
			uptime: '99.9%',
			panel: false,
			whm: false,
			ram: '4GB',
			cpu: '2',
			os: 'Linux',
			distro: 'CloudLinux 8.8+',
			architecture: 'x86_64',
		},
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/unmanaged-vps/40gb',
		},
	},
	{
		title: '60GB',
		price: {
			bdt: 4000,
			usd: 40,
		},
		period: 1,
		description: 'Ideal for high traffic website',
		features: {
			storage: '60GB',
			bandwidth: '3000GB (3TB)',
			ip: '2',
			domain: 'Unlimited',
			subdomain: 'Unlimited',
			parked: 'Unlimited',
			email: 'Unlimited',
			ftp: 'Unlimited',
			database: 'Unlimited',
			ssl: true,
			uptime: '99.9%',
			panel: false,
			whm: false,
			ram: '6GB',
			cpu: '4',
			os: 'Linux',
			distro: 'CloudLinux 8.8+',
			architecture: 'x86_64',
		},
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/unmanaged-vps/60gb',
		},
	},
	{
		title: '100GB',
		price: {
			bdt: 5500,
			usd: 55,
		},
		period: 1,
		description: 'Ideal for high traffic website',
		features: {
			storage: '100GB',
			bandwidth: '4000GB (4TB)',
			ip: '2',
			domain: 'Unlimited',
			subdomain: 'Unlimited',
			parked: 'Unlimited',
			email: 'Unlimited',
			ftp: 'Unlimited',
			database: 'Unlimited',
			ssl: true,
			uptime: '99.9%',
			panel: false,
			whm: false,
			ram: '8GB',
			cpu: '4',
			os: 'Linux',
			distro: 'CloudLinux 8.8+',
			architecture: 'x86_64',
		},
		button: {
			text: 'Order Now',
			link: 'https://cpanel.stechbd.net/store/unmanaged-vps/100gb',
		},
	},
]
