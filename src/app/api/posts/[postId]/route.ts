import { NextResponse } from "next/server"

import { fetchPost } from "@/actions/post"
import { Post } from "@prisma/client"

export async function GET(
	request: Request,
	{ params: { postId } }: { params: { postId: number } }
) {
	try {
		console.log(`GET /posts/ ${postId} `)
		const post: Post | null = await fetchPost(+postId)

		console.log(post)

		return NextResponse.json({ post })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
