import { JSX, useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { Engine, type Container, type ISourceOptions, } from '@tsparticles/engine'
// import { loadAll } from "@/tsparticles/all" // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles" // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic" // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


/**
 * tsParticles animation component.
 *
 * @returns { JSX.Element } The particles animation component.
 * @since 3.0.0
 */
export default function ParticleAnimation(): JSX.Element {
	const [ init, setInit ] = useState<boolean>(false)

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine: Engine) => {
			await loadSlim(engine)
			//await loadBasic(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container)
	}

	const options: ISourceOptions = useMemo(
		() => ({
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: '#9800E8',
				},
				links: {
					color: '#4C2FE4',
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'bounce',
					},
					random: false,
					speed: 6,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: {
						min: 1,
						max: 5,
					},
				},
			},
			detectRetina: true,
		}),
		[],
	)

	if (init) {
		return (
			<Particles
				particlesLoaded={ particlesLoaded }
				options={ options }
				className="-z-10"
			/>
		)
	}

	return <></>
}
