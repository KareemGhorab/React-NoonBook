import { PrismaClient } from "@prisma/client"
import User from "../interfaces/user"

const prisma = new PrismaClient()

export const fetchUser = async (id: number): Promise<User | null> => {
	const dbuser = await prisma.user.findFirst({
		where: {
			id,
		},
	})

	if (!dbuser) return null

	const { username, image } = dbuser

	return {
		id,
		username,
		profilePictureUrl: image,
	}
}

export const addUser = async (data: { username: string; image: string }) => {
	await prisma.user.create({
		data,
	})
}
