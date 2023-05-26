"use client"

import PostsList from "@/components/posts/posts-list"
import LoadingIcon from "@/components/ui/loading-icon"
import { useLikes } from "@/context/likes-context"
import useLocalStorage from "@/hooks/useLocalStorage"
import FullPost from "@/types/full-post"
import axios from "axios"
import { useEffect, useState } from "react"

const getPosts = async (ids: number[]): Promise<FullPost[]> => {
	const posts = await Promise.all(
		ids.map(
			async (id) =>
				(
					await axios.get<{ post: FullPost }>(`/api/posts/${id}`)
				).data.post
		)
	)

	console.log(posts)

	return posts
}

export default async function Liked() {
	const [postIds] = useLikes()
	const [posts, setPosts] = useState<FullPost[]>([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		getPosts(postIds)
			.then((data) => {
				setPosts(data)
				console.log(data)
			})
			.then(() => setIsLoading(false))
	}, [postIds])

	return (
		<>
			{isLoading ? (
				<main className="w-full h-full flex--centered">
					<LoadingIcon className="w-40 mt-10" />
				</main>
			) : (
				<PostsList posts={posts} />
			)}
		</>
	)
}
