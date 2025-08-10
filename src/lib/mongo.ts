import { envs } from "@/schemas/envs-schema";
import { featureSchema } from "@/schemas/feature-schema";
import { model, connect } from "mongoose";

await connect(envs.DATABASE_MONGO_URL, {
  
})

const modelFeature = model("features", featureSchema) 

export { modelFeature };