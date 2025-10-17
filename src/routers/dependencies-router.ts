import { mongo } from "@/lib/mongo";
import { procedure, router } from "@/lib/trpc";
import { z } from "zod";

export const dependenciesRouter = router({
  dependencies: procedure
    .output(
      z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          description: z.string()
        })
      )
    )
    .query(async() => {
      const dependencies = await mongo.dependencies.findMany()
      return dependencies
    })
})