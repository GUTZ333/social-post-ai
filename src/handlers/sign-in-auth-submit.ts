"use server";

import { auth } from "@/lib/auth";
import { typeSignInAuthSchema } from "@/schemas/sign-in-schema";
import { BetterAuthError } from "better-auth";
import { headers } from "next/headers";

export async function handleSignInAuthSubmit({ authMail, authPass }: typeSignInAuthSchema): Promise<{ success: true, data: Awaited<ReturnType<typeof auth.api.signInEmail>> } | { success: false, error: BetterAuthError["message"] }> {
  try {
    return {
      success: true,
      data: await auth.api.signInEmail({
        body: {
          email: authMail,
          password: authPass,
          callbackURL: `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/dashboard`,
        },
        headers: await headers(),
        method: "POST",
      })
    }
  }
  catch (err: any) {
    return {
      success: false, 
      error: err.message
    }
  }
}
