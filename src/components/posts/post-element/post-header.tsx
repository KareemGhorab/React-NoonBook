import Image from "next/image"

interface Props {
	username: string
	image: string
	className?: string
}

export default function PostHeader({ username, image, className = "" }: Props) {
	return (
		<header className={`${className} flex--centered gap-2 px-3`}>
			<figure className="rounded-full overflow-hidden w-9 h-9">
				<Image
					src={"/" + image}
					alt={username}
					width={36}
					height={36}
					className="w-full h-full"
				></Image>
			</figure>
			<figcaption className="text-blue-500 font-bold text-sm">
				{username.slice(0, 15)}
			</figcaption>
		</header>
	)
}
