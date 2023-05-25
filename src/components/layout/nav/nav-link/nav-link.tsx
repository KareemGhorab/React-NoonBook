"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Url } from "next/dist/shared/lib/router/router"

import MyIcon, { MyIconProps } from "@/components/ui/myIcon"
import styles from "./nav-link.module.scss"

export interface NavElement {
	icon: MyIconProps
	title: string
	link: Url
}

export default function NavLink({ icon, title, link }: NavElement) {
	const pathName = usePathname()

	// Color the active icon
	{
		RegExp(`^${link.toString()}$`).test(pathName)
			? (icon.svg.fill = "#feee00")
			: (icon.svg.fill = "none")
	}

	return (
		<li>
			<Link href={link} prefetch={true}>
				<div className={`${styles["nav-link"]} rounded-full`}>
					<figure className="w-10 rounded-full p-1">
						<MyIcon {...icon}></MyIcon>
					</figure>
					<div
						className={` ${styles["nav-link-title"]} hidden text-xl font-semibold`}
					>
						{title}
					</div>
				</div>
			</Link>
		</li>
	)
}
