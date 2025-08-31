import { z } from "zod";
import "dotenv/config";

const envsSchema = z.object({
  RESEND_API_KEY: z.string(),
  RESEND_FROM: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NEXT_URL: z.url(),
  BETTER_AUTH_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
})

const envs = envsSchema.parse(process.env)

export { envsSchema, envs };