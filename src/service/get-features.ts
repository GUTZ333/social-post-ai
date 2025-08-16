import { features } from "@/db/mongo";

async function getFeatures() {
  return await features.find()
}

export { getFeatures };
