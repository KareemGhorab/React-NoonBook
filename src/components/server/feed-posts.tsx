import { fetchPosts } from "@/actions/post"
import ClientFeedPosts from "../client/feed-posts"

export default async function ServerFeedPosts() {
	const posts = await fetchPosts(1)

	return (
		<section>
			<ClientFeedPosts posts={posts} />
		</section>
	)
}
