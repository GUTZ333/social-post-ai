import { createTRPCrouter } from "../trpc";
import { featureRouter } from "./features-router";

const appRouter = createTRPCrouter({
  feature_router: featureRouter
})

export type typeAppRouter = typeof appRouter

export { appRouter }