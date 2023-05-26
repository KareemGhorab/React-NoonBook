"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"

import MyIcon from "@/components/ui/myIcon"
import useLocalStorage from "@/hooks/useLocalStorage"
import styles from "./post.module.scss"
import { useLikes } from "@/context/likes-context"

interface Props {
	likesCount: number
	commentsCount: number
	content: string
	hashtags: string
	postId: number
}

//#region old impl
// const toggleLike = async (postId: number) => {
// 	console.log(process.env.URL)
// 	await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/1/likes/${postId}`, {
// 		method: "POST",
// 	})
// }

// const isLiked = async (postId: number): Promise<boolean> => {
// 	const res = await fetch(
// 		`${process.env.NEXT_PUBLIC_URL}/api/users/1/likes/${postId}`
// 	)
// 	const is: { liked: boolean } = await res.json()
// 	return is.liked
// }
//#endregion

export default function PostFooter({
	commentsCount,
	content,
	likesCount,
	hashtags,
	postId,
}: Props) {
	const [likes, setLikes] = useLikes()
	const [liked, setLiked] = useState(false)

	const toggleLike = async () => {
		if (isLiked()) {
			setLikes((prev) => prev.filter((post) => post !== postId))
			return
		}
		setLikes((prev) => prev.concat([postId]))
	}

	const isLiked = useCallback((): boolean => {
		return likes.some((post) => post === postId)
	}, [likes, postId])

	useEffect(() => {
		setLiked(isLiked())
	}, [isLiked])

	return (
		<footer className={`${styles["post_footer"]} flex flex-col gap-2 px-3`}>
			<section className={styles["post__footer__like"]}>
				<div
					className="w-8 cursor-pointer"
					onClick={() => {
						toggleLike()
					}}
				>
					<MyIcon
						svg={{
							xmlns: "http://www.w3.org/2000/svg",
							fill: liked ? "#feee00" : "none",
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
					<p className={styles["post__footer__p"]}>{content}</p>
					{hashtags.trim().length > 0 && (
						<p className={styles["post__footer__hash"]}>
							{hashtags.split(" ").map((hashtag) => (
								<Link key={hashtag} href={"#"}>
									#{hashtag}{" "}
								</Link>
							))}
						</p>
					)}
				</div>

				<p
					className={`${styles["post__footer__comment"]} cursor-pointer`}
				>
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
