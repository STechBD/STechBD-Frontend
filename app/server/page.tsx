import { post, postList } from '@/app/_function/blog'


export default function Page() {
	const data: object | null = post('test-blog')
	const dataList: object[] | null = postList()

	if (!data) {
		return <div>loading...</div>
	}

	// @ts-ignore
	return (
		<>

		</>
	)
}
