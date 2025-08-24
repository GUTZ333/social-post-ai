"use server";

import { auth } from "@/lib/auth";


async function signInWithGoogle() {
  try {
    const { } = await auth.api.signInSocial({
      body: {
        provider: "google"
      },
      asResponse: true,
    })
  }
  catch(err: any) {
    const errors: Record<string, string> = {}
    if (err.code) {
      switch (err.code) {
        case "EMAIL_NOT_EXIST":
          errors.authMail = err.message
        case "PASSWORD_INVALID":
          errors.authPass = err.message
      }
    }
    if (Object.keys(errors).length > 0) {
      return errors
    }
  }
}

export { signInWithGoogle }