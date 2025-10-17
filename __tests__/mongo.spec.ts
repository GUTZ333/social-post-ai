import { mongo } from "@/lib/mongo";

describe("Mongo DB", () => {
  test("connection successfully", async () => {
    await expect(mongo.$connect()).resolves.toBeUndefined()
  })

  test("add a new dependencie", async () => {
    const newDependencie = await mongo.dependencies.create({
      data: {
        name: "Zod",
        description: "Zod is a TypeScript-first schema validation library. It's used to define the expected structure and types of data (schemas) and validate that data at runtime, ensuring type safety and correctness for inputs like API responses or forms. It also automatically infers TypeScript types from the schemas."
      }
    })
    await expect(newDependencie).resolves.toBeDefined()
  })

  beforeAll(async () => {
    await mongo.$disconnect()
  })
})