import { z } from 'zod';

const signInAuthSchema = z.object({
  authMail: z.string({ message: "E-mail is required." }).nonempty({ message: "E-mail is required.." }).email({ message: "Invalid email address." }),
  authPass: z.string({ message: "Password must' be between 6 and 100 characters." }).nonempty({ message: "Password is required." }).min(6, { message: "Password must be at least 6 characters long." }).max(30, { message: "Password must be at most 30 characters long." }),
});

type typeSignInAuthSchema = z.infer<typeof signInAuthSchema>;

export { signInAuthSchema, type typeSignInAuthSchema };