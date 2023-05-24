import PostsList from "@/components/posts/posts-list"

export default async function Home() {
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<PostsList className="" />
		</>
	)
}
