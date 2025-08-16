import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create();

const createTRPCrouter = trpc.router
const publicProcedure = trpc.procedure

export { createTRPCrouter, publicProcedure  }