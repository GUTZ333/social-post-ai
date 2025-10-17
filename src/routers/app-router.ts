import { router } from '../lib/trpc';
import { pinataRouter } from './pinata-router';

export const appRouter = router({
  pinataRouter
});

// Export type router type signature,
// NOT the router itself.
export type typeAppRouter = typeof appRouter;