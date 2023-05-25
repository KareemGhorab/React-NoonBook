import PostHeader from "./post-header"
import PostBody from "./post-body"
import PostFooter from "./post-footer"
import { Post, User } from "@prisma/client"

export default function PostElement({
	id,
	title,
	subtitle,
	image: postImg,
	content,
	likesCounter,
	commentsCounter,
	hashtags,
	user: { username, image: userImg },
}: Post & { user: User }) {
	return (
		<article className="flex flex-col gap-2 items-start border rounded-lg py-5 w-full">
			<PostHeader image={userImg} username={username} className="" />
			<PostBody image={postImg} title={title} subtitle={subtitle} />
			<PostFooter
				postId={id}
				content={content ?? ""}
				hashtags={hashtags ?? ""}
				commentsCount={commentsCounter}
				likesCount={likesCounter}
			/>
		</article>
	)
}
