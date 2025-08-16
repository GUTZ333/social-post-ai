"use server";

import { trpcAxios } from "@/lib/trpc-axios";
import { typeSignInAuthSchema } from "@/schemas/sign-in-schema";

async function handleSignInAuthSubmit({ authMail, authPass }: typeSignInAuthSchema) {

  const login = await trpcAxios.auth.signIn.mutate({
    authMail,
    authPass
  })

  
}

export { handleSignInAuthSubmit };