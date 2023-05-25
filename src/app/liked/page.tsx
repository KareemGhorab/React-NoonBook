"use client"

import PostsList from "@/components/posts/posts-list"
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

	console.log(posts);
	

	return posts
}

export default async function Liked() {
	const [postIds, setPostIds] = useLocalStorage<number[]>("likes", [])
	const [posts, setPosts] = useState<FullPost[]>([])

	useEffect(() => {
		console.log(postIds)

		getPosts(postIds).then((data) => {
			setPosts(data)
			console.log(data)
		})
	}, [postIds])

	return (
		<>
			<PostsList posts={posts} />
		</>
	)
}
