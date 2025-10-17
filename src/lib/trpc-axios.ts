import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { type typeAppRouter } from '../routers/app-router';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCClient<typeAppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_NEXT_URL!}/api/trpc`,
    }),
  ],
});
