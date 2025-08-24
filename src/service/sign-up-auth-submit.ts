"use server";

import { auth } from "@/lib/auth";
import { typeSignUpAuthSchema } from "@/schemas/sign-up-schema";
import { BetterAuthError } from "better-auth";

async function handleSignUpAuthSubmit({ authBirthDate, authMail, authPass, authUsername }: typeSignUpAuthSchema): Promise<
  {
    success: true
    data: Awaited<ReturnType<typeof auth.api.signUpEmail>>
  } | {
    success: false
    errors: BetterAuthError
  }> {
  try {
    const data = await auth.api.signUpEmail({
      body: {
        email: authMail,
        name: authUsername,
        password: authPass,
        profile_auth_birth_date: authBirthDate
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
      errors: err as BetterAuthError
    }
  }
}

export { handleSignUpAuthSubmit };