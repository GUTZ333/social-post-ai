"use server";

import { auth } from "@/lib/auth";
import { typeSignInAuthSchema } from "@/schemas/sign-in-schema";
import { headers } from "next/headers";

export async function handleSignInAuthSubmit({ authMail, authPass }: typeSignInAuthSchema) {
  try {
    await auth.api.signInEmail({
      body: {
        email: authMail,
        password: authPass
      },
      headers: await headers(),
      method: "POST"
    })
  }
  catch (err: any) {
    console.log("erro na tentativa de login", err)
  }
}
