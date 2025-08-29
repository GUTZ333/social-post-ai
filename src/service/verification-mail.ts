import { auth } from "@/lib/auth";

async function verificationMail(token: string) {
  await auth.api.verifyEmail({
    query: {
      token
    }
  })
}

export { verificationMail }