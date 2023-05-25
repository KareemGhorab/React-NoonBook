import { NextResponse } from "next/server"

import { fetchPosts } from "@/actions/post"
import { Post, User } from "@prisma/client"

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)

		console.log(`GET /posts with search params: `)
		console.log(searchParams)

		const page = +(searchParams.get("page") ?? 1)
		const posts: (Post & { user: User })[] = await fetchPosts(page)

		return NextResponse.json({ posts })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
