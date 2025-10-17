import { router } from '../lib/trpc';
import { dependenciesRouter } from './dependencies-router';
import { pinataRouter } from './pinata-router';

export const appRouter = router({
  pinataRouter,
  dependenciesRouter
});

// Export type router type signature,
// NOT the router itself.
export type typeAppRouter = typeof appRouter;