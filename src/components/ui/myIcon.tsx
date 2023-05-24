import { SVGProps } from "react"

export interface MyIconProps {
	svg: SVGProps<SVGSVGElement>
	path: SVGProps<SVGPathElement>
}

export default function MyIcon({ svg, path }: MyIconProps) {
	return (
		<svg {...svg}>
			<path {...path}></path>
		</svg>
	)
}
