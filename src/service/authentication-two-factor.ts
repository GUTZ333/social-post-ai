import { auth } from "@/lib/auth"
import { headers } from "next/headers"

async function authenticationTwoFactor() {
  const data = await auth.api.enableTwoFactor({
    body: {
      password: "",
      issuer: "social-post-ai"
    },
    headers: await headers()
  })
}

export { authenticationTwoFactor }