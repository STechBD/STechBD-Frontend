'use client'

import { JSX, useEffect } from 'react'


const icon: string = `
<svg id="STechBD_Animated_Icon" class="STechBD_Animated_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
	<g id="Icon">
		<circle id="Circle" class="Circle" cx="1000" cy="1003.5" r="1003.5"/>
		<g id="Main">
			<g id="Color">
				<g id="Yellow">
					<path id="Yellow_Shadow" class="Yellow_Shadow"
					      d="m638.6546,961.9446l-213.5322-57.216c-19.0437-5.1027-38.6182,6.1987-43.7209,25.2423l-118.6067,442.6449c-5.1028,19.0436,6.1986,38.6181,25.2422,43.7209l442.6448,118.6068c19.0437,5.1027,38.6182-6.1987,43.7209-25.2423l36.3393-135.6197c-134.1305-86.6298-206.177-249.4453-172.0875-412.1369Z"/>
					<path id="Yellow_Main" class="Yellow_Main"
					      d="m614.0957,919.4073h0l-213.5322-57.216c-19.0437-5.1027-38.6182,6.1987-43.7209,25.2423l-118.6067,442.6449c-5.1028,19.0436,6.1986,38.6181,25.2422,43.7209l442.6448,118.6068c19.0437,5.1027,38.6182-6.1987,43.7209-25.2423l36.3393-135.6197c-134.1305-86.6298-206.177-249.4453-172.0875-412.1369Z"/>
				</g>
				<g id="Green">
					<path id="Green_Shadow" class="Green_Shadow"
					      d="m1579.8251,1214.1307l-179.9845-48.2269c-55.6973,169.7459-217.6388,278.3146-391.094,271.0142h0l-33.8939,126.4931c-5.1027,19.0436,6.1987,38.6182,25.2423,43.7209l442.6448,118.6068c19.0436,5.1027,38.6182-6.1987,43.7209-25.2423l118.6068-442.6448c5.1027-19.0436-6.1987-38.6182-25.2423-43.7209Z"/>
					<path id="Green_Main" class="Green_Main"
					      d="m1555.2662,1171.5934l-179.9845-48.2269c-55.6973,169.7459-217.6388,278.3146-391.094,271.0142l-33.8939,126.4931c-5.1027,19.0436,6.1987,38.6182,25.2423,43.7209l442.6448,118.6068c19.0436,5.1027,38.6182-6.1987,43.7209-25.2423l118.6068-442.6448c5.1027-19.0436-6.1987-38.6182-25.2423-43.7209Z"/>
				</g>
				<g id="Blue">
					<path id="Blue_Shadow" class="Blue_Shadow"
					      d="m1736.5218,625.9759l-442.6449-118.6067c-19.0436-5.1027-38.6182,6.1986-43.7209,25.2423l-42.8329,159.8536c144.2366,74.9565,229.0619,232.9246,209.6288,396.2221h0l182.4845,48.8967c19.0436,5.1027,38.6182-6.1986,43.7209-25.2422l118.6068-442.6448c5.1027-19.0437-6.1986-38.6182-25.2423-43.7209Z"/>
					<path id="Blue_Main" class="Blue_Main"
					      d="m1711.9629,583.4387l-442.6449-118.6067c-19.0436-5.1027-38.6182,6.1986-43.7209,25.2423l-42.8329,159.8536c144.2365,74.9565,229.0619,232.9246,209.6288,396.2221l182.4845,48.8967c19.0436,5.1027,38.6182-6.1986,43.7209-25.2422l118.6068-442.6448c5.1027-19.0437-6.1986-38.6182-25.2423-43.7209Z"/>
				</g>
				<g id="Red">
					<path id="Red_Shadow" class="Red_Shadow"
					      d="m1005.2165,648.2935l45.3283-169.1672c5.1028-19.0436-6.1985-38.6182-25.2422-43.7209l-442.6449-118.6067c-19.0437-5.1027-38.6182,6.1986-43.7209,25.2423l-118.6067,442.6449c-5.1028,19.0436,6.1986,38.6181,25.2422,43.7209l216.8716,58.1107h0c59.8844-139.6299,194.5594-230.8276,342.7725-238.2239Z"/>
					<path id="Red_Main" class="Red_Main"
					      d="m980.6577,605.7562l45.3283-169.1672c5.1028-19.0436-6.1985-38.6182-25.2422-43.7209l-442.6449-118.6067c-19.0437-5.1027-38.6182,6.1986-43.7209,25.2423l-118.6067,442.6449c-5.1028,19.0436,6.1986,38.6181,25.2422,43.7209l216.8716,58.1107c59.8844-139.6299,194.5594-230.8276,342.7725-238.2239Z"/>
				</g>
			</g>
			<g id="S">
				<g id="S_Shadow">
					<path class="S_Shadow"
					      d="m978.1712,1309.3183c-61.0261,0-109.0753-13.5763-144.1494-40.7222-29.5506-22.5797-44.3251-48.6504-44.3251-78.201,0-15.1357,4.5602-27.6869,13.6942-37.6594,9.1272-9.9667,21.7394-14.9551,37.8384-14.9551,21.6224,0,37.4788,11.0529,47.5693,33.1544,13.6942,29.5506,44.6863,44.3259,92.9763,44.3259,41.32,0,81.3206-9.0093,120.0052-27.028,40.1193-18.4978,60.1815-38.7965,60.1815-60.9031,0-30.2714-12.4952-50.2098-37.4788-59.822-17.7812-6.965-53.4591-11.0478-107.0301-12.2527-41.5676-.9573-78.8039-8.7677-111.7158-23.4243-44.4506-19.9393-66.3087-48.5266-65.588-85.7689.7207-46.8485,25.7044-89.7894,74.9577-128.8335,49.2465-39.0386,103.545-58.5607,162.8888-58.5607,23.5421,0,52.6145,5.4056,87.2104,16.2168,43.0023,13.4576,64.506,28.9537,64.506,46.4882,0,12.4948-4.3245,23.5481-12.9734,33.1544-9.6122,10.8112-21.9819,16.2168-37.1176,16.2168-11.2962,0-28.1719-2.3988-50.632-7.2075-22.4686-4.8031-39.4613-7.2075-50.9933-7.2075-30.9921.2421-60.4257,7.6916-88.2923,22.3432-28.8299,14.8991-43.2448,31.1159-43.2448,48.6504,0,9.1331,4.3804,16.6391,13.1549,22.5233,8.766,5.8898,21.9192,10.0341,39.4596,12.4329,30.7496,1.6836,61.3822,3.3672,91.8961,5.0452,53.3353,4.0879,95.4981,19.0998,126.4902,45.0467,34.1125,28.8299,51.173,68.7126,51.173,119.644,0,61.9842-35.3166,108.9566-105.9498,140.906-53.8186,24.2629-115.3195,36.3977-184.5112,36.3977Z"/>
				</g>
				<g id="S_Main">
					<path class="S_Main"
					      d="m943.4397,1274.5868c-61.0261,0-109.0753-13.5763-144.1494-40.7222-29.5506-22.5797-44.3251-48.6504-44.3251-78.201,0-15.1357,4.5602-27.6869,13.6942-37.6594,9.1272-9.9667,21.7394-14.9551,37.8384-14.9551,21.6224,0,37.4788,11.0529,47.5693,33.1544,13.6942,29.5506,44.6863,44.3259,92.9763,44.3259,41.32,0,81.3206-9.0093,120.0052-27.028,40.1193-18.4978,60.1815-38.7965,60.1815-60.9031,0-30.2714-12.4952-50.2098-37.4788-59.822-17.7812-6.965-53.4591-11.0478-107.0301-12.2527-41.5676-.9573-78.8039-8.7677-111.7158-23.4243-44.4506-19.9388-66.3087-48.5266-65.588-85.7689.7207-46.8485,25.7044-89.7894,74.9577-128.8335,49.2465-39.0386,103.545-58.5607,162.8888-58.5607,23.5421,0,52.6145,5.4056,87.2104,16.2168,43.0023,13.4576,64.506,28.9537,64.506,46.4882,0,12.4948-4.3245,23.5481-12.9734,33.1544-9.6122,10.8112-21.9819,16.2168-37.1176,16.2168-11.2962,0-28.1719-2.3988-50.632-7.2075-22.4686-4.8031-39.4613-7.2075-50.9933-7.2075-30.9921.2421-60.4257,7.6916-88.2923,22.3432-28.8299,14.8991-43.2448,31.1159-43.2448,48.6504,0,9.1331,4.3804,16.6391,13.1549,22.5233,8.766,5.8898,21.9192,10.0341,39.4596,12.4329,30.7496,1.6836,61.3822,3.3672,91.8961,5.0452,53.3353,4.0879,95.4981,19.0998,126.4902,45.0467,34.1125,28.8299,51.173,68.7126,51.173,119.644,0,61.9842-35.3166,108.9566-105.9498,140.906-53.8186,24.2629-115.3195,36.3977-184.5112,36.3977Z"/>
				</g>
			</g>
		</g>
	</g>
</svg>
`


/**
 * Animated SVG logo.
 *
 * @returns { JSX.Element } Animated SVG logo.
 * @since 3.0.0
 */
export default function AnimatedLogo({ className = 'h-8 w-8 sm:h-10 sm:w-10' }: { className?: string }): JSX.Element {
	useEffect(() => {
		let i: number = 0
		const intervalId = setInterval((): void => {
			const s: number = i % 4
			const paths = document.querySelectorAll('path')

			paths.forEach((path: Element): void => {
				const currentClass: string | null = path.getAttribute('class')

				if (s === 1) {
					if (currentClass === 'Red_Main') {
						path.setAttribute('class', 'Blue_Main')
					} else if (currentClass === 'Blue_Main') {
						path.setAttribute('class', 'Green_Main')
					} else if (currentClass === 'Green_Main') {
						path.setAttribute('class', 'Yellow_Main')
					} else if (currentClass === 'Yellow_Main') {
						path.setAttribute('class', 'Red_Main')
					}

					if (currentClass === 'Red_Shadow') {
						path.setAttribute('class', 'Blue_Shadow')
					} else if (currentClass === 'Blue_Shadow') {
						path.setAttribute('class', 'Green_Shadow')
					} else if (currentClass === 'Green_Shadow') {
						path.setAttribute('class', 'Yellow_Shadow')
					} else if (currentClass === 'Yellow_Shadow') {
						path.setAttribute('class', 'Red_Shadow')
					}
				} else if (s === 2) {
					if (currentClass === 'Red_Main') {
						path.setAttribute('class', 'Green_Main')
					} else if (currentClass === 'Blue_Main') {
						path.setAttribute('class', 'Yellow_Main')
					} else if (currentClass === 'Green_Main') {
						path.setAttribute('class', 'Red_Main')
					} else if (currentClass === 'Yellow_Main') {
						path.setAttribute('class', 'Blue_Main')
					}

					if (currentClass === 'Red_Shadow') {
						path.setAttribute('class', 'Green_Shadow')
					} else if (currentClass === 'Blue_Shadow') {
						path.setAttribute('class', 'Yellow_Shadow')
					} else if (currentClass === 'Green_Shadow') {
						path.setAttribute('class', 'Red_Shadow')
					} else if (currentClass === 'Yellow_Shadow') {
						path.setAttribute('class', 'Blue_Shadow')
					}
				} else if (s === 3) {
					if (currentClass === 'Red_Main') {
						path.setAttribute('class', 'Yellow_Main')
					} else if (currentClass === 'Blue_Main') {
						path.setAttribute('class', 'Red_Main')
					} else if (currentClass === 'Green_Main') {
						path.setAttribute('class', 'Blue_Main')
					} else if (currentClass === 'Yellow_Main') {
						path.setAttribute('class', 'Green_Main')
					}

					if (currentClass === 'Red_Shadow') {
						path.setAttribute('class', 'Yellow_Shadow')
					} else if (currentClass === 'Blue_Shadow') {
						path.setAttribute('class', 'Red_Shadow')
					} else if (currentClass === 'Green_Shadow') {
						path.setAttribute('class', 'Blue_Shadow')
					} else if (currentClass === 'Yellow_Shadow') {
						path.setAttribute('class', 'Green_Shadow')
					}
				} else {
					if (currentClass === 'Red_Main') {
						path.setAttribute('class', 'Red_Main')
					} else if (currentClass === 'Blue_Main') {
						path.setAttribute('class', 'Blue_Main')
					} else if (currentClass === 'Green_Main') {
						path.setAttribute('class', 'Green_Main')
					} else if (currentClass === 'Yellow_Main') {
						path.setAttribute('class', 'Yellow_Main')
					}

					if (currentClass === 'Red_Shadow') {
						path.setAttribute('class', 'Red_Shadow')
					} else if (currentClass === 'Blue_Shadow') {
						path.setAttribute('class', 'Blue_Shadow')
					} else if (currentClass === 'Green_Shadow') {
						path.setAttribute('class', 'Green_Shadow')
					} else if (currentClass === 'Yellow_Shadow') {
						path.setAttribute('class', 'Yellow_Shadow')
					}
				}

				i++
			})
		}, 3000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<>
			<div className={ className } dangerouslySetInnerHTML={ { __html: icon } }/>
		</>
	)
}
