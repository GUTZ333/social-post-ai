import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { google } from "@ai-sdk/google"
import "dotenv/config"

describe("AI SDK Vercel", () => {
  test("agent OpenAI", async () => {
    const { text } = await generateText({
      model: openai("gpt-4"),
      prompt: "Say Hello World",
    })

    expect(text).toBeDefined()
  })

  test("agent Gemini", async () => {
    const { text } = await generateText({
      model: google("gemini-2.0-flash"),
      prompt: "Say Hello World",
    })
    expect(text).toBeDefined()
  })
})