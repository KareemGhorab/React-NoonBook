import { addPost } from "@/bdl/post"
import { addUser } from "@/bdl/user"
import PostsList from "@/components/posts/posts-list"

export default async function Home() {
	// addUser({
	// 	username: "Kareem Ghorab",
	// 	image: "kareem.png",
	// })

	// addPost({
	// 	title: "First Post :D",
	// 	subtitle: "subtitle ._.",
	// 	content: "Test ... Test ... Test, do I look good? ;)",
	// 	userId: 1,
	// 	comments_counter: 150,
	// 	likes_counter: 9000,
	// 	image: "kareem",
	// })

	return (
		<>
			{/* @ts-expect-error Server Component */}
			<PostsList className="" />
		</>
	)
}
