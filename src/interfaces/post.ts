import User from "./user"

export default interface Post {
	id: number
	user: User
	imageUrl: string | null
	likesCount: number
	commentsCount: number
	title: string
	subtitle: string | null
	content: string | null
	hashtags: string | null
}
