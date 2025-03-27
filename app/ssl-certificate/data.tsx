import config from '@/stech.config'
import type { Comparison, Feature, Pricing } from '@/data/type'


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
		title: 'Positive SSL',
		featured: false,
		price: {
			bdt: 700,
			usd: 7,
		},
		period: 1,
		description: 'Ideal for starter website',
		features: [
			<><strong>Positive</strong> SSL</>,
			<><strong>1</strong> Domain</>,
			<><strong>No</strong> Subdomain</>,
			<><strong>Domain</strong> Validation</>,
		],
		button: {
			text: 'Order Now',
			link: `${ config.info.cp }/store/ssl/positive`,
		},
	},
	{
		title: 'Multi-domain SSL',
		featured: false,
		price: {
			bdt: 1700,
			usd: 17,
		},
		period: 1,
		description: 'Ideal for mid-level website',
		features: [
			<><strong>Multi-domain</strong> SSL</>,
			<><strong>1</strong> Domain</>,
			<><strong>3</strong> Subdomain</>,
			<><strong>Domain</strong> Validation</>,
		],
		button: {
			text: 'Order Now',
			link: `${ config.info.cp }/store/ssl/multi-domain`,
		},
	},
	{
		title: 'Wildcard SSL',
		featured: false,
		price: {
			bdt: 5000,
			usd: 50,
		},
		period: 1,
		description: 'Ideal for large website',
		features: [
			<><strong>Wildcard</strong> SSL</>,
			<><strong>1</strong> Domain</>,
			<><strong>Unlimited</strong> Subdomain</>,
			<><strong>Domain</strong> Validation</>,
		],
		button: {
			text: 'Order Now',
			link: `${ config.info.cp }/store/ssl/wildcard`,
		},
	},
	{
		title: 'OV Wildcard SSL',
		featured: false,
		price: {
			bdt: 10000,
			usd: 100,
		},
		period: 1,
		description: 'Ideal for enterprise-level website',
		features: [
			<><strong>OV Wildcard</strong> SSL</>,
			<><strong>Unlimited</strong> Domain</>,
			<><strong>Unlimited</strong> Subdomain</>,
			<><strong>Organization</strong> Validation</>,
		],
		button: {
			text: 'Order Now',
			link: `${ config.info.cp }/store/ssl/ov-wildcard`,
		},
	},
]
export const featureData: Feature[] = [
	{
		title: 'General',
		features: {
			domain: 'Domain',
			subdomain: 'Subdomain',
			validation: 'Validation',
		}
	},
]
export const comparisonData: Comparison[] = [
	{
		title: 'Positive SSL',
		price: {
			bdt: 700,
			usd: 7,
		},
		period: 1,
		description: 'Ideal for starter website',
		features: {
			domain: '1',
			subdomain: 'No',
			validation: 'Domain',
		},
		button: {
			text: 'Order Now',
			link: `${ config.info.cp }/store/ssl/positive`,
		},
	},
	{
		title: 'Multi-domain SSL',
		price: {
			bdt: 1700,
			usd: 17,
		},
		period: 1,
		description: 'Ideal for mid-level website',
		features: {
			domain: '1',
			subdomain: '3',
			validation: 'Domain',
		},
		button: {
			text: 'Order Now',
			link: `${ config.info.cp }/store/ssl/multi-domain`,
		},
	},
	{
		title: 'Wildcard SSL',
		price: {
			bdt: 5000,
			usd: 50,
		},
		period: 1,
		description: 'Ideal for large website',
		features: {
			domain: '1',
			subdomain: 'Unlimited',
			validation: 'Domain',
		},
		button: {
			text: 'Order Now',
			link: `${ config.info.cp }/store/ssl/wildcard`,
		},
	},
	{
		title: 'OV Wildcard SSL',
		price: {
			bdt: 10000,
			usd: 100,
		},
		period: 1,
		description: 'Ideal for enterprise-level website',
		features: {
			domain: 'Unlimited',
			subdomain: 'Unlimited',
			validation: 'Organization',
		},
		button: {
			text: 'Order Now',
			link: `${ config.info.cp }/store/ssl/ov-wildcard`,
		},
	},
]
