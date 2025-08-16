import { z } from "zod";
import "dotenv/config";

const envsSchema = z.object({
  DATABASE_PRISMA_URL: z.string(),
  DATABASE_MONGO_URL: z.string(),
  RESEND_API_KEY: z.string(),
  RESEND_FROM: z.string(),
  INSTAGRAM_CLIENT_ID: z.string(),
  INSTAGRAM_CLIENT_SECRTET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRTET: z.string(),
  NEXT_URL: z.url()
})

const envs = envsSchema.parse(process.env)

export { envsSchema, envs };