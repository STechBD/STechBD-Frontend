import Link from 'next/link'
import type { Hero, Section } from '@/app/_data/type'


/**
 * The list of products by S Technologies.
 *
 * @constant productList { any[] } The list of products.
 * @since 3.0.0
 */
export const productList: any[] = [
	{
		id: 'Britto',
		title: 'Britto',
		info: 'Britto is a deep learning AI model for conversational chatbot',
		description: <>
			<strong>Britto</strong> is a deep learning AI model for conversational chatbot. It can also solve
			mathematical problems, answer general knowledge questions, and more.
		</>,
	},
	{
		id: 'Install-Express',
		title: 'Install-Express',
		info: 'Install Express is a CLI tool that helps you to create a Express.js backend project in seconds',
		description: <>
			<strong>Install-Express</strong> is a CLI tool that helps you to create a Express.js backend project in
			seconds. It is a simple, fast, and lightweight tool that you can use to create a Express.js backend project
			with TypeScript, Pug, and Sass. It also includes a basic folder structure and some basic files to get
			started
		</>,
	},
	{
		id: 'CookieCons',
		title: 'CookieCons',
		info: 'CookieCons is a simple and lightweight WordPress plugin cookie consent banner for websites',
		description: <>
			<strong>CookieCons</strong> is a simple and lightweight WordPress plugin cookie consent banner for websites.
			It is very easy to use and customize. You can easily change the notice text simply.
		</>,
	},
	{
		id: 'ProjectPress',
		title: 'ProjectPress',
		info: 'ProjectPress is a simple WordPress plugin for managing projects',
		description: <>
			<strong>ProjectPress</strong> is a simple WordPress plugin for managing projects. It is a simple, fast, and
			lightweight tool that you can use to create and manage projects in WordPress.
		</>,
	},
	{
		id: 'S-PHP-Engine',
		title: 'S PHP Engine',
		info: 'S PHP Engine is a lightweight MVC-based PHP framework for building powerful full stack web applications',
		description: <>
			<strong>S PHP Engine</strong> is a lightweight MVC-based PHP framework for building powerful full stack web
			applications.
		</>,
	},
	{
		id: 'S-Template-Engine',
		title: 'S Template Engine',
		info: 'S Template Engine is a lightweight template engine for PHP',
		description: <>
			<strong>S Template Engine</strong> is a lightweight template engine for PHP.
		</>,
	},
	{
		id: 'S-Database-Explorer',
		title: 'S Database Explorer',
		info: 'S Database Explorer is a simple and easy to use Database Explorer for MySQL with PDO',
		description: <>
			<strong>S Database Explorer</strong> is a simple and easy to use Database Explorer for MySQL with PDO.
		</>,
	},
	{
		id: 'S-Number-Manager',
		title: 'S Number Manager',
		info: 'S Number Manager is a simple library for converting numbers in different languages',
		description: <>
			<strong>S Number Manager</strong> is a simple library for converting numbers in different languages.
		</>,
	},
	{
		id: 'PyWeb',
		title: 'PyWeb',
		info: 'PyWeb is a Python-based lightweight web browser for Windows',
		description: <>
			<strong>PyWeb</strong> is a Python-based lightweight web browser for Windows.
		</>,
	},
	{
		id: 'ViwMD',
		title: 'ViewMD',
		info: 'ViewMD is a Markdown viewer for Windows',
		description: <>
			<strong>ViewMD</strong> is a Markdown viewer for Windows.
		</>,
	},
]


/**
 * Function to check if the product exists.
 *
 * @param id { string } The product ID.
 * @returns { boolean } The product exists or not.
 * @since 3.0.0
 */
export function isProduct(id: string): boolean {
	return productList.some(product => product.id === id)
}


/**
 * Function to get the product data.
 *
 * @param skip { string } The product ID not to include in the list.
 * @returns { any } The list of products.
 * @since 3.0.0
 */
function productListGenerator(skip: string): any {
	const list: any[] = []
	productList.map(product => {
		if (product.id !== skip) {
			list.push({
				title: product.title,
				description: product.description,
				url: {
					text: 'Learn More',
					link: '/product/' + product.id,
				},
			})
		}
	})
	return list
}


/**
 * The product data for Britto.
 *
 * @constant Britto { info: any, hero: Hero, section: Section[] } The product data for Britto.
 * @since 3.0.0
 */
export const Britto: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'Britto',
		title: 'Britto',
		description: 'Britto is a deep learning AI model for conversational chatbot. It can also solve mathematical problems, answer general knowledge questions, and more.',
		logo: '/image/Britto.svg',
		docs: 'https://docs.stechbd.net/Britto',
		github: 'https://github.com/STechBD/Britto',
	},
	hero: {
		title: 'Britto',
		description: <>
			<strong>Britto</strong> is a deep learning AI model for conversational chatbot. It can also solve
			mathematical
			problems, answer general knowledge questions, and more.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/Britto/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/Britto',
			},
			{
				text: 'Learn More',
				link: '/product/Britto/about',
			}
		],
	},
	section: [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'Deep Learning',
					description: 'Deep learning is a subset of machine learning where artificial neural networks, algorithms inspired by the human brain, learn from large amounts of data.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Deep_learning',
					},
				},
				{
					title: 'Artificial Intelligence',
					description: 'Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
					},
				},
				{
					title: 'Natural Language Processing',
					description: 'Natural language processing is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Natural_language_processing',
					},
				},
			],
		},
		{
			id: 'installation',
			title: 'Installation',
			content: [
				{
					title: 'Install from PyPI',
					description: 'To install Britto from PyPI, run the following command:',
					code: {
						text: 'pip install britto',
						language: 'bash',
					},
				},
				{
					title: 'Install from GitHub',
					description: 'To install Britto from GitHub, run the following command:',
					code: {
						text: 'pip install git+https://github.com/STechBD/Britto.git',
						language: 'bash',
					},
				},
			],
		},
		{
			id: 'support',
			title: 'Support',
			content: [
				{
					title: 'GitHub',
					description: 'If you have any problems or suggestions, please open an issue on GitHub.',
					url: {
						text: 'Learn More',
						link: 'https://github.com/STechBD/Britto/issues',
					},
				},
				{
					title: 'Twitter',
					description: 'If you have any problems or suggestions, please DM me on Twitter.',
					url: {
						text: 'Learn More',
						link: '#',
					},
				},
			],
		},
		{
			id: 'contributors',
			title: 'Contributors',
			content: [
				{
					title: 'Md. Ashraful Alam Shemul',
					description: 'Software Developer',
					url: {
						text: 'Learn More',
						link: 'https://github.cm/AAShemul',
					},
				},
			],
		},
		{
			id: 'product',
			title: 'Product List',
			content: productListGenerator('Britto'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is Britto?',
					description: 'Britto is a deep learning AI model for conversational chatbot. It can also solve mathematical problems, answer general knowledge questions, and more.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/Britto',
					},
				},
				{
					title: 'How to install Britto?',
					description: 'To install Britto, run the following command:',
					code: {
						text: 'pip install britto',
						language: 'bash',
					},
				},
				{
					title: 'How to train Britto?',
					description: 'To train Britto, run the following command:',
					code: {
						text: 'britto train',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The product data for Install-Express.
 *
 * @constant InstallExpress { info: any, hero: Hero, section: Section[] } The product data for Install-Express.
 * @since 3.0.0
 */
export const InstallExpress: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'Install-Express',
		title: 'Install-Express',
		description: 'Install Express is a CLI tool that helps you to create a Express.js backend project in seconds. It is a simple, fast, and lightweight tool that you can use to create a Express.js backend project with TypeScript, Pug, and Sass. It also includes a basic folder structure and some basic files to get started.',
		logo: '/image/Install-Express.svg',
		docs: 'https://docs.stechbd.net/Install-Express',
		github: 'https://github.com/STechBD/Install-Express',
	},
	hero: {
		title: 'Start your Express.js backend project in seconds!',
		description: <>
			<strong>Install-Express</strong> is a CLI tool that helps you to create a Express.js backend project in
			seconds. It is a simple, fast, and lightweight tool that you can use to create a Express.js backend project
			with TypeScript, Pug, and Sass. It also includes a basic folder structure and some basic files to get
			started.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/Install-Express/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		code: {
			text: 'npx install-express@latest',
			language: 'bash',
		},
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/Install-Express',
			},
			{
				text: 'Learn More',
				link: '/product/Install-Express/about',
			}
		],
	},
	section: [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'TypeScript',
					description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is pure object-oriented with classes, interfaces, and statically typed like C# or Java.',
					url: {
						text: 'Learn More',
						link: 'https://www.typescriptlang.org/',
					},
				},
				{
					title: 'Pug',
					description: 'Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.',
					url: {
						text: 'Learn More',
						link: 'https://pugjs.org/api/getting-started.html',
					},
				},
				{
					title: 'Sass',
					description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
					url: {
						text: 'Learn More',
						link: 'https://sass-lang.com/guide',
					},
				},
			],
		},
		{
			id: 'installation',
			title: 'Installation',
			content: [
				{
					title: 'Create a new project',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx install-express@latest',
						language: 'bash',
					},
				},
				{
					title: 'Create a new project with a specific version',
					description: 'To create a new project with a specific version, run the following command:',
					code: {
						text: 'npx install-express@1.0.0',
						language: 'bash',
					},
				},
				{
					title: 'Create a new project with a specific name',
					description: 'To create a new project with a specific name, run the following command:',
					code: {
						text: 'npx install-express@latest my-project',
						language: 'bash',
					},
				},
			],
		},
		{
			id: 'support',
			title: 'Support',
			content: [
				{
					title: 'GitHub',
					description: 'If you have any problems or suggestions, please open an issue on GitHub.',
					url: {
						text: 'Learn More',
						link: '#',
					},
				},
				{
					title: 'Twitter',
					description: 'If you have any problems or suggestions, please DM me on Twitter.',
					url: {
						text: 'Learn More',
						link: '#',
					},
				},
			],
		},
		{
			id: 'contributors',
			title: 'Contributors',
			content: [
				{
					title: 'Md. Ashraful Alam Shemul',
					description: 'Software Developer',
					url: {
						text: 'Learn More',
						link: 'https://github.cm/AAShemul',
					},
				},
			],
		},
		{
			id: 'product',
			title: 'Product List',
			content: productListGenerator('Install-Express'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is Install-Express?',
					description: 'Install Express is a CLI tool that helps you to create a Express.js backend project in seconds. It is a simple, fast, and lightweight tool that you can use to create a Express.js backend project with TypeScript, Pug, and Sass. It also includes a basic folder structure and some basic files to get started.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/Install-Express',
					},
				},
				{
					title: 'How to install Install-Express?',
					description: 'To install Install-Express, run the following command:',
					code: {
						text: 'npx install-express@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx install-express@latest',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The product data for CookieCons.
 *
 * @constant CookieCons { info: any, hero: Hero, section: Section[] } The product data for CookieCons.
 * @since 3.0.0
 */
export const CookieCons: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'CookieCons',
		title: 'CookieCons',
		description: 'A lightweight cookie consent banner for websites.',
		logo: '/image/CookieCons.svg',
		docs: 'https://docs.stechbd.net/CookieCons',
		github: 'https://github.com/STechBD/CookieCons',
	},
	hero: {
		title: 'A lightweight cookie consent banner for websites.',
		description: <>
			<strong>CookieCons</strong> is a lightweight cookie consent banner for websites. It is a simple, fast, and
			lightweight tool that you can use to create a cookie consent banner for your website. It also includes a
			basic configuration and some basic styles to get started.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/CookieCons/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		code: {
			text: 'npx cookie-cons@latest',
			language: 'bash',
		},
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/CookieCons',
			},
			{
				text: 'Learn More',
				link: '/product/CookieCons/about',
			}
		],
	},
	section: [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'PHP',
					description: 'PHP is a popular general-purpose scripting language that is especially suited to web development.',
					url: {
						text: 'Learn More',
						link: 'https://www.php.net/docs.php',
					},
				},
				{
					title: 'MySQL',
					description: 'MySQL is an open-source relational database management system.',
					url: {
						text: 'Learn More',
						link: 'https://dev.mysql.com/doc/',
					},
				},
				{
					title: 'WordPress',
					description: 'WordPress is a free and open-source content management system.',
					url: {
						text: 'Learn More',
						link: 'https://wordpress.org/',
					},
				},
			],
		},
		{
			id: 'installation',
			title: 'Installation',
			content: [
				{
					title: 'Install from Your Website',
					description: 'To install CookieCons from your website, visit the WordPress plugin directory of your website and search for "CookieCons". Install and activate the plugin.',
				},
				{
					title: 'Install from WordPress Plugin Repository',
					description: 'To install CookieCons from the WordPress plugin repository, visit the WordPress plugin directory and search for "CookieCons". Download the zip file and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'Visit Plugin',
						link: 'https://wordpress.org/plugins/CookieCons/',
					},
				},
				{
					title: 'Install from Zip File',
					description: 'To install CookieCons from a zip file, download the zip file from GirHub and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/CookieCons/releases',
					},
				},
			],
		},
		{
			id: 'support',
			title: 'Support',
			content: [
				{
					title: 'GitHub',
					description: 'If you have any problems or suggestions, please open an issue on GitHub.',
					url: {
						text: 'GitHub Issues',
						link: 'https://github.com/STechBD/CookieCons/issues',
					},
				},
				{
					title: 'Contact',
					description: 'If you have any problems or suggestions, please contact us.',
					url: {
						text: 'Contact Us',
						link: '/contact',
					},
				},
			],
		},
		{
			id: 'contributors',
			title: 'Contributors',
			content: [
				{
					title: 'Md. Ashraful Alam Shemul',
					description: 'Software Developer',
					url: {
						text: 'Learn More',
						link: 'https://github.cm/AAShemul',
					},
				},
			],
		},
		{
			id: 'product',
			title: 'Product List',
			content: productListGenerator('CookieCons'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is CookieCons?',
					description: 'CookieCons is a lightweight cookie consent banner for websites. It is a simple, fast, and lightweight tool that you can use to create a cookie consent banner for your website. It also includes a basic configuration and some basic styles to get started.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/CookieCons',
					},
				},
				{
					title: 'How to install CookieCons?',
					description: 'Visit WordPress plugin directory of your website and search for "CookieCons". Install and activate the plugin.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/CookieCons',
					},
				},
				{
					title: 'How to change the notice text?',
					description: 'To change the notice text, visit the settings page of the plugin and change the notice text.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/CookieCons',
					},
				},
			],
		},
	],
}


export const products: any = {
	Britto,
	InstallExpress,
	CookieCons,
}
