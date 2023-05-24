import Post from "@/interfaces/post"
import PostHeader from "./post-header"
import PostBody from "./post-body"
import PostFooter from "./post-footer"

export default function PostElement({
	user: { username, profilePictureUrl },
	title,
	subtitle,
	imageUrl,
	content,
	likesCount,
	commentsCount,
	hashtags,
}: Post) {
	return (
		<article className="flex flex-col gap-2 items-start border rounded-lg py-5 w-full">
			<PostHeader
				profilePictureUrl={profilePictureUrl}
				username={username}
				className=""
			/>
			<PostBody image={imageUrl} title={title} subtitle={subtitle} />
			<PostFooter
				content={content ?? ""}
				hashtags={hashtags ?? ""}
				commentsCount={commentsCount}
				likesCount={likesCount}
			/>
		</article>
	)
}
