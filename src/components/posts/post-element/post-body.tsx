import Image from "next/image"

import styles from "./post.module.scss"

interface Props {
	title: string
	subtitle: string | null
	image: string
	className?: string
}

export default function PostBody({ title, subtitle, image, className }: Props) {
	return (
		<main className={`${className} w-full`}>
			<figure className={`${styles["post__body"]} w-full`}>
				<Image
					className="w-full h-full"
					src={"/" + image}
					alt={title}
					width={400}
					height={400}
				></Image>
			</figure>
		</main>
	)
}
