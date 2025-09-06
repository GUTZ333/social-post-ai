"use server"

import { auth } from "@/lib/auth";
import { typeForgotPasswordSchema } from "@/schemas/forgot-password-schema";
import { BetterAuthError } from "better-auth";
import { headers } from "next/headers";

export async function handleForgotPassword({ toMail }: typeForgotPasswordSchema): Promise<{ success: true, data: Awaited<ReturnType<typeof auth.api.forgetPassword>> } | { success: false, error: BetterAuthError["message"] }> {
  try {
    const data = await auth.api.forgetPassword({
      body: {
        email: toMail,
        redirectTo: `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/reset-password`
      },
      headers: await headers(),
      method: "POST",
    })
    return {
      success: true,
      data
    }
  }
  catch (err) {
    console.error(err);
    return {
      success: false,
      error: (err as BetterAuthError).message
    }
  }
}