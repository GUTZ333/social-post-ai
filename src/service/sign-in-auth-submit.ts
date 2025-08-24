"use server";

import { auth } from "@/lib/auth";
import { typeSignInAuthSchema } from "@/schemas/sign-in-schema";
import { BetterAuthError, } from "better-auth";

async function handleSignInAuthSubmit({ authMail, authPass }: typeSignInAuthSchema): Promise<{
  success: true
  data: Awaited<ReturnType<typeof auth.api.signInEmail>>
} | {
  success: false
  errors: BetterAuthError
}> {
  try {
    const data = await auth.api.signInEmail({
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
  catch (authError: any) {
    return {
      success: false,
      errors: authError as BetterAuthError
    }
  }
}

export { handleSignInAuthSubmit };