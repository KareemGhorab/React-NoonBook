"use client"

import { useSearchParams } from "next/navigation"

import PostsList from "@/components/posts/posts-list"
import { Post, User } from "@prisma/client"
import { useEffect, useState } from "react"

const fetchData = async (
	page: number = 1
): Promise<(Post & { user: User })[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_URL}/api/posts?page=${page}`,
		{
			cache: "no-store",
		}
	)
	const feed: { posts: (Post & { user: User })[] } = await res.json()
	return feed.posts
}

export default async function Feed() {
	const searchParams = useSearchParams()
	const [posts] = useState(
		async () => await fetchData(+(searchParams.get("page") ?? 1))
	)

	return (
		<>
			<PostsList className="" posts={await posts} />
		</>
	)
}
