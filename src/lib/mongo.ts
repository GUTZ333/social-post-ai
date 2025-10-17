import { PrismaClient } from "@prisma/client-mongo"

const mongo = new PrismaClient()

export { mongo }