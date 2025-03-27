import Domain from '@/data/domain'


/**
 * Check if the domain name is available from API.
 *
 * @param request The incoming request.
 * @param params The domain name.
 * @returns { json } Returns a JSON response with the domain name availability.
 * @since 3.0.0
 */
export async function GET(request: Request, { params }: { params: Promise<{ name: string }> }): Promise<Response> {
	const extensionList: string[] = []
	const domain: string = (await params).name
	const name: string = domain.split('.').shift() || ''
	const extension: string = domain.split('.').slice(1).join('.')

	Domain.map((item: any): void => {
		extensionList.push(item.extension)
	})


	/**
	 * Validate the domain name.
	 *
	 * @since 3.0.0
	 */
	if (!domain) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain name is required.',
			},
		})
	} else if (!extensionList.includes(`.${ extension }`)) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain extension is not available.',
			},
		})
	} else if (domain.length < 3) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain name must be at least 3 characters.',
			},
		})
	} else if (domain.length > 63) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain name must be less than 63 characters.',
			},
		})
	} else if (!name.match(/^[a-z0-9-]+$/)) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain name must only contain alphanumeric characters and hyphens.',
			},
		})
	} else if (domain.startsWith('-') || domain.endsWith('-')) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain name must not start or end with a hyphen.',
			},
		})
	} else if (domain.match(/--/)) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain name must not contain consecutive hyphens.',
			},
		})
	} else if (domain.match(/^[0-9]+$/)) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain name must not be a number.',
			},
		})
	} else if (domain.match(/^[0-9-]+$/)) {
		return Response.json({
			status: 400,
			body: {
				error: 'Domain name must not contain only numbers and hyphens.',
			},
		})
	}

	const response: Response = await fetch(`https://api.domainsdb.info/v1/domains/search?domain=${ domain }`)
	const data = await response.json()

	if (data.domains) {
		return Response.json({
			status: 200,
			body: {
				available: false,
			},
		})
	}

	return Response.json({
		status: 200,
		body: {
			available: true,
		},
	})
}
