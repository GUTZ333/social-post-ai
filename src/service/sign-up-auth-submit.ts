"use server";

import { typeSignUpAuthSchema } from "@/schemas/sign-up-schema";

async function handleSignUpAuthSubmit(data: typeSignUpAuthSchema) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Sign Up Auth Data:", data);
}

export { handleSignUpAuthSubmit };