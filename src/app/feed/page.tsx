import ClientComponent from "@/components/client-component"
import FeedPosts from "@/components/server/feed-posts"

export default function Feed() {
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<FeedPosts />
		</>
	)
}
