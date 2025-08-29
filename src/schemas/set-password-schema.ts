import z from "zod";

const setPasswordSchema = z.object({
  currentPass: z.string().nonempty({ message: "the password cannot be empty." }).min(6, {
    message: "Password must be at least 6 characters long."
  }).max(40, {
    message: "Password must be at most 30 characters long."
  })
})

type typeSetPasswordSchema = z.infer<typeof setPasswordSchema>

export { setPasswordSchema, type typeSetPasswordSchema }