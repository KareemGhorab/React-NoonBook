import Logo from "../logo/logo"
import NavLink, { NavElement } from "../nav-link/nav-link"
import styles from "./navbar.module.scss"

const elements: NavElement[] = [
	{
		title: "Home",
		link: "/feed",
		icon: {
			svg: {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				strokeWidth: 1.5,
				stroke: "currentColor",
				className: "w-full h-full",
			},
			path: {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
			},
		},
	},
	{
		title: "Liked",
		link: "/liked",
		icon: {
			svg: {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				strokeWidth: 1.5,
				stroke: "currentColor",
				className: "w-full h-full",
			},
			path: {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
			},
		},
	},
]

export default function Navbar() {
	return (
		<nav className={`${styles["nav-bar"]} w-full py-2 px-5 z-50`}>
			<Logo />
			<ul className={styles["nav-bar-list"]}>
				{elements.map((element: NavElement) => (
					<NavLink key={element.title} {...element}></NavLink>
				))}
			</ul>
		</nav>
	)
}
