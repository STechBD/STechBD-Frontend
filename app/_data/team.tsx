import Link from 'next/link'
import { Team } from '@/app/_data/type'


/*
const team = [
	{
		name: 'Md. Ashraful Alam Shemul',
		slug: 'AAShemul',
		position: 'Founder and Chief Executive Officer',
		department: 'Management',
		photo: 'https://github.com/AAShemul.png',
		description: <>
			<strong>Md. Ashraful Alam Shemul</strong> is the founder and CEO of S Technologies. He is a technology
			enthusiast and entrepreneur with a passion for innovation and technology. He founded S Technologies in 2013.
		</>,
	},
	{
		name: 'Nusrat Jahan Sifat',
		slug: '',
		position: 'Chief Technology Officer',
		photo: 'https://github.com/STechBD.png',
		description: <>
			<strong>Nusrat Jahan</strong> is the chief technology officer at S Technologies. She is a technology
			enthusiast and entrepreneur with a passion for innovation and technology. She joined S Technologies in 2014.
		</>,
	},
	{
		name: 'Niyaz Ahmed',
		slug: '',
		position: 'Software Developer',
		department: 'Engineering',
		photo: 'https://github.com/STechBD.png',
		description: <>
			<strong>Niyaz Ahmed</strong> is a software developer at S Technologies. He is a technology enthusiast and
			entrepreneur with a passion for innovation and technology. He joined S Technologies in 2017.
		</>,
	},
	{
		name: 'Md. Musa',
		slug: '',
		position: 'Designer',
		department: 'Design',
		photo: 'https://github.com/STechBD.png',
		description: <>
			<strong>Md. Musa</strong> is the finance and marketing manager at S Technologies. He is a technology
			enthusiast and entrepreneur with a passion for innovation and technology. He joined S Technologies in 2015.
		</>,
	},
]
*/


/**
 * Team data of S Technologies.
 *
 * @type {Array<Object>}
 * @since 3.0.0
 */
export const team: Team[] = [
	{
		id: 101013101,
		slug: 'AAShemul',
		name: {
			en: 'Md. Ashraful Alam Shemul',
			bn: 'মু. আশরাফুল আলম শিমুল',
		},
		role: 'CEO of S Technologies',
		since: 'August 14, 2013',
		tagline: 'Author | Teacher | Entrepreneur | Software Developer',
		image: 'https://github.com/AAShemul.png',
		cover: '/image/AAShemul-Cover.webp',
		gender: 'male',
		birthday: 'August 14',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Md. Ashraful Alam Shemul</strong></span> is a Bangladeshi
					Author, Teacher, Entrepreneur, and Software Developer. Shemul is a <span
					className="text-primary"><strong>Muslim</strong></span>. He is studying for his bachelor&apos;s in
					Fisheries at <span className="text-primary"><strong>Bangladesh Maritime University</strong></span>.
				</p>
				<p className="my-2">
					He is the founder of <span className="text-primary"><Link
					href="/"><strong>S Technologies</strong></Link></span>, <span className="text-primary"><a
					href="https://www.ulkaa.com" target="_blank"><strong>Ulkaa</strong></a></span>, and <span
					className="text-primary"><a href="https://shikkhaweb.com"
					                            target="_blank"><strong>Shikkha Web</strong></a></span>. He is the
					author of <span className="text-primary"><strong>Aspect Physics</strong></span>, <span
					className="text-primary"><strong>Aspect ICT</strong></span>, and <span
					className="text-primary"><strong>MaritimeKnowledge</strong></span> books.
				</p>
				<p className="my-2">
					Besides these, he is an amateur story writer. He loves thriller, suspense, mystery, horror, comedy,
					and science fiction genres. His favorite color is <span
					className="text-blue-600"><strong>Blue</strong></span>. His favorite topics of interest are Physics,
					Mathematics, Astronomy, Economics, Politics, and Theology.
				</p>
			</>,
			established: 'Founded S Technologies in 2013.',
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			home: 'Brahmanbaria, Chattogram, Bangladesh',
			email: 'ceo@stechbd.net',
			phone: '+880 193 544 6721',
		},
		website: [
			{
				name: 'S Technologies',
				link: '/',
			},
			{
				name: 'Ulkaa',
				link: 'https://www.ulkaa.com',
			},
			{
				name: 'Shikkha Web',
				link: 'https://shikkhaweb.com',
			},
		],
		social: [
			{
				name: 'Facebook',
				link: 'https://www.facebook.com/AAShemul',
			},
			{
				name: 'Twitter',
				link: 'https://twitter.com/AAShemul',
			},
			{
				name: 'LinkedIn',
				link: 'https://www.linkedin.com/in/AAShemul',
			},
			{
				name: 'GitHub',
				link: 'https://github.com/AAShemul',
			},
		],
		work: [
			{
				company: 'S Technologies',
				role: 'CEO',
				start: 'August 14, 2013',
				end: 'Present',
				description: 'Founded the company in August 2013.',
			},
			{
				company: 'S Hosting',
				role: 'CEO',
				start: 'June 8, 2015',
				end: 'June 7, 2016',
				description: 'Founded the company in June 2015.',
			},
			{
				company: 'Ulkaa',
				role: 'CEO',
				start: 'August 14, 2015',
				end: 'Present',
				description: 'Founded the company in August 2015.',
			},
			{
				company: 'Shikkha Web',
				role: 'CEO',
				start: 'August 14, 2017',
				end: 'Present',
				description: 'Founded the company in August 2015.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'Present',
			},
		],
		gallery: [
			{
				link: '/image/AAShemul-1.webp',
				alt: 'Image 1',
			},
			{
				link: '/image/AAShemul-2.webp',
				alt: 'Image 2',
			},
			{
				link: '/image/AAShemul-3.webp',
				alt: 'Image 3',
			},
			{
				link: '/image/AAShemul-4.webp',
				alt: 'Image 4',
			},
			{
				link: '/image/AAShemul-5.webp',
				alt: 'Image 5',
			},
			{
				link: '/image/AAShemul-6.webp',
				alt: 'Image 6',
			},
		],
		faq: [
			{
				id: 1,
				ques: 'Who is the CEO of S Technologies?',
				ans: <>
					The CEO of <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> is <strong>Md.
					Ashraful Alam Shemul</strong>. He is a technology enthusiast and entrepreneur with a passion for
					innovation
					and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 2,
				ques: 'Who is Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul is the CEO of <span className="text-white bg-primary"><strong>S Technologies</strong></span>.
					He is a technology enthusiast and entrepreneur with a passion for innovation and technology. He
					founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in 2013.
				</>,
			},
			{
				id: 3,
				ques: 'What is the background of Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul has a background in marine fisheries. He is a technology enthusiast and
					entrepreneur
					with a passion for innovation and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in
					2013.
				</>,
			},
			{
				id: 4,
				ques: 'What is the vision of Md. Ashraful Alam Shemul?',
				ans: <>
					The vision of Md. Ashraful Alam Shemul is to establish the company as a leading technology company
					in Bangladesh. He is working to create a technology ecosystem in Bangladesh that will help the
					country to become a technology-driven nation.
				</>,
			},
			{
				id: 5,
				ques: 'What is the mission of Md. Ashraful Alam Shemul?',
				ans: <>
					The mission of Md. Ashraful Alam Shemul is to provide the best technology services to the people of
					Bangladesh.
					He is committed to providing the best quality services at the lowest possible cost.
				</>,
			},
			{
				id: 6,
				ques: 'What are the future plans of Md. Ashraful Alam Shemul?',
				ans: <>
					The future plans of Md. Ashraful Alam Shemul are to establish the company as a leading technology
					company in Bangladesh.
					He is working to create new job opportunities in the field of technology and to establish the
					company as a leading technology company in Bangladesh.
				</>,
			},
			{
				id: 7,
				ques: 'Why Md. Ashraful Alam Shemul is famous?',
				ans: <>
					Md. Ashraful Alam Shemul is famous for his work in the field of technology. He is a technology
					enthusiast and entrepreneur with a passion for innovation and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in 2013.
				</>,
			},
			{
				id: 8,
				ques: 'What are the achievements of Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul has achieved a lot in his career. He is a technology enthusiast and
					entrepreneur with a passion for innovation and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in 2013.
				</>,
			},
			{
				id: 9,
				ques: 'Where do Md. Ashraful Alam Shemul work?',
				ans: <>
					Md. Ashraful Alam Shemul works at <span
					className="text-white bg-primary"><strong>S Technologies</strong></span>. He is the CEO of the
					company and is responsible for the overall management of the company.
				</>,
			},
		]
	},
	{
		id: 101024101,
		slug: 'Nusrat',
		name: {
			en: 'Nusrat Jahan Sifat',
			bn: 'নুসরাত জাহান সিফাত',
		},
		role: 'CHRO of S Technologies',
		since: 'November 1, 2024',
		tagline: 'Chief Human Resources Officer, S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/STechBD-Cover.webp',
		gender: 'female',
		birthday: 'June 13',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Nusrat Jahan Sifat</strong></span> is a Human Resources
					Officer. Nusrat is a <span className="text-primary"><strong>Muslim</strong></span>. She is studying
					for her bachelor&apos;s in Accounting at <span className="text-primary"><strong>National University (Siddheswari Girls&apos; College, Dhaka)</strong></span>.
				</p>
				<p className="my-2">
					She is the Chief Human Resources Officer of <span className="text-primary"><Link
					href="/"><strong>S Technologies</strong></Link></span>. She is managing the department since
					November 1, 2024.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'maria@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'CHRO',
				start: 'November 1, 2024',
				end: 'Present',
				description: 'Joined the company on November 1, 2024.',
			},
		],
		education: [
			{
				institute: 'National University (Siddheswari Girls\' College, Dhaka)',
				degree: 'Bachelor of Business Administration',
				major: 'Accounting',
				start: 'January 1, 2024',
				end: 'Present',
			},
		],
	},
	{
		id: 105024601,
		slug: 'Maria',
		name: {
			en: 'Maria Sharker',
			bn: 'মারিয়া সরকার',
		},
		role: 'Contributor, Marketing of S Technologies',
		since: 'November 1, 2024',
		tagline: 'Marketing Contributor, S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/STechBD-Cover.webp',
		gender: 'female',
		birthday: 'March 6',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Maria Sharker</strong></span> strives to spread love and
					kindness to everyone she encounters. Personally, she aspires to become a genuine person, working
					hard and doing good in order to contribute to building a better and more beautiful nation. Above
					all, she prays to Almighty Allah to keep herself and all the people of her country healthy and safe.
				</p>
				<p className="my-2">
					Maria is currently pursuing a Bachelor of Science (BSc) in Fisheries at Bangladesh Maritime
					University. She is passionate about her field of study and is dedicated to gaining in-depth
					knowledge and skills that will contribute to the development of sustainable fisheries and
					aquaculture practices. Alongside her academic pursuits, Maria has developed a strong skill set in
					Search Engine Optimization (SEO), which she uses to help businesses improve their online visibility
					and reach. With a blend of technical and academic skills, Maria is working towards making a positive
					impact in both her community and her professional field.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'maria@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'Contributor, Marketing',
				start: 'November 1, 2024',
				end: 'Present',
				description: 'Joined the company on November 1, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'Present',
			},
		],
	},
	{
		id: 105024602,
		slug: 'Munir',
		name: {
			en: 'Ahmad AL Munir',
			bn: 'আহমাদ আল মুনির',
		},
		role: 'Contributor, Marketing of S Technologies',
		since: 'November 1, 2024',
		tagline: 'Marketing Contributor, S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/STechBD-Cover.webp',
		gender: 'male',
		birthday: 'July 6',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Ahmad AL Munir</strong></span> is a motivated and versatile
					professional with a strong foundation in marketing, graphic design, social media management, and
					sales. He has hands-on experience in creating engaging visuals, managing social media platforms to
					drive growth, and developing marketing strategies to enhance brand presence. With a background in
					sales, he effectively connects with customers and drives business results.
				</p>
				<p className="my-2">
					Ahmad AL Munir is eager to leverage his diverse skill set in a dynamic environment and contribute to
					the success of a forward-thinking team.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'munir@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'Contributor, Marketing',
				start: 'November 1, 2024',
				end: 'Present',
				description: 'Joined the company on November 1, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Oceanography',
				start: 'January 10, 2020',
				end: 'Present',
			},
		],
	},
	{
		id: 105024603,
		slug: 'Ashik',
		name: {
			en: 'Ashikur Rahman',
			bn: 'আশিকুর রহমান',
		},
		role: 'Contributor, Marketing of S Technologies',
		since: 'November 1, 2024',
		tagline: 'Marketing Contributor, S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/STechBD-Cover.webp',
		gender: 'male',
		birthday: 'April 9',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Ashikur Rahman</strong></span> is a marketing contributor at
					S Technologies.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'ashik@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'Contributor, Marketing',
				start: 'November 1, 2024',
				end: 'Present',
				description: 'Joined the company on November 1, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'Present',
			},
		],
	},
	{
		id: 105024604,
		slug: 'Shamim',
		name: {
			en: 'Md Shamim Ahmed',
			bn: 'মোঃ শামীম আহমেদ',
		},
		role: 'Contributor, Marketing of S Technologies',
		since: 'November 1, 2024',
		tagline: 'Marketing Contributor, S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/STechBD-Cover.webp',
		gender: 'male',
		birthday: '',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Shamim Ahmed</strong></span> is a student currently in his
					third year of B.Sc. (Physics) at Govt. Titumir College. In addition to his studies, he works as a
					remote support technician for a foreign company. His hobbies include cycling, traveling, and reading
					books. He has a strong interest in computer programming and web development.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'shamim@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'Contributor, Marketing',
				start: 'November 1, 2024',
				end: 'Present',
				description: 'Joined the company on November 1, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'Present',
			},
		],
	},
	{
		id: 105024605,
		slug: 'Shazib',
		name: {
			en: 'Md Shazib Hossain',
			bn: 'মো সজিব হোসেন',
		},
		role: 'Contributor, Marketing of S Technologies',
		since: 'November 1, 2024',
		tagline: 'Marketing Contributor, S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/STechBD-Cover.webp',
		gender: 'male',
		birthday: '',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Md Shazib Hossain</strong></span> is a student at Dhaka
					University, where he is pursuing a degree in psychology. He is currently in his fourth year of study
					and resides in Dhaka, specifically in the Khilgaon area.
				</p>
				<p className="my-2">
					Shazib is a nature-loving individual who enjoys traveling, playing sports, and reading books during
					his spare time. He is also politically conscious and has aspirations to engage in politics in the
					future.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'shazib@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'Contributor, Marketing',
				start: 'November 1, 2024',
				end: 'Present',
				description: 'Joined the company on November 1, 2024.',
			},
		],
		education: [
			{
				institute: 'University of Dhaka',
				degree: 'Bachelor of Science',
				major: 'Psychology',
				start: 'January 1, 2019',
				end: 'Present',
			},
		],
	},
	{
		id: 105024606,
		slug: 'Angelica',
		name: {
			en: 'Angelica Mirza Aishwarja',
			bn: 'এনজেলিকা মির্জা ঐশ্বর্য',
		},
		role: 'Contributor, Marketing of S Technologies',
		since: 'November 1, 2024',
		tagline: 'Marketing Contributor, S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/STechBD-Cover.webp',
		gender: 'female',
		birthday: 'January 21',
		buttons: [
			{
				text: 'Contact',
				link: '/contact',
				color: 'primary',
			},
			{
				text: 'Follow',
				link: '/follow',
				color: 'primary',
			},
		],
		description: {
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Angelica Mirza Aishwarja</strong></span> is an undergraduate
					student currently studying in the Department of Marine Fisheries and Aquaculture at Bangladesh
					Maritime University in Dhaka, Bangladesh. She is a hardworking and creative individual, consistently
					dedicating time and effort to improve academic performance with the goal of becoming an expert in
					her field. Angelica actively engages in e-learning platforms as well as seminars, symposiums, and
					conferences to enhance her knowledge.
				</p>
				<p className="my-2">
					She recently completed an internship with the Environmental Oceanography and Climate Division of the
					Bangladesh Oceanographic Research Institute (BORI), focusing on Blue Carbon Studies. Her academic
					interests span genetics, biotechnology, microbiology, and marine environmental studies, all of which
					deeply fascinate her. She is committed to carving out a place for herself in the field and
					showcasing her skills and potential.
				</p>
				<p className="my-2">
					Outside of studies, she invests free time in extracurricular activities such as art, music, and
					dance.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'angelica@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'Contributor, Marketing',
				start: 'November 1, 2024',
				end: 'Present',
				description: 'Joined the company on November 1, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'Present',
			},
		],
	},
]
