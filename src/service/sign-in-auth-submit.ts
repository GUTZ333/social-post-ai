"use server";

import { typeSignInAuthSchema } from "@/schemas/sign-in-schema";

async function handleSignInAuthSubmit(data: typeSignInAuthSchema) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Sign In Auth Data:", data);
}

export { handleSignInAuthSubmit };