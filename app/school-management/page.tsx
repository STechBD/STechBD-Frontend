import { JSX } from 'react'
import { Metadata } from 'next'
import { DefaultEffect } from '@/component/background'
import { comparisonData, featureData, pricingData } from './data'
import Hero from './hero'
import PricingTable from '@/component/pricingTable'
import ComparisonTable from '@/component/comparisonTable'


/**
 * Metadata for the School Management System page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Smart Campus - School Management System'
const description: string = 'Smart Campus - School Management System is a complete solution for managing school, college, university, and any other educational institution. It is a modern and fully responsive system that will help you to manage your institution easily.'
export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
	twitter: {
		title,
		description,
	},
}


/**
 * The School Management System page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<div className="relative isolate px-6 py-24 lg:px-8">
				<DefaultEffect/>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Smart Campus - School Management System
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						<strong>Smart Campus</strong>, a school management system, is a complete solution for managing
						school, college, university, and any other educational institution. It is a modern and fully
						responsive system that will help you to manage your institution easily.
					</p>
					<PricingTable data={ pricingData }/>
				</div>
				<div className="lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Compare Plans
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Compare the best school management system plans.
						We have a variety of school management system plans to choose from.
					</p>
					<ComparisonTable feature={ featureData } data={ comparisonData }/>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						What is School Management System?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						School Management System is a complete solution for managing school, college, university, and
						any other educational institution.
						It is a modern and fully responsive system that will help you to manage your institution easily.
						School Management System is designed to help you manage your institution&apos;s day-to-day
						operations
						efficiently.
						It is a powerful and user-friendly system that will help you to manage your institution&apos;s
						academic, administrative, and financial activities.
					</p>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						School Management System is a cloud-based system that can be accessed from anywhere at any time.
						It is a secure and reliable system that will help you to manage your institution&apos;s data
						effectively.
						School Management System is designed to help you streamline your institution&apos;s operations
						and
						improve productivity.
					</p>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Features of School Management System
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						School management system has many benefits. Here are some of the key features of school
						management system:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>Student Management</li>
						<li>Teacher Management</li>
						<li>Parent Management</li>
						<li>Attendance Management</li>
						<li>Exam Management</li>
						<li>Library Management</li>
						<li>Transport Management</li>
						<li>Hall Management</li>
						<li>Fee Management</li>
						<li>Low cost</li>
						<li>Easy to use</li>
						<li>Customization</li>
						<li>Scalability</li>
						<li>Reliability</li>
						<li>Security</li>
						<li>Support</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Why S Technologies School Management System?
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						We offer the best school management system in Bangladesh. Our school management system is
						designed to help you manage your institution&apos;s day-to-day operations efficiently. We have
						been providing school management system since 2015 with customer satisfaction. Our school
						management system is ideal for school, college, university, and any other educational
						institution. Here are some of the key features of our school management system:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>High Performance</li>
						<li>Reliability</li>
						<li>Security</li>
						<li>Support</li>
						<li>Free SSL Certificate 🔥</li>
						<li>Free Daily Backup</li>
						<li>Latest PHP, MySQL, NodeJS, Python, Ruby, and Perl</li>
						<li>Terminal Access 💥</li>
						<li>SSH Access</li>
						<li>Git</li>
						<li>Softaculous</li>
						<li>WordPress Manager</li>
						<li>Free Website Migration</li>
						<li>cPanel Control Panel</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 School Management System Provider in Bangladesh
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 school management system provider in Bangladesh:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>S Technologies</li>
						<li>STechBD.Net</li>
						<li>SHostBD.Com</li>
						<li>S Hosting Bangladesh</li>
						<li>Shikkha Web</li>
						<li>Ulkaa Campus</li>
						<li>Edu Hub BD</li>
						<li>Schoolify</li>
						<li>Web Edu BD</li>
						<li>EduHost</li>
					</ol>
				</div>
				<div className="max-w-7xl mx-auto lg:px-20 py-10">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
						Top 10 School Management System Provider in the World
					</h2>
					<p className="mt-4 text-xl text-gray-900 dark:text-gray-100">
						Here are the top 10 school management system providers in the world:
					</p>
					<ol className="mt-4 text-xl text-gray-900 list-decimal list-inside dark:text-gray-100">
						<li>S Technologies</li>
						<li>STechBD.Net</li>
						<li>SHostBD.Com</li>
						<li>S Hosting Bangladesh</li>
						<li>Shikkha Web</li>
						<li>Ulkaa Campus</li>
						<li>The Educate</li>
						<li>EduSchool</li>
						<li>Go School</li>
						<li>College Pro</li>
					</ol>
				</div>
			</div>
		</>
	)
}
