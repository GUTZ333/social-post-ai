"use server"

import { auth } from "@/lib/auth";
import { typeForgotPasswordSchema } from "@/schemas/forgot-password-schema";
import { headers } from "next/headers";

export async function handleForgotPassword({ toMail }: typeForgotPasswordSchema) {
  try {
    await auth.api.forgetPassword({
      body: {
        email: toMail,
        redirectTo: `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/reset-password`
      },
      headers: await headers(),
      method: "POST",
    })
  }
  catch (err) {
    console.error(err);
  }
}