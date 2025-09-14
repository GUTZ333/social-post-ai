import { z } from "zod";
import "dotenv/config";

export const envsSchema = z.object({
  NEXT_PUBLIC_RESEND_API_KEY: z.string(),
  NEXT_PUBLIC_RESEND_FROM: z.string(),
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string(),
  NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: z.string(),
  NEXT_PUBLIC_NEXT_URL: z.url(),
  NEXT_PUBLIC_BETTER_AUTH_URL: z.string(),
  NEXT_PUBLIC_BETTER_AUTH_SECRET: z.string(),
})

export const envs = envsSchema.parse(process.env);  
