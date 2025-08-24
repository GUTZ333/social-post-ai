"use server";

import { auth } from "@/lib/auth";
import { resend } from "@/lib/resend";
import { envs } from "@/schemas/envs-schema";
import { typeForgotPasswordSchema } from "@/schemas/forgot-password-schema";

async function handleForgotPasswordSubmit({ toMail }: typeForgotPasswordSchema) {
  await auth.api.requestPasswordReset({
    body: {
      email: toMail
    }
  })
}

export { handleForgotPasswordSubmit };