import { NextResponse } from "next/server"

import { FullUserLikes, fetchLikedPosts } from "@/actions/post"

export async function GET(
	request: Request,
	{
		params: { userId },
	}: {
		params: {
			userId: number
		}
	}
) {
	try {
		const { searchParams } = new URL(request.url)

		console.log(`GET /users/likes with search params: `)
		console.log(searchParams)

		const page = +(searchParams.get("page") ?? 1)
		const user: FullUserLikes | null = await fetchLikedPosts(+page, +userId)

		console.log(user)

		return NextResponse.json({ user })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
