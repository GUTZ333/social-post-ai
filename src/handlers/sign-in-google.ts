import { authClient } from "@/lib/auth-client"

export async function handleSignInGoogle() {
  // Método de login social com o provedor do Google
  try {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/dashboard`,
      requestSignUp: true,
      scopes: ["https://www.googleapis.com/auth/user.birthday.read", "email", "profile"],
    })
    console.log(data)
  }
  catch (err) {
    console.error(err)
  }

}