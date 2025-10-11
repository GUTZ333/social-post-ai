import { authClient } from "@/lib/auth-client";

export async function handleSignOut() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess({}) {
        window.location.href = "/sign-in"
      },
    }
  })
}