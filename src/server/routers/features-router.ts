import { envs } from "@/schemas/envs-schema";
import { createTRPCrouter, publicProcedure } from "../trpc";

const featureRouter = createTRPCrouter({
  feature: publicProcedure.query(async ({ }) => {
    const response = await fetch(`${envs.NEXT_URL}/api/features`, {
      method: "GET"
    })
    const data = await response.json();
    return data
  })
})

export { featureRouter }