import { publicProcedure, router } from './trpc';

export const appRouter = router({
  helloWorld: publicProcedure
    .query(() => {
      return "Hello World"
    })
});

// Export type router type signature,
// NOT the router itself.
export type typeAppRouter = typeof appRouter;