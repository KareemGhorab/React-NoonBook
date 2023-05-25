"use client"

import PostElement from "./post-element/post-element"
import FullPost from "@/types/full-post"

export default function PostsList({ posts }: { posts: FullPost[] }) {
	return (
		<>
			{posts.length ? (
				<ul className={`flex items-center flex-col gap-4`}>
					{posts.map((post: FullPost) => (
						<PostElement key={post.id} {...post} />
					))}
				</ul>
			) : (
				<p className="flex--centered text-2xl mt-10">
					There is nothing to show here
				</p>
			)}
		</>
	)
}
