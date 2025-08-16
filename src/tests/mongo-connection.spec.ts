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

  test("create a new feature", async () => {
    await features.create({ feature_name: "GPT", feature_desc: "AI chatbot that generates human-like text responses.",feature_icon_name: "SiTrpc", feature_image_url_dark: "/images/dall-e-dark.svg", feature_image_url_light: "/images/dall-e-light.svg" })
  })

  test("shold fetch all features", async () => {
    const tools = await features.find()
    console.log(tools)
    expect(tools.length).toBeGreaterThan(0)
  })
});
