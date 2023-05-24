import MyIcon from "@/components/ui/myIcon"
import Link from "next/link"

interface Props {
	likesCount: number
	commentsCount: number
	content: string
	hashtags: string
}

export default function PostFooter({
	commentsCount,
	content,
	likesCount,
	hashtags,
}: Props) {
	return (
		<footer className="flex flex-col items-start gap-2 px-3">
			<section className="flex--centered gap-2">
				<div className="w-8 cursor-pointer">
					<MyIcon
						svg={{
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 24 24",
							strokeWidth: 1.5,
							stroke: "currentColor",
							className: "w-full h-full",
						}}
						path={{
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
						}}
					/>
				</div>
				<span className="text-lg">{likesCount} likes</span>
			</section>
			<section className="grid gap-3">
				<div>
					<p className="text-neutral-600">{content}</p>
					<p className="text-blue-500">
						{hashtags.split(" ").map((hashtag) => (
							<Link key={hashtag} href={"#"}>
								#{hashtag}{" "}
							</Link>
						))}
					</p>
				</div>

				<p className="cursor-pointer text-neutral-400">
					{commentsCount
						? `View ${commentsCount} ${
								commentsCount === 1 ? "comment" : "comments"
						  }`
						: `No comments to show`}
				</p>
			</section>
		</footer>
	)
}
