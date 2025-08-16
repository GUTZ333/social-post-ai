import { z } from "zod";
import "dotenv/config";

const envsSchema = z.object({
  DATABASE_PRISMA_URL: z.string(),
  DATABASE_MONGO_URL: z.string(),
  RESEND_API_KEY: z.string(),
  RESEND_FROM: z.string()
})

const envs = envsSchema.parse(process.env)

export { envsSchema, envs };