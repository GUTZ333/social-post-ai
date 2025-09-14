import { caller } from "@/lib/trpc-caller"

describe("TRPC (TypeScript Remote Procedure Call)", () => {
  test("Querying an TRPC procedure", async () => {
    const result = await caller.helloWorld()
    expect(result).toBe("Hello World")
  })
})