import { NextResponse } from "next/server"

import { isLiked, toggleLikePost } from "@/actions/post"

export async function POST(
	request: Request,
	{
		params: { userId, postId },
	}: {
		params: {
			userId: number
			postId: number
		}
	}
) {
	console.log(`POST /users/${postId}/likes/${userId}`)

	await toggleLikePost(+postId, +userId)
	return NextResponse.json({ message: "Success" })
}

export async function GET(
	request: Request,
	{
		params: { postId, userId },
	}: {
		params: {
			userId: number
			postId: number
		}
	}
) {
	const liked = await isLiked(+postId, +userId)
	console.log("liked " + liked)

	return NextResponse.json({ liked })
}
