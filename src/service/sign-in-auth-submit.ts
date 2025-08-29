"use server";

import { auth } from "@/lib/auth";
import { typeSignInAuthSchema } from "@/schemas/sign-in-schema";
import { BetterAuthError, } from "better-auth";
import { APIError } from "better-auth/api";
import { headers } from "next/headers";

async function handleSignInAuthSubmit({ authMail, authPass }: typeSignInAuthSchema): Promise<{
  success: true
  data: Awaited<ReturnType<typeof auth.api.signInEmail>>
} | {
  success: false
  errors: APIError
}> {
  try {
    const data = await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email: authMail,
        password: authPass
      }
    })
    return {
      success: true,
      data
    }
  }
  catch (err: any) {
    return {
      success: false,
      errors: err as APIError
    }
  }
}

export { handleSignInAuthSubmit };