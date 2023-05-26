"use client"

import useLocalStorage from "@/hooks/useLocalStorage"
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
} from "react"

const LikesContext = createContext<
	[number[], Dispatch<SetStateAction<number[]>>]
>([[], () => {}])

export const useLikes = () => useContext(LikesContext)

export const LikesProvider = ({ children }: { children: ReactNode }) => {
	const [likes, setLikes] = useLocalStorage<number[]>("likes", [])

	return (
		<LikesContext.Provider value={[likes, setLikes]}>
			{children}
		</LikesContext.Provider>
	)
}
