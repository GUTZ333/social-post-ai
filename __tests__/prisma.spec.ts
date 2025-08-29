import { db } from "@/db/prisma";

describe("Prisma ORM", () => {
  test("connection successfully!!", async () => {
    await expect(db.$connect()).resolves.toBeUndefined()
  })

  afterAll(async () => {
    await db.$disconnect()
  })
})