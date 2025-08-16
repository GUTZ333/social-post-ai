import { features } from "@/db/mongo";
import { envs } from "@/schemas/envs-schema";
import mongoose from "mongoose";

describe("Mongo DB connection.", () => {
  beforeAll(async () => {
    await mongoose.connect(envs.DATABASE_MONGO_URL);
  }, 20000); // até 20s para conectar

  afterAll(async () => {
    await mongoose.disconnect();
  }, 10000); // até 10s para desconectar

  test("connection successfully!!", () => {
    expect(mongoose.connection.readyState).toBe(1);
  });

  test("shold fetch all features", async() => {
    const tools = await features.find()

    expect(tools.length).toBeGreaterThan(0)
  })
});
