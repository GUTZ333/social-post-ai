import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { appRouter, type typeAppRouter } from './app-router';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCClient<typeAppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NEXT_URL as string,
    }),
  ],
});

export const caller = appRouter.createCaller({})