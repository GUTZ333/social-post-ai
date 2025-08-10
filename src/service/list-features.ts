import { modelFeature } from "@/lib/mongo";

async function getFeatures() {
  return await modelFeature.find()
}

export { getFeatures as features };