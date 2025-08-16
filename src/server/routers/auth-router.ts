import { createTRPCrouter, publicProcedure } from "../trpc";
import { z } from "zod";
import axios from "axios";
import { envs } from "@/schemas/envs-schema";
import { signInAuthSchema } from "@/schemas/sign-in-schema"
import { signUpAuthSchema } from "@/schemas/sign-up-schema";
import { error } from "console";

const authRouter = createTRPCrouter({
  signIn: publicProcedure
    .input(signInAuthSchema)
    .mutation(async ({ input }) => {
      try {
        // o application/x-www-form=urlencoded é uma forma de enviar dados em uma requisição HTTP, que é a melhor forma de usar ele no TRPC
        const response = await axios.post(`${envs.NEXT_URL}/api/auth/callback/credentials`, new URLSearchParams({
          csrfToken: "",
          callbackUrl: `${envs.NEXT_URL}/`,
          ...input
        }).toString(), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          withCredentials: true
        })

        return response.data
      }
      catch (err) {
        console.error("error in login", err)
      }
    }),

  // criando uma mutation que é uma rota que faz mutação(mudança)
  signOut: publicProcedure.mutation(async () => {
    try {
      await axios.post(`${envs.NEXT_URL}/api/auth/signout`, {}, {
        withCredentials: true
      })
    }
    catch (err) {
      console.error("error in logout", err)
    }
  })
  ,
  signUp: publicProcedure
    .input(signUpAuthSchema)
    .mutation(async({ input }) => {
      try {
        const response = await axios.post(`${envs.NEXT_URL}/api/auth/sign-up`, input, {
          headers: {
            "Content-Type": "application/json"
          }
        })

        return response.data
      }
      catch (err: any) {
        if (err.response.data) {
          console.log(err.response.data)
        }
        console.error("error in Sign Up: ", err)
      }
    })
})

export { authRouter }