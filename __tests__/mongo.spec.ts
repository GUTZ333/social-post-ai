import mongoose from "mongoose";
import "dotenv/config";
import { caller } from "@/lib/trpc-caller";

describe("Mongo DB.", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE_MONGO_URL as string);
  }, 3000);

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test("connection successfully!!", () => {
    expect(mongoose.connection.readyState).toBe(1);
  });

  test("Features of the aplication in TRPC procedure", async () => {
    const result = await caller.features()
    expect(Array.isArray(result)).toBe(true)
  }, 10000)
});
