import { z } from 'zod';

const signInAuthSchema = z.object({
  authMail: z.string({ message: "Email is required" }).email({ message: "Invalid email address" }).nonempty({ message: "This field cannot be empty." }),
  authPass: z.string({ message: "Password must' be between 6 and 100 characters" }).min(6, { message: "Password must be at least 6 characters long" }).max(30, { message: "Password must be at most 30 characters long" }).nonempty({ message: "Password is required" }),
});

type typeSignInAuthSchema = z.infer<typeof signInAuthSchema>;

export { signInAuthSchema, type typeSignInAuthSchema };