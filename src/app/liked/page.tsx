"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import PostsList from "@/components/posts/posts-list"
import { Post, User } from "@prisma/client"
import { FullUserLikes } from "@/actions/post"

const fetchData = async (
	page: number = 1
): Promise<{ post: Post & { user: User } }[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_URL}/api/users/1/likes?page=${page}`,
		{
			cache: "no-store",
		}
	)
	const feed: { user: FullUserLikes | null } = await res.json()
	return feed?.user?.likes ?? []
}

export default async function Feed() {
	const searchParams = useSearchParams()
	const [posts] = useState(
		async () => await fetchData(+(searchParams.get("page") ?? 1))
	)

	return (
		<>
			<PostsList
				className=""
				posts={(await posts).map((post) => ({ ...post.post }))}
			/>
		</>
	)
}
