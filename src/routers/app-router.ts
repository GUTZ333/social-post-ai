import { z } from 'zod';
import { procedure, router } from '../lib/trpc';
import { dependenciesRouter } from './dependencies-router';
import { pinataRouter } from './pinata-router';

export const appRouter = router({
  helloWorld: procedure
    .input(z.string())
    .output(z.string())
    .query(({ input }) => {
      return input
    }),
  pinataRouter,
  dependenciesRouter
});

// Export type router type signature,
// NOT the router itself.
export type typeAppRouter = typeof appRouter;