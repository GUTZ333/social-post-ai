import { featureMongoSchema } from "@/schemas/feature-schema";
import { model } from "mongoose";

const featuresModel = model("features", featureMongoSchema);

export { featuresModel, };
