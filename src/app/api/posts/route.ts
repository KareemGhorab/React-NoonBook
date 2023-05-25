import { NextResponse } from "next/server"

import { fetchPosts } from "@/actions/post"
import FullPost from "@/types/full-post"

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)

		console.log(`GET /posts with search params: `)
		console.log(searchParams)

		const page = +(searchParams.get("page") ?? 1)
		const posts: FullPost[] = await fetchPosts(page)

		return NextResponse.json({ posts })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error })
	}
}
