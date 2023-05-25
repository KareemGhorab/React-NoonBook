"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { User, Post } from "@prisma/client"
import PostsList from "../../posts/posts-list"
import LoadingIcon from "../../ui/loading-icon"
import styles from "./feed-posts.module.scss"

const getNewPosts = async (page: number) => {
	const {
		data: { posts },
	} = await axios.get<{ posts: (Post & { user: User })[] }>(
		"/api/posts",
		{
			params: {
				page,
			},
		}
	)

	console.log("new posts: ")
	console.log(posts)

	return posts
}

export default function ClientFeedPosts({
	posts,
}: {
	posts: (Post & { user: User })[]
}) {
	const [fullPosts, setFullPosts] = useState<(Post & { user: User })[]>(posts)
	const [currentPage, setCurrentPage] = useState(1)
	const [isLoadingNewPosts, setIsLoadingNewPosts] = useState<boolean>(false)

	const loadMoreHandler = () => {
		if (currentPage === -1) return
		setIsLoadingNewPosts(true)
		setCurrentPage((prev) => prev + 1)
	}

	useEffect(() => {
		if (currentPage < 2) return
		getNewPosts(currentPage)
			.then((posts) => {
				if (!posts.length) {
					setCurrentPage(-1)
					return
				}
				setFullPosts((prev) => prev.concat(posts))
			})
			.then(() => setIsLoadingNewPosts(false))
	}, [currentPage])

	return (
		<section className="grid gap-10">
			<PostsList posts={fullPosts} />
			<div className="flex--centered">
				{currentPage === -1 ? (
					<div>No more posts to show :(</div>
				) : isLoadingNewPosts ? (
					<LoadingIcon className="w-10" />
				) : (
					<button className={styles["btn"]} onClick={loadMoreHandler}>
						Load More
					</button>
				)}
			</div>
		</section>
	)
}
