"use server";

import { auth } from "@/lib/auth";
import { typeSignUpAuthSchema } from "@/schemas/sign-up-schema";
import { headers } from "next/headers";

export async function handleSignUpAuthSubmit({ authBirthDate, authMail, authPass, authUsername }: typeSignUpAuthSchema) {
  try {
    await auth.api.signUpEmail({
      body: {
        name: authUsername,
        email: authMail,
        password: authPass,
        birth_date: authBirthDate
      },
      headers: await headers(),
      method: "POST"
    })
  }
  catch (err) {
    console.log(err)
  }
}
