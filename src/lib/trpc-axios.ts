import { envs } from "@/schemas/envs-schema";
import { typeAppRouter } from "@/server/routers/_app-router";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import axios from "axios";

const trpcAxios = createTRPCProxyClient<typeAppRouter>({
  links: [
    httpBatchLink({
      url: envs.NEXT_URL,
      async fetch(input, init) {
        const { method = "GET", body, headers } = init || {};

        const axiosHeaders: Record<string, string> = {};
        if (headers) {
          if (headers instanceof Headers) {
            headers.forEach((value, key) => {
              axiosHeaders[key] = value;
            });
          } else if (Array.isArray(headers)) {
            headers.forEach(([key, value]) => {
              axiosHeaders[key] = value;
            });
          } else {
            Object.assign(axiosHeaders, headers);
          }
        }

        const res = await axios({
          url: input.toString(),
          method,
          data: body,       // envia o corpo da requisição
          headers: axiosHeaders,          // envia os headers
          withCredentials: true, // mantém cookies do NextAuth
        });

        // Retorna uma Response simulando fetch
        return new Response(JSON.stringify(res.data), {
          status: res.status,
          statusText: res.statusText,
        });
      }
    })
  ]
})

export { trpcAxios }