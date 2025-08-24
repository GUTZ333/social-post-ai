import { createTRPCrouter } from "../trpc";

const appRouter = createTRPCrouter({
  
})

export type typeAppRouter = typeof appRouter

export { appRouter }