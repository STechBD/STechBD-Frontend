import { ImageResponse } from 'next/og'

export const runtime = 'edge'


/**
 * Delivers a static image for meta-image.
 *
 * @returns { ImageResponse } The image response.
 * @since 3.0.0
 */
export async function GET() {
	return new ImageResponse(
		(
			<>
				<div tw="bg-white text-center text-3xl text-indigo-600">
					Hello Shemul!
				</div>
			</>
		),
		{
			width: 1200,
			height: 628,
		}
	)
}
