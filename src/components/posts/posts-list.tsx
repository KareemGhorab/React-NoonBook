import { Post, User } from "@prisma/client"
import PostElement from "./post-element/post-element"

export default function PostsList({
	className = "",
	posts,
}: {
	className?: string
	posts: (Post & { user: User })[]
}) {
	return (
		<>
			{posts.length ? (
				<ul className={`${className} flex items-center flex-col gap-4`}>
					{posts.map((post: Post & { user: User }) => (
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
