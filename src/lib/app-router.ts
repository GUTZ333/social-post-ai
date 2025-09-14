import { procedure, router } from './trpc';
import { featuresModel } from '@/db/mongo';
import { FeatureZodSchema } from '@/schemas/feature-schema';
import mongoose from 'mongoose';

export const appRouter = router({
  helloWorld: procedure
    .query(() => {
      return "Hello World"
    }),
  features: procedure
  .output(FeatureZodSchema.array())
  .query(async () => {
    await mongoose.connect(process.env.DATABASE_MONGO_URL as string)
    return await featuresModel.find()
  })
});

// Export type router type signature,
// NOT the router itself.
export type typeAppRouter = typeof appRouter;