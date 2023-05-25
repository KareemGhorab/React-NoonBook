import Image from "next/image"
import Link from "next/link"

import styles from "./logo.module.scss"

export default function Logo() {
	return (
		<Link href={"/"}>
			<div className={`${styles.logo}`}>
				<figure className="w-20 rounded-full">
					<Image
						className="w-full h-full"
						src={"/noon.png"}
						alt="NoonBook"
						height={255}
						width={255}
					/>
				</figure>
				<h1 className={`${styles["logo-header"]}`}>
					NoonBook
				</h1>
			</div>
		</Link>
	)
}
