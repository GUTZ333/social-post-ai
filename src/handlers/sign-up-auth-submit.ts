"use server";

import { auth } from "@/lib/auth";
import { typeSignUpAuthSchema } from "@/schemas/sign-up-schema";
import { BetterAuthError } from "better-auth";
import { headers } from "next/headers";

export async function handleSignUpAuthSubmit({ authBirthDate, authMail, authPass, authUsername }: typeSignUpAuthSchema): Promise<{ success: true, data: Awaited<ReturnType<typeof auth.api.signUpEmail>> } | { success: false, error: BetterAuthError["message"] }> {
  try {
    return {
      success: true,
      data: await auth.api.signUpEmail({
        body: {
          name: authUsername,
          email: authMail,
          password: authPass,
          birth_date: authBirthDate,
          callbackURL: `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/dashboard`,
        },
        headers: await headers(),
        method: "POST"
      })
    }
  }
  catch (err: any) {
    console.log(err.message)
    return {
      success: false,
      error: err.message
    }
  }
}
