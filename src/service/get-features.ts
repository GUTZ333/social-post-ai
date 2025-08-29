import { trpcAxios } from "@/lib/trpc-axios"

async function getFeatures() {
  return await trpcAxios.feature_router.getFeatures.query()
}

export { getFeatures }