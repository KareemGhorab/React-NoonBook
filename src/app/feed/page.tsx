import { fetchPosts } from "@/bdl/post"
import PostsList from "@/components/posts/posts-list"

export default async function Feed() {
	const feed = await fetchPosts(1)

	return (
		<>
			<PostsList className="" posts={feed} />
		</>
	)
}
