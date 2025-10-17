import { db } from "@/lib/prisma";

describe("Prisma ORM", () => {
  test("connection successfully!!", async () => {
    await expect(db.$connect()).resolves.toBeUndefined()
  })

  afterAll(async () => {
    await db.$disconnect()
  })
})