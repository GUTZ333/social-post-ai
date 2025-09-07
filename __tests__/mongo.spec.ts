import mongoose from "mongoose";
import "dotenv/config";
import { featuresModel } from "@/db/mongo";

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

  test("add a new feature", async () => {
    const feature = await featuresModel.create({ feature_name: "React Hook Form", feature_desc: "React Hook Form is a library for managing form state in React applications.", feature_icon_name: "SiReacthookform" });
    expect(feature).toBeDefined();
  });
});
