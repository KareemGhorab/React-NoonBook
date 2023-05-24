import { PrismaClient } from "@prisma/client"
import User from "../interfaces/user"

const prisma = new PrismaClient()

const PAGE_SIZE = 15

export const fetchUser = async (
	id: number,
	likedPage: number
): Promise<User | null> => {
	if (likedPage < 1) likedPage = 1

	const dbuser = await prisma.user.findFirst({
		where: {
			id,
		},
		include: {
			likes: {
				skip: PAGE_SIZE * (likedPage - 1),
				take: PAGE_SIZE,
				
			},
		},
	})

	if (!dbuser) return null

	const { username, image } = dbuser

	return {
		id,
		username,
		profilePictureUrl: image,
		likedPosts,
	}
}

export const addUser = async (data: { username: string; image: string }) => {
	await prisma.user.create({
		data,
	})
}
