"use server"

import { User, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const fetchUser = async (id: number = 1): Promise<User | null> => {
	const user = await prisma.user.findFirst({
		where: {
			id,
		},
	})

	return user
}

export const addUser = async (data: User) => {
	await prisma.user.create({
		data,
	})
}
