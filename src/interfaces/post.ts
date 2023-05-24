import User from "./user"

export default interface Post {
	user: User
	imageUrl: string | null
	likesCount: number
	commentsCount: number
	title: string
	subtitle?: string
	content?: string
}
