import { z } from "zod";

const forgotPasswordSchema = z.object({
  toMail: z.string().nonempty({ message: "E-mail is required." }).email({ message: "Invalid email address." })
});

type typeForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export { forgotPasswordSchema, type typeForgotPasswordSchema };