import Image from "next/image"
import Link from "next/link"

export default function Logo() {
	return (
		<Link href={"/"}>
			<div className="hidden md:flex md:justify-center md:items-center w-60 rounded-lg bg-primary-500">
				<figure className="w-20 rounded-full">
					<Image
						className="w-full h-full"
						src={"/noon.png"}
						alt="NoonBook"
						height={255}
						width={255}
					/>
				</figure>
				<h1 className="text-xl font-bold text-secondary-500 mr-2">
					NoonBook
				</h1>
			</div>
		</Link>
	)
}
