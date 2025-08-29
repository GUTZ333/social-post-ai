import { featuresModel } from "@/db/mongo";
import { trpcAxios } from "@/lib/trpc-axios";
import { envs } from "@/schemas/envs-schema";
import mongoose from "mongoose";

describe("Mongo DB.", () => {
  beforeAll(async () => {
    await mongoose.connect(envs.DATABASE_MONGO_URL);
  }); // até 20s para conectar

  afterAll(async () => {
    await mongoose.disconnect();
  }); // até 10s para desconectar

  test("connection successfully!!", () => {
    expect(mongoose.connection.readyState).toBe(1);
  });

  test("List Features", async () => {
    const response = trpcAxios.feature_router.getFeatures.query()
    expect(Array.isArray(response)).toBe(true)
  })
});
