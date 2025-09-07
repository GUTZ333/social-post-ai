import mongoose from "mongoose";
import "dotenv/config";
import { featuresModel } from "@/db/mongo";
import { SiZod } from "react-icons/si"

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

  test("add a new feature", async () => {
    const feature = featuresModel.create({ feature_name: "Zod", feature_desc: "Zod is a TypeScript-first schema declaration and validation library.", feature_icon_name: "SiZod" })
    expect(feature).resolves.toBeDefined();
  })
});
