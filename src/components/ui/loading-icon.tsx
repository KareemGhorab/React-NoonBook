import Image from "next/image"

export default function LoadingIcon({ className = "" }: { className: string }) {
	return (
		<figure className={`${className} animate-spin`}>
			<Image
				className=""
				src={"/noon.png"}
				alt="Noon"
				width={260}
				height={260}
			/>
		</figure>
	)
}
