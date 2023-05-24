import { PrismaClient } from "@prisma/client"
import Post from "../interfaces/post"

const prisma = new PrismaClient()

const PAGE_SIZE = 15

export const fetchPosts = async (page: number): Promise<Post[]> => {
	if (page < 1) page = 1

	return (
		await prisma.post.findMany({
			skip: PAGE_SIZE * (page - 1),
			take: PAGE_SIZE,
			include: {
				user: true,
			},
			orderBy: 
			{
				
			}
		})
	).map(
		({
			id: postId,
			content,
			title,
			subtitle,
			image: postImg,
			comments_counter: commentsCount,
			likes_counter: likesCount,
			hashtags,
			user: { id: userId, username, image: profilePictureUrl },
		}): Post => ({
			id: postId,
			title,
			subtitle,
			content,
			imageUrl: postImg,
			likesCount,
			commentsCount,
			hashtags,
			user: {
				id: userId,
				username,
				profilePictureUrl,
				likedPosts: [],
			},
		})
	)
}

export const addPost = async (data: {
	content?: string
	comments_counter: number
	likes_counter: number
	image?: string
	userId: number
	title: string
	subtitle?: string
}) => {
	await prisma.post.create({
		data,
	})
}
