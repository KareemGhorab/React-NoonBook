import Post from "@/interfaces/post"
import PostElement from "./post-element/post-element"

export default function PostsList({
	className = "",
	posts,
}: {
	className?: string
	posts: Post[]
}) {
	return (
		<ul className={`${className} flex items-center flex-col gap-4`}>
			{posts.map((post: Post) => (
				<PostElement key={post.id} {...post} />
			))}
		</ul>
	)
}
