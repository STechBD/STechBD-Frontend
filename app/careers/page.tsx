import { JSX } from 'react'
import { Metadata } from 'next'
import Hero from './hero'
import { Main, Paragraph, Div, Section, UList } from '@/app/_component/template'


/**
 * The metadata for the Careers page.
 *
 * @constant title { string } The title of the page.
 * @constant description { string } The description of the page.
 * @constant metadata { Metadata } The exported metadata of the page.
 *
 * @since 3.0.0
 */
const title: string = 'Careers'
const description: string = 'Join S Technologies and start your awesome journey with us!'
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
 * The Careers page component.
 *
 * @returns { JSX.Element } The Page component.
 * @since 3.0.0
 */
export default function Page(): JSX.Element {
	return (
		<>
			<Hero/>
			<Main full={ false }
			      title="Careers with S Technologies"
			      description="Join S Technologies and start your awesome journey with us!"
			>
				<Section>
					<Paragraph>
						<span className="text-white bg-primary"><strong>S Technologies</strong> (<strong>
						STechBD.Net</strong>)</span> is a research-based technology company in Bangladesh. It was
						founded in 2013. It provides services like domain registration, web hosting, web servers,
						software development, AI model development, software as a service (SaaS), UI/UX design, SEO,
						business solutions, etc. <span className="text-white bg-primary"><strong>S
						Technologies</strong></span> has been working on the research of new technologies, especially
						artificial intelligence, and developing new products.
					</Paragraph>
				</Section>
				<Section title="Opened Job by S Technologies">
					<Paragraph>
						Find your desired job position from the opened jobs:
					</Paragraph>
					<Div style="p-5 rounded-xl text-center text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800">
						Sorry, currently there is no opened job. Please try checking back later.
					</Div>
				</Section>
				<Section title="Why to join S Technologies?">
					<Paragraph>
						<span className="text-white bg-primary"><strong>S Technologies</strong></span> always care about
						the employees. We believe in work-life balance.
					</Paragraph>
				</Section>
				<Section title="Life at S Technologies">
					<Paragraph>
						<span className="text-white bg-primary"><strong>S Technologies</strong></span> provides these
						benefits for the employees:
					</Paragraph>
					<UList list={ [
						'Working from home.',
						'40 hours per week work limit.',
						'Part-time jobs for the students.',
						'2 festival bonuses.',
						'Competitive salary.',
						'Trainings and learning opportunities.'
					] }/>
				</Section>
			</Main>
		</>
	)
}
