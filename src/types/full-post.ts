import { User, Post } from "@prisma/client";

type FullPost = (Post & {user: User})

export default FullPost