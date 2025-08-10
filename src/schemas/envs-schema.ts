import { z } from "zod";

const envsSchema = z.object({
  DATABASE_PRISMA_URL: z.string(),
  DATABASE_MONGO_URL: z.string()
})

const envs = envsSchema.parse(process.env)

export { envsSchema, envs };