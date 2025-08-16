import { envs } from "@/schemas/envs-schema";
import { featureSchema } from "@/schemas/feature-schema";
import { model, connect } from "mongoose";

async function connectDB() {
  await connect(envs.DATABASE_MONGO_URL);
}

const features = model("features", featureSchema);

export { connectDB, features  };
