import Link from 'next/link'
import { Team } from '@/data/type'


/**
 * Team data of S Technologies.
 *
 * @constant { Team[] } team The team data.
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
		tagline: 'Author | Researcher | Educator | Entrepreneur | Software Developer',
		image: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (St. Martin\'s Island - October 16, 2023).webp',
		cover: '/image/AAShemul-Cover.webp',
		gender: 'Male',
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
			intro: 'Md. Ashraful Alam Shemul is a Bangladeshi Muslim author, researcher, educator, entrepreneur, and software developer. He earned his Bachelor\'s degree in Fisheries from Bangladesh Maritime University. Shemul is the founder of S Technologies, Ulkaa, and Shikkha Web.',
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Md. Ashraful Alam Shemul</strong></span> is a Bangladeshi
					Muslim <strong>author</strong>, <strong>researcher</strong>, <strong>educator</strong>,
					<strong>entrepreneur</strong>, and <strong>software developer</strong>. He earned his
					Bachelor&apos;s degree in Fisheries from <span
					className="text-primary"><strong>Bangladesh Maritime University</strong></span>.
				</p>
				<p className="my-2">
					He is the founder of <span className="text-primary"><Link
					href="/"><strong>S Technologies</strong></Link></span>, <span className="text-primary"><a
					href="https://www.ulkaa.com" target="_blank"><strong>Ulkaa</strong></a></span>, and <span
					className="text-primary"><a
					href="https://shikkhaweb.com" target="_blank"><strong>Shikkha Web</strong></a></span>. He is the
					author of <span className="text-primary"><strong>Aspect Physics</strong></span>, <span
					className="text-primary"><strong>Aspect ICT</strong></span>, and <span
					className="text-primary"><strong>MaritimeKnowledge</strong></span> books.
				</p>
				<p className="my-2">
					In addition to his professional work, Shemul is an amateur story writer with a passion for
					thrillers, suspense, mystery, horror, comedy, and science fiction genres. His favorite color is
					<span className="text-blue-600"><strong>blue</strong></span>, and he enjoys studying a variety of
					subjects, including physics, mathematics, astronomy, economics, politics, and theology. He loves
					travelling, photography, music, and movies.
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
				end: 'January 30, 2025',
			},
			{
				institute: 'Kabi Nazrul Govt. College, Dhaka',
				degree: 'HSC',
				major: 'Science',
				start: '2016',
				end: '2018',
			},
			{
				institute: 'Hajee Shariat Ullah Adarsha High School, Dhaka',
				degree: 'SSC',
				major: 'Science',
				start: '2014',
				end: '2016',
			},
		],
		gallery: [
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (10 Minute School Headquarters - February 16, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (10 Minute School Headquarters - February 16, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (10 Minute School Headquarters - January 25, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (10 Minute School Headquarters - January 25, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (10 Minute School Headquarters - May 29, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (10 Minute School Headquarters - May 29, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (BNS Sheikh Mujib - May 27, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (BNS Sheikh Mujib - May 27, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (BSMR Maritime University - December 31, 2021).webp',
				alt: 'Md. Ashraful Alam Shemul (BSMR Maritime University - December 31, 2021)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (BSMR Maritime University - May 18, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (BSMR Maritime University - May 18, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (BSMR Maritime University - November 17, 2024).webp',
				alt: 'Md. Ashraful Alam Shemul (BSMR Maritime University - November 17, 2024)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (BSMR Maritime University - October 30, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (BSMR Maritime University - October 30, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (BSMR Maritime University - September 18, 2022).webp',
				alt: 'Md. Ashraful Alam Shemul (BSMR Maritime University - September 18, 2022)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Bangladesh Marine Academy, Chattogram - December, 2021).webp',
				alt: 'Md. Ashraful Alam Shemul (Bangladesh Marine Academy, Chattogram - December, 2021)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Boat - St. Martin\'s Island - October 16, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (Boat - St. Martin\'s Island - October 16, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Bridge, Jahangirnagar University - May 28, 2022).webp',
				alt: 'Md. Ashraful Alam Shemul (Bridge, Jahangirnagar University - May 28, 2022)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Chera Dwip, St. Martin\'s Island - October 15, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (Chera Dwip, St. Martin\'s Island - October 15, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Guitar - St. Martin\'s Island - October 16, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (Guitar - St. Martin\'s Island - October 16, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Hirankandi, Gopalganj - December 11, 2022).webp',
				alt: 'Md. Ashraful Alam Shemul (Hirankandi, Gopalganj - December 11, 2022)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Independent University, Bangladesh - December 4, 2022).webp',
				alt: 'Md. Ashraful Alam Shemul (Independent University, Bangladesh - December 4, 2022)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Jahangirnagar University - July 13, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (Jahangirnagar University - July 13, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Jahangirnagar University - May 28, 2022).webp',
				alt: 'Md. Ashraful Alam Shemul (Jahangirnagar University - May 28, 2022)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Karamjal, Sundarbans - December 14, 2022).webp',
				alt: 'Md. Ashraful Alam Shemul (Karamjal, Sundarbans - December 14, 2022)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Krishibid Institute Complex - November 17, 2022).webp',
				alt: 'Md. Ashraful Alam Shemul (Krishibid Institute Complex - November 17, 2022)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (MF Lab, BSMR Maritime University - June 12, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (MF Lab, BSMR Maritime University - June 12, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Mirpur 12, Dhaka - September 19, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (Mirpur 12, Dhaka - September 19, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Pool, Le M%C3%A9ridien Dhaka - March 22, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (Pool, Le Méridien Dhaka - March 22, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Rayerbagh, Dhaka - March 30, 2024).webp',
				alt: 'Md. Ashraful Alam Shemul (Rayerbagh, Dhaka - March 30, 2024)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Rooftop, Le M%C3%A9ridien Dhaka - March 22, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (Rooftop, Le Méridien Dhaka - March 22, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (St. Martin\'s Island - October 14, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (St. Martin\'s Island - October 14, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (St. Martin\'s Island - October 16, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (St. Martin\'s Island - October 16, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (TSC, University of Dhaka - September 6, 2022).webp',
				alt: 'Md. Ashraful Alam Shemul (TSC, University of Dhaka - September 6, 2022)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Trawler - Shwarupkathi - December 20, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (Trawler - Shwarupkathi - December 20, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (University of Dhaka - July 3, 2023).webp',
				alt: 'Md. Ashraful Alam Shemul (University of Dhaka - July 3, 2023)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Uttara - March 1, 2024).webp',
				alt: 'Md. Ashraful Alam Shemul (Uttara - March 1, 2024)'
			},
			{
				link: 'https://cdn.stechbd.net/file/2024/11/Md. Ashraful Alam Shemul (Uttara, Dhaka - December, 2020).webp',
				alt: 'Md. Ashraful Alam Shemul (Uttara, Dhaka - December, 2020)'
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
					Md. Ashraful Alam Shemul is the CEO of <span className="text-white bg-primary"><strong>S
					Technologies</strong></span>. He is a technology enthusiast and entrepreneur with a passion for
					innovation and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in 2013.
				</>,
			},
			{
				id: 3,
				ques: 'What is the background of Md. Ashraful Alam Shemul?',
				ans: <>
					Md. Ashraful Alam Shemul has a background in marine fisheries. He is a technology enthusiast and
					entrepreneur with a passion for innovation and technology. He founded <span
					className="text-white bg-primary"><strong>S Technologies</strong></span> in 2013.
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
		since: 'November 17, 2024',
		tagline: 'Chief Human Resources Officer, S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/Profile-Cover.webp',
		gender: 'Female',
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
			intro: 'Nusrat Jahan Sifat is a Human Resources Officer. She is studying for her bachelor\'s in Accounting at National University (Siddheswari Girls\' College, Dhaka).',
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Nusrat Jahan Sifat</strong></span> is a Human Resources
					Officer. She is studying
					for her bachelor&apos;s in Accounting at <span className="text-primary"><strong>National University (Siddheswari Girls&apos; College, Dhaka)</strong></span>.
				</p>
				<p className="my-2">
					She is the Chief Human Resources Officer of <span className="text-primary"><Link
					href="/public"><strong>S Technologies</strong></Link></span>. She is managing the department since
					November 17, 2024.
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
				start: 'November 17, 2024',
				end: 'Present',
				description: 'Joined the company on November 17, 2024.',
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
		id: 108020101,
		slug: 'Niyaz',
		name: {
			en: 'Niyaz Ahmed',
			bn: 'নিয়াজ আহমেদ',
		},
		role: 'Software Engineer at S Technologies',
		since: 'November 17, 2024',
		tagline: 'Software Engineer of S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/Profile-Cover.webp',
		gender: 'Male',
		birthday: 'July 24',
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
			intro: 'Niyaz is a full-stack software engineer with a passion for building scalable and maintainable web applications. He is proficient in PHP, JavaScript, TypeScript, MySQL, and MongoDB.',
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Niyaz Ahmed</strong></span> is a full-stack software engineer
					with a passion for building scalable and maintainable web applications. He is proficient in PHP,
					JavaScript, TypeScript, MySQL, and MongoDB. He is also experienced in working with modern
					frontend frameworks like Next.js (React.js) and Laravel.
				</p>
				<p className="my-2">
					Niyaz is a graduate of Computer Science and Engineering. He has been working in the software
					industry for over 5 years and has experience in developing web applications for various industries,
					including e-commerce, education, and healthcare.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'niyaz@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'Software Engineer',
				start: 'March 1, 2020',
				end: 'Present',
				description: 'Joined the company on March 1, 2020.',
			},
		],
	},
	{
		id: 109024101,
		slug: 'Mahir',
		name: {
			en: 'Mahir Hasan',
			bn: 'মাহির হাসান',
		},
		role: 'Designer at S Technologies',
		since: 'November 17, 2024',
		tagline: 'Graphic Designer of S Technologies',
		image: 'https://github.com/STechBD.png',
		cover: '/image/Profile-Cover.webp',
		gender: 'Male',
		birthday: 'January 27',
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
			intro: 'Mahir Hasan is a graphic designer at S Technologies. He is passionate about creating visually appealing designs that communicate effectively with the audience.',
			about: <>
				<p className="my-2">
					<span className="text-primary"><strong>Mahir Hasan</strong></span> is a graphic designer at S
					Technologies. He is passionate about creating visually appealing designs that communicate
					effectively with the audience. He has experience in creating logos, branding materials, social media
					graphics, and web and app UI/UX designs.
				</p>
			</>,
		},
		contact: {
			address: 'Dhaka, Dhaka, Bangladesh',
			email: 'mahir@stechbd.net',
		},
		work: [
			{
				company: 'S Technologies',
				role: 'Designer',
				start: 'December 1, 2023',
				end: 'Present',
				description: 'Joined the company on December 1, 2023.',
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
		role: 'Contributor, Marketing at S Technologies',
		since: 'November 17, 2024',
		tagline: 'Marketing Contributor of S Technologies',
		image: 'https://cdn.stechbd.net/file/2024/11/Maria Sharker.webp',
		cover: '/image/Profile-Cover.webp',
		gender: 'Female',
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
			intro: 'Maria Sharker is a marketing contributor at S Technologies. She is passionate about her field of study and is dedicated to gaining in-depth knowledge and skills that will contribute to the development of sustainable fisheries and aquaculture practices.',
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
				start: 'November 17, 2024',
				end: 'Present',
				description: 'Joined the company on November 17, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'January 30, 2025',
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
		role: 'Contributor, Marketing at S Technologies',
		since: 'November 17, 2024',
		tagline: 'Marketing Contributor of S Technologies',
		image: 'https://cdn.stechbd.net/file/2024/11/Ahmad AL Munir.webp',
		cover: '/image/Profile-Cover.webp',
		gender: 'Male',
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
			intro: 'Ahmad AL Munir is a marketing contributor at S Technologies. He is a motivated and versatile professional with a strong foundation in marketing, graphic design, social media management, and sales.',
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
				start: 'November 17, 2024',
				end: 'Present',
				description: 'Joined the company on November 17, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Oceanography',
				start: 'January 10, 2020',
				end: 'January 30, 2025',
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
		role: 'Contributor, Marketing at S Technologies',
		since: 'November 17, 2024',
		tagline: 'Marketing Contributor of S Technologies',
		image: 'https://cdn.stechbd.net/file/2024/11/Ashikur Rahman.webp',
		cover: '/image/Profile-Cover.webp',
		gender: 'Male',
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
			intro: 'Ashikur Rahman is a marketing contributor at S Technologies.',
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
				start: 'November 17, 2024',
				end: 'Present',
				description: 'Joined the company on November 17, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'January 30, 2025',
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
		role: 'Contributor, Marketing at S Technologies',
		since: 'November 17, 2024',
		tagline: 'Marketing Contributor of S Technologies',
		image: 'https://cdn.stechbd.net/file/2024/11/Md Shamim Ahmed.webp',
		cover: '/image/Profile-Cover.webp',
		gender: 'Male',
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
			intro: 'Md Shamim Ahmed is a marketing contributor at S Technologies.',
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
				start: 'November 17, 2024',
				end: 'Present',
				description: 'Joined the company on November 17, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'January 30, 2025',
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
		role: 'Contributor, Marketing at S Technologies',
		since: 'November 17, 2024',
		tagline: 'Marketing Contributor of S Technologies',
		image: 'https://cdn.stechbd.net/file/2024/11/Md Shazib Hossain.webp',
		cover: '/image/Profile-Cover.webp',
		gender: 'Male',
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
			intro: 'Md Shazib Hossain is a marketing contributor at S Technologies. He is a student at Dhaka University, where he is pursuing a degree in psychology.',
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
				start: 'November 17, 2024',
				end: 'Present',
				description: 'Joined the company on November 17, 2024.',
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
		role: 'Contributor, Marketing at S Technologies',
		since: 'November 17, 2024',
		tagline: 'Marketing Contributor of S Technologies',
		image: 'https://cdn.stechbd.net/file/2024/11/Angelica Mirza Aishwarja.webp',
		cover: '/image/Profile-Cover.webp',
		gender: 'Female',
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
			intro: 'Angelica Mirza Aishwarja is an undergraduate student currently studying in the Department of Marine Fisheries and Aquaculture at Bangladesh Maritime University in Dhaka, Bangladesh.',
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
				start: 'November 17, 2024',
				end: 'Present',
				description: 'Joined the company on November 17, 2024.',
			},
		],
		education: [
			{
				institute: 'Bangladesh Maritime University',
				degree: 'Bachelor of Science',
				major: 'Fisheries',
				start: 'January 10, 2020',
				end: 'January 30, 2025',
			},
		],
	},
]
