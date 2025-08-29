import { auth } from "@/lib/auth"

async function handleChangePassword(password: string) {
  await auth.api.resetPassword({
    body: {
      newPassword: password
    },
  })
}

export { handleChangePassword }