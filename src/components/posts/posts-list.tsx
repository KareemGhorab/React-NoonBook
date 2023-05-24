import { fetchPosts } from "@/bdl/post"
import Post from "@/interfaces/post"
import PostElement from "./post-element/post-element"

export default async function PostsList({
	className = "",
}: {
	className?: string
}) {
	const posts: Post[] = await fetchPosts(1)

	return (
		<ul className={`${className} flex items-center flex-col gap-4`}>
			{posts.map((post: Post) => (
				<PostElement key={post.id} {...post} />
			))}
		</ul>
	)
}
