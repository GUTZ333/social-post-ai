"use server";

import { typeForgotPasswordSchema } from "@/schemas/forgot-password-schema";

async function handleForgotPasswordSubmit(data: typeForgotPasswordSchema) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(data);
}

export { handleForgotPasswordSubmit };