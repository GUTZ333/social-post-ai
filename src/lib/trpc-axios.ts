import { typeAppRouter } from "@/server/routers/_app-router";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { envs } from "@/schemas/envs-schema";

export const trpcAxios = createTRPCProxyClient<typeAppRouter>({
  links: [
    httpBatchLink({
      url: `${envs.NEXT_URL}/api/trpc`,
      fetch: (input, init) => fetch(input, { ...init, credentials: "include" }),
    }),
  ],
});
