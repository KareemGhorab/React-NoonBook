import Image from "next/image"

interface Props {
	title: string
	subtitle: string | null
	image: string
	className?: string
}

export default function PostBody({ title, subtitle, image, className }: Props) {
	return (
		<main className={`${className} w-full`}>
			<figure className="bg-cover bg-center w-full h-96">
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
