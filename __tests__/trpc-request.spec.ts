import { appRouter } from "@/lib/app-router"
import { trpc } from "@/lib/trpc-axios"

describe("TRPC (TypeScript Remote Procedure Call)", () => {
  test("Querying an TRPC procedure", async () => {
    const caller = appRouter.createCaller({})
    const result = await caller.helloWorld()
    expect(result).toBe("Hello World")
  })
})