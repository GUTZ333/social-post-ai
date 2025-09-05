import z from "zod";

export const resetPasswordSchema = z.object({
  currentPass: z.string().nonempty({ message: "the password cannot be empty." }).min(6, {
    message: "Password must be at least 6 characters long."
  }).max(40, {
    message: "Password must be at most 30 characters long."
  })
})

export type typeSetPasswordSchema = z.infer<typeof resetPasswordSchema>