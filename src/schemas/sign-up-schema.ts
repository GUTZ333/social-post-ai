import { z } from 'zod';

const signUpAuthSchema = z.object({
  authUsername: z.string({ message: "Username is required." }).min(3, { message: "Username must be at least 3 characters long." }).max(20, { message: "Username must be at most 20 characters long." }).nonempty({ message: "Username is required." }),
  authMail: z.string({ message: "Email is required." }).email({ message: "Invalid email address." }).nonempty({ message: "Email is required." }),
  authPass: z.string({ message: "Password must be between 6 and 100 characters." }).min(6, { message: "Password must be at least 6 characters long." }).max(30, { message: "Password must be at most 30 characters long." }).nonempty({ message: "Password is required." }),
  authBirthDate: z.date({
    error: "Birth date is required.",
  }).refine((date) => {
    const today = new Date();
    return date <= today;
  }, {
    message: "Birth date cannot be in the future.",
  }).refine((date) => {
    const age = new Date().getFullYear() - date.getFullYear();
    return age >= 18;
  }, {
    message: "You must be at least 18 years old.",
  })
})

type typeSignUpAuthSchema = z.infer<typeof signUpAuthSchema>;

export { signUpAuthSchema, type typeSignUpAuthSchema };