import { createTRPCrouter } from "../trpc";
import { authRouter } from "./auth-router";

const appRouter = createTRPCrouter({
  auth: authRouter
})

type typeAppRouter = typeof appRouter

export { appRouter, type typeAppRouter }