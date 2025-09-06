import { db } from "@/db/prisma"

async function main() {
  await db.user.deleteMany({})
}
main()