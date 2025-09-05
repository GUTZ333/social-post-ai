import { envs } from "@/schemas/envs-schema";
import { createTRPCrouter, publicProcedure } from "../trpc";
import { } from "@/db/mongo";
import { FeatureZodSchema } from "@/schemas/feature-schema";

const featureRouter = createTRPCrouter({
  getFeatures: publicProcedure
    .output(FeatureZodSchema.array())
    .query(async () => {
      try {
        const response = await fetch(`${envs.NEXT_URL}/api/features`, {
          method: "GET"
        })
        const data = await response.json();
        return data
      }
      catch (err) {

      }
    })
})

export { featureRouter }