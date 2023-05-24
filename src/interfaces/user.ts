import Post from "./post"

export default interface User {
	id: number
	username: string
	profilePictureUrl: string
	likedPosts: Post[]
}
