import { publicProcedure, router } from './trpc';

const appRouter = router({
  helloWorld: publicProcedure
  .query(async () => {
    return "Hello World"
  })
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;