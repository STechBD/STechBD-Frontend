/**
 * The Hero component for the About page.
 *
 * @returns { JSX.Element } The Hero component.
 * @since 3.0.0
 */
export default function Hero(): JSX.Element {
	return (
		<div className="text-white bg-[#020102] h-screen flex flex">
			<div className="w-1/3">
				<h1 className="text-6xl font-bold">About Us</h1>
				<p className="text-xl mt-5">We are a team of developers, designers, and marketers who are passionate about creating the best software and websites for our clients.</p>
			</div>
			<div className="w-2/3">
				<video className="w-full" autoPlay loop muted>
					<source src="/video/AI.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	)
}
