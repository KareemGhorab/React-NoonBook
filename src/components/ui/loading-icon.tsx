import Image from "next/image"

import styles from "./ui.module.scss"

export default function LoadingIcon({ className = "" }: { className: string }) {
	return (
		<figure className={`${className} ${styles["animate"]}`}>
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
