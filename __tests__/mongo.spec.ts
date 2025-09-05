import { featuresModel } from "@/db/mongo";
import { trpcAxios } from "@/lib/trpc-axios";
import mongoose from "mongoose";

describe("Mongo DB.", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE_MONGO_URL as string);
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
