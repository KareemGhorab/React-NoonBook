"use server"

import { Post, PrismaClient, User } from "@prisma/client"

export type FullUserLikes = User & { likes: { post: Post & { user: User } }[] }

const prisma = new PrismaClient()
const PAGE_SIZE = 15

export const fetchPosts = async (
	page: number
): Promise<(Post & { user: User })[]> => {
	if (page < 1) page = 1

	console.log(`Fetching posts with page ${page}`)

	return await prisma.post.findMany({
		skip: PAGE_SIZE * (page - 1),
		take: PAGE_SIZE,
		include: {
			user: true,
		},
		orderBy: { createdAt: "desc" },
	})
}

export const fetchLikedPosts = async (
	page: number,
	userId: number = 1
): Promise<FullUserLikes | null> => {
	if (page < 1) page = 1

	console.log(`Fetching liked posts for user ${userId} page ${page}`)

	return await prisma.user.findFirst({
		where: {
			id: userId,
		},
		include: {
			likes: {
				include: {
					post: {
						include: {
							user: true,
						},
					},
				},
			},
		},
	})
}

export const toggleLikePost = async (postId: number, userId: number = 1) => {
	if (await isLiked(postId, userId)) {
		await prisma.post.update({
			data: {
				likesCounter: { increment: -1 },
			},
			where: {
				id: postId,
			},
		})
		return await prisma.like.delete({
			where: {
				userId_postId: {
					userId,
					postId,
				},
			},
		})
	}

	await prisma.post.update({
		data: {
			likesCounter: { increment: 1 },
		},
		where: {
			id: postId,
		},
	})

	return await prisma.like.create({
		data: { postId, userId },
	})
}

export const isLiked = async (
	postId: number,
	userId: number = 1
): Promise<boolean> => {
	const like = await prisma.like.findFirst({
		where: {
			postId,
			userId,
		},
	})
	return Boolean(like)
}

export const addPost = async (data: Post) => {
	await prisma.post.create({
		data,
	})
}
