import Link from 'next/link'
import type { Hero, Section } from '@/app/_data/type'


/**
 * The list of products.
 *
 * @constant productList { any[] } The list of products.
 * @since 3.0.0
 */
export const productList: any[] = [
	{
		id: 'Britto',
		title: 'Britto AI',
		info: 'Britto AI is a deep learning AI model for conversational chatbot',
		description: <>
			<strong>Britto AI</strong> is a deep learning AI model for conversational chatbot. It can also solve
			mathematical problems, answer general knowledge questions, and more.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/Britto',
		github: 'https://github.com/STechBD/Britto',
		rating: 5,
		platform: [
			'Web',
			'Windows',
			'Linux',
		],
		language: [
			'Python',
		],
		tool: [
			'TensorFlow',
			'Keras',
		],
		tag: [
			'AI',
			'Deep Learning',
			'Chatbot',
		],
	},
	{
		id: 'Fishtock',
		title: 'Fishtock',
		info: 'Fishtock is a fish stock analysis software to predict the future stock of fish.',
		description: <>
			<strong>Fishtock</strong> is a fish stock analysis software to predict the future stock of fish. It can be used to determine the estimated fish stock in a particular area or country. Currently, this model is trained for <strong>Hilsha</strong> fish in Bangladesh.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/Fishtock',
		github: 'https://github.com/STechBD/Fishtock',
		rating: 5,
		platform: [
			'Web',
			'Windows',
			'Linux',
		],
		language: [
			'Python',
		],
		tool: [
			'SKLearn',
			'Pandas',
			'Numpy',
			'Matplotlib',
		],
		tag: [
			'AI',
			'Machine Learning',
			'Fish Stock Analysis',
		],
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
		logo: '/image/Install-Express-Logo-Light.svg',
		docs: 'https://docs.stechbd.net/Install-Express',
		github: 'https://github.com/STechBD/Install-Express',
		rating: 5,
		platform: [
			'Web',
		],
		language: [
			'JavaScript',
			'TypeScript',
		],
		tool: [
			'Express.js',
		],
		tag: [
			'CLI',
			'Node.js',
			'Express.js',
		],
	},
	{
		id: 'CookieCons',
		title: 'CookieCons',
		info: 'CookieCons is a simple and lightweight cookie consent plugin for WordPress.',
		description: <>
			<strong>CookieCons</strong> is a simple and lightweight cookie consent plugin for WordPress. It is a free
			and open-source plugin that helps you comply with the EU GDPR cookie law and CCPA regulations. It is
			compatible with any WordPress theme and any WordPress version. It is also compatible with any browser,
			device, and operating system.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/CookieCons',
		github: 'https://github.com/STechBD/CookieCons',
		rating: 5,
		platform: [
			'Web',
		],
		language: [
			'PHP',
		],
		tool: [
			'WordPress',
			'Composer',
		],
		tag: [
			'WordPress',
			'GDPR',
			'CCPA',
		],
	},
	{
		id: 'ProjectPress',
		title: 'ProjectPress',
		info: 'ProjectPress is a simple WordPress plugin for managing projects',
		description: <>
			<strong>ProjectPress</strong> is a simple WordPress plugin for managing projects. It is a simple, fast, and
			lightweight tool that you can use to create and manage projects in WordPress.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/ProjectPress',
		github: 'https://github.com/STechBD/ProjectPress',
		rating: 5,
		platform: [
			'Web',
		],
		language: [
			'PHP',
		],
		tool: [
			'WordPress',
			'Composer',
		],
		tag: [
			'WordPress',
			'Project Management',
		],
	},
	{
		id: 'S-PHP-Engine',
		title: 'S PHP Engine (SPE)',
		info: 'S PHP Engine (SPE) is a lightweight MVC-based PHP framework for building powerful full stack web applications',
		description: <>
			<strong>S PHP Engine (SPE)</strong> is a lightweight MVC-based PHP framework for building powerful full
			stack web applications.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/S-PHP-Engine',
		github: 'https://github.com/STechBD/S-PHP-Engine',
		rating: 5,
		platform: [
			'Web',
		],
		language: [
			'PHP',
		],
		tool: [
			'S Database Explorer',
			'Composer',
		],
		tag: [
			'PHP',
			'Framework',
			'MVC',
		],
	},
	{
		id: 'S-Template-Engine',
		title: 'S Template Engine (STE)',
		info: 'S Template Engine (STE) is a lightweight template engine for PHP',
		description: <>
			<strong>S Template Engine (STE)</strong> is a lightweight template engine for PHP.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/S-Template-Engine',
		github: 'https://github.com/STechBD/S-Template-Engine',
		rating: 5,
		platform: [
			'Web',
		],
		language: [
			'PHP',
		],
		tool: [
			'S Database Explorer',
			'Composer',
		],
		tag: [
			'PHP',
			'Template Engine',
		],
	},
	{
		id: 'S-Database-Explorer',
		title: 'S Database Explorer (SDE)',
		info: 'S Database Explorer (SDE) is a simple and easy to use Database Explorer for MySQL with PDO',
		description: <>
			<strong>S Database Explorer (SDE)</strong> is a simple and easy to use Database Explorer for MySQL with PDO.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/S-Database-Explorer',
		github: 'https://github.com/STechBD/S-Database-Explorer',
		rating: 5,
		platform: [
			'Web',
		],
		language: [
			'PHP',
			'MySQL',
		],
		tool: [
			'PDO',
			'Composer',
		],
		tag: [
			'PHP',
			'MySQL',
			'Database Management',
		],
	},
	{
		id: 'S-Number-Manager',
		title: 'S Number Manager (SNM)',
		info: 'S Number Manager (SNM) is a simple library for converting numbers in different languages',
		description: <>
			<strong>S Number Manager (SNM)</strong> is a simple library for converting numbers in different languages.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/S-Number-Manager',
		github: 'https://github.com/STechBD/S-Number-Manager',
		rating: 5,
		platform: [
			'Web',
		],
		language: [
			'PHP',
		],
		tool: [
			'Composer',
		],
		tag: [
			'PHP',
			'Library',
			'Number Converter',
		],
	},
	{
		id: 'PyWeb',
		title: 'PyWeb',
		info: 'PyWeb is a Python-based lightweight web browser for Windows',
		description: <>
			<strong>PyWeb</strong> is a Python-based lightweight web browser for Windows.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/PyWeb',
		github: 'https://github.com/STechBD/PyWeb',
		rating: 5,
		platform: [
			'Windows',
		],
		language: [
			'Python',
		],
		tool: [
			'PyQt6',
		],
		tag: [
			'Python',
			'Web Browser',
		],
	},
	{
		id: 'ViewMD',
		title: 'ViewMD',
		info: 'ViewMD is a Markdown viewer for Windows',
		description: <>
			<strong>ViewMD</strong> is a Markdown viewer for Windows.
		</>,
		logo: false,
		docs: 'https://docs.stechbd.net/ViewMD',
		github: 'https://github.com/STechBD/ViewMD',
		rating: 5,
		platform: [
			'Windows',
		],
		language: [
			'Python',
		],
		tool: [
			'PyQt6',
		],
		tag: [
			'Python',
			'Markdown Viewer',
		],
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
 * @param id { string } The product ID.
 * @returns { any } The product data.
 * @since 3.0.0
 */
export function getProduct(id: string): any {
	return productList.find(product => product.id === id)
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
 * The product data for Britto AI.
 *
 * @constant Britto { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
export const Britto: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'Britto',
		title: 'Britto AI',
		description: 'Britto AI is a deep learning AI model for conversational chatbot. It can also solve mathematical problems, answer general knowledge questions, and more.',
		logo: false,
		docs: 'https://docs.stechbd.net/Britto',
		github: 'https://github.com/STechBD/Britto',
	},
	hero: {
		title: 'Britto AI',
		description: <>
			<strong>Britto AI</strong> is a deep learning AI model for conversational chatbot. It can also solve
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
					description: 'To install Britto AI from PyPI, run the following command:',
					code: {
						text: 'pip install britto',
						language: 'bash',
					},
				},
				{
					title: 'Install from GitHub',
					description: 'To install Britto AI from GitHub, run the following command:',
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
					title: 'What is Britto AI?',
					description: 'Britto AI is a deep learning AI model for conversational chatbot. It can also solve mathematical problems, answer general knowledge questions, and more.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/Britto',
					},
				},
				{
					title: 'How to install Britto AI?',
					description: 'To install Britto AI, run the following command:',
					code: {
						text: 'pip install britto',
						language: 'bash',
					},
				},
				{
					title: 'How to train Britto AI?',
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
 * The product data for Fishtock.
 *
 * @constant Fishtock { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
export const Fishtock: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'Fishtock',
		title: 'Fishtock',
		description: 'Fishtock is a fish stock analysis software to predict the future stock of fish. It can be used to determine the estimated fish stock in a particular area or country. Currently, this model is trained for Hilsha fish in Bangladesh.',
		logo: false,
		docs: 'https://docs.stechbd.net/Fishtock',
		github: 'https://github.com/STechBD/Fishtock',
	},
	hero: {
		title: 'Fishtock',
		description: <>
			<strong>Fishtock</strong> is a fish stock analysis software to predict the future stock of fish. It can be
			used to determine the estimated fish stock in a particular area or country. Currently, this model is trained
			for <strong>Hilsha</strong> fish in Bangladesh.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/Fishtock/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/Fishtock',
			},
			{
				text: 'Learn More',
				link: '/product/Fishtock/about',
			}
		],
	},
	section: [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'Machine Learning',
					description: 'Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns, and make decisions with minimal human intervention.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Machine_learning',
					},
				},
				{
					title: 'Fish Stock Analysis',
					description: 'Fish stock analysis is the process of analyzing the stock of fish in a particular area or country. It is used to determine the estimated fish stock in a particular area or country.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Fish_stock',
					},
				},
				{
					title: 'Hilsha Fish',
					description: 'Hilsha fish is a species of fish in the herring family. It is a very popular and tasty fish in Bangladesh.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Hilsa_shad',
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
					description: 'To install Fishtock from PyPI, run the following command:',
					code: {
						text: 'pip install fishtock',
						language: 'bash',
					},
				},
				{
					title: 'Install from GitHub',
					description: 'To install Fishtock from GitHub, run the following command:',
					code: {
						text: 'pip install git+https://github.com/STechBD/Fishtock.git',
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
						link: 'https://github.com/STechBD/Fishtock/issues',
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
			content: productListGenerator('Fishtock'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is Fishtock?',
					description: 'Fishtock is a fish stock analysis software to predict the future stock of fish. It can be used to determine the estimated fish stock in a particular area or country. Currently, this model is trained for Hilsha fish in Bangladesh.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/Fishtock',
					},
				},
				{
					title: 'How to install Fishtock?',
					description: 'To install Fishtock, run the following command:',
					code: {
						text: 'pip install fishtock',
						language: 'bash',
					},
				},
				{
					title: 'How to train Fishtock?',
					description: 'To train Fishtock, run the following command:',
					code: {
						text: 'fishtock train',
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
 * @constant Install_Express { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
export const Install_Express: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'Install_Express',
		title: 'Install-Express',
		description: 'Install Express is a CLI tool that helps you to create a Express.js backend project in seconds. It is a simple, fast, and lightweight tool that you can use to create a Express.js backend project with TypeScript, Pug, and Sass. It also includes a basic folder structure and some basic files to get started.',
		logo: '/image/Install-Express-Logo-Light.svg',
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
 * @constant CookieCons { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
export const CookieCons: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'CookieCons',
		title: 'CookieCons',
		description: 'CookieCons is a simple and lightweight cookie consent plugin for WordPress.',
		logo: false,
		docs: 'https://docs.stechbd.net/CookieCons',
		github: 'https://github.com/STechBD/CookieCons',
	},
	hero: {
		title: 'A lightweight cookie consent banner for websites.',
		description: <>
			<strong>CookieCons</strong> is a simple and lightweight cookie consent plugin for WordPress. It is a free
			and open-source plugin that helps you comply with the EU GDPR cookie law and CCPA regulations. It is
			compatible with any WordPress theme and any WordPress version. It is also compatible with any browser,
			device, and operating system.
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


/**
 * The product data for ProjectPress.
 *
 * @constant ProjectPress { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
const ProjectPress: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'ProjectPress',
		title: 'ProjectPress',
		description: 'ProjectPress is a simple WordPress plugin for managing projects.',
		logo: false,
		docs: 'https://docs.stechbd.net/ProjectPress',
		github: 'https://github.com/ProjectPress',
	},
	hero: {
		title: 'ProjectPress',
		description: <>
			<strong>ProjectPress</strong> is a simple WordPress plugin for managing projects. It is a simple, fast, and
			lightweight tool that you can use to create and manage projects in WordPress.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/ProjectPress/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/ProjectPress',
			},
			{
				text: 'Learn More',
				link: '/product/ProjectPress/about',
			}
		],
	},
	section: [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'WordPress',
					description: 'WordPress is a free and open-source content management system.',
					url: {
						text: 'Learn More',
						link: 'https://wordpress.org/',
					},
				},
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
			],
		},
		{
			id: 'installation',
			title: 'Installation',
			content: [
				{
					title: 'Install from Your Website',
					description: 'To install ProjectPress from your website, visit the WordPress plugin directory of your website and search for "ProjectPress". Install and activate the plugin.',
				},
				{
					title: 'Install from WordPress Plugin Repository',
					description: 'To install ProjectPress from the WordPress plugin repository, visit the WordPress plugin directory and search for "ProjectPress". Download the zip file and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'Visit Plugin',
						link: 'https://wordpress.org/plugins/ProjectPress/',
					},
				},
				{
					title: 'Install from Zip File',
					description: 'To install ProjectPress from a zip file, download the zip file from GirHub and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/ProjectPress',
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
						link: 'https://github.com/STechBD/ProjectPress/issues',
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
			content: productListGenerator('ProjectPress'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is ProjectPress?',
					description: 'ProjectPress is a simple WordPress plugin for managing projects. It is a simple, fast, and lightweight tool that you can use to create and manage projects in WordPress.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/ProjectPress',
					},
				},
				{
					title: 'How to install ProjectPress?',
					description: 'To install ProjectPress, run the following command:',
					code: {
						text: 'npx project-press@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx project-press@latest',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The product data for S PHP Engine (SPE).
 *
 * @constant S_PHP_Engine { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
const S_PHP_Engine: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'S_PHP_Engine',
		title: 'S PHP Engine (SPE)',
		description: 'S PHP Engine (SPE) is a lightweight MVC-based PHP framework for building powerful full stack web applications.',
		logo: false,
		docs: 'https://docs.stechbd.net/S-PHP-Engine',
		github: 'https://github.com/STechBD/S-PHP-Engine',
	},
	hero: {
		title: 'S PHP Engine (SPE)',
		description: <>
			<strong>S PHP Engine (SPE)</strong> is a lightweight MVC-based PHP framework for building powerful full
			stack web
			applications.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/S-PHP-Engine/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/S-PHP-Engine',
			},
			{
				text: 'Learn More',
				link: '/product/S-PHP-Engine/about',
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
					title: 'MVC',
					description: 'Model-View-Controller is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
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
					description: 'To install S PHP Engine (SPE) from your website, visit the GitHub repository of your website and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
				},
				{
					title: 'Install from GitHub',
					description: 'To install S PHP Engine (SPE) from GitHub, visit the GitHub repository and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/ProjectPress',
					},
				},
				{
					title: 'Install from Zip File',
					description: 'To install S PHP Engine (SPE) from a zip file, download the zip file from GirHub and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/ProjectPress/releases',
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
						link: 'https://github.com/STechBD/ProjectPress/issues',
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
			content: productListGenerator('S-PHP-Engine'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is S PHP Engine (SPE)?',
					description: 'S PHP Engine (SPE) is a lightweight MVC-based PHP framework for building powerful full stack web applications.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/S-PHP-Engine',
					},
				},
				{
					title: 'How to install S PHP Engine (SPE)?',
					description: 'To install S PHP Engine (SPE), run the following command:',
					code: {
						text: 'npx s-php-engine@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx s-php-engine@latest',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The product data for S Template Engine (STE).
 *
 * @constant S_Template_Engine { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
const S_Template_Engine: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'S_Template_Engine',
		title: 'S Template Engine (STE)',
		description: 'S Template Engine (STE) is a lightweight template engine for PHP.',
		logo: false,
		docs: 'https://docs.stechbd.net/S-Template-Engine',
		github: 'https://github.com/STechBD/S-Template-Engine',
	},
	hero: {
		title: 'S Template Engine (STE)',
		description: <>
			<strong>S Template Engine (STE)</strong> is a lightweight template engine for PHP.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/S-Template-Engine/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/S-Template-Engine',
			},
			{
				text: 'Learn More',
				link: '/product/S-Template-Engine/about',
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
					title: 'Template Engine',
					description: 'A template engine is a software designed to combine one or more templates with a data model to produce one or more result documents.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Template_processor',
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
					description: 'To install S Template Engine (STE) from your website, visit the GitHub repository of your website and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
				},
				{
					title: 'Install from GitHub',
					description: 'To install S Template Engine (STE) from GitHub, visit the GitHub repository and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/S-Template-Engine',
					},
				},
				{
					title: 'Install from Zip File',
					description: 'To install S Template Engine (STE) from a zip file, download the zip file from GirHub and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/S-Template-Engine/releases',
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
						link: 'https://github.com/STechBD/S-Template-Engine/issues',
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
			content: productListGenerator('S-Template-Engine'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is S Template Engine (STE)?',
					description: 'S Template Engine (STE) is a lightweight template engine for PHP.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/S-Template-Engine',
					},
				},
				{
					title: 'How to install S Template Engine (STE)?',
					description: 'To install S Template Engine (STE), run the following command:',
					code: {
						text: 'npx s-template-engine@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx s-template-engine@latest',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The product data for S Database Explorer (SDE).
 *
 * @constant S_Database_Explorer { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
const S_Database_Explorer: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'S_Database_Explorer',
		title: 'S Database Explorer (SDE)',
		description: 'S Database Explorer (SDE) is a lightweight database explorer for MySQL.',
		logo: false,
		docs: 'https://docs.stechbd.net/S-Database-Explorer',
		github: 'https://github.com/STechBD/S-Database-Explorer',
	},
	hero: {
		title: 'S Database Explorer (SDE)',
		description: <>
			<strong>S Database Explorer (SDE)</strong> is a lightweight database explorer for MySQL.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/S-Database-Explorer/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/S-Database-Explorer',
			},
			{
				text: 'Learn More',
				link: '/product/S-Database-Explorer/about',
			}
		],
	},
	section: [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'MySQL',
					description: 'MySQL is an open-source relational database management system.',
					url: {
						text: 'Learn More',
						link: 'https://dev.mysql.com/doc/',
					},
				},
				{
					title: 'Database Explorer',
					description: 'A database explorer is a software designed to explore databases and execute SQL queries.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Database_explorer',
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
					description: 'To install S Database Explorer (SDE) from your website, visit the GitHub repository of your website and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
				},
				{
					title: 'Install from GitHub',
					description: 'To install S Database Explorer (SDE) from GitHub, visit the GitHub repository and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/S-Database-Explorer',
					},
				},
				{
					title: 'Install from Zip File',
					description: 'To install S Database Explorer (SDE) from a zip file, download the zip file from GirHub and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/S-Database-Explorer/releases',
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
						link: 'https://github.com/STechBD/S-Database-Explorer/issues',
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
			content: productListGenerator('S-Database-Explorer'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is S Database Explorer (SDE)?',
					description: 'S Database Explorer (SDE) is a lightweight database explorer for MySQL.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/S-Database-Explorer',
					},
				},
				{
					title: 'How to install S Database Explorer (SDE)?',
					description: 'To install S Database Explorer (SDE), run the following command:',
					code: {
						text: 'npx s-database-explorer@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx s-database-explorer@latest',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The product data for S Number Manager (SNM).
 *
 * @constant S_Number_Manager { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
const S_Number_Manager: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'S_Number_Manager',
		title: 'S Number Manager (SNM)',
		description: 'S Number Manager (SNM) is a lightweight number manager for PHP.',
		logo: false,
		docs: 'https://docs.stechbd.net/S-Number-Manager',
		github: 'https://github.com/STechBD/S-Number-Manager',
	},
	hero: {
		title: 'S Number Manager (SNM)',
		description: <>
			<strong>S Number Manager (SNM)</strong> is a lightweight number manager for PHP.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/S-Number-Manager/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/S-Number-Manager',
			},
			{
				text: 'Learn More',
				link: '/product/S-Number-Manager/about',
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
					title: 'Number Manager',
					description: 'A number manager is a software designed to manage numbers and perform mathematical operations.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Number_management',
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
					description: 'To install S Number Manager (SNM) from your website, visit the GitHub repository of your website and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
				},
				{
					title: 'Install from GitHub',
					description: 'To install S Number Manager (SNM) from GitHub, visit the GitHub repository and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/S-Number-Manager',
					},
				},
				{
					title: 'Install from Zip File',
					description: 'To install S Number Manager (SNM) from a zip file, download the zip file from GirHub and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/S-Number-Manager/releases',
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
						link: 'https://github.com/STechBD/S-Number-Manager/issues',
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
			content: productListGenerator('S-Number-Manager'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is S Number Manager (SNM)?',
					description: 'S Number Manager (SNM) is a lightweight number manager for PHP.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/S-Number-Manager',
					},
				},
				{
					title: 'How to install S Number Manager (SNM)?',
					description: 'To install S Number Manager (SNM), run the following command:',
					code: {
						text: 'npx s-number-manager@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx s-number-manager@latest',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The product data for S String Manager.
 *
 * @constant S_String_Manager { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
const PyWeb: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'PyWeb',
		title: 'PyWeb',
		description: 'PyWeb is a Python-based lightweight web browser for Windows',
		logo: false,
		docs: 'https://docs.stechbd.net/PyWeb',
		github: 'https://github.com/STechBD/PyWeb',
	},
	hero: {
		title: 'PyWeb',
		description: <>
			<strong>PyWeb</strong> is a Python-based lightweight web browser for Windows.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/PyWeb/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/PyWeb',
			},
			{
				text: 'Learn More',
				link: '/product/PyWeb/about',
			}
		],
	},
	section: [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'Python',
					description: 'Python is an interpreted high-level general-purpose programming language.',
					url: {
						text: 'Learn More',
						link: 'https://www.python.org/doc/',
					},
				},
				{
					title: 'Web Browser',
					description: 'A web browser is a software application for accessing information on the World Wide Web.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/Web_browser',
					},
				},
				{
					title: 'Windows',
					description: 'Windows is a series of operating systems developed by Microsoft.',
					url: {
						text: 'Learn More',
						link: 'https://www.microsoft.com/en-us/windows',
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
					description: 'To install PyWeb from your website, visit the GitHub repository of your website and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
				},
				{
					title: 'Install from GitHub',
					description: 'To install PyWeb from GitHub, visit the GitHub repository and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/PyWeb',
					},
				},
				{
					title: 'Install from Zip File',
					description: 'To install PyWeb from a zip file, download the zip file from GirHub and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/PyWeb/releases',
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
						link: 'https://github.com/STechBD/PyWeb/issues',
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
			content: productListGenerator('PyWeb'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is PyWeb?',
					description: 'PyWeb is a Python-based lightweight web browser for Windows.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/PyWeb',
					},
				},
				{
					title: 'How to install PyWeb?',
					description: 'To install PyWeb, run the following command:',
					code: {
						text: 'npx pyweb@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx pyweb@latest',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The product data for ViewMD.
 *
 * @constant ViewMD { info: any, hero: Hero, section: Section[] } The product data
 * @since 3.0.0
 */
const ViewMD: { info: any, hero: Hero, section: Section[] } = {
	info: {
		id: 'ViewMD',
		title: 'ViewMD',
		description: 'ViewMD is a Markdown viewer for Windows',
		logo: false,
		docs: 'https://docs.stechbd.net/ViewMD',
		github: 'https://github.com/STechBD/ViewMD',
	},
	hero: {
		title: 'ViewMD',
		description: <>
			<strong>ViewMD</strong> is a Markdown viewer for Windows.
		</>,
		notice: <>
			Current Version:
			<Link className="font-semibold text-primary"
			      href="/product/ViewMD/releases"
			>
				<span className="absolute inset-0" aria-hidden="true"></span> v1.0.0 🎉
			</Link>
		</>,
		button: [
			{
				text: 'Get Started',
				link: 'https://docs.stechbd.net/ViewMD',
			},
			{
				text: 'Learn More',
				link: '/product/ViewMD/about',
			}
		],
	},
	section: [
		{
			id: 'features',
			title: 'Features',
			content: [
				{
					title: 'Markdown',
					description: 'Markdown is a lightweight markup language with plain-text-formatting syntax.',
					url: {
						text: 'Learn More',
						link: 'https://www.markdownguide.org/getting-started/',
					},
				},
				{
					title: 'Viewer',
					description: 'A viewer is a software application for viewing files.',
					url: {
						text: 'Learn More',
						link: 'https://en.wikipedia.org/wiki/File_viewer',
					},
				},
				{
					title: 'Windows',
					description: 'Windows is a series of operating systems developed by Microsoft.',
					url: {
						text: 'Learn More',
						link: 'https://www.microsoft.com/en-us/windows',
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
					description: 'To install ViewMD from your website, visit the GitHub repository of your website and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
				},
				{
					title: 'Install from GitHub',
					description: 'To install ViewMD from GitHub, visit the GitHub repository and download the zip file. Extract the zip file and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/ViewMD',
					},
				},
				{
					title: 'Install from Zip File',
					description: 'To install ViewMD from a zip file, download the zip file from GirHub and upload it to your website. Install and activate the plugin.',
					url: {
						text: 'GitHub',
						link: 'https://github.com/STechBD/ViewMD/releases',
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
						link: 'https://github.com/STechBD/ViewMD/issues',
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
			content: productListGenerator('ViewMD'),
		},
		{
			id: 'faq',
			title: 'Frequently Asked Question (FAQ)',
			content: [
				{
					title: 'What is ViewMD?',
					description: 'ViewMD is a Markdown viewer for Windows.',
					url: {
						text: 'Learn More',
						link: 'https://docs.stechbd.net/ViewMD',
					},
				},
				{
					title: 'How to install ViewMD?',
					description: 'To install ViewMD, run the following command:',
					code: {
						text: 'npx viewmd@latest',
						language: 'bash',
					},
				},
				{
					title: 'How to create a new project?',
					description: 'To create a new project, run the following command:',
					code: {
						text: 'npx viewmd@latest',
						language: 'bash',
					},
				},
			],
		},
	],
}


/**
 * The list of product data.
 *
 * @constant products { any } The list of products.
 * @since 3.0.0
 */
export const products: any = {
	Britto,
	Fishtock,
	Install_Express,
	CookieCons,
	ProjectPress,
	S_PHP_Engine,
	S_Template_Engine,
	S_Database_Explorer,
	S_Number_Manager,
	PyWeb,
	ViewMD,
}
